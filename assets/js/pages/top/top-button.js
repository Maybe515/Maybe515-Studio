// トップボタン表示制御
export function initTopButton() {
    const btn = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const half = document.body.scrollHeight / 2;

        if (scrollY > half) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
}
