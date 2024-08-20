document.addEventListener('DOMContentLoaded', () => {
    const siRadio = document.getElementById('si');
    const noRadio = document.getElementById('no');
    const formularioDatos = document.getElementById('formulario-datos');

    siRadio.addEventListener('change', () => {
        if (siRadio.checked) {
            formularioDatos.style.display = 'block';
        }
    });

    noRadio.addEventListener('change', () => {
        if (noRadio.checked) {
            formularioDatos.style.display = 'none';
        }
    });

    document.getElementById('cargar-datos').addEventListener('click', cargarDatos);
});

let datos = {
    anios: [],
    ingresos: [],
    gastos: [],
    nivelEndeudamiento: [],
    creditosAdquiridos: []
};

function agregarDatos() {
    const anio = document.getElementById('anio').value;
    const ingresos = parseFloat(document.getElementById('ingresos').value);
    const gastos = parseFloat(document.getElementById('gastos').value);

    if (!anio || !ingresos || !gastos) {
        alert("Por favor complete todos los campos.");
        return;
    }

    if (!datos.anios.includes(anio)) {
        datos.anios.push(anio);
        datos.ingresos.push(ingresos);
        datos.gastos.push(gastos);
        const endeudamiento = (ingresos - gastos) * 0.5;
        datos.nivelEndeudamiento.push(endeudamiento);
        localStorage.setItem('datosCrecimientoVentas', JSON.stringify(datos));
        actualizarTablaDatos();
        actualizarTablaDatosResumen();  // Actualizar la tabla de resumen
        generarGrafica();
    } else {
        alert("El año ya ha sido ingresado.");
    }
}

function agregarCredito() {
    const anioCredito = document.getElementById('anio-credito').value;
    const creditosAdquiridos = parseFloat(document.getElementById('creditos-adquiridos').value);

    if (!anioCredito || !creditosAdquiridos) {
        alert("Por favor complete todos los campos.");
        return;
    }

    datos.creditosAdquiridos.push({
        anio: anioCredito,
        valor: creditosAdquiridos
    });
    actualizarTablaCreditos();
    actualizarTablaDatosResumen();  // Actualizar la tabla de resumen
    generarGrafica();
}

function cargarDatos() {
    const creditos = JSON.parse(localStorage.getItem('creditos'));

    if (creditos) {
        datos.creditosAdquiridos = creditos;
        actualizarTablaCreditos();
        generarGrafica();
    } else {
        alert('No se encontraron datos de créditos en el almacenamiento local.');
    }
}

function actualizarTablaDatos() {
    const tbody = document.querySelector("#tabla-datos tbody");
    tbody.innerHTML = "";

    datos.anios.forEach((anio, index) => {
        const row = `<tr>
            <td>${anio}</td>
            <td>${datos.ingresos[index]}</td>
            <td>${datos.gastos[index]}</td>
            <td>${datos.nivelEndeudamiento[index]}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function actualizarTablaCreditos() {
    const tbody = document.querySelector("#tabla-creditos tbody");
    const tfoot = document.querySelector("#tabla-creditos tfoot");
    tbody.innerHTML = "";

    let totalCreditos = 0;

    datos.creditosAdquiridos.forEach(credito => {
        totalCreditos += credito.valor; // Usar "valor" en lugar de "cantidad"
        const row = `<tr>
            <td>${credito.anio}</td>
            <td>${credito.valor}</td> <!-- Usar "valor" en lugar de "cantidad" -->
        </tr>`;
        tbody.innerHTML += row;
    });

    tfoot.querySelector("#total-creditos").textContent = totalCreditos;
}

function actualizarTablaDatosResumen() {
    const totalCreditos = datos.creditosAdquiridos.reduce((total, credito) => total + credito.valor, 0);
    const totalNivelEndeudamiento = datos.nivelEndeudamiento.reduce((total, endeudamiento) => total + endeudamiento, 0);

    document.getElementById('total-creditos-resumen').textContent = totalCreditos;
    document.getElementById('total-nivel-endeudamiento-resumen').textContent = totalNivelEndeudamiento;
}

function generarGrafica() {
    const ctx = document.getElementById('grafica').getContext('2d');

    const anios = datos.anios;
    const nivelEndeudamiento = datos.nivelEndeudamiento;
    const creditosAdquiridos = new Array(anios.length).fill(0);

    datos.creditosAdquiridos.forEach(credito => {
        const index = anios.indexOf(credito.anio);
        if (index !== -1) {
            creditosAdquiridos[index] += credito.valor; // Usar "valor" en lugar de "cantidad"
        }
    });

    if (window.myChart) {
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: anios,
            datasets: [
                {
                    label: 'Nivel de Endeudamiento Anual',
                    data: nivelEndeudamiento,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Créditos Adquiridos',
                    data: creditosAdquiridos,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
