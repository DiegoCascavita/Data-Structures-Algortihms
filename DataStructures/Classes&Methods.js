// ### Class:

// its a blueprint to create objects with predefined properties or methods and we are goint to use it in data structures
class Student1 {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
}
//this references to each instance in this case the student


// ### Instance Methods
// means to create an own .method() to parse each instance in this case this.student
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        this.tardies = 0
        this.scores = []
    }
    fullName(){
        return `Your name is ${this.firstName}${this.lastName}`
    }
    markLate(){
        this.tardies += 1
        if(this.tardies >= 3){
            return 'YOU ARE EXPELLED'
        }
    }
    addScore(score){
        this.scores.push(score)
        return this.scores
    }
}
let firstStudent = new Student('Diego','ElCasca')
let secondStudent = new Student('Sofia','Guerrero')

console.log(firstStudent.fullName())

console.log(secondStudent.addScore(92))

