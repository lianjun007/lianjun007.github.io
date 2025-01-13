
const skillInfoDiv = document.getElementById("skillInfo");

fetch("/json/skill.json")
    .then(response => response.json())
    .then(data => {
        let html = "";
        data.forEach(skill => {
            html += `
            <hr>
            <div id="${skill.id}" class="skillInfoRow">
                <img src="${skill.image}" class="skillGroupImage" style="width: 80px;">
                <div style="width: 100%;">
                    <p class="text">${skill.title}</p>
                    <p class="subRightText">${skill.info}</p>
                </div>
                <img src="/image/SF-Symbol/chevron.forward.png" class="listRowEndButtonImage" style="width: 8px; margin-right: 0; margin-left: 5px">
            </div>
            `;
        });
        skillInfoDiv.innerHTML = html;

        const skillRows = document.querySelectorAll(".skillInfoRow");
        skillRows.forEach(row => {
            row.addEventListener("click", function () {
                const skillId = this.id;
                window.location.assign(`/html/skillContent.html?id=${skillId}`);
            });
        });
    })