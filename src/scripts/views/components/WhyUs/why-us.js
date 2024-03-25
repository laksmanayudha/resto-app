class WhyUs extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="why-us">
            <div class="why-us-wrapper">
                <h2 tabindex="0">Why Us ?</h2>
                <ul class="why-us-list">
                    <li class="why-us-item">
                        <div class="why-us-number">1</div>
                        <div class="why-us-content">
                            <h3 tabindex="0">Convenience</h3>
                            <p tabindex="0">Browse our restaurant catalog website from the comfort of your home, enabling easy access to our diverse menu and special offerings.</p>
                        </div>
                    </li>
                    <li class="why-us-item">
                        <div class="why-us-number">2</div>
                        <div class="why-us-content">
                            <h3 tabindex="0">Visual Delight</h3>
                            <p tabindex="0">Explore enticing visuals of our dishes, providing a sneak peek into the culinary delights awaiting you.</p>
                        </div>
                    </li>
                    <li class="why-us-item">
                        <div class="why-us-number">3</div>
                        <div class="why-us-content">
                            <h3 tabindex="0">Detailed Descriptions</h3>
                            <p tabindex="0">Gain insights into each dish with detailed descriptions, helping you make informed choices based on your preferences.</p>
                        </div>
                    </li>
                    <li class="why-us-item">
                        <div class="why-us-number">4</div>
                        <div class="why-us-content">
                            <h3 tabindex="0">Mobile Accessibility</h3>
                            <p tabindex="0">Access our restaurant catalog website on-the-go, allowing you to plan your visit anytime, anywhere.</p>
                        </div>
                    </li>
                </div>
            </div>
        </section>`;
  }
}

customElements.define('why-us', WhyUs);
