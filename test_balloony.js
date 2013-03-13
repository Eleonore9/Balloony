function Character(name, right, top) {
	this.name = name;
	this.right = right;
	this.top = top;
	this.move = function(char) {
		switch(parseInt(key.which,10)) {
            case 76:
                char.animate({left: "-=80px"}, 'fast');
				break;
			case 68:
				char.animate({top: "+=80px"}, 'fast');
				break;
			case 85:
				char.animate({top: "-=80px"}, 'fast');
				break;
			case 82:
				char.animate({left: "+=80px"}, 'fast');
				break;
			default:
				break;
		}
	};
};
var ballooni = new Character('balloonicorn', , );


function HiddenThing(name, right, top) {
	this.name = name;
	this.right = right;
	this.top = top;
	this.disappear = function(thing) {
		thing.css('display', 'none');
	};
	this.appear = function(thing) {
		thing.css('display', 'inline');
	};
};
var rainbow = new HiddenThing('rainbow', , );