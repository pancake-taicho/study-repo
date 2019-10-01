const movieDB = [
  {
    title: 'Die Hard',
    haveWatched: true,
    rating: 5,
  },
  {
    title: 'Blade Runner',
    haveWatched: true,
    rating: 5,
  },
  {
    title: 'Donnie Darko',
    haveWatched: false,
    rating: 3,
  },
  {
    title: 'Jurassic World',
    haveWatched: true,
    rating: 2.5,
  },
];

// MY SOLUTION:

for (let i = 0; i < movieDB.length; i++) {
  var watched;
  if (movieDB[i].haveWatched) {
    watched = 'have watched';
  } else {
    watched = 'have not watched';
  }
  console.log(
    `You ${watched} "${movieDB[i].title}" - ${movieDB[i].rating} stars`
  );
}

// VIDEO'S SOLUTION:

movieDB.forEach(function(movie) {
  console.log(buildString(movie));
});

function buildString(movie) {
  let result = 'You have ';
  if (movie.haveWatched) {
    result += 'watched ';
  } else {
    result += 'not seen ';
  }
  result += `"${movie.title}" - `;
  result += `${movie.rating} stars`;
  return result;
}
