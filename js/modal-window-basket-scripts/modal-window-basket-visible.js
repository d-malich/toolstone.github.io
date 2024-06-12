function ModalWindowBasketVisible() {
  if(document.getElementById('modal_window_background').style.display == 'none' || document.getElementById('modal_window_background').style.display == '') {
    document.getElementById('modal_window_background').style.display = 'flex';
  }
  else {
    document.getElementById('modal_window_background').style.display = 'none';
  }
}

// $(document).mouseup(function (e) {
//   var container = $(document.getElementsByClassName('modal_window_background')[0]);
//   if (container.has(e.target).length === 0){
//     document.getElementsByClassName('modal_window_background')[0].style.display = 'none';
//   }
// });