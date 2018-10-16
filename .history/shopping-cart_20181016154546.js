//set up an empty cart

var cart = [];

// setup a get handler to get the cart

function getCart() {
    return cart;
}

// set the cart

function setCart(inputCart) {
    cart = inputCart;
    return cart;
}



// set up a function to add item to the cart (without the price though)

function addToCart(item) {
    //generate random price for the items
    let itemPrice = Math.floor((Math.random() * 101) + 1);
    // set item to price generated
    let itemObject = { item: itemPrice };
    cart.push(itemObject);
    console.log("you have just added" + " " + item + " " + "to your cart.");
    return cart;

}



// setup a view cart function to see what you have in the cart

function viewCart() {
    // check if cart is empty

    if (cart.length === 0) {
        // console.log('Your shopping cart is empty.');
        return `${'Your shopping cart is empty.'}`;
    }

    if (cart.length === 1) {
        console.log("In your cart, you have" + " " + Object.keys(cart[0]) + " " + "at" + " " + "$" + cart[0][Object.keys(cart[0])] + ".")
    } else {
        let strings = [];
        for (let iterate = 0; iterate < cart.length; iterate++) {
            let item = Object.keys(cart[iterate]);
            let price = cart[iterate][item];

            strings.push(item + " " + "at" + " " + "$" + price);
        }

        let lastChar = strings[strings.length - 1];
        strings.pop();
        strings.push("and " + lastChar);
        console.log("In your cart, you have" + " " + strings.join(", ") + ".");
    }
}

// get the total of the items purchased

function total() {
    let value = [];
    for (let idx = 0; idx < cart.length; idx++) {

        let itemName = Object.keys(cart[idx]);
        let price = cart[idx][itemName];
        value.push(price);

    }

    let sum = value.reduce(add, 0);

    function add(a, b) {
        return a + b;
    }

    console.log("Total value of items in your cart is : " + "$" + sum + ".");
    return sum;
}


// remove item not required from the cart 

function removeFromCart(name) {
    for (let idx = 0; idx < cart.length; idx++) {
        if (cart[idx].hasOwnProperty(name)) {
            cart.splice(idx, 1);
        }

    }

    if (!cart.hasOwnProperty(name)) {
        console.log("That item is not in your cart");

    }

    return cart;
}

//setup placeorder function with card number supplied

function placeOrder(cardNumber) {
    //if card number is not supplied
    if (!cardNumber) {
        console.log("Sorry, we don\'t have a credit card on file for you. ")
    } else {
        // if card number is supplied get total from the total function
        console.log("Your total cost is $" + total() + "," + "which will be charged to the card " + cardNumber);
    }
    return cart.splice(0, -1);
}


// add items  to the shopping cart
addToCart("bags");
addToCart("shoes");
addToCart("grape");
addToCart("banana");

//view the cart
viewCart();
//  get the total
total();
// remove item from cart
removeFromCart("bags");
//place the order
placeOrder(4322134234573221);