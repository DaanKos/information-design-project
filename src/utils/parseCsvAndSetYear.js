import * as d3 from 'd3';

export default async function parseCsv(givenYear){
const dataSource = '/data/df_export_2011_2018.csv'

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
};

const finalData = await d3.csv(dataSource, transformRow)
	.then(data => {
        console.log("This is data in parseCsv: ", data);
        const filteredYear = data.filter(function(d) {
            return d.jaar == givenYear;
        });
        return filteredYear;
});

return finalData;
}; 