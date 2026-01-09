function updateSidebarHeight() {
    const sidebar = document.querySelector(".sidebar");
    if (!sidebar) return;

    if (document.body.classList.contains("is-mobile")) {
        const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height"));
        const offset = headerHeight + 100;
        const height = window.innerHeight - offset;

        sidebar.style.height = `${height}px`;
    } else {
        sidebar.style.height = "";
    }
}

export function updateDeviceState() {
    if (window.innerWidth <= 825) {
        document.body.classList.add("is-mobile");
        document.body.classList.remove("is-pc");
    } else {
        document.body.classList.add("is-pc");
        document.body.classList.remove("is-mobile");
    }

    updateSidebarHeight();
}

updateDeviceState();
window.addEventListener("load", updateDeviceState);
window.addEventListener("resize", updateDeviceState);
window.addEventListener("orientationchange", updateDeviceState);
