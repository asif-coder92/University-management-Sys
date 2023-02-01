#! /usr/bin/env node
//Class 1
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getname() {
        return this.name;
    }
}
//Class2 inherits properties of Calss1
class Student extends Person {
    rollNumber;
    // courses:string[] =[];
    courses = []; //opar wali k jagha ye likh diya
    constructor(name, age, rollNumber) {
        super(name, age); //we will pass arguments of student's constructor
        this.rollNumber = rollNumber;
    }
    // course_register(course:string) string k jagha Courses Class k type assign ki
    course_register(course) {
        this.courses.push(course);
    }
}
class instructor extends Person {
    salary;
    // courses:string[]=[]
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    // courseAssigned(course:string)
    courseAssigned(course) {
        this.courses.push(course);
    }
}
class Courses {
    id;
    name;
    students = []; //the type of this will be Student class
    instructor; // The type of this will be instructor Class
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student); //this will push the student parameter in students array which we mentioned as properties in courses class
        student.course_register(this); //"this" will pass course to register function
    }
    setInstructor(instructor) {
        this.instructor = instructor;
        instructor.courseAssigned(this);
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
//creating studnet objects of Class2 
const student1 = new Student("AsifJamal", 30, "student001");
// //  console.log(student1);
// student1.course_register("Introduction to Programming")
// student1.course_register("BCC")
// console.log(student1.courses);//introduction to programming, BCC
const student2 = new Student("Wasif", 34, "student002");
// student2.course_register("Introduction to Automata theroy")
// student2.course_register("Web 3.0")
// console.log(student2.courses);
const instructorObj = new instructor("Danyal Nagori", 26, 50000);
// instructorObj.courseAssigned("Typscript")
// instructorObj.courseAssigned("JavaScript")
// console.log(instructorObj.name,instructorObj.courses);
const instructorObj1 = new instructor("ImranAli", 27, 50000);
// instructorObj1.courseAssigned("Metaverse")
// console.log(instructorObj1.name);
// console.log(instructorObj1.salary);
// // console.log(instructorObj1.courses);
const courseObj = new Courses("course001", "Metaverse");
const department1 = new Department("Computer Science");
department1.addCourse(courseObj);
courseObj.addStudent(student1); //
courseObj.addStudent(student2);
courseObj.setInstructor(instructorObj);
// console.log(courseObj.students[0]); //adding student in particular cousrse
// console.log(student1.courses) 
// console.log(courseObj);
console.log(department1);
export {};
