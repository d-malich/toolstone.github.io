var menu = document.querySelector('.mobile_menu');
var menuBtn = document.querySelector('.mobile_menu_btn');
var closeMobile = document.querySelectorAll('.mobile_menu_dym');
var backBtn = document.querySelectorAll('.btn_back');

var expandMenuBtn = document.querySelectorAll('.mobile_menu_list  li');


expandMenuBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        for(let el of e.target.parentElement.children) {
            if(el.classList.contains('mobile_expand_menu')) {
                el.classList.add('open')
            }
        }
    })
})
closeMobile.forEach(btn => {
    btn.addEventListener('click', (e) => {
        btn.parentNode.classList.remove('open');
    })
})
backBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        btn.parentNode.parentNode.parentNode.classList.remove('open');
    })
})

menuBtn.addEventListener('click', function() {
    menu.classList.add('open');
    document.body.classList.add('scroll_hide');
});