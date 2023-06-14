let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
let specialsymbolletters = "!@#$%^&*()";
let uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



generatePassword = () => {



    randomLeastRequiredPasswordCharacters = () => {

        requiredpasswordchar = numbers.charAt(Math.floor(Math.random() * numbers.length)) + lowercaseletters.charAt(Math.floor(Math.random() * lowercaseletters.length)) + specialsymbolletters.charAt(Math.floor(Math.random() * specialsymbolletters.length)) + uppercaseletters.charAt(Math.floor(Math.random() * uppercaseletters.length));

        randomrequiredcharacters = "";

        for (let i = 0; i < requiredpasswordchar.length; i++) {
            let char = requiredpasswordchar.charAt(Math.floor(Math.random() * requiredpasswordchar.length))
            randomrequiredcharacters += char;

        }

        return randomrequiredcharacters;


    }


    randomShuffle = (cipherText) => {


        let cipherString = cipherText;
        let randomlyShuffledString = "";
        for (let i = 0; i < cipherText.length; i++) {
            randomCharacter = cipherString.charAt(Math.floor(Math.random() * cipherString.length));
            cipherString = cipherString.replace(randomCharacter, '');
            randomlyShuffledString += randomCharacter;
        }

        return randomlyShuffledString;
    }

    let randomCharacters = ""
    for (let i = 0; i < 4; i++) {

        randomCharacters += chars.charAt(Math.floor(Math.random() * chars.length))
    }


    return randomShuffle(randomLeastRequiredPasswordCharacters() + randomCharacters);

}

console.log(generatePassword());
