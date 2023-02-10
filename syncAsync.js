const name = 'Sandesh';
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);

function step1(val,callback){
    const newVal = val+1
    callback(newVal)
}

function step2(val,callback){
    const newVal = val+2
    callback(newVal)
}

function step3(val,callback){
    const newVal = val+3
    callback(newVal)
}

step1(0,(val1)=>{
    step2(val1,(val2)=>{
        step3(val2,(val3)=>{
            console.log(val3)
        })
    })
})


const fetchApi = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchApi);

fetchApi.then((response) => {
  console.log(`Received response: ${response.status}`);
  return response.json()
}).then((data)=>{
    // console.log(data)
});

console.log("Started request…");


const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1,fetchPromise2,fetchPromise3]).then(responses=>{
    // console.log(responses)
}).catch(error=>{
    console.log(error)
})


async function fetchData(){
    try{
        return await fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
    }catch(error){
        return error
    }
}

const food = fetchData()
food.then(data=>{
    // console.log(data)
})

Promise.any([fetchPromise1,fetchPromise2,fetchPromise3]).then(responses=>{
    // console.log(responses)
})


function alarm(delay){
    return new Promise((resolve,reject)=>{
        if(delay<0)
            reject("Alarm must not be negative")
        setTimeout(() => {
            resolve("Wake up!!")
        }, delay);
    })
}
alarm(-1).then(data=>{
    console.log(data)
}).catch(error=>{
    console.log(error)
})