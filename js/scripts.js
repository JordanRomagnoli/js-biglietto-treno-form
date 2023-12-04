const km = document.getElementById('user-km');
const age = document.getElementById('user-age');



const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function(){
    const kmInput = parseInt(km.value);
    const ageValue = parseInt(age.value);


    let prize = parseFloat((km.value * 0.21));
    
    

    if (ageValue < 18){
        console.log (prize * 0.8);
    }
    
    else if(ageValue > 65){
        console.log (prize * 0.6);

    }else{
        console.log (prize);
    }


}
);