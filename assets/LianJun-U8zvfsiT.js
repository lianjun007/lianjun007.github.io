import{_ as x,r as u,o as w,a as I,c as d,b as e,F as p,d as y,e as h,n as L,t as v}from"./index-DF_YDzNr.js";const _={setup(){const n=u(!1),t=u(null),r=u(null),l=u(null),o=u(325);let i=0,s=.2;const a=()=>{};function c(){if(l.value){i-=s;const m=l.value.offsetWidth;Math.abs(i)>=m/2&&(i=0),l.value.style.transform=`translateX(${i}px)`,requestAnimationFrame(c)}}const g=()=>{s=0},k=()=>{s=.2},f=()=>{t.value&&(t.value.scrollTop>o.value?document.getElementById("nav-lianjun").style.opacity=1:document.getElementById("nav-lianjun").style.opacity=0)};return w(()=>{window.addEventListener("resize",a),l.value&&c(),t.value&&t.value.addEventListener("scroll",f),l.value&&(l.value.addEventListener("mouseenter",g),l.value.addEventListener("mouseleave",k)),t.value&&t.value.addEventListener("scroll",f)}),I(()=>{t.value&&t.value.removeEventListener("scroll",f),window.removeEventListener("resize",a)}),{isScrolled:n,scrollView:t,skillScollRow:r,skillScollContainer:l,skillScollRow:r,skillScollContainer:l,topNav:o}},data(){return{myInfoList:[],linkList:[],skIconList:[],filterType:"all",lastWidth:0}},watch:{filterType(){this.$nextTick(()=>{this.arrangeWaterfall(),this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{this.arrangeWaterfall()},350)})},$route(n,t){n.path==="/"?(this.topNav=325,document.documentElement.style.setProperty("--txtop","200px")):(this.topNav=145,document.documentElement.style.setProperty("--txtop","20px"))}},computed:{filteredList(){return this.filterType==="all"?this.myInfoList:this.myInfoList.filter(n=>n.type===this.filterType)},getlinkList(){return this.linkList},getSkIconList(){return this.skIconList}},mounted(){this.$route.path==="/"?(this.topNav=325,document.documentElement.style.setProperty("--txtop","200px")):(this.topNav=145,document.documentElement.style.setProperty("--txtop","20px")),this.fetchData(),this.fetchContentData(),this.resizeObserver=new ResizeObserver(()=>{this.onResize()});const n=document.getElementById("waterfall");n&&this.resizeObserver.observe(n)},beforeDestroy(){this.resizeObserver&&this.resizeObserver.disconnect()},methods:{goToPage(n,t){const r=this.$route.name;r!==n?t?this.$router.push({name:n,query:{title:t}}):this.$router.push({name:n}):this.$router.replace({name:r,query:{title:t}})},setFilterType(n){this.filterType=n,this.$nextTick(()=>{this.arrangeWaterfall()})},fetchContentData(){const n=fetch("./json/project.json").then(l=>l.json()).then(l=>l.map(o=>({...o,type:"project"}))),t=fetch("./json/video.json").then(l=>l.json()).then(l=>l.map(o=>({...o,type:"video"}))),r=fetch("./json/essay.json").then(l=>l.json()).then(l=>l.map(o=>({...o,type:"essay"})));Promise.all([n,t,r]).then(([l,o,i])=>{this.myInfoList=[...l,...o,...i],this.myInfoList.forEach(s=>{s.createDate&&typeof s.createDate=="string"&&(s.createDateSortPara=new Date(s.createDate))}),this.myInfoList.sort((s,a)=>s.createDateSortPara-a.createDateSortPara),this.$nextTick(()=>{this.arrangeWaterfall()})}).catch(l=>console.error("数据加载错误:",l))},fetchData(){fetch("./json/link.json").then(n=>n.json()).then(n=>{this.linkList=n}),fetch("./json/skIcon.json").then(n=>n.json()).then(n=>{this.skIconList=n})},arrangeWaterfall(){document.getElementById("all").style.color="black",document.getElementById("project").style.color="black",document.getElementById("video").style.color="black",document.getElementById("essay").style.color="black",document.getElementById(this.filterType).style.color="#007AFF";const n=document.getElementById("waterfall"),t=Array.from(n.children),r=n.offsetWidth,l=Math.min(Math.floor(r/200),4),o=new Array(l).fill(0),i=(r-(l-1)*10)/l;t.forEach(s=>{const a=s.offsetHeight,c=o.indexOf(Math.min(...o));s.style.width=`${i}px`,s.style.top=`${o[c]+10}px`,s.style.left=`${c*i+c*10}px`,o[c]+=a+10}),n.style.height=`${Math.max(...o)}px`},onResize(){const n=document.getElementById("waterfall");if(!n)return;const t=n.offsetWidth;t!==this.lastWidth&&(this.arrangeWaterfall(),this.lastWidth=t,this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{this.arrangeWaterfall()},350))},beforeDestroy(){this.observer&&this.observer.disconnect()}}},T={ref:"scrollView"},E={id:"contentView",class:"contentView"},j={class:"profilePhotoModule"},b={style:{display:"flex"}},S=["href"],$=["src","title"],B={class:"list"},P={class:"skillScollRow",ref:"skillScollRow",style:{overflow:"hidden"}},W={class:"scrollView",ref:"skillScollContainer",style:{display:"flex",gap:"5px","align-items":"center",padding:"0 16px"}},C=["src","width"],D={class:"singleRowlist",style:{"margin-top":"20px"}},z={class:"singleRowlistContent"},R={id:"waterfall"},F=["onClick"],M={class:"spaceBetween"},V=["src"],O={style:{width:"100%"}},N={class:"text",style:{"margin-top":"0px","margin-bottom":"7px","white-space":"nowrap"}},A={class:"rightText",style:{margin:"0"}},q={class:"subText",style:{"margin-top":"6px"}};function H(n,t,r,l,o,i){return h(),d("div",T,[t[10]||(t[10]=e("nav",{id:"nav-lianjun",class:"navBar control-blur"},[e("div"),e("div",{style:{display:"flex","align-items":"center"}},[e("img",{class:"navProfilePhoto",src:"./image/lianjun.png"}),e("span",{class:"navTitle",style:{"margin-left":"10px"}},"LianJun")]),e("div")],-1)),e("div",E,[e("div",j,[t[5]||(t[5]=e("img",{class:"profilePhoto",src:"./image/lianjun.png"},null,-1)),t[6]||(t[6]=e("p",{class:"largeTitle"},"LianJun",-1)),e("div",b,[(h(!0),d(p,null,y(i.getlinkList,s=>(h(),d("div",null,[e("a",{href:s.link,target:"_blank"},[e("img",{class:"linkButtonImage",src:`./image/link/${s.image}`,title:s.name},null,8,$)],8,S)]))),256))])]),e("div",B,[t[8]||(t[8]=e("div",{class:"listRow"},[e("p",null,"简介"),e("p",null,"喜欢研究 UI 的独立开发者")],-1)),t[9]||(t[9]=e("hr",null,null,-1)),e("div",{class:"listRow",id:"skillControl",onClick:t[0]||(t[0]=s=>i.goToPage("sklist"))},t[7]||(t[7]=[e("p",{class:"text"},"经历",-1),e("div",{class:"spaceBetween"},[e("p",{class:"rightText",id:"skillSingle"},"iOS 开发、前端开发、UI 设计 等"),e("img",{src:"./image/SF-Symbol/chevron.down.png",class:"listRowEndButtonImage",style:{width:"10px","margin-right":"0","margin-left":"5px"}})],-1)])),e("div",P,[e("div",W,[(h(!0),d(p,null,y(i.getSkIconList,s=>(h(),d("div",null,[e("img",{src:`./image/skill/${s.image}`,class:"skillImage",width:s.size,style:L(`margin-right: ${s.marginRight}px;`)},null,12,C)]))),256))],512)],512)]),e("nav",D,[e("div",z,[e("span",{id:"all",onClick:t[1]||(t[1]=s=>i.setFilterType("all"))},"全部"),e("span",{id:"project",onClick:t[2]||(t[2]=s=>i.setFilterType("project"))},"项目"),e("span",{id:"video",onClick:t[3]||(t[3]=s=>i.setFilterType("video"))},"视频"),e("span",{id:"essay",onClick:t[4]||(t[4]=s=>i.setFilterType("essay"))},"文章")])]),e("div",R,[(h(!0),d(p,null,y(i.filteredList,s=>(h(),d("div",{class:"showList",key:s.id},[e("div",{class:"showView",onClick:a=>i.goToPage("content",s.title)},[e("div",M,[e("img",{src:`./image/${s.image}`,class:"skillGroupImage",style:{width:"45px","margin-right":"10px"}},null,8,V),e("div",O,[e("p",N,v(s.title),1),e("p",A,v(s.createDate),1)])]),e("p",q,v(s.info),1)],8,F)]))),128))])])],512)}const U=x(_,[["render",H],["__scopeId","data-v-706422bc"]]);export{U as default};
