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
//-----------callbackhell:-
function s1(callback){
    setTimeout(()=>{
        console.log("step one is completed");
        callback()
    },2000);
}
function s2(callback){
    setTimeout(()=>{
        console.log("step two is completd");
        callback()
    },2000)
}
function s3(callback){
    setTimeout(()=>{
        console.log("step three is completd");
        callback()
    },2000)
}
function s4(callback){
    setTimeout(()=>{
        console.log("step four is completd");
        callback()
    },2000)
}
s1(()=>{
    s2(()=>{
        s3(()=>{
            s4(()=>{
                setTimeout(()=>{
                    console.log("all work done")
                },2000)
            });
        });
    });
});

