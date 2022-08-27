function createLibrary(libraryName)
{
  var library = {
    name:libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library;
}


function addBook(library, book)
{
  var bookGenre = book.genre;

  if (bookGenre === "fantasy")
  {
    library.shelves.fantasy.push(book);
  }
  else if (bookGenre === "fiction")
  {
    library.shelves.fiction.push(book);
  }
  else
  {
    library.shelves.nonFiction.push(book);
  }

  return library;

}

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};
