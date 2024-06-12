let about_brand_text = document.querySelectorAll('.inf_text .inf_body_right p')
let show_all_text_btn = document.querySelectorAll('.inf_text .inf_body_right button.btn')

hideText()


window.addEventListener('resize', e => {
  hideText()
})

function hideText() {
  about_brand_text.forEach((i, ind) => {
    if (window.innerWidth < 576) {
      i.style.marginBottom = '0'
      document.querySelectorAll('.inf_text .inf_body_right p span')[ind].style.display = 'none'
      show_all_text_btn.forEach(btn => {
        btn.style.display = 'block'
        btn.style.margin = '16px 0 24px 0'
      })
    }
    else {
      document.querySelectorAll('.inf_text .inf_body_right p span')[ind].style.display = 'inline'
      show_all_text_btn.forEach(btn => {
        btn.style.display = 'none'
      })
    }
  })
}

show_all_text_btn.forEach((btn, ind) => {
  btn.addEventListener('click', e => {
    document.querySelectorAll('.inf_text .inf_body_right p span')[ind].style.display = 'inline'
    btn.style.display = 'none'
  })
})