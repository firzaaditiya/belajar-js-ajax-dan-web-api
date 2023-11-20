/*
    axios adalah sebuah library bahasa pemrograman javascript yang digunakan untuk melakukan sebuah request, library ini
    merupakan kumpulan kode yang disederhanakan atau untuk menghasilkan hal yang luar biasa dengan cara yang disederhanakan
    baik itu untuk mendapatkan response data nya maupun response error nya
*/

// cara yang dipermudah dan bisa langsung medapatkan sebuah data JSON tanpa perlu "parsing JSON"
axios.get("https://swapi.dev/api/peoples/1")
    .then((res) => {
        // console.info(res);

        // menampilkan object data
        console.info(res.data);
    })
    .catch((err) => {
        // menampilkan object error
        console.info(err);
        alert(err.message);
    });