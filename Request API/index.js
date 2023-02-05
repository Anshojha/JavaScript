// fetch("https://dummyjson.com/products/1")
// .then((res)=>  res.json())
// .then((data)=>console.log(data))  

fetch('https://dummyjson.com/carts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 1,
    products: [
      {
        id: 1,
        quantity: 1,
      },
      {
        id: 50,
        quantity: 2,
      },
    ]
  })
})
.then(res => res.json())
.then(console.log).catch((err)=>{
    console.log(err)
});

