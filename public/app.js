console.log('Client-Sided JS')

$(document).ready(function () {

    //Splash Screen
    const splash = document.querySelector('.splash-screen');
    setTimeout(() => {
        splash.classList.add('display-none');
    }, 2500)

    //For smooth anchor link tag animation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    
    //Toggle Accordion Menu
    $('.accordion i').click(() => {
        $('.navbar').toggleClass('active');
        $('.accordion i').toggleClass('active')
    })

    $('a').click(() => {
        $('.navbar').removeClass('active');
        $('.accordion i').removeClass('active')
    })

    //Change navbar color when scrolling
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY === 0) {
            $('.nav').addClass('extra')
            setTimeout(() => {
                $('.nav').removeClass('extra');
            }, 300)
        }
        if (this.scrollY > 20) {
            $('.nav').addClass("landingpage");

            if (this.scrollY > 600) {
                $('.nav').addClass('aboutme')

            } else {
                $('.nav').removeClass('aboutme');

            }

            if (this.scrollY > 1520) {
                $('.nav').addClass('whatdefinesme');

            } else {
                $('.nav').removeClass('whatdefinesme');

            }

            if (this.scrollY > 2300) {
                $('.nav').addClass('projectinfo');
            } else {
                $('.nav').removeClass('projectinfo');
            }


            if (this.scrollY > 2900) {
                $('.nav').addClass('contactinfo');
            } else {
                $('.nav').removeClass('contactinfo');
            }

        } else {
            $('.nav').removeClass("landingpage");
            $('.nav').removeClass('aboutme');
            $('.nav').removeClass('whatdefinesme');
            $('.nav').removeClass('projectinfo');
            $('.nav').removeClass('contactinfo');
            $('.about').removeClass('fade-in');
        }

    });

    // typing text animation script

    setTimeout(() => {
        var typed = new Typed("#text", {
            strings: ['  A third-year BSIT undergraduate.',
                '  An aspiring Developer. ',
                '  Dreaming to be a Full-Stack Developer',
                '  Eager to learn anything.',
                '  A cup of coffee helps. ',
                '  Frustrations can\'t stop me from learning.',
                '  Improvement is a must. ',
                '  No pain, No gain. '
            ],
            typeSpeed: 80,
            backSpeed: 40,
            loop: true
        });
    }, 4200);

});

