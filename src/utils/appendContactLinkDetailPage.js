export default function appendContactLinkDetailPage(givenDiv){
    givenDiv.append('a')
             .attr('href', 'https://pointer.kro-ncrv.nl/contact')
             .attr('target', '_blank')
             .text('Weet je meer over dit bedrijf of zie je iets opvallends? Meld het ons anoniem.');
};