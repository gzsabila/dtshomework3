function select() {
    document.getElementById("nilai_in").value = "";
    document.getElementById("nilai_out").value = "";
  }

  const calculate = new Convert();
  function calc() {
    if (document.getElementById("from").value == "cel") {
      const res = calculate.fromCelcius(
        document.getElementById("to").value,
        parseInt(document.getElementById("nilai_in").value)
      );
      document.getElementById("nilai_out").value = res;
    }
    if (document.getElementById("from").value == "rea") {
      const res = calculate.fromReamur(
        document.getElementById("to").value,
        parseInt(document.getElementById("nilai_in").value)
      );
      document.getElementById("nilai_out").value = res;
    }
    if (document.getElementById("from").value == "fahr") {
      const res = calculate.fromFarenheit(
        document.getElementById("to").value,
        parseInt(document.getElementById("nilai_in").value)
      );
      document.getElementById("nilai_out").value = res;
    }
    if (document.getElementById("from").value == kel) {
        const res = calculate.fromKelvin(
            document.getElementById("to").value,
            parseInt(document.getElementById("nilai_in").value)
        );
        document.getElementById("nilai_out").value = res;
    }
  }
  