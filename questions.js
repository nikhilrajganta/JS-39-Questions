// Q1. Implement getUserAge function
const userData = {
  user: {
    profile: {
      name: "Alice",
      age: null,
    },
  },
};

function getUserAge(userData) {
  const checkAge = userData?.user?.profile?.age ?? "Age not provided";
  return checkAge;
}

console.log(getUserAge(userData)); // Should print: Age not provided
console.log(getUserAge({ user: { profile: { age: 25 } } })); // Should print: 25
console.log(getUserAge({ user: {} })); // Should print: Age not provided

// Q2. Write a function that returns a new array with an additional skill for each employee
const employees = [
  {
    id: 1,
    name: "Alice",
    position: "Developer",
    skills: ["JavaScript", "React"],
  },
  {
    id: 2,
    name: "Bob",
    position: "Manager",
    skills: ["Leadership", "Communication"],
  },
  { id: 3, name: "Charlie", position: "CEO", skills: ["Strategy", "Vision"] },
];

function addSkill(employees, newSkill) {
  return employees.map((employee) => ({
    ...employee,
    skills: [...employee.skills, newSkill],
  }));
}

console.log(addSkill(employees, "Problem Solving"));

// Q3. Find the total price of all products using arrow functions and array methods - Implement getTotalPrice
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 },
];

const getTotalPrice = products.reduce(
  (total, product) => total + product.price,
  0
);
console.log(getTotalPrice);

// Q4: Write a function that extracts the user's name and theme, providing default values if they are missing
const userProfile = {
  id: 1,
  name: "Eve",
  settings: {
    theme: "dark",
  },
};

function getUserSettings(userProfile) {
  const { id, name, settings } = userProfile;
  return `${name ?? "user"} prefers the ${settings?.theme ?? "light"} theme`;
}

function getUserSettings1(userProfile) {
  const { id, name = "user", settings = { theme: "light" } } = userProfile;
  return `${name} prefers the ${settings.theme} theme `;
}

console.log(getUserSettings1(userProfile)); // Should print: Eve prefers the dark theme
console.log(getUserSettings1({ id: 2, name: "Adam" })); // Should print: Adam prefers the light theme

// Q5: Write a function that takes a user object and returns a message indicating if the user is active or not
const user1 = { name: "Jane", active: true };
const user2 = { name: "John", active: false };

function getUserStatus(user) {
  return `${user.name} is currently ${user.active ? "active" : "inactive"} `;
}

console.log(getUserStatus(user1)); // Should print: Jane is currently active
console.log(getUserStatus(user2)); // Should print: John is currently inactive

// Q6: Write a function that returns the user's age if available, or a default message if not, using nullish coalescing and optional chaining
const userWithFullProfile = {
  id: 1,
  name: "Alice",
  profile: {
    age: 25,
    address: {
      city: "Wonderland",
      zip: "12345",
    },
  },
};

const userWithPartialProfile = {
  id: 2,
  name: "Bob",
  profile: {
    age: null,
  },
};

function getUserAge(userprofile1) {
  return `${userprofile1?.profile?.age ?? "Age not provided"} `;
}

console.log(getUserAge(userWithFullProfile)); // Should print: 25
console.log(getUserAge(userWithPartialProfile)); // Should print: Age not provided
console.log(getUserAge({ id: 3, name: "Charlie" })); // Should print: Age not provided

// Q7: Write a function that generates a summary string for the top scorer using template literals and array methods
const scores = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 92 },
];

function getTopScorer(scores) {
  const topScorer = scores.reduce((a, b) => (a.score > b.score ? a : b));
  return `${topScorer.name} is the top scorer with a score of ${topScorer.score}`;
}
console.log(getTopScorer(scores)); // Should print: Charlie is the top scorer with a score of 92.

// Q8: Create a function that returns a greeting message based on the time of day
function greet(name) {
  const hour = new Date().getHours();
  if (hour < 12) {
    return `Good morning, ${name}!`;
  } else if (hour < 18) {
    return `Good afternoon, ${name}!`;
  } else {
    return `Good evening, ${name}!`;
  }
}

console.log(greet("Alice")); // Depending on the time, it will print: Good morning, Alice! / Good afternoon, Alice! / Good evening, Alice!

// Q9: Write a function that returns the name of a user's first friend using nested destructuring
const users = [
  { id: 1, name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
  { id: 2, name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
  { id: 4, name: "Deepak", friends: [] },
];

function getFirstFriendName(userId) {
  const user = users.find((u) => u.id === userId);
  if (!user) {
    return "User not found";
  }
  if (user.friends.length === 0) {
    return `${user.name} has no friends 🥲`;
  }
  const {
    friends: [{ name }],
  } = user;
  return name;
}

console.log(getFirstFriendName(1)); // Should print: Bob
console.log(getFirstFriendName(2)); // Should print: Eve
console.log(getFirstFriendName(3)); // Should print: User not found
console.log(getFirstFriendName(4)); // Should print: Deepak has no friends 🥲

const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

// Q10. Write a function that finds a movie by id and returns its title and genre in a formatted string
function getMovieDetails(userId) {
  const movie1 = movies.find((m) => m.id === userId);
  if (!movie1) {
    return "Movie not found";
  } else {
    return `${movie1.title} is an ${movie1.genre} movie`;
  }
}

console.log(getMovieDetails(1)); // Should print: Baahubali is an Action movie
console.log(getMovieDetails(5)); // Should print: Jersey is a Sports movie
console.log(getMovieDetails(6)); // Should print: Movie not found

// Q11. Write a function that filters out movies released before a certain year and calculates the average rating of the remaining movies (Rating must be rounded)
function getAverageRatingAfterYear(year) {
  const moviesAfterYear = movies.filter((movie) => movie.year >= year);
  if (moviesAfterYear.length === 0) {
    return "No movies after the specified year";
  }
  const totalRating = moviesAfterYear.reduce((sum, movie) => {
    const averageRating = Math.round(
      movie.ratings.reduce((total, rating) => total + rating, 0) /
        movie.ratings.length
    );
    return sum + averageRating;
  }, 0);
  const averageRating = (totalRating / moviesAfterYear.length).toFixed(2);
  return averageRating;
}

console.log(getAverageRatingAfterYear(2016)); // Should print: 8.83
console.log(getAverageRatingAfterYear(2020)); // Should print: No movies after the specified year

// Q12. Write a function that checks if all movies of a certain genre have ratings above a given value
function allRatingsAboveForGenre(minRating, genre) {
  const genreMovies = movies.filter((movie) => movie.genre === genre);
  const allAboveRating = genreMovies.every((movie) =>
    movie.ratings.every((rating) => rating >= minRating)
  );
  return allAboveRating
    ? `Yes, all ${genre} movies are above ${minRating} ratings`
    : `No, not all ${genre} movies are above ${minRating} ratings`;
}

console.log(allRatingsAboveForGenre(8, "Action")); // Should print: Yes, all Action movies are above 8 ratings
console.log(allRatingsAboveForGenre(9, "Fantasy")); // Should print: No, not all Fantasy movies are above 9 ratings

// Q13. Write a function that returns an array of movie titles and their average ratings (average ratings rounded to the nearest whole number)
function getTitlesAndRatings() {
  return movies.map((movie) => {
    const averageRating = Math.round(
      movie.ratings.reduce((total, rating) => total + rating, 0) /
        movie.ratings.length
    );
    return { title: movie.title, averageRating };
  });
}

console.log(getTitlesAndRatings());

// Q14. Write a function that returns all ratings from all movies
function getAllRatings() {
  return movies.flatMap((movie) => movie.ratings);
}

console.log(getAllRatings());

// Q15. Write a function that returns the movie titles sorted by their average rating in descending order (average ratings rounded)
function getTitlesSortedByAverageRating() {
  return movies
    .map((movie) => ({
      title: movie.title,
      averageRating: Math.round(
        movie.ratings.reduce((total, rating) => total + rating, 0) /
          movie.ratings.length
      ),
    }))
    .sort((a, b) => b.averageRating - a.averageRating)
    .map((movie) => movie.title);
}

console.log(getTitlesSortedByAverageRating()); // Should print movies sorted by average rating

// Q16. Write a function that returns the movie with the highest average rating
function getMovieWithHighestAverageRating() {
  return movies
    .map((movie) => ({
      title: movie.title,
      averageRating: Math.round(
        movie.ratings.reduce((total, rating) => total + rating, 0) /
          movie.ratings.length
      ),
    }))
    .reduce((highest, movie) =>
      highest.averageRating > movie.averageRating ? highest : movie
    );
}

console.log(getMovieWithHighestAverageRating()); // Should print: Mahanati

// Q17. Write a function that returns movie titles released after a certain year
function getTitlesAfterYear(year) {
  return movies
    .filter((movie) => movie.year > year)
    .map((movie) => movie.title);
}

console.log(getTitlesAfterYear(2015)); // Should print: [ 'Arjun Reddy', 'Mahanati', 'Jersey' ]
console.log(getTitlesAfterYear(2020)); // Should print: []

// Q18. Write a function that retrieves a movie’s information based on its title
function getMovieInfoByTitle(title) {
  const movie = movies.find((m) => m.title === title);
  return movie ? movie : "Movie not found";
}

console.log(getMovieInfoByTitle("Baahubali")); // Should print: Movie details of Baahubali
console.log(getMovieInfoByTitle("Avatar")); // Should print: Movie not found

// Q19. Write a function that returns a list of movie titles with ratings below a certain value
function getTitlesWithLowRatings(minRating) {
  return movies
    .filter((movie) => movie.ratings.some((rating) => rating < minRating))
    .map((movie) => movie.title);
}

console.log(getTitlesWithLowRatings(8)); // Should print: [ 'Baahubali', 'Eega' ]

// Q20. Write a function that calculates the total number of ratings for each genre
function getTotalRatingsByGenre() {
  return movies.reduce((acc, movie) => {
    if (!acc[movie.genre]) {
      acc[movie.genre] = movie.ratings.length;
    } else {
      acc[movie.genre] += movie.ratings.length;
    }
    return acc;
  }, {});
}

console.log(getTotalRatingsByGenre());

// Q21. Write a function that filters movies with an average rating above a specified threshold
function getMoviesWithHighAverageRating(threshold) {
  return movies.filter((movie) => {
    const averageRating = Math.round(
      movie.ratings.reduce((total, rating) => total + rating, 0) /
        movie.ratings.length
    );
    return averageRating > threshold;
  });
}

console.log(getMoviesWithHighAverageRating(8)); // Should print movies with average rating above 8

// Q22. Write a function that returns movie titles directed by a specific director, sorted by release year
function getTitlesByDirectorSortedByYear(director) {
  return movies
    .filter((movie) => movie.director === director)
    .sort((a, b) => a.year - b.year)
    .map((movie) => movie.title);
}

console.log(getTitlesByDirectorSortedByYear("S. S. Rajamouli")); // Should print: [ 'Eega', 'Baahubali' ]

// Q23. Write a function that calculates the average rating of movies released in a specific year
function getAverageRatingByYear(year) {
  const moviesInYear = movies.filter((movie) => movie.year === year);
  if (moviesInYear.length === 0) {
    return "No movies in this year";
  }
  const totalRating = moviesInYear.reduce((sum, movie) => {
    const averageRating = Math.round(
      movie.ratings.reduce((total, rating) => total + rating, 0) /
        movie.ratings.length
    );
    return sum + averageRating;
  }, 0);
  return (totalRating / moviesInYear.length).toFixed(2);
}

console.log(getAverageRatingByYear(2015)); // Should print: 8.00
console.log(getAverageRatingByYear(2020)); // Should print: No movies in this year

// Q24. Write a function that returns movies with their highest ratings
function getMoviesWithHighestRatings() {
  return movies.map((movie) => ({
    title: movie.title,
    highestRating: Math.max(...movie.ratings),
  }));
}

console.log(getMoviesWithHighestRatings());

// Q25. Write a function that finds the director with the most number of movies
function getDirectorWithMostMovies() {
  const directorCount = movies.reduce((acc, movie) => {
    acc[movie.director] = (acc[movie.director] || 0) + 1;
    return acc;
  }, {});
  const [director, count] = Object.entries(directorCount).reduce((a, b) =>
    a[1] > b[1] ? a : b
  );
  return { director, count };
}

console.log(getDirectorWithMostMovies()); // Should print: { director: 'S. S. Rajamouli', count: 2 }

// Q26. Write a function that merges two arrays of movies into a single array
const movies1 = [
  { id: 1, title: "Inception" },
  { id: 2, title: "Interstellar" },
];

const movies2 = [
  { id: 3, title: "The Matrix" },
  { id: 4, title: "The Dark Knight" },
];

function mergeMovies(movies1, movies2) {
  return [...movies1, ...movies2];
}

console.log(mergeMovies(movies1, movies2));

// Q27. Write a function that returns an array of movie titles
function getTitles() {
  return movies.map((movie) => movie.title);
}

console.log(getTitles());

// Q28. Write a function that retrieves the last N movie titles
function getLastNMovieTitles(n) {
  return movies.slice(-n).map((movie) => movie.title);
}

console.log(getLastNMovieTitles(2)); // Should print: [ 'Jersey', 'Mahanati' ]

// Q29. Write a function that retrieves movie titles based on an array of movie IDs
function getMovieTitlesByIds(ids) {
  return movies
    .filter((movie) => ids.includes(movie.id))
    .map((movie) => movie.title);
}

console.log(getMovieTitlesByIds([1, 3])); // Should print: [ 'Baahubali', 'Mahanati' ]

// Q30. Write a function that lists movie titles and their genres
function listMovies() {
  return movies.map((movie) => `${movie.title} (${movie.genre})`);
}

console.log(listMovies());

// Q31. Write a function that calculates the total number of ratings for each director
function getTotalRatingsForDirectors() {
  return movies.reduce((acc, movie) => {
    if (!acc[movie.director]) {
      acc[movie.director] = movie.ratings.length;
    } else {
      acc[movie.director] += movie.ratings.length;
    }
    return acc;
  }, {});
}

console.log(getTotalRatingsForDirectors());

// Q32. Write a function that sorts genres by total ratings in descending order
function getGenresSortedByTotalRatings() {
  const genreRatings = movies.reduce((acc, movie) => {
    if (!acc[movie.genre]) {
      acc[movie.genre] = movie.ratings.length;
    } else {
      acc[movie.genre] += movie.ratings.length;
    }
    return acc;
  }, {});

  return Object.entries(genreRatings)
    .sort((a, b) => b[1] - a[1])
    .map(([genre]) => genre);
}

console.log(getGenresSortedByTotalRatings());

// Q33. Write a function that calculates the total number of ratings for each year
function getTotalRatingsByYear() {
  return movies.reduce((acc, movie) => {
    if (!acc[movie.year]) {
      acc[movie.year] = movie.ratings.length;
    } else {
      acc[movie.year] += movie.ratings.length;
    }
    return acc;
  }, {});
}

console.log(getTotalRatingsByYear());

// Q34. Write a function that returns the highest rating received by each movie
function getHighestRatingsByMovie() {
  return movies.map((movie) => ({
    title: movie.title,
    highestRating: Math.max(...movie.ratings),
  }));
}

console.log(getHighestRatingsByMovie());

// Q35. Write a function that retrieves movie titles from a specific genre, sorted by their highest rating
function getTitlesByGenreSortedByRating(genre) {
  return movies
    .filter((movie) => movie.genre === genre)
    .map((movie) => ({
      title: movie.title,
      highestRating: Math.max(...movie.ratings),
    }))
    .sort((a, b) => b.highestRating - a.highestRating)
    .map((movie) => movie.title);
}

console.log(getTitlesByGenreSortedByRating("Action")); // Should print titles of Action genre movies sorted by highest rating
