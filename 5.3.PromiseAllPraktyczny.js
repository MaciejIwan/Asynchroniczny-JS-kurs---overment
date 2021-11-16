const { default: axios } = require("axios");

const names = ["apple", "microsoft"];

const requests = names.map(
    name => axios.get(`https://api.github.com/users/${name}`)
);

const wait = Promise.all(requests)
    .then(data => data.map(user => user.data)) // data to tablica rozwiazanych obietnich | .data to dostanie sie do danych pobranych z api bo w ten sposob axios zwraca dane
    .then(users => users.forEach(user => console.log(`PART 1: ${user.login}`)))
    .catch(e => { console.log(`Zapytanie z pierwszej częsci nie powiodło się`) });




// TESTUJE NOWE OPCJE SAMEMU
// chciałnum zrobbić pętle i zapytania do api w pętli
console.log(`PART 2`);

(async () => {
    while (true) {
        const requests2 = names.map(
            name => axios.get(`https://api.github.com/users/${name}`)
        );
        const result = await Promise.all(requests2)
            .then(data => data.map(user => user.data)) // data to tablica rozwiazanych obietnich | .data to dostanie sie do danych pobranych z api bo w ten sposob axios zwraca dane
            .then(users => { users.forEach(user => console.log(user.login)) })
            .then(() => new Promise((resolve, reject) => {
                setTimeout(() => { resolve([10, 20, 30]) }, 5000)}))
            .catch(e => {
                console.log("No niestety zapytanie się nie udało");
                return new Promise((resolve, reject) => {
                    setTimeout(() => { resolve(["smuteczek"]) }, 5000);
                });
            });

        console.log("To nie powinno sie stac przed odpowiedzia z api :)", result);

    }
})();