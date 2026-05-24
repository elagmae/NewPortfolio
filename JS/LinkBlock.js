class LinkBlock extends HTMLElement {
  connectedCallback() {
    const href = this.getAttribute('href')
    const img = this.getAttribute('img')
    const alt = this.getAttribute('alt') || ''
    this.innerHTML = `
      <a href="${href}" target="_blank" rel="noopener">
        <div class="lb-img-wrap">
          <img style="object-fit:cover;" src="${img}" alt="${alt}">
          <div class="lb-badge">
            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 10L10 1M10 1H4M10 1V7" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="lb-caption">
          <span>${alt}</span>
        </div>
      </a>
    `
  }
}
customElements.define('link-block', LinkBlock)