import getNumberWithCommas from "./getNumberWithCommas";

export default function appendDataInTextDetailPage(givenDiv, revenue, profit, salaryCostTotal){
    let detailPageProfitChartRevenue = givenDiv.append('div').attr('class', 'detailPageProfitChartRevenue');

    detailPageProfitChartRevenue.append('p')
                              .text('Omzet:');

    detailPageProfitChartRevenue.append('p')
                              .text("€ " + getNumberWithCommas(revenue));
    
    let detailPageProfitChartProfit = givenDiv.append('div').attr('class', 'detailPageProfitChartProfit');

    detailPageProfitChartProfit.append('p')
                               .text('Winst:');
                          
    detailPageProfitChartProfit.append('p')
                               .text("€ " + getNumberWithCommas(profit));

    let detailPageProfitChartSalaryCostTotal = givenDiv.append('div').attr('class', 'detailPageProfitChartSalaryCostTotal');

    detailPageProfitChartSalaryCostTotal.append('p')
                                        .text('Personeelskosten:');
                          
    detailPageProfitChartSalaryCostTotal.append('p')
                                        .text("€ " + getNumberWithCommas(salaryCostTotal));
};