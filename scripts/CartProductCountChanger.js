let cartCount = document.querySelector(".cart_count");
let cartAdderButtons = document.querySelectorAll(".add_to_cart");
let productCountIncreaserButtons = document.querySelectorAll(".increaseProductCount");
let productCountDecreaserButtons = document.querySelectorAll(".decreaseProductCount");
let productCounters = document.querySelectorAll(".productCount");
let count = 0;
const productsCounts = new Array();

function CartProductAdder(productIndex){
    count++;
    cartCount.innerText = count;

    if(productsCounts[productIndex] == undefined){
        productsCounts[productIndex] = 0;
    }

    productCounters[productIndex].innerText = ++productsCounts[productIndex];
}

function CartProductDeleter(productIndex){
    count--;
    cartCount.innerText = count;
    productCounters[productIndex].innerText = --productsCounts[productIndex];
}

function DisableAddToCartButton(productIndex){
    cartAdderButtons[productIndex].style.display = "none";
}

function EnableProductCountChanger(productIndex){
    productCountIncreaserButtons[productIndex].style.display = "block";
    productCountDecreaserButtons[productIndex].style.display = "block";
    productCounters[productIndex].style.display = "block";
}

function DisableProductCounterChangerIfItEqualsZero(productIndex){
    if(productsCounts[productIndex] == 0){
        DisableProductCountChanger(productIndex);
        EnableAddToCartButton(productIndex);
    }
}

function EnableAddToCartButton(productIndex){
    if(productsCounts[productIndex] == 0){
        cartAdderButtons[productIndex].style.display = "block";
    }
}

function DisableProductCountChanger(productIndex){
    productCountIncreaserButtons[productIndex].style.display = "none";
    productCountDecreaserButtons[productIndex].style.display = "none";
    productCounters[productIndex].style.display = "none";
}
