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

function cadastrarAnimal() {

    const form = document.getElementById("form")
    const input = document.getElementById("nome")
    const url = "http://127.0.0.1:9060/animais"

    form.onsubmit = async (event) => {
        if (input.value.length <= 0) {
            event.preventDefault()
            alert(`informe um nome válido`)
        } else {

            await axios.post(url, {
                nome: input.value,
                cor: "red",
                sexo: "masculino",
                idade: 22,
            })
            alert(`Animal com nome ${input.value} cadastrado `)
        }
    }

}

carregarAnimais()
cadastrarAnimal()