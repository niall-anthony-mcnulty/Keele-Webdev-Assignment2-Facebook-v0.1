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
            console.log(output)
            // get session-user
            var session_user = output['session-user'];
            var user_type = output['session-type'];
            for (var i=0; i<(Object.keys(output).length)-2; i++) {
                var post_user = output[i]['userName'];
                var post_content = output[i]['posts'];
                var post_date = output[i]['postDate'];
                var post_id = output[i]['post_id'];
                
                
                if (session_user == post_user) {

                    feed_contents = ("<div class='feed_blocks'><div class='post-user'>" + post_user + "</div><div class='post-delete-edit-container'>" + "<span class='post-date'>" + post_date + "</span><span class='edit-post'>Edit</span><span class='detele-post'><button class='delete-button' id='delete-button-"+ post_id + "'" + "type='button'>Delete</button></div><div id='individual-posts' class='user_post_" + post_id + "'>" + post_content + "</div><hr class='comment-line-break'><div class='icons'><img class='thumbsup' src='img/like.png'><img alt='logo next comment input' class='comment-icon' src='img/comment.png'></div><hr class='comment-line-break'><div class='comment-container'><div class='returned-comments-" + post_id +"'></div><div class='individual-comments'><img class='comment-logo' src='img/logo.png'><form id = 'comment-forms-" +post_id + "' class='comment-forms'><fieldset><textarea id = 'input-comment-" + post_id + "' class='input-comment' onkeyup=" + "$(this).height(5);$(this).height($(this).prop('scrollHeight'))" + " placeholder='Write a comment...' maxlength='300' minlength='1' ></textarea></fieldset></form></fieldset></div></div></div>");
                    $('.feed-contents').append(feed_contents);

                    if (user_type == 'Reader') {

                        $('fieldset').attr("disabled","disabled");
                        $('.input-comment').attr("placeholder", "Reader's can't comment...Sorry!")
                    }
                    else if (user_type == 'Poster') {
                        $('fieldset').removeAttr("disabled");
                        $('.input-comment').attr("placeholder", "Write a comment...")
                    }
                }
                else {
                    
                    feed_contents = ("<div class='feed_blocks'><div class='post-user'>" + post_user + "</div><div class='post-date'>" + "<span class='post-date'>" + post_date + "</span></div><div id='individual-posts' class='user_post_" + post_id + "'>" + post_content + "</div><hr class='comment-line-break'><div class='icons'><img class='thumbsup' src='img/like.png'><img class='comment-icon' src='img/comment.png'></div><hr class='comment-line-break'><div class='comment-container'><div class='returned-comments-" + post_id +"'></div><div class='individual-comments'><img class='comment-logo' src='img/logo.png'><form id = 'comment-forms-" +post_id + "' class='comment-forms'><fieldset><textarea id = 'input-comment-" + post_id + "' class='input-comment' onkeyup=" + "$(this).height(5);$(this).height($(this).prop('scrollHeight'))" + " placeholder='Write a comment...' maxlength='300' minlength='1' ></textarea></fieldset></form></div></div></div>");
                    $('.feed-contents').append(feed_contents);

                    if (user_type == 'Reader') {

                        $('fieldset').attr("disabled","disabled");
                        $('.input-comment').attr("placeholder", "Reader's can't comment...Sorry!")
                    }
                    else if (user_type == 'Poster') {
                        $('fieldset').removeAttr("disabled");
                        $('.input-comment').attr("placeholder", "Write a comment...")
                    }
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
        var user_type = output['session-type'];
            for (var i=0; i<(Object.keys(output).length)-2; i++) {
                var post_user = output[i]['userName'];
                var post_content = output[i]['posts'];
                var post_date = output[i]['postDate'];
                var post_id = output[i]['post_id'];
                
                if (session_user == post_user) {

                    feed_contents = ("<div class='feed_blocks'><div class='post-user'>" + post_user + "</div><div class='post-delete-edit-container'>" + "<span class='post-date'>" + post_date + "</span><span class='edit-post'>Edit</span><span class='detele-post'><button class='delete-button' id='delete-button-"+ post_id + "'" + "type='button'>Delete</button></div><div id='individual-posts' class='user_post_" + post_id + "'>" + post_content + "</div><hr class='comment-line-break'><div class='icons'><img class='thumbsup' src='img/like.png'><img alt='logo next comment input' class='comment-icon' src='img/comment.png'></div><hr class='comment-line-break'><div class='comment-container'><div class='returned-comments-" + post_id +"'></div><div class='individual-comments'><img class='comment-logo' src='img/logo.png'><form id = 'comment-forms-" +post_id + "' class='comment-forms'><fieldset><textarea id = 'input-comment-" + post_id + "' class='input-comment' onkeyup=" + "$(this).height(5);$(this).height($(this).prop('scrollHeight'))" + " placeholder='Write a comment...' maxlength='300' minlength='1' ></textarea></fieldset></form></fieldset></div></div></div>");
                    $('.feed-contents').append(feed_contents);

                    if (user_type == 'Reader') {

                        $('fieldset').attr("disabled","disabled");
                        $('.input-comment').attr("placeholder", "Reader's can't comment...Sorry!")
                    }
                    else if (user_type == 'Poster') {
                        $('fieldset').removeAttr("disabled");
                        $('.input-comment').attr("placeholder", "Write a comment...")
                    }
                }
                else {
                    
                    feed_contents = ("<div class='feed_blocks'><div class='post-user'>" + post_user + "</div><div class='post-date'>" + "<span class='post-date'>" + post_date + "</span></div><div id='individual-posts' class='user_post_" + post_id + "'>" + post_content + "</div><hr class='comment-line-break'><div class='icons'><img class='thumbsup' src='img/like.png'><img class='comment-icon' src='img/comment.png'></div><hr class='comment-line-break'><div class='comment-container'><div class='returned-comments-" + post_id +"'></div><div class='individual-comments'><img class='comment-logo' src='img/logo.png'><form id = 'comment-forms-" +post_id + "' class='comment-forms'><fieldset><textarea id = 'input-comment-" + post_id + "' class='input-comment' onkeyup=" + "$(this).height(5);$(this).height($(this).prop('scrollHeight'))" + " placeholder='Write a comment...' maxlength='300' minlength='1' ></textarea></fieldset></form></div></div></div>");
                    $('.feed-contents').append(feed_contents);

                    if (user_type == 'Reader') {

                        $('fieldset').attr("disabled","disabled");
                        $('.input-comment').attr("placeholder", "Reader's can't comment...Sorry!")
                    }
                    else if (user_type == 'Poster') {
                        $('fieldset').removeAttr("disabled");
                        $('.input-comment').attr("placeholder", "Write a comment...")
                    }
                };
            }
        });
})

// <<<------------------------------------------------------------------->>> //

// SEND FEED TEXTAREA BY ENTER

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
                console.log(output)
                
                // get session-user
                var session_user = output['session-user'];
                var user_type = output['session-type'];
                for (var i=0; i<(Object.keys(output).length)-2; i++) {
                    var post_user = output[i]['userName'];
                    var post_content = output[i]['posts'];
                    var post_date = output[i]['postDate'];
                    var post_id = output[i]['post_id'];
                   
                    
                    if (session_user == post_user) {

                        feed_contents = ("<div class='feed_blocks'><div class='post-user'>" + post_user + "</div><div class='post-delete-edit-container'>" + "<span class='post-date'>" + post_date + "</span><span class='edit-post'>Edit</span><span class='detele-post'><button class='delete-button' id='delete-button-"+ post_id + "'" + "type='button'>Delete</button></div><div id='individual-posts' class='user_post_" + post_id + "'>" + post_content + "</div><hr class='comment-line-break'><div class='icons'><img class='thumbsup' src='img/like.png'><img alt='logo next comment input' class='comment-icon' src='img/comment.png'></div><hr class='comment-line-break'><div class='comment-container'><div class='returned-comments-" + post_id +"'></div><div class='individual-comments'><img class='comment-logo' src='img/logo.png'><form id = 'comment-forms-" +post_id + "' class='comment-forms'><fieldset><textarea id = 'input-comment-" + post_id + "' class='input-comment' onkeyup=" + "$(this).height(5);$(this).height($(this).prop('scrollHeight'))" + " placeholder='Write a comment...' maxlength='300' minlength='1' ></textarea></fieldset></form></fieldset></div></div></div>");
                        $('.feed-contents').append(feed_contents);
    
                        if (user_type == 'Reader') {
    
                            $('fieldset').attr("disabled","disabled");
                            $('.input-comment').attr("placeholder", "Reader's can't comment...Sorry!")
                        }
                        else if (user_type == 'Poster') {
                            $('fieldset').removeAttr("disabled");
                            $('.input-comment').attr("placeholder", "Write a comment...")
                        }
                    }
                    else {
                        
                        feed_contents = ("<div class='feed_blocks'><div class='post-user'>" + post_user + "</div><div class='post-date'>" + "<span class='post-date'>" + post_date + "</span></div><div id='individual-posts' class='user_post_" + post_id + "'>" + post_content + "</div><hr class='comment-line-break'><div class='icons'><img class='thumbsup' src='img/like.png'><img class='comment-icon' src='img/comment.png'></div><hr class='comment-line-break'><div class='comment-container'><div class='returned-comments-" + post_id +"'></div><div class='individual-comments'><img class='comment-logo' src='img/logo.png'><form id = 'comment-forms-" +post_id + "' class='comment-forms'><fieldset><textarea id = 'input-comment-" + post_id + "' class='input-comment' onkeyup=" + "$(this).height(5);$(this).height($(this).prop('scrollHeight'))" + " placeholder='Write a comment...' maxlength='300' minlength='1' ></textarea></fieldset></form></div></div></div>");
                        $('.feed-contents').append(feed_contents);
    
                        if (user_type == 'Reader') {
    
                            $('fieldset').attr("disabled","disabled");
                            $('.input-comment').attr("placeholder", "Reader's can't comment...Sorry!")
                        }
                        else if (user_type == 'Poster') {
                            $('fieldset').removeAttr("disabled");
                            $('.input-comment').attr("placeholder", "Write a comment...")
                        }
                    };

                    $('#myThoughts').val('');
                };
               
            });
        };
    });
});

// <<<------------------------------------------------------------------->>> //
// SEND FEED COMMENTS & RETRIEVE ON ENTER//


$(document).ready(function() {

        
    $('body').on('keydown', '.input-comment', function(e) {
        // Get the code of pressed key
        
        const keyCode = e.which || e.keyCode;

        // 13 represents the Enter key
        if (keyCode === 13 && !e.shiftKey) {
            // Don't generate a new line
            e.preventDefault();
            
            var comment = $(this).val();
            var class_name = $(this).parent().parent().attr('id');
            var post_id = class_name.split('-').pop();
            console.log(post_id);
            $('.returned-comments-' + post_id).empty();

            // send comment 
            $.ajax({
                method: 'POST',
                url: 'php/send-comment.php',
                data: {
                    'post-id': post_id,
                    'comment': comment,
                },
                dataType: 'json',
            }).done((output) => {
                // empty feed
                $('.returned-comments-' + post_id).empty();
                for (var i=0; i<(Object.keys(output).length); i++) {
                    var comment_id = output[i]['comment_id'];
                    var post_id = output[i]['post_id'];
                    var comment = output[i]['comment'];
                    var userName = output[i]['userName'];
                    var commentDate = output[i]['commentDate'];
                    
                    comments_content = ("<div class='individual-comment-container-each'><div class='comment-name-container'><div class='individual-comment-user'>" + userName + "</div><div class='comment-comment'>" + comment + "</div></div><span class='individual-comment-date'>" + commentDate + "</span></div>" );
                    $('.returned-comments-' + post_id).append(comments_content);
                
                };
                $('.input-comment').val('');
            });

        };

    });
});
// BRING UP COMMENTS ON PAGE LOAD //

$(document).ready(function() {

        
    
    // send comment 
    $.ajax({
        method: 'POST',
        url: 'php/get-comment.php',
        dataType: 'json',
    }).done((output) => {
        // empty feed
        for (var i=0; i<(Object.keys(output).length); i++) {
            var post_id = output[i]['post_id'];
            var comment = output[i]['comment'];
            var userName = output[i]['userName'];
            var commentDate = output[i]['commentDate'];
            
            comments_content = ("<div class='individual-comment-container-each'><div class='comment-name-container'><div class='individual-comment-user'>" + userName + "</div><div class='comment-comment'>" + comment + "</div></div><span class='individual-comment-date'>" + commentDate + "</span></div>" );
            $('.returned-comments-' + post_id).append(comments_content);
        
        };
    });

});



 
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
        $(this).parent().parent().parent().remove();

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
                var search_user = output[i]['userName'];
                var search_user_fullName = output[i]['fullName'];
                var list_names = ("<li class='user-names-list' ><a href='profile.php?username=" + search_user + "&name=" + search_user_fullName.split(' ')[0] + "' class='user-names-list-link'>" + search_user + "</a></li><hr class='search-line'>");
                $('#user-friends').append(list_names);

            };
        });      
    }
    else {
        $('#user-friends').empty();
    }

});