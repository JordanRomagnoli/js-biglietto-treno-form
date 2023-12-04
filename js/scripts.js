const entireName = document.getElementById('user-name');
const km = document.getElementById('user-km');
const age = document.getElementById('user-age');



const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function(){
    const nameInput = (entireName.value);
    const kmInput = parseInt(km.value);
    const ageValue = parseInt(age.value);
    const wagon = Math.floor(Math.random()*10)+1; 
    const code = Math.floor(Math.random()*10000)+1;
    


    let prize = parseFloat((km.value * 0.21)).toFixed(2);
    let discount20 = (prize * 0.8).toFixed(2);
    let discount40 = (prize * 0.6).toFixed(2);
    
    document.getElementById('name-container').innerHTML = `${nameInput}`;
    document.getElementById('wagon-container').innerHTML = `${wagon}`;
    document.getElementById('code-container').innerHTML = `${code}`;


    if (ageValue < 18){
        document.getElementById('price-container').innerHTML = `${discount20}€`;
        document.getElementById('discount-container').innerHTML = `Biglietto Under 18`;

    }
    
    else if(ageValue > 65){
        document.getElementById('price-container').innerHTML = `${discount40}€`;
        document.getElementById('discount-container').innerHTML = `Biglietto Over 65`;


    }else{
        document.getElementById('price-container').innerHTML = `${prize}€`;
        document.getElementById('discount-container').innerHTML = `Biglietto Standard`;


    }


}
);