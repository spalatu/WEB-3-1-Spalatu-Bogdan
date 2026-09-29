function calculateSum(a, b) {
    return a + b;
}

console.log("Suma 1: ", calculateSum(5, 10));
console.log("Suma 2: ", calculateSum(42, 58));

const student = {
    name: "Spalatu",
    age: 17,
    grade: 12,
    introduce: function () {
        console.log("Sunt " + this.name + " și am " + this.age + " ani.");
    }
};

student.introduce();

student.grade = 10;
console.log("Nota nouă este: ", student.grade);
