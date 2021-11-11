const { resolve } = require("path/posix");

const p = new Promise((resolve, reject) => {
    resolve(5);
});

// metoda then zwraca obietnie
p.then(result => result * 2)
    .then(result => { return result * 2 })
    .then(result => {
        console.log(result);
        return new Promise((resolve, reject) => resolve(0));
    })
    .then(result => console.log(result))
    //
    // catach wykona sie gdy w dziele jakiegokolwiek then pojawi sie blad
    .catch(reason => console.log(reason))
    //
    // finally wykona sie po zakonczeniu akcji  niezaleznie od wyniku
    // wykona sie gdy bedzie blad i catch, oraz gdy wszystko bedzie dobrze
    // mozna wykorzystac to np do sytuacji gdy chcemy wylaczyc ikonke ladowania
    .finally(() => console.log('Finished'));