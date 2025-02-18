function  electionResult( votes ) { 
    if (!Array.isArray(votes)) {
        return 'Invalid';
    }
    else if(votes.length===0){
        return 'Draw'
    }
   let sumMango = 0;
   let sumBanana = 0;
     for(let vote of votes){
if(vote==="mango"){
    sumMango++;
}
else if(vote==="banana"){
    sumBanana++;
}
     }
if(sumMango>sumBanana){
    return 'mango'
}
else if(sumBanana>sumMango){
    return 'banana'
}
else{
    return 'Draw'
}

     }
let fruits= ["mango", "BananA", "na vote", "na vote"] 
let func=electionResult(fruits);
console.log(func)