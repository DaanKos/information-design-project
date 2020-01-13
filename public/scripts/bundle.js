(function (d3) {
  'use strict';

  var testdata = [
    {
      "concerncode": "2CJEQWRMRU",
      "bedrijfsnaam": "De Haan Faber (V.O.F)",
      "plaats": "Huizen",
      "geestelijkegezondheidszorg": 1,
      "gehandicaptenzorg": 0,
      "thuiszorg": 1,
      "omzet": 2664854,
      "winst": 90979,
      "personeelskostentotaal": 1855535,
      "fte": 33.2,
      "jaar": 2018,
      "perc_winst": 3.4,
      "perc_loon": 69.6,
      "omzet_fte": 80266.7
    },
    {
      "concerncode": "2QVTUVPPLT",
      "bedrijfsnaam": "Klein Voorhout (Stichting)",
      "plaats": "BEERTA",
      "geestelijkegezondheidszorg": 1,
      "gehandicaptenzorg": 1,
      "thuiszorg": 1,
      "omzet": 1687209,
      "winst": 13223,
      "personeelskostentotaal": 1239930,
      "fte": 20.89,
      "jaar": 2018,
      "perc_winst": 0.8,
      "perc_loon": 73.5,
      "omzet_fte": 80766.3
    },
    {
      "concerncode": "2RTZ4S8SQR",
      "bedrijfsnaam": "Home Instead Thuisservice Nijmegen B.V.",
      "plaats": "Nijmegen",
      "geestelijkegezondheidszorg": 1,
      "gehandicaptenzorg": 1,
      "thuiszorg": 0,
      "omzet": 3613820,
      "winst": 202280,
      "personeelskostentotaal": 2819358,
      "fte": 69,
      "jaar": 2018,
      "perc_winst": 5.6,
      "perc_loon": 78,
      "omzet_fte": 52374.2
    },
    {
      "concerncode": "2XAW2KNT47",
      "bedrijfsnaam": "De Amethyst (V.O.F.)",
      "plaats": "Angeren",
      "geestelijkegezondheidszorg": 0,
      "gehandicaptenzorg": 1,
      "thuiszorg": 1,
      "omzet": 1125045,
      "winst": 333944,
      "personeelskostentotaal": 560822,
      "fte": 13.95,
      "jaar": 2018,
      "perc_winst": 29.7,
      "perc_loon": 49.8,
      "omzet_fte": 80648.4
    },
    {
      "concerncode": "3538WBEPU9",
      "bedrijfsnaam": "Intermedicare (Stichting)",
      "plaats": "BUSSUM",
      "geestelijkegezondheidszorg": 0,
      "gehandicaptenzorg": 0,
      "thuiszorg": 1,
      "omzet": 1209512,
      "winst": -4281,
      "personeelskostentotaal": 272955,
      "fte": 18.5,
      "jaar": 2018,
      "perc_winst": 0.4,
      "perc_loon": 22.6,
      "omzet_fte": 65379
    },
    {
      "concerncode": "353H9Q688B",
      "bedrijfsnaam": "ActiVite (Stichting)",
      "plaats": "LEIDERDORP",
      "geestelijkegezondheidszorg": 1,
      "gehandicaptenzorg": 0,
      "thuiszorg": 0,
      "omzet": 94118604,
      "winst": 4425226,
      "personeelskostentotaal": 73131788,
      "fte": 1547.5,
      "jaar": 2018,
      "perc_winst": 4.7,
      "perc_loon": 77.7,
      "omzet_fte": 60819.8
    },
    {
      "concerncode": "353QTD8G7G",
      "bedrijfsnaam": "De ZorgZaak B.V.",
      "plaats": "HOOGEVEEN",
      "geestelijkegezondheidszorg": 0,
      "gehandicaptenzorg": 1,
      "thuiszorg": 0,
      "omzet": 20899060,
      "winst": 1223364,
      "personeelskostentotaal": 16617721,
      "fte": 371.07,
      "jaar": 2018,
      "perc_winst": 5.9,
      "perc_loon": 79.5,
      "omzet_fte": 56321.1
    },
    {
      "concerncode": "35566VNXNK",
      "bedrijfsnaam": "Triade-Vitree (Stichting)",
      "plaats": "LELYSTAD",
      "geestelijkegezondheidszorg": 0,
      "gehandicaptenzorg": 1,
      "thuiszorg": 0,
      "omzet": 119999392,
      "winst": 889459,
      "personeelskostentotaal": 86145224,
      "fte": 1330.1,
      "jaar": 2018,
      "perc_winst": 0.7,
      "perc_loon": 71.8,
      "omzet_fte": 90218.3
    },
    {
      "concerncode": "3557GA5NEG",
      "bedrijfsnaam": "t Gerack (Stichting)",
      "plaats": "UITHUIZEN",
      "geestelijkegezondheidszorg": 0,
      "gehandicaptenzorg": 0,
      "thuiszorg": 1,
      "omzet": 9795064,
      "winst": -1285959,
      "personeelskostentotaal": 7235908,
      "fte": 140.89,
      "jaar": 2018,
      "perc_winst": 13.1,
      "perc_loon": 73.9,
      "omzet_fte": 69522.8
    },
    {
      "concerncode": "355RJHL7K7",
      "bedrijfsnaam": "Woon/zorgcentrum Het Hooge Heem (Stichting)",
      "plaats": "GROOTEGAST",
      "geestelijkegezondheidszorg": 0,
      "gehandicaptenzorg": 0,
      "thuiszorg": 1,
      "omzet": 7147734,
      "winst": 436007,
      "personeelskostentotaal": 4217032,
      "fte": 86,
      "jaar": 2018,
      "perc_winst": 6.1,
      "perc_loon": 59,
      "omzet_fte": 83113.2
    },
    {
      "concerncode": "3568ZQQZ8T",
      "bedrijfsnaam": "Stichting Epilepsie Instellingen Nederland (SEIN)",
      "plaats": "HOOFDDORP",
      "geestelijkegezondheidszorg": 0,
      "gehandicaptenzorg": 1,
      "thuiszorg": 0,
      "omzet": 91774000,
      "winst": 215000,
      "personeelskostentotaal": 70346000,
      "fte": 982.9,
      "jaar": 2018,
      "perc_winst": 0.2,
      "perc_loon": 76.7,
      "omzet_fte": 93370.6
    }
  ];

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

}(d3));
