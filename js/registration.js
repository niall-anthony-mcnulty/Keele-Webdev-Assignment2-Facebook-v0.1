// Check username isn't in use

$(document).ready(function($) {

    $('#user--name').keyup(function(){ 

        var username = $(this).val().trim();
        if (username != '' ) {

        
            $.ajax({
                method: 'POST',
                url: './check-username.php',
                data: {
                        'username': username,
                        },                    
            }).done((response) => {
                    
                console.log(response);
                
                if (response == 'taken') {
                $('#popup-confirmation').text('Username exists, try another!');
                    }
                else {
                    $('#popup-confirmation').text('');
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
    
    
    
    
});

