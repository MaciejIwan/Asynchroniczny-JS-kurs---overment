const promise = Promise.resolve(42);
console.log(promise);

// Promise.resolve() moze sie przydac gdy np w funkcji mamy dwa przypadki:
// gdy pewne dane mamy juz lokalnie, oraz taki gdy musimy zaciagnac informacje z serwera
// aby "na zewnatrz" funkcji kazdy w obu przypadkach zwracac to samo
// wykorzystuje,my .resolve() do zwrocenia natychmiastowego wybujy jako obietnica

// antyprzyklad
function fetchUser(id) {
    // localSorage | server
    const user = localStorage.getItem(`user-${id}`);
    return user ?
        user :
        User.find(user => {
            localStorage.setItem(`user-${id}`, user);
            return user;
        });
}
// przy uzyciu funkcji jak wyzej nie zawsze mamy mozliwosc uzycia .then

// fetchUser2 zapewnia nam uzycie .then w kazdym zwracanym przypadku
function fetchUser2(id) {
    // localSorage | server
    const user = localStorage.getItem(`user-${id}`);
    return user ?
        Promise.resolve(user) :
        User.find(user => {
            localStorage.setItem(`user-${id}`, user);
            return user;
        });
}

// uwaga!!!
// object resolve moze zwrocic false w dwoch przypadkach!!!

// Przypadek 1:
const promise1 = Promise.resolve(Promise.reject(Error("Trool")));
console.log(promise1);

// Przypadek 2 - gdy zwracamy tkzw thenable
const thenable = {
    then: function(resolve, rejected) {
        rejected("Oops")
    }
}
const promise2 = Promise.resolve(thenable);
console.error(promise2)