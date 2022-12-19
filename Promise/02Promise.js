const recordVideoOne = new Promise((resolve,reject)=>{
    resolve('One video is recoreded')
})
const recordVideoTwo = new Promise((resolve,reject)=>{
    resolve('second video is recoreded')
})
const recordVideoThird = new Promise((resolve,reject)=>{
    resolve('Third video is recoreded')
})



Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThird
]).then((messages)=>{
    console.log(messages)
})  