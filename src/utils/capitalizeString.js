// Based on code by Paulund found at https://paulund.co.uk/how-to-capitalize-the-first-letter-of-a-string-in-javascript
// Modified to make sure the string is lowerCase first, this catches possible user errors when using multiple capital letters in their query

export default function capitalizeString(string) {
    let stringInUse = string.toLowerCase();
    return stringInUse.charAt(0).toUpperCase() + stringInUse.slice(1);
}