document.addEventListener('DOMContentLoaded', function () {
    cargarDatosContribuyente(); // Carga los datos antes de actualizar los gráficos

    const ctxIngresosEgresos = document.getElementById('pieChartIngresosEgresos').getContext('2d');
    new Chart(ctxIngresosEgresos, {
        type: 'pie',
        data: {
            labels: ['Ingresos', 'Egresos'],
            datasets: [{
                data: [
                    parseFloat(document.querySelector('#analisis-ingresos-egresos p:nth-child(2)').textContent.replace('$', '').replace(',', '')),
                    parseFloat(document.querySelector('#analisis-ingresos-egresos p:nth-child(3)').textContent.replace('$', '').replace(',', ''))
                ],
                backgroundColor: ['#36a2eb', '#ff6384'],
                hoverBackgroundColor: ['#36a2eb', '#ff6384']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false // Desactivar animación para mejorar la calidad del render
        }
    });

    const ctxSolvencia = document.getElementById('pieChartSolvencia').getContext('2d');
    new Chart(ctxSolvencia, {
        type: 'pie',
        data: {
            labels: ['Activos', 'Pasivos'],
            datasets: [{
                data: [
                    parseFloat(document.querySelector('#analisis-solvencia p:nth-child(2)').textContent.replace('$', '').replace(',', '')),
                    parseFloat(document.querySelector('#analisis-solvencia p:nth-child(3)').textContent.replace('$', '').replace(',', ''))
                ],
                backgroundColor: ['#4bc0c0', '#ff9f40'],
                hoverBackgroundColor: ['#4bc0c0', '#ff9f40']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false // Desactivar animación para mejorar la calidad del render
        }
    });
});

function cargarDatosContribuyente() {
    const datosContribuyente = JSON.parse(localStorage.getItem('datosContribuyente'));

    if (datosContribuyente) {
        document.querySelector('#datos-contribuyente p:nth-child(2)').textContent = `Nombre: ${datosContribuyente.nombre}`;
        document.querySelector('#datos-contribuyente p:nth-child(3)').textContent = `RUC: ${datosContribuyente.ci}`;
        document.querySelector('#datos-contribuyente p:nth-child(4)').textContent = `Tipo de RIMPE: ${datosContribuyente.tipoContribuyente}`;
        document.querySelector('#datos-contribuyente p:nth-child(5)').textContent = `Inicio de Actividades Económicas: ${datosContribuyente.inicioActividades}`;
        document.querySelector('#datos-contribuyente p:nth-child(6)').textContent = `Tipo de Actividades Económicas: ${datosContribuyente.tipoActividades}`;

        document.querySelector('#analisis-ingresos-egresos p:nth-child(2)').textContent = `Total Ingresos: ${datosContribuyente.totalIngresos}`;
        document.querySelector('#analisis-ingresos-egresos p:nth-child(3)').textContent = `Total Egresos: ${datosContribuyente.totalEgresos}`;

        document.querySelector('#analisis-solvencia p:nth-child(2)').textContent = `Total Activos: ${datosContribuyente.totalActivos}`;
        document.querySelector('#analisis-solvencia p:nth-child(3)').textContent = `Total Pasivos: ${datosContribuyente.totalPasivosCorrientes}`;

        // Actualizar el score y la descripción del riesgo
        document.getElementById('puntaje-final').textContent = datosContribuyente.puntaje;
        document.getElementById('riesgo-final').textContent = datosContribuyente.riesgo;

        // Ahora actualiza los gráficos con los datos cargados
        actualizarGraficos(datosContribuyente);
    } else {
        alert('No se encontraron datos del contribuyente en el almacenamiento local.');
    }
}

function actualizarGraficos(datosContribuyente) {
    const ctxIngresosEgresos = document.getElementById('pieChartIngresosEgresos').getContext('2d');
    new Chart(ctxIngresosEgresos, {
        type: 'pie',
        data: {
            labels: ['Ingresos', 'Egresos'],
            datasets: [{
                data: [
                    parseFloat(datosContribuyente.totalIngresos.replace('$', '').replace(',', '')),
                    parseFloat(datosContribuyente.totalEgresos.replace('$', '').replace(',', ''))
                ],
                backgroundColor: ['#36a2eb', '#ff6384'],
                hoverBackgroundColor: ['#36a2eb', '#ff6384']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false // Desactivar animación para mejorar la calidad del render
        }
    });

    const ctxSolvencia = document.getElementById('pieChartSolvencia').getContext('2d');
    new Chart(ctxSolvencia, {
        type: 'pie',
        data: {
            labels: ['Activos', 'Pasivos'],
            datasets: [{
                data: [
                    parseFloat(datosContribuyente.totalActivos.replace('$', '').replace(',', '')),
                    parseFloat(datosContribuyente.totalPasivosCorrientes.replace('$', '').replace(',', ''))
                ],
                backgroundColor: ['#4bc0c0', '#ff9f40'],
                hoverBackgroundColor: ['#4bc0c0', '#ff9f40']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false // Desactivar animación para mejorar la calidad del render
        }
    });
}

function generarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');

    // Estilos Generales
    doc.setFont('Helvetica');
    doc.setFontSize(16);
    doc.setTextColor(40, 40, 40);

    // Título del PDF
    doc.text("Informe de Análisis 360", 105, 15, null, null, 'center');

    // Sección "Score y Descripción del Riesgo"
    doc.setFontSize(12);
    doc.rect(10, 25, 190, 25); // x, y, width, height

    doc.text("Score", 15, 30);

    const puntajeFinal = document.querySelector('#score-riesgo p:nth-child(2)').innerText;
    const riesgoFinal = document.querySelector('#score-riesgo p:nth-child(3)').innerText;

    doc.setFontSize(10);
    doc.text(puntajeFinal, 15, 38);
    doc.text(riesgoFinal, 15, 46);

    // Sección "Datos del Contribuyente" con Marco
    doc.setFontSize(12);
    doc.rect(10, 55, 190, 40); // x, y, width, height

    doc.text("Datos del Contribuyente", 15, 60);

    const nombre = document.querySelector('#datos-contribuyente p:nth-child(2)').innerText;
    const ruc = document.querySelector('#datos-contribuyente p:nth-child(3)').innerText;
    const tipoContribuyente = document.querySelector('#datos-contribuyente p:nth-child(4)').innerText;
    const inicioActividades = document.querySelector('#datos-contribuyente p:nth-child(5)').innerText;
    const tipoActividades = document.querySelector('#datos-contribuyente p:nth-child(6)').innerText;

    doc.setFontSize(10);
    doc.text(nombre, 15, 68);
    doc.text(ruc, 15, 74);
    doc.text(tipoContribuyente, 15, 80);
    doc.text(inicioActividades, 15, 86);
    doc.text(tipoActividades, 15, 92);

    // Sección "Análisis de Ingresos y Egresos" con Marco
    doc.setFontSize(12);
    doc.rect(10, 100, 190, 45); // x, y, width, height

    doc.text("Análisis de Ingresos y Egresos", 15, 105);

    const totalIngresos = document.querySelector('#analisis-ingresos-egresos p:nth-child(2)').innerText;
    const totalEgresos = document.querySelector('#analisis-ingresos-egresos p:nth-child(3)').innerText;
    const resultado = document.querySelector('#analisis-ingresos-egresos p:nth-child(4)').innerText;

    doc.setFontSize(10);
    doc.text(totalIngresos, 15, 113);
    doc.text(totalEgresos, 15, 119);

    // Aquí es donde va el ajuste del texto del resultado
    const resultadoAjustado = resultado.replace(/(.{70})/g, "$1\n"); // Inserta un salto de línea cada 70 caracteres
    doc.text(resultadoAjustado, 15, 125);

    // Agregar la gráfica de "Análisis de Ingresos y Egresos"
    const canvasIngresosEgresos = document.getElementById('pieChartIngresosEgresos');
    const imgDataIngresosEgresos = canvasIngresosEgresos.toDataURL('image/png', 1.0); // Calidad 1.0
    doc.addImage(imgDataIngresosEgresos, 'PNG', 115, 108, 80, 35); // x, y, width, height

    // Sección "Análisis de Solvencia" con Marco
    doc.setFontSize(12);
    doc.rect(10, 150, 190, 45); // x, y, width, height

    doc.text("Análisis de Solvencia", 15, 155);

    const totalActivos = document.querySelector('#analisis-solvencia p:nth-child(2)').innerText;
    const totalPasivos = document.querySelector('#analisis-solvencia p:nth-child(3)').innerText;
    const solvenciaTexto = document.querySelector('#analisis-solvencia p:nth-child(4)').innerText;

    doc.setFontSize(10);
    doc.text(totalActivos, 15, 163);
    doc.text(totalPasivos, 15, 169);
    doc.text(solvenciaTexto, 15, 175);

    // Agregar la gráfica de "Análisis de Solvencia"
    const canvasSolvencia = document.getElementById('pieChartSolvencia');
    const imgDataSolvencia = canvasSolvencia.toDataURL('image/png', 1.0); // Calidad 1.0
    doc.addImage(imgDataSolvencia, 'PNG', 115, 160, 80, 35); // x, y, width, height

    // Sección "Calificación de Días de Mora" con Marco
    doc.setFontSize(12);
    doc.rect(10, 200, 190, 45); // x, y, width, height

    doc.text("Calificación de Días de Mora", 15, 205);
    const calificacionMora = `
        0 - Frecuencia (días): 0 - Impacto: 0%
        1 - Frecuencia (días): 1-15 - Impacto: 1%-20%
        2 - Frecuencia (días): 16-30 - Impacto: 21%-40%
        3 - Frecuencia (días): 31-45 - Impacto: 41%-60%
        4 - Frecuencia (días): 46-60 - Impacto: 61%-80%
        5 - Frecuencia (días): 61-90 - Impacto: 81%-100%
        6 - Frecuencia (días): 91- en adelante - Impacto: 101%- en adelante
    `;
    doc.setFontSize(10);
    doc.text(calificacionMora, 15, 213);

    // Sección "Matriz de Riesgos" con Marco
    doc.setFontSize(12);
    doc.rect(10, 250, 190, 35); // x, y, width, height

    doc.text("Matriz de Riesgos", 15, 255);
    const matrizRiesgos = `
        999-960 - Bajo Riesgo de Morosidad
        959-840 - Moderado Riesgo de Morosidad
        839-600 - Alto Riesgo de Morosidad
        599-280 - Muy Alto Riesgo de Morosidad
    `;
    doc.setFontSize(10);
    doc.text(matrizRiesgos, 15, 263);

    // Guardar el PDF
    doc.save('informe-analisis-360.pdf');
}
