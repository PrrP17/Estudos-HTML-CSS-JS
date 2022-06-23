function enviar(){
    let name = document.getElementById("nome").value;
    let lastName = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let xp = document.querySelector('input[name = "devweb"]: checked').value
    
    let dados;

    document.getElementById("envia").addEventListener('click', function () {
        dados = {
            name : name.value,
            lastName : lastName.value,
            email : email.value,
            xp: senior.value
        }

        console.log(dados.valueof());

        
    })
    
    alert(name);
    return true
}