function shelfBook(book, sciFiShelf)
{
  if (sciFiShelf.length < 3)
  {
    sciFiShelf.unshift(book);
  }
  return sciFiShelf;
}

function unshelfBook(book, sciFiShelf)
{
  for (var i = 0; i<sciFiShelf.length;i++)
  {
    if (sciFiShelf[i].title === book)
    {
      sciFiShelf.splice(i,1);
    }
  }
  return sciFiShelf;
}

function listTitles(shelf)
{
  var listOfTitles = [];
  var result;

  for(var i = 0; i<shelf.length; i++)
  {
    listOfTitles.push(shelf[i].title)
  }

  result = `${listOfTitles[0]}, ${listOfTitles[1]}, ${listOfTitles[2]}`

  return result;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};
