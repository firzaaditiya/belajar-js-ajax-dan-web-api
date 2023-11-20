// memanfaatkan async
const loadPeople = async () => {
    try {
        // response
        const res = await fetch("https://swapi.dev/api/people/1");
        const res2 = await fetch("https://swapi.dev/api/people/2");
    
        if (!res.ok || !res2.ok) {
            throw Error("Could not fetch the data for that resource");
        }

        // mendapatkan data terformat JSON
        const data = await res.json();
        const data2 = await res2.json();

        console.info(data);
        console.info(data2);
    } catch (err) {
        // ketika error kita bisa lakukan sesuatu disini
        console.info("Error", err);
    }
};

loadPeople();