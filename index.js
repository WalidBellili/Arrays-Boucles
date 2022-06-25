// exo1

// const fruits = ["mongo", "lemon", "blueberry"]
// console.log(fruits);
// console.table(fruits);

// exo2
// const ingredients = ["eggs", "milk", "butter"]
// console.log(ingredients[1]);
// console.log(ingredients.indexOf("butter"));

// exo3

// const objects = ["pen", "book", "lamp"]
// objects.unshift("chair")
// console.log(objects);
// objects.pop()
// console.log(objects);
// objects.push("laptop")
// console.log(objects);
// objects.shift()
// console.log(objects);

// exo4

// const numbers = [4, 10, 8, 12, 6]
// numbers.reverse()
// console.log(numbers);

// exo5

// let total = 0
// const limit = 10

// for (let i = 0; i <= limit; i ++) {
//     total = total+ i
//     console.log(total);
// }

// exo6

// const sentence = "Hello Konexio !"

// for (let i = sentence.length-1; i >= 0; i--) {

//     console.log(sentence.charAt(i)); 
// }

// exo7

// for (let i = 0; i <= 100; i++) {
    
//     if (i % 7 === 0 ) {
//         console.log("");
//     } else if (i % 3 === 0 && i % 5 === 0){
//         console.log("fizzbuzz")
//     } else if (i % 5 === 0 ) {
//         console.log("buzz");
//     } else if (i % 3 === 0 ) {
//         console.log("fizz");
//     } else {
//         console.log(i);
//     }      
// }

// exo8

// let counter = 0
// const count = 100
// while (counter < count) {
//     counter++
//         if (counter % 7 === 0 ) {
//         console.log("");
//     } else if (counter % 3 === 0 && counter % 5 === 0){
//         console.log("fizzbuzz")
//     } else if (counter % 5 === 0 ) {
//         console.log("buzz");
//     } else if (counter % 3 === 0 ) {
//         console.log("fizz");
//     } else {
//         console.log(counter);
//     }   
// }

// exo9

// const students = ["Walid","Wade","Rayan","Walid","Benoit","Emad","Jad","Lynda","Florez","Lucas","Arthur","Thomas","Aurelien","Clara","Danh","Cinie","Edaly","Mago","Dushen","Julien","Florent"];
// let array = students[Math.floor(Math.random()*students.length -1)]
// console.log(array);

// exo10



// let array = []
// for (let i =0; i <20; i++) {
    
//      array.push(Math.floor(Math.random()*101));
//      console.log(array);

//      array[i] = Math.floor(Math.random()*101) 
//      console.log(array);
    
// }
// PARTIE 2 du 10
// let array = []
// for (let i =0; i <20; i++) {

//      array[i] = Math.floor(Math.random()*101)
//     //  console.log(array);
    
// }

// let max = 0
// for (let i = 0; i < array.length; i++) {
    
//     if (max < array[i]) {
//         max = array[i]  
//     }
// }
// console.log(max);
// *****************************************
// let min = 11
// let max = 47

// let result = 0

// for (let i = 11; i < 47; i++) {
    
//     if (i % 2 === 0) {
//         result +=   i;       
//     }  
// }
// console.log(result);

// exo2
// let min = 109
// let max = 588

// let result = 0

// for (let i = 109; i < 588; i++) {
    
//     if (i % 2 === 1) {
//         result +=   i;       
//     }  
// }
// console.log(result);



// let numbers = [1, 2, 3, 4, 5]
// let squares = []
// let roots = []

// for (let i = 0; i < numbers.length; i ++) {
//     squares[i] = numbers[i]**2

// }
// for(let i = 0; i < squares.length; i++) {
//      roots[i] = Math.sqrt(squares[i])
//     }
//     console.log(roots);


// exo4

// let multiplication = 0
// let init = 0

// for (let i = 0; i < 11; i++) {
//     const result =i *3;    
//     console.log(`3 * ${i} = ${result}`);
// }

// exo5
// const multiplicateur = 0
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//     for (let j = 0; j <= 10; j++) {
//         console.log(j);
//     }
// }

// exo8

// let factorial = 1
// for (let i = 1; i < 8; i++) { 
//     for (let j = 1; j < i; j++) { 
//     }
//     console.log(factorial);
//     factorial = factorial * i
    
// }


// console.log(factorial);

// Lancez un dé 20 fois et affichez la somme de tout les résultats plus grand ou égal à 5
// exo 10
// let des = 0
// for (let i =0; i <= 19; i++){
//     des = Math.ceil(Math.random()* 6)
//     des = des + i 

//     if (des >= 5) {
//         console.log(des + i );
//     }

// }


// var box1 = 12;
// var box2 = 5;

// for (var i = 12; i < 14; i++) {
//     box1 = box2;
//     console.log(box1 + box2);
//     box2 = box1 + i;
// }

// console.log(box1+"box1");
// console.log(box2+"box2");
// console.log(i + "i");
// var box1 = 12;

// for (var i = 12; i !== 0; i = i - 3) {
//     console.log(box1);
//     box1 = box1 + i;
// }

// console.log(box1);
// console.log(i); 
// il ne fait pas le dernier tour de 45 donc le tour jusqu'à zero ne tourne oas