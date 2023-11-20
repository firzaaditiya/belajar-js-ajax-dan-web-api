/*
    JSON merupakan kepanjangan dari JavaScript Object Notation, dimana tipe data ini sering digunakan sebagai response dari
    sebuah layanan API (Application Programming Interface)
*/

// contoh JSON di dalam string
const data = `{
    "ticker": {
        "base": "BTC",
        "target": "IDR",
        "price": "345001000",
        "volume": "28.02287745",
        "change": "-430000"
    },
    "timestamp": 1674472505,
    "success": true,
    "error": ""
}`;

// ketika kita tampilkan dianggap sebagai string bukan sebuah object
console.info(data);

/*
    kita bisa menggunakan sebuah method yaitu "JSON.parse" dimana fungsi nya untuk mengubah format JSON menjadi sebuah object
    yang dimengerti oleh javascript

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
*/
const response = JSON.parse(data);

// tampil sebagai sebuah object
console.info(response);

console.info(response.ticker.price);

/*
    ada sebuah method yang berfungsi untuk mengubah sebuah javscript object menjadi sebuah JSON yang nanti nya misalkan akan
    kita kirim sebagai sebuah request kepada server, karena server hanya bisa menerima data yang sudah terformat JSON

    method tersebut bernama "JSON.stringify"

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
*/

// membuat object javascript
const person = {
    name: "firza",
    gender: "male",
    age: 19,
    address: {
        city: "Depok",
        country: "Indonesia"
    }
};

console.info(person);

// mengubahnya menjadi format JSON
console.info(JSON.stringify(person));