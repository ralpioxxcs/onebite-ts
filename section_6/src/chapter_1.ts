/**
 * 타입스크립트의 클래스
 */

import { off } from "process";

const emloyee = {
  name: "name",
  age: 1,
  position: "developer",

  work() {
    console.log("working")
  },
};

class Employee {
  // field
  name: string;
  age: number;
  position: string;

  // constructor
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position
  }

  // method
  work() {
    console.log("work");
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
}

const employeeB = new Employee("name", 1, "developer");

console.log(employeeB);

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() { }
};