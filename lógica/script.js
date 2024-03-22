function calcular(){
    let pesotxt = document.getElementById('ipeso')
    let alturatxt = document.getElementById('ialtura')
    
    let resposta = document.getElementById('res')

    if(pesotxt.value.length == 0 || alturatxt.value.length == 0){
        alert('Por favor, preencha os dados!')
    }
    else{
        let peso = Number(pesotxt.value)
        let altura = Number(alturatxt.value)
        let imc = peso / altura ** 2;
        if(imc < 16){
            resposta.innerHTML = `O seu IMC é ${imc.toFixed(2)} <br> <strong>Status</strong>: Magreza Grave!`
        }else if(imc < 16.9){

            resposta.innerHTML = `O seu IMC é ${imc.toFixed(2)} <br> <strong>Status</strong>: Magreza Moderada!`

        }else if(imc < 18.5){
            resposta.innerHTML = `O seu IMC é ${imc.toFixed(2)} <br> <strong>Status</strong>: Magreza Leve!`
        }else if(imc < 24.9){
            resposta.innerHTML = `O seu IMC é ${imc.toFixed(2)} <br> <strong>Status</strong>: Peso Ideal!`
        }else if(imc < 29.9){
            resposta.innerHTML = `O seu IMC é ${imc.toFixed(2)} <br> <strong>Status</strong>: Sobrepeso!`
        }else if(imc < 34.9){
            resposta.innerHTML = `O seu IMC é ${imc.toFixed(2)} <br> <strong>Status</strong>: Obesidade Grau 1!`
        }else if(imc <39.9){
            resposta.innerHTML = `O seu IMC é ${imc.toFixed(2)} <br> <strong>Status</strong>:Obesidade Grau 2 ou Severa!`
        }else{
            resposta.innerHTML = `O seu IMC é ${imc.toFixed(2)} <br> <strong>Status</strong>: Obesidade Grau 3 ou Mórbida!`
        }

    }
}