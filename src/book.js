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

// function saveReview (statement) {
// var listOfReviews = [];
// listOfReviews.push(statement);
// return listOfReviews;
// }

module.exports = {
  createTitle,
  buildMainCharacter,
  //saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
