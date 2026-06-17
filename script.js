const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const copyButton = document.querySelector(".copy-email");
const copyNote = document.querySelector(".copy-note");
const email = "lilian921025@gmail.com";

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-visible");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  header.classList.toggle("is-open", isOpen);
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    nav.classList.remove("is-visible");
    navToggle.setAttribute("aria-expanded", "false");
    header.classList.remove("is-open");
  }
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyNote.textContent = "Email copied.";
  } catch {
    copyNote.textContent = "Please copy manually: lilian921025@gmail.com";
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
