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
  // listOfReviews.push(statement);
  // return listOfReviews;
  var isDuplicate;

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

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
