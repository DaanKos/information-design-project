import * as d3 from 'd3';
import parseData from "./utils/parseData";
import parseCsvAndSetYear from "./utils/parseCsvAndSetYear";
import appendPlanetSvgOverviewPage from "./utils/appendPlanetSvgOverviewPage";
import appendTextOverviewPage from "./utils/appendTextOverviewPage";
import appendProfitChartDetailPage from "./utils/appendProfitChartDetailPage";
import appendSalaryChartDetailPage from "./utils/appendSalaryChartDetailPage";

function createViz(givenData) {
    // console.log("Create viz is running...");
    // console.log("This is given data at the moment of createViz firing: ", givenData);

    d3.select('#parent').selectAll('div').remove();
    let maindivs = d3.select('#parent').selectAll('div').data(givenData).enter().append('div').append('div').attr('class', 'planeetDiv');
    let modal =  d3.select('#detailPage').selectAll('div')

    maindivs.on('click', function(d) {
        d3.select('#detailPage').selectAll('div').selectAll('div').remove();
        document.getElementById("detailPage").style.display = "block";

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
                if (d.perc_winst < 1 || d.perc_winst == 'NA') {
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
                if (d.perc_winst < 1 || d.perc_winst == 'NA') {
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
                if (d.perc_winst < 1 || d.perc_winst == 'NA') {
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
                if (d.perc_winst < 1 || d.perc_winst == 'NA') {
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
                if (d.perc_winst < 1 || d.perc_winst == 'NA') {
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
    });

    maindivs.each(function(_, i) {
        if (i % 2) {
            appendTextOverviewPage(d3.select(this))
            appendPlanetSvgOverviewPage(d3.select(this))
        } else {
            appendPlanetSvgOverviewPage(d3.select(this))
            appendTextOverviewPage(d3.select(this))
        }
    });
};

function passAllFunctions(){
    var givenValue = document.getElementById("userEnteredPlace").value;
    data.then(result => {
        createViz(parseData(result, givenValue))
    });
};

const data = parseCsvAndSetYear(2018);

document.getElementById("userSearchButton").onclick = function() {passAllFunctions()};
document.getElementById("closeDetailPage").onclick = function() {
    document.getElementById("detailPage").style.display = "none";
};