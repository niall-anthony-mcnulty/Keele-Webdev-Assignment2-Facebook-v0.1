// Check username isn't in use

$(document).ready(function($) {

    $('#user--name').keyup(function(){ 

        var username = $(this).val().trim();
        if (username != '' ) {

        
            $.ajax({
                method: 'POST',
                url: 'php/check-username.php',
                data: {
                        'username': username,
                        },                    
            }).done((response) => {
                    
                console.log(response);
                
                if (response == 'taken') {
                $('#popup-username-confirmation').text('Username exists, try another!');
                    }
                else {
                    $('#popup-username-confirmation').text('');
                    }
            });
    
        }
           
    });


    $('#user--email').keyup(function(){ 

        var userEmail = $(this).val().trim();
        if (userEmail != '' ) {

        // ajax call to check whether email exists
            $.ajax({
                method: 'POST',
                url: 'php/check-email.php',
                data: {
                        'email': userEmail,
                        },                    
            }).done((response) => {
                    
                console.log(response);
                
                if (response == 'taken') {
                $('#popup-email-confirmation').text('Email address exists, try another!');
                    }
                else {
                    $('#popup-email-confirmation').text('');
                    }
            });
    
        }
           
    });


        // Popup for explanaion of users

        $('.signup-form-poster').click(function(){
    
            $('#popup-explanation').text('You can post, view and comment with the poster option!')
        });
    
        $('.signup-form-reader').click(function(){
    
            $('#popup-explanation').text('You can only post and read with the reader option!')
        });
    
    // Stop form submit if email or username already exists 
    $('form#registration-form').one('submit', function myFormSubmitCallBack(e) {

        e.stopPropagation();
        e.preventDefault();
        var $this = $(this);

        if (($('#popup-user-confirmation').text().length == 0) && ($('#popup-email-confirmation').text().length == 0)) {

            $this.submit();
        }
        else {
            $this.one('submit', myFormSubmitCallBack);
        }

    });    
    
});

