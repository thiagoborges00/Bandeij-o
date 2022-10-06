async function carregarAnimais() {
    const url = 'http://127.0.0.1:9060/animais';
    const response = await axios.get(url);
    var animais = response.data;
    if (animais) {
        const lista = document.getElementById("animais");
        animais.forEach(element => {
            const item = document.createElement("li");
            item.innerText = element.nome;
            lista.appendChild(item);
        });
    }

}

carregarAnimais()