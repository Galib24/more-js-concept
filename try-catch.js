function checkAge(){
    // console.log('clicked')
    const ageField = document.getElementById('age')
    const ageText = ageField.value
    const errorTag = document.getElementById('error');
    try{
        // console.log(bBaria)
        const age = parseInt(ageText);

        if(isNaN(age)){
           
            // console.log('age not found', age,ageText)
            throw 'please enter a number'
        }
        else if(age < 18){
     throw "bassa kassa not allow"
        }
        else if(age > 30){
       throw "bura manus not allow"
        }
        errorTag.innerHTML = '';

    }
    catch(err){
console.log('ERROR: ', err)
errorTag.innerHTML = `something wrong: ` + err;
    }
finally{
    console.log('all done')
}
    console.log(11111)
}