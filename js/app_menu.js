var app = new Vue({
    el: '#category',
    data: {
        filter: 1
    },
    methods: {
        changeFilter(filter) {
            this.filter = filter;
        }
    },
    mounted() {
        var body = document.body;
        var headerCatalogBrn = document.querySelector('.header_catalog');
        var categoryMenu = document.querySelector('.category_menu');
        var categoryFilterBtn = document.querySelectorAll('.category_filter .category_btns .item');
        var lavalamp = document.querySelector('.category_menu .category_btns .lavalamp');

        if (categoryMenu) {
            var categoryList = document.querySelector('.category_brand_list');
            var categoryBigList = document.querySelector('.category_bgilist_scroll');
            var closeCat = document.querySelector('.close_cat');

            closeCat.addEventListener('click', function () {
                categoryMenu.classList.remove('open');
                headerCatalogBrn.classList.remove('active');
                body.classList.remove('scroll_hide');
            });

            headerCatalogBrn.addEventListener('click', function () {
                if (window.innerWidth > 1024) {
                    if (categoryMenu.classList.contains('open')) {
                        categoryMenu.classList.remove('open');
                        headerCatalogBrn.classList.remove('active');
                        body.classList.remove('scroll_hide');
                    } else {
                        categoryMenu.classList.add('open');
                        body.classList.add('scroll_hide');
                        headerCatalogBrn.classList.add('active');

                        if (categoryFilterBtn.length) {
                            lavalamp.style.width = categoryFilterBtn[0].clientWidth + "px";

                            categoryFilterBtn.forEach(function (item) {
                                item.addEventListener('click', function () {
                                    lavalamp.style.width = item.clientWidth + "px";
                                    lavalamp.style.left = item.offsetLeft + 'px';

                                    categoryList.scrollTo({
                                        top: 0
                                    });
                                });
                            });

                        }

                        var catHeight = categoryMenu.clientHeight - 53;

                        categoryList.setAttribute('style', 'max-height:' + catHeight + 'px');
                        categoryBigList.setAttribute('style', 'max-height:' + catHeight + 'px');
                    }
                }

                window.addEventListener('resize', e => {
                    if (window.innerWidth <= 1024) {
                        categoryMenu.classList.remove('open');
                        headerCatalogBrn.classList.remove('active');
                        body.classList.remove('scroll_hide');
                    }
                })
            });
        }
    }
})