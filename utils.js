function showTwittler() {
    $('tr').remove();

    var index = streams.home.length - 1;
    while (index >= 0) {
        var tweet = streams.home[index];
        var $tweet = $('<td>').appendTo($('<tr>').appendTo($('tw')));

        $('<div id=twuser>').html('@' + tweet.user).appendTo($tweet);
        $('<div>').text(tweet.message).appendTo($tweet);
        $('<div>').html(tweet.created_at + '<img width=30px src= "https://i2.wp.com/aquaprosprinklers.com/wp-content/uploads/2018/02/TWITTER.png?w=720&ssl=1">').appendTo($tweet);

        index -= 1;
    }

    $('div#twuser').on('click', function () {
        showSelUser(($(this).html()).substr(1));
    })
}


function showSelUser(seletUser) {
    $('tr').remove();
    var index = streams.home.length - 1
    while (index >= 0) {
        var tweet = streams.home[index];
        if (seletUser == tweet.user) {
            console.log(seletUser, tweet.user, index)
            var $tweet = $('<td>').appendTo($('<tr>').appendTo($('tw')));
            $('<div id=twuser>').html('@' + tweet.user).appendTo($tweet);
            $('<div>').text(tweet.message).appendTo($tweet);
            $('<div>').html(tweet.created_at + '<img width=30px src= "https://i2.wp.com/aquaprosprinklers.com/wp-content/uploads/2018/02/TWITTER.png?w=720&ssl=1">').appendTo($tweet);
            index--;
        }
        index--;
    }
}
