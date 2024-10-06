import { surpriseMe, sleep } from "../promises.js";

/* 
  Eating a sweetness took time. Use the surpriseMe function
  to get a new sweetness (through a promise). 
  
  If it is an Ice Cream, wait two seconds. 
  If it is a Muffin, reject the upcoming promises. 
  In any other cases wait 1 sec only.
  Always log to the user what does it happened.  
*/

const task = async () => {
  try {
    let wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const sweet = await surpriseMe();

    console.log(`Eating ${sweet}`);
    
    if (sweet === "Muffin") {
      throw new Error('No more sweetness allowed!');
    } else if (sweet === "Ice Cream") {
      await wait(2000);
    } else {
      await wait(1000);
    }

    console.log(`Finished eating: ${sweet}`);
  
  } catch (error) {
    console.error(error.message);
    throw new Error();
  }
}

/*const task = ( ) => {
  surpriseMe().then(sweet => {
    if (sweet === "Muffin") {
      console.log(sweet);
      throw new Error("Muffin was found, no other sweets can follow!")    }
    else if (sweet === "Ice Cream") {
      setTimeout(() => {
        console.log(sweet);
      }, 2000)
    } else {
      setTimeout(() => {
        console.log(sweet);
      }, 1000)
    }
  })
}*/

const sweet1 = task();
const sweet2 = task();
const sweet3 = task();
const sweet4 = task();
const sweet5 = task();
const sweet6 = task();