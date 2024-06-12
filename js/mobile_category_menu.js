let menuButtons = document.querySelectorAll('.mobile_category_menu .category_menu_container .brands .brand_link_content');
let closeMobileButtons = document.querySelectorAll('.mobile_category_menu_dym');
let backButtons = document.querySelectorAll('.category_btn_back');

let categoryNames = document.querySelectorAll('.mobile_category_menu .category_names div');

let openMenuBtn = document.querySelector('.header_catalog');

menuButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    for(el of e.target.parentElement.children) {
      el.classList.contains('brand_products') ? el.classList.add('open') : {}
    }
  })
})

backButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    btn.parentNode.parentNode.parentNode.classList.remove('open');
  })
})

closeMobileButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    btn.parentNode.parentNode.classList.contains('open') ? btn.parentNode.parentNode.classList.remove('open') : btn.parentNode.parentNode.parentNode.classList.remove('open');
  })
})

openMenuBtn.addEventListener('click', e => {
  document.querySelector('.mobile_category_menu').classList.add('open');
})

categoryNames.forEach((btn, ind) => {
  btn.addEventListener('click', e=> {
    if (ind == 0) {
      document.getElementsByClassName('brands')[0].style.display = 'block'
      document.getElementsByClassName('categories')[0].style.display = 'none'
    } 
    else {
      document.getElementsByClassName('brands')[0].style.display = 'none'
      document.getElementsByClassName('categories')[0].style.display = 'block'
    }
    categoryNames.forEach((link, linkInd) => {
      ind == linkInd ? link.style.color = 'var(--textRed)' : link.style.color = '#fff'
    })
  })
})