// [Modules]
// klasyczne moduly umozliwiaja enkapsulacje - zwracanie tylko metod,
// ktore chcemy aby byly widoczne z zewnatrz. Korzystaja z:
// IIFE Immediately Invoked Function Expression, Higher Order Functions i Closure

var newPerson = {
    name: "Tom",
    surname: "Smith",
    salary: 1600
}

// 
var Worker = (
    function (initialPerson) {
        var person = initialPerson;

        var publicApi = {
            getSalary: function () {
                return person.salary;
            },
            addSalaryUsingPercentage: function (percentageToAdd) {
                person.salary = (1.0 + percentageToAdd / 100.0) * person.salary;
            }
        }

        return publicApi;
    }
)(newPerson);

console.log(Worker.getSalary());
Worker.addSalaryUsingPercentage(25);
console.log(Worker.getSalary());
Worker.addSalaryUsingPercentage(50);
console.log(Worker.getSalary());
console.log("--------------")
console.log(newPerson.salary);

// 1 - rozszerz powyzszy modul Worker o metode getFullName zwracajaca imie i nazwisko rozdzielone spacja


// 2 - napisz modul-fabryke pracownikow (Worker) o nazwie WorkerFactory, 
// która przyjmuje dane pracownika (imie, nazwisko, zarobki), a zwraca obiekt praconika. 
// Uzyj kodu dostepnego wyzej modulu PersonSalary

var WorkerFactory = (
    function () {

        var publicApi = {
            createWorker: function (workerData) {
                return privateCreateWorker(workerData);
            }
        }

        // -------------------
        var privateCreateWorker = function (initialPerson) {
            var person = initialPerson;

            var publicApi = {
                getSalary: function () {
                    return person.salary;
                },
                addSalaryUsingPercentage: function (percentageToAdd) {
                    person.salary = (1.0 + percentageToAdd / 100.0) * person.salary;
                }
            }

            return publicApi;
        };

        return publicApi;
    }
)();

var personData = {
    name: "Tom",
    surname: "Smith",
    salary: 1600
}

var person1 = WorkerFactory.createWorker(personData)

console.log(person1.getSalary());
person1.addSalaryUsingPercentage(25);
console.log(person1.getSalary());
person1.addSalaryUsingPercentage(50);
console.log(person1.getSalary());