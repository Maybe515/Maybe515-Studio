// CSS 読み込み
import { loadCssFiles } from "./load-css.js";

// 初期化処理
import { initBlogList } from "../modules/blog-list.js";
import { initHeaderOffset } from "../modules/header-offset.js";
import { initSidebarToggle } from "../modules/sidebar-toggle.js";
import { initSlideshow } from "../modules/slideshow.js";
import { initSocialToggle } from "../modules/social-toggle.js";
import { loadFanart } from "../pages/fanart-grid.js";
import { initProfile } from "../pages/profile-container.js";
import { initProjects } from "../pages/project-grid.js";
import { initSocialIcons } from "../pages/social-icons.js";
import { updateDeviceState } from "./responsive-state.js";

loadCssFiles();

const page = document.body.dataset.page;
switch (page) {
    case "home":
        initBlogList();
        initHeaderOffset();
        initSidebarToggle();
        initSlideshow();
        initSocialToggle();
        initProjects();
        initSocialIcons();
        updateDeviceState();
        break;

    case "fanart":
        loadFanart();
        break;

    case "profile":
        initProfile();
        break;
}