// cart open close

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};

//close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};

// Making Add to cart
if (document.readyState ==  "loading") {
    document.addEventListener('DOMContentLoaded', ready)
    } else {
        ready();
}

//Making Function
function ready() {
    var removeCartButtons = document.getElementsByClassName('fa');
    for(var i=0; i<removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click',removeCartItem);

    }
    // Quantity change
var quantityInputs = document.getElementsByClassName("cart-quantity");
for(var i=0; i<quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change",quantityChanged);
    }

    //  Add to cart
    var addCart = document.getElementsByClassName("cart");
    for(var i=0; i<addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click",addCartClicked);

    }
}

//Remove cart item
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

// quantityChanged
function quantityChanged (event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <=0) {
        input.value =1 ;   
    } 
    updatetotal();
}

// add to cart function
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('product-title').innerText;
    var price = shopProducts.getElementsByClassName('price').innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductsToCart(title, price, productImg);
    updatetotal();
}

function addProductsToCart(title, price, productImg) {
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('pro');
     var  cartItems = document.getElementsByClassName('pro-container')[0];
    var cartItemsNames= cartItems.getAttributeNames('product-title');
    for (var i=0; i< cartItemsNames.length; i++) {
        if(cartItemsNames[i].innerText ==title) {
            alert('This Product is already in your Cart!');
            return;
        }
    }
                

}





//update total
function updatetotal () {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName('cart-price')[0];
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
    var price = parseFloat(priceElement.innerText.replace('$' ,''));
    var quantity = quantityElement.value;
    total += price * quantity;

    // if price contain some cents
    total = Math.round(total *100) /100;
    document.getElementsByClassName('total-price')[0].innerText = '$' + total;


       

    }
}
