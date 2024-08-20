document.getElementById('tipo').addEventListener('change', function() {
    document.getElementById('financialDetails').classList.toggle('hidden', !this.value);
});

document.querySelectorAll('input[name="credito"]').forEach(radio => {
    radio.addEventListener('change', function() {
        document.getElementById('creditDetails').classList.toggle('hidden', this.value !== 'si');
    });
});

document.getElementById('numCreditos').addEventListener('change', function() {
    const numCreditos = parseInt(this.value);
    const creditForms = document.getElementById('creditForms');
    creditForms.innerHTML = '';

    for (let i = 0; i < numCreditos; i++) {
        creditForms.innerHTML += `
            <h4>Crédito ${i + 1}</h4>
            <label for="valorPrestamo${i}">Valor de Préstamo:</label>
            <input type="number" id="valorPrestamo${i}" name="valorPrestamo${i}" required><br><br>
            <label for="institucionFinanciera${i}">Nombre de la Institución Financiera:</label>
            <select id="institucionFinanciera${i}" name="institucionFinanciera${i}" required>
                <option value="">Seleccione...</option>
                <option value="BanEcuador">BanEcuador</option>
                <option value="Cacpeco">Cacpeco</option>
                <option value="Pichincha">Banco Pichincha</option>
                <option value="Rumiñahui">Banco General Rumiñahui</option>
                <option value="Guayaquil">Banco Guayaquil</option>
                <option value="Pacifico">Banco Pacífico</option>
                <option value="Ambato">Cooperativa Ambato</option>
            </select><br><br>
            <label for="anioPrestamo${i}">Año de Adquisición de Préstamo:</label>
            <input type="date" id="anioPrestamo${i}" name="anioPrestamo${i}" required><br><br>
            <label for="tiempoCredito${i}">Tiempo del Crédito Adquirido (En años):</label>
            <input type="number" id="tiempoCredito${i}" name="tiempoCredito${i}" min="1" max="6" required><br><br>
            <label for="cuotaMensual${i}">Valor de la Cuota Mensual:</label>
            <input type="number" step="0.01" id="cuotaMensual${i}" name="cuotaMensual${i}" required><br><br>
            <label for="cuotasAnuales${i}">Cuotas Anuales más Intereses:</label>
            <input type="number" id="cuotasAnuales${i}" name="cuotasAnuales${i}" readonly><br><br>
            <label for="participacionVentas${i}">% de Participación del Crédito respecto a Ventas:</label>
            <input type="number" id="participacionVentas${i}" name="participacionVentas${i}" readonly><br><br>
            <button type="button" onclick="calculateParticipation(${i})">Calcular Crédito ${i + 1}</button>
            <hr>
        `;
    }
    document.getElementById('riskEvaluation').classList.remove('hidden');
});

document.getElementById('mainForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cedula = document.getElementById('cedula').value;
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const tipo = document.getElementById('tipo').value;
    const ingresosAnuales = parseFloat(document.getElementById('ingresos').value); // New line to get ingresos
    
    const contribuyenteData = {
        cedula,
        nombres,
        apellidos,
        tipo,
        ingresosAnuales
    };

    const numCreditos = parseInt(document.getElementById('numCreditos').value);
    const creditos = [];

    for (let i = 0; i < numCreditos; i++) {
        const anioPrestamo = document.getElementById(`anioPrestamo${i}`).value.split('-')[0]; // Extracting year
        const valorPrestamo = parseFloat(document.getElementById(`valorPrestamo${i}`).value);
        const institucion = document.getElementById(`institucionFinanciera${i}`).value;

        creditos.push({
            anio: anioPrestamo,
            valor: valorPrestamo,
            institucion: institucion
        });
    }

    localStorage.setItem('contribuyenteData', JSON.stringify(contribuyenteData));
    localStorage.setItem('creditos', JSON.stringify(creditos));

    // Mostrar en consola lo que se guardó
    console.log('Datos guardados en LocalStorage:', contribuyenteData, creditos);

    const credito = document.querySelector('input[name="credito"]:checked').value;

    if (credito === 'si') {
        window.location.href = 'index2.html';
    } else if (credito === 'no') {
        window.location.href = 'index3.html';
    }
});

function calculateParticipation(index) {
    const ingresosAnuales = parseFloat(document.getElementById('ingresos').value);
    const cuotaMensual = parseFloat(document.getElementById(`cuotaMensual${index}`).value);
    const cuotasAnuales = (cuotaMensual * 12).toFixed(2);
    const participacionVentas = ((cuotasAnuales * 100) / ingresosAnuales).toFixed(2);

    document.getElementById(`cuotasAnuales${index}`).value = cuotasAnuales;
    document.getElementById(`participacionVentas${index}`).value = participacionVentas;
}

function calculateRisk() {
    let totalProbabilidad = 0;
    let totalImpacto = 0;
    let totalRiesgo = 0;

    for (let i = 1; i <= 5; i++) {
        const prob = parseInt(document.getElementById(`prob${i}`).value) || 0;
        const impact = parseInt(document.getElementById(`impacto${i}`).value) || 0;
        const risk = prob * impact;

        totalProbabilidad += prob;
        totalImpacto += impact;
        totalRiesgo += risk;

        document.getElementById(`risk${i}`).innerText = risk;
    }

    const averageRiesgo = totalRiesgo / 5;
    document.getElementById('totalRiskLevel').innerText = `Suma total del Nivel de Riesgo: ${averageRiesgo}`;

    const riskResultTable = document.getElementById('riskResultTable');
    riskResultTable.innerHTML = '';
    riskResultTable.classList.remove('hidden');

    let riskLevel = '';
    let description = '';
    let actions = '';

    if (averageRiesgo <= 5) {
        riskLevel = '[0-5] Bajo';
        description = 'Bajo';
        actions = 'Mantener un seguimiento constante y registrar cualquier evento relevante para asegurar que se mantiene bajo control.';
        riskResultTable.className = 'alert alert-bajo';
    } else if (averageRiesgo <= 10) {
        riskLevel = '[6-10] Moderado';
        description = 'Moderado';
        actions = 'Realizar revisiones periódicas de los controles existentes, hacer ajustes necesarios y mejorar los procesos para mitigar riesgos futuros.';
        riskResultTable.className = 'alert alert-moderado';
    } else if (averageRiesgo <= 15) {
        riskLevel = '[11-15] Alto';
        description = 'Alto';
        actions = 'Introducir acciones correctivas específicas y proporcionar capacitación al personal para prevenir recurrencias y mejorar la respuesta ante riesgos.';
        riskResultTable.className = 'alert alert-alto';
    } else {
        riskLevel = '[16-20] Muy Alto';
        description = 'Muy Alto';
        actions = 'Ejecutar acciones correctivas de forma inmediata, mantener una revisión constante y asegurar una comunicación fluida y constante con todos los niveles de la organización para una respuesta rápida y efectiva.';
        riskResultTable.className = 'alert alert-muy-alto';
    }

    riskResultTable.innerHTML = `
        <table class="risk-table">
            <tr>
                <th>Nivel de Riesgo</th>
                <th>Descripción del Riesgo</th>
                <th>Acciones Mitigantes</th>
            </tr>
            <tr>
                <td>${riskLevel}</td>
                <td>${description}</td>
                <td>${actions}</td>
            </tr>
        </table>
    `;
}

