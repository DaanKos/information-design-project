// This code has been written by Alen Nikolov, found at https://stackoverflow.com/a/49259225/12734791

export default function getNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}