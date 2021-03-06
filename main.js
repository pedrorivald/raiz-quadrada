indiceInput = document.getElementById('indice');
radInput = document.getElementById('rad');
spanResult = document.getElementById('result');
divResult = document.getElementById('divResult');
divExpressao = document.getElementById('ex');

function somenteNumeros(e){
    var charCode = e.charCode ? e.charCode : e.keyCode;
    // charCode 8 = backspace   
    // charCode 9 = tab
    if (charCode != 8 && charCode != 9) {
        // charCode 48 equivale a 0   
        // charCode 57 equivale a 9
        if (charCode < 48 || charCode > 57) {
            return false;
        }
    }
}

function calcRaiz(){
    let i = indiceInput.value;
    let r = radInput.value;

    let result = Math.pow(r, 1/i);

    spanResult.innerHTML = result.toFixed(3);
    divResult.style.display = 'block';
    divExpressao.style.display = 'none';
}