const form = document.getElementById('alturas');

const altura = document.getElementsByClassName("altura");
const grafico = document.getElementById("grafico");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    grafico.innerHTML = '';

    const larguraBarra = parseInt(document.getElementById("largura").value)

    for(let alt of altura){
        const alturaBarra= parseInt(alt.value);
        const barra = document.createElement("div");
        barra.className = "barra";
        barra.style.backgroundColor = "red";
        barra.style.height = `${alturaBarra}px`;
        barra.style.width = `${larguraBarra}px`;
        grafico.appendChild(barra);
    }


})