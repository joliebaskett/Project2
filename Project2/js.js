topNumber = 0;

$(window).scroll(function(){




	/*line & lure*/

var topNumber = $(window).scrollTop();

	$("#line").css({
		"height": topNumber + "px"
	});

	$("#lure").css({
		"top": 370 + topNumber + "px"
	});

});





/* viewfinder*/

$(window).scroll(function(){

//console.log("scroller works");
  

function isScrolledIntoView(elem) {
 var docViewTop = $(window).scrollTop();
 var docViewBottom = docViewTop + $(window).height();
 var elemTop = $(elem).offset().top;
 var elemBottom = elemTop + $(elem).height();
 
  return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
//returns from this function a boolean of true or false
		}  


var myelement1 = $('#four');
		    if(isScrolledIntoView(myelement1)) {
		        console.log("I can see you now!") 
		    }
		     else {
		        console.log("Where area you?")
		    }

});



/*following is not my js, father-in-law's js!!!*/


/**
 * Adds support for the special browser events 'scrollstart' and 'scrollstop'.
 *fadeIn and fadeOut effects for text boxes*/

(function(){

    var special = jQuery.event.special,
        uid1 = 'D' + (+new Date()),
        uid2 = 'D' + (+new Date() + 1);

    special.scrollstart = {
        setup: function() {

            var timer,
                handler =  function(evt) {

                    var _self = this,
                        _args = arguments;

                    if (timer) {
                        clearTimeout(timer);
                    } else {
                        evt.type = 'scrollstart';
                        jQuery.event.handle.apply(_self, _args);
                    }

                    timer = setTimeout( function(){
                        timer = null;
                    }, special.scrollstop.latency);

                };

            jQuery(this).bind('scroll', handler).data(uid1, handler);

        },
        teardown: function(){
            jQuery(this).unbind( 'scroll', jQuery(this).data(uid1) );
        }
    };

    special.scrollstop = {
        latency: 300,
        setup: function() {

            var timer,
                handler = function(evt) {

                    var _self = this,
                        _args = arguments;

                    if (timer) {
                        clearTimeout(timer);
                    }

                    timer = setTimeout( function(){

                        timer = null;
                        evt.type = 'scrollstop';
                        jQuery.event.handle.apply(_self, _args);

                    }, special.scrollstop.latency);

                };

            jQuery(this).bind('scroll', handler).data(uid2, handler);

        },
        teardown: function() {
            jQuery(this).unbind( 'scroll', jQuery(this).data(uid2) );
        }
    };

})();

var TO = false;
var scroll_static = true;
$(document).ready(function(){



	$(window).scroll(function(){

		$('.textBox').fadeOut(500);			// fadeout effect for text boxes
		if( scroll_static ){
			console.log('start scrolling');
			scroll_static = false;

		}

		if(TO !== false){
			clearTimeout(TO);

		}
		TO = setTimeout(stoppedScrolling, 200);
	});


});

function stoppedScrolling(){

	scroll_static = true;
	console.log('stopped scrolling');
	$('.textBox').fadeIn(1000);					// fade the text boxes back in when the scroll stops
}
