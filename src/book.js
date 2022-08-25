function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter (name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
return character;
}

function saveReview (statement,listOfReviews)
{
  if(listOfReviews.length === 0)
  {
    listOfReviews.push(statement);
  }
  else
  {
    if (listOfReviews.includes(statement) === false)
    {
      listOfReviews.push(statement);
    }
}
return listOfReviews;
}

function calculatePageCount(bookTitle)
{
  var pages = bookTitle.length*20;
  return pages;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
