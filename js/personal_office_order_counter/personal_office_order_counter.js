var btn_plus = document.querySelectorAll('.composition_order_table > .itm .counter .btn_plus')
var btn_minus = document.querySelectorAll('.composition_order_table > .itm .counter .btn_minus')

var input_value = document.querySelectorAll('.composition_order_table > .itm .counter .counter_value span:first-child')

btn_plus.forEach((btn, ind) => btn.addEventListener('click', () => {
  input_value[ind].innerHTML = Number(input_value[ind].innerText) + 1
}))
btn_minus.forEach((btn, ind) => btn.addEventListener('click', () => {
  Number(input_value[ind].innerText) ?
  input_value[ind].innerHTML = Number(input_value[ind].innerText) - 1 : {}
}))