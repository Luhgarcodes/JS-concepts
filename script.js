"use strict"
// function statement

// function a() {
//     console.log("a is called");
// }

// function expression 

// var d = function (param1) {
//     console.log("a is called");
// }

// anyonomus fn
// function (){
//     console.log("a is called");
// }

// named function expression
// var da = function xyz() {
//     console.log("a is called");
// }

// first class function - ability to used like values 
// first class citizens
//  the ability to use the fn  as values and can be passed as arguments and can be returened from fns this 
// ability is called first class fn in js

// d(function () {

// })


// variable enviroment 
/**
 * 
 * global ---- is created on while starting r creating the js file 
 * local ---- is created while a function is created 
 * block ---  is created on compound statement  like (if statements)
 * closure ---- is creatd while a closure scope is created 
 */


/**
 * Promise 
 * its a object that represents the eventual completion of asyc opertions
 * 
 * 
 * 
 */

// createOrder(cart)
//     .then(orderId => proceedToPayment(orderId))
//     .then(paymentInfo => showOrderSummary(paymentInfo))
//     .then(paymentInfo => updateWalletBalance(paymentInfo))


// const err = new Error()


/**
 * the async function should return a promise r it will return promise
 */

// const getData = async () => {
//     return "raghul"
// }

// const data = getData()
// console.log(data);

/**
 *  async await are used to handle promises
 * 
 */


const p1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise 1 ---------------")
        }, 10000);
    })
}
const p2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise 2 ---------------")
        }, 5000);
    })
}
const API_URL = "https://cbjjvfsdfsd.com"

async function handelPromises() {
    const data = await fetch(API_URL)
    const jsonVal = data.json()
    console.log(jsonVal);
}
// handelPromises();

const handleGetData = async () => {
    console.log("from first line");
    const val1 = await p1()
    console.log("namasete 1");
    console.log(val1);
    const val2 = await p2()
    console.log("namasete 2");
    console.log(val2);
}
// handleGetData()

/**
 * the execution of fucntion will suspend whwen it sees await fn
 */

/**
 * promise all--------------
 * 
 *  promise all wait for completion of all api to complete the
 * 
 * [p1,p2,p3]
 * 3s,1s,2s
 * 
 * when the any of one when is rejecetd it will throw the error
 * 
 * 
 * when p2 got error it wont wait for others to complete its immediately throws the error 
 *      before other to compelete
 * 
 * canceling of promise is not possible in js right now
 * 
 * all or none
 * 
 * ethana onnu fail kooda mothama pogidum
 */

/**
 * 
 * 
 * Promise allsettled
 * 
 * to overcome promise all ------>  all or none case
 * 
 * promise.allsettled
 * 
 * it work based on irrespective of success or failure of promises of single calls 
 * 
 * if p2 fails in but p1 and p3 resolved it will work with resolved one
 * 
 * 
 * ethana onnu fail kooda balance irrukurathu ellam resolve agaa wait pannum then result tharum
 * 
 * [res,err,res2]
 * 
 * it will give you out the object 
 * 
 */



/**
 * 
 * promsie,.race
 *  
 * will give ouput of which is completed first it can be success r failure
 * 
 * const val = [p1,p2]
 * 
 */


/**
 * 
 * promise .any
 * 
 * its will give or wait for first success
 * 
 * if all fails it will give aggregate error [err1,err2,err3]--- list of all errors
 * seeking for first success
 * 
 */


/**
 * 
 * settled
 * 
 * resolve - reject
 * success - failure
 * fulfilled - rejected
 * 
 */


// const pro1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise 1 ---------------")
//     }, 1000);
// })
// const pro2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("promise 2 ---------------")
//     }, 3000);
// })
// const pro3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("promise 3 ---------------")
//     }, 2000);
// })


// Promise.any([pro1, pro2, pro3]).then(res => { console.log(res) }).catch(err => console.log("err----", err.errors))


/**
 *  this----------------------------------- 
 * 
 * 
 */

// this-----------------------------------

//  this in gobal space

console.log(this) // refer to window global obj
//  this inside a function

function x() {

    // value of this depends on strict and non strict mode
    console.log(this);
}

//  this inside  non-strict mode (this substitution happens)
// if value of this is undefined or null 
// this keyword will be replaced with global object
// only in non strict mode


//  this value depends on how this is called using (window) in strict mode
// in strict mode -----------------------------------


x(); //undefined
window.x(); //window

//  this inside a object method



const student1 = {
    name: "raghul",
    printName: function () {
        console.log(this.name);
    }
}
student1.printName()

//  call apply bind methods(sharing methods)


const student2 = {
    name: "deepika",
}

student1.printName.call(student2);


//  this inside arrow  fn    ---- will  refer to enclosing lexical context

const obj1 = {
    name: "raghul",
    printName: () => {
        console.log(this);
    }
}
obj1.printName()

const arroeFn = () => {
    console.log("=================", this);
}
arroeFn()


//  this inside nested arrow fn


const obj2 = {
    name: "raghul",
    x: () => {
        function y() {
            console.log(this);
        }
        y();
    }
}
obj2.x()



//  this inside DOM => wil refer to html element
