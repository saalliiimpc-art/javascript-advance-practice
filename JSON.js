let student = {
    name: "Salim",
    age: 20
};

let result = JSON.stringify(student);

console.log(result)
// console.log(typeof student);
// console.log(typeof result);


let data =result;



let ans = JSON.parse(data);

console.log(ans.name);
