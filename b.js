function  validEmail( email ) { 
    if(typeof email !== 'string'){
        return "Invalid" ;
    }
         let specialCharacter= ".-_+@"
         if(specialCharacter.includes(email[0]) || !email.endsWith('.com')){
            return false;
         }
         let emailIndex= email.indexOf('@')
         if (emailIndex <= 0 || emailIndex >= email.length - 4) {
            return false;
        }
         let space=' '
         for(let character of email){
            if(character == space){
                return false;
            }
         } 
         return true;
} 
let email="heerhfieghegnekgnerkgergeroalom.com@" 
console.log(email.length)
let display=validEmail(email)
console.log(display)