function updateSuhu() {
    var unit = document.getElementById("unit").value;
    var suhuInput = parseFloat(document.getElementById("suhu").value);
    var suhu;

    // Konversi suhu sesuai dengan unit yang dipilih
    if (unit === "celcius") {
        suhu = (suhuInput - 32) * 5 / 9;
    } else if (unit === "fahrenheit") {
        suhu = (suhuInput * 9 / 5) + 32;
    }

    // Update nilai suhu
    document.getElementById("suhu").value = suhu;

    // Panggil fungsi reverse
    reverse();
}


function convert() {
    var unit = document.getElementById("unit").value;
    var suhu = parseFloat(document.getElementById("suhu").value);
    var hasil = document.getElementById("hasil");
    var rumus = document.getElementById("rumus");
    var penjelasan = document.getElementById("penjelasan");

    if (unit === "celcius") {
        hasil.value = (suhu * 9 / 5) + 32;
        rumus.value = "(" + suhu + " - 32) x 5/9 = " + hasil.value;
        penjelasan.innerText = "Untuk mengkonversi suhu dari Celsius ke Fahrenheit, Anda dapat menggunakan rumus konversi F = 9/5C + 32, di mana F adalah suhu dalam Fahrenheit dan C adalah suhu dalam Celsius. Langkah-langkahnya adalah mengalikan suhu dalam Celsius dengan 9/5, lalu menambahkan 32.";
    } else if (unit === "fahrenheit") {
        hasil.value = (suhu - 32) * 5 / 9;
        rumus.value = "(" + suhu + " x 9/5) + 32 = " + hasil.value;
        penjelasan.innerText = "Untuk mengkonversi suhu dari Fahrenheit ke Celsius, Anda dapat menggunakan rumus C = 5 9 ( F - 32 ) , di mana C adalah suhu dalam Celsius dan F adalah suhu dalam Fahrenheit. Langkah-langkahnya adalah mengalikan suhu dalam Fahrenheit dengan 5/9, kemudian mengurangkan 32 dari hasilnya untuk mendapatkan suhu dalam Celsius.";
    }
}

function reset() {
    document.getElementById("suhu").value = "";
    document.getElementById("hasil").value = "";
    document.getElementById("rumus").value = "";
    document.getElementById("penjelasan").innerText = "";
}

function reverse() {
    var unit = document.getElementById("unit").value;
    var suhu = parseFloat(document.getElementById("suhu").value);
    var hasil = document.getElementById("hasil");
    var rumus = document.getElementById("rumus");
    var penjelasan = document.getElementById("penjelasan");

    if (unit === "celcius") {
        if (rumus.value.includes("-")) {
            hasil.value = (suhu * 9 / 5) + 32;
            rumus.value = "(" + suhu + " - 32) x 5/9 = " + hasil.value;
            penjelasan.innerText = "Untuk mengkonversi suhu dari Fahrenheit ke Celsius, Anda dapat menggunakan rumus C = 5/9 (F - 32), di mana C adalah suhu dalam Celsius dan F adalah suhu dalam Fahrenheit. Langkah-langkahnya adalah mengurangkan 32 dari suhu dalam Fahrenheit, kemudian mengalikan hasilnya dengan 5/9 untuk mendapatkan suhu dalam Celsius.";
        } else {
            hasil.value = (suhu - 32) * 5 / 9;
            rumus.value = "(" + suhu + " x 9/5) + 32 = " + hasil.value;
            penjelasan.innerText = "Untuk mengkonversi suhu dari Celsius ke Fahrenheit, Anda dapat menggunakan rumus konversi F = 9/5C + 32, di mana F adalah suhu dalam Fahrenheit dan C adalah suhu dalam Celsius. Langkah-langkahnya adalah mengalikan suhu dalam Celsius dengan 9/5, lalu menambahkan 32.";
        }
    } else if (unit === "fahrenheit") {
        if (rumus.value.includes("x")) {
            hasil.value = (suhu - 32) * 5 / 9;
            rumus.value = "(" + suhu + " x 9/5) + 32 = " + hasil.value;
            penjelasan.innerText = "Untuk mengkonversi suhu dari Fahrenheit ke Celsius, Anda dapat menggunakan rumus C = 5/9 (F - 32), di mana C adalah suhu dalam Celsius dan F adalah suhu dalam Fahrenheit. Langkah-langkahnya adalah mengurangkan 32 dari suhu dalam Fahrenheit, kemudian mengalikan hasilnya dengan 5/9 untuk mendapatkan suhu dalam Celsius.";
        } else {
            hasil.value = (suhu * 9 / 5) + 32;
            rumus.value = "(" + suhu + " - 32) x 5/9 = " + hasil.value;
            penjelasan.innerText = "Untuk mengkonversi suhu dari Celsius ke Fahrenheit, Anda dapat menggunakan rumus konversi F = 9/5C + 32, di mana F adalah suhu dalam Fahrenheit dan C adalah suhu dalam Celsius. Langkah-langkahnya adalah mengalikan suhu dalam Celsius dengan 9/5, lalu menambahkan 32.";
        }
    }
}

