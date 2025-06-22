const petShop = document.querySelector('.pet-shop')
const cartList = document.getElementById('cart-list')
const messageBox = document.getElementById('message-box')
const clearCartButton = document.getElementById('clear-cart-button')
const cart = []

function updateCartDisplay() {
  cartList.innerHTML = ''
  for (let petId of cart) {
    const li = document.createElement('li')
    li.classList.add('pet')
    li.textContent = petId // или иконку, если PETS доступен
    cartList.append(li)
  }
}

clearCartButton.addEventListener('click', () => {
  cart.length = 0
  messageBox.textContent = ''
  updateCartDisplay()
})

petShop.addEventListener('click', (event) => {
  if (event.target.classList.contains('pet')) {
    if (cart.length >= 3) {
      messageBox.textContent = 'Вы не можете добавить более 3 питомцев'
      return
    }
    cart.push(event.target.id)
    messageBox.textContent = ''
    updateCartDisplay()
  }
})
