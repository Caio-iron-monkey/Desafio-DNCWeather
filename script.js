//inputs form


var inpemail = document.getElementById('inpemail')
var inpname = document.getElementById('inpname')

var inpcep = document.getElementById('inpcep')
var buttacess = document.getElementById('buttacess') 




//Previsao do tempo 



async function pegarCep(){
    if(inpcep.value.length !== 8){
        alert(`Digite o seu CEP sem o Hífem`) 
    }else{
    try{

      const response = await fetch(`https://viacep.com.br/ws/${inpcep.value}/json/`);
        const data = await response.json();
        console.log(data)
        
        var inplogradouro = document.getElementById('logradouro').value = data.logradouro
        var inpbairro = document.getElementById('bairro').value = data.bairro
        var inplocalidade = document.getElementById('localidade').value = data.localidade
        
        
    } catch (error) {
    alert(error.message);
    }
}
} 

async function pegarClima(){
            var inplat = document.getElementById('inplat').value
            var inplong = document.getElementById('inplong').value
            var previsao = document.getElementById('previsao')
            try{
                const tempo = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${inplat}&longitude=${inplong}&current=temperature_2m,rain&hourly=temperature_2m,rain&timezone=Europe%2FLondon&start_date=2024-03-26&end_date=2024-03-26`)
                const data= await tempo.json();
        
                
                   const dataatual = new Date();
                const horas = dataatual.getHours();
                
                arraynumeros =  data.hourly.temperature_2m
        
                const elemento = arraynumeros[horas]
        
                
        
                    previsao.value = `Sua temperatura atual é de: ${elemento}ºC`;               
                
            }catch (error) {
                alert(error.message);
            }
        
        }

function rolagemRespostas(){
    if(inpcep.value.length !== 8){
        
    }else{
        let localFinal = document.getElementById('resDaBusca')
        localFinal.scrollIntoView({behavior: 'smooth'}); 
    }
    
}


