class Course{
    constructor(name, teacher, courseName){
        this.name = name;
        this.teacher = teacher;
        this.courseName = courseName;
    }
}

const math101 = new Course("Math 101", ["Albert Einstein"], 100);
const computerScience301 = new Course("Introduction to Computer Science", ["Dr. Zeus", "Mark Zuckerberg"], 300);
const socialStudies201 = new Course(
  "Intro to Social Studies",
  ["Steve Wozniak", "Brian Stevens"],
  200
);

class School{
    constructor(){
    this.courses = [];
}

addCourse(course){
    this.courses.push(course)
    this.courses.sort(()=>{

    })
    return this
}
findByName(searchTerm){
    for (let course of this.courses){
        if (course.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return course
        }
    }
    return "Did not find a course with that name"
}
list(){
    return this.courses
}
}

const codecore = new School();
codecore.addCourse(math101)