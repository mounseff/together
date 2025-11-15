let startDate = new Date("Nov 16, 2024");
let yes = document.getElementById("yes");
let no = document.getElementById("no");
let counter = setInterval(() => {
  let now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  if (seconds < 0) {
    minutes -= 1;
    seconds += 60;
  }
  if (minutes < 0) {
    hours -= 1;
    minutes += 60;
  }
  if (hours < 0) {
    days -= 1;
    hours += 24;
  }
  if (days < 0) {
    months -= 1;
    let prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent =
    seconds < 10 ? "0" + seconds : seconds;
}, 1000);

function animateCards() {
  const cards = [
    document.querySelector(".card1"),
    document.querySelector(".card2"),
    document.querySelector(".card3"),
  ];

  cards.forEach((card) => (card.style.opacity = "0"));

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("fade-in");
      card.classList.remove("fade-out");

      setTimeout(() => {
        card.classList.remove("fade-in");
        card.classList.add("fade-out");
      }, 3000);
    }, index * 4000);
  });

  setTimeout(animateCards, 12000);
}
yes.onclick = () => {
  document.querySelector(".time-together").classList.add("hidden");
  document.querySelector(".countdown-container").classList.remove("hidden");
  animateCards();
  setInterval(() => {
    document.querySelector(".cards").classList.add("hidden");
  }, 15000);
};
no.onclick = () => {
  let text = document.querySelector(".time-together h2");
  let text2 = document.querySelector(".time-together h5");
  let btn = document.querySelectorAll(".time-together button");
  text.innerHTML = "I'll wait!🥲💔";
  text2.innerHTML = "anty bomh hh😆😠🦉";
  btn[1].style.display = "none";
  btn[0].style.display = "none";
};
// window.addEventListener("load", animateCards);

