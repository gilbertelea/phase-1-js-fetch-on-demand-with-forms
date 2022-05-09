const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (e) =>{
      e.preventDefault();
  const input = e.target.searchByID.value
 console.log(input)
 fetch(`http://localhost:3000/movies/${input}`)
 .then(response => response.json())
 .then(data => {
    const title = document.querySelector('section#movieDetails h4');
    const summary = document.querySelector('section#movieDetails p');

    title.innerText = data.title;
    summary.innerText = data.summary;
    inputForm.reset()
 })
  })
//   console.log(inputForm);
}

document.addEventListener('DOMContentLoaded', init);
