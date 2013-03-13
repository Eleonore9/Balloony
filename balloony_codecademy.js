$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            case 76:
                $('.balloonicorn').animate({left: "-=80px"}, 'fast');
				break;
			case 68:
				$('.balloonicorn').animate({top: "+=80px"}, 'fast');
				break;
			case 85:
				$('.balloonicorn').animate({top: "-=80px"}, 'fast');
				break;
			case 82:
				$('.balloonicorn').animate({left: "+=80px"}, 'fast');
				break;
			default:
				break;
		}
	});
});