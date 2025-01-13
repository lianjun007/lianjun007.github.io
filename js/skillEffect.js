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

document.getElementById("skillScollRow").addEventListener("click", clickShowSkillList);
document.getElementById("skillControl").addEventListener("click", clickShowSkillList);

function clickShowSkillList() {
    const skillInfo = document.getElementById("skillInfo")
    const skillScollRow = document.getElementById("skillScollRow");
    const skillSingle = document.getElementById("skillSingle");

    const icon = document.getElementById("skillControl").querySelector(".listRowEndButtonImage");
    icon.classList.toggle("listRowEndButtonImageRotate");

    if (skillInfo.style.display === "none") {
        skillInfo.style.display = "block"
        skillSingle.style.display = "none"
        skillScollRow.style.display = "none"
    } else {
        skillInfo.style.display = "none"
        skillSingle.style.display = "block"
        skillScollRow.style.display = "block"
    };
};