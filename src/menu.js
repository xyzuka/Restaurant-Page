const contentContainer = document.getElementById('content');

// Menu content
export default function createMenu() {
  const menuMarkUp = `
      <div class="menu-content hide" id="menu" data-tab-content>
      <div class="menu-container">
        <h1 class="menu-main-header">Menu</h1>
        <hr>

        <h2 class="menu-item-header">Mains</h2>
        <hr>

        <div class="menu-item">
          <div class="menu-header">
            <h2 class="menu-header-text">Superb Burger</h2>
            <h2 class="price">$20</h2>
          </div>

          <p class="menu-description">Signature Wagyu Burger. Complimented with lettuce, tomatoes, sweet onion relish, and fries!</p>
          <hr class="menu-hr">
        </div>

        <div class="menu-item">
          <div class="menu-header">
            <h2 class="menu-header-text">Supreme Burger</h2>
            <h2 class="price">$25</h2>
          </div>

          <p class="menu-description">Superb's Bigger Brother! Complimented with an extra Wagyu Beef Patty and Monster fries!</p>
          <hr class="menu-hr">
        </div>

        <div class="menu-item">
          <div class="menu-header">
          <h2 class="menu-header-text">Cheesey Fries</h2>
          <h2 class="price">$12</h2>
          </div>

          <p class="menu-description">Crispy baked fries topped off with melted cream cheese</p>
          <hr class="menu-hr">
        </div>

        <h2 class="menu-item-header">Drinks</h2>
        <hr>

        <div class="menu-item">
          <div class="menu-header">
            <h2 class="menu-header-text">Applelicious</h2>
            <h2 class="price">$7</span>    
          </div>

          <p class="menu-description">Superburg's signature freshly squeezed and chilled apple juice</p>
          <hr class="menu-hr">
        </div>

        <div class="menu-item">
          <div class="menu-header">
            <h2 class="menu-header-text">Mango Punch</h2>
            <h2 class="price">$7</span>
          </div>

          <p class="menu-description">A tropical chilled punch of mango essence and passion fruit</p>
          <hr class="menu-hr">
        </div>

        <div class="menu-item">
           <div class="menu-header">
            <h2 class="menu-header-text">Frozen Cola</h2>
            <h2 class="price">$5</span>
           </div>
          <p class="menu-description">Superburg's signature secret recipe chilled cola</p>
          <hr class="menu-hr">
        </div>
    </div>
  `;
  contentContainer.insertAdjacentHTML('beforeend', menuMarkUp);
}
