$(document).ready(function() {

    $('.signup-form-poster').click(function(){

        $('.popup-explanation').text('You can post, view and comment with the poster option!')
    });

    $('.signup-form-reader').click(function(){

        $('.popup-explanation').text('You can only post and read with the reader option!')
    });


});

$(document).ready(function() {
    
    $('#myThoughts').oninput(function() {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight)+"px";
    })

});
    
$(document).ready(function() {
    
    $('form#registration-form').submit(function(e) {

        var form = this;

        e.preventDefault();


        setTimeout(function() {
            
            $('.registration-submit-form').hide();

            setTimeout(function() {
                
                $('.title-registration-col').after("<span class='success-msg'> Registration was successful!</span>");
                $('.success-msg').css({'justify-content':'center','text-align':'center', 'margin-top':'20%'});
            
                  setTimeout(function() {

                    form.submit();
                    }, 4000);
               
            }, 500);
        
        
        }, 100);
    
    });

        // $('.registration-form').hide();
        // $('.registration-col').append("<h1 class='successful-registration'> Registration was successful! Welcome to Friend<u>Z</u>one </h1>")
        // $('.successful-registration').delay(3000).remove()
        // $('.registration-form').show()
        
})

