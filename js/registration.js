// Check username isn't in use

$(document).ready(function() {
    var username_state = false;


    $('#userName').blur(function(){ 

        var username = $(this).val();
        if (username == '' ) {

            username_state = false;
            return;
        }

        $.ajax({
            method: 'POST',
            url: './check-username.php',
            data: {
                    'username_check': 1,
                    'username': username,
                    },                    
            dataType: 'text'
        }).done((response) => {
                
            console.log(response)

            if(response == 'taken') {
                username_state = false;
                $('.popup-explanation').text('Username exists, try another!')
            }
            else if (response == 'not_taken') {
                username_state = true;
                $('.popup-explanation').remove();
            }
        
        });
    });


});

