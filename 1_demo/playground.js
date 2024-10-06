import {sleep, openSchrodringerBox, fail, getRandomNumber} from "../promises.js";

// Promise basics

const promise = sleep(2000);
promise.then(() => {
    console.log('hi')
});

promise.then(() => {
    console.log('hi')
});

fail()
    .then(() => {
        console.log('hi');
    })
    .catch(() => {
        console.log('oops')
    })

    openSchrodringerBox()
        .then(() => {
            console.log('HI');
        }, () => {console.log('oops')})