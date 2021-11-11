// przyklad 1 zwykly synchronczny 
const arr = [1, 2, 3];
arr.forEach((item) => {
    console.log(item);
});
console.log("Finished");

// przyklad 2
const axios = require('axios')
const iTunes = axios.get('https://api.github.com/users/mapbox');
console.log(iTunes)

// akcja która wykona się po otrzymaniu danych z api
iTunes.then(
    response => console.log(response.data),
    reason => console.log(reason)
);

console.log("Dowód na to że js nie czeka tylko leci dlaej :P")