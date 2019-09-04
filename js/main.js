jQuery(document).ready(function(){

    var header = $('.main');
    
    window.onscroll = function(){

        if(window.pageYOffset > header.height()){
            header.addClass('main__move');
        } else{
            header.removeClass('main__move');
        }
    }



    $('.navigation').on('click', function(e){
        e.preventDefault();
        $(this).addClass('slide__open');
        $('.slide__out__main').toggleClass('slide__open');

        if($('.slide__out__main').hasClass('slide__open')){
            $('.menu__close').on('click', function(e){
                e.preventDefault();
                $('.slide__out__main').removeClass('slide__open');
            })
        }
    })

    $('.switch__toggles').find('.company').on('click', function(){
       $(this).addClass('active');
       $('.individual').removeClass('active');
       $(this).closest('.switch__toggles').addClass('active');
       $('.starter').removeClass('plan__active');
       $('.pro').addClass('plan__active');
    })



    $('.switch__toggles').find('.individual').on('click', function(){
        $(this).addClass('active');
        $('.company').removeClass('active');
        $(this).closest('.switch__toggles').removeClass('active');
        $('.pro').removeClass('plan__active');
       $('.starter').addClass('plan__active');
     })


     var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null // optional scroll container selector, otherwise use window
        }
      );
      wow.init();

});