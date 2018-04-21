$('#deal-button').click(function () {
    $('#dealer-hand').prepend('<img src="images/cA.png">');
    $('#dealer-hand').prepend('<img src="images/cA.png">');

    $('#player-hand').prepend('<img src="images/cA.png">');
    $('#player-hand').prepend('<img src="images/cA.png">');
});

$('#hit-button').click(function () {
    $('#player-hand').append('<img src="images/dA.png">');
});

