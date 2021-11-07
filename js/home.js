$(document).ready(function(){
    
    const feedForm = document.querySelector("form#post-article");

   feedForm.addEventListener("submit", e => {

    e.preventDefault();

    let content = $('#myThoughts').val();
    let date = new Date();
    ass = 'ass';

    $.ajax({

        type: 'POST',
        url: "php/send-post.php",
        data: {
            'content' : content,
            'date' : date,
            'ass' : ass,
          }
    }).done(function (response) {

        console.log(response);
        });
    });

});




$(document).ready(function() {
    
    $('#myThoughts').on('input', function() {
        $('#myThoughts').height = "5px";
        $('#myThoughts').height = ($('#myThoughts').scrollHeight)+"px";
    });

});
