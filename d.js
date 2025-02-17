function  isBestFriend( f1 , f2 ) { 
    if(f1!='object' && f2!='object'){
        return 'Invalid'
    }
     if(f1.roll==f2.bestFriend && f2.bestFriend==f1.roll){
        return true;
     }
     else{
        return false;
     }
} 
let f1={ name: "hashem", roll: 1, bestFriend: 1 }
let f2='cecekcne' 
let func=isBestFriend(f1,f2)
console.log(func)
