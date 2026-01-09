// CSS 自動読み込み
const cssFiles = [
    "assets/css/base.css",
    "assets/css/layout.css",
    "assets/css/components/sidebar.css",
    "assets/css/components/social.css",
    "assets/css/components/gallery.css",
    "assets/css/components/slideshow.css",
    "assets/css/components/projects.css",
    "assets/css/components/cards.css",
    "assets/css/components/sections.css",
    "assets/css/responsive.css"
];

cssFiles.forEach(path => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = path;
    document.head.appendChild(link);
});

// 初期化処理
import { initSlideshow } from "./slideshow.js";
import { initSocialToggle } from "./social-toggle.js";
import { initSidebarToggle } from "./sidebar-toggle.js";
import { initHeaderOffset } from "./header-offset.js";

initSlideshow();
initSocialToggle();
initSidebarToggle();
initHeaderOffset();
