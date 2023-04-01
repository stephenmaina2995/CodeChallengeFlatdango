// function movies(){
//     fetch("http://localhost:3000/films")
//     .then(res=>res.json());
//     .then(data=>console.log(data));
//     //console.log('movie');
//     let moviesData=data;

//     for (let i = 0; i < moviesData; i++) {
// 	console.log(moviesData[i].tickets_sold);

//     let movieId=document.querySelector("movieId");
//     let availableMovies=document.querySelector("availableMovies");
//     let movieTitle=document.querySelector(" movieTitle");
//     let movieRuntime=document.querySelector("movieRuntime");
//     let movieCapacity=document.querySelector("movieCapacity");
//     let movieShowtime=document.querySelector("movieShowtime");
//     let movieTicketsSold=document.querySelector("movieTicketsSold");
//     let movieDescription=document.querySelector("movieDescription");
//     let moviePoster=document.querySelector("moviePoster");
//     let movieShowingId=document.querySelector("movieShowingId");

//     function availableMovies(){
//         let availableMovies=document.querySelector(".availableMovies").value;
//         document.querySelector(".availableMovies").innerHTML=availableMovies;
//     }
// }
// };
function movies() {
  fetch("http://localhost:3000/films")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // do something with the data here
      let moviesData = data;

      for (let i = 0; i < moviesData.length; i++) {
        console.log(moviesData[i].tickets_sold);

        // use # to select an element by ID
        let movieId = document.querySelector("#movieId");
        let availableMovies = document.querySelector("#availableMovies");
        let movieTitle = document.querySelector("#movieTitle");
        let movieRuntime = document.querySelector("#movieRuntime");
        let movieCapacity = document.querySelector("#movieCapacity");
        let movieShowtime = document.querySelector("#movieShowtime");
        let movieTicketsSold = document.querySelector("#movieTicketsSold");
        let movieDescription = document.querySelector("#movieDescription");
        let moviePoster = document.querySelector("#moviePoster");
        let movieShowingId = document.querySelector("#movieShowingId");

        movieTitle.textContent = moviesData[0].title;
        moviePoster.src = moviesData[0].poster;
        movieRuntime.textContent = moviesData[0].runtime;
        movieCapacity.textContent = moviesData[0].capacity;
        movieShowtime.textContent = moviesData[0].showtime;
        movieTicketsSold.textContent = moviesData[0].tickets_sold;

        availableMovies.appendChild(title);
        availableMovies.appendChild(poster);
        availableMovies.appendChild(runtime);
        availableMovies.appendChild(capacity);
        availableMovies.appendChild(showtime);
        availableMovies.appendChild(tickets_sold);
        availableMovies.appendChild(description);
        

        // define the availableMovies function outside of the loop
        function remainingMovies() {
          let availableMovies =
            document.querySelector("#availableMovies").value;
          document.querySelector("#availableMovies").innerHTML =
            availableMovies;
        }
      }
    });
}
