function select() {
    document.getElementById("nilai_in").value = "";
    document.getElementById("nilai_out").value = "";
  }

  const calculate = new Convert();
  function calc() {
    if (document.getElementById("from").value == "cel") { // dari celcius
      const res = calculate.fromCelcius(
        document.getElementById("to").value,
        parseInt(document.getElementById("nilai_in").value)
      );
      document.getElementById("nilai_out").value = res;
    }
    if (document.getElementById("from").value == "rea") { //dari reamur
      const res = calculate.fromReamur(
        document.getElementById("to").value,
        parseInt(document.getElementById("nilai_in").value)
      );
      document.getElementById("nilai_out").value = res;
    }
    if (document.getElementById("from").value == "fahr") { //dari fahrenheit
      const res = calculate.fromFahrenheit(
        document.getElementById("to").value,
        parseInt(document.getElementById("nilai_in").value)
      );
      document.getElementById("nilai_out").value = res;
    }
    if (document.getElementById("from").value == "kel") { //dari kelvin
        const res = calculate.fromKelvin(
            document.getElementById("to").value,
            parseInt(document.getElementById("nilai_in").value)
        );
        document.getElementById("nilai_out").value = res;
    }
  }
  