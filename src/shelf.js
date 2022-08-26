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
