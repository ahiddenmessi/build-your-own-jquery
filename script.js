// DOM ready event
ion(function() {
    
    var $time = ion('.time').addClass('now');
    
    $time.on('click', function() {
        alert(ion(this).text());
    });
    
    ion($time[1]).removeClass('now').text('New content');
});