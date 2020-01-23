import * as d3 from 'd3';

export default function appendProfitChartDetailPage(givenDiv, profit_perc){
    function getScaleDomainEnd(){
        if (profit_perc < 10){
            return 15;
        } else if (profit_perc < 15){
            return 20;
        } else if (profit_perc < 20){
            return 25;
        } else if (profit_perc < 30){
            return 40;
        } else if (profit_perc < 40){
            return 50;
        } else if (profit_perc < 50){
            return 60;
        } else if (profit_perc < 60){
            return 70;
        } else if (profit_perc < 70){
            return 80;
        } else if (profit_perc < 80){
            return 90;
        } else if (profit_perc < 90){
            return 100;
        } else if (profit_perc < 100){
            return 120;
        } else {
            return 150;
        };
    };

    let scaleDomainEnd = getScaleDomainEnd();

    let profitChartDimensions = {height: 105, width:288}

    let profitChartScale = d3.scaleLinear()
                    .domain([0, scaleDomainEnd])
                    .range([0, 288]);
    
    let detailPageProfitChartTitle = givenDiv.append('div').attr('class', 'detailPageProfitChartTitle')

    detailPageProfitChartTitle.append('p')
                              .attr('class', 'bold')
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

    let detailPageProfitChartSvg = givenDiv.append('div').attr('class', 'detailPageProfitChartSvg').append('svg').attr('height', profitChartDimensions.height).attr('width', profitChartDimensions.width);
    
    detailPageProfitChartSvg.append("rect")
                         .attr("width", profitChartDimensions.width)
                         .attr('height', 40)
                         .attr('y', 15)
                         .style('fill', '#D8CEDB');
    
    detailPageProfitChartSvg.append("rect")
                         .attr("width", profitChartScale(profit_perc))
                         .attr('height', 40)
                         .attr('y', 15)
                         .style('fill', '#1BEAAE');
                         
    detailPageProfitChartSvg.append("rect")
                         .attr("width", profitChartDimensions.width)
                         .attr('height', 40)
                         .attr('y', 65)
                         .style('fill', '#D8CEDB');

    detailPageProfitChartSvg.append("rect")
                         .attr("width", profitChartScale(3))
                         .attr('height', 40)
                         .attr('y', 65)
                         .style('fill', '#6B38E8');

    detailPageProfitChartSvg.append("line")
                         .attr("class", "line")
                         .style("stroke-dasharray", ("4, 3"))
                         .style("stroke", '#F65645')
                         .attr('y1', 16)
                         .attr('x1', profitChartScale(10))
                         .attr('y2', 105)
                         .attr('x2', profitChartScale(10));

    detailPageProfitChartSvg.append("text")
                         .text('10%')
                         .attr('y', 10)
                         .attr('x', profitChartScale(10))
                         .style('fill', '#F65645')
                         .style("text-anchor", "middle")
                         .style('font-size', '.8em');

   detailPageProfitChartSvg.append("text")
                         .text('3%')
                         .attr('y', 89)
                         .attr('x', ((profitChartScale(3)+5)))
                         .style('fill', '#1D2939')
                         .style('font-size', '.8em');

    detailPageProfitChartSvg.append("text")
                         .text(function(){
                            if (profit_perc != 'NA' && profit_perc != '-Inf'){
                                return (profit_perc + "%");
                            } else {
                                return 'Onbekend...';
                            }
                         })
                         .attr('y', 39)
                         .attr('x', function(){
                            if ((profitChartScale(profit_perc)) < 5 || profit_perc == "NA" || profit_perc == '-Inf'){
                                return 5;
                            } else {
                                return (profitChartScale(profit_perc)+5);
                            }
                         })
                         .style('fill', '#1D2939')
                         .style('font-size', '.8em');

    let detailPageProfitChartLegend = givenDiv.append('div').attr('class', 'detailPageProfitChartLegend').append('svg').attr('height', 41.5).attr('width', profitChartDimensions.width);

    detailPageProfitChartLegend.append('circle')
                               .attr('cx', 7.5)
                               .attr('cy', 7.5)
                               .attr('r', 7.5)
                               .style('fill', '#1BEAAE');

    detailPageProfitChartLegend.append('circle')
                               .attr('cx', 7.5)
                               .attr('cy', 33)
                               .attr('r', 7.5)
                               .style('fill', '#6B38E8');

    detailPageProfitChartLegend.append('text')
                               .text('Deze zorginstelling')
                               .attr('x', 22.5)
                               .attr('y', 12)
                               .style('fill', '#1D2939')
                               .style('font-size', '.9em');

    detailPageProfitChartLegend.append('text')
                               .text('Gemiddelde van Nederland')
                               .attr('x', 22.5)
                               .attr('y', 37.5)
                               .style('font-size', '.9em');
};