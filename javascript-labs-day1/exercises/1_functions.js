// funkcje - functions - first class citizens of JavaScript
// jeżeli funkcja nic nie zwraca, domyslnie zwraca wartosc undefined

function functionName(param1, param2) {
    var result = "Function Result"

    return result;
}

// 1 - napisz funckje sumujaca 2 liczby


// 2 - napisz funkcję laczaca dwa ciagi znakow (concatenate 2 strings)


// 3 - napisz funkcje ktorej wejsciem jest tablica ciagow znakow (slow), 
// zwracajaca jeden ciag znakow - zdanie - slowa ze spacja pomiedzy slowami


// [Callbacks]
// funkcje mozna przekazywac jako argumenty, a nawet zwracac z innych funkcji
// funkcje zwracajace lub przyjmujace parametrem funkcje nazywamy Higher Order Function,
// natomiast funkcje przekazywane lub zwracane nazywamy callback functions 

// 4 - Napisz funkcję przyjmującą 2 parametry: tablicę liczb oraz callback do funkcji wykonującej działanie na pojedynczej liczbie. 
// Funkcja powinna zwracać tablicę z wartościami 
// będącymi wynikiem wykonywania prostej operacji arytmetycznej na każdym z elementów tablicy będącej wejściem do funkcji. 
// Oprócz użycia petli, sprawdz dzialanie wbudowanej w ES6 funkcji .map.


// 5 - napisz funkcje wywolujaca przekazana funkcje n razy


// [Closure]
// zdolnosc funkcji do zapamietania stanu ze swojego leksykalnego kontekstu, mimo wywolania w innym miejscu 
// (np zwrocenia funkcji jako callback)


// 6 - Napisz funkcję zwracającą funkcję, która wypisuje do konsoli parametr przekazany do pierwszej funkcji.


// [Rekurencja]
// 7 - Napisz funkcję rekurencyjną, obliczającą silnię z liczby.


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

