import './style.css'

document.querySelector('[data-js="app"]').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

const btn = document.querySelector('[data-js="btn"]');

btn.addEventListener("click",(e)=>{
  e.preventDefault()
  document.querySelector('[data-js="app"]').classList.toggle("active");
})
