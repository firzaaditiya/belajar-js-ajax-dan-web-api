/*
    base url adalah sebuah url utama dari sebuah website

    contoh : https://swapi.dev/
    contoh : http https://swapi.dev/api/people/

    diatas ada sebuah base url, namun ketika kita melihat sebuah dokumentasi API terkadang ada sebuah simbol atau text
    tertentu yang menandakan bahwa pada url tersebut memerlukan sebuah data tambahan

    contoh : https://swapi.dev/api/people/:id/
    
    biasanya pada dokumentasi terdapat seperti diatas menandakan bahwa pada ":id" diperlukan sebuah data

    contoh : https://swapi.dev/api/people/1/

    maka kita bisa melakukan seperti diatas, dia akan mendapatkan data dengan mungkin id people nya adalah 1, tidak hanya
    itu terkadang di dalam dokumentasi API ada yang menggunakan :id, <id> {{id}}

    pada url ada juga yang namanya query string, biasanya setelah domain atau setelah domain + path, maka akan ada sebuah
    query string yang ditandain dengan "?" lalu diikuti dengan data nya yaitu "key" dan "value"

    contoh : ?id=1

    pada contoh diatas "id" adalah "key" dan "1" adalah "value", dan jika lebih dari 1 data yang perlu kita gunakan didalam
    query string kita bisa menambahkan sebuah simbol "&"

    contoh : ?id=1&name=firza

    maka pada contoh diatas kita memiliki sebuah 2 data yang pertama adalah data "id" dan yang kedua adalah data "name"

    contoh query string pada api : https://api.tvmaze.com/singlesearch/shows?q=ninja

    contoh lebih dari 1 data query string : https://api.tvmaze.com/schedule?country=US&date=2014-12-01
*/