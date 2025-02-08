document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("runawayBtn");

    const btnRect = btn.getBoundingClientRect();

    const centerX = (window.innerWidth - btnRect.width) / 2;
    const centerY = (window.innerHeight - btnRect.height) / 2;

    btn.style.position = "fixed";
    btn.style.left = `${centerX}px`;
    btn.style.top = `${centerY}px`;
    function getMouseCoords(event, btnRect) {
      return {
        x: event.clientX - (btnRect.left + window.scrollX + btnRect.width / 2),
        y: event.clientY - (btnRect.top + window.scrollY + btnRect.height / 2),
      };
    }
    function calculateNewPosition(deltaX, deltaY, btnRect) {
      let newX = btnRect.left + deltaX + window.scrollX;
      let newY = btnRect.top + deltaY + window.scrollY;

      newX = Math.max(0, Math.min(newX, window.innerWidth - btnRect.width));
      newY = Math.max(0, Math.min(newY, window.innerHeight - btnRect.height));

      return { newX, newY };
    }

    btn.addEventListener("mousemove", (event) => {
      const btnRect = btn.getBoundingClientRect();
      const maxDistance = 150;
      const mousePos = getMouseCoords(event, btnRect);

      const deltaX = mousePos.x > 0 ? -maxDistance : maxDistance;
      const deltaY = mousePos.y > 0 ? -maxDistance : maxDistance;

      const { newX, newY } = calculateNewPosition(deltaX, deltaY, btnRect);

      btn.style.left = `${newX}px`;
      btn.style.top = `${newY}px`;
    });
  });