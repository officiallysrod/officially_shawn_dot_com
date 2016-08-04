$(document).ready(function() {
  $(".typer-title").typed({
    strings: ["Hi, I'm Shawn and I'm a "],
    typeSpeed: 20,
    backDelay: 1500,
    cursorChar: "",
    onStringTyped: startTyperBody()
  });

  function startTyperBody() {
    $(".typer-body").typed({
      strings: ["", "developer. ", "builder. ", "traveler. ", "fixer. ", "skier. ", "simplifier. "],
      typeSpeed: 20,
      cursorChar: "\u258D",
      backDelay: 1500,
      loop: true
    });
  }

});
