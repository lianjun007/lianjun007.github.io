import{_ as i,r as o,o as d,a as c,c as u,b as t,e as v}from"./index-DF_YDzNr.js";const m={setup(){const s=o(!1),e=o(null),l=()=>{e.value&&(e.value.scrollTop>10?(document.getElementById("nav").classList.add("control-blur"),document.getElementById("navCenterTitle").style.display="flex"):(document.getElementById("nav").classList.remove("control-blur"),document.getElementById("navCenterTitle").style.display="none"))};return d(()=>{e.value&&e.value.addEventListener("scroll",l)}),c(()=>{e.value&&e.value.removeEventListener("scroll",l)}),{isScrolled:s,scrollView:e}},methods:{goBack(){this.$router.back()}}},p={ref:"scrollView",style:{"background-color":"var(--background-color)"}},g={id:"nav",class:"navBar"},y={style:{display:"flex","align-items":"center"}},f={ref:"navCenterTitle",id:"navCenterTitle",style:{display:"none","align-items":"center"}};function x(s,e,l,a,B,n){return v(),u("div",p,[t("nav",g,[t("div",y,[t("button",{class:"listRowEndButton",onClick:e[0]||(e[0]=(...r)=>n.goBack&&n.goBack(...r)),style:{"margin-left":"10px"}},e[1]||(e[1]=[t("img",{src:"./image/SF-Symbol/chevron.backward.png",class:"listRowEndButtonImage",style:{width:"13px","margin-right":"5px","margin-left":"-7px"}},null,-1),t("p",{class:"text",style:{color:"#007AFF"}},"返回",-1)]))]),t("div",f,"我的经历",512),e[2]||(e[2]=t("div",{style:{display:"flex","align-items":"center",width:"60px"}},null,-1))]),e[3]||(e[3]=t("div",{class:"contentView"},[t("div",{class:"list",style:{"margin-top":"35px",height:"200px"}}," 我的经历 ")],-1))],512)}const k=i(m,[["render",x],["__scopeId","data-v-e9e39b9b"]]);export{k as default};
