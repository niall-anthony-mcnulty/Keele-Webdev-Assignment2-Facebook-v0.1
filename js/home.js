
$(document).ready(function() {
    
    $('#myThoughts').on('input', function() {
        $('#myThoughts').height = "5px";
        $('#myThoughts').height = ($('#myThoughts').scrollHeight)+"px";
    })

});