function shelfBook(book, sciFiShelf)
{
  if (sciFiShelf.length < 3)
  {
    sciFiShelf.unshift(book);
  }
  return sciFiShelf;
}

module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};
