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

            $('table.table-each-post').empty()
            console.log(output);
            for (var i=0; i<output.length; i++) {
                var post_user = output[i]['userName'];
                var post_content = output[i]['posts'];
                var post_date = output[i]['postDate'];
            
                table_contents = ("<tbody class='all_posts'><tr class='table-row-content'><td class='post-content'>" + post_content + "</td></tr><tr class='table-row-options'><td class='table-row-userName'>" + post_user + "</td><td class='date-post'>" + post_date + "</td><td class='edit-post'>Edit</td><td class='detele-post'>Delete</td><td class='date-comment'>Comment</td></tr></tbody>");
                $('table.table-each-post').append(table_contents);
            
                $('.myThoughts').val('');
            };
        });
    
    });
 
});

$(document).ready(function() {
    
    $('#myThoughts').on('input', function() {
        $('#myThoughts').height = "5px";
        $('#myThoughts').height = ($('#myThoughts').scrollHeight)+"px";
    });

});


$(document).ready(function() {
    $.ajax({
        method: 'POST',
        url: 'php/get-posts.php',
        dataType: 'json'
    }).done((output) => {
        $('table.table-each-post').empty()
        console.log(output);
        for (var i=0; i<output.length; i++) {
            var post_user = output[i]['userName'];
            var post_content = output[i]['posts'];
            var post_date = output[i]['postDate'];
        
            table_contents = ("<tbody class='all_posts'><tr class='table-row-content'><td class='post-content'>" + post_content + "</td></tr><tr class='table-row-options'><td class='table-row-userName'>" + post_user + "</td><td class='date-post'>" + post_date + "</td><td class='edit-post'>Edit</td><td class='detele-post'>Delete</td><td class='date-comment'>Comment</td></tr></tbody>");
            $('table.table-each-post').append(table_contents);

            };
        });

})