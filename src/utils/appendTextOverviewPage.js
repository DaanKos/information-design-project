export default function appendTextOverviewPage(sel) {
    let textDiv = sel.append('div').attr('class', 'textDiv');
    
    textDiv.append('p')
            .text(d => d.bedrijfsnaam);

    textDiv.append('p')
            .text(function(d){
                if (d.perc_winst != 'NA' && d.perc_winst != '-Inf'){
                    return ("Winstpercentage: "+(d.perc_winst)+'%');
                } else {
                    return "Winstpercentage: Onbekend...";
                }
            })
            .style('color', function(d){
                if (d.perc_winst < 0){
                    return '#F65645'
                } else {
                    return '#fff'
                }
            });
};