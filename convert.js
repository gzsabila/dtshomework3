class Convert {
    constructor() {
        console.log("Temperature Conversion CFrK")
    }
    fromCelcius(to, nilai_in) {
        if (to == "cel") {
            return nilai_in;
        }
        if (to == "rea") {
            return nilai_in * (4 / 5);
        }
        if (to == "fahr") {
            return nilai_in * (9 / 5) + 32;
        }
        if (to == "kel") {
            return nilai_in + 273.15;
        }
    }
    fromReamur(to, nilai_in) {
        if (to == "rea") {
            return nilai_in;
        }
        if (to == "cel") {
            return nilai_in * (5 / 4);
        }
        if (to == "fahr") {
            return nilai_in * (9 / 4) + 32;
        }
        if (to == "kel") {
            return nilai_in * (5 / 4) + 273.15;
        }
    }  
    fromFahrenheit(to, nilai_in) {
        if (to == "fahr") {
            return nilai_in;
        }
        if (to == "cel") {
            return (5 / 9) * (nilai_in - 32);
        }
        if (to == "rea") {
            return (4 / 9) * (nilai_in - 32);
        }
        if (to == "kel") {
            return (5 / 9) * (nilai_in - 32) + 273.15;
        }
    }
    fromKelvin(to, nilai_in) {
        if (to == "kel") {
            return nilai_in;
        }
        if (to == "cel") {
            return nilai_in - 273.15;
        }
        if (to == "rea") {
            return (nilai_in - 273.15) * (4 / 5);
        }
        if (to == "fahr") {
            return (nilai_in - 273.15) * (9 / 5) + 32;
        }
    }
}
module.exports = Convert;