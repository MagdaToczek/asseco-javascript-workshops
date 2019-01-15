export interface IEmployee {
    name: string;
    surname: string;
    salary: number;
}

export class Company {
    employees: IEmployee[] = new Array();

    hireEmployee(employee: IEmployee) {
        this.employees.push(employee);
    }
}