let cart = {
    id : 1,
    name : "product",
    quantity :1
}

localStorage.setItem("user", JSON.stringify(cart));

const customer = JSON.parse(localStorage.getItem("user"));

console.log(customer);

