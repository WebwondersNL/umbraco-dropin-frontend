export const scrollVideoPlay = () => {
    if (screen.width < 1024) {
        return;
    }

    const vid = document.querySelector("#homeVideo") as HTMLVideoElement;

    if (vid == undefined) {
        return;
    }

    const vidThumbnail = document.querySelector("#homeVideoThumbnail") as HTMLImageElement;
    const playbackSpeed = vid.dataset.playbackconst != undefined && vid.dataset.playbackconst != "0" ? parseInt(vid.dataset.playbackconst) : 1000;

    const setVideo = () => {
        if (!vid.querySelector("source").src) {
            vid.querySelector("source").src = vid.dataset.src;
            vid.load();
            document.removeEventListener('scroll', setVideo);
            if (vidThumbnail != undefined) {
                vidThumbnail.remove();
            }
        }
    }

    const playVideo = () => {
        let animationId: number;
        let playbackTime = 0;
        let last = +new Date();

        const scrollPlay = () => {
            animationId = window.requestAnimationFrame(scrollPlay);
            const now = +new Date();
            if (now - last >= 33.33) {
                last = now;
                playbackTime = Math.round((window.scrollY / playbackSpeed) * 1000) / 1000;
                if (playbackTime < vid.duration) {
                    vid.currentTime = playbackTime;
                }
            }
        }

        const scrollStop = () => {
            window.cancelAnimationFrame(animationId);
        }

        let callback = (entries: Array<IntersectionObserverEntry>) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    scrollPlay();
                } else {
                    scrollStop();
                    return
                }
            });
        };

        let observer = new IntersectionObserver(callback, {threshold: 0.2});

        observer.observe(vid);

    }

    document.addEventListener('scroll', setVideo);

    if (vidThumbnail == undefined) {
        setVideo();
    }

    playVideo();
}