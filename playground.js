
class Person{
    constructor (name,salary) {
        this.name = name
        this.salary = salary
    }
    toString () {
        return `Person with name '${this.name}'`
    }
}


class Employee extends Person{
    constructor (name, salary, precentage) {
        super(name,salary)
        this.precentage = precentage
    }
    get salary100 () {return this.salary * this.precentage}
    set salary100 (salary) {this.salary = salary}
}

let e17 = new Employee("Mary", 7000, 100);

console.log(e17.toString()) // Person with name 'Mary' and salary 7000 */
console.log(e17.salary) 
e17.salary100 = 8000
console.log(e17.salary100)
