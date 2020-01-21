export default function appendPlanetSvgOverviewPage(sel) {
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