const getData = new Promise((resolve, reject)=>{
    // resolve(566665);

    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
        resolve(566665);
    }else{

        reject('no data available')
    }
})
getData
.then(data => console.log(data + 22))
.catch(err => console.error('ERR:', err))