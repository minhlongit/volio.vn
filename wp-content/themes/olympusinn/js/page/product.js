jQuery(document).ready(function ($) {
    lottie.loadAnimation({
      container: document.getElementById('product-game-casual'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: productGameCasual,
      rendererSettings: {
        viewBoxSize: '100 100 800 800',
      }
    });
  
    lottie.loadAnimation({
      container: document.getElementById('product-game-action'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: productGameAction,
      rendererSettings: {
        viewBoxSize: '80 100 850 900',
      }
    });
  
    lottie.loadAnimation({
      container: document.getElementById('product-horse'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: productHorse,
      rendererSettings: {
        viewBoxSize: '150 150 1100 1350',
      }
    });
  });
    