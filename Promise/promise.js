// let p = new Promise((resolve, reject ) => {
//  let a =1 +1
//  if(a==3){
//     resolve('Success')
//  }
//  else{
//     reject('Failed')
//  }
// })


// p.then((message) => {
//  console.log('This is in the then ' + message)
// }).catch((message)=>{
//     console.log("This is in the catch "+ message)
// })


//******** Use of Arrow function to implement*******


// const userLeft = true
// const userWatcingCatMeme =true

// function watchTutorialCallbak(callback, errorCallback) {
//    if (userLeft) {
//       errorCallback({
//          name: 'User Left',
//          message: '('
//       })
//    }
//    else if (userWatcingCatMeme) {
//       errorCallback({
//        name : 'User Watching Cat meme',
//        message : 'Message <3'
//       })
//    }
//    else{
//       callback('Thumbs up and subscribe!!')
//    }
// }

// watchTutorialCallbak((message)=>{
//    console.log('success :'+ message);
// }, (error) =>{
//    console.log(error.name + ' ' + error.message)
// })



/* ******* This is the use of Promise ******** */



const userLeft = false
const userWatcingCatMeme =false

function watchTutorialPromise() {    // No need of Parameters 

return new Promise((resolve , reject)=>{
   if (userLeft) {
      reject({
         name: 'User Left',
         message: '('
      })
   }
   else if (userWatcingCatMeme) {
      reject({
       name : 'User Watching Cat meme',
       message : 'Message <3'
      })
   }
   else{
      resolve('Thumbs up and subscribe!!')
   }
})

}


watchTutorialPromise().then((message)=>{
   console.log('success :'+ message);
}).catch((error) =>{
   console.log(error.name + ' ' + error.message)
})