// var nav_links = document.querySelectorAll('.header_nav > li');

// adaptiveHeaderTop();

// window.addEventListener('resize', e => {
//   adaptiveHeaderTop()
// })

// function adaptiveHeaderTop() {
//   if(window.innerWidth <= 1350) {
//     nav_links.forEach(i => {
//       if(i.getBoundingClientRect().y < 20) {
//         i.classList.add('upper_row');
//         i.classList.remove('under_row');
//       }
//       else {
//         i.classList.add('under_row');
//         i.classList.remove('upper_row');
//       }
//     })
//   }
//   else {
//     nav_links.forEach(i => {
//       i.classList.remove('under_row');
//       i.classList.remove('upper_row');
//     })
//   }
// } 