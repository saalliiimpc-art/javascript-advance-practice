// let hh =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("resolved");
//     },3000) 
// })
// .then((result)=>{
//     console.log(result)
// })
//---------------
// let student1 = {
//     name: "Salim",
//     address: {
//         city: "Kondotty"
//     }
// };

// let student2 = { ...student1 };

// student2.name = "Rahul";
// student2.address.city = "Kochi";

// console.log(student1);
// console.log(student2);
// //-----------callback()----------
// // Q1:-
// function one(callback){
//     callback()
// }
// function main(){
//     console.log("salim")
// }
// one(main)
// // Q2:-
// function greet(name,callback){
//     console.log(name+"welcome");
//     callback()
// }
// function message(){
//     setTimeout(()=>{
//         console.log("welcome to javaScript");
//     },3000)
// }
// greet("salim",message)
// // Q3:-
// function greet(name,callback){
//     console.log("Mr",name);
//     callback()   
// }
// function by(){
//     console.log("goodbye")
// }
// greet("salim",by);
// //-----------callbackhell:-
// function s1(callback){
//     console.log("step one is completed");
//     callback()
// }
// function s2(callback){
//     console.log("step two is completd");
//     callback()
// }
// function s3(callback){
//     console.log("step three is completd");
//     callback()
// }
// function s4(callback){
//     console.log("step four is completd");
//     callback()
// }
// s1(()=>{
//     s2(()=>{
//         s3(()=>{
//             s4(()=>{
//                 console.log("all work done");
                
//             })
//         })
//     })
// })


// //. Shallow Copy vs Deep Copy
// let arr1=[[10,20],[30,40]]
// let arr2=structuredClone(arr1)
// arr2[0][0]=100
// console.log(arr1);
// console.log(arr2);
// console.log(arr2[0],arr2[1]);