const {tns} = require("tiny-slider");

export const createSliders = () => {
    const checkVisiblity = (tnsOptions: any, el: Element) => {
        let callback = (entries: Array<IntersectionObserverEntry>) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    new tns(tnsOptions);
                    observer.unobserve(el);
                }
            });
        };

        let observer = new IntersectionObserver(callback, {threshold: 0});

        observer.observe(el);
    }

    document.querySelectorAll('.logoSlider').forEach(el => {
        let tnsOptions = {
            container: el,
            items: 4,
            gutter: 30,
            autoplay: true,
            speed: 2000,
            autoplayTimeout: 0,
            preventActionWhenRunning: true,
            lazyload: true,
            mouseDrag: true,
            controls: false,
            nav: false,
            autoWidth: false,
            center: true,
            autoplayButtonOutput: false,
        }
        
        checkVisiblity(tnsOptions, el);
    })

    document.querySelectorAll('.image-slider').forEach(el => {
        let tnsOptions = {
            container: el,
            items: 3,
            gutter: 20,
            autoplay: true,
            speed: 4000,
            autoplayTimeout: 0,
            preventActionWhenRunning: true,
            lazyload: true,
            mouseDrag: true,
            controls: false,
            nav: false,
            autoWidth: false,
            center: false,
            autoplayButtonOutput: false,
            responsive: {
                1024: {
                    items: 4,
                    gutter: 30
                }
            }
        }

        new tns(tnsOptions, el);
    })

    document.querySelectorAll('.case-slider').forEach((el : HTMLElement) => {
        const slideCount = +el.dataset.slideCount;
        const sliderContainer = el.querySelector('.sliderContainer');
        let slideBaseDesktop = 4;
        let slideBaseMobile = 3;
        
        if (slideCount <= 4)
        {
            slideBaseDesktop = slideCount;
            
            if (slideCount < 3 || slideCount == 4)
            {
                slideBaseDesktop = 3;
            }
            
            slideBaseMobile = (slideCount - 1);
            
            if (slideBaseMobile < 1)
            {
                slideBaseMobile = 1;
            }
        }
        
        if (slideCount < 4)
        {
            sliderContainer.classList.add('!w-full');
        }
        
        let tnsOptions = {
            container: el.querySelector('.slider-track'),
            items: slideBaseMobile,
            gutter: 20,
            autoplay: true,
            autoplayHoverPause: true,
            speed: 1500,
            autoplayTimeout: 3500,
            autoplayButtonOutput: false,
            mouseDrag: false,
            controls: true,
            controlsContainer: el.querySelector('.next-button'),
            nav: true,
            navAsThumbnails: true,
            navContainer: el.querySelector('.slider-nav'),
            autoWidth: false,
            center: true,
            responsive: {
                1024: {
                    center: false,
                },
                1500: {
                    items: slideBaseDesktop,
                    gutter: 40
                }
            }
        }

        checkVisiblity(tnsOptions, el);

    })

    document.querySelectorAll('.case-slider-compact').forEach((el : HTMLElement) => {
        const slideCount = +el.dataset.slideCount;
        const sliderContainer = el.querySelector('.sliderContainer');
        let slideBaseDesktop = 4;
        let slideBaseMobile = 3;

        if (slideCount <= 4)
        {
            slideBaseDesktop = slideCount;

            if (slideCount < 3 || slideCount == 4)
            {
                slideBaseDesktop = 3;
            }

            slideBaseMobile = (slideCount - 1);

            if (slideBaseMobile < 1)
            {
                slideBaseMobile = 1;
            }
        }
        
        if (slideCount < 4)
        {
            sliderContainer.classList.add('!w-full');
        }
        
        let tnsOptions = {
            container: el.querySelector('.slider-track'),
            items: slideBaseMobile,
            gutter: 20,
            autoplay: true,
            autoplayHoverPause: true,
            speed: 1500,
            autoplayTimeout: 3500,
            autoplayButtonOutput: false,
            mouseDrag: false,
            controls: true,
            controlsContainer: el.querySelector('.next-button'),
            nav: true,
            navAsThumbnails: true,
            navContainer: el.querySelector('.slider-nav'),
            autoWidth: false,
            center: true,
            responsive: {
                1024: {
                    center: false,
                },
                1500: {
                    items: slideBaseDesktop,
                    gutter: 50
                }
            }
        }


        checkVisiblity(tnsOptions, el);
    })
}