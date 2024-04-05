const obtenerApi = (async () => {
    const url = "https://randomuser.me/api/?results=10";

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const contenedor = document.getElementById("user-data");
        contenedor.innerHTML = "";

        let usuarios ="";
        data.results.forEach(user => {
            usuarios += `<p><img src="${user.picture.medium}"></p>
                        <p>${user.name.first} ${user.name.last}</p>
                        <p>${user.email}</p>
                        <p>${user.phone}</p>`;
            contenedor.innerHTML = usuarios;
        })
    } catch (error) {
        console.log(error);
    }
})();