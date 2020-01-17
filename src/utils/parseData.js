import realData from "./realData";
import capitalizeString from "./capitalizeString";

export default function parseData(givenCity){
    let filteredYear = realData.filter(function(d) {
        return d.jaar == 2018;
    })
    
    let selecteddata = filteredYear.filter(function(d) {
        return capitalizeString(d.plaats) == capitalizeString(givenCity);
    });
    
    return selecteddata
}