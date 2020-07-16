function updateUserInfo(data){
    var out = "";
    for(var key in data){
        if ( key!== 'id' && typeof data[key] !== "object") {
            out += "<div>"+
                key + ": " + data[key] +
                "</div><br>";
        }
    }
    $("#user").html(out);
}

function updateUserPosts(data){
    var out = "";
    //pulling out just the first post
    for(var key in data[0]){
        if ( key!== 'id' && typeof data[0][key] !== "object") {
            out += "<div>"+
                key + ": " + data[0][key] +
                "</div><br>";
        }
    }
    $("#post").html(out);
}

function updatePostComments(data){
    var out = "";
    //pulling out just the first post
    for(var i=0; i<data.length; i++) {
        for(var key in data[i]){
            if ( key!== 'id' && typeof data[i][key] !== "object") {
                out += "<div>"+
                    key + ": " + data[i][key] +
                    "</div><br>";
            }
        }
        out+="<hr/>"
    }
    $("#comments").html(out);
}

function fetchUserInfo(userId, callback, err){
    $.ajax("https://jsonplaceholder.typicode.com/users/"+userId, {
        success: function(data) {
            setTimeout(function(){
                callback(data)
            },1000);
        },
        error: err
    });
}

function fetchUserPosts(userId, callback, err) {
    $.ajax("https://jsonplaceholder.typicode.com/posts/?userId="+userId, {
        success: function(data) {
            setTimeout(function(){
                callback(data)
            },1000);
        },
        error: err
    });
}

function fetchPostComments(postId, callback, err) {
    $.ajax("https://jsonplaceholder.typicode.com/posts/"+postId+"/comments", {
        success: function(data) {
            setTimeout(function(){
                callback(data)
            },1000);
        },
        error: err
    });
}

function errCallback(data){
    console.log("Error:" + data.status);
}

// Callback Hell
fetchUserInfo("2", function(user){
    // console.log(data);
    updateUserInfo(user);
   
    fetchUserPosts(user.id, function(posts){
        updateUserPosts(posts);
       
        fetchPostComments(posts[0].id, function(comments){
            updatePostComments(comments)
        }, errCallback);
       
    }, errCallback);
   
}, errCallback);



// function getUserName(callback){
//     var name;
//     $.get('https://randomuser.me/api/',  function(data) {
//             name = data.results[0].name.first
//                     + " " + data.results[0].name.last;
//             callback(name);
//     });
// }

// var username ;

// function callback(res){
//     username = res;
//     document.write("Name: " + username);
// }

// getUserName(callback);