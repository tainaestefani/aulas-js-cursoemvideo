function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res= document.getElementById('res');

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fSex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fSex[0].checked) {
            genero = 'mulher';

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'fotobebe-f.png')
            } else if (idade < 18) {
                // Jovem
                img.setAttribute('src', 'fotojovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'fotoadulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'fotoidoso-f.png')
            }

        } else if (fSex[1].checked) {
            genero = 'homem';

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'fotobebe-m.png')
            } else if (idade < 18) {
                // Jovem
                img.setAttribute('src', 'fotojovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'fotoadulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'fotoidoso-m.png')
            }

        }

        res.style.textAlign = 'center';
        res.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos.';
        res.appendChild(img)
    }
}