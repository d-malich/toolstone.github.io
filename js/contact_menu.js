let visible_cnt_info_btn = document.querySelectorAll('.visible_cnt_info_btn');

let contact_menu = document.querySelectorAll('.contact_col.col_cnt_info')

visible_cnt_info_btn.forEach((btn, ind) => btn.addEventListener('click', () =>  {
  if(!contact_menu[ind].classList.contains('open')) {
    contact_menu[ind].classList.add('open')
    btn.classList.add('open')
  }
  else {
    contact_menu[ind].classList.remove('open')
    btn.classList.remove('open')
  } 
}))