class ProjectCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const title = this.getAttribute("title") || "Project";
    const image = this.getAttribute("image") || "";
    const link = this.getAttribute("link") || "#";
    const tags = (this.getAttribute("tags") || "")
      .split(",")
      .map(t => t.trim())
      .filter(Boolean);

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: sans-serif;
          border-radius: 0px;
        }

        .card {
          background: #0f0f14;
          border-radius: 0px;
          overflow: hidden;
          color: white;
          box-shadow: 0 10px 10px rgba(0,0,0,0.4);
          max-width: 100%;
        }

        #CardLink
        {
          text-decoration: none;
          color: inherit;
        }

        .image {
          position: relative;
          height: 224px;
          overflow: hidden;
        }

        .image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .tags {
          position: absolute;
          bottom: 10px;
          left: 10px;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tag {
          background: rgba(0,0,0,0.6);
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 12px;
          backdrop-filter: blur(6px);
        }

        .content {
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .title {
          font-weight: 600;
          font-size: 16px;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          color: #7aa2ff;
          font-size: 14px;
          transition: 0.2s;
        }

        .btn:hover {
          color: #a6c1ff;
        }

        svg {
          width: 14px;
          height: 14px;
        }
      </style>

      <a href="${link}" id="CardLink">
      <div class="card">
        <div class="image">
          <img src="${image}" alt="${title}">
          <div class="tags">
            ${tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </div>

        <div class="content">
          <div class="title">${title}</div>
          <a class="btn" href="${link}" target="_blank">
            View Project
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H9M17 7V15"
                stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
      </a>
    `;
  }
}

customElements.define("project-card", ProjectCard);