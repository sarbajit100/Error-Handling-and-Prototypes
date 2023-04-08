let products = [
    {name:"shirt", category:"clothing"},
    {name:"pants", category:"clothing"},
    {name:"hat", category:"accessories"},
    {name:"sunglasses", category:"accessories"}
]
let p = products.filter(function (e) {
    return e.category == "clothing"
});
console.log(p);