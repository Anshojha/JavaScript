const recordVideoOne = new Promise((resolve,reject)=>{
    resolve('One video is recoreded')
})
const recordVideoTwo = new Promise((resolve,reject)=>{
    resolve('second video is recoreded')
})
const recordVideoThird = new Promise((resolve,reject)=>{
    resolve('Third video is recoreded')
})


// This return single message because it will wait for the dunction to comlplete
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThird
]).then((message)=>{
    console.log(message)
})  