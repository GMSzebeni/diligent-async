import { openSchrodringerBox } from "../promises.js";

/*
  Open 3 Shrodringer boxes right after to each other. If the opening is successful, log 
  the cat's name to the console, if not stop the chain.
*/

const task = async () => {
  try {
    const cat = await openSchrodringerBox();
    console.log(cat);
  } catch (error) {
    console.log(error);
  }
}

task()