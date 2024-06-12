var open_btn = document.querySelectorAll('.personal_office_menu .icon-open')
var close_btn = document.querySelectorAll('.personal_office_menu .icon-close')

var menu = document.querySelectorAll('.personal_office_menu')

open_btn.forEach((btn, ind) => btn.addEventListener('click', () => {
  menu[ind].classList.add('open')
}))

close_btn.forEach((btn, ind) => btn.addEventListener('click', () => {
  menu[ind].classList.remove('open')
}))