const items  = [
    {name : 'Bike' , price : 10},
    {name : 'TV' , price : 100},
    {name : 'Album' , price : 130},
    {name : 'Book' , price : 10},
    {name : 'Phone', price : 130},
    {name : 'Computer', price : 10},
    {name : 'Keyboard' , price : 300},
]

const filteredItem = items.filter((item)=>{
    return item.price<100;
})

console.log(filteredItem );