let complect_menu_btn = document.querySelectorAll('.complect_level_menu > li')

let text_info_block = document.querySelectorAll('.text_info_block')

complect_menu_btn.forEach(btn => btn.addEventListener('click', () => {
  if(!btn.classList.contains('active')) {
    text_info_block.forEach(block => {
      console.log('text_info_block' + btn.className);
      block.className == ('text_info_block ' + btn.className) ? block.classList.add('open') : block.classList.remove('open')
    })
    complect_menu_btn.forEach(b => {
      b.classList.contains('active') ? b.classList.remove('active') : {}
    })
    btn.classList.add('active');
  }
}))