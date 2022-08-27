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

function checkoutBook(library, book, genre)
{
  var shelfFantasy = library.shelves.fantasy;
  var shelfFiction = library.shelves.fiction;
  var shelfNonFiction = library.shelves.nonFiction;
  var result;

  if (genre === "fantasy")
  {
    if(shelfFantasy.includes(book) === true)
    {
      return result = `You have now checked out ${book} from the Denver Public Library`;
    }
  }
  if (genre === "fiction")
  {
    if(shelfFiction.includes(book) === true)
    {
      return result = `You have now checked out ${book} from the Denver Public Library`;
    }
  }
  if (genre === "nonFiction")
  {
    if(shelfNonFiction.includes(book) === true)
    {
      return result = `You have now checked out ${book} from the Denver Public Library`
    }
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
