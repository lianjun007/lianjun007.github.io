const backButtonLianJun = document.querySelectorAll(".backButton-LianJun")
backButtonLianJun.forEach(element => {
    element.addEventListener("click", function () {
        window.location.assign("../index.html")
    })
});