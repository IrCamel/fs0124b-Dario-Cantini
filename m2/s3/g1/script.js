const User = function(firstName, lastName, age, location){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.location = location,
    this.confronto = function(){
        if (persona1.age > persona2.age) {
            return persona1.firstName + " è più grande di " + persona2.firstName
        } else {
            return persona1.firstName + " è più piccolo di " + persona2.firstName
        }
    }
}

const persona1 = new User("Mario", "Rossi", "78", "Livorno", "suca");
const persona2 = new User("Dario", "Cantini", "48", "Rosignano Solvay")

console.log(persona1.confronto())