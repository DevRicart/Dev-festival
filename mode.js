const chk = document.getElementById('chk')
const title = document.getElementsByClassName('title')
const paragraph = document.getElementsByClassName('paragraph')
const button = document.getElementsByClassName('button')

console.log(button);

chk.addEventListener('change', () => {
  document.body.classList.toggle('light')

  for(var i = 0; i < title.length; i++) {
    title[i].classList.toggle('light')
  }

  for(var i = 0; i < button.length; i++) {
    button[i].classList.toggle('light')
  }

  paragraph[0].classList.toggle('light')
})