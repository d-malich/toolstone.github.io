var productPrices = document.querySelectorAll('.product_table .product .count_price span');

if (productPrices.length) {
  productPrices.forEach(item => {
    item.innerText = item.innerText.replace(/\s/g, '');
    let str = ''
    let k = 0;
    for (let i = item.innerText.length - 1; i >= 0; i--) {
      k++;
      if (i == 0) {
        str = item.innerText.slice(0, (item.innerText.length - str.replace(/\s/g, '').length)) + str;
        item.innerText = str;
      }
      else if(k == 3) {
        str = ' ' + item.innerText.slice(i, i + 3) + str;
        k = 0;
      }
    }
  })
}

// if (productPrices.length) {
//   productPrices.forEach(item => {
//     console.log(Math.floor((item.innerText.replace(/\s/g, '') + '1234').length / 3))
//   })
// }