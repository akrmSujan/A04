function  isBestFriend( f1 , f2 ) { 
    if(typeof f1!='object' || typeof f2!='object'){
      console.log(f1.length,f2.length)
        return 'Invalid'
    }
    else if(Object.keys(f1).length<3 || Object.keys(f2).length<3){
      return "Input Object Must Have 3 keys"
    }
     if(f1.roll==f2.bestFriend && f1.bestFriend==f2.roll){
      console.log(f1.roll,f2.bestFriend)
        return true;
     }
     else{
        return false;
     }
} 
let f1={ name: "hashem", roll: 1 , bestFriend: 1}
let f2={ name: "kashem", roll: 1, bestFriend: 1}
let func=isBestFriend(f1,f2)
console.log(func)
