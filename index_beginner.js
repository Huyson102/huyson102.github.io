//Ctrl + Shift + P (F1)

// variable declaration

var x = 1;
const y = 2; //dùng khai báo hằng số - imutable
let z = 3;
console.log(x);


if (x===y){
    console.log("equal")
} else {
    console.log("not equal")
}
// array
const arr = [1, 2, 3, 4, 5]

// loop
for (let i = 0; i< arr.length; i++){
    console.log(arr[i]);
}

const obj = {
    name: "Quan",
    age: "24",
    sayHello: function () {
        console.log("Hello world")
    }
}

console.log(obj.name)
console.log(obj["age"])
obj.sayHello();

obj.address = {
    district: "Cau Giay",
    city: "Hanoi"
}

