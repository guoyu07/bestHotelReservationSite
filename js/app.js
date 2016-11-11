var app = angular.module("as", []);

app.directive('sideNavToggle', function(){
    return {
        restrict: 'AE',
        link: function(scope, elem, attr){
            jQuery(document).on('click', '.side-nav li.depart-item', function(e) {
                var selectedDepart = jQuery(this).toggleClass('selected');
                jQuery('.side-nav li.depart-item').not(selectedDepart).removeClass('selected');
                var selectedCat = jQuery(this).next('li.category-item').slideToggle(200);
                jQuery('.side-nav li.category-item').not(selectedCat).hide(200);
            });

            /*jQuery(document).on('click', '.side-nav li.category-item li', function(e) {
                var selectedPage = jQuery(this).addClass('selected');
                jQuery('.side-nav li.category-item li').not(selectedPage).removeClass('selected');
            });*/
        }
    }
});

app.directive('mainPageSlider',['$timeout', function($timeout){
    return {
        restrict: 'AE',
        link: function(scope, elem, attr){
            jQuery(".anim-slider").animateSlider(
                {
                    autoplay    :   true,   //starts the autoplay
                    interval    :   1000,
                    animations 	:
                    {
                        0	: 	//Slide No1
                        {
                            li	:
                            {
                                show   	  : "fadeIn",
                                hide 	  : "fadeOutLeftBig",
                                delayShow : "delay0.5s"
                            }
                        },
                        1	: //Slide No2
                        {
                            li			:
                            {
                                show 		: "fadeInLeft",
                                hide 		: "fadeOutLeftBig",
                                delayShow   : "delay0-5s"
                            }
                        },
                        2:
                        {
                            li			:
                            {
                                show 		: "fadeInUp",
                                hide 		: "fadeOutDownBig",
                                delayShow   : "delay0-5s"
                            }
                        }
                    }
                });

            /* Auto play fix for the main slider */
            function autoPlayMainSlider (){
                jQuery(".anim-arrows-next").click();
                $timeout(function() {
                    autoPlayMainSlider();
                }, 4000);
            }
            $timeout(function() {
                autoPlayMainSlider();
            }, 5000);
        }
    }
}]);

app.directive('cardFlipEffect',function(){
    return {
        restrict: 'AE',
        link: function(scope, elem, attr){
            var cards = document.querySelectorAll(".card.effect__click");
            for ( var i  = 0, len = cards.length; i < len; i++ ) {
                var card = cards[i];
                clickListener( card );
            }

            function clickListener(card) {
                var link = card.querySelector(".change-size");
                link.addEventListener( "click", function() {
                    var c = card.classList;
                    c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
                });
            }
        }
    }
});