function  calculateWatchTime( times ) { 
    let sum=0;
   for(let time of times){
    if(typeof time!= 'number'){
        return "Invalid";
    }
    sum=sum+time;
   }
let hour=Math.floor(sum/3600);
let afterSum=sum%3600;
let minute=Math.floor(afterSum/60);
let second=Math.floor(afterSum%60)
let watchTime={hour,minute,second}
return watchTime;
} 
let watchTime=[100,3800] 
let func=calculateWatchTime(watchTime)
console.log(func)