// console.log("Hello World")





// var numberTable = document.querySelector("#number-table")


// function table(){
//     for (var i= numberTable; i <= 10; i++){
//         console.log(i)
//         // tableResult.innerHTML = numberTable + " x " + i + " = " + i*numberTable 
//     }
// }

var usertable = prompt("Enter Number")
var tableResult = document.querySelector("#table-result")

for (var i = 1; i<=10; i++){
    tableResult.innerHTML += `${usertable} x ${i} = ${usertable*i} </br> </br>`
}