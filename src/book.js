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

function saveReview (statement,listOfReviews) {
listOfReviews.push(statement);
return listOfReviews;

// var flag = false;
//
// for (var i = 0; i < listOfReviews.length; i++)
// {
//   if(listOfReviews[i] != statement)
//   {
//     flag = true;
//   }
// }
//
// if(flag === false)
//   {
//     listOfReviews.push(statement);
//   }
//   return listOfReviews;

}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
