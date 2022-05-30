const contentContainer = document.getElementById('content');

// Nav bar
export default function createNavBar() {
  const navMarkup = `
  <div class="homepage-links">
    <h3 class="res-name">Superburgs</h3>
    <div class="navigation-links">
      <div class="link-container">
        <a href="#home" class="tab active" data-tab-target="#home">HOME</a>
      </div>
      <div class="link-container">
        <a href="#menu" class="tab" data-tab-target="#menu">MENU</a>
      </div>
      <div class="link-container">
        <a href="#where" class="tab" data-tab-target="#contact">CONTACT</a>
      </div>
    </div>
  </div>`;
  contentContainer.insertAdjacentHTML('afterbegin', navMarkup);
}
