// mendapatkan element <form>
const form = document.querySelector("#search-form");

form.addEventListener("submit", async (event) => {
    // agar ketika disubmit halaman tidak merefresh atau tidak diarahkan ke URL tertentu
    event.preventDefault();

    // menghapus semua img yang telah dihasilkan agar kembali bersih
    document.querySelectorAll("#container img").forEach((img) => img.remove());

    // mendapatkan value dari tag input:text
    const keyword = form.elements.query.value;

    // membuat query string yang akan ditambahkan ketika melakukan request
    const config = {
        params: {
            q: keyword
        }
    };

    try {
        // melakukan sebuah request
        const res = await axios.get("https://api.tvmaze.com/search/shows", config);

        // function untuk menghasilkan element <img>
        getImages(res.data);

        form.elements.query.value = "";
    } catch(err) {
        console.info(err);
    }
});

// function untuk menghasilkan element <img> dari data response
const getImages = (shows) => {
    for (let result of shows) {
        // jika terdapat poster maka buat element <img>
        if (result.show.image) {
            // membuat element img
            const img = document.createElement("img");

            // src dari element <img> berasal dari data response
            img.src = result.show.image.medium;

            // menambahkan element <img> kedalam <div> dengan id "container"
            document.querySelector("#container").insertAdjacentElement("beforeend", img);
        }
    }
};
