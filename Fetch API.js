// fetch("https://jsonplaceholder.typicode.com/users")//-- call fetch
// .then((response)=>{
//     console.log(response)
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
//  .catch((error)=>[
//     console.log(error)
//  ])
 

 //How to Display Fetch API Data on a Webpage


 let p=document.getElementsByClassName("pr")[0];

 fetch("https://jsonplaceholder.typicode.com/users/1")
 .then((result)=>{
    return result.json();
 })
 .then((data)=>{
    p.textContent=data.name;
 })


