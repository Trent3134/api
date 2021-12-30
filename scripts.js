fetch("https://ghibliapi.herokuapp.com/films")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
      displayresults(json);
    });


let container = document.getElementById("container");


function displayresults(movies) {
  console.log(container);
  //let director = document.querySelector("container");
  console.log(movies)
  for(movie of movies){
    console.log(movie.title)


    let movieHeader = document.createElement('h2')
    let directorName = document.createElement('p')

    
    console.log(directorName);
    movieHeader.innerHTML = movie.title
    directorName.innerHTML = movie.director
    container.appendChild(movieHeader)
    container.appendChild(directorName)
  }
  //   console.log("display results", json);
  //   console.log(movieTitle, director);
}
