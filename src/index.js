const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log(event);
    });
}
fetch(`http://localhost:3000/movies/`)
        .then((res) => {
          if (!res.ok) {
            throw new Error ("Movie not found");
          }
          return res.json();
        })
        .then((data) => {
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
          
          title.innerText = "Error";
          summary.innerText = error.message;
        });
    

  document.addEventListener("DOMContentLoaded", init);
