import{r as f,c as l,o as m,k as S,b as h,d as y,n as d}from"./index-CSPcsrkT.js";const b=["innerHTML"],z={__name:"SvgIcon",props:{src:{type:String},color:{type:String},size:{type:[Number,Array]},rotate:{type:Number},option:{type:String}},setup(u){const o=u,r=f("");async function c(){let e=null;if(o.option?e=await fetch(t("src")):e=await fetch(o.src),!e.ok)throw new Error(`SVG加载失败: ${e.statusText}`);const s=await e.text();r.value=s,g()}function g(){const n=new DOMParser().parseFromString(r.value,"image/svg+xml").querySelector("svg");let i="var(--themeColor)";o.color?i=o.color:o.option&&t("color")&&(i=t("color")),n&&(n.querySelectorAll("[fill]").forEach(a=>a.setAttribute("fill",i)),n.querySelectorAll("[stroke]").forEach(a=>a.setAttribute("stroke",i))),r.value=n.outerHTML}const p=l(()=>{let e=18;return o.size?e=o.size:o.option&&t("size")&&(e=t("size")),typeof e=="number"?{width:`${e}px`,height:`${e}px`}:Array.isArray(e)?{width:`${e[0]}px`,height:`${e[1]}px`}:e}),v=l(()=>{let e=0;return o.rotate?e=o.rotate:o.option&&t("rotate")&&(e=t("rotate")),e});function t(e){return{back:{src:"./image/SF-Symbol/chevron.svg",size:[13,17],rotate:180},forward:{src:"./image/SF-Symbol/chevron.svg",size:[11,14]},subForward:{src:"./image/SF-Symbol/chevron.svg",color:"var(--subTextColor)",size:[11,14]},down:{src:"./image/SF-Symbol/chevron.svg",size:[11,11],rotate:90},upAndDown:{src:"./image/SF-Symbol/chevron.up.chevron.down.svg",color:"var(--subTextColor)",size:[11,12]},none:{src:""}}[o.option][e]}return m(()=>{c()}),S(o,c),(e,s)=>(h(),y("div",{innerHTML:r.value,class:"svgIcon",style:d([p.value,{transform:`rotate(${v.value}deg)`}])},null,12,b))}};export{z as _};
