function validateform(){
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
}    
//simple validation rule

if (username === ''|| password === '') {
    alert('please fill in all fields');
    return false;
}
//you can add more complex validation rules here//

// if all validation passes, the form will be sure//
return true;