// CSS 読み込み
const BASE_PATH = "assets/css/"

const cssFiles = [
    "base/base.css",
    "base/layout.css",
    "components/buttons.css",
    "components/cards.css",
    "components/header.css",
    "components/hero.css",
    "components/modal.css",
    "components/sections.css",
    "components/sidebar.css",
    "components/slideshow.css",
    "components/social.css",
    "pages/fanart.css",
    "pages/gallery.css",
    "pages/profile.css",
    "pages/projects.css",
    "base/responsive.css"
];

export function loadCssFiles() {
    cssFiles.forEach(path => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = BASE_PATH + path;
        document.head.appendChild(link);
    });
}

loadCssFiles();