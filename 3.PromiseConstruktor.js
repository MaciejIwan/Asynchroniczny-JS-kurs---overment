// jak stworzyc wlasna obietnice
// objekt promise przyjmuje dwa callbacki resolve i reject
console.log("Odcinek 3");

const promise = new Promise((resolve, reject) => {
    // resolve przyjmuje tylko jeden argument, jesli chcesz zwrocic wiecej danych
    // zwroc obiekt lub tablcie
    setTimeout(() => { resolve([10, 20, 30]) }, 2000);

    // reject rowniez  przyjmuje jeden argument.
    // dobrze jest zwracac obiekt bledu (odkomentowac do sprawdzenia dzialania)
    //reject(new Error('Ooops!'));
});

// metoda then przyjmuje dwa argumenty. 
// Pierwszym jest funkcja która uruchomi się gdy wszystko będzie pomyślnie
// drugim jest obsluga blednie rozwiazanej obietnicy
promise.then(
    value => console.log(value),
    reason => console.log(reason)
);

// meotda catch pozwala na zrezygnowanie z drugiego argumentu then()
promise.catch(reason => { console.log(reason) })