$(document).ready(function(){
    
    // $('.navbar-nav>li>a').on('click', function () {
    //     $('.navbar-collapse').collapse('hide');
    // });
 
});


ScrollTrigger.create({  
  trigger: 'section.firstVideo',
  pin: '.videoWrap1',
  start: 'top top',
  endtrigger: '.circle-block',
  end: () => 'bottom top-=' + window.innerHeight, 
})

var circles = gsap.utils.toArray('.circle')

circles.forEach((circle, i) => {
  var circleFade = gsap.fromTo(circle, { autoAlpha: 0 }, { duration: 0.1, autoAlpha: 1 }, 0)
  ScrollTrigger.create({  
    trigger: circle,
    //start: 'top center',
    start: 'top bottom',
    end: 'bottom center',
    animation: circleFade,
    scrub: true,
  })   

});



ScrollTrigger.create({  
  trigger: 'section.secondVideo',
  pin: '.videoWrap2',
  start: 'top top',
  endtrigger: '.circle-block2',
  //end: 'bottom top-=' + window.innerHeight, 
  end: () => 'bottom top-=' + window.innerHeight, 
})

var circles2 = gsap.utils.toArray('.circle2')

circles2.forEach((circle2, i) => {
  var circleFade2 = gsap.fromTo(circle2, { autoAlpha: 0 }, { duration: 0.1, autoAlpha: 1 }, 0)
  ScrollTrigger.create({  
    trigger: circle2,
    //start: 'top center',
    start: 'top bottom',
    end: 'bottom center',
    animation: circleFade2,
    scrub: true,
  })   
  
});

