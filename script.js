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



// const car = {
//   model: 'Toyota',
//   make: 'Estime',
//   year: 2016,
//   price: 50000
// }

// function showProperties(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'number') {
//       console.log(key, obj[key])
//     }
//   }
// }

// console.log(showProperties(car));



/// Marks of the student


//0-50: F
//51-60: D
//61-70: C
//71-80: B
//81- 100: A

// const marks = [81, 74, 86, 59, 77];
// console.log(calculateGrade(marks));

// const calculateGrade = (marks) => {
//   let avrg = calcAvarage(marks)
//   if (marks > 0 && marks <= 50) {
//     return 'F'
//   } else if (marks > 50 && marks <= 60) {
//     return 'D'
//   } else if (marks > 60 && marks <= 70) {
//     return 'C'
//   } else if (marks > 70 && marks <= 80) {
//     return 'B'
//   } else if (marks > 80 && marks <= 100) {
//     return 'A'
//   } else {
//     return 'You are older to study'
//   }
//   console.log(sum)
// }


// const calcAvarage = (array) => {
//   let sum = 0;
//   for (let value of array) {
//     sum += value;
//   }

//   let avrg = sum / marks.length;

//   return avrg
// }

// console.log(calculateGrade(101));


// Prime Numbers


// const showPrimeNumbers=(limit)=> {
//   for (let i = 2; i <= limit; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break
//       }
//     }
//      if (isPrime) console.log(i)
//   }
// }

// showPrimeNumbers(100)



//Objects


const person = {
  name: 'John',
  surname: 'Doe',
  age: 25,
  id: 232323,
  education: 'HIgh School',
  sertifications: function () {
      console.log('IELTS')
    }
  
}

// function Person(name, surname, age, id, education) {
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
//   this.id = id;
//   this.education = education;
//   this.sertifications = function () {
//     console.log('IELTS')
//   }
// }

// const newP = new Person('John', 'Doe', 25, 232323, 'High school', );

// console.log(newP);


// SUM of triangle

// var side1 = 5;
// var side2 = 6;
// var side3 = 7;
// var s = (side1 + side2 + side3) / 2;
// var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
// console.log(area);


// creating date
// var date = new Date();
// console.log(date);


// Leap year


// const funcLeapYear = (year) => {
//   return (year%100 ===0) ? (year %400===0) : (year%4 ===0)
// }

// console.log(funcLeapYear(2017))


// Converting minutes into seconds

// const minutes = (num) => {
//    return num * 60
// }

// console.log(minutes(3));


// Return the next number from the integer passed


// const addition = (number) =>{
//   return number+=1
// }

// console.log(addition(-2));



// Area of triangle

// const triArea = (a, b) => {
//   return (a * b) / 2
// }

// console.log(triArea(3,2))


// convert Age to days

// const calcAge = (age) => {
//   return age * 365;
// }

// console.log(calcAge(50));


// Fix bug in the code

// const cubes = (a)=> {
//   return a ** 3
// }

// console.log(cubes(10));


// first and last element of the array

// const array = [2, 4, 1, 7, 19];

// console.log(array[0]);
// console.log(array[array.length-1]);


// power calculator


// const calc = (num1, num2) => {
//   return num1 * num2
// };

// console.log(calc(10, 10));



// Finding the max and min in array


// const arrMin = (num1) => {
//   return num1.reduce((p, v) =>{
//     return (p < v ? p : v);
//    })
// }

// const arrMax = (num1) => {
//   return num1.reduce((p, v) => {
//     return (p > v ? p : v);
//   })
// }


// console.log(arrMax([1, 2, 3, 4, 5, 6]));



// const arr = [22, 122, 1, 23, 4, 56];

// //get highest
// const highest = Math.max(...arr);

// //get lowest
// const lowest = Math.min(...arr);


// console.log('Highest number: ' + highest);
// console.log(`Lowest number: ${lowest}`);



// function canNest(arr1, arr2) {
//   return (
//     Math.min(...arr1) > Math.min(...arr2) &&
//     Math.max(...arr1) < Math.max(...arr2)
//   );
// }

// console.log(canNest([1, 2, 3, 4], [0, 6]));=> true
// console.log(canNest([9, 9, 8], [8, 9])); =>false

// array sort

// const onSort = (arr1, arr2) => {
//   let concated = [arr1, ...arr2];
//   let sorted = concated.sort((a, b) => {
//     return a - b;
//   })
//   return sorted;
// }

// console.log(onSort([1, 10], [2, 3, 4, 5, 6, 7]))

// merging two sorted arrays

// var mergeTwoLists = function (list1, list2) {
//   var concatenated = list1.concat(list2);
//   var sorted = concatenated.sort((a, b) => a - b);
//   return sorted;
// };

// console.log(mergeTwoLists([1, 2, 3], [4, 2, 3]));