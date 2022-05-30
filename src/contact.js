const contentContainer = document.getElementById('content');

// Menu content
export default function contactUs() {
  const contactMarkup = `
    <div class="contact-us-content" id="contact" data-tab-content>
      <div class="contact-us-container">
        <h2 class="contact-header">Contact Us</h2>
        <p>Phone: 000-123-456</p>
        <p>Address: 50 Ranch Dr. Milpitas, CA 95035, USA</p>
      </div>
      <div class="map-container"></div>
    </div>
  `;
  contentContainer.insertAdjacentHTML('beforeend', contactMarkup);
}
