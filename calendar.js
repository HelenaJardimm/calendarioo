function colorirDia() {

    let days = document.getElementById('day').value

    if (days < 1) {
        alert('Dia informado deve ser inteiro positivo');

    } else if (days >= 31) {
        alert('Escolha um dia entre 1 e 30');
    }
    else {
        let color = document.getElementById('color').value;
        let calendar = document.getElementById('calendario');
        let td = calendar.getElementsByTagName('td')[(parseInt(days))];

        td.style.backgroundColor = color
    }

}




/*
if (days < 1) {
    alert('Dia informado deve ser inteiro positivo');

}else if (days > 31){
    alert('Escolha um dia entre 1 e 31');
}
 else {
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
    let td = calendar.getElementsByTagName('td')[(parseInt(days) + 2)];

    td.style.backgroundColor = color
}
*/