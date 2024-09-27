const counterElement = document.getElementById('counter')
let counter = 0
let switcher = true

function countBlocking() {
  while (true) {
    counter = counter + 1
    console.log('count blocking')
    counterElement.innerHTML = counter
  }
}

function countNonBlocking() {
  counter = counter + 1
  counterElement.innerHTML = counter
  console.log('count non-blocking')
  setTimeout(countNonBlocking, 0)
}

document
  .getElementById('blockingButton')
  .addEventListener('click', () => {
    countBlocking()
  })

document
  .getElementById('nonBlockingButton')
  .addEventListener('click', () => {
    countNonBlocking()
  })

const switcherButtonElement = document
  .getElementById('switcherButton')

switcherButtonElement
  .addEventListener('click', () => {
    switcherButtonElement.innerText = switcher ? 'Off' : 'On'
    switcher = !switcher
  })
