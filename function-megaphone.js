//megaphone
//objective
//1. create a function that converst a string to uppercase
//
//sample
//megaphone("hellow world") => "HELLO WORLD"


// 1. function declaration
function getMegaphone(message){
    const outPutsound = message.toUpperCase();
    return outPutsound;
}

//2. function invocation
const message = getMegaphone("hey you guys");

//3. console.log
console.log(message);


function getWhisper(mail){
    const outPutsound = mail.toLowerCase();
    return outPutsound;
}

const mail = getWhisper("Hey You Guys");

console.log(mail);
