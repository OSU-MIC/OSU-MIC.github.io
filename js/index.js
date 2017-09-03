/*
Particles
*/
window.onload = function() {
  Particles.init({
    selector: '.background',
    connectParticles: true, //Default false
    color: "#3e5871", //Default #000000
    maxParticles: 50, //Default 100

    //Change options depending on screen size
    responsive: [
    {
       breakpoint: 600,
       options: { maxParticles: 25}
    }, {
       breakpoint: 100,
       options: { maxParticles: 0 } // disables particles.js
    }
   ]
  });
};
