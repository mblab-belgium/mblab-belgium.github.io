window.addEventListener("scroll", function() {
  var header = document.querySelector('.header');
  var sidenav = document.querySelector('.sidenav');
  var article = document.querySelector(".article");
  var headerHeight = header.offsetHeight;
  var sidenavWidth = sidenav.offsetWidth;
  var sidenavPosition = sidenav.style.position;

  if (window.scrollY >= headerHeight) {
    sidenav.style.position = 'fixed';
    sidenav.style.top = '0px';
    sidenav.style.bottom = '0px';
    article.style.marginLeft = sidenavWidth + 'px';
  }
    else if(window.scrollY < headerHeight) {
        sidenav.style.position = 'static';
        article.style.marginLeft = 0;
    }
});
