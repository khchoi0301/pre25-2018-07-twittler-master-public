$(document).ready(function () {

    var $body = $('body');
    $body.html('');

    $body.append($('<header>'));
    $('header').append($('<home>'));
    $('header').append($('<write>'));
    $('write').append($('<h2> I D <input id=user> <button id=btn> 입력 </button><h2> TEXT <input id=text><p>'))

    $body.append($('<main>'));
    $('main').append($('<nav>'));
    $('home').append('<img width=150px height=150px  src= "https://pbs.twimg.com/profile_images/1013798240683266048/zRim1x6M_400x400.jpg">')
    $('main').append($('<tw>'));
    $('main').append($('<aside>'));

    $body.append($('<footer>'))


    $('#btn').on('click', function () {
        console.log($('#text').val(), $('#user').val());
        writeTweet($('#text').val(), $('#user').val());
        showTwittler();
    })

    $('div').on('click', function () {
        console.log(($(this).html()).substr(1))
        showSelUser(($(this).html()).substr(1));
    })

    $('home').on('click', function () {
        showTwittler();
    })

    showTwittler()
    setInterval(showTwittler, 20000)

});