//STEP 1
let movies = ['Batman', 'Superman', 'Aquaman', 'Flash', 'Wonderwoman'];
window.console.log(movies[1]);

//STEP 2
let movies = new Array(5);

movies[0] = "Batman";
movies[1] = "Superman";
movies[2] = "Aquaman";
movies[3] = "Flash";
movies[4] = "Wonderwoman";

window.console.log(movies[0]);


//STEP 3
let movies = new Array(5);
movies[0] = "Batman";
movies[1] = "Superman";
movies[2] = "Aquaman";
movies[3] = "Flash";
movies[4] = "Wonderwoman";

window.console.log(movies[0]);

movies.splice(2,0,'Cyborg');
window.console.log(movies.length);


//STEP 4
var movies = []
movies[0] = "Batman";
movies[1] = "Superman";
movies[2] = "Aquaman";
movies[3] = "Flash";
movies[4] = "Wonderwoman";

delete movies[0];
window.console.log(movies);

//STEP 5
var movies = []
movies[0] = "Batman";
movies[1] = "Superman";
movies[2] = "Aquaman";
movies[3] = "Flash";
movies[4] = "Wonderwoman";
movies[5] = "Cyborg";
movies[6] = "Greenlantern";

for (let index = 0; index < movies.length; index++) {
    window.console.log(movies[i]);
}


//STEP 6
var movies = []
movies[0] = "Batman";
movies[1] = "Superman";
movies[2] = "Aquaman";
movies[3] = "Flash";
movies[4] = "Wonderwoman";
movies[5] = "Cyborg";
movies[6] = "Greenlantern";

var movie;
for (movie in movies) {
    if (movies.hasOwnProperty(movie)) {
        windows.console.log(movies[movie]);
    }
}

//STEP 7

var movies = []
movies[0] = "Batman";
movies[1] = "Superman";
movies[2] = "Aquaman";
movies[3] = "Flash";
movies[4] = "Wonderwoman";
movies[5] = "Cyborg";
movies[6] = "Greenlantern";

movies.sort();

var movie;
for (movie in movies) {
    if (movies.hasOwnProperty(movie)) {
        windows.console.log(movies[movie]);
    }
}
//STEP 8

var movies = []
movies[0] = "Batman";
movies[1] = "Superman";
movies[2] = "Aquaman";
movies[3] = "Flash";
movies[4] = "Wonderwoman";
movies[5] = "Cyborg";
movies[6] = "Greenlantern";


var leastFavMovies = ['kolo', 'polo', 'kolopolo'];
window.console.log("Movies I like: \n \n");
var movie;
for (movie in movies) {
    if (movies.hasOwnProperty(movie)) {
        windows.console.log(movies[movie]);
    }
}

window.console.log("\n\nMovies I regret watching:\n\n");
var movieL;
for (movieL in leastFavMovies) {
    if (leastFavMovies.hasOwnProperty(movieL)) {
        windows.console.log(mleastFavMoviesovies[movieL]);
    }
}

//STEP 9
var movies = []
movies[0] = "Batman";
movies[1] = "Superman";
movies[2] = "Aquaman";
movies[3] = "Flash";
movies[4] = "Wonderwoman";
movies[5] = "Cyborg";
movies[6] = "Greenlantern";

var leastFavMovies = ['kolo', 'polo', 'kolopolo'];
movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();

var movie;
for (movie in movies) {
    if (movies.hasOwnProperty(movie)) {
        windows.console.log(movies[movie]);
    }
}

//STEP 10

var movies = []
movies[0] = "Batman";
movies[1] = "Superman";
movies[2] = "Aquaman";
movies[3] = "Flash";
movies[4] = "Wonderwoman";
movies[5] = "Cyborg";
movies[6] = "Greenlantern";

var leastFavMovies = ['kolo', 'polo', 'kolopolo'];
movies = movies.concat(leastFavMovies);

window.console.log(movies.pop());