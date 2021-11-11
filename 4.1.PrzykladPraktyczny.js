// https://www.youtube.com/watch?v=iA-XoMkqCUA

// tablice symulujace baze danych
const movies = [{ id: 1, category_id: 1, title: "Maciej w krainie js" }];
const categories = [{ id: 1, name: "Sci-fi" }];

//movie_id
function fetchMovie(id) {
    return new Promise((resolve, reject) => {
        const movie = movies.find(movie => movie.id === id);
        movie ? resolve(movie) : reject(new Error("Nie ma takiego filmu w bazie"));
    });
}

function populateCategory(movie) {
    // res i rej to tylko parametry ktore beda obslugiwane w nowopowstalej funkcji
    // argumentem promise dla jest cala funkcja, i to construktor nada argumenty dla nowje funkcji
    return new Promise((res, rej) => {
        const category = categories.find(category => category.id === movie.id);
        if (category) {
            movie.category = category;
            res(movie)
        }
        rej(Error("Nie ma filmu o takiej kategorii"));
    });
}

fetchMovie(1)
    .then(result => {
        console.log(result);
        return populateCategory(result)
    })
    .then(result => console.log(result))
    .catch(reason => console.log(reason))
    .finally(console.log("Przestałem szukać filmu"));