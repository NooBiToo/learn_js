// let question = prompt('Это понятно?')
// if (question == 'да') {
//   document.querySelector('.conditional__result').innerHTML = 'Замечательно'
// } else if (question === 'нет') {
//   document.querySelector('.conditional__result').innerHTML = 'Надо бы повторить'
// } else {
//   document.querySelector('.conditional__result').innerHTML = 'Ответ не ясен'
// }

// let hour = 12
// let min = 30
// let sec = 20
// if ((hour == 12 && min == 30) || sec == 10) {
//   console.log(true)
// } else {
//   console.log(false)
// }

let ne = document.querySelector('.ne-test')
ne.addEventListener('click', function () {
  ne.innerText = !ne.innerText
})

let input = document.querySelector('.ne-input')
let inputValue = document.querySelector('.ne-input__value')

function paste() {
  inputValue.innerText = 'работает'
}
input.addEventListener('change', (event) => {
  inputValue.innerText += input.value
})
let sum = 0
while (true) {
  let value = +prompt('Введите число', '')
  if (!value) break
  sum += value
}
console.log(sum)
