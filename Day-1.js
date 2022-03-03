function add(n1,n2){
    return n1 + n2

}

const sub = function (n1,n2){
    return n1-n2
}

const cb = function (n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

console.log(add(1,2))
console.log(add)
console.log(add(1,2,3))
console.log(add(1)) //Missing a variable for the function
console.log(cb(3,3,add))

console.log(cb(4,3,sub))
//Prints the right result form the function sub
// but because the CB function says n1 + n2 when printing the result it looks wrong

//console.log(cb(3,3,add())) call back is not a function
//console.log(cb(3,"hh",add)) Wrong input can't add 3 to hh


const mul = function (n1,n2){
    return n1*n2
}
const newCb = function (n1,n2,callBack){
    return "Result of function = " + callBack(n1,n2);
}
console.log(newCb(2,2,mul))


const array_names = ["Lars","Jan","Peter","Bo","Frederik"]
const array_filter = array_names.filter(filter_array)

function filter_array(array_names){
    return array_names.length <=3
}
console.log(array_filter)

