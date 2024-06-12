var inputs = document.querySelectorAll('.search_input')
var list_block = document.querySelectorAll('.header .header_left')

var list_box = document.querySelectorAll('.header .header_left .header_nav')
var list = document.querySelectorAll('.header .header_nav > li')


adaptive_input()
document.querySelectorAll('.header_nav li:nth-child(5)')[0].style.width = (document.querySelectorAll('.header_nav li:nth-child(6)')[0].offsetWidth - 12) + 'px'

window.addEventListener('resize', () => {
  adaptive_input()
})

function adaptive_input() {
  let sum_width_blocks = 0
  list.forEach((li, i) => {
    i != 4 ? sum_width_blocks += li.offsetWidth : {}
  })
  
  let space = (list_box[0].offsetWidth - sum_width_blocks) / 6

  document.querySelectorAll('.header_nav li:nth-child(5)')[0].style.right = space + 'px'
  
  document.querySelectorAll('.header_nav li:nth-child(5)')[0].style.width = 'calc(100% - ' + space  + 'px)' 
}

inputs.forEach((i, ind) => i.addEventListener('focus', (e) => {
  list_block[0].classList.add('active_search')
  adaptive_input()
}))

inputs.forEach((i, ind) => i.addEventListener('blur', (e) => {
  list_block[0].classList.remove('active_search')

  document.querySelectorAll('.header_nav li:nth-child(5)')[0].style.width = (document.querySelectorAll('.header_nav li:nth-child(6)')[0].offsetWidth - 12) + 'px'
}))


window.onscroll = function () { // отслеживаем скролл
  console.log('ddddddd');
  console.log(document.documentElement.scrollTop);
  var z = document.documentElement.scrollTop; // Получаем высоту передвигаемого сролла
  console.log(document.querySelectorAll('header .header_top')[0].offsetHeight);
  var pixels = document.querySelectorAll('header .header_top')[0].offsetHeight; // Указываем количество пикселей
  if (z > pixels){
      console.log("Прокручено на 200px") // Для демонстрации вывод сообщения. У себя меняете на выполнение Вашей функции.
      document.querySelectorAll('.header_bottom')[0].style.top = '0'
  }
  else {
    document.querySelectorAll('.header_bottom')[0].style.top = (pixels - z) + 'px'
  }
}

document.querySelectorAll('body')[0].addEventListener('scroll', () => { 
  let scrollTop = body.scrollHeight;
  console.log(scrollTop);
})
