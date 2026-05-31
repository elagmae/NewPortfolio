// ── LangToggle.js ─────────────────────────────────────────────────────────────

(function () {

    const STORAGE_KEY = "portfolio-lang";

    function getCurrentLang() {
        return localStorage.getItem(STORAGE_KEY) || "en";
    }

    function updateSlider(activeBtn, firstBtn) {
        const slider = document.querySelector("#lang-toggle .lt-slider");
        if (!slider) return;
        slider.style.width     = activeBtn.offsetWidth + "px";
        slider.style.transform = `translateX(${activeBtn.offsetLeft - firstBtn.offsetLeft}px)`;
    }

    function setLang(lang) {
        localStorage.setItem(STORAGE_KEY, lang);

        const buttons  = document.querySelectorAll("#lang-toggle button");
        const firstBtn = buttons[0];

        buttons.forEach(btn => {
            btn.classList.toggle("active", btn.dataset.lang === lang);
        });

        const activeBtn = document.querySelector(`#lang-toggle button[data-lang="${lang}"]`);
        updateSlider(activeBtn, firstBtn);

        const data = lang === "fr" ? PROJECT_FR : PROJECT_EN;
        window.renderPage(data);
    }

    function injectToggle() {
        const toggle = document.createElement("div");
        toggle.id = "lang-toggle";
        toggle.setAttribute("role", "group");
        toggle.setAttribute("aria-label", "Language selector");

        toggle.innerHTML = `
            <div class="lt-slider"></div>
            <button data-lang="en">EN</button>
            <button data-lang="fr">FR</button>
        `;

        toggle.querySelectorAll("button").forEach(btn => {
            btn.addEventListener("click", () => setLang(btn.dataset.lang));
        });

        document.body.appendChild(toggle);
    }

    document.addEventListener("DOMContentLoaded", () => {
        injectToggle();

        const lang    = getCurrentLang();
        const buttons = document.querySelectorAll("#lang-toggle button");
        const active  = document.querySelector(`#lang-toggle button[data-lang="${lang}"]`);

        buttons.forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));

        requestAnimationFrame(() => updateSlider(active, buttons[0]));

        const data = lang === "fr" ? PROJECT_FR : PROJECT_EN;
        window.renderPage(data);
    });

    window.addEventListener("resize", () => {
        const active   = document.querySelector("#lang-toggle button.active");
        const firstBtn = document.querySelector("#lang-toggle button");
        if (active && firstBtn) updateSlider(active, firstBtn);
    });

})();
