const cards = [
  {
    title: "Location",
    icon: {
      src: "imgs/location-pin.png",
      alt: "location pin",
    },
    description: {
      text: "Diablo Valley College\nDVC Cafeteria",
      url: "https://goo.gl/maps/JT6zETvxZDiTXjoZ8",
    },
  },
  {
    title: "Date",
    icon: {
      src: "imgs/calendar.png",
      alt: "calendar",
    },
    description: {
      text: "April 28th - 29th",
      url: "",
    },
  },
  {
    title: "Workshops",
    icon: {
      src: "imgs/workshops.png",
      alt: "workshop",
    },
    description: {
      text: "Industry and student-led workshops covering various topics!",
      url: "",
    },
  },
  {
    title: "Eligibility",
    icon: {
      src: "imgs/student_icon.png",
      alt: "student",
    },
    description: {
      text: "All majors encouraged, not just Computer Science! Attendance is limited to DVC students 18+.",
      url: "",
    },
  },
  {
    title: "Teams",
    icon: {
      src: "imgs/group.png",
      alt: "workshop",
    },
    description: {
      text: "Teams can have up to 4 individuals per group. You may only work with one team.",
      url: "",
    },
  },
];
const container = document.getElementById("quick-cards");
const template_card = document.getElementsByClassName("info-card")[0];

cards.forEach((data) => {
  const card = template_card.cloneNode(true);
  card.style.display = "";
  const header = card.children[0];
  const image = card.children[1];
  const description = card.children[2];
  header.textContent = data.title;
  image.src = data.icon.src;
  image.alt = data.icon.alt;
  description.textContent = data.description.text;
  if (data.description.url !== "") {
    card.style.cursor = "pointer";
    card.onmouseenter = function () {
      card.style.backgroundColor = "#128a12";
    };
    card.onmouseleave = function () {
      card.style.backgroundColor = "";
    };
    card.onclick = function () {
      window.open(data.description.url, "_blank").focus();
    };
  }
  container.appendChild(card);
});
