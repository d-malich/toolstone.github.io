let buttons_visible = document.querySelectorAll('.info_text_section  .button_visible_text.adaptive')

let text_blocks = document.querySelectorAll('.info_text_section .info_text_block-2 > .text_block > .text.adaptive')


let text_block_height

console.log(text_blocks);
buttons_visible.forEach((b, i) => b.addEventListener('click', () => {
  if(text_blocks[i].classList.contains('open')) {
    b.innerHTML = 'Показать весь текст'
    text_blocks[i].classList.remove('open')
  } else {
    b.innerHTML = 'Скрыть весь текст'
    text_blocks[i].classList.add('open')
  }
}))


let buttons_visible_2 = document.querySelectorAll('.text_section > .product_info > .button_visible_text.adaptive')

let text_blocks_2 = document.querySelectorAll('.text_section > .product_info > .product_desc_text > .adaptive')

console.log(text_blocks_2);
buttons_visible_2.forEach((b, i) => b.addEventListener('click', () => {
  if(text_blocks_2[i].classList.contains('open')) {
    b.innerHTML = 'Показать весь текст'
    text_blocks_2[i].classList.remove('open')
  } else {
    b.innerHTML = 'Скрыть весь текст'
    text_blocks_2[i].classList.add('open')
  }
}))