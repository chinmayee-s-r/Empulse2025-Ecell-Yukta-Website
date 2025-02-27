// Fetch event details from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const event = urlParams.get('event');

const eventDetails = {
  pitch: {
    title: "Startup Pitch Competition",
    date: "November 15, 2023",
    description: "Pitch your startup idea to a panel of judges and win exciting prizes!",
    link: "https://forms.google.com/pitch-competition"
  },
  workshop: {
    title: "Entrepreneurship Workshop",
    date: "November 20, 2023",
    description: "Learn the essentials of starting and scaling a business from industry experts.",
    link: "https://forms.google.com/workshop"
  },
  networking: {
    title: "Networking Night",
    date: "November 25, 2023",
    description: "Connect with fellow entrepreneurs, investors, and mentors.",
    link: "https://forms.google.com/networking"
  }
};

if (event && eventDetails[event]) {
  document.getElementById('event-title').textContent = eventDetails[event].title;
  document.getElementById('event-date').textContent = `Date: ${eventDetails[event].date}`;
  document.getElementById('event-description').textContent = `Description: ${eventDetails[event].description}`;
  document.getElementById('registration-link').href = eventDetails[event].link;
} else {
  document.getElementById('event-title').textContent = "Event Not Found";
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});
