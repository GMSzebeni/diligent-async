/*
  - Use the fetch function to get a HTTP response from the Rick and Morty API.
      E.g. https://rickandmortyapi.com/api/character/2
  - Right now also get the HTTP response's body, but only if the status code is
    between 200 and 299. If not, show a meaningful error message to the user in the
    #root div. (Fetch's promise won't reject, if status code is not 200).
  - If the fetch's promise is rejected, also show a meaningful error message in
    the #root div.
  - Display the character's name in the root div, is everything is fine. 

  - You can reject a fetch method if the URL does not exists or you put your browser
    offline on the network panel. This way you can test the error case.
  - You can test the non 2xx HTTP response, if you try a character id which does not exists.
  
  See: https://rickandmortyapi.com/documentation
*/