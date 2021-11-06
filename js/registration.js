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
                $('.popup-confirmation').text('Username exists, try another!');
                    }
                else {
                    $('.popup-confirmation').text('');
                }
                // else {
                //     if (response == 'not_taken') {
            
                //     $('.popup-explanation').remove();  
                //     } 
                // }  
            })
        }
           
    });
    
});

