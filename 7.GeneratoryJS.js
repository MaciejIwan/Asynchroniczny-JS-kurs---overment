// był to poprzednik słów async await
// generator tak naprawdę jest funkcja, jednak taką na którą mozęmy mnieć kontrole 
// nad wykonywaniem kolejnych instrukcji. działa to prawie tak jak breakpointy w debuggerze

// aby utworzyc generator do funkcji należy dodać *
function* moviesSequence() {
    yield "Never say never";
    yield "Never back down";
    yield console.log("Shrek"); //  console return undefind, shrek  display here
}

let movieGen = moviesSequence();
console.log(movieGen.next());
console.log(movieGen.next());
console.log(movieGen.next());
console.log(movieGen.next());
movieGen.return();
console.log("teraz zobaczmy jak to zadziała w pętli");

movieGen = moviesSequence();
for (let movie of movieGen) {
    console.log(movie);
}



// przyklad
const axios = require("axios");
console.log('\x1b[35m%s\x1b[0m', "ponizej przyklad z funkcjami:"); //yellow

const url = `https://api.discogs.com/artists/`;

function fetchArtist(url) {
    axios.get(url).then(result => artistGen.next(result.data)).catch(err => console.log(err))
}

function* artists() {
    const artist = yield fetchArtist(url + 782590);
    console.log(artist.name);
}

const artistGen = artists();
artistGen.next()


// przyklad jak zmodyfikować funkcje aby uzyc async await
function fetchArtistAsync(url) {
    return axios.get(url).then(result => result.data).catch(err => console.log(err));
}

async function artists2() {
    const artist = await fetchArtistAsync(url + 782590);
    console.log(artist.name);
}
artists2();