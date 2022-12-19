const num = [1,2,-3,3];

const items = num
.filter(n => n >=0)
.map(n  => ({value : n}));


console.log(items);