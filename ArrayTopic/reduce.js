const items  = [
    {name : 'Bike' , price : 10},
    {name : 'TV' , price : 100},
    {name : 'Album' , price : 130},
    {name : 'Book' , price : 10},
    {name : 'Phone', price : 130},
    {name : 'Computer', price : 10},
    {name : 'Keyboard' , price : 300},
]

 const total = items.reduce((currneTotal, item)=>{
    return item.price + currneTotal;
 },0);

 console.log("First total is "+total);
 const total2 = items.reduce((currneTotal, item)=>{
    return item.price + currneTotal;
 },10);

 console.log("Second total is "+total2);