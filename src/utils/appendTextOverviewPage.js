export default function appendTextOverviewPage(sel) {
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