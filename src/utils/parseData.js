import lowerCaseString from "./lowerCaseString";

export default function parseData(givenData, givenCity){  
    console.log("This is givenData in parseData: ", givenData);
    console.log("This is givenCity in parseData: ", givenCity);
    
    let selecteddata = givenData.filter(function(d) {
        return lowerCaseString(d.plaats) == lowerCaseString(givenCity);
    });
    
    console.log("This is selecteddata in parseData: ", selecteddata);
    return selecteddata
}