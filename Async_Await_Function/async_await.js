

async function weather(){
    let delhiWeather = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("26 deg Celcius")
        }, 4000);
    })

    let bangWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("20 deg Celcius")
        },8000)
    })


    console.log("Fetching weather details.....")

    console.log("Fetching the weather details of Delhi is under processs please wait while we are fetching the details......")

    let delhiW = await delhiWeather

    console.log(" The delhi weather is " + delhiW)

    console.log("Fetching the weather detail of Banglore.....")

    let bangW = await bangWeather

    console.log("The banglore is pleasent with "+bangW)

    return [delhiW , bangW]
}

console.log("Welcome to the weather control room")

let a = weather()

a.then((value)=>{
    console.log(value);
})