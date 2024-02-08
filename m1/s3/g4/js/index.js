 const creaNumeri = function(){
    const selezioneNumeri = document.querySelectorAll('.tabella').forEach(function(div, index){
        let number = index +1;
        div.textContent = number
    })}

creaNumeri();

const pescaNumeri = function(){
    const pressButton = document.querySelectorAll('.pesca-numero').addEventListener('click', function(){
        const randomNumber = Math.floor(Math.random() *76) +1;
        console.log(randomNumber)
})}

pescaNumeri();



