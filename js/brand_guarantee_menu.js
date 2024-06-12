let buttons = document.querySelectorAll('.brand_table_block.menu > .brand')

let blocks = document.querySelectorAll('.brand_guarantee_info_block')

buttons.forEach(btn => btn.addEventListener('click', () => {
  if (!btn.classList.contains('active')) {
    blocks.forEach(block => {
      if(btn.className.split(' ')[1] == block.className.split(' ')[1]) {
        buttons.forEach(b => b.classList.contains('active') ? b.classList.remove('active') : {})
        btn.classList.add('active')
        block.classList.add('open')
      }
      else {
        block.classList.remove('open')
      }
    })
  }
}))