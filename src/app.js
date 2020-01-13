import testdata from "./utils/testdata";
import * as d3 from 'd3';

function createViz() {
  console.log("Create viz is running...");

  var maindivs = d3.select('#parent').selectAll('p').data(testdata).enter().append('div').append('div').attr('class', 'planeetDiv');

  var textdivs = maindivs.append('div').attr('class', 'textDiv');
          
  textdivs.append('p')
      .text(d => d.bedrijfsnaam);

  textdivs.append('p')
      .text(d => "Winstpercentage: "+(d.perc_winst)+"%");

  maindivs.append('div')
      .append('svg')
      .attr("width", d => (Math.sqrt((d.perc_winst)/(Math.PI)))*60)
      .attr("height", d => (Math.sqrt((d.perc_winst)/(Math.PI)))*60)
      .append('circle')
      .attr("cx", d => (Math.sqrt((d.perc_winst)/(Math.PI)))*30)
      .attr("cy", d => (Math.sqrt((d.perc_winst)/(Math.PI)))*30)
      .attr("r", d => (Math.sqrt((d.perc_winst)/(Math.PI)))*30)
      .style("fill", function(d) {
        if(d.geestelijkegezondheidszorg == 1 && d.gehandicaptenzorg == 0 && d.thuiszorg == 0) {
            return "url(#Rood)";
        } else if(d.geestelijkegezondheidszorg == 0 && d.gehandicaptenzorg == 1 && d.thuiszorg == 0) {
            return "url(#Geel)";
        } else if(d.geestelijkegezondheidszorg == 0 && d.gehandicaptenzorg == 0 && d.thuiszorg == 1) {
            return "url(#Groen)";
        } else if(d.geestelijkegezondheidszorg == 1 && d.gehandicaptenzorg == 1 && d.thuiszorg == 0) {
            return "url(#GeelRood)";
        } else if(d.geestelijkegezondheidszorg == 1 && d.gehandicaptenzorg == 0 && d.thuiszorg == 1) {
            return "url(#GroenRood)";
        } else if(d.geestelijkegezondheidszorg == 0 && d.gehandicaptenzorg == 1 && d.thuiszorg == 1) {
            return "url(#GeelGroen)";
        } else if(d.geestelijkegezondheidszorg == 1 && d.gehandicaptenzorg == 1 && d.thuiszorg == 1) {
            return "url(#RoodGeelGroen)";
        }
      });

  // function drawPlanets(result) {
  //   console.log("This is result in d3: ", result);
    
  //   body
  //       .selectAll('div')
  //       .data(result)
  //       .enter()
  //       .append('div')
  //       .attr('class', 'planeetDiv')
  //       .insert('p')
  //       .text(d => d.bedrijfsnaam)
  //       .insert('svg')
  // }
}

console.log("This is testdata, onderin", testdata);

createViz();