import parseData from "./parseData";
import * as d3 from 'd3';

export default function parseCsv(givenCity){
const dataSource = '/src/data/df_export_2011_2018.csv'
const data = d3.csv(dataSource, transformRow)
	.then(data => {
        console.log("This is data in parseCsv: ", data);
        parseData(data, givenCity);
});
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
}; 