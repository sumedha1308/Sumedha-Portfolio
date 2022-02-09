{
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const homeSection = document.querySelector('.home-section');
    let isHamburgerOpen = false;
    hamburger.addEventListener('click', () => {
        if (isHamburgerOpen === false) {
            hamburger.classList.add('open');
            nav.classList.add('nav-open');
            homeSection.classList.add('home-section-responsive');
            isHamburgerOpen = true;
        } else {
            hamburger.classList.remove('open');
            nav.classList.remove('nav-open');
            homeSection.classList.remove('home-section-responsive');
            isHamburgerOpen = false;
        }
    });

    nav.addEventListener('click', () => {
        if (nav.className.includes('nav-open')) {
            hamburger.classList.remove('open');
            nav.classList.remove('nav-open');
            homeSection.classList.remove('home-section-responsive');
            isHamburgerOpen = false;
        }
    });
    // eslint-disable-next-line no-console
}
