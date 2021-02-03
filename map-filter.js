const numbers = [3,4,8,4,2,9];
// const output = [];

// for(let i=0;numbers.length; i++){
//     const element = numbers[i];
//     const result =  element * element;
//     output.push(result);
// }

// function square (element){
//     return  element * element;
// }
// const output = numbers.map(function(element){
//     return element * element;
// });
//  const result = numbers.map(x => x*x);
const result = numbers.filter( x => x > 5); //find elements bigger than x(5)
const bigger = numbers.find(x => x > 5); //just check one element bigger than 5
console.log(bigger);
