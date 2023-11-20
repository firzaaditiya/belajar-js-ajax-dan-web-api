/*
    ketika ingin menggunakan suatu Web API tertentu biasanya kita akan perlu memberikan beberapa paramater/query string
    namun tidak hanya itu ada juga kasus dimana kita perlu sebuah data pada header

    contoh : https://icanhazdadjoke.com/api

    pada Web API diatas ketika kita ingin menggunakan layanan API nya kita perlu menambahkan beberapa infomasi data header
    untuk mendapatkan response tertentu seperti apakah kita ingin mendapatkan sebuah respose dalam bentuk HTML, JSON atau
    bahkan hanya sebuah plaintext

    kita bisa menambahkan data tersebut dibagian headers dengan key nya adalah "Accept"

    contoh :
    Accept: application/json

    maka kita akan menerima sebuah data dengan format JSON

    kita juga bisa gunakan untuk menentukan jenis data apa yang akan kita kirim ke server dengan key "Content-Type"

    contoh :
    Content-Type: application/json

    maka kita memberitahu bahwa data yang kita kirim adalah berupa data yang terformat JSON
*/