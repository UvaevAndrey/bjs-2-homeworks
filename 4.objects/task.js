


function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = []
    this.marks.push(mark)
  } else {
    this.marks.push(mark)
  }
}

Student.prototype.addMarks = function (...markn){
  if(this.marks === undefined){ 
    this.marks = []
    this.marks.push(...markn)
  } else {
    this.marks.push(...markn)
  }
 
}

Student.prototype.getAverage = function (){
  if (this.marks === undefined) {
    return null}
    else { 
      return (this.marks.reduce ((previous, next) => previous + next))/this.marks.length
  }
}

Student.prototype.exclude = function (reason) {
  delete this.marks
  delete this.subject
  this.excluded = reason;
}
