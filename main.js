let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 55,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span class="typewriter">"Una fotografía captura un recuerdo no de como se ve...sino de como se siente". -Lari Muñoz-</span>')
  .pauseFor(2000)
  .deleteChars(10)
  .start();

  