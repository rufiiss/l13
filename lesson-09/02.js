startButton.addEventListener('click', () => {
  if (isTimerStarted) return

  let counter = 3
  countdownDisplay.textContent = counter
  isTimerStarted = true

  timerId = setInterval(() => {
    counter--

    if (counter === 0) {
      countdownDisplay.textContent = '🚀'
      clearInterval(timerId)
      isTimerStarted = false
    } else {
      countdownDisplay.textContent = counter
    }
  }, 1000)
})

cancelButton.addEventListener('click', () => {
  if (!isTimerStarted) return

  clearInterval(timerId)
  countdownDisplay.textContent = 'Отменено'
  isTimerStarted = false
})
