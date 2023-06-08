// create function that outuputs
// hello is it "name" you're looking for?

//1. function declaration
function sayHello(userName) {
    const sentence = "Hello is it "+ userName +" you're looking for?";

    return sentence;
}

//2. function invocation
const result = sayHello("Pat");

console.log(result);