

// Promises

// wykonuja sie tylko raz 
// zwracaja sukces lub blad 
// wyjatki staja sie bledami
// mozna przekazywac dane 
// immutable once resolved
// various libraries available

function asyncMethod(message) {
    return new Promise(function (fulfill, reject) {
        setTimeout(function () {
            console.log(message);
            fulfill();
        }, 500)
    });
}

function findUser() {
    return asyncMethod('Find User')
}

function validateUser() {
    return asyncMethod("Validate User")
    // throw "ERROR ! Can't validate user"
    // Promise.reject("Can't validate user")
}

function doStuff() {
    return asyncMethod('do stuff')
}

asyncMethod('Open DB Connection')
    .then(findUser)
    .then(validateUser)
    .then(doStuff)
    .then(function () { })
    .catch((err) => {
        console.log(`Eror occured! ${err}`)
    })


// Promise gate
// czeka az wszystko sie wykona
// Promise.all([
//     findUser(),
//     validateUser(),
//     doStuff()]
// )
//     .then(function () {
//         console.log('Everything finished')
//     })


// Promise race czeka az wykona sie jedna Promise (wyscig) 
// Promise.race([findUser(),
// validateUser(),
// doStuff()]).then((value) => {
//     console.log(value);
// }, (err) => {
//     console.log(`Eror occured! ${err}`)
// })
