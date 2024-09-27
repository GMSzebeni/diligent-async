import { openSchrodringerBox } from "./promises.js";

/* 
  - We have a box and a cat in it. We don't know which cat.
  - If we open the box two outcome is possible, the cat is alive and we got back the name of the cat,
    or the cat is dead unfortunately.
  - Detect the cat's state log "Alive:" with the cat's name to the console if the cat is alive.
  - Log the "Dead:" and the error message, if the cat is dead. 
  - Use the openSchrodringerBox() function.

    It has no parameter, but returns a Promise. A promise fulfills with the cat name in 50% of
    the calls. It can also rejects with a JS Error in 50%.

    syntax: openSchrordringer(): Promise<string>
*/

const task = async () => {
}

task()