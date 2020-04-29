// calling the init function
init();

//adding an event listener to the selected field
document.querySelector('.btn').addEventListener('click', calculateBMI);

// function for responding to the event listener
function calculateBMI(){
    var firstName = document.querySelector('.name-input').value;
    var mass = document.querySelector('.mass-input').value;
    var height = document.querySelector('.height-input').value;
    if(firstName !== '' && mass.length < 4 && mass.length > 0){
        var bmi = Math.floor(mass / (height * height));
    
        document.querySelector('.user-interface').style.display = 'block';
        document.querySelector('.name-tag').textContent = firstName;
        document.querySelector('.calculated-bmi').textContent = bmi;
    }else{
        document.querySelector('.user-interface').style.display = 'block';
        document.querySelector('.user-interface').textContent = 'Failed, Try again!';
    }
    
}

// defining the initial function
function init(){
    document.querySelector('.user-interface').style.display = 'none';
}


