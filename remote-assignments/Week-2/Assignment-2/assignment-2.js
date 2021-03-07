function avg(data) {
// your code here
  const product_ls = data.products
  let total_price = 0;
  for (let i=0; i<product_ls.length; i++) {
    total_price += product_ls[i].price;
  }
  return total_price / product_ls.length;
}
console.log(
 avg({
 size:3,
 products:[
 {
 name:"Product 1",
 price:100
 },
 {
 name:"Product 2",
 price:700
 },
 {
 name:"Product 3",
 price:250
 }
 ]
 })
) // should print the average price of all products
