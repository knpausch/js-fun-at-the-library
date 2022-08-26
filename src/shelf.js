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

module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
