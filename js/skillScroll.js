// 控制个人技能展示模块滚动
document.addEventListener("DOMContentLoaded", function () {
    const skillScollContainer = document.getElementById("skillScollContainer");
    const skillScollRow = document.getElementById("skillScollRow");

    skillScollContainer.innerHTML += skillScollContainer.innerHTML;

    let scrollAmount = 0;
    let scrollSpeed = 0.2;

    function scroll() {
        scrollAmount -= scrollSpeed;
        const containerWidth = skillScollContainer.scrollWidth / 2;
        if (Math.abs(scrollAmount) >= containerWidth) {
            scrollAmount = 0;
        }
        skillScollContainer.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(scroll);
    }
    scroll();

    skillScollRow.addEventListener("mouseenter", () => {
        scrollSpeed = 0;
    });

    skillScollRow.addEventListener("mouseleave", () => {
        scrollSpeed = 0.2;
    });
});