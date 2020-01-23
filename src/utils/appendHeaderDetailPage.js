import * as d3 from 'd3';

export default function appendHeaderDetailPage(givenDiv, companyName, profitPerc, geestelijkeGezondheidzorg, thuiszorg, gehandicaptenzorg){
    givenDiv.append('div')
         .attr('class', 'detailPageTitleWrap')
         .append('h2')
         .text(companyName);

    givenDiv.append('div')
        .attr('class', 'detailPageSubTitleWrap')
        .append('p')
        .text(function(){
        if(geestelijkeGezondheidzorg == 'ja' && gehandicaptenzorg == 'NA' && thuiszorg == 'NA') {
            return "Geestelijke gezondheidszorg";
        } else if(geestelijkeGezondheidzorg == 'NA' && gehandicaptenzorg == 'ja' && thuiszorg == 'NA') {
            return "Gehandicaptenzorg";
        } else if(geestelijkeGezondheidzorg == 'NA' && gehandicaptenzorg == 'NA' && thuiszorg == 'ja') {
            return "Thuiszorg";
        } else if(geestelijkeGezondheidzorg == 'ja' && gehandicaptenzorg == 'ja' && thuiszorg == 'NA') {
            return "Geestelijke gezondheidszorg | Gehandicaptenzorg";
        } else if(geestelijkeGezondheidzorg == 'ja' && gehandicaptenzorg == 'NA' && thuiszorg == 'ja') {
            return "Geestelijke gezondheidszorg | Thuiszorg";
        } else if(geestelijkeGezondheidzorg == 'NA' && gehandicaptenzorg == 'ja' && thuiszorg == 'ja') {
            return "Gehandicaptenzorg | Thuiszorg";
        } else if(geestelijkeGezondheidzorg == 'ja' && gehandicaptenzorg == 'ja' && thuiszorg == 'ja') {
            return "Geestelijke gezondheidszorg | Gehandicaptenzorg | Thuiszorg";
        }
        });

    givenDiv.append('div')
    .attr('class', 'detailPageSvgDiv')
    .append('svg')
    .attr("width", function() {
        if (profitPerc < 1 || profitPerc == 'NA' || profitPerc == '-Inf') {
            return 30;
        } else if (((Math.sqrt((profitPerc)/(Math.PI)))*45) > 180) {
            return 180;
        } else if (((Math.sqrt((profitPerc)/(Math.PI)))*45) < 30) {
            return 30;
        } else {
            return ((Math.sqrt((profitPerc)/(Math.PI)))*45)
        }
    })
    .attr("height", function() {
        if (profitPerc < 1 || profitPerc == 'NA' || profitPerc == '-Inf') {
            return 30;
        } else if (((Math.sqrt((profitPerc)/(Math.PI)))*45) > 180) {
            return 180;
        } else if (((Math.sqrt((profitPerc)/(Math.PI)))*45) < 30) {
            return 30;
        } else {
            return ((Math.sqrt((profitPerc)/(Math.PI)))*45)
        }
    })
    .append('circle')
    .attr("cx", function() {
        if (profitPerc < 1 || profitPerc == 'NA' || profitPerc == '-Inf') {
            return 15;
        } else if (((Math.sqrt((profitPerc)/(Math.PI)))*22.5) > 90) {
            return 90;
        } else if (((Math.sqrt((profitPerc)/(Math.PI)))*22.5) < 15) {
            return 15;
        } else {
            return ((Math.sqrt((profitPerc)/(Math.PI)))*22.5)
        }
    })
    .attr("cy", function() {
        if (profitPerc < 1 || profitPerc == 'NA' || profitPerc == '-Inf') {
            return 15;
        } else if (((Math.sqrt((profitPerc)/(Math.PI)))*22.5) > 90) {
            return 90;
        } else if (((Math.sqrt((profitPerc)/(Math.PI)))*22.5) < 15) {
            return 15;
        } else {
            return ((Math.sqrt((profitPerc)/(Math.PI)))*22.5)
        }
    })
    .attr("r", function() {
        if (profitPerc < 1 || profitPerc == 'NA' || profitPerc == '-Inf') {
            return 15;
        } else if (((Math.sqrt((profitPerc)/(Math.PI)))*22.5) > 90) {
            return 90;
        } else if (((Math.sqrt((profitPerc)/(Math.PI)))*22.5) < 15) {
            return 15;
        } else {
            return ((Math.sqrt((profitPerc)/(Math.PI)))*22.5)
        }
    })
    .style("fill", function() {
        if(geestelijkeGezondheidzorg == 'ja' && gehandicaptenzorg == 'NA' && thuiszorg == 'NA') {
            return "url(#Rood)";
        } else if(geestelijkeGezondheidzorg == 'NA' && gehandicaptenzorg == 'ja' && thuiszorg == 'NA') {
            return "url(#Geel)";
        } else if(geestelijkeGezondheidzorg == 'NA' && gehandicaptenzorg == 'NA' && thuiszorg == 'ja') {
            return "url(#Groen)";
        } else if(geestelijkeGezondheidzorg == 'ja' && gehandicaptenzorg == 'ja' && thuiszorg == 'NA') {
            return "url(#GeelRood)";
        } else if(geestelijkeGezondheidzorg == 'ja' && gehandicaptenzorg == 'NA' && thuiszorg == 'ja') {
            return "url(#GroenRood)";
        } else if(geestelijkeGezondheidzorg == 'NA' && gehandicaptenzorg == 'ja' && thuiszorg == 'ja') {
            return "url(#GeelGroen)";
        } else if(geestelijkeGezondheidzorg == 'ja' && gehandicaptenzorg == 'ja' && thuiszorg == 'ja') {
            return "url(#RoodGeelGroen)";
        }
    });
}