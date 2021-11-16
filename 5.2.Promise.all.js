// PROMISE ALL

// jesli chcesz aby program dzialal np. gdy tylko czesc z obietnic sie wykona
// bledy nalezy obslugiwac bezposrednio przy obietnicach jak nizej:
Promise.all([
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 5000)),
        Promise.reject(Error("Wystąpil blad ale masz reszte rozwiazan (tych ktore sie powiodly)")).catch(err => console.log(err.name)),
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 200)),
    ]).then(responses => {
        console.log(`reszta rozwizan:`, responses);
    }).catch(error => console.log(error))
    // catch zostanie wywolany gdy ktorakolwiek z obietnic zwroci error
    .then(() => {
        // antyprzyklad
        Promise.all([
            new Promise((resolve, reject) => setTimeout(() => resolve(1), 5000)),
            Promise.reject(Error("cyk... i tracisz reszte rozwiazan")),
            new Promise((resolve, reject) => setTimeout(() => resolve(1), 200)),
        ]).then(responses => {
            console.log(responses);
        }).catch(error => console.log(error));
    });