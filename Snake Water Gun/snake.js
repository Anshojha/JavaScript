let user = prompt("Enter S , G and W");

let cpu1 = Math.floor(Math.random()*3);

let cpu = ["S","W","G"][cpu1];

let CpuScore = 0, userScore =0;


const match  = (user , cpu)=>{
    if(cpu===user){
        return 0;
    }
    else if(cpu === "S" && user ==="W"){
        userScore++;
    }
    
}