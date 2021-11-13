// <<<------------------------------------------------------------------->>> //

//SEARCH USERS //


$(document).on('keyup', '#search-bar-nav' ,function(e) {


    var input_chars = $("#search-bar-nav").val();
    var input_chars = input_chars.toLowerCase();

    if (input_chars.length > 0) {

        $.ajax({
            method: "POST",
            url: 'php/get-friends.php',
            dataType: 'json',
            data: { 'input_chars' : input_chars},
        }).done((output) => {
            $('#user-friends').empty();
            console.log(output);
            for (var i=0; i<(Object.keys(output).length); i++) {
                var post_user = output[i]['userName'];
                console.log(post_user);
                
                var list_names = ("<li class='user-names-list' ><a href='#' class='user-names-list-link'>" + post_user + "</a></li><hr class='search-line'>");
                console.log(list_names);
                $('#user-friends').append(list_names);

            };
        });      
    }
    else {
        $('#user-friends').empty();
    }

});