
    console.log("script cargado");
    const contenedor = document.getElementById("cuenta-regresiva");
    const objetivo = new Date(contenedor.dataset.fecha).getTime();

    const elDias = document.getElementById("cr-dias");
    const elHoras = document.getElementById("cr-horas");
    const elMinutos = document.getElementById("cr-minutos");
    const elSegundos = document.getElementById("cr-segundos");

    const dosDigitos = (n) => String(n).padStart(2, "0");

    function actualizar() {
        const restante = Math.max(objetivo - Date.now(), 0);

        const dias = Math.floor(restante / 86400000);
        const horas = Math.floor(restante / 3600000) % 24;
        const minutos = Math.floor(restante / 60000) % 60;
        const segundos = Math.floor(restante / 1000) % 60;

        elDias.textContent = dosDigitos(dias);
        elHoras.textContent = dosDigitos(horas);
        elMinutos.textContent = dosDigitos(minutos);
        elSegundos.textContent = dosDigitos(segundos);
    }

    actualizar();
    setInterval(actualizar, 1000);