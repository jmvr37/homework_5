function Course( name, teacher, courseNumber){
    this.name = name;
    this.teacher = teacher;
    this.courseNumber = courseNumber;
}

const math101 = new Course("Math 101", ["Albert Einstein"], 100);
const computerScience301 = new Course("Introduction to Computer Science", ["Dr. Zeus", "Mark Zuckerberg"], 300);
const socialStudies201 = new Course(
  "Intro to Social Studies",
  ["Steve Wozniak", "Brian Stevens"],
  200
);

function School(){
    this.courses = []
}

//add the sort  method to order courses in alphabetical order
School.prototype.addCourse = function(course){
    this.courses.push(course)
    this.courses.sort(()=>{

    })
    return this
}

School.prototype.findByName = function(searchTerm){
    for (let course of this.courses){
        if (course.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return course
        }
    }
    return "Did not find a course with that name"
}

School.prototype.list = function(){
    return this.courses
}


const codecore = new School();
codecore.addCourse(math101)