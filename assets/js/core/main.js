// CSS 読み込み
import { loadCssFiles } from "../data/load-css.js";

// 初期化処理
import { initHeaderOffset } from "../data/header-offset.js";
import { initBlogList } from "../pages/top/blog-list.js";
import { initProjects } from "../pages/top/project-grid.js";
import { initProfile } from "../pages/top/profile-container.js";
import { initSidebarToggle } from "../pages/top/sidebar-toggle.js";
import { initSlideshow } from "../pages/top/slideshow.js";
import { initSocialIcons } from "../pages/top/social-icons.js";
import { initSocialToggle } from "../pages/top/social-toggle.js";
import { initTopButton } from "../pages/top/top-button.js";
import { loadFanart } from "../pages/fanart/fanart-grid.js";

import { updateDeviceState } from "../data/responsive-state.js";

loadCssFiles();

const page = document.body.dataset.page;
switch (page) {
    case "home":
        initHeaderOffset();
        initSidebarToggle();
        initSocialToggle();
        initSocialIcons();
        initSlideshow();
        initBlogList();
        initProjects();
        initProfile();
        initTopButton();
        updateDeviceState();
        break;

    case "fanart":
        loadFanart();
        break;
}