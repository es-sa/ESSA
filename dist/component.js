import t,{useRef as e,useEffect as a}from"react";import{ESSA as s}from"./main.js";const r=({type:r,duration:i,delay:n,timing:o,once:d,className:u,children:c})=>{const l=e(null);return a((()=>{const t=l.current;if(!t)return;const e=d?"false":"true";return t.setAttribute("data-sa",`${r}`),t.setAttribute("data-sa-duration",`${i}`),t.setAttribute("data-sa-delay",`${n}`),t.setAttribute("data-sa-time",`${o}`),t.setAttribute("data-sa-once",e),s.saNodes.push(t),s.intersection(),()=>{s.saNodes=s.saNodes.filter((e=>e!==t))}}),[r,i,n,o,d]),t.createElement("div",{className:`saBox ${u}`,ref:l},c)};export{r as SaBox};
//# sourceMappingURL=component.js.map
