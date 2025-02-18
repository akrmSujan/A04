function validEmail(email) {
    if (typeof email !== 'string') {
        return "Invalid";
    }
    let specialCharacter = ".-_+@"
    if (specialCharacter.includes(email[0]) || !email.endsWith('.com')) {
        return false;
    }
    let emailIndex = email.indexOf('@')
    if (emailIndex <= 0 || emailIndex >= email.length - 4) {
        return false;
    }
    let count = 0;
    for (let character of email) {
        if (character == ' ') {
            return false;
        }
        if (character == '@') {
            count++;
            if (count > 1) {
                return false;
            }
        }
    }
    return true;
}
let email =
console.log(email.length)
let display = validEmail(email)
console.log(display)