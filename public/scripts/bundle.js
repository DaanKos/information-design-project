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

    function createViz(givenData) {
        console.log("Create viz is running...");
        console.log("This is given data at the moment of createViz firing: ", givenData);

        d3.select('#parent').selectAll('div').remove();
        let maindivs = d3.select('#parent').selectAll('div').data(givenData).enter().append('div').append('div').attr('class', 'planeetDiv');

        maindivs.each(function(_, i) {
            if (i % 2) {
                appendText(d3.select(this));
                appendSvg(d3.select(this));
            } else {
                appendSvg(d3.select(this));
                appendText(d3.select(this));
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
        }
        function appendText(sel) {
            let textDiv = sel.append('div').attr('class', 'textDiv');
            
            textDiv.append('p')
                    .text(d => d.bedrijfsnaam);

            textDiv.append('p')
                    .text(d => "Winstpercentage: "+(d.perc_winst)+"%");
        }
        // let textdivs = maindivs.append('div').attr('class', 'textDiv');
            
        // maindivs.append('div')
        //     .attr('class', 'svgDiv')
        //     .append('svg')
        //     .attr("width", function(d) {
        //         if (d.perc_winst < 1 || d.perc_winst == 'NA') {
        //             return 30;
        //         } else if (((Math.sqrt((d.perc_winst)/(Math.PI)))*45) > 180) {
        //             return 180;
        //         } else if (((Math.sqrt((d.perc_winst)/(Math.PI)))*45) < 30) {
        //             return 30;
        //         } else {
        //             return ((Math.sqrt((d.perc_winst)/(Math.PI)))*45)
        //         }
        //     })
        //     .attr("height", function(d) {
        //         if (d.perc_winst < 1 || d.perc_winst == 'NA') {
        //             return 30;
        //         } else if (((Math.sqrt((d.perc_winst)/(Math.PI)))*45) > 180) {
        //             return 180;
        //         } else if (((Math.sqrt((d.perc_winst)/(Math.PI)))*45) < 30) {
        //             return 30;
        //         } else {
        //             return ((Math.sqrt((d.perc_winst)/(Math.PI)))*45)
        //         }
        //     })
        //     .append('circle')
        //     .attr("cx", function(d) {
        //         if (d.perc_winst < 1 || d.perc_winst == 'NA') {
        //             return 15;
        //         } else if (((Math.sqrt((d.perc_winst)/(Math.PI)))*22.5) > 90) {
        //             return 90;
        //         } else if (((Math.sqrt((d.perc_winst)/(Math.PI)))*22.5) < 15) {
        //             return 15;
        //         } else {
        //             return ((Math.sqrt((d.perc_winst)/(Math.PI)))*22.5)
        //         }
        //     })
        //     .attr("cy", function(d) {
        //         if (d.perc_winst < 1 || d.perc_winst == 'NA') {
        //             return 15;
        //         } else if (((Math.sqrt((d.perc_winst)/(Math.PI)))*22.5) > 90) {
        //             return 90;
        //         } else if (((Math.sqrt((d.perc_winst)/(Math.PI)))*22.5) < 15) {
        //             return 15;
        //         } else {
        //             return ((Math.sqrt((d.perc_winst)/(Math.PI)))*22.5)
        //         }
        //     })
        //     .attr("r", function(d) {
        //         if (d.perc_winst < 1 || d.perc_winst == 'NA') {
        //             return 15;
        //         } else if (((Math.sqrt((d.perc_winst)/(Math.PI)))*22.5) > 90) {
        //             return 90;
        //         } else if (((Math.sqrt((d.perc_winst)/(Math.PI)))*22.5) < 15) {
        //             return 15;
        //         } else {
        //             return ((Math.sqrt((d.perc_winst)/(Math.PI)))*22.5)
        //         }
        //     })
        //     .style("fill", function(d) {
        //         if(d.geestelijkegezondheidszorg == 'ja' && d.gehandicaptenzorg == 'NA' && d.thuiszorg == 'NA') {
        //             return "url(#Rood)";
        //         } else if(d.geestelijkegezondheidszorg == 'NA' && d.gehandicaptenzorg == 'ja' && d.thuiszorg == 'NA') {
        //             return "url(#Geel)";
        //         } else if(d.geestelijkegezondheidszorg == 'NA' && d.gehandicaptenzorg == 'NA' && d.thuiszorg == 'ja') {
        //             return "url(#Groen)";
        //         } else if(d.geestelijkegezondheidszorg == 'ja' && d.gehandicaptenzorg == 'ja' && d.thuiszorg == 'NA') {
        //             return "url(#GeelRood)";
        //         } else if(d.geestelijkegezondheidszorg == 'ja' && d.gehandicaptenzorg == 'NA' && d.thuiszorg == 'ja') {
        //             return "url(#GroenRood)";
        //         } else if(d.geestelijkegezondheidszorg == 'NA' && d.gehandicaptenzorg == 'ja' && d.thuiszorg == 'ja') {
        //             return "url(#GeelGroen)";
        //         } else if(d.geestelijkegezondheidszorg == 'ja' && d.gehandicaptenzorg == 'ja' && d.thuiszorg == 'ja') {
        //             return "url(#RoodGeelGroen)";
        //         }
        // });
    }
    function passAllFunctions(){
        var givenValue = document.getElementById("userGivenPlace").value;
        data.then(result => {
            createViz(parseData(result, givenValue));
        });
    }
    const data = parseCsv(2018);

    document.getElementById("userSearchButton").onclick = function() {passAllFunctions();};

}(d3));
