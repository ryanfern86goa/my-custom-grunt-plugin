var number = 0;
window.addEvent('domready', function(){
	$('showcase').getElements('.bigimage').each(function(i,x) {
		i.setStyles({'opacity':'0'});
	});
	$('showcase-nav').getElements('li').each(function(i,x) {
		i.addEvent('click', function(event){
			event.stop();
			showshowcase(x);
			number = x;
		});
	});
});
window.addEvent('load', function(){
	animation();
});
function animation() {
	var nav = $('showcase-nav');
	if (number > nav.getElements('li').length-1) {number = 0;}
	var fx = nav.effects({duration: 1200, transition: Fx.Transitions.Quart.easeOut});
	fx.start().chain(
		function(){this.start(showshowcase(number));},
		function(){this.start(number = number + 1);},
		function(){this.start(animation());}
	);
}
function showshowcase(number) {
	activatethumbnail(number);
	var big = 'showcase-' + number + '-big';
	$('showcase-loader').setStyles({'display':'none'});
	$('showcase').getElements('.bigimage').each(function(i) {
		var fx = $(i).effects({duration: 1000, transition: Fx.Transitions.Quart.easeOut});
		if (i.get('id') !== big) {
			fx.start({'opacity':'0'});
		}
		else {
			fx.start({'opacity':'1'});
		}
	});
}
function activatethumbnail(number) {
	$('showcase-nav').getElements('li').each(function(i,x) {
		if (x == number) {
			i.addClass('active');
		}
		else {
			i.removeClass('active');
		}
	});
}