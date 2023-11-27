// console.log("Radhey Radhey");
// let lastName='babbar';
// let firstName=new String('Rohit');

// let date=new Date()
// console.log(date);
// let date2=new Date('august 15 2002')

// date2.setFullYear(1954);
// console.log(date2);  


let myArray=[1,3,6,7];
console.log(myArray);
//  searching
console.log(myArray);
console.log(myArray.indexOf(7));
console.log(myArray.includes(3));
console.log(myArray.indexOf(3,2));

let courses=[
    {no:1,naam:'Rohit'},
    {no:2,naam:'Agrahari'}

];
console.log(courses);

// let course =courses.find(function(course){
//     return course.naam =='Rohit'
// })
// console.log(course);

// arrow function 

let course=courses.find(course=>course.naam==='Rohit')
console.log(course);

let number=[1,3,4,5,3,6,7,];
number.pop();
number.shift();
number.splice(3,1);
number.splice(1);

console.log(number);