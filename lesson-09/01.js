petShop.addEventListener('click', function (event) {
  if (event.target.classList.contains('pet')) {
    const petId = event.target.id

    if (cart.length >= 3) {
      messageBox.textContent = 'Вы не можете добавить более 3 питомцев'
    } else {
      cart.push(petId)
      messageBox.textContent = ''
      updateCartDisplay()
    }
  }
})
