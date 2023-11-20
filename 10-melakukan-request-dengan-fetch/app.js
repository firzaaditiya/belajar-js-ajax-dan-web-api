/*
    fetch, adalah sebuah function update terbaru dari javascript yang bisa kita gunakan untuk melakukan sebuah request via
    javascript dan fetch ini lebih baik dari XMLHttpRequest karena dia mendukung "promise" namun dia tidak support lagi
    untuk internet explorer
*/

// melakukan request dengan "fetch", ketika tidak menyertakan method maka otomatis akan bermethod "GET"
fetch("https://swapi.dev/api/people/1/").then((response) => {
    /*
        disini kita memiliki sebuah "then" total nya ada 2, kenapa kita memiliki nya satu saja atau return nilai nya pada
        "then" pertama ini, kita bisa cek menggunakan console.info/log untuk mengecek data yang diterima pada response
        pertama
    */
    if (!response.ok) {
        throw Error("Could not fetch the data for that resource");
    }

    /*
        menampilkan response pertama, dimana ini memiliki beberapa data method/object yang harus diolah
        dimana pada Prototype "Response" disama memiliki beberapa method yang berguna seperti kita bisa mengentahui
        http status code dengan method getter "status"
    */
    console.info(response);

    // http status code
    console.info(response.status);

    // mengembalikan data asli yang terformat JSON
    return response.json();
}).then((data) => {
    // variable data akan memiliki data yang dihasilkan dari "then" sebelum nya yang mengirim sebuah data terformat JSON

    console.info("JSON", data);
}).catch((error) => {
    console.info("Error", error);
});