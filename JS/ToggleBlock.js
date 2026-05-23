function toggleBlock(id) {
  const el = document.getElementById(id);
  el.classList.toggle('open');
}

class ToggleBlock extends HTMLElement {
  connectedCallback() {
    setTimeout(() => {
      const title = this.getAttribute('title')
      const isEmpty = this.hasAttribute('data-empty')
      const content = this.innerHTML

      this.innerHTML = `
        <div class="notion-toggle${isEmpty ? ' notion-toggle--disabled' : ''}" id="${this._id()}">
          <div class="notion-toggle-header" onclick="${isEmpty ? '' : "this.closest('.notion-toggle').classList.toggle('open')"}">
            <span class="toggle-arrow">▶</span>
            <span class="toggle-title">${title}</span>
          </div>
          <div class="toggle-body">
            <div class="toggle-block">${content}</div>
          </div>
        </div>
      `

      if (!isEmpty) return

      const header = this.querySelector('.notion-toggle-header')
      header.style.cursor = 'default'
      header.style.opacity = '0.4'
    }, 0)
  }

  _id() {
    return 'toggle-' + Math.random().toString(36).slice(2, 7)
  }
}

customElements.define('toggle-block', ToggleBlock)