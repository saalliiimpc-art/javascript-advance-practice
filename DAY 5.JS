// //----------------Shallow Copy?
// let student1 ={
//     name: "salim",
//     age:98,
//     address:{
//         city:"chemmad"
//     }
// }
// let student2={...student1}
// student1.address.city="parappanagaadi"
// student2.name="samir"
// console.log(student1);//{name: 'salim', age: 98, address: {city: 'parappanagaadi'}}
// console.log(student2);//{name: 'samir', age: 98, address: {city: 'parappanagaadi'}}
// console.log(student1.address.city);
// console.log(student2.address.city);

// //-----------------deep copy:-
// let student1={
//     name:"salim",
//     age:56,
//     address:{
//         city:"cheerpngal"
//     }
// }
// console.log(student1);//{name: 'salim', age: 56, address: {city: 'cheerpngal'}}


// let student2=structuredClone(student1)
// student2.name="samiir";
// student2.age=45;
// student2.address.city="chemmad"
// console.log(student2);//{name: 'samiir', age: 45, address: {city: 'chemmad'}}

// //-----------WeakSet
// let sss = new WeakSet();
// let student1={name:"salim"};
// let student2={name:"nizza"};
// let student3={name:"rai"};
// let notstudent={name:"llll"}

// sss.add(student1)
// sss.add(student2)
// sss.add(student3)

// console.log(sss);
// console.log(sss.has(student1));
// console.log(sss.has(student2));
// console.log(sss.has(student3));
// console.log(sss.has(notstudent));

//------------Weak map:-
// type 1;-
let saa =new WeakMap();

let user1={name:"salim"}
saa.set(user1,"Admin")

console.log(saa.get(user1));
let user2={name:"risana"}
saa.set(user2,"manager")
console.log(saa);
// type2:-
let aaa=new WeakMap();
let user={}
aaa.set(user,"salim")
console.log(aaa.get(user));


// //-------------- Optional Chaining:-
// let student={}
// let student2={
//     name:"salim",
//     adrress:{
//        ulppam:"chenagakattil",
//        city:"chemmad"
//     }
// }
// // console.log(student.address.city);--//typeerror
// console.log(student?.adrress?.city)// undefined
// console.log(student2?.adrress?.city);//chemmad

// // array:-
// let arr=[]
// console.log(arr?.[0]);


// // ---------------Nullish Coalescing (??);-
// let username=null;
// console.log(username??"gest");//gest

// let usrename2="salim"
// console.log(usrename2??"user1");//salim

// // -----------------------Debouncing;-
// function debounce(callback,delay){
//     let timer;
//     return function(...arg){
//         clearTimeout(timer);
//         timer=setTimeout(() => {
//             callback(...arg)
//         }, delay);
//     }
// }
// function serach(value){
//     console.log("serching:",value)
// }
// let debounceserch=debounce(serach,500)

// debounceserch("j")
// debounceserch("ja")
// debounceserch("jav")
// debounceserch("java")


// //--------------------Throttling
// function throttle(callback, delay) {
//     let lastTime = 0;

//     return function (...args) {
//         let now = Date.now();

//         if (now - lastTime >= delay) {
//             lastTime = now;
//             callback(...args);
//         }
//     };
// }

// function showMessage() {
//     console.log("Function executed");
// }

// let throttledFunction = throttle(showMessage, 2000);
// throttledFunction();
// throttledFunction();
// throttledFunction();