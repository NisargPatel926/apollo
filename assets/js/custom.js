(function ($) {
    "use strict";
    $(window).on("scroll", function () {
        if ($('#no-sticky-header').length) {
            return;
        }
    
        if ($("header").length) {
            var headerScrollPos = 300;
            var stricky = $(".main-header");
    
            if ($(window).scrollTop() > headerScrollPos) {
                setTimeout(function () {
                    stricky.addClass("sticky-fixed");
                });
                stricky.addClass("sticky-header--cloned");
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass("sticky-fixed");
                stricky.removeClass("sticky-header--cloned");
            }
        }
    });

    if ($(".preloader").length) {
        //Preloader
        $(window).on('load', function () {
            if ($('.preloader').length) {
                $('.preloader').delay(2500).fadeOut(100);
            }
        });
    }
    if ($(".odometer").length) {
        $(".odometer").each(function () {
            var $this = $(this);
            
            // Appear Plugin ka use karke har odometer alag se trigger karein
            $this.appear(function () {
                var countNumber = $this.attr("data-count");
                $this.html(countNumber);
            }, { accY: 0 });
        });
    }
    
   
    if ($('.main-header').length) {
        // search popup
        $('.search-btn').on('click', function () {
            $('body').addClass('search-active');
        });
        $(' .close-search').on('click', function () {
            $('body').removeClass('search-active');
        });
    }
    if ($('.header-menu-collaps').length) {
        // mobail nav
        $(".header-menu-collaps").click(function () {
            $(".mobile-nav-wrapper").addClass("expanded");
        });
        $(".mobile-nav-toggler").click(function () {
            $(".mobile-nav-wrapper").removeClass("expanded");
        });
        $(".header-menu-collaps").click(function () {
            $("body").addClass("locked");
        });
        $(".mobile-nav-toggler").click(function () {
            $("body").removeClass("locked");
        });

    }
    if ($('.header-side-menu').length) {
        // side menu
        $(".header-side-menu").click(function () {
            $(".side-menu-wrapper").addClass("expanded");
        });
        $(".side-menu-toggler").click(function () {
            $(".side-menu-wrapper").removeClass("expanded");
        });
        $(".header-side-menu").click(function () {
            $("body").addClass("locked");
        });
        $(".side-menu-toggler").click(function () {
            $("body").removeClass("locked");
        });

    }
    if ($(".mobile-nav-container .mobile-menu-list").length) {
        // mobaile nav bar 
        let dropdownAnchor = $(
            ".mobile-nav-container .mobile-menu-list .dropdown > a"
        );
        dropdownAnchor.each(function () {
            let self = $(this);
            let toggleBtn = document.createElement("BUTTON");
            toggleBtn.setAttribute("aria-label", "dropdown toggler");
            toggleBtn.innerHTML = "<i class='fa-solid fa-angle-right'></i>";
            self.append(function () {
                return toggleBtn;
            });
            self.find("button").on("click", function (e) {
                e.preventDefault();
                let self = $(this);
                self.toggleClass("expanded");
                self.parent().toggleClass("expanded");
                self.parent().parent().children("ul").slideToggle();
            });
        });
    }
    $(document).ready(function () {
        if ($('.banner-slider').length) {
            var $slider = $('.banner-slider');
    
            $slider.slick({
                speed: 1000,
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                dots: true, // Enable dots for pagination
                arrows: false, // Disable arrow navigation
                customPaging: function (slider, i) {
                    // Return just an empty button with a class to style as a dot
                    return '<button class="slick-dot"></button>'; // No text inside the button
                }
            });
        }
    });
    if ($('.testimonial-slider-one').length) {
        // testimonial-one slider
        $('.testimonial-slider-one').slick({
            speed: 500,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        })
    }
    if ($('.project-slider').length) {
        // testimonial-one slider
        $('.project-slider').slick({
            speed: 500,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: '.project-slider-btn  .pre-arrow ',
            nextArrow:'.project-slider-btn  .next-arrow' ,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ] 
        })
    }

    // wow animation
    if ($(".wow").length) {
        var wow = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            mobile: true,
            live: true
        });
        wow.init();
    }
   


    // ---------------video-popup
    if ($(".video-play-one,.why-choose-play-btn").length) {
        $('.video-play-one a ,.why-choose-play-btn').YouTubePopUp();
    }

   
    // banner curved-circle
    function loan_cuved_circle() {
        let circleTypeElm = $(".curved-circle--item");
        if (circleTypeElm.length) {
            circleTypeElm.each(function () {
                let elm = $(this);
                let options = elm.data("circle-text-options");
                elm.circleType(
                    "object" === typeof options ? options : JSON.parse(options)
                );
            });
        }
    }

    $(window).on("load", function () {
        loan_cuved_circle();
    });



    // scroll up
    if ($('.prgoress_indicator path').length) {
        var progressPath = document.querySelector('.prgoress_indicator path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).on('scroll', updateProgress);
        var offset = 250;
        var duration = 550;
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.prgoress_indicator').addClass('active-progress');
            } else {
                jQuery('.prgoress_indicator').removeClass('active-progress');
            }
        });
        jQuery('.prgoress_indicator').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        });
    }
    $(document).ready(function () {
        $(".filter-menu-active button").click(function () {
            var filterValue = $(this).attr("data-filter"); // Get the selected category
           
            // Active button styling
            $(".filter-menu-active button").removeClass("active");
            $(this).addClass("active");
    
            // Show only the selected category and hide others
            $(".filter-item").hide();
            $(filterValue).fadeIn();
        });
    });



})
    (window.jQuery);

