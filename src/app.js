import * as d3 from 'd3';
import parseData from "./utils/parseData";
import parseCsvAndSetYear from "./utils/parseCsvAndSetYear";
import appendPlanetSvgOverviewPage from "./utils/appendPlanetSvgOverviewPage";
import appendTextOverviewPage from "./utils/appendTextOverviewPage";
import appendProfitChartDetailPage from "./utils/appendProfitChartDetailPage";
import appendSalaryChartDetailPage from "./utils/appendSalaryChartDetailPage";
import appendDataInTextDetailPage from "./utils/appendDataInTextDetailPage";

function createViz(givenData, randomPlace) {
    // console.log("Create viz is running...");
    // console.log("This is given data at the moment of createViz firing: ", givenData);

    d3.select('#parent').selectAll('div').remove();
    let parent = d3.select('#parent')
    let maindivs = parent.selectAll('div').data(givenData).enter().append('div').append('div').attr('class', 'planeetDiv');
    let modal =  d3.select('#detailPageContent')

    function errorMessage(){
        if (givenData.length == 0){
            parent.append('div')
                  .append('p')
                  .attr('class', 'errorMessage')
                  .text('Geen resultaat gevonden, check de spelling of probeer een andere stad/plaats.');
        }
    }

    maindivs.on('click', function(d) {
        console.log(d.perc_winst);
        d3.select('#detailPageContent').selectAll('div').remove();
        d3.select('#detailPageContent').selectAll('a').remove();
        document.getElementById("detailPage").style.display = "block";
        document.getElementById("body").style.overflow = "hidden";

        modal.append('div')
             .attr('class', 'detailPageTitleWrap')
             .append('h2')
             .text(d.bedrijfsnaam);

        modal.append('div')
             .attr('class', 'detailPageSubTitleWrap')
             .append('p')
             .text(function(){
                if(d.geestelijkegezondheidszorg == 'ja' && d.gehandicaptenzorg == 'NA' && d.thuiszorg == 'NA') {
                    return "Geestelijke gezondheidszorg";
                } else if(d.geestelijkegezondheidszorg == 'NA' && d.gehandicaptenzorg == 'ja' && d.thuiszorg == 'NA') {
                    return "Gehandicaptenzorg";
                } else if(d.geestelijkegezondheidszorg == 'NA' && d.gehandicaptenzorg == 'NA' && d.thuiszorg == 'ja') {
                    return "Thuiszorg";
                } else if(d.geestelijkegezondheidszorg == 'ja' && d.gehandicaptenzorg == 'ja' && d.thuiszorg == 'NA') {
                    return "Geestelijke gezondheidszorg | Gehandicaptenzorg";
                } else if(d.geestelijkegezondheidszorg == 'ja' && d.gehandicaptenzorg == 'NA' && d.thuiszorg == 'ja') {
                    return "Geestelijke gezondheidszorg | Thuiszorg";
                } else if(d.geestelijkegezondheidszorg == 'NA' && d.gehandicaptenzorg == 'ja' && d.thuiszorg == 'ja') {
                    return "Gehandicaptenzorg | Thuiszorg";
                } else if(d.geestelijkegezondheidszorg == 'ja' && d.gehandicaptenzorg == 'ja' && d.thuiszorg == 'ja') {
                    return "Geestelijke gezondheidszorg | Gehandicaptenzorg | Thuiszorg";
                }
             });

        modal.append('div')
            .attr('class', 'detailPageSvgDiv')
            .append('svg')
            .attr("width", function() {
                if (d.perc_winst < 1 || d.perc_winst == 'NA' || d.perc_winst == '-Inf') {
                    return 30;
                } else if (((Math.sqrt((d.perc_winst)/(Math.PI)))*45) > 180) {
                    return 180;
                } else if (((Math.sqrt((d.perc_winst)/(Math.PI)))*45) < 30) {
                    return 30;
                } else {
                    return ((Math.sqrt((d.perc_winst)/(Math.PI)))*45)
                }
            })
            .attr("height", function() {
                if (d.perc_winst < 1 || d.perc_winst == 'NA' || d.perc_winst == '-Inf') {
                    return 30;
                } else if (((Math.sqrt((d.perc_winst)/(Math.PI)))*45) > 180) {
                    return 180;
                } else if (((Math.sqrt((d.perc_winst)/(Math.PI)))*45) < 30) {
                    return 30;
                } else {
                    return ((Math.sqrt((d.perc_winst)/(Math.PI)))*45)
                }
            })
            .append('circle')
            .attr("cx", function() {
                if (d.perc_winst < 1 || d.perc_winst == 'NA' || d.perc_winst == '-Inf') {
                    return 15;
                } else if (((Math.sqrt((d.perc_winst)/(Math.PI)))*22.5) > 90) {
                    return 90;
                } else if (((Math.sqrt((d.perc_winst)/(Math.PI)))*22.5) < 15) {
                    return 15;
                } else {
                    return ((Math.sqrt((d.perc_winst)/(Math.PI)))*22.5)
                }
            })
            .attr("cy", function() {
                if (d.perc_winst < 1 || d.perc_winst == 'NA' || d.perc_winst == '-Inf') {
                    return 15;
                } else if (((Math.sqrt((d.perc_winst)/(Math.PI)))*22.5) > 90) {
                    return 90;
                } else if (((Math.sqrt((d.perc_winst)/(Math.PI)))*22.5) < 15) {
                    return 15;
                } else {
                    return ((Math.sqrt((d.perc_winst)/(Math.PI)))*22.5)
                }
            })
            .attr("r", function() {
                if (d.perc_winst < 1 || d.perc_winst == 'NA' || d.perc_winst == '-Inf') {
                    return 15;
                } else if (((Math.sqrt((d.perc_winst)/(Math.PI)))*22.5) > 90) {
                    return 90;
                } else if (((Math.sqrt((d.perc_winst)/(Math.PI)))*22.5) < 15) {
                    return 15;
                } else {
                    return ((Math.sqrt((d.perc_winst)/(Math.PI)))*22.5)
                }
            })
            .style("fill", function() {
                if(d.geestelijkegezondheidszorg == 'ja' && d.gehandicaptenzorg == 'NA' && d.thuiszorg == 'NA') {
                    return "url(#Rood)";
                } else if(d.geestelijkegezondheidszorg == 'NA' && d.gehandicaptenzorg == 'ja' && d.thuiszorg == 'NA') {
                    return "url(#Geel)";
                } else if(d.geestelijkegezondheidszorg == 'NA' && d.gehandicaptenzorg == 'NA' && d.thuiszorg == 'ja') {
                    return "url(#Groen)";
                } else if(d.geestelijkegezondheidszorg == 'ja' && d.gehandicaptenzorg == 'ja' && d.thuiszorg == 'NA') {
                    return "url(#GeelRood)";
                } else if(d.geestelijkegezondheidszorg == 'ja' && d.gehandicaptenzorg == 'NA' && d.thuiszorg == 'ja') {
                    return "url(#GroenRood)";
                } else if(d.geestelijkegezondheidszorg == 'NA' && d.gehandicaptenzorg == 'ja' && d.thuiszorg == 'ja') {
                    return "url(#GeelGroen)";
                } else if(d.geestelijkegezondheidszorg == 'ja' && d.gehandicaptenzorg == 'ja' && d.thuiszorg == 'ja') {
                    return "url(#RoodGeelGroen)";
                }
        });

        let detailPageProfitChart = modal.append('div').attr('class', 'detailPageProfitChart');
        appendProfitChartDetailPage(detailPageProfitChart, d.perc_winst);

        let detailPageSalaryChart = modal.append('div').attr('class', 'detailPageSalaryChart');
        appendSalaryChartDetailPage(detailPageSalaryChart, d.perc_loon);

        let detailPageDataInText = modal.append('div').attr('class', 'detailPageDataInText');
        appendDataInTextDetailPage(detailPageDataInText, d.omzet, d.winst, d.personeelskostentotaal)
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

    errorMessage();

    let placeForRandomPlace = randomPlace.toLowerCase();
    let placeForRandomPlaceCapitalized = placeForRandomPlace.charAt(0).toUpperCase() + placeForRandomPlace.slice(1)

    parent.append('div')
          .attr('id', 'randomPlace')
          .append('p')
          .text('Misschien is het zorgstelsel van '+ placeForRandomPlaceCapitalized +' interessant?');
};

function passAllFunctions(){
    var givenValue = document.getElementById("userEnteredPlace").value;
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