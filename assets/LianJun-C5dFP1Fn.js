import{_ as te,r as u,c as V,o as le,a as ne,b as o,d as r,e as l,f as i,w as f,n as S,g as R,F as x,h as $,t as N,i as K,j as ae,k as Q,l as X,m as oe,p as G,u as se,q as Y}from"./index-zdqAtO0R.js";import{I as ie,_ as Z,M as j,L as re,a as ee}from"./ListView-CC38NKSR.js";import{_ as g}from"./SvgIcon-mbw8gGQ7.js";import{W as ue,C as ce}from"./CardView-Co7620C0.js";import"./function-aY7JZtoC.js";const de={key:0,class:"buttonDivider"},ve=["onClick"],pe={__name:"NavBar",props:{options:{type:Array,required:!0},selected:{type:String,default:""},haveSearch:{type:Boolean,default:!0}},emits:["filter-change"],setup(H,{emit:I}){const q=H,y=u(!1),L=u(!1),p=u(null),h=u(null),s=u(null),E=u(null),b=u(null),k=u(null),c=u(null),w=u(null),B=u(null),U=I,D=a=>{U("filter-change",a)},O=V(()=>[...q.options.map(({label:a})=>a)]),z=V(()=>[...q.options.map(({value:a})=>a)]);function A(){const a=p.value.getBoundingClientRect();let n=h.value.getBoundingClientRect().right-a.left;b.value?(p.value.style.height="44px",s.value.style.width="0px",s.value.style.top="22px",s.value.style.left=`${n/2}px`,s.value.style.height="0px",b.value=!1):(s.value.style.top="44px",s.value.style.left="20px",s.value.style.width=`${a.width-40}px`,p.value.style.height="88px",s.value.style.height="32px",b.value=!0)}function J(){const a=p.value.getBoundingClientRect();let n=h.value.getBoundingClientRect().right-a.left;b.value||(s.value.style.top="6px",s.value.style.left=`${n+10}px`,s.value.style.width=`${a.width-n-30}px`,s.value.style.height="32px",E.value=!0)}function W(){const a=p.value.getBoundingClientRect();let n=h.value.getBoundingClientRect().right-a.left;b.value||(s.value.style.width="0px",s.value.style.left=`${n/2}px`,s.value.style.top="22px",s.value.style.height="0px",E.value=!1)}let C=null;function _(a=!1){if(!p.value||!h.value||!c.value||!k.value)return;const m=p.value.getBoundingClientRect(),n=h.value.getBoundingClientRect();C||(C=c.value.getBoundingClientRect());const t=k.value.getBoundingClientRect();let e=n.right-m.left,d=m.right-t.left,v=m.width-e-d;if(a&&y.value?(v+=60,e-=10,d-=10,m.width+=40):a&&!y.value&&(v-=60,e+=10,d+=10,m.width-=40),P(v<150,a),L.value){w.value&&(w.value.style.left=`${e+(v-c.value.getBoundingClientRect().width)/4}px`),c.value.style.left=`${e+v/2}px`,B.value&&(B.value.style.right=`${d+(v-c.value.getBoundingClientRect().width)/4}px`);return}C.width<v?(c.value.style.left=`${(m.width-C.width)/2}px`,c.value.style.width=`${C.width}px`):(c.value.style.left=`${e}px`,c.value.style.width=`${v}px`)}function P(a,m){a!==L.value&&(L.value=a,ae(()=>{_(m)}))}let M=new MutationObserver(()=>{if(p.value){const a=p.value.getBoundingClientRect().top;43.99<=a&&a<=44?T(!0):T(!1)}});function T(a){y.value!==a&&(y.value=a,_(!0))}return le(()=>{M&&p.value&&M.observe(p.value,{attributes:!0,attributeFilter:["class"]}),c.value&&(setTimeout(()=>{_()},200),window.addEventListener("resize",()=>{_()}))}),ne(()=>{M&&M.disconnect()}),(a,m)=>(o(),r("div",{onMouseleave:W,ref_key:"navBar",ref:p,class:K(["navBar",{navBarTop:y.value}])},[l("div",{ref_key:"searchButton",ref:h,onClick:A,onMouseenter:J,class:"searchButton",style:S(`left: ${y.value?"6px":"16px"};`)},[i(ie,{color:"var(--themeColor)",main:"搜索"},{iconLeft:f(()=>[i(g,{size:[20,17],src:"./image/SF-Symbol/magnifyingglass.svg"})]),_:1})],36),L.value?(o(),r("div",{key:0,ref_key:"optionDividerLeft",ref:w,class:"optionDivider"},null,512)):R("",!0),L.value?R("",!0):(o(),r("div",{key:1,ref_key:"optionContainer",ref:c,class:"optionContainer",title:"按 Shift 可横向滚动"},[(o(!0),r(x,null,$(H.options,(n,t)=>(o(),r(x,{key:n.value},[t!==0?(o(),r("div",de)):R("",!0),l("div",{class:K(["optionButton",{active:H.selected===n.value}]),onClick:e=>D(n.value)},N(n.label),11,ve)],64))),128))],512)),L.value?(o(),r("div",{key:2,ref_key:"optionContainer",ref:c,class:"optionSelectButton"},[i(Z,{color:"var(--themeColor)",options:O.value,values:z.value,onSelectChange:D},null,8,["options","values"])],512)):R("",!0),L.value?(o(),r("div",{key:3,ref_key:"optionDividerRight",ref:B,class:"optionDivider"},null,512)):R("",!0),l("div",{ref_key:"sortButton",ref:k,class:"sortButton",style:S(`right: ${y.value?"6px":"16px"};`)},[i(Z,{color:"var(--themeColor)",options:["时间增序","时间降序","热度增序","热度降序"]})],4),l("div",{ref_key:"searchInputContainer",ref:s,class:"searchInputContainer"},null,512)],34))}},ge=te(pe,[["__scopeId","data-v-3e0ce000"]]),me={id:"navTop"},fe=["onClick"],ye=["src","title"],he=["onClick"],ke=["src","title"],we={class:"contentView"},Be={class:"profilePhotoModule"},Se={class:"linkAndSetting",style:{"z-index":"2"}},Le={class:"switchBlur blur"},Ce=["href"],xe=["src","title"],be=["onClick"],$e=["src","title"],Re=["src","width","title"],_e=["src","width","title"],Me={__name:"LianJun",setup(H){const I=se(),q=u([{label:"全部",value:"all"},{label:"项目",value:"project"},{label:"视频",value:"video"},{label:"文章",value:"essay"}]),y=u([]),L=u([]),p=u([]),h=u("all"),s=u(325),E=u(90);function b(n){E.value=n?-90:90}const k=u(null),c=u(null),w=u(null),B=u(null),U=n=>{const t=document.getElementById("navTop"),e=document.getElementById("navTitle"),d=document.getElementById("navLeft"),v=document.getElementById("navRight");n>s.value?(t.classList.add("navBackground","navBackgroundDivider"),e.classList.add("navShow"),e.classList.remove("navHidden"),document.querySelectorAll(".switchBlur").forEach(F=>{F.classList.remove("blur")}),document.querySelector(".contentBackground").classList.add("blur")):(t.classList.remove("navBackground","navBackgroundDivider"),e.classList.remove("navShow"),e.classList.add("navHidden"),document.querySelectorAll(".switchBlur").forEach(F=>{F.classList.add("blur")}),document.querySelector(".contentBackground").classList.remove("blur")),n>s.value+80?(d.classList.remove("navHidden"),d.classList.add("navShow"),v.classList.remove("navHidden"),v.classList.add("navShow")):(d.classList.remove("navShow"),d.classList.add("navHidden"),v.classList.remove("navShow"),v.classList.add("navHidden")),n>s.value+250?(document.querySelector(".navBar").classList.add("navBackgroundDivider"),t.classList.remove("navBackgroundDivider"),document.documentElement.style.setProperty("--contentBackgroundTop","88px")):(document.querySelector(".navBar").classList.remove("navBackgroundDivider"),document.documentElement.style.setProperty("--contentBackgroundTop","44px"),n>s.value&&t.classList.add("navBackgroundDivider"))},D=()=>{k.value&&U(k.value.scrollTop)},O=()=>{w.value&&B.value&&(w.value.style.animationPlayState="paused",B.value.style.animationPlayState="paused")},z=()=>{w.value&&B.value&&(w.value.style.animationPlayState="running",B.value.style.animationPlayState="running")},A=async()=>{try{const t=await(await fetch("./json/index.json")).json(),e=Object.keys(t);y.value=e.flatMap(d=>t[d].slice(1).map(v=>({...v,type:t[d][0]})))}catch(n){console.error("Error fetching content data:",n)}},J=async()=>{try{const[n,t]=await Promise.all([fetch("./json/link.json"),fetch("./json/skIcon.json")]);L.value=await n.json(),p.value=await t.json()}catch(n){console.error("Error fetching data:",n)}},W=V(()=>h.value==="all"?y.value:y.value.filter(n=>n.type===h.value)),C=u(Q(X("controlColor"))),_=new MutationObserver(()=>{C.value=Q(X("controlColor"))}),P=V(()=>L.value.map(n=>{const{lightImage:t,darkImage:e,darkPadding:d,lightPadding:v,...F}=n;return{...F,image:C.value==="dark"?e:t,padding:C.value==="dark"?d:v}})),M=V(()=>p.value),T=n=>{n.startsWith("mailto:")?location.assign(n):window.open(n,"_blank")},a=(n,t)=>{t?I.push({name:n,query:{path:t}}):I.push({name:n})},m=n=>{h.value=n};return le(()=>{_.observe(document.documentElement,{attributes:!0,attributeFilter:["style"]}),k.value&&k.value.addEventListener("scroll",D),c.value&&(c.value.addEventListener("mouseenter",O),c.value.addEventListener("mouseleave",z)),setTimeout(()=>{w.value.style.animationPlayState="paused",B.value.style.animationPlayState="paused",setTimeout(()=>{w.value.style.animationPlayState="running",B.value.style.animationPlayState="running"},1e3)},100),I.path==="/"?(s.value=325,document.documentElement.style.setProperty("--profilePhotoModuleMarginTop","200px")):(s.value=145,document.documentElement.style.setProperty("--profilePhotoModuleMarginTop","20px")),J(),A()}),ne(()=>{_.disconnect(),k.value&&k.value.removeEventListener("scroll",D),c.value&&(c.value.removeEventListener("mouseenter",O),c.value.removeEventListener("mouseleave",z))}),oe(()=>I.path,n=>{n==="/"?(s.value=325,document.documentElement.style.setProperty("--profilePhotoModuleMarginTop","200px")):(s.value=145,document.documentElement.style.setProperty("--profilePhotoModuleMarginTop","20px"))}),(n,t)=>(o(),r("div",{ref_key:"scrollView",ref:k},[l("nav",me,[n.$route.name!=="lianjun"?(o(),r("div",{key:0,id:"navLeft",class:"navHidden",onClick:t[0]||(t[0]=e=>a("lianjun"))},[i(g,{src:"./image/SF-Symbol/house.svg"}),t[4]||(t[4]=l("span",null,"主页",-1))])):R("",!0),n.$route.name==="lianjun"?(o(),G(j,{key:1,id:"navLeft",class:"navHidden",position:[20,0,0,-60]},{menuList:f(()=>[(o(!0),r(x,null,$(P.value,e=>(o(),r("div",{onClick:d=>T(e.link),key:e.id},[l("div",null,[l("img",{src:`./image/link/${e.image}`,title:e.name,style:S(`width: 23px; height: 23px; padding: ${e.padding}px;`)},null,12,ye),l("span",{style:S(`color: ${e.color};`)},N(e.name),5)]),i(g,{src:"./image/SF-Symbol/link.svg",color:e.color},null,8,["color"])],8,fe))),128))]),default:f(()=>[i(g,{src:"./image/SF-Symbol/phone.svg"}),t[5]||(t[5]=l("span",null,"联系",-1))]),_:1})):R("",!0),t[9]||(t[9]=l("div",{id:"navTitle",class:"navHidden"},[l("img",{src:"./image/lianjun.png"}),l("span",null,"LianJun")],-1)),i(j,{id:"navRight",class:"navHidden"},{menuList:f(()=>[l("div",{onClick:t[1]||(t[1]=Y(e=>a("setting"),["stop"]))},[l("div",null,[i(g,{src:"./image/SF-Symbol/gearshape.svg"}),t[6]||(t[6]=l("span",null,"设置",-1))]),i(g,{option:"forward"})]),n.$route.name!=="lianjun"?(o(),G(j,{key:0,onIsOpen:b},{menuList:f(()=>[(o(!0),r(x,null,$(P.value,e=>(o(),r("div",{onClick:d=>T(e.link),key:e.id},[l("div",null,[l("img",{src:`./image/link/${e.image}`,title:e.name,style:S(`width: 23px; height: 23px; padding: ${e.padding}px;`)},null,12,ke),l("span",{style:S(`color: ${e.color};`)},N(e.name),5)]),i(g,{src:"./image/SF-Symbol/link.svg",color:e.color},null,8,["color"])],8,he))),128))]),default:f(()=>[l("div",null,[i(g,{src:"./image/SF-Symbol/phone.svg"}),t[7]||(t[7]=l("span",null,"联系",-1))]),i(g,{option:"down",rotate:E.value},null,8,["rotate"])]),_:1})):R("",!0)]),default:f(()=>[i(g,{src:"./image/SF-Symbol/list.bullet.svg"}),t[8]||(t[8]=l("span",null,"功能",-1))]),_:1})]),l("div",we,[t[15]||(t[15]=l("div",{class:"contentBackground"},null,-1)),l("div",Be,[t[14]||(t[14]=l("div",null,[l("img",{src:"./image/lianjun.png"}),l("p",null,"LianJun")],-1)),l("div",Se,[(o(!0),r(x,null,$(P.value,e=>(o(),r("div",{key:e.id},[l("div",Le,[l("a",{href:e.link,target:"_blank"},[l("img",{src:`./image/link/${e.image}`,title:e.name,style:S(`padding: ${e.padding}px;`)},null,12,xe)],8,Ce)])]))),128)),t[13]||(t[13]=l("div",{class:"divider blur"},null,-1)),i(j,{selectRadius:8,position:[10,0,0,-75]},{menuList:f(()=>[l("div",{onClick:t[2]||(t[2]=Y(e=>a("setting"),["stop"]))},[l("div",null,[i(g,{src:"./image/SF-Symbol/gearshape.svg"}),t[10]||(t[10]=l("span",null,"设置",-1))]),i(g,{option:"forward"})]),i(j,{onIsOpen:b},{menuList:f(()=>[(o(!0),r(x,null,$(P.value,e=>(o(),r("div",{onClick:d=>T(e.link),key:e.id},[l("div",null,[l("img",{src:`./image/link/${e.image}`,title:e.name,style:S(`width: 23px; height: 23px; padding: ${e.padding}px;`)},null,12,$e),l("span",{style:S(`color: ${e.color};`)},N(e.name),5)]),i(g,{src:"./image/SF-Symbol/link.svg",color:e.color},null,8,["color"])],8,be))),128))]),default:f(()=>[l("div",null,[i(g,{src:"./image/SF-Symbol/phone.svg"}),t[11]||(t[11]=l("span",null,"联系",-1))]),i(g,{option:"down",rotate:E.value},null,8,["rotate"])]),_:1})]),default:f(()=>[t[12]||(t[12]=l("div",{class:"switchBlur blur"},[l("img",{class:"linkButtonImage",src:"./image/link/setting.png",title:"设置",style:{padding:"4px"}})],-1))]),_:1})])]),i(re,null,{default:f(()=>[i(ee,{main:"简历",sub:"喜欢研究 UI 的独立开发者","sub-icon":"subForward"}),i(ee,{onClick:t[3]||(t[3]=e=>a("sklist")),main:"经历",sub:"iOS 开发、前端开发、UI 设计 等","sub-icon":"subForward"}),l("div",{class:"skillScrollRow",ref_key:"skillScrollRow",ref:c},[l("div",{class:"scrollView",ref_key:"skillScrollSubRow1",ref:w},[(o(!0),r(x,null,$(M.value,e=>(o(),r("div",{key:e.id},[l("img",{src:`./image/skill/${e.image}`,class:"skillImage",width:e.size,style:S(`margin-right: ${e.marginRight}px; border-radius: ${e.radius}px;`),title:e.info},null,12,Re)]))),128))],512),l("div",{class:"scrollView",ref_key:"skillScrollSubRow2",ref:B},[(o(!0),r(x,null,$(M.value,e=>(o(),r("div",{key:e.id},[l("img",{src:`./image/skill/${e.image}`,class:"skillImage",width:e.size,style:S(`margin-right: ${e.marginRight}px; border-radius: ${e.radius}px;`),title:e.info},null,12,_e)]))),128))],512)],512)]),_:1}),i(ge,{class:"blur",options:q.value,selected:h.value,onFilterChange:m,style:{"z-index":"1"}},null,8,["options","selected"]),i(ue,{columnCount:4},{default:f(()=>[(o(!0),r(x,null,$(W.value,e=>(o(),r("div",{key:e.path},[(o(),G(ce,{item:e,class:"switchBlur blur",onClick:d=>a(e.sub?"sublist":"content",e.path),key:e.path},null,8,["item","onClick"]))]))),128))]),_:1})])],512))}},Fe=te(Me,[["__scopeId","data-v-911f4239"]]);export{Fe as default};
