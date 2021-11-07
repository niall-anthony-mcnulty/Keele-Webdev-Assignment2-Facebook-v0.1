// Check password and username are correct - authentication

$(document).ready(function($) {

   // Stop form submit if the authentication fails
   $('form#login-form').one('submit', function myFormSubmitCallBack(e) {

    e.stopPropagation();
    e.preventDefault();
    var $this = $(this);

    var password = $('#password-auth').val();
    var email = $('#email-auth').val();

    // ajax call to check if password and email match in database 
    
    $.ajax({
        method: 'POST',
        url: 'php/login-auth.php',
        data: {
                'email': email,
                'password':password,
                },                    
    }).done((response) => {
        
        if (response == 'confirmed') {
            
            $this.submit();
            }
        
        else {
            
            $('.bad-authorisation-message').text('Username or password is incorrect. Try again!');
            $this.one('submit', myFormSubmitCallBack);
            }
        
        });

   });

});