const PETS = [
  { id: 'cat', title: '🐱' },
  { id: 'dog', title: '🐶' },
  { id: 'parrot', title: '🦜' },
  { id: 'fish', title: '🐠' },
  { id: 'spider', title: '🕷' },
  { id: 'snake', title: '🐍' },
  { id: 'hamster', title: '🐹' },
  { id: 'turtle', title: '🐢' },
  { id: 'chinchilla', title: '🦇' },
  { id: 'hedgehog', title: '🦔' },
  { id: 'rat', title: '🐀' },
  { id: 'frog', title: '🐸' },
]

const cart = []

const petShop = document.querySelector('.pet-shop')
const cartList = document.getElementById('cart-list')
const messageBox = document.getElementById('message-box')
const clearCartButton = document.getElementById('clear-cart-button')

// Рендерим кнопки для питомцев
for (let i = 0; i < PETS.length; i++) {
  const pet = PETS[i]
  const petButtonElement = document.createElement('button')
  petButtonElement.classList.add('pet')
  petButtonElement.id = pet.id
  petButtonElement.textContent = pet.title
  petShop.append(petButtonElement)
}

// Обновляем отображение корзины
function updateCartDisplay() {
  cartList.innerHTML = ''
  for (let i = 0; i < cart.length; i++) {
    const petId = cart[i]
    const pet = PETS.find((item) => item.id === petId)
    const petSpanElement = document.createElement('li')
    petSpanElement.classList.add('pet')
    petSpanElement.textContent = pet.title
    cartList.append(petSpanElement)
  }
}

// Обработчик кнопки очистки
clearCartButton.addEventListener('click', function () {
  cart.length = 0
  messageBox.textContent = ''
  updateCartDisplay()
})

// ✅ Обработчик кликов по питомцам (делегирование)
petShop.addEventListener('click', function (event) {
  if (event.target.classList.contains('pet')) {
    if (cart.length >= 3) {
      messageBox.textContent = 'Вы не можете добавить более 3 питомцев'
      return
    }

    const petId = event.target.id
    cart.push(petId)
    messageBox.textContent = ''
    updateCartDisplay()
  }
})
