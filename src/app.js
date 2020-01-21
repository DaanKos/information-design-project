import parseData from "./utils/parseData";
import parseCsvAndSetYear from "./utils/parseCsvAndSetYear";
import * as d3 from 'd3';

function createViz(givenData) {
    console.log("Create viz is running...");
    console.log("This is given data at the moment of createViz firing: ", givenData);


    d3.select('#parent').selectAll('div').remove();
    let maindivs = d3.select('#parent').selectAll('div').data(givenData).enter().append('div').append('div').attr('class', 'planeetDiv');
    let modal =  d3.select('#detailPage').selectAll('div')


    maindivs.on('click', function(d) {
        console.log(d.perc_winst);

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

        function getScaleDomainEnd(){
            if (d.perc_winst < 10){
                return 15;
            } else if (d.perc_winst < 15){
                return 20;
            } else if (d.perc_winst < 20){
                return 25;
            } else if (d.perc_winst < 30){
                return 40;
            } else if (d.perc_winst < 40){
                return 50;
            } else if (d.perc_winst < 50){
                return 60;
            } else if (d.perc_winst < 60){
                return 70;
            } else if (d.perc_winst < 70){
                return 80;
            } else if (d.perc_winst < 80){
                return 90;
            } else if (d.perc_winst < 90){
                return 100;
            } else if (d.perc_winst < 100){
                return 120;
            } else {
                return 150;
            };
        };

        let scaleDomainEnd = getScaleDomainEnd();

        let chartDimensions = {height: 105, width:288}

        let myScale = d3.scaleLinear()
                        .domain([0, scaleDomainEnd])
                        .range([0, 288]);

        let detailPageProfitChart = modal.append('div').attr('class', 'detailPageProfitChart');
        let detailPageProfitChartTitle = detailPageProfitChart.append('div').attr('class', 'detailPageProfitChartTitle')
        let detailPageProfitChartSvg = detailPageProfitChart.append('div').attr('class', 'detailPageProfitChartSvg').append('svg').attr('height', chartDimensions.height).attr('width', chartDimensions.width);

        detailPageProfitChartTitle.append('p')
                                  .text('Winspercentage')

        let detailPageProfitChartTitleSvg = detailPageProfitChartTitle.append('svg').attr('height', 20).attr('width', 90);

        detailPageProfitChartTitleSvg.append('text')
                                     .text('Bovengrens')
                                     .attr('font-size', '.8em')
                                     .attr('y', 15)
                                     .style("fill", '#F65645');

        detailPageProfitChartTitleSvg.append("line")
                                     .attr("class", "line")
                                     .style("stroke-dasharray", ("4, 3"))
                                     .style("stroke", '#F65645')
                                     .attr('y1', 12)
                                     .attr('x1', 70)
                                     .attr('y2', 12)
                                     .attr('x2', 90);

        detailPageProfitChartSvg.append("rect")
                             .attr("width", chartDimensions.width)
                             .attr('height', 40)
                             .attr('y', 15)
                             .style('fill', '#D8CEDB');
        
        detailPageProfitChartSvg.append("rect")
                             .attr("width", myScale(d.perc_winst))
                             .attr('height', 40)
                             .attr('y', 15)
                             .style('fill', '#1BEAAE');
                             
        detailPageProfitChartSvg.append("rect")
                             .attr("width", chartDimensions.width)
                             .attr('height', 40)
                             .attr('y', 65)
                             .style('fill', '#D8CEDB');

        detailPageProfitChartSvg.append("rect")
                             .attr("width", myScale(3))
                             .attr('height', 40)
                             .attr('y', 65)
                             .style('fill', '#6B38E8');

        detailPageProfitChartSvg.append("line")
                             .attr("class", "line")
                             .style("stroke-dasharray", ("4, 3"))
                             .style("stroke", '#F65645')
                             .attr('y1', 16)
                             .attr('x1', myScale(10))
                             .attr('y2', 105)
                             .attr('x2', myScale(10));

        detailPageProfitChartSvg.append("text")
                             .text('10%')
                             .attr('y', 10)
                             .attr('x', myScale(10))
                             .style('fill', '#F65645')
                             .style("text-anchor", "middle")
                             .style('font-size', '.8em');

       detailPageProfitChartSvg.append("text")
                             .text('3%')
                             .attr('y', 89)
                             .attr('x', ((myScale(3)+5)))
                             .style('fill', '#1D2939')
                             .style('font-size', '.8em');

        detailPageProfitChartSvg.append("text")
                             .text((d.perc_winst)+'%')
                             .attr('y', 39)
                             .attr('x', (myScale(d.perc_winst)+5))
                             .style('fill', '#1D2939')
                             .style('font-size', '.8em');


    });

    maindivs.each(function(_, i) {
        if (i % 2) {
            appendText(d3.select(this))
            appendSvg(d3.select(this))
        } else {
            appendSvg(d3.select(this))
            appendText(d3.select(this))
        }
    });

    function appendSvg(sel) {
        sel.append('div')
            .attr('class', 'svgDiv')
            .append('svg')
            .attr("width", function(d) {
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
            .attr("height", function(d) {
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
            .attr("cx", function(d) {
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
            .attr("cy", function(d) {
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
            .attr("r", function(d) {
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
            .style("fill", function(d) {
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
    };

    function appendText(sel) {
        let textDiv = sel.append('div').attr('class', 'textDiv');
        
        textDiv.append('p')
                .text(d => d.bedrijfsnaam);

        textDiv.append('p')
                .text(d => "Winstpercentage: "+(d.perc_winst)+"%")
                .style('color', function(d){
                    if (d.perc_winst < 0){
                        return '#F65645'
                    } else {
                        return '#fff'
                    }
                });
    };
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