// melakukan request dengan async & await
const getPeople = async (id) => {
    try {
        // melakukan proses request sampai berhasil
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);

        // menampilkan data
        console.info(res.data);
    } catch(err) {
        // jika terjadi error lakukan sesuatu
        console.info(err);

        // menampilkan pesan error
        console.info(err.message);

        // menampilkan error dalam http status code
        console.info(err.response.status);

        // menampilkan data error
        console.info(err.response.data);
    }
};

getPeople(-1);