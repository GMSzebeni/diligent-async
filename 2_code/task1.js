import { surpriseMe } from "../promises";

/*
  surpriseMe returns a promise, which fulfills to a random sweetness. 
  Log this sweetness to the user. 
*/

const task = () => {
  surpriseMe().then(sweetness => {
    console.log(sweetness);
  })
}

task();