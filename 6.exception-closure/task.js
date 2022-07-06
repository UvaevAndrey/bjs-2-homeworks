
function parseCount(number) {
    let x = Number.parseInt (number, 10);
    if (isNaN(x)) {
        const divideError = new Error("Невалидное значение");
        throw divideError;
    } 
    return x;
}

function validateCount(number) {
    try {
     parseCount(number);
       return parseCount(number)
    }
    catch (error) {
       return error;
    }
}

class Triangle {
    constructor (A, B, C) {
        this.A = A
        this.B = B
        this.C = C

        if ((A + B)<C || (B + C)<A|| (A + C)<B) {
            const divideError = new Error("Треугольник с такими сторонами не существует");
            throw divideError;
        }
    }

    getPerimeter() {
       return this.A + this.B + this.C
    }
    
    getArea() {
        let p = (0.5*this.getPerimeter())
        return Number.parseFloat((Math.sqrt(p*(p - this.A)*(p - this.B)*(p - this.C))).toFixed(3))
    }

}

function getTriangle(A, B, C) {
    try {
          return new Triangle(A, B, C)
       }
       catch (error) {
        let errTriangle = new Object;
           errTriangle.getPerimeter = function getPerimeter () {
            return "Ошибка! Треугольник не существует"
          }
          errTriangle.getArea = function getArea () {
            return "Ошибка! Треугольник не существует"
          }
          return errTriangle;
       } 
}