fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
        if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
        }

        return res.json();
    })
    .then((data) => {
        console.info("JSON 1", data);

        // melakukan request ke 2
        return fetch("https://swapi.dev/api/people/2/");
    })
    .then((res2) => {
        console.info("Request ke 2");

        // skenario res untuk request ke 2
        if (!res2.ok) {
            throw Error("Could not fetch the data for that resource");
        }

        // mengembalikan data response terformat JSON
        return res2.json();
    })
    .then((data2) => {
        // menampilkan data
        console.info("JSON 2", data2);
    })
    .catch((err) => {
        console.info("Error", err);
    });