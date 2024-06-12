var btnPlus = document.querySelectorAll('.card_count .btn-plus');
var btnMinus = document.querySelectorAll('.card_count .btn-minus');
var countInput = document.querySelectorAll('.count_input');
var plusMoreBtn = document.querySelectorAll('.plus_btn');


if(plusMoreBtn.length) {
    plusMoreBtn.forEach(function(item) {
        item.addEventListener('click', function() {
            var input = this.parentNode.querySelector('.count_input');
            var inputDym = this.parentNode.querySelector('.input_dym strong');
            if(input.value < 1000) {
                input.value = Number(input.value) + 5;
                inputDym.innerHTML = input.value
            }
        });
    });
}

if(btnPlus.length) {
    btnPlus.forEach(function(item, index) {
        item.addEventListener('click', function() {
            // document.getElementsByClassName('btn-minus')[index].style.background = '#019529';
            // document.getElementsByClassName('btn-plus')[index].style.background = '#019529';
            // btnMinus.forEach((elem, i) => i != index ? document.getElementsByClassName('btn-minus')[i].style.background = '#C5C6CD' : '');
            // btnPlus.forEach((elem, i) => i != index ? document.getElementsByClassName('btn-plus')[i].style.background = '#C5C6CD' : '');
            var input = this.parentNode.querySelector('.count_input');
            var inputDym = this.parentNode.querySelector('.input_dym strong');
            if(input.value < 1000) {
                input.value = Number(input.value) + 1;
                inputDym.innerHTML = input.value
            }
            if(index < productPrices.length) {
                productsPrice += Number(productPrices[index].innerText.replace(/\s/g, ''));
            document.getElementById('price_sum').innerHTML = (productsPrice + '').slice(0, (productsPrice + '').length - 3) + ' ' + (productsPrice + '').slice((productsPrice + '').length - 3, (productsPrice + '').length);
            }
        });
    });
}


if(btnMinus.length) {
    btnMinus.forEach(function(item, index) {
        item.addEventListener('click', function() {
            // document.getElementsByClassName('btn-minus')[index].style.background = '#019529';
            // document.getElementsByClassName('btn-plus')[index].style.background = '#019529';
            // btnMinus.forEach((elem, i) => i != index ? document.getElementsByClassName('btn-minus')[i].style.background = '#C5C6CD' : '');
            // btnPlus.forEach((elem, i) => i != index ? document.getElementsByClassName('btn-plus')[i].style.background = '#C5C6CD' : '');
            var input = this.parentNode.querySelector('.count_input');
            var inputDym = this.parentNode.querySelector('.input_dym strong');
            if(input.value > 0) {
                input.value = Number(input.value) - 1;
                inputDym.innerHTML = input.value
                if(index < productPrices.length) {
                    productsPrice -= Number(productPrices[index].innerText.replace(/\s/g, ''));
                    document.getElementById('price_sum').innerHTML = (productsPrice + '').slice(0, (productsPrice + '').length - 3) + ' ' + (productsPrice + '').slice((productsPrice + '').length - 3, (productsPrice + '').length);
                }
            }
            
        });
    });
}

function inputValidateNum(input) { 
    input.value = input.value.replace(/[^\d,]/g, '');
};