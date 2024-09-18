export const Paasholder = () => {
    const paasButton = document.querySelector('.paasButton');
    const paasImage = document.querySelector('.paasImage');

    const replaceImages = () => {
        const images = document.querySelectorAll('img');
        const imagesPicture = document.querySelectorAll('picture');
        let paasSrc = paasImage.getAttribute('src');
        images.forEach((image) => {
            if (paasSrc != null && !image.classList.contains('logo')) {
                image.setAttribute('src', paasSrc);
            }
        });
        imagesPicture.forEach((image) => {
            let sources = image.querySelectorAll('source');

            sources.forEach((source) => {
                source.setAttribute('srcset', paasSrc);
            });
        });

        const homeVideo = document.querySelector('#homeVideo');

        homeVideo.remove();
    }

    if (paasButton != null) {
        paasButton.addEventListener('click', () => {
            replaceImages();
            setTimeout(() => {
                window.scrollTo({top: 0, behavior: 'smooth'});

                setTimeout(() => {
                    const homeText = document.querySelector('.homeText');
                    homeText.classList.add('!opacity-0');
                    setTimeout(() => {
                        homeText.classList.remove('lg:prose-xl');
                        const newText = "<p>Whoop whoop, applaus voor jou! Je hebt ons goed verstopte easter egg gevonden. Echt, petje af. Klaar voor het volgende level? Klik <a href='https://kennis.webwonders.nl/easter-egg'>hier</a> om naar de supergeheime pagina te gaan. Dit is jouw momentje van roem, dus geniet ervan. En hey, wie weet wat voor leuks er nog meer in het verschiet ligt. Stay tuned!</p>"
                        homeText.classList.remove('!opacity-0');
                        homeText.innerHTML = newText;
                    }, 750);
                }, 750);
            }, 500);
        });
    }
}