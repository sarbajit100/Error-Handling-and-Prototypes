try{

   let a = "123"
   let b = parseInt(a);
    
    if(b){

        console.log(b)
    }else{
        throw new Error();
    }
}catch{
console.log('not a number')
}
