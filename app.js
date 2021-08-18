function updateProductNumber(product,price,isIncreasing){
    const productInput = document.getElementById(product +'-number');
    const productInputValueText = productInput.value;
    let productInputValue = parseInt(productInputValueText);
    if(isIncreasing == true){
        productInputValue = productInputValue + 1;
    } 
    else if(productInputValue > 0){
        productInputValue = productInputValue - 1;
    }
    productInput.value = productInputValue;
    // update case total 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productInputValue * price;
    //calculate totla 
    calculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById( product +'-number');
    const productNumber =parseInt(productInput.value);
    return productNumber;
}
//calculate subtotal 
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax; 
    // update on the html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// phone increase decrease events 
// phone plus 
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
})
// phone minus 
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
})


// handle case increase decrease events 
// case plus
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
})

// case minus 
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
})
