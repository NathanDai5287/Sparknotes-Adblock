function adbloc() {
    let sidebar = document.getElementsByClassName('layout-wrapper-2018__column layout-wrapper-2018__column--right-rail');
    sidebar[0].remove();

    let bottom = document.getElementsByClassName('more-like-this');
    bottom[0].remove();
}

adbloc();
