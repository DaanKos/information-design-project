import * as d3 from 'd3';

export default function appendSalaryChartDetailPage(givenDiv, salary_perc){
    let profitChartDimensions = {height: 105, width:288}

    let profitChartScale = d3.scaleLinear()
                    .domain([0, 100])
                    .range([0, 288]);
    
    let detailPageProfitChartTitle = givenDiv.append('div').attr('class', 'detailPageProfitChartTitle')

    detailPageProfitChartTitle.append('p')
                              .text('Loonpercentage')

    let detailPageProfitChartTitleSvg = detailPageProfitChartTitle.append('svg').attr('height', 20).attr('width', 90);

    detailPageProfitChartTitleSvg.append('text')
                                 .text('Ondergrens')
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
                         .attr("width", profitChartScale(salary_perc))
                         .attr('height', 40)
                         .attr('y', 15)
                         .style('fill', '#1BEAAE');
                         
    detailPageProfitChartSvg.append("rect")
                         .attr("width", profitChartDimensions.width)
                         .attr('height', 40)
                         .attr('y', 65)
                         .style('fill', '#D8CEDB');

    detailPageProfitChartSvg.append("rect")
                         .attr("width", profitChartScale(60))
                         .attr('height', 40)
                         .attr('y', 65)
                         .style('fill', '#6B38E8');

    detailPageProfitChartSvg.append("line")
                         .attr("class", "line")
                         .style("stroke-dasharray", ("4, 3"))
                         .style("stroke", '#F65645')
                         .attr('y1', 16)
                         .attr('x1', profitChartScale(40))
                         .attr('y2', 105)
                         .attr('x2', profitChartScale(40));

    detailPageProfitChartSvg.append("text")
                         .text('40%')
                         .attr('y', 10)
                         .attr('x', profitChartScale(40))
                         .style('fill', '#F65645')
                         .style("text-anchor", "middle")
                         .style('font-size', '.8em');

   detailPageProfitChartSvg.append("text")
                         .text('60%')
                         .attr('y', 89)
                         .attr('x', ((profitChartScale(60)+5)))
                         .style('fill', '#1D2939')
                         .style('font-size', '.8em');

    detailPageProfitChartSvg.append("text")
                         .text((salary_perc)+'%')
                         .attr('y', 39)
                         .attr('x', (profitChartScale(salary_perc)+5))
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