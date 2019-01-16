// TypeScript jest nadzbiorem JavaScript. Może byc kompilowany do roznych wersji JavaScript, np do standardu ES5 lub ES6
// nadzbior oznacza ze mozemy z powodzeniem uzywac "czystego" JS w TS
// zdobyl/zdobywa tak duza popularnosc dlatego ze mozna w latwy sposob migrowac JS->TS

// dodanie typow ma wiele plusow
// - coersion w JS -> system typow wykryje dziwactwa
// - wiele bledow pojawi sie podczas kompilowania a nie wykonywania kodu
// - dokumentacja dla innych developerow
// - inne ;)

// slowo kluczowe let - pojawia sie takze w JS ES6, w przeciwienstwie do var, let istnieje tylko w kontekście bloku,
// czyli nawiasów klamrowych

// const - wartosc musi byc przypisana w momencie deklaracji, nie ma to jednak wplywu na mutowalnosc ewentualnego obiektu ktory
// przypiszemy do tej zmiennej, np. mozna zmieniac wartosci w tablicy, ale nie mozna przypisac innego obiektu/wartosci do zmiennej
// !wskazowka! - jezeli chcemy aby obiekt ktory przypiszemy przestal byc mutowalny, nalezy uzyc Object.freeze

// cant' touch this
// sprobuj zmienic wartosc ktoregokolwiek elementow z tablicy!
const nonMutableArray = Object.freeze([0, 1, 2]);

// w JS mozna uzyc komentarzy typu JS Doc aby podpowiadac jakiego typu oczekujemy/zwracamy

// TS potrafi wywnioskowac typ
let stringVar = "234";
stringVar = 34; //error
// albo mozemy sami okreslic
let someVar: string;
someVar = "bam!";
// casting - TS nie jest w stanie wywnioskowa typu ale my dobrze wiemy jakiego typu bedzie ta zmienna
let castedVar = document.getElementById("passwordTextBox") as HTMLInputElement;

// typowanie nie patrzy na aktualny typ, ale na strukture obiektu, ktora musi sie zgadzac:
let myPersonObj: { name: string, surname: string };
myPersonObj = { name: "Mat", surname: "Onion" }; // good
myPersonObj = { name: "John", age: 24 }; // not the required structure
myPersonObj = { name: "Mat", surname: "Onion", age: 29 }; // za duzo wlasciwosci, ALE...    !!!!!!!!!

function addPerson(personData: { name: string, surname: string }) { }
let anotherPerson = { name: "Mat", surname: "Onion", age: {} };
addPerson(anotherPerson); // OK !!!, DODATKOWO:   

myPersonObj = { name: "Mat", surname: "Onion", age: 29 } as { name: string, surname: string }; // YAY ! - przyklad z linii 37 + cast do struktury z linii 34

// [INTERFEJSY] opisuja strukture obiektu, nie sa kompilowane do JS, moga byc rozszerzane z/dziedziczone po innych intefejsach
interface IPerson {
    name: string;
    surname: string;
}

let myPerson: IPerson;
myPerson = { name: "Mat", surname: "Onion" };
myPerson = { name: "John", age: 24 }; // not the required structure
myPerson = { name: "Mat", surname: "Onion", age: 29 }; // za duzo wlasciwosci, ALE...    !!!!!!!!!
myPerson = { name: "Mat", surname: "Onion", age: 29 } as IPerson;

// napisz funckja sumujaca 2 liczby - ogranicz typy parametrow do liczb!
function sumUp(leftNumber: number, rightNumber: number) {
    return leftNumber + rightNumber;
}
// najedz myszka na sumUp - TS wywnioskowal, ze zwrocony zostanie number. Nie na lezy wiec byc nadgorliwym i robic:
function sumUpWithDeclaredReturnType(leftNumber: number, rightNumber: number): number {
    return leftNumber + rightNumber;
}

// 1 - napisz interfejs ITrack ze struktura odpowiedniego typu (title, duration)
// a nastepnie funckje przyjmujaca tablice piosenek (Track[]), 
// zwracajaca sume czasu trwania wszystkich piosenek z przekazanej tablicy


// [KLASY] mamy klasyczny konstruktor, slowo kluczowe new oraz statyczne metody a takze metody instancji
class Movie {
    title: string;
    year: number;
    genre: string;
    private somePrivateVar: string = "privateVarValue";
    constructor(title: string, year: number, genre: string) {
        this.title = title;
        this.year = year;
        this.genre = genre;
    }

    static getGenres() {
        return ['Horror', 'Drama', 'Action']
    }

    getTitle() {
        return this.title;
    }
}

Movie.getGenres();
Movie.getTitle(); // error, that's instance method
let movie = new Movie("I, Robot", 2009, "Sci-Fi");
movie.getTitle(); movie.title;
movie.somePrivateVar; // encapsulation

// 2 - przyjrzyj sie plikowi company.ts - modul eksportujacy interfejs i klase, mozemy uzyc ponizej
import { IEmployee, Company } from './company'
const company = new Company();
let employee: IEmployee = { name: "John", surname: "Wick", salary: 2500 };
company.hireEmployee(employee);

// 3 - napisz wlasny modul w pliku album.ts, z klasą Album i odpowiednimi interfejsami.
// klasa powinna umozliwiac przechowywanie listy piosenek (Track), dodawanie trackow,
// oraz posiadac metode ktora zwraca wszystkie tracki (tablica) oraz metode wypisujaca czas trwania albumu


// [Tablice]
// dzialaja podobnie jak w JS, nalezy pamietac zeby podczas uzywania w klasach podac typ tablic - domyslnie typem jest never!

class Product {
    name: string;
    // features = []; // array of never's :(
    features: string[] = new Array();
    constructor(name: string) {
        this.name = name;
    }
}

// [Tuple]
// tablice o podanej dlugosci i strukturze
let tupleVar: [string, number, boolean];
tupleVar = ["string", 14, false];
let numberVar: number;
let boolVar: boolean;
[stringVar, numberVar, boolVar] = tupleVar;

// [Types]
// deklarowanie nowych typow, nie tylko przez interfejs
type RgbColor = [number, number, number]; // mozna wyeksportowac export

// [Enums]
enum Color {
    Red,
    Blue,
    Yellow
}

let nameOfRed = Color[Color.Red]; // 'Red'

// 4 napisz enum Genre (gatunki filmowe) oraz zmien klase Movie z tego pliku tak aby wykorzystywala nowy enum

// 5 napisz klase PowerballMachine, ktora pozwala na losowanie i sprawdzanie wyniku losowania powerball (wysokosc nagrody dla podanych numerow)
// zasady powerball: https://www.powerball.com/games/powerball
// korzystaj z dobrodziejstw typow oraz innych udogodnien TS jak klasa, prywatne zmienne, tuple itd.