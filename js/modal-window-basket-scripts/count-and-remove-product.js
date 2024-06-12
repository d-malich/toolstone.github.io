var products = document.querySelectorAll('.product_table .product');
var productListLength = products.length;
var removeButtons = document.querySelectorAll('.btn_remove');
var productPrices = document.querySelectorAll('.product_table .product .count_price span');
var productsPrice = 0;

document.getElementById('counter_basket_products').innerHTML = productListLength;

if(productListLength > 4) {
  document.getElementsByClassName('gradient')[0].style.display = 'block';
}
else {
  document.getElementsByClassName('gradient')[0].style.display = 'none';
}

if(productPrices.length) {
  var number = '';
  productPrices.forEach((item, index) => productsPrice += Number(item.innerText.replace(/\s/g, '') * Number(document.querySelectorAll('.no_sel strong')[index].innerText)));
  // productPrices.forEach((item, index) => productsPrice += Number(item.innerText.replace(/\s/g, '')));
}

document.getElementById('price_sum').innerHTML = (productsPrice + '').slice(0, (productsPrice + '').length - 3) + ' ' + (productsPrice + '').slice((productsPrice + '').length - 3, (productsPrice + '').length);

document.getElementById('count_products').innerHTML = productListLength;

removeButtons.forEach((item, index) => {
  item.addEventListener('click', function() {
    productsPrice -= Number(productPrices[index].innerText.replace(/\s/g, '')) * Number(document.querySelectorAll('.no_sel strong')[index].innerText);

    document.getElementById('price_sum').innerHTML = (productsPrice + '').slice(0, (productsPrice + '').length - 3) + ' ' + (productsPrice + '').slice((productsPrice + '').length - 3, (productsPrice + '').length);

    productListLength--;
    document.getElementById('count_products').innerHTML = productListLength;

    products[index].remove();
    if(productListLength > 4) {
      document.getElementsByClassName('gradient')[0].style.display = 'block';
    }
    else {
      document.getElementsByClassName('gradient')[0].style.display = 'none';
    }
});
})
