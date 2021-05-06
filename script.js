            // const sis = () => 'моя функцыя';

            // console.log(sis())



            // const pep = ()  => 'evo67' 
            // console.log(pep())



            // const close = () => 'У нас закрыт магазин'
            // console.log(close())


  
// const user = Object.assign ({
//     name: 'John',
//     surname: 'Smith',

// })  

// user.name = 'Pete'

// delete user.name 

// let schedule = {};

// alert( isEmpty(scedule) );

// schedule['8:30'] = 'get up';

// alert( isEmpty(schedule) );
\
//   let user = { name: 'Иван'};
//   let admin = user;

//   admin.name = 'Петя'
//   alert(user.name)

// let a =  {};
// let b = a;

// alert(a === b );
// alert(a === b );


// let user = {
//     name: 'Иван',
//     sizes: {
//         height: 182,
//         widht: 50
//     }
// };

// let clone = Object.assign({}, user);

// alert( user.sizes === clone.sizes );


 let user = {
//      name: ' Johan',
//      age: 30,
//  }; 

//  let key = prompt('Что вы хотите узнать опользователе?','name');

//  alert(user[key])

             
             const surce = [10,20,30,40,50]

 console.log(surce[2])

             
              let programer = Object.assign ({
     name: 'Veronica',
     Age: 25,
 })

 let hobby = Object.assign ({}, programer,{
     book: 'Javascript'
 })

 let key = prompt('Что сейчас читают?') 
    alert(hobby[key])
    let userName = prompt('Кто читает?')
    alert(programer[key])

// function calculator 
let calculator = {
    sum () {
        return this.a + this.b;
    },

    mul () {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};


calculator.read();
alert (calculator.sum());
alert (calculator.mul());


let carAge = 1995 
function calculatorAge(Age) {
    let currentYear = 2020
    let result = currentYear - Age
    return result
}










if (calculatorAge(carAge) < 10 ) {
    console.log ('Машина меньше 10 лет')
} else {
    console.log('Машина больше 10 лет')
} 



function showMessage (from, text, lol) {
  console.log(from, text, lol)
};

showMessage('Аня', 'Привет',);
showMessage('Аня', 'Как дела?', 'тут');
 



let carYear = 2010
let personYear = 1995 

function calculatorAge(year) {
  var currentYear = 2018
  var value = currentYear - year
  return value
};

function calculatorApdate(year) {
  if((calculatorAge(year) >= 10 )) {
    console.log('Возраст больше 10 лет');
  } else {
    console.log('Возраст меньше 10 лет')
  };
};

calculatorApdate(carYear);
calculatorApdate(personYear);

