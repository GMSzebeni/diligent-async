import { readFile } from "node:fs/promises";

/*
  - Create a function, that opens the quotes.txt and read its content and log it to the console.
  - If the there is an error during the read, write a fridenly error message to the console. 
  (you can test it, if you try to open a non existent file)
  - use node.js's readFile() function's promise version.
    
    syntax: readFile(path: string, encoding: string): Promise<string>
    example; readFile('./some-file.txt', 'utf8')
*/

const task = async () => {
  try {
    const content = await readFile('./quotes.txt', 'utf8');
    console.log(content);
  } catch (error) {
    console.error("Oops! Couldn't read the file. Please check if the file exists and try again.");
  }
}

task()
