// let gameNum=25;
// let useNum=prompt("Enter the number");
// while(useNum!=gameNum){
//     prompt("you have enter wrong guess again")
// }
// console.log("congratulation you have enter right number");

// problem
// let marks= [45,56,43,4,5,];

// let sum=0;

// for(let value of marks){
//     sum=sum+value;
// }
// console.log(`the average is ${sum/marks.length}`);

// function myFunction(msg){
// // msg is parameter in this input
// console.log(msg)
// }
// myFunction("Hello World!");
// function sum(x,y){
//     s=x+y;
//     return s;
// }
// let val=sum(3,4);
// console.log(val);
// const arrowMul=(a,b)=>{
//     return a*b;
// }
// console.log(arrowMul(10,5));
// function countVowel(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a"|| char==="e"|| char==="i" ||char==="o"|| char==="u"){
//             count++;
//         }

//     }
//     console.log(count);
// }
// const countVowel = (str) => {
//     let count = 0
//     for(const char str){
//         if(char==="a"|| char==="e"|| char==="i" ||char==="o"|| char==="u"){
//             count++;
//         }

//     }
//     console.log(count);
// }

// let arr=["rohit","Anant","yash"]
// arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr)
// })
let n=prompt("enter the value")
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
let sum=arr.reduce((prev,current)=>{
    return prev+current;
})
console.log(sum);


let fac=arr.reduce((prev,current)=>{
    return prev*current;
})
console.log("factorial",fac);