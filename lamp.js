const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lampada = document.getElementById('lampada');

function isLampBroken() {
    return lampada.src.indexOf('quebrada') > -1;
}

function lampOn() {
    if (!isLampBroken()) {
        lampada.src = './images/ligada.jpg';
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lampada.src = './images/desligada.jpg';
    }
}
function lampBroken() {
    lampada.src = './images/quebrada.jpg';
}



desligar.addEventListener('click', lampOff);
ligar.addEventListener('click', lampOn);
lampada.addEventListener('mouseover', lampOn);
lampada.addEventListener('mouseleave', lampOff);
lampada.addEventListener('dblclick', lampBroken)