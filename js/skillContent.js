// 获取 URL 参数
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const skillId = getUrlParameter("id");

fetch("/json/skill.json")
    .then(response => response.json())
    .then(data => {
        const skill = data.find(skill => skill.id === skillId);
        document.getElementById("webTitle").textContent = `LianJun > 经历 > ${skill.title}`
        document.getElementById("skillTitle").textContent = skill.title
        document.getElementById("skillImage").src = skill.image
        document.getElementById("skillInfo").textContent = skill.info

        fetch(`${skill.md}`)
            .then(response => response.text())
            .then(markdownText => {
                console.log(markdownText)
                const marked = window.marked;
                const html = marked.parse(markdownText);
                const markdownContentDiv = document.getElementById("markdownContent");
                markdownContentDiv.innerHTML = html;
                
            })
    })