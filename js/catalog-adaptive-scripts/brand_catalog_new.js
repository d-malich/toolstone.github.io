let new_products = document.querySelectorAll('.category_card')
let show_all_new_btn = document.querySelectorAll('.show_all .btn')

hideProducts()

window.addEventListener('resize', e => {
  hideProducts()
})

show_all_new_btn.forEach(btn => {
  btn.addEventListener('click', e => {
    new_products.forEach((i, ind) => {
      if (ind > 3) {
        i.style.display = 'block'
      }
    })
    btn.style.display = 'none'
  })
})

function hideProducts() {
  if(window.innerWidth < 576) {
    show_all_new_btn.forEach(btn => {
      btn.style.display = 'block'
    })
    new_products.forEach((i, ind) => {
      if (ind > 3) {
        i.style.display = 'none'
      }
    })
  }
  else {
    show_all_new_btn.forEach(btn => {
      btn.style.display = 'none'
    })
    new_products.forEach((i, ind) => {
      if (ind > 3) {
        i.style.display = 'block'
      }
    })
  }
}
function showProducts() {

}