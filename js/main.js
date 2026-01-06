(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex').addClass('navbar-visible');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none').removeClass('navbar-visible');
        }
    });
    


    // Smooth scrolling on the navbar links
    $(".navbar-nav a, .btn-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    // Mobile/Tablet dropdown toggle for Services menu
    var dropdownToggle = function(){
        var $link = $('.dropdown-menu-parent > .nav-link');
        var $caret = $('.dropdown-caret');
        var $menu = $('.dropdown-menu-services');
        var $parent = $('.dropdown-menu-parent');
        var closeTimeout;
        
        // Both link and caret trigger the dropdown on mobile
        $link.on('click', function(e){
            // Check if we're on mobile/tablet (nav is collapsible)
            if($('.navbar-toggler').is(':visible')){
                e.preventDefault();
                e.stopPropagation();
                
                var isOpen = $(this).attr('aria-expanded') === 'true';
                $(this).attr('aria-expanded', !isOpen);
                $menu.stop(true, true).slideToggle(200);
            }
        });
        
        $caret.on('click', function(e){
            // Check if we're on mobile/tablet
            if($('.navbar-toggler').is(':visible')){
                e.preventDefault();
                e.stopPropagation();
                
                var isOpen = $link.attr('aria-expanded') === 'true';
                $link.attr('aria-expanded', !isOpen);
                $menu.stop(true, true).slideToggle(200);
            }
        });
        
        // Desktop: Keep dropdown open on hover with delay
        $parent.on('mouseenter', function(){
            clearTimeout(closeTimeout);
            if(!$('.navbar-toggler').is(':visible')){
                $menu.stop(true, true).slideDown(200);
            }
        });
        
        $parent.on('mouseleave', function(){
            if(!$('.navbar-toggler').is(':visible')){
                closeTimeout = setTimeout(function(){
                    $menu.stop(true, true).slideUp(200);
                }, 150);
            }
        });
        
        // Close dropdown when clicking on a dropdown item
        $menu.on('click', 'a', function(){
            $link.attr('aria-expanded', 'false');
            $menu.slideUp(200);
        });
        
        // Close dropdown when clicking outside
        $(document).on('click', function(e){
            if(!$(e.target).closest('.dropdown-menu-parent').length){
                $link.attr('aria-expanded', 'false');
                $menu.slideUp(200);
            }
        });
    };
    
    dropdownToggle();


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'

        ],
    });

    // Initialize navbar visibility on load (hide over hero, show if scrolled)
    $(function(){
        if($(window).scrollTop() > 200){
            $('.navbar').show().addClass('navbar-visible').css('display','flex');
        } else {
            $('.navbar').hide().removeClass('navbar-visible').css('display','none');
        }
    });

    // Gallery: show 6 items, then load 6 more per click (desktop y móvil)
    $(function(){
        const $items = $('.gallery-item');
        const $btn = $('.btn-load-more');
        if(!$items.length || !$btn.length) return;

        // Ocultar todos y mostrar los primeros 6
        $items.addClass('hidden-item');
        $items.slice(0, 6).removeClass('hidden-item');

        if($('.gallery-item.hidden-item').length === 0){
            $btn.addClass('hidden');
            return;
        }

        $btn.off('click').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();

            const $hidden = $('.gallery-item.hidden-item');
            $hidden.slice(0, 6).removeClass('hidden-item');

            if($('.gallery-item.hidden-item').length === 0){
                $btn.addClass('hidden');
            }
        });
    });

})(jQuery);



