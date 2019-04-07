$(document).ready(function() {
    $('.add-button').click(function(e) {
        e.preventDefault();
        var inputVal = $('.text-input').val();
        if (inputVal !== '') {
            $('.list').append('<div class="list-item">' + inputVal + '</div>');
            $('.text-input').val('');
        }
    });
});
