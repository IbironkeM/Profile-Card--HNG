document.addEventListener("DOMContentLoaded", () => {
  const currentTimeElement = document.querySelector(
    "[data-testid='currentTimeUTC']"
  );
  const updateUTCTime = () => {
    const now = new Date();
    currentTimeElement.textContent = `current Time: ${now.toUTCString()}`;
  };
  updateUTCTime();
});
