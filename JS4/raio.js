const form = document.getElementById("calculaArea");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const raio = parseFloat(document.getElementById("raio").value)

    let area = (Math.PI * (raio**2)).toFixed(2)
    let circunferencia = (2 * Math.PI * raio).toFixed(2)

    document.getElementById("area").value = area;
    document.getElementById("circunferencia").value = circunferencia;
})