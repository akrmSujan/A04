function cashOut( money ) { 
    if(typeof money !== 'number' || money<=0){
        return "Invalid" ;
    } 
    money=money*0.0175;
    if(!Number.isInteger(money)){
        let moneyInteger= money.toFixed(4);
        return moneyInteger;
    }
    return money;

} 
let money=0;
let x=cashOut(money)
console.log(x)