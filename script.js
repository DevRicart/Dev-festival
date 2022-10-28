const buyButton = document.getElementById('buy-button')
const cartForm = document.getElementById('cart-form')

const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const ticket = document.getElementById('ticket-numbers')
const ticketPrice = document.getElementById('ticket-price')

plus.addEventListener("click", () => {
  ticket.innerText = parseInt(ticket.innerText) +1
  ticketPrice.innerText = parseInt(ticket.innerText)*90
})

minus.addEventListener("click", () => {
  if(parseInt(ticket.innerText) >= 2) {
    ticket.innerText = parseInt(ticket.innerText) -1
    ticketPrice.innerText = parseInt(ticket.innerText)*90
  }

})

cartForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = cartForm.name.value;
  const email = cartForm.email.value;
  const ticketQuantity = ticket.innerText;
 
  window.localStorage.setItem("name", name)
  window.localStorage.setItem("email", email)
  window.localStorage.setItem("ticketQuantity", ticketQuantity)
  window.location.href = "finishing.html"
})

/* LIGHT MODE */
