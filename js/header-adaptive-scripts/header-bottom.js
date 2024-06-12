var titles = document.querySelectorAll('.service_menu > li');

adaptiveHeaderBottom()

window.addEventListener('resize', e => {
  adaptiveHeaderBottom()
})

function adaptiveHeaderBottom() {
  titles.forEach((i, ind) => {
    if (window.innerWidth <= 1436 && window.innerWidth > 1124) {
      if (i.getBoundingClientRect().y > 90) {
        i.classList.add('under_row');
        i.classList.remove('upper_row');
        under_row_length = document.querySelectorAll('.service_menu > li.under_row').length
        document.querySelectorAll('.service_menu > li.under_row').forEach((j, index) => {
          switch (index) {
            case 0:
              j.classList.add('li_left');
              j.classList.remove('li_right');
              j.classList.add('expand_menu_block_right');
              j.classList.remove('expand_menu_block_left');
              break;
            case 1:
              j.classList.add('li_right');
              j.classList.remove('li_left');
              j.classList.add('expand_menu_block_right');
              j.classList.remove('expand_menu_block_left');
              break;
            case 2:
              j.classList.add('li_right');
              j.classList.remove('li_left');
              j.classList.add('expand_menu_block_right');
              j.classList.remove('expand_menu_block_left');
              break;
            case 3:
              j.classList.add('li_right');
              j.classList.remove('li_left');
              j.classList.add('expand_menu_block_left');
              j.classList.remove('expand_menu_block_right');
              break;
          }
        })
      }
      else if (window.innerWidth >= 1024) {
        i.classList.add('upper_row');
        i.classList.remove('under_row');
        upper_row_length = document.querySelectorAll('.service_menu > li.upper_row').length
        document.querySelectorAll('.service_menu > li.upper_row').forEach((j, index) => {
          switch (index) {
            case 0:
              j.classList.add('li_left');
              j.classList.remove('li_right');
              j.classList.add('expand_menu_block_right');
              j.classList.remove('expand_menu_block_left');
              break;
            case 1:
              j.classList.add('li_left');
              j.classList.remove('li_right');
              j.classList.add('expand_menu_block_left');
              j.classList.remove('expand_menu_block_right');
              break;
            case 2:
              j.classList.add('li_right');
              j.classList.remove('li_left');
              j.classList.add('expand_menu_block_left');
              j.classList.remove('expand_menu_block_right');
              break;
            case 3:
              j.classList.add('li_right');
              j.classList.remove('li_left');
              j.classList.add('expand_menu_block_left');
              j.classList.remove('expand_menu_block_right');
              break;
            case 4:
              j.classList.add('li_right');
              j.classList.remove('li_left');
              j.classList.add('expand_menu_block_left');
              j.classList.remove('expand_menu_block_right');
              break;
          }
        })
      }
    }
    else {
      i.classList.remove('under_row');
      i.classList.remove('upper_row');
      i.classList.remove('li_right');
      i.classList.remove('li_left');
      i.classList.remove('expand_menu_block_right');
      i.classList.remove('expand_menu_block_left');
      if (ind < 2) {
        i.classList.add('li_left');
        i.classList.add('expand_menu_block_right');
      }
      else {
        i.classList.add('li_right');
        i.classList.remove('li_left');
        i.classList.add('expand_menu_block_left');
      }
    }
  })
}