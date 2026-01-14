// CSS 自動読み込み
import { loadCssFiles } from "./load-css.js";

// 初期化処理
import { initHeaderOffset } from "../modules/header-offset.js";
import { initSlideshow } from "../modules/slideshow.js";
import { initSidebarToggle } from "../modules/sidebar-toggle.js";
import { initSocialToggle } from "../modules/social-toggle.js";
import { initSocialIcons } from "../modules/social-icons.js";
import { updateDeviceState } from "./responsive-state.js";
import { loadFanart } from "../pages/fanart.js";

loadCssFiles();

const page = document.body.dataset.page;
switch (page) {
    case "home":
        initHeaderOffset();
        initSlideshow();
        initSidebarToggle();
        initSocialToggle();
        initSocialIcons();
        updateDeviceState();
        break;

    case "fanart":
        loadFanart();
        break;
}