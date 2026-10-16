//simple examble:-
//          resolved:-

// let pr= new Promise((resolved,reject)=>{
//     resolved("hello salim")
// });
// pr.then((result)=>{
//     console.log(result)
// });

// //            reject:-
// let pr2=new Promise((resolved,reject)=>{
//          reject("somthing went wrong")
// });
// pr2
// .catch((result)=>{
//     console.log(result)
// })
//---------------------------------------
// how to use seet Timeout:- 
// syntax:-
// setTimeout(()=>{
//         //code
//     },secunt)

// let pr= new Promise((resolved,reject)=>{
//     setTimeout(()=>{
//         resolved("hello salim")
//     },2000)
// });
// pr.then((result)=>{
//     console.log(result)
// });


// let pr2=new Promise((resolved,reject)=>{
//     setTimeout(()=>{
//          reject("somthing went wrong")
//     },3000)
// });
// pr2
// .catch((result)=>{
//     console.log(result)
// })
//setTimeout() callback പ്രവർത്തിക്കുന്നത് കുറച്ച് സമയം വൈകിപ്പിക്കുന്നു.
//2 സെക്കൻഡിന് ശേഷം resolve() Promise-നെ വിജയകരമായി പൂർത്തിയാക്കുന്നു.
//തുടർന്ന് .then()-ന്റെ callback പ്രവർത്തിക്കുന്നു
//-------------------------



// let q=new Promise((resolved,reject)=>{
//     resolved(10)
// });
// q.then((res)=>{
//     console.log(res+10)
// })//       20

//------------------------------------------------

// //Using .then() and .catch() Together:-
// let pro=new Promise((resolved,reject)=>{
//     let ans=true;

//     if(ans){
//         resolved("task completed")
//     }
//     else{
//         console.log("task failed");
//     }
// })
// pro.then((result)=>{
//     setTimeout(()=>{
//         console.log(result)
//     },3000)
    
// })
// pro.catch((error)=>{
//     console.log(error)
// })
// // //How does it work?
// // success = false ആയതിനാൽ else പ്രവർത്തിക്കുന്നു.
// // reject("Task failed!") Promise-നെ reject ചെയ്യുന്നു.
// // .then()-ലെ success callback ഒഴിവാക്കപ്പെടുന്നു.
// // .catch() error സ്വീകരിക്കുന്നു.
// // console.log(error) message കാണിക്കുന്നു.
//-----------
// let promise = new Promise((resolve, reject) => {
//     reject("Failure");
//     resolve("Success");
// });

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//----------------
// // finally():-

// let pro= new Promise((res,rej)=>{
//     res("data recived")
// })
// pro.then((result)=>{
//     console.log(result)
// })
// setTimeout(()=>{
//     pro.finally(()=>{
//         console.log("checking is completed");
//     })
// },2000);
// //------------------------------------
// Promise.resolve(10)
//     .then((result) => {
//         console.log(result);
//     });

//----------------------
// //---Promise.reject()
// let a=Promise.reject("failed");
// a.catch((error)=>{
//     console.log(error);
// });
//------------------------------------------------------
//                 //Promise.all:-
// // Q1:-
// let p1=new Promise((resolved)=>{
//     setTimeout(()=>{
//         resolved("task one is completed")
//     },3000)
// })
// let p2 =new Promise((resolved)=>{
//     setTimeout(()=>{
//         resolved("task two is completed")
//     },1000)
// })

// let p3= new Promise((resolved)=>{
//     setTimeout(()=>{
//         resolved("task three completed")
//     },2000)
// })
// Promise.all([p1,p2,p3])
// .then((result)=>{
//     console.log(result)
// })


// //Q2:-
// let pr1 = Promise.resolve("apple");
// let pr2 = Promise.resolve("Banana");
// let pr3 =Promise.resolve("orange");
// Promise.all([pr1,pr2,pr3])
// .then((result)=>{
//     console.log(result)
// })

// // Q3:-
// // What Happens If One Promise Fails?
// let p1=Promise.resolve("apple")
// let p2=Promise.reject("banana")
// let p3=Promise.resolve("orange")
// Promise.all([p1,p2,p3])
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// });

// //---------.allsettlled()-------------------
// let a =Promise.resolve("salim");
// let b= Promise.reject("sr");
// Promise.allSettled([a,b])
// .then((result)=>{
//     console.log(result);
    
// });
// //output:-
// // {status: 'fulfilled', value: 'salim'}
// // {status: 'rejected', reason: 'sr'}

// ///-----------promise.race():-
// let a= new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("one")
//     },2000);
// });
// let b= new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("two")
//     },1000);
// });
// Promise.race([a,b])
// .then((result)=>{
//     console.log(result);
// });

// //----------------Promise.any()
// let p1=Promise.reject("one");
// let p2=Promise.resolve("two")
// Promise.any([p1,p2])
// .then((result)=>{
//     console.log(result)
// });