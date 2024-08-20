document.addEventListener('DOMContentLoaded', function () {
    // Lógica para gráficos
    const ctxIngresosEgresos = document.getElementById('pieChartIngresosEgresos').getContext('2d');
    new Chart(ctxIngresosEgresos, {
        type: 'pie',
        data: {
            labels: ['Ingresos', 'Egresos'],
            datasets: [{
                data: [60, 40], // Ejemplo de datos
                backgroundColor: ['#36a2eb', '#ff6384'],
                hoverBackgroundColor: ['#36a2eb', '#ff6384']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    const ctxSolvencia = document.getElementById('pieChartSolvencia').getContext('2d');
    new Chart(ctxSolvencia, {
        type: 'pie',
        data: {
            labels: ['Activos', 'Pasivos'],
            datasets: [{
                data: [70, 30], // Ejemplo de datos
                backgroundColor: ['#4bc0c0', '#ff9f40'],
                hoverBackgroundColor: ['#4bc0c0', '#ff9f40']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});

function generarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');

    // Estilos Generales
    doc.setFont('Helvetica');
    doc.setFontSize(18);
    doc.setTextColor(40, 40, 40);

    // Título del PDF
    doc.text("Informe de Análisis 360", 105, 20, null, null, 'center');

    // Sección "Datos del Contribuyente" con Marco
    doc.setFontSize(14);
    doc.setDrawColor(0, 0, 0); // Color del marco
    doc.rect(10, 35, 190, 50); // x, y, width, height

    doc.text("DATOS DEL CONTRIBUYENTE:", 15, 40);

    const nombre = document.querySelector('#datos-contribuyente p:nth-child(2)').innerText;
    const ruc = document.querySelector('#datos-contribuyente p:nth-child(3)').innerText;
    const tipoContribuyente = document.querySelector('#datos-contribuyente p:nth-child(4)').innerText;
    const inicioActividades = document.querySelector('#datos-contribuyente p:nth-child(5)').innerText;
    const tipoActividades = document.querySelector('#datos-contribuyente p:nth-child(6)').innerText;

    doc.setFontSize(12);
    doc.text(nombre, 15, 50);
    doc.text(ruc, 15, 58);
    doc.text(tipoContribuyente, 15, 66);
    doc.text(inicioActividades, 15, 74);
    doc.text(tipoActividades, 15, 82);

    // Sección "Análisis de Ingresos y Egresos" con Marco
    doc.setFontSize(14);
    doc.rect(10, 90, 190, 80); // x, y, width, height

    doc.text("Análisis de Ingresos y Egresos:", 15, 100);

    const totalIngresos = document.querySelector('#analisis-ingresos-egresos p:nth-child(2)').innerText;
    const totalEgresos = document.querySelector('#analisis-ingresos-egresos p:nth-child(3)').innerText;
    const resultado = document.querySelector('#analisis-ingresos-egresos p:nth-child(4)').innerText;

    doc.setFontSize(12);
    doc.text(totalIngresos, 15, 110);
    doc.text(totalEgresos, 15, 118);
    doc.text(resultado, 15, 126);

    // Agregar la gráfica de "Análisis de Ingresos y Egresos"
    const canvasIngresosEgresos = document.getElementById('pieChartIngresosEgresos');
    const imgDataIngresosEgresos = canvasIngresosEgresos.toDataURL('image/png');
    doc.addImage(imgDataIngresosEgresos, 'PNG', 110, 105, 80, 60); // x, y, width, height

    // Sección "Análisis de Solvencia" con Marco
    doc.setFontSize(14);
    doc.rect(10, 180, 190, 80); // x, y, width, height

    doc.text("Análisis de Solvencia:", 15, 190);

    const totalActivos = document.querySelector('#analisis-solvencia p:nth-child(2)').innerText;
    const totalPasivos = document.querySelector('#analisis-solvencia p:nth-child(3)').innerText;
    const solvenciaTexto = document.querySelector('#analisis-solvencia p:nth-child(4)').innerText;

    doc.setFontSize(12);
    doc.text(totalActivos, 15, 200);
    doc.text(totalPasivos, 15, 208);
    doc.text(solvenciaTexto, 15, 216);

    // Agregar la gráfica de "Análisis de Solvencia"
    const canvasSolvencia = document.getElementById('pieChartSolvencia');
    const imgDataSolvencia = canvasSolvencia.toDataURL('image/png');
    doc.addImage(imgDataSolvencia, 'PNG', 110, 195, 80, 60); // x, y, width, height

    // Guardar el PDF
    doc.save('informe-analisis-360.pdf');
}


