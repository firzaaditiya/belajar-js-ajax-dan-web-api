/*
    XMLHttpRequest adalah sebuah function bawaan javascript yang berguna untuk melakukan sebuah request via javascript, namun
    dia tidak mendukung "promise" jadi ada kemungkinan akan mengakibatkan callback hell
*/

// membuat object XMLHttpRequest
const xhr = new XMLHttpRequest();

// membuat kondisi ketika berhasil dimuat, maka akan melakukan sesuatu
xhr.onload = function() {
    const data = JSON.parse(this.response);

    console.info(data);
};


// membuat kondisi jika gagal dimuat, maka akan melakukan sesuatu
xhr.onerror = function() {
    console.info("Error", this);
};

// membuat request
xhr.open("GET", "https://swapi.dev/api/people/1/");

// set headers
xhr.setRequestHeader("Accept", "application/json");

// melakukan request
xhr.send();