var cart = [];

function getCart() {
    return cart;
}

function setCart(inputCart) {
    cart = inputCart;
    return cart;
}




function addToCart(item) {
    let itemPrice = Math.floor((Math.random() * 101) + 1);

    let itemObject = { item: itemPrice };
    cart.push(itemObject);
    console.log("you have just added" + " " + item + " " + "to your cart.");
    return cart;

}




function viewCart() {

    if (cart.length === 0) {
        // console.log('Your shopping cart is empty.');
        return `${'Your shopping cart is empty.'}`;
    }

    if (cart.length === 1) {
        console.log("In your cart, you have" + " " + Object.keys(cart[0]) + " " + "at" + " " + "$" + cart[0][Object.keys(cart[0])] + ".")
    } else {
        let strings = [];
        for (let iterate = 0; iterate < cart.length; iterate++) {
            let item = Object.keys(cart[iterate])
            let price = cart[iterate][item]

            strings.push(item + " " + "at" + " " + "$" + price);
        }

        let lastChar = strings[strings.length - 1];
        strings.pop();
        strings.push("and " + lastChar);
        console.log("In your cart, you have" + " " + strings.join(", ") + ".");
    }
}



function total() {
    let value = [];
    for (let idx = 0; idx < cart.length; idx++) {

        let itemName = Object.keys(cart[idx])
        let price = cart[idx][itemName]
        value.push(price)

    }

    let sum = value.reduce(add, 0);

    function add(a, b) {
        return a + b;
    }

    console.log("Total value of items in your cart is : " + "$" + sum + ".");
    return sum;
}


function removeFromCart(name) {
    for (let idx = 0; idx < cart.length; idx++) {
        if (cart[idx].hasOwnProperty(name)) {
            cart.splice(idx, 1);
        }

    }

    if (!cart.hasOwnProperty(name)) {
        console.log("That item is not in your cart")

    }

    return cart;
}



function placeOrder(cardNumber) {

    if (!cardNumber) {
        console.log("Sorry, we don\'t have a credit card on file for you. ")
    } else {

        console.log("Your total cost is $" + total() + "," + "which will be charged to the card " + cardNumber);
    }
    return cart.splice(0, -1);
}



addToCart("bags")
addToCart("shoes")
addToCart("grape")
addToCart("banana")

viewCart()
total()
removeFromCart("bags")
placeOrder(4322134234573221)