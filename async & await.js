// async function add(){
//     return 10;
// }
// add().then((result)=>{
//     console.log(result)
// })




// async function getData(){
//     let result=await Promise.resolve("hello world")
//     console.log(result);  
// }
// getData();

// function getdata(){
//     return Promise.resolve("data recived");
// }
// async function displydata(){
//     let result=await getdata();
//     console.log(result);
    
// }
// displydata()
// //---------------
// function one (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("work in progress"); 
//             resolve() 
//             //reject("failed")          
//         },300)
//     })
// }
// async function ans(){
//     try{
//         await one()
//         console.log("promise sucsuss")
//     }
//     catch(err){
//         console.log("have error");
//     }
        
// }
// ans()
//---------------------
function step1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("step one is working")
            resolve()
        },2000)
    })
}
function step2(){
    return new Promise((resolve,reject)=>{
        setTimout(()=>{
            console.log("step two is working")
        },2000)
    })
}
function step3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("step three is working")
        },2000)
    })
}
function step4(){
    return new Promise(resolve,re)
}