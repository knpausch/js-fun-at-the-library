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
  var greeting;
  var bookFound;

  if (genre === "fantasy")
  {
    for (var i = 0; i<shelfFantasy.length;i++)
    {
      if (shelfFantasy[i].title === book)
      {
        bookFound = true;
        shelfFantasy.splice(i,1);
      }
    }
  }
  else if (genre === "fiction")
  {
    for (var i = 0; i<shelfFiction.length;i++)
    {
      if (shelfFiction[i].title === book)
      {
        bookFound = true;
        shelfFiction.splice(i,1);
      }
    }
  }
  else
  {
    for (var i = 0; i<shelfNonFiction.length;i++)
    {
      if (shelfNonFiction[i].title === book)
      {
        bookFound = true;
        shelfNonFiction.splice(i,1);
      }
    }
  }

  if (bookFound === true)
  {
    greeting = `You have now checked out ${book} from the Denver Public Library`
  }
  else {
    greeting = `Sorry, there are currently no copies of ${book} available at the Denver Public Library`
  }
  return greeting;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
