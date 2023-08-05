const promise = require('promise');
const fetch = (string) => {
    return new promise((resolve, reject) => {
        if(string.length <=4){
            reject("This string is shorter")
        }
        resolve(new promise((resolve, reject) => {
            resolve('Json Data')
        }))
    })
}

// await and async

async function sampleAsyncFunction(){
    const name = await fetch('ajmalmankarathoi');
    const value = await name
    console.log(value);
}



// fetch("ajmalm").then((data) => {
//     return data
// }).then((json) => {
//     console.log(json);
// }).then(() => {
//     console.log("after the json data");
// }).then(() => {
    
// }).then(() => {
//     console.log("after long json data");
// })
// .catch((err) => {
//     console.log(err);
// })

// JavaScript is Default Synchronus Behaviour
// function hai(){
//     for (var i = 0; i < 100; i++) {
//         console.log('loop');
//     }
// }

// console.log("start");
// hai()
// console.log("end")

// Synchronous code executes one operation at a time, in sequence, and waits for each operation to finish before moving on to the next one.
// Asynchronous code allows the program to continue executing other tasks while waiting for certain operations to complete.
