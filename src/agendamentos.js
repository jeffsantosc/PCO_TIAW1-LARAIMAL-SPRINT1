function showPopup(clinicName, clinicAddress) {
    document.getElementById('clinicName').textContent = clinicName;
    document.getElementById('clinicAddress').textContent = 'Endereço: ' + clinicAddress;
    document.getElementById('clinicPopup').style.display = 'block';
}
function closePopup() {
    document.getElementById('clinicPopup').style.display = 'none';
}
function agendarConsulta() {
    const clinicName = document.getElementById('clinicName').textContent;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    const appointmentData = {
        clinicName,
        appointmentDate,
        appointmentTime
    };
   
    const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    existingAppointments.push(appointmentData);
    localStorage.setItem('appointments', JSON.stringify(existingAppointments));
    alert(`Consulta agendada em ${clinicName} em ${appointmentDate} às ${appointmentTime}`);
    closePopup();
}