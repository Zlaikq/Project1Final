const colors = [
    "url(https://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_blend.png)",
    "url(https://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/explosion_blue2.png)",
    "url(https://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png)"
  ];
  
  const btn = document.getElementById("btn");
  const color = document.querySelector(".color");
  
  btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundImage = colors[randomNumber];
    color.textContent = colors[randomNumber];
  });
  
  function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }