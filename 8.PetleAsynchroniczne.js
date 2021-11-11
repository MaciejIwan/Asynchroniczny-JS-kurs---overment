const items = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

async function fnWithAsyncLoop() {
    for await (const item of items) {
        console.log(item)
    }
    console.timeEnd("#2");
}

console.time("#1");
console.time("#2");
fnWithAsyncLoop();
console.timeEnd("#1");