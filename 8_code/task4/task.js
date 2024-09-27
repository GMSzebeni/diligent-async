
/**
 * Task: use the Star Wars API to fetch the character with the given ID.
 *  - The user can input 3 character IDs in 3 input fields.
 *  - You can choose between `then` and async-await syntax.
 *  - Use the Star Wars API: https://swapi.dev/
 * 
 *      Usage: GET https://swapi.dev/api/people/<n> where <n> is the id of the character.
 *      Example: GET https://swapi.dev/api/people/1 will return the first character.
 * 
 *  - Show the 3 character's name separated by comma in the div with ID "characters" 
 *     if the response's status code is between 200 and 299.
 *  - Show a friendly error message in the "errorMessage" div, e.g. "Could not get the character",
 *      if the least one status code of the 3 responses are outside of the range 200-299
 *      You can test for example a 404 error code with the 999 ID.
 *  - Show a fridenly error message in the "errorMessage" div, if the fetch's promise rejects, 
 *      You can test this scenario, if you mistype the domain
 *      in the fetch, e.g "https://swapioops.dev/api/people/1" or choosing "Offline" network condition
 *      in the network panel. 
 * 
 * - Use async/await syntax
 * 
 * Hint: 
 *  - use Promise.all() or Promise.allSettled(), remember these functions also return promises.
 * 
 * Goal: Handle multiple concurrent fetches.
 */

const handleSubmitCharacters = async (event) => {
  event.preventDefault();
  const form = event.target;
  const id1 = form.elements['characterId1'].value;
  const id2 = form.elements['characterId2'].value;
  const id3 = form.elements['characterId3'].value;
  const characterIds = [id1, id2, id3];

  // write your code here
  console.log(characterIds);
}
const charactersForm = document
  .getElementById('charactersForm')
  .addEventListener('submit', handleSubmitCharacters)