const name = window.localStorage.getItem('name')
const email = window.localStorage.getItem('email')
const ticketQuantity = window.localStorage.getItem('ticketQuantity')

const nameLabel = document.getElementById('name')
const emailLabel = document.getElementById('email')
const ticketLabel = document.getElementById('tickets')

nameLabel.innerText = name
emailLabel.innerText = email
ticketLabel.innerText = ticketQuantity

