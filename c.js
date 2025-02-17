function  electionResult( votes ) { 
    if(votes.length==0 ){
        return 'Draw';
    }
    if (!Array.isArray(votes)) {
      return 'Invalid';
  }
  
  let voteCount={};
  let sameCount=null;
  let maximum=0;
  let isSame=false;
  for(let vote of votes){
  if(voteCount[vote]==undefined){
    voteCount[vote]=1;
  }
  else{
    voteCount[vote]+=1;
  }
if(voteCount[vote]>maximum){
    maximum=voteCount[vote]
    sameCount=vote;
isSame=false;
}
else if(voteCount[vote]==maximum){
    isSame=true;
}
  }
  if(isSame){
    return 'Draw';
  }
  return sameCount;
}
let inPut=["mango", "BananA", "na vote", "na vote"] 
let func=electionResult(inPut)
console.log(func)