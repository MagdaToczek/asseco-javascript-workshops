// funkcje - functions - first class citizens of JavaScript
// jeżeli funkcja nic nie zwraca, domyslnie zwraca wartosc undefined

function functionName(param1, param2) {
    var result = "Function Result"

    return result;
}

// 1 - napisz funckje sumujaca 2 liczby

function sumUpTwoNumbers(leftVar, rightVar) {

    return leftVar + rightVar;
}

// 1.1 - Napisz funkcje sumująca 
// wszystkie liczby w tablicy liczb przekazanej do funkcji jako parametr (kilka rozwiązań, np.. reduce) 

function sumUpNumbersInArray(numberArray) {

    let result = 0;

    for (let index = 0; index < numberArray.length; index++) {
        const element = numberArray[index];
        result += element;
    }

    return result;
}

console.log(sumUpNumbersInArray([1, 2, 3]));

// 2 - napisz funkcję laczaca dwa ciagi znakow (concatenate 2 strings)

function concatenate2Words(leftWord, rightWord) {
    return leftWord + rightWord;
}

console.log("Will", "Smith");

// 3 - napisz funkcje ktorej wejsciem jest tablica ciagow znakow (slow), 
// zwracajaca jeden ciag znakow - zdanie - slowa ze spacja pomiedzy slowami

function joinWords(wordsArray) {

    // let result = "";

    // for (let index = 0; index < wordsArray.length; index++) {
    //     const element = wordsArray[index];
    //     result += " " + element;
    // }
    return wordsArray.join(" ");
}


// [Callbacks]
// funkcje mozna przekazywac jako argumenty, a nawet zwracac z innych funkcji
// funkcje zwracajace lub przyjmujace parametrem funkcje nazywamy Higher Order Function,
// natomiast funkcje przekazywane lub zwracane nazywamy callback functions 

// 4 - Napisz funkcję przyjmującą 2 parametry: tablicę liczb oraz callback do funkcji wykonującej działanie na pojedynczej liczbie. 
// Funkcja powinna zwracać tablicę z wartościami 
// będącymi wynikiem wykonywania prostej operacji arytmetycznej na każdym z elementów tablicy będącej wejściem do funkcji. 
// Oprócz użycia petli, sprawdz dzialanie wbudowanej w ES6 funkcji .map.

function copyArrayAndManipulate(array, fnCallback) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(fnCallback(array[i]));
    }
    return output;
}
function multiplyBy2(input) {
    return input * 2;
}
let result = copyArrayAndManipulate([1, 2, 3], function (val) { return val * 3 });

// 5 - napisz funkcje wywolujaca przekazana funkcje n razy

function addTwo(numberVar) {
    return numberVar += 2;
}

function runNTimes(initialValue, fnCallback, n) {
    let result = initialValue;

    for (let index = 0; index < n; index++) {
        result = fnCallback(result);
    }

    return result;
}

console.log(runNTimes(0, addTwo, 3));

// [Closure]
// zdolnosc funkcji do zapamietania stanu ze swojego leksykalnego kontekstu, mimo wywolania w innym miejscu 
// (np zwrocenia funkcji jako callback)


// 6 - Napisz funkcję zwracającą funkcję, która wypisuje do konsoli parametr przekazany do pierwszej funkcji.

function logVariable(varToLog) {

    let copy = varToLog;

    return function () {
        copy += 2;
        console.log(copy);
    }
}

var foo = 5;

var funcRef = logVariable(foo);

console.log(funcRef());
console.log(funcRef());

console.log(foo);

// [Rekurencja]
// 7 - Napisz funkcję rekurencyjną, obliczającą silnię z liczby.

function silnia(numberToTake) {
    if (numberToTake < 0 || (typeof numberToTake === 'undefined')) {
        return undefined;
    }

    if (numberToTake === 0 || numberToTake === 1) {
        return 1;
    }

    return numberToTake * silnia(--numberToTake);
}

console.log(silnia(4));

// 8 - Napisz funkcję klonującą wszystkie PROSTE właściwości obiektu (bez obiektow w obiekcie itd) 
// obiekt do klonowania ponizej
obj = {
    name: "Will",
    surname: "Sentence",

    livingPlace: {
        street: "Śląska",
        number: "21"
    }
};

obj = {
    name: "Will",
    surname: "Sentence",

    livingPlace: {
        street: "Śląska",
        number: "21"
    },
    getFullName: function () {
        return [name, surname].join(" ");
    }
};

function simpleClone(objToClone) {

    let objToReturn = {};

    for (const prop in objToClone) {

        if (typeof objToClone[prop] !== 'object') {
            objToReturn[prop] = objToClone[prop];
        }
    }

    return objToReturn;
}

// 9 - napisz funkcje klonujaca wszystkie wlasciwosci tzw deep cloning - należy użyć rekurencji.
// obiekt do klonowania ponizej
obj = {
    name: "Will",
    surname: "Sentence",

    livingPlace: {
        street: "Śląska",
        number: "21"
    }
};

obj = {
    name: "Will",
    surname: "Sentence",

    livingPlace: {
        street: "Śląska",
        number: "21"
    },
    getFullName: function () {
        return [name, surname].join(" ");
    }
};

function deepClone(objToClone) {

    let objToReturn = {};

    for (const prop in objToClone) {

        if (typeof objToClone[prop] === 'object') {
            objToReturn[prop] = deepClone(objToClone[prop]);
        } else {
            objToReturn[prop] = objToClone[prop];
        }
    }

    return objToReturn;
}

console.log(deepClone(obj));

