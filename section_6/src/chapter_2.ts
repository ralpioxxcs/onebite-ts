/**
 * 접근 제어자 (access modifier)
 * => public, private, protected
 */

class Employee {
  // field
  private name: string;
  protected age: number;
  public position: string;

  // constructor
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position
  }

  // method
  work() {
    console.log(`${this.name} work`);
  }
}

class ExecutiveOfficer extends Employee {
  // field
  officeNumber: number;

  // constructor
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // method
  func() {
    // this.name
    this.age;
  }
}

const employee = new Employee("emp", 1, "developer");
//employee.name = "emp_";
//employee.age = 30;
employee.position = "designer"

console.log(employee);

