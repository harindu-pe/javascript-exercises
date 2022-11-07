const getTheTitles = function (books) {
  const titleArray = books.map((book) => {
    return book.title;
  });

  return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
