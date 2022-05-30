const contentContainer = document.getElementById('content');

// Home page content
export default function createHomePage() {
  const homePageMarkup = `
  <div class="home-content active" data-tab-content id="home">
    <div class="welcome-message-container">
      <div class="welcome-message">
        <h1 class="greeting">Welcome to Superburgs</h1>
        <h1 class="greeting">Home to Superb-burgers!</h1>
        <div class="welcome-content">
          <p class="welcome-details">
            We bring you the finest, mouth-watering burgers leaving you satisfied. We only use the finest quality Wagyu Beef Patties sourced locally, supporting our local farmers. 
          </p>
        </div>
        
    </div><button class="menu-button">Menu</button></div>
  
    <div class="opening-hours">
      <h3 class="hours">Opening Hours</h3>
        <p class="day">Monday-Thursday 6am - 6pm</p>
        <p class="day">Friday-Sunday: 8am - 9pm</p>
    </div>
  </div>
  `;
  contentContainer.insertAdjacentHTML('beforeend', homePageMarkup);
}
