let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #d7d3c1;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #774936;">Estudio para ser programadora y lo amo!!</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
