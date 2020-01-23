export default function parseData(givenData, givenCity){  
    console.log("This is givenData in parseData: ", givenData);
    console.log("This is givenCity in parseData: ", givenCity);
    
    // All sorting functions based on code by Olayinka Omole and James Hibberd found at https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
    function alphabeticalSort(a, b) {
        const nameA = a.bedrijfsnaam.toLowerCase();
        const nameB = b.bedrijfsnaam.toLowerCase();
      
        let comparison = 0;
        if (nameA > nameB) {
          comparison = 1;
        } else if (nameA < nameB) {
          comparison = -1;
        }
        
        return comparison;
    };
      
    let selecteddata = givenData.filter(function(d) {
        return d.plaats.toLowerCase() == givenCity.toLowerCase();
    });

    selecteddata.sort(alphabeticalSort);
    console.log("This data gets returned from parseData.js: ", selecteddata)
    console.log("It's length is: ", selecteddata.length)
    return selecteddata;
}