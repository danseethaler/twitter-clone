$('.tweet-compose').on('click', function(){
    $('#tweet-controls').css('display', 'block');
    $('.tweet-compose').css('height', '65px');
})

$('.tweet-compose').focusout(function(){
    if ($('.tweet-compose').val().length === 0) {
        $('.tweet-compose').css('height', '32.5px');
        $('#tweet-controls').css('display', 'none');
    }
})

$('.tweet-compose').on('keyup', function () {
    $('#char-count').html(140 - $('.tweet-compose').val().length)
})
