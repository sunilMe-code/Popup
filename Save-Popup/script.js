let checkbox = document.getElementById("checkbox");
let heart = document.getElementById("heart");
let paragraph = document.getElementById("paragraph");
let popup = document.querySelector(".popup");

function iconsAnimation() {
  gsap.to(heart, {
    duration: 0.5,
    top: 10,
    scale: 1,

  })

  gsap.to(heart, {
    delay: 0.2,
    zIndex: 1,
    opacity: 1,

  })

  gsap.to(checkbox, {
    delay: 0.4,
    duration: 0.2,
    opacity: 1,
    scale: 1.4,
  })

  setTimeout(() => {
    checkbox.classList.remove("ri-checkbox-circle-line");
    checkbox.classList.add("ri-checkbox-circle-fill");
  }, 800)

}


function createPopupFirecracker() {
  const colors = ["#f492f0", "#bf0fff", "#f492f0", "#f13c77", "#f5ccd4"];

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div");
    particle.classList.add("heart");

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 120;

    const x = Math.cos(angle) * distance + "px";
    const y = Math.sin(angle) * distance + "px";

    particle.style.setProperty("--x", x);
    particle.style.setProperty("--y", y);

    particle.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    popup.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 700);
  }
}

let count = 1;

function removeAnimation() {
  checkbox.classList.add("ri-checkbox-circle-line");
  checkbox.classList.remove("ri-checkbox-circle-fill");
  checkbox.style.transform = "scale(1)";
  checkbox.style.opacity = 0;
  heart.style.transform = "scale(1.8)";
  heart.style.opacity = 1;
  heart.style.zIndex = 7;
  heart.style.top = "-25px";
  paragraph.textContent = "Are you sure you want to delete this item?"
}

function confirmDelete() {
  iconsAnimation();

  setTimeout(() => {
    createPopupFirecracker();
    paragraph.textContent = "Saved Successfully!"
  }, 600);
  setTimeout(() => {
    popup.style.visibility = "hidden"
  }, 1800);
  setTimeout(() => {
    removeAnimation();
  }, 1800);

  count = 1

}



function closePopup() {
  popup.style.visibility = "hidden";
  count = 1;
}


function savePopup() {
  if (count === 1) {
    popup.style.visibility = "visible";
    count = 0;
  } else {
    popup.style.visibility = "hidden";
    count = 1;
  }
}

