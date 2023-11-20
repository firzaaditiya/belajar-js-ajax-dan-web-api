// const jokes = document.querySelector("#jokes");
const btnJokes = document.querySelector("#btn-jokes");

/*
    disini kita menggunakan async & await untuk memastikan bahwa data dari API harus selesai didapatkan baru element akan
    ditambahkan
*/
const addJoke = async () => {
    try {
        // mendapatkan data text joke
        const jokeText = await getJokes();

        // membuat element <li>
        const newLi = document.createElement("LI");
    
        newLi.innerText = jokeText;
    
        // menambahkan element ke dalam ul dengan id "jokes"
        document.querySelector("#jokes").insertAdjacentElement("beforeend", newLi);
    } catch (err) {
        alert("No Jokes Available !");
    }
};

const getJokes = async () => {
    // membuat sebuah config untuk request, agar data yang diterima berupa format JSON pada API IcanHazDadJoke
    const config = {
        headers: {
            Accept: "application/json"
        }
    };

    try {
        // melakukan request dan juga menyerakan data headers yang kita buat untuk dikirim ke server Web API
        const res = await axios.get("https://icanhazdadjoke.com/", config);

        return res.data.joke;
    } catch(err) {
        throw Error(err);
    }
};

// event btn-jokes
btnJokes.addEventListener("click", addJoke);