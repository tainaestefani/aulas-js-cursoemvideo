function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    
    msg.innerHTML = 'Agora são ' + hora + ' horas.';

    if (hora >= 0 && hora < 12) {
        // Manhã
        img.src = 'fotomanha.jpeg';
        document.body.style.background = '#ffdd83';
    } else if (hora >= 12 && hora < 18) {
        // Tarde
        img.src = 'fototarde.jpeg';
        document.body.style.background = '#d68a57';
    } else {
        // Noite
        img.src = 'fotonoite.jpeg';
        document.body.style.background = '#06396e';
    }
}