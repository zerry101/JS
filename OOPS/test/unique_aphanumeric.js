// const str=Math.floor(Math.random()*26);
// console.log(str);



const generatedAccountNumber = (length) => {
    let availableChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let accountNumber = '';
    for (i = 0; i < length; i++)
        accountNumber += availableChars.charAt(Math.floor(Math.random() * availableChars.length));
    return accountNumber;
}

console.log(generateAccountNumber(8));