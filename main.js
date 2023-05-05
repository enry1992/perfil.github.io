document.addEventListener("DOMContentLoaded", function(event) {
    var $text = document.getElementById("text");
    var text = "Find the passion in your eyes";
    var i = 0;
    $text.style.fontSize = "33px";
    $text.style.color = "blak"; 
    setInterval(() => {
      $text.innerHTML += text.charAt(i);
      i++;
      if (i === text.length) {
        i = 0;
        $text.innerHTML = "";
      }
    }, 100);
  });