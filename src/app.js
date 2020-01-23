import * as d3 from 'd3';
import parseData from "./utils/parseData";
import parseCsvAndSetYear from "./utils/parseCsvAndSetYear";
import appendPlanetSvgOverviewPage from "./utils/appendPlanetSvgOverviewPage";
import appendTextOverviewPage from "./utils/appendTextOverviewPage";
import appendHeaderDetailPage from "./utils/appendHeaderDetailPage";
import appendProfitChartDetailPage from "./utils/appendProfitChartDetailPage";
import appendSalaryChartDetailPage from "./utils/appendSalaryChartDetailPage";
import appendDataInTextDetailPage from "./utils/appendDataInTextDetailPage";
import appendContactLinkDetailPage from "./utils/appendContactLinkDetailPage";

function createViz(givenData, randomPlace) {
    d3.select('#parent').selectAll('div').remove();
    
    let parent = d3.select('#parent')
    let modal =  d3.select('#detailPageContent')

    let maindivs = parent.selectAll('div').data(givenData).enter().append('div').append('div').attr('class', 'planeetDiv');

    maindivs.on('click', function(d) {
        d3.select('#detailPageContent').selectAll('div').remove();
        d3.select('#detailPageContent').selectAll('a').remove();

        document.getElementById("detailPage").style.display = "block";
        document.getElementById("body").style.overflow = "hidden";

        let detailPageHeader = modal.append('div').attr('class', 'detailPageHeader');
        appendHeaderDetailPage(detailPageHeader, d.bedrijfsnaam, d.perc_winst, d.geestelijkegezondheidszorg, d.thuiszorg, d.gehandicaptenzorg);

        let detailPageProfitChart = modal.append('div').attr('class', 'detailPageProfitChart');
        appendProfitChartDetailPage(detailPageProfitChart, d.perc_winst);

        let detailPageSalaryChart = modal.append('div').attr('class', 'detailPageSalaryChart');
        appendSalaryChartDetailPage(detailPageSalaryChart, d.perc_loon);

        let detailPageDataInText = modal.append('div').attr('class', 'detailPageDataInText');
        appendDataInTextDetailPage(detailPageDataInText, d.omzet, d.winst, d.personeelskostentotaal);

        let detailPageContactLink = modal.append('div').attr('class', 'detailPageContactLink');
        appendContactLinkDetailPage(detailPageContactLink);
    });

    // This method of changing the drawing order was provided by Gerardo Furtado at https://stackoverflow.com/a/59808405/12734791
    maindivs.each(function(_, i) {
        if (i % 2) {
            appendTextOverviewPage(d3.select(this))
            appendPlanetSvgOverviewPage(d3.select(this))
        } else {
            appendPlanetSvgOverviewPage(d3.select(this))
            appendTextOverviewPage(d3.select(this))
        }
    });

    function errorMessage(){
        if (givenData.length == 0){
            parent.append('div')
                  .append('p')
                  .attr('class', 'errorMessage')
                  .text('Geen resultaat gevonden, check de spelling of probeer een andere stad/plaats.');
        }
    }

    errorMessage();

    let placeForRandomPlace = randomPlace.toLowerCase();
    let placeForRandomPlaceCapitalized = placeForRandomPlace.charAt(0).toUpperCase() + placeForRandomPlace.slice(1)

    parent.append('div')
          .attr('id', 'randomPlace')
          .append('p')
          .text('Misschien is het zorgstelsel van '+ placeForRandomPlaceCapitalized +' interessant?');
};

function passAllFunctions(){
    let givenValue = document.getElementById("userEnteredPlace").value;
    data.then(result => {
        createViz(parseData(result, givenValue), getRandomCity(result))
    });
};

const data = parseCsvAndSetYear(2018);

function getRandomCity(data){
    return data[Math.floor(Math.random() * 1586) + 1].plaats
};

document.getElementById("closeDetailPage").onclick = function() {
    document.getElementById("detailPage").style.display = "none";
    document.getElementById("body").style.overflow = "auto";
};

document.getElementById('searchFieldForm').addEventListener("submit", function(event){
    event.preventDefault();
    passAllFunctions();
});

window.onscroll = function() {stickyForm()};

let form = document.getElementById("searchFieldForm");
let sticky = form.offsetTop-50;

function stickyForm() {
  if (window.pageYOffset > sticky) {
    form.classList.add("sticky");
  } else {
    form.classList.remove("sticky");
  }
};