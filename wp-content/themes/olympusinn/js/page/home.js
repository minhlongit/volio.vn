jQuery(document).ready(function ($) {
  lottie.loadAnimation({
    container: document.getElementById('home-target'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: homeTarget
  });

  lottie.loadAnimation({
    container: document.getElementById('home-vision'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: homeVision,
    rendererSettings: {
      // viewBoxSize: '80 100 850 800',
    }
  });

  lottie.loadAnimation({
    container: document.getElementById('home-mission'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: homeMission
  });
});
  