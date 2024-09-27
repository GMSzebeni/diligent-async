import { readFile, writeFile } from 'fs/promises'

/*
  - Create a function, that opens the quote.txt and read its content and log it to the console.
  - Reverse the content of the file character by character and write it to the reversed.txt.
  - If the there is an error during the read or the write, log a fridenly error message to the console. 
  (you can test it, if you try to open a non existent file)
  - use node.js's readFile() function's promise version.
    
    syntax: readFile(path: string, encoding: string): Promise<string>
    example: readFile('./some-file.txt', 'utf8')

  - use node.js's writeFile() function's promise version.

    syntax: writeFile(path: string, data: string, encoding: string): Promise
    example: readFile('./some-file.txt', 'here is the file content','utf8')

*/

const task = () => {

}

task()