class Convert {
    constructor() {
        console.log("#")
    }
    fromCelcius(to, n1) {
        if (to == "cel") {
            return n1;
        }
        if (to == "re") {
            return n1*(4/5);
        }
        if (to == "fah") {
            return n1*(9/5) + 32;
        }
        if (to == "kel") {
            return n1 + 273.15;
        }
    }
    fromReamur(to, n1) {
        if (to == "re") {
            return n1;
        }
        if (to == "cel") {
            return n1*(5/4);
        }
        if (to == "fah") {
            return n1*(9/4) + 32;
        }
        if (to == "kel") {
            return (n1 + 273.15)*(5/4);
        }
    }  
    fromFahrenheit(to, n1) {
        if (to == "fah") {
            return n1;
        }
        if (to == "cel") {
            return (5/9)*(n1 - 32);
        }
        if (to == "re") {
            return (4/9)*(n1 - 32);
        }
        if (to == "kel") {
            return (5/9)*(n1 - 32) + 273.15;
        }
    }
    fromKelvin(to, n1) {
        if (to == "kel") {
            return n1;
        }
        if (to == "cel") {
            return n1 - 273.15;
        }
        if (to == "re") {
            return n1*(4/5) - 273.5;
        }
        if (to == "fah") {
            return (n1 - 273.15)*(9/5) + 32;
        }
    }
}
module.exports = Convert;