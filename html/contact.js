function validateForm(){

    let validForm = true;
    console.log('got inside fn');
    

    //Validate Phone
    let phoneVal = document.getElementById('phone').value;
    let valPhone = /^([0-9]){3}-[0-9]{3}-([0-9]){4}$/;
    if(!valPhone.test(phoneVal)) {
        document.getElementById('phoneError').innerText ="Your phone number must be in the following format: 555-555-5555."
        validForm=false;
    } else {
        document.getElementById('phoneError').innerText ="";
    }



//Email
let emailVal = document.getElementById('myEmail').value;
let valEmail = /^([a-zA-Z0-9#!$%.]+)@[a-zA-Z0-9-]+.([a-zA-Z]){2,3}$/;
if(!valEmail.test(emailVal)) {
    document.getElementById('emailError').innerText = 'You must enter a valid email address.'
    validForm=false;
} else {
    document.getElementById('emailError').innerText = '';
}


//State
let stateVal = document.getElementById('state').value;
let valState = /^(AL)$|^(AK)$|^(AZ)$|^(AR)$|^(CA)$|^(CO)$|^(CT)$|^(DE)$|^(DC)$|^(FL)$|^(GA)$|^(HI)$|^(ID)$|^(IL)$|^(IN)$|^(IA)$|^(KS)$|^(KY)$|^(LA)$|^(ME)$|^(MD)$|^(MA)$|^(MI)$|^(MN)$|^(MS)$|^(MO)$|^(MT)$|^(NE)$|^(NV)$|^(NH)$|^(NJ)$|^(NM)$|^(NY)$|^(NC)$|^(ND)$|^(OH)$|^(OK)$|^(OR)$|^(PA)$|^(RI)$|^(SC)$|^(SD)$|^(TN)$|^(TX)$|^(UT)$|^(VT)$|^(VA)$|^(WA)$|^(WV)$|^(WI)$|^(WY)$/;
if(!valState.test(stateVal)) {
    document.getElementById('stateError').innerText = 'You must use two characters and match a state abbreviation.'
    validForm=false;
} else {
    document.getElementById('stateError').innerText = '';
}



//First Name
if(document.getElementById('myName').value == '') {
    document.getElementById('nameError').innerText = 'You must enter a name.'
    validForm=false
} else {
    document.getElementById('nameError').innerText = '';
}
//Last Name
if(document.getElementById('lName').value == '') {
    document.getElementById('lNameError').innerText = 'You must enter a name.'
    validForm=false
} else {
    document.getElementById('lNameError').innerText = '';
}


//City
if(document.getElementById('city').value == '') {
    document.getElementById('cityError').innerText = 'You must enter a city.'
    validForm=false
} else {
    document.getElementById('cityError').innerText = '';
}



//get values for name and city
let nameVal = document.getElementById('myName').value;
let lNameVal = document.getElementById('lName').value;
let cityVal = document.getElementById('city').value;
let tvalue = typeVal.value;


console.log(typeof(nameVal));
if(nameVal=='' ||  cityVal=='') {
    validForm=false;
    console.log('got here');
}



}


function loginArea() {
   

let nText = 'Thank You! We will contact you soon if interested!';
document.getElementById('answerD').innerHTML = nText;
}



document.getElementsByTagName('form')[0].addEventListener('submit', function(event){
    //prevent default form submission
    event.preventDefault();
    //function to validate fields
    validateForm();

    document.getElementsByTagName('form')[0].addEventListener('reset', function(event){})
})