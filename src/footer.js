const contentContainer = document.getElementById('content');

// Footer
export default function createFooter() {
  const footerMarkUp = `
  <footer>
    This is a project created based off
    <a
      href="https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page"
     class="TOP">
      The Odin Project</a
    >
  </footer>
  `;
  contentContainer.insertAdjacentHTML('afterend', footerMarkUp);
}
