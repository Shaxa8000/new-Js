// Ckecing array or not

// const arr = (input) => {
//     if (typeof input === typeof []) {
//         console.log('this is an array')
//     } else {
//         console.log('Not array')
//     }
// }

// arr([1, 2, 3, 4,]);
// arr(1235);
// arr('str');



// cloning js array


// const arrClone = (input) => {
//     let array = [1, 2, 3, 4];
//     let arra = array.slice(0);
//     return arra
// }

// console.log(arrClone());


// getting first element of array


// const getFirst = (input) => {
//     return input[0]
// }

// console.log(getFirst([2, 1, 4, 5]));
// console.log(getFirst(['Bmw', 'Gentra', 'Nexia']));

// console.log(getFirst([[1, 2, 3],2, 1, 4, 5]));



//getting last element of array

// const getFirst = (input) => {
//   return input[0];
// };

// console.log(getFirst([2, 1, 4, 5]));
// console.log(getFirst(['Bmw', 'Gentra', 'Nexia']));

// console.log(getFirst([[1, 2, 3], 2, 1, 4, 5]));

// //array to string

// const myColor = ['Red', 'Green', 'White', 'Black'];

// // const str = myColor.toString();
// const str = myColor.join('-')
// console.log(str)

// sorting numbers

// const arr = [-2, 1, 3, 5, 2, 4, 8, 10];

// const arr1 = arr.sort((a, b) => {
//     return a - b
// })
// console.log(arr1)


// uppercase to lowercase

// var str = 'c';
// var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var LOWER = 'abcdefghijklmnopqrstuvwxyz';
// var result = [];


// for (let i = 0; );


//object comparison 

// const obj = {
//     name: 'Shaxa',
//     surname: 'Yakhyaev'
// };

// const obj1 = {
//   name: 'Shaxa',
//   surname: 'Yakhyaev',
// };

// if (obj.toString() === obj1.toString()) {
//     console.log('true')
// } else {
//     console.log('false')
// };

// day and hour

// var today = new Date();
// var day = today.getDay();
// var daylist = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday ',
//   'Thursday',
//   'Friday',
//   'Saturday',
// ];
// console.log('Today is : ' + daylist[day] + '.');
// var hour = today.getHours();
// var minute = today.getMinutes();
// var second = today.getSeconds();
// var prepand = hour >= 12 ? ' PM ' : ' AM ';
// hour = hour >= 12 ? hour - 12 : hour;
// if (hour === 0 && prepand === ' PM ') {
//   if (minute === 0 && second === 0) {
//     hour = 12;
//     prepand = ' Noon';
//   } else {
//     hour = 12;
//     prepand = ' PM';
//   }
// }
// if (hour === 0 && prepand === ' AM ') {
//   if (minute === 0 && second === 0) {
//     hour = 12;
//     prepand = ' Midnight';
//   } else {
//     hour = 12;
//     prepand = ' AM';
//   }
// }
// console.log(
//   'Current Time : ' + hour + prepand + ' : ' + minute + ' : ' + second
// );

// ARRAYS

// const colors = ['Black', 'Green', 'Yellow', 'Red', 'Pink'];


// const arr = (input) => {
//     return input[0]
// }

// console.log(arr(colors))


// colors.pop();
// console.log(colors.length);
// console.log(colors);

// for (let i = 0; i < colors.length; i++) {
//     console.log(i, colors[i]);
// }


//objects

// const person = {
//     name: 'John',
//     surname: 'Doe',
//     id: 2424,
//     status: 'Student',
//     chirp: function() {
//         console.log('CHIRP CHIRP')
//     },
//     sayHello: function () {
//         console.log(this.name + this.surname);
//     }

// }

// for (key in person) {
//     console.log(person.chirp[key])
// }

//class 

// class Student {
//     constructor(title) {
//         this.title = title;
//         console.log(title)
//     }
//     getName = function (title) {
//         console.log(this.title, 'student')
//     }
// }

// const str = new Student('student');

// class Department extends Student{
//     constructor(title) {
//         super(title)
//     }
// }

// const strr = new Department('Webbrain');
// strr.getName()



// const arr = [2, 4, 1, 6, 8, 3, 10];
// const array = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         array.push(arr[i])
//     }
// }

// console.log(array)




// const obj = {
//     name: 'JOhn',
//     surname: 'Doe',
//     status: 'student'
// };

// for (const key in obj) {
//     console.log(obj[key])
// }



// function getData(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i])
//     }
// }

// var data = [
//   {
//     id: 1,
//     name: 'Asad',
//     status: 'Student',
//     job: 'Architect'
//   },
//   {
//     id: 1,
//     name: 'Shavkat aka',
//     surname: 'Samadov'
//   }
// ];

// const findOccurance = () => {
//   const array = data.map(value => {
//    })
// }

// findOccurance()









// // a = 0;
// // const obj = Object.values(data[0]).toString()

// // for (let i = 0; i < obj.length; i++) {
// //   (obj[i] === 'a' || obj[i] === 'A') && a++;
// // }

// // console.log('a =', a);
  

  


//GetMax function
// const myFunc = (num1, num2) => {
//   if (num1 > num2) {
//     return num1
//   } else  {
//     return num2
//   }
// }

// console.log(myFunc(5, 3))


//getMax ternary version

// const myFunc = (a, b) =>{
//   return (a > b) ? a : b;
// }

// console.log(myFunc(5, 10))  => 10


//finding IsLandscape

// const isLandscape = (width, height) =>{
//   return (width > height)
// }

// console.log(isLandscape(4, 5));  => false

// FizzBuzz algoritmi


// const fizzBuzz = (input) => {
//   if (typeof input !== 'number') {
//     return 'son emas'
//   } else if (input % 3 === 0 && input % 5 === 0) { return 'FizzBuzz';
//   } else if (input % 3 === 0) {
//     return 'Fizz'
//   } else if (input % 5 === 0) {
//     return 'Buzz'
//   } else {
//     return input
//   }
// }

// console.log(fizzBuzz(8));



// const sum = (limit) => {
//   let sum = 0;

//   for (let i = 0; i < limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) 
//       sum+= i
//   }

//   return sum
// }

// console.log(sum(10))



