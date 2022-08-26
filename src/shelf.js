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
  //KIKO NOTE: Loop or use .include(book) to find matching
  //title in array. Once found, assign it to index. Then
  //splice(index, 1) to remove it.
  //ISSUE: Atom will not display array of objects but repl
  //will. Only displays as [object][object]
  //
  // var index;
  // var titleFound;
  //
  // for (var i = 0; i<sciFiShelf.length;i++)
  // {
  //   if (sciFiShelf[i].name == book)
  //   {
  //     titleFound = true;
  //   }
  // }
  //
  // if (titleFound === true)
  // {
  //   index = sciFiShelf.indexOf(book);
  //   sciFiShelf.splice(index,1);
  // }
  return sciFiShelf;
}

module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
