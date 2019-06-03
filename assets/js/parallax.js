let parallaxAnimation = (e) => {

    let top = document.querySelector(e).getBoundingClientRect().top
    let animation =  anime({
      targets: e,
      translateY: top+1,
      duration: 1000,
      easing: "linear",
      complete: function(anim) {
          parallaxAnimation(e)
      }
    });
    return animation
  }
