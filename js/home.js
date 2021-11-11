// <<<------------------------------------------------------------------->>> //

// BRING UP FEED ON SUBMIT AND PAGE LOAD //

$(document).ready(function() {

    // Stop form submit if the authentication fails
    $('#post-article-feed').submit(function (e) {


        e.preventDefault();

        var content = $('#myThoughts').val();


        // ajax call to check if password and email match in database 
        $.ajax({
            method: 'POST',
            url: 'php/send-post.php',
            data: {
                'content': content,
            },
            dataType: 'json',
        }).done((output) => {
            // empty feed
            $('.feed-contents').empty()
            
            // get session-user
            var session_user = output['session-user'];
            for (var i=0; i<(Object.keys(output).length)-1; i++) {
                var post_user = output[i]['userName'];
                var post_content = output[i]['posts'];
                var post_date = output[i]['postDate'];
                var post_id = output[i]['post_id'];
                
                if (session_user == post_user) {

                    feed_contents = ("<div class='user_post_" + post_id + "'>" + post_content + "<span class='user-plus-date'> Post by " + post_user + " at " + post_date + "</span><span class='edit-post'>Edit</span><span class='detele-post'><button scriptclass='delete-button' id='delete-button-"+ post_id + "'" + "type='button'>Delete</button></span></div>");
                    $('.feed-contents').append(feed_contents);
                }
                else {
                    
                    feed_contents = ("<div class='user_post_" + post_id + "'>" + post_content + "<span class='user-plus-date'> Post by " + post_user + " at " + post_date + "</span></div>");
                    $('.feed-contents').append(feed_contents);
                };
            
                $('#myThoughts').val('');
            };
        });
    
    });
 

    $.ajax({
        method: 'POST',
        url: 'php/get-posts.php',
        dataType: 'json'
    }).done((output) => {
        $('.feed-contents').empty()
        var session_user = output['session-user'];
            for (var i=0; i<(Object.keys(output).length)-1; i++) {
                var post_user = output[i]['userName'];
                var post_content = output[i]['posts'];
                var post_date = output[i]['postDate'];
                var post_id = output[i]['post_id'];

                if (session_user == post_user) {

                    feed_contents = ("<div class='user_post_" + post_id + "'>" + post_content + "<span class='user-plus-date'> Post by " + post_user + " at " + post_date + "</span><span class='edit-post'>Edit</span><span class='detele-post'><button scriptclass='delete-button' id='delete-button-"+ post_id + "'" + "type='button'>Delete</button></span></div>");
                    $('.feed-contents').append(feed_contents);
                }
                else {
                    
                    feed_contents = ("<div class='user_post_" + post_id + "'>" + post_content + "<span class='user-plus-date'> Post by " + post_user + " at " + post_date + "</span></div>");
                    $('.feed-contents').append(feed_contents);
                };
        
                $('#myThoughts').val('');

            };
        });
})

// <<<------------------------------------------------------------------->>> //

// DELETE POST VIA DELETE BUTTON


$(document).on('click', '.delete-button' ,function(e) {

    // e.preventDefault();

    var class_name = $(this).attr('id');
    var post_id = class_name.split('-').pop();
    


    $.ajax({
        method: "POST",
        url: 'php/delete-post.php',
        dataType: 'json',
        data: { 'post-id' : post_id},
    }).done((output) => {

        console.log(output);
        $(this).parent().parent().remove();

    });
});
  



// <<<------------------------------------------------------------------->>> //

// ALLOW TEXTAREA TO EXPAND //

$(document).ready(function() {

    $('#myThoughts').on('input', function() {
        $('#myThoughts').height = "5px";
        $('#myThoughts').height = ($('#myThoughts').scrollHeight)+"px";
    });

});