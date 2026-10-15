// Enhance the contact details only after a real email address is provided.
const emailAddress = document.querySelector("#email-address");
const copyButton = document.querySelector("#copy-email");
const copyStatus = document.querySelector("#copy-status");

if (
  emailAddress instanceof HTMLElement &&
  copyButton instanceof HTMLButtonElement &&
  copyStatus instanceof HTMLElement
) {
  const email = emailAddress.textContent.trim();
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (isEmail) {
    const emailLink = document.createElement("a");
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;
    emailAddress.replaceChildren(emailLink);
    copyButton.hidden = false;

    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(email);
        copyStatus.textContent = "Email address copied.";
      } catch {
        copyStatus.textContent =
          "Could not copy the email address. Use the email link instead.";
      }
    });
  }
}
