$(document).ready(function($) {

    // Stop form submit if the authentication fails
    $('.post-button').on('click', function(e) {
 
    
    e.preventDefault();

    var content = $('#myThoughts').val();
    var date = new Date();
    var horse = 'horse';
 
     // ajax call to check if password and email match in database 
     
    $.ajax({
        method: 'POST',
        url: 'php/send-post.php',
         data: {
                 'content': content,
                 'date':date,
                 'horse' : horse,
                 },                    
     }).done((response) => {
         
        console.log(response);
        if (response == 'confirmed') {
             
            console.log(response);
             }
         
        else {
            
            console.log(response);
        
             }
         
         });
 
    });
 
 });



// $(document).ready(function() {
    
//     $('#myThoughts').on('input', function() {
//         $('#myThoughts').height = "5px";
//         $('#myThoughts').height = ($('#myThoughts').scrollHeight)+"px";
//     });

// });
