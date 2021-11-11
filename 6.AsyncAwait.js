// async 
// słówko kluczowe async przed funkcja gwarantuje że zostanie zwrócona objetnica
// jak w poniższym przykladzie funkcje a i b oznaczaja dokladnie to samo

const { resolve } = require("path/posix");

const a = async() => { return 2; };
const b = () => Promise.resolve(2);

a().then(result => console.log(result));
b().then(result => console.log(result));

// słówko await działa tylko w funkcji async
async function foo() {
    const promise = await new Promise((resolve, reject) => {
        try {
            setTimeout(() => resolve("finished!"), 2000);
        } catch {
            reason => reject(Error(reason));
        }
    });
    console.log("Poza obietnicą", promise);
}

foo();
console.log("essa");