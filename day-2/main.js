setTimeout(()=>{
    console.log("hello i am from global")
},2000)

let count = 0;

const interval = setInterval(()=>{
    console.log(`Interval Count: ${++count}`);

    if(count === 4){
        clearInterval(interval)
    }
   
}, 2000);

console.log(Object.getOwnPropertyNames(global))