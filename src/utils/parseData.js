import lowerCaseString from "./lowerCaseString";

export default function parseData(givenData, givenCity){  
    console.log("This is givenData in parseData: ", givenData);
    console.log("This is givenCity in parseData: ", givenCity);
    
    let filteredYear = givenData.filter(function(d) {
        return d.jaar == 2018;
    });
    
    let selecteddata = filteredYear.filter(function(d) {
        return lowerCaseString(d.plaats) == lowerCaseString(givenCity);
    });
    
    console.log("This is selecteddata in parseData: ", selecteddata)
    return selecteddata
}