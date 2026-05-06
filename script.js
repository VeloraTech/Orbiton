const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -40px 0px" },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}

const form = document.getElementById("waitlist-form");
const toast = document.getElementById("waitlist-toast");
const modal = document.getElementById("confirm-modal");
const modalClose = document.getElementById("confirm-close");
const passImage = document.getElementById("waitlist-pass");
const downloadPass = document.getElementById("download-pass");
const EMAILJS_PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";

const hasEmailJsConfig = () =>
  ![
    EMAILJS_PUBLIC_KEY,
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
  ].some((value) => value.startsWith("YOUR_EMAILJS_"));

if (window.emailjs && hasEmailJsConfig()) {
  window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

const sendWaitlistEmail = async ({ email, passData }) => {
  if (!window.emailjs || !hasEmailJsConfig()) {
    return { skipped: true };
  }

  await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    to_email: "your@email.com",
    user_email: email,
    pass_preview: passData,
    source: "Orbiton Waitlist Form",
    submitted_at: new Date().toISOString(),
  });

  return { skipped: false };
};

const showToast = (message) => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2800);
};

const makePassImage = (email) => {
  const safeEmail = email.replace(/[<>&'"]/g, "");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="980" height="560" viewBox="0 0 980 560">
      <defs>
        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a1730" />
          <stop offset="100%" stop-color="#06101f" />
        </linearGradient>
        <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#36d4ff" />
          <stop offset="100%" stop-color="#1498ff" />
        </linearGradient>
      </defs>
      <rect width="980" height="560" rx="30" fill="url(#g1)" />
      <circle cx="795" cy="122" r="96" fill="none" stroke="#2ed0ff" stroke-opacity=".35" />
      <circle cx="795" cy="122" r="64" fill="none" stroke="#2ed0ff" stroke-opacity=".24" />
      <circle cx="858" cy="122" r="8" fill="#57dcff" />
      <text x="70" y="120" fill="#b8ddff" font-family="IBM Plex Sans, Arial, sans-serif" font-size="24">Orbiton Waitlist</text>
      <text x="70" y="210" fill="#ecf2ff" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="62" font-weight="700">Seat Secured</text>
      <text x="70" y="278" fill="#9cb4d1" font-family="IBM Plex Sans, Arial, sans-serif" font-size="28">${safeEmail}</text>
      <rect x="70" y="336" width="390" height="56" rx="28" fill="url(#g2)" />
      <text x="105" y="373" fill="#04203f" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="25" font-weight="700">EARLY ACCESS MEMBER</text>
      <text x="70" y="470" fill="#7f99b7" font-family="IBM Plex Sans, Arial, sans-serif" font-size="20">From first commit to launch</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const openModal = () => {
  modal?.classList.add("open");
  modal?.setAttribute("aria-hidden", "false");
};

const closeModal = () => {
  modal?.classList.remove("open");
  modal?.setAttribute("aria-hidden", "true");
};

modalClose?.addEventListener("click", closeModal);
modal?.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const button = form.querySelector("button");
  const input = form.querySelector("input[type='email']");
  const email = input.value.trim();
  const originalText = button.textContent;

  if (!email) return;

  button.disabled = true;
  button.textContent = "Secured";

  setTimeout(async () => {
    const passData = makePassImage(email);

    try {
      await sendWaitlistEmail({ email, passData });
    } catch (error) {
      showToast("Saved locally. Email send failed, please try again.");
      button.disabled = false;
      button.textContent = originalText;
      return;
    }

    if (passImage) passImage.src = passData;
    if (downloadPass) downloadPass.href = passData;
    showToast("You're on the waitlist. Confirmation ready.");
    openModal();

    button.disabled = false;
    button.textContent = originalText;
    input.value = "";
  }, 1400);
});
