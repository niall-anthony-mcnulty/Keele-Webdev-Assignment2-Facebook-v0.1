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

// <<<------------------------------------------------------------------->>> //

// BRING UP FEED ON SUBMIT AND PAGE LOAD //

$(document).ready(function() {

    // Stop form submit 
    $('#post-article-feed').submit(function (e) {

        function get_query(){
            var url = document.location.href;
            var qs = url.substring(url.indexOf('?') + 1).split('&');
            for(var i = 0, result = {}; i < qs.length; i++){
                qs[i] = qs[i].split('=');
                result[qs[i][0]] = decodeURIComponent(qs[i][1]);
            }
            return result;
            }
        
        
        e.preventDefault();

        var url_vars = get_query();
        var user_name_profile = url_vars['username'];
        console.log(user_name_profile);
        var content = $('#myThoughts-profile').val();

        // ajax call to check if password and email match in database 
        $.ajax({
            method: 'POST',
            url: 'php/send-post-profile.php',
            data: {
                'user_name_profile': user_name_profile,
                'content': content,
            },
            dataType: 'json',
        }).done((output) => {
            // empty feed
            $('.feed-contents').empty()
            // get session-user
            var session_user = output['session-user'];
            var user_type = output['session-type'];
            var profile_user = output['profile-user'];
            for (var i=0; i<(Object.keys(output).length-3); i++) {
                var post_user = output[i]['userName'];
                var post_content = output[i]['posts'];
                var post_date = output[i]['postDate'];
                var post_id = output[i]['post_id'];
                
                if (session_user == profile_user) {

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
    
                $('#myThoughts-profile').val('');

            };

        });
    
    });
 
});

    function get_query(){
        var url = document.location.href;
        var qs = url.substring(url.indexOf('?') + 1).split('&');
        for(var i = 0, result = {}; i < qs.length; i++){
            qs[i] = qs[i].split('=');
            result[qs[i][0]] = decodeURIComponent(qs[i][1]);
        }
        return result;
    };

    var url_vars = get_query();
    var user_name_profile = url_vars['username'];

    $.ajax({
        method: 'POST',
        url: 'php/get-posts-profile.php',
        data: {'user-profile': user_name_profile},
        dataType: 'json'
    }).done((output) => {
        $('.feed-contents').empty()
        var profile_user = output['profile-user'];
        var user_type = output['session-type'];
        var session_user = output['session-user'];
            for (var i=0; i<(Object.keys(output).length)-3; i++) {
                var post_user = output[i]['userName'];
                var post_content = output[i]['posts'];
                var post_date = output[i]['postDate'];
                var post_id = output[i]['post_id'];
                
                if (profile_user == session_user) {

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


// <<<------------------------------------------------------------------->>> //

// SEND FEED TEXTAREA BY ENTER

$(document).ready(function() {

    $('#myThoughts-profile').on('keydown', function (e) {
    // Get the code of pressed key
        const keyCode = e.which || e.keyCode;

        // 13 represents the Enter key
        if (keyCode === 13 && !e.shiftKey) {
            // Don't generate a new line
            e.preventDefault();

            
            function get_query(){
                var url = document.location.href;
                var qs = url.substring(url.indexOf('?') + 1).split('&');
                for(var i = 0, result = {}; i < qs.length; i++){
                    qs[i] = qs[i].split('=');
                    result[qs[i][0]] = decodeURIComponent(qs[i][1]);
                }
                return result;
                }
        
            var url_vars = get_query();
            var user_name_profile = url_vars['username'];
            var content = $('#myThoughts-profile').val();
        
            // ajax call to check if password and email match in database 
            $.ajax({
                method: 'POST',
                url: 'php/send-post-profile.php',
                data: {
                    'user_name_profile': user_name_profile,
                    'content': content,
                },
                dataType: 'json',
            }).done((output) => {
                // empty feed
                $('.feed-contents').empty()
                // get session-user
                var session_user = output['session-user'];
                var user_type = output['session-type'];
                var profile_user = output['profile-user'];
                for (var i=0; i<(Object.keys(output).length-3); i++) {
                    var post_user = output[i]['userName'];
                    var post_content = output[i]['posts'];
                    var post_date = output[i]['postDate'];
                    var post_id = output[i]['post_id'];
                    
                    if (session_user == profile_user) {
    
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
        
                    $('#myThoughts-profile').val('');
    
                };
    
            });
        
        };

    });
});
     
    

// // <<<------------------------------------------------------------------->>> //
// // // SEND FEED COMMENTS & RETRIEVE ON ENTER//


$(document).ready(function() {

        
    $('main').on('keydown', '.input-comment', function(e) {
        // Get the code of pressed key
        
        const keyCode = e.which || e.keyCode;

        // 13 represents the Enter key
        if (keyCode === 13 && !e.shiftKey) {
            // Don't generate a new line
            e.preventDefault();

            
            var comment = $(this).val();
            var class_name = $(this).parent().parent().attr('id');
            var post_id = class_name.split('-').pop();

           // empty feed
            $('.returned-comments-' + post_id).empty();
            $('.input-comment').val('');

            // send comment 
            $.ajax({
                method: 'POST',
                url: 'php/send-comment-profile.php',
                data: {
                    'post-id': post_id,
                    'comment': comment,
                },
                dataType: 'json',
            }).done((output) => {
              
                for (var i=0; i<(Object.keys(output).length); i++) {
                    // var comment_id = output[i]['comment_id'];
                    var post_id = output[i]['post_id'];
                    var comment = output[i]['comment'];
                    var userName = output[i]['userName'];
                    var commentDate = output[i]['commentDate'];
                    
                    comments_content = ("<div class='individual-comment-container-each'><div class='comment-name-container'><div class='individual-comment-user'>" + userName + "</div><div class='comment-comment'>" + comment + "</div></div><span class='individual-comment-date'>" + commentDate + "</span></div>" );
                    $('.returned-comments-' + post_id).append(comments_content);
                    console.log(1);
                
                };
                
            });
            
        };

    });
});
// // BRING UP COMMENTS ON PAGE LOAD //

$(document).ready(function() {

    var url_vars = get_query();
    var user_name_profile = url_vars['username'];

    // send comment 
    $.ajax({
        method: 'POST',
        url: 'php/get-comment-profile.php',
        dataType: 'json',
    }).done((output) => {
        
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

    $('#my-bio').on('input', function() {
        $('#my-bio').height = "5px";
        $('#my-bio').height = ($('#my-bio').scrollHeight)+"px";
    });

});


// <<<------------------------------------------------------------------->>> //
// SUMIT BIO & HIDE & DISPLAY BIO

$(document).on('click', '.bio-submit' ,function(e) {

    e.preventDefault();

    var full_name = $('#full-name-bio').val();
    var mobile_no = $('#mobile-bio').val();
    var nationality = $('#country-bio').val();
    var radio_value = $("input[name='sex-bio']:checked").val();
    
    $('.intro-form-profile').hide()
    $('.intro-form-profile').trigger('reset');

    $.ajax({
        method: "POST",
        url: 'php/send-bio.php',
        dataType: 'json',
        data: { 'full-name' : full_name,
                'mobile-no': mobile_no,
                'nationality': nationality,
                'radio-value': radio_value,
                },
    }).done((output) => {
    
        var full_name = output[0]['fullName'];
        var mobile_no = output[0]['mobileNumber'];
        var radio_value = output[0]['userSex'];
        var nationality = output[0]['userNationality'];
        $('.intro-form-profile').hide()
        append_intro_info = ("<div class='intro-information-container'><div class='full-name-hidden'><div class='name-hidden-full'>Full Name: </div><div class='variable-fullname'>" + full_name + "</div></div><div class='mobile-hidden'><div class='mobile-hidden-full'>Mobile: </div><div class='variable_mobile'>" + mobile_no + "</div></div><div class='sex-hidden'><div class='sex_hidden_full'>Sex: </div><div class='variable_radio'>" + radio_value + "</div></div><div class='nationality-hidden'><div class='nationality_hidden_full'>Nationality: </div><div class='variable_nationality'>"+ nationality +"</div></div>");
        $('#hidden-container-intro').append(append_intro_info);
        $("#edit-bio-button").show();
    });

});

// <<<------------------------------------------------------------------->>> //
// LOAD BIO ON PAGELOAD OR FORM IF NO BIO//
$(document).ready(function() {

    $.ajax({
        method: "POST",
        url: 'php/get-bio.php',
        dataType: 'json',
    }).done((output) => {
        if (output != '') {
            
            var full_name = output[0]['fullName'];
            var mobile_no = output[0]['mobileNumber'];
            var radio_value = output[0]['userSex'];
            var nationality = output[0]['userNationality'];
            append_intro_info = ("<div class='intro-information-container'><div class='full-name-hidden'><div class='name-hidden-full'>Full Name: </div><div class='variable-fullname'>" + full_name + "</div></div><div class='mobile-hidden'><div class='mobile-hidden-full'>Mobile: </div><div class='variable_mobile'>" + mobile_no + "</div></div><div class='sex-hidden'><div class='sex_hidden_full'>Sex: </div><div class='variable_radio'>" + radio_value + "</div></div><div class='nationality-hidden'><div class='nationality_hidden_full'>Nationality: </div><div class='variable_nationality'>"+ nationality +"</div></div>");
            $('#hidden-container-intro').append(append_intro_info);
           
        } else {

            append_bio_form = ("<form class='intro-form-profile'><div class='flex-parent-1'><label class = 'bio-form-labels' id='full-name-bio-label' for='full-name-bio'> What's your full name? </label><input class = 'bio-form' type='text' id='full-name-bio' name='full-name-bio' required></div><div class='flex-parent-2'><label class = 'bio-form-labels' for='mobile-bio'> What's your mobile number? </label><input class = 'bio-form' type='number' id='mobile-bio' name='mobile-bio' pattern='^[0-9]*$'></div><div class='flex-parent-3'><label class = 'bio-form-labels' for='sex-male'> Male </label><input class = 'bio-form male' type='radio' id='sex-male' name='sex-bio' value='Male' required><label class = 'bio-form-labels' for='sex-female'> Female </label><input class = 'bio-form female' type='radio' id='sex-female' name='sex-bio' value='Female'><label class = 'bio-form-labels' for='sex-other'> Other </label><input class = 'bio-form other' type='radio' id='sex-other' name='sex-bio' value='Other'></div><div class='flex-parent-4'><label class = 'bio-form-labels' for='country-bio'> What's your nationality? </label><input class = 'bio-form' type='country' id='country-bio' name='country-bio' required></div><input class = 'bio-submit' type ='submit' value='Send'></form>")
            $('#hidden-container-intro').append(append_bio_form);
            $("#edit-bio-button").hide();

        }
    });

});

// <<<------------------------------------------------------------------->>> //
// RE-LOAD BIO FORM ON EDIT CLICK 

$(document).on('click', '#edit-bio-button' ,function(e) {

    $('#hidden-container-intro').empty();

    
    $.ajax({
        method: "POST",
        url: 'php/get-form-data.php',
        dataType: 'json',
    }).done((output) => {
        
        var full_name = output[0]['fullName'];
        var mobile_no = output[0]['mobileNumber'];
        var radio_value = output[0]['userSex'];
        var nationality = output[0]['userNationality'];
    
        append_bio_form = ("<form class='intro-form-profile'><div class='flex-parent-1'><label class = 'bio-form-labels' id='full-name-bio-label' for='full-name-bio'> What's your full name? </label><input class = 'bio-form' type='text' id='full-name-bio' name='full-name-bio' value='" + full_name +"' required></div><div class='flex-parent-2'><label class = 'bio-form-labels' for='mobile-bio'> What's your mobile number? </label><input class = 'bio-form' type='number' id='mobile-bio' name='mobile-bio' pattern='^[0-9]*$' value=" + mobile_no + "></div><div class='flex-parent-3'><label class = 'bio-form-labels' for='sex-male'> Male </label><input class = 'bio-form male' type='radio' id='sex-male' name='sex-bio' value='Male' required><label class = 'bio-form-labels' for='sex-female'> Female </label><input class = 'bio-form female' type='radio' id='sex-female' name='sex-bio' value='Female'><label class = 'bio-form-labels' for='sex-other'> Other </label><input class = 'bio-form other' type='radio' id='sex-other' name='sex-bio' value='Other'></div><div class='flex-parent-4'><label class = 'bio-form-labels' for='country-bio'> What's your nationality? </label><input class = 'bio-form' type='country' id='country-bio' name='country-bio' value= '" + nationality + "' required></div><input class = 'bio-submit' type ='submit' value='Send'></form>")
        $('#hidden-container-intro').append(append_bio_form);
        

        
    });
});
