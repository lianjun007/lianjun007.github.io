// 生成首页“我的”模块
const myList = document.getElementById("myList");
const mySelect = document.getElementById("mySelect")

function loadMyList() {
    fetch(`/json/${mySelect.value}.json`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        data.forEach(jsonData => {
            html += `
            <div id="${jsonData.id}" class="myListCell">
                <div class="spaceBetween">
                    <img src="${jsonData.image}" class="skillGroupImage" style="width: 45px;">
                    <div style="width: 100%;">
                        <p class="text" style="margin-top: 0px; margin-bottom: 7px;">${jsonData.title}</p>
                        <p class="rightText" style="margin: 0;">${jsonData.date}</p>
                    </div>
                </div>
                <p class="subText" style="margin-top: 6px;">${jsonData.info}</p>
            </div>
            `;
        });
        myList.innerHTML = html;

        // const myListCells = document.querySelectorAll(".myListCell");
        // myListCells.forEach(row => {
        //     row.addEventListener("click", function () {
        //         const jsonDataId = this.id;
        //         window.location.assign(`/html/jsonDataContent.html?id=${jsonDataId}`);
        //     });
        // });
    });
}
loadMyList()