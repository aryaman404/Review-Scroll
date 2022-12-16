const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    img: "/image/pic2.jpg",
    text: "I’m Susan Smith. I’m a designer who codes. I'm also the author of Laying the Foundations (a book about design systems, web design, and product design). I’ve worked internationally, in-house, and remotely on projects for leading brands, agencies, startups, and charities.  ",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "Web Designer",
    img: "/image/pic3.jpeg",
    text: "Passionate web designer, skilled in Adobe Creative Suite, HTML, CSS. Creates seamless UX and UI with creative but functional designs. Designed 10+ websites, including an ecommerce baseball hat sales site. Site for free online video game was shortlisted for a CSS Design Award.",
  },
  {
    id: 3,
    name: "Johnson Here",
    job: "UI UX Designer",
    img: "/image/pic4.jpeg",
    text: "Accomplished UX Designer with 6+ years of experience eager to make a positive impact at Jersey Frames. During my time at Greentibs, I increased user satisfaction by 20% with redesign of the website. Boosted conversions by 500% with mobile app design.",
  },
  {
    id: 4,
    name: "Anna Frank",
    job: "Backend Engineer",
    img: "/image/sara.jpeg",
    text: "Anna is a backend engineer who believes in the power of backend. I began my journey in field by my Curiocity, and now dreams of becoming Experienced .Worked with the Marketing & Dev teams to achieve quarterly KPIs   To get in touch with me , call/email/message me on ",
  },
];

const img = document.getElementById("person1");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextbtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
prevbtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
randombtn.addEventListener("click", function () {
  currentItem = randomNumber();
  showPerson(currentItem);
});
function randomNumber() {
  return Math.floor(Math.random() * reviews.length - 1);
}
