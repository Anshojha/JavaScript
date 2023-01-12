
let promise  = new Promise ((resolve,rject )=>{
 console.log("Hello in Promiser");
 resolve(56);
})



console.log("Hello");

setTimeout(() => {
    console.log("Hello printed in 2 sec after the timeout function");
}, 4000);

console.log("My name is "+ "Ansh");

console.log(promise);