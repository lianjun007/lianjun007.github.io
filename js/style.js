function isWebkitAppleBrowser() {
    const userAgent = navigator.userAgent.toLowerCase();
    const vendor = navigator.vendor.toLowerCase();
    // 检查是否是 WebKit 引擎，且是苹果设备的浏览器
    return /webkit/.test(userAgent) && /apple/.test(vendor) && !/chrome/.test(userAgent);
};

const elements = document.querySelectorAll(".webkitMarginTopAddOne");

if (isWebkitAppleBrowser()) {
    elements.forEach(element => {
        const currentMarginTop = window.getComputedStyle(element).marginTop;
        const currentMarginTopValue = parseFloat(currentMarginTop);
        if (!isNaN(currentMarginTopValue)) {
            element.style.marginTop = (currentMarginTopValue + 1) + "px";
        } else {
            element.style.marginTop = "1px";
        };
    });
};