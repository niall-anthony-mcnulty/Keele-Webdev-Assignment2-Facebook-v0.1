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

                    feed_contents = ("<div class='feed_blocks'><div class='post-user'>" + post_user + "</div><div class='post-delete-edit-container'>" + "<span class='post-date'>" + post_date + "</span><span class='edit-post'>Edit</span><span class='detele-post'><button class='delete-button' id='delete-button-"+ post_id + "'" + "type='button'>Delete</button></div><div id='individual-posts' class='user_post_" + post_id + "'>" + post_content + "</div><hr class='comment-line-break'><div class='icons'><img class='thumbsup' src='img/like.png'><img alt='logo next comment input' class='comment-icon' src='img/comment.png'></div><hr class='comment-line-break'><div class='comment-container'><div class='individual-comments'><div class='user-comments-each'></div><img class='comment-logo' src='img/logo.png'><form class='comment-forms'><textarea id='myComment' class='input-comment' onkeyup=" + "$(this).height(5);$(this).height($(this).prop('scrollHeight'))" + " placeholder='Write a comment...' maxlength='300' minlength='1' ></textarea></form></div></div></div>");
                    $('.feed-contents').append(feed_contents);
                }
                else {
                    
                    feed_contents = ("<div class='feed_blocks'><div class='post-user'>" + post_user + "</div><div class='post-date'>" + "<span class='post-date'>" + post_date + "</span></div><div id='individual-posts' class='user_post_" + post_id + "'>" + post_content + "</div><hr class='comment-line-break'><div class='icons'><img class='thumbsup' src='img/like.png'><img class='comment-icon' src='img/comment.png'></div><hr class='comment-line-break'><div class='comment-container'><div class='individual-comments'><div class='user-comments-each'></div><img class='comment-logo' src='img/logo.png'><form class='comment-forms'><textarea id='myComment' class='input-comment' onkeyup=" + "$(this).height(5);$(this).height($(this).prop('scrollHeight'))" + " placeholder='Write a comment...' maxlength='300' minlength='1' ></textarea></form></div></div></div>");
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

                    feed_contents = ("<div class='feed_blocks'><div class='post-user'>" + post_user + "</div><div class='post-delete-edit-container'>" + "<span class='post-date'>" + post_date + "</span><span class='edit-post'>Edit</span><span class='detele-post'><button class='delete-button' id='delete-button-"+ post_id + "'" + "type='button'>Delete</button></div><div id='individual-posts' class='user_post_" + post_id + "'>" + post_content + "</div><hr class='comment-line-break'><div class='icons'><img class='thumbsup' src='img/like.png'><img alt='logo next comment input' class='comment-icon' src='img/comment.png'></div><hr class='comment-line-break'><div class='comment-container'><div class='individual-comments'><div class='user-comments-each'></div><img class='comment-logo' src='img/logo.png'><form class='comment-forms'><textarea id='myComment' class='input-comment' onkeyup=" + "$(this).height(5);$(this).height($(this).prop('scrollHeight'))" + " placeholder='Write a comment...' maxlength='300' minlength='1' ></textarea></form></div></div></div>");
                    $('.feed-contents').append(feed_contents);
                }
                else {
                    
                    feed_contents = ("<div class='feed_blocks'><div class='post-user'>" + post_user + "</div><div class='post-date'>" + "<span class='post-date'>" + post_date + "</span></div><div id='individual-posts' class='user_post_" + post_id + "'>" + post_content + "</div><hr class='comment-line-break'><div class='icons'><img class='thumbsup' src='img/like.png'><img class='comment-icon' src='img/comment.png'></div><hr class='comment-line-break'><div class='comment-container'><div class='individual-comments'><div class='user-comments-each'></div><img class='comment-logo' src='img/logo.png'><form class='comment-forms'><textarea id='myComment' class='input-comment' onkeyup=" + "$(this).height(5);$(this).height($(this).prop('scrollHeight'))" + " placeholder='Write a comment...' maxlength='300' minlength='1' ></textarea></form></div></div></div>");
                    $('.feed-contents').append(feed_contents);
                };

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

// ALLOW TEXTAREA TO EXPAND //

$(document).ready(function() {

    $('#myComment').on('input', function() {
        $('#myComment').height = "5px";
        $('#myComment').height = ($('#myComment').scrollHeight)+"px";
    });

});

// SEND TEXTAREA BY ENTER

$(document).ready(function() {

    $('#myThoughts').on('keydown', function (e) {
    // Get the code of pressed key
        const keyCode = e.which || e.keyCode;

        // 13 represents the Enter key
        if (keyCode === 13 && !e.shiftKey) {
            // Don't generate a new line
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

                        feed_contents = ("<div class='feed_blocks'><div class='post-user'>" + post_user + "</div><div class='post-delete-edit-container'>" + "<span class='post-date'>" + post_date + "</span><span class='edit-post'>Edit</span><span class='detele-post'><button class='delete-button' id='delete-button-"+ post_id + "'" + "type='button'>Delete</button></div><div id='individual-posts' class='user_post_" + post_id + "'>" + post_content + "</div><hr class='comment-line-break'><div class='icons'><img class='thumbsup' src='img/like.png'><img alt='logo next comment input' class='comment-icon' src='img/comment.png'></div><hr class='comment-line-break'><div class='comment-container'><div class='individual-comments'><div class='user-comments-each'></div><img class='comment-logo' src='img/logo.png'><form class='comment-forms'><textarea id='myComment' class='input-comment' onkeyup=" + "$(this).height(5);$(this).height($(this).prop('scrollHeight'))" + " placeholder='Write a comment...' maxlength='300' minlength='1' ></textarea></form></div></div></div>");
                        $('.feed-contents').append(feed_contents);
                    }
                    else {
                        
                        feed_contents = ("<div class='feed_blocks'><div class='post-user'>" + post_user + "</div><div class='post-date'>" + "<span class='post-date'>" + post_date + "</span></div><div id='individual-posts' class='user_post_" + post_id + "'>" + post_content + "</div><hr class='comment-line-break'><div class='icons'><img class='thumbsup' src='img/like.png'><img class='comment-icon' src='img/comment.png'></div><hr class='comment-line-break'><div class='comment-container'><div class='individual-comments'><div class='user-comments-each'></div><img class='comment-logo' src='img/logo.png'><form class='comment-forms'><textarea id='myComment' class='input-comment' onkeyup=" + "$(this).height(5);$(this).height($(this).prop('scrollHeight'))" + " placeholder='Write a comment...' maxlength='300' minlength='1' ></textarea></form></div></div></div>");
                        $('.feed-contents').append(feed_contents);
                    };

                    $('#myThoughts').val('');
                };
            });
        };
    });
});

// <<<------------------------------------------------------------------->>> //
// SEND FEED COMMENTS & RETRIEVE //
$(document).ready(function() {

    // Stop form submit if the authentication fails
    $('.comment-forms').on('keydown',function (e) {

        if(e.keyCode == 13) {

            var comment = $('#myComment').val();

            // send comment 
            $.ajax({
                method: 'POST',
                url: 'php/send-comment.php',
                data: {
                    'comment': comment,
                },
                dataType: 'json',
            }).done((output) => {
                // empty feed
                console.log(output);
            });
        };
    });
});
 