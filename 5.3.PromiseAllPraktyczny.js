const { default: axios } = require("axios");

const names = ["apple", "microsoft"];

const requests = names.map(
    name => axios.get(`https://api.github.com/users/${name}`)
);

Promise.all(requests)
    .then(data => data.map(user => user.data)) // data to tablica rozwiazanych obietnich | .data to dostanie sie do danych pobranych z api bo w ten sposob axios zwraca dane
    .then(users => users.forEach(user => console.log(user.login)));