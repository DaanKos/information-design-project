(function (d3) {
    'use strict';

    function parseData(givenData, givenCity){  
        console.log("This is givenData in parseData: ", givenData);
        console.log("This is givenCity in parseData: ", givenCity);
        
        // All sorting functions based on code by Olayinka Omole and James Hibberd found at https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
        function alphabeticalSort(a, b) {
            // Use toUpperCase() to ignore character casing
            const nameA = a.bedrijfsnaam.toLowerCase();
            const nameB = b.bedrijfsnaam.toLowerCase();
          
            let comparison = 0;
            if (nameA > nameB) {
              comparison = 1;
            } else if (nameA < nameB) {
              comparison = -1;
            }
            return comparison;
        }      
        let selecteddata = givenData.filter(function(d) {
            return d.plaats.toLowerCase() == givenCity.toLowerCase();
        });

        selecteddata.sort(alphabeticalSort);
        return selecteddata;
    }

    async function parseCsv(givenYear){
    const dataSource = '/data/df_export_2011_2018.csv';

    function transformRow(row){
        return {
              concerncode: row["concerncode"],
              bedrijfsnaam: row["bedrijfsnaam"],
              plaats: row["plaats"],
              geestelijkegezondheidszorg: row["geestelijkegezondheidszorg"],
              gehandicaptenzorg: row["gehandicaptenzorg"],
              thuiszorg: row["thuiszorg"],
              omzet: row["omzet"],
              winst: row["winst"],
              personeelskostentotaal: row["personeelskostentotaal"],
              fte: row["fte"],
              jaar: row["jaar"],
              perc_winst: row["perc_winst"],
              perc_loon: row["perc_loon"],
              omzet_fte: row["omzet_fte"]
        }
    }
    const finalData = await d3.csv(dataSource, transformRow)
    	.then(data => {
            console.log("This is data in parseCsv: ", data);
            const filteredYear = data.filter(function(d) {
                return d.jaar == givenYear;
            });
            return filteredYear;
    });

    return finalData;
    }

    function appendPlanetSvgOverviewPage(sel) {
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
    }

    function appendTextOverviewPage(sel) {
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
    }

    function appendProfitChartDetailPage(givenDiv, profit_perc){
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
            }    }
        let scaleDomainEnd = getScaleDomainEnd();

        let profitChartDimensions = {height: 105, width:288};

        let profitChartScale = d3.scaleLinear()
                        .domain([0, scaleDomainEnd])
                        .range([0, 288]);
        
        let detailPageProfitChartTitle = givenDiv.append('div').attr('class', 'detailPageProfitChartTitle');

        detailPageProfitChartTitle.append('p')
                                  .text('Winspercentage');

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
                             .text((profit_perc)+'%')
                             .attr('y', 39)
                             .attr('x', (profitChartScale(profit_perc)+5))
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
    }

    function appendSalaryChartDetailPage(givenDiv, salary_perc){
        let profitChartDimensions = {height: 105, width:288};

        let profitChartScale = d3.scaleLinear()
                        .domain([0, 100])
                        .range([0, 288]);
        
        let detailPageProfitChartTitle = givenDiv.append('div').attr('class', 'detailPageProfitChartTitle');

        detailPageProfitChartTitle.append('p')
                                  .text('Loonpercentage');

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
    }

    function createViz(givenData) {
        // console.log("Create viz is running...");
        // console.log("This is given data at the moment of createViz firing: ", givenData);

        d3.select('#parent').selectAll('div').remove();
        let maindivs = d3.select('#parent').selectAll('div').data(givenData).enter().append('div').append('div').attr('class', 'planeetDiv');
        let modal =  d3.select('#detailPage').selectAll('div');

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
                appendTextOverviewPage(d3.select(this));
                appendPlanetSvgOverviewPage(d3.select(this));
            } else {
                appendPlanetSvgOverviewPage(d3.select(this));
                appendTextOverviewPage(d3.select(this));
            }
        });
    }
    function passAllFunctions(){
        var givenValue = document.getElementById("userEnteredPlace").value;
        data.then(result => {
            createViz(parseData(result, givenValue));
        });
    }
    const data = parseCsv(2018);

    document.getElementById("userSearchButton").onclick = function() {passAllFunctions();};
    document.getElementById("closeDetailPage").onclick = function() {
        document.getElementById("detailPage").style.display = "none";
    };

}(d3));
