class SkillSet extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["tags"];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const tags = (this.getAttribute("tags") || "")
      .split(",")
      .map(t => t.trim())
      .filter(Boolean);


    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: grid;
          justify-self:center;
        }

        .container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;

          padding: 16px;
          border-radius: 12px;

          background: rgba(11, 11, 26, 0.59);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);

          border: 1px solid rgba(255,255,255,0.08);
        }

        .tag 
        {
          padding: 6px 12px;
          border-radius: 999px;

          font-size: 13px;
          color: #cfe3ff;

          background: rgba(80, 140, 255, 0.15);
          border: 1px solid rgba(120, 180, 255, 0.25);

          box-shadow: inset 0 0 10px rgba(80, 140, 255, 0.08);

          transition: 0.2s ease;
          cursor: default;
        }

        .tag:hover {
          transform: translateY(-2px);
          background: rgba(80, 140, 255, 0.25);
        }
      </style>

      <div class="container" part="container">
        ${tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>
    `;
  }
}

customElements.define("skill-set", SkillSet);