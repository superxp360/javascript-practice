const student ={
    firstName: 'Loreno',
    lastName: 'Mokwa',
    age: 19,
    student: true,
    awesome: true,
}

console.log(student.firstName);

// ----Let's get a bit more advance ----- //

//Creating an object from separate variables; 

const make = 'Audi';
const model = 'A3';
const year = 2018;

const myCar = {make, model, year}; // assembled 3 variables into a single object

//Frequently, we have an object and we want to break it into separate variables  

//This is called "destructuring". ***

//We have an object:

const movie = {
    title: 'Fight Club',
    writer: 'Chuck P',
    year: 1998,
    genre: 'Action',
}

// lameway:

//const title = movie.title;
//const writer = movie.writer;
//const genre = movie.genre;

// or we can be asweosme and write:

const { title, writer, genre} = movie;

console.log(title);

