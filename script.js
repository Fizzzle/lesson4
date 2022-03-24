'user strict'

const now = new Date();

// console.log(now.setHours(18));
// console.log(now);
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++){
    let some = i ** 3;
}

let end = new Date();

console.log(`Цикл ${end - start}`);