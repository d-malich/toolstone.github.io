let btn_open = document.querySelectorAll('.product_filter .filter_header .icon-open')

let filter_body = document.querySelectorAll('.product_filter .filter_content')

let filter_body_height

btn_open.forEach((btn, i) => btn.addEventListener('click', () => {
  console.log(btn);
  if(filter_body[i].classList.contains('open')) {
    filter_body[i].classList.remove('open')
    setTimeout 
  } 
  else {
    filter_body[i].classList.add('open')
  } 
}))