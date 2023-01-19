function checkPassword(){
    let password = document.getElementById('password').value;
    let cnfmPassword = document.getElementById('cnfmpassword').value;

    console.log(password, cnfmPassword);
    let errorMessage = document.getElementById('message')

    if(password.length !=0){
        if(password==cnfmPassword){
            errorMessage.textContent = 'Password Correct';
            errorMessage.style.background = 'green'
        }
        else{
            errorMessage.textContent = `Password Incorrect`
            errorMessage.style.background = 'red'
        }
    }
  else{

    alert(`Password field can't be empty`);
    errorMessage.style.background = '';
  }

}
const button = document.getElementById('btn');

button.addEventListener('click', function(e){
  
  e.preventDefault();
})