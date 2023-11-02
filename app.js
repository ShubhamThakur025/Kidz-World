//Variables defined for cart-btn and the amount 
let addToCart = document.querySelectorAll('.transaction')
let cartbtn = document.getElementById('cart')
let cartamount = document.getElementById('amt')

//Total price in Dollars and Cents. Var used to ensure the scope of the variables
var grossCents = 0
var grossDollars = 0

//Link for whatsapp integration
let whatsappLink = "https://api.whatsapp.com/send?phone=9817683586&text=Order%20details"

//Shop defined for the status of each product
let shop = [
    {
        name: "This was our pact",
        quantity: 0,
        dollars: 7,
        cents: 49,
    },
    {
        name: "The famous five",
        quantity: 0,
        dollars: 4,
        cents: 59,
    },
    {
        name: "Matilda",
        quantity: 0,
        dollars: 6,
        cents: 80,
    },
    {
        name: "Harry Potter",
        quantity: 0,
        dollars: 10,
        cents: 0,
    },
    {
        name: "For Young Readers",
        quantity: 0,
        dollars: 7,
        cents: 29,
    },
    {
        name: "Wimpy Kid - DIY",
        quantity: 0,
        dollars: 4,
        cents: 99,
    },
    {
        name: "Dart Board",
        quantity: 0,
        dollars: 17,
        cents: 49,
    },
    {
        name: "Connect Four",
        quantity: 0,
        dollars: 19,
        cents: 99,
    },
    {
        name: "Jenga",
        quantity: 0,
        dollars: 20,
        cents: 99,
    },
    {
        name: "Monopoly",
        quantity: 0,
        dollars: 19,
        cents: 49,
    },
    {
        name: "Bookmarks",
        quantity: 0,
        dollars: 12,
        cents: 49,
    },
    {
        name: "Birthday Card",
        quantity: 0,
        dollars: 12,
        cents: 49,
    },
    {
        name: "Stuffed toys",
        quantity: 0,
        dollars: 15,
        cents: 99,
    },
    {
        name: "Dream catcher drawing",
        quantity: 0,
        dollars: 18,
        cents: 49,
    },
];


//to update the quantity of eaach item and the cart's html
function updateCart() {
    let cartVal = 0
    for (let i = 0; i < shop.length; i++) {
        cartVal += shop[i].quantity
    }
    cartamount.innerHTML = `(${cartVal})`
}

// to update the price and calculate the total price
function updatePrice() {
    let totalPriceCents = 0
    for (let i = 0; i < shop.length; i++) {
        totalPriceCents += shop[i].quantity * (shop[i].dollars * 100 + shop[i].cents)
    }
    grossDollars = Math.floor(totalPriceCents / 100)
    grossCents = totalPriceCents % 100
}

//For whatsapp integration
function updateWhatsappLink() {
    for (let i = 0; i < shop.length; i++) {
        if (shop[i].quantity != 0) {
            whatsappLink += "%0A" + shop[i].name + ":%20" + shop[i].quantity
        }
    }
    whatsappLink += "%0A" + "Total%20Price:%20$" + grossDollars + "%20" + grossCents + "c"
    console.log(whatsappLink)

}

//EventListener to update quantity whenever clicked
for (let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener('click', function () {
        shop[i].quantity++
        updateCart()
    })
}

//Event listener when clicked on the cart button for order
cartbtn.onclick = () => {
    updatePrice();
    //Whatsapp Integration
    updateWhatsappLink()
    window.open(whatsappLink, "_blank")
    //To print in the console
    for (let i = 0; i < shop.length; i++) {
        if (shop[i].quantity != 0) {
            console.log("Item name: " + shop[i].name +
                " - Quantity: " +
                shop[i].quantity
            )
        }
    }
    //To print the Total amount
    console.log("The Total amount is " + grossDollars + "$ and " + grossCents)
}
