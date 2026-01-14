// CSS 自動読み込み
const cssFiles = [
    "assets/css/base/base.css",
    "assets/css/base/layout.css",
    "assets/css/components/cards.css",
    "assets/css/components/sections.css",
    "assets/css/components/sidebar.css",
    "assets/css/components/slideshow.css",
    "assets/css/components/social.css",
    "assets/css/pages/fanart.css",
    "assets/css/pages/gallery.css",
    "assets/css/pages/projects.css",
    "assets/css/base/responsive.css"
];

export function loadCssFiles() {
    cssFiles.forEach(path => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = path;
        document.head.appendChild(link);
    });
}

loadCssFiles();