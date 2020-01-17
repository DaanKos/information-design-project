import * as d3 from 'd3';

const datasource = "/src/data/df_export_2011_2018.csv"

export default function parseCsv(){
    let array = [];
    
    d3.csv(datasource, function(data){
        console.log("Het is gelukt!");
        array.push(data);
    }).then(console.log(array));
}