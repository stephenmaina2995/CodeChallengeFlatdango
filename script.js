function movie() {
  fetch(`http://localhost:3000/films`)
    .then((res) => res.json())
    .then((data) => {
      const movieData = data;
      const filmsList = document.querySelector("#films");
      for (let i = 0; i < movieData.length; i++) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = movieData[i].title;
        li.appendChild(a);
        filmsList.appendChild(li);
        a.addEventListener("click", () => {
          const display = document.querySelector("#display");
          display.innerHTML = "";
          const title = document.createElement("h1");
          const poster = document.createElement("img");
          const description = document.createElement("h3");
          const showTime = document.createElement("h4");
          const runtime = document.createElement("h4");
          const tickets = document.createElement("h4");
          const buy = document.createElement("button");
          title.textContent = movieData[i].title;
          poster.src = movieData[i].poster;
          description.textContent = `Description: ${movieData[i].description}`;
          showTime.textContent = `Movie starts at: ${movieData[i].showtime}`;
          runtime.textContent = `Duration: ${movieData[i].runtime} minutes`;
          tickets.textContent = `Tickets remaining: ${
            movieData[i].capacity - movieData[i].tickets_sold
          }`;
          buy.textContent = `BUY TICKET`;
          display.appendChild(title);
          display.appendChild(poster);
          display.appendChild(description);
          display.appendChild(showTime);
          display.appendChild(runtime);
          display.appendChild(buy);
          display.appendChild(tickets);
          buy.addEventListener("click", (e) => {
            e.preventDefault();
            movieData[i].tickets_sold++;
            const remainingTickets =
              movieData[i].capacity - movieData[i].tickets_sold;
            fetch(`http://localhost:3000/films/${movieData[i].id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                tickets_sold: movieData[i].tickets_sold,
              }),
            })
              .then((response) => {
                if (response.ok) {
                  tickets.textContent = `Tickets remaining: ${remainingTickets}`;
                }
              })
              .catch((err) => console.log(err));
            tickets.textContent = `Tickets remaining: ${remainingTickets}`;
          });
        });
      }
    })
    .catch((err) => console.log(err));
}
movie();