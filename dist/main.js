const e={saNodes:[],threshold:.1,setThreshold:function(s){"string"==typeof s&&(""===(s=s.trim())&&(console.warn("threshold value is empty, using default value 0.1"),s=.1),isFinite(Number(s))||(console.warn(`invalid threshold value "${s}", using default value 0.1`),s=.1),s=Number(s)),"number"!=typeof s&&(console.warn(`invalid threshold value "${s}", using default value 0.1`),s=.1),s>1?(console.warn(`threshold value "${s}" cannot be greater than 1, using maximum value 1`),s=1):s<0&&(console.warn(`threshold value "${s}" cannot be less than 0, using minimum value 0`),s=0),e.threshold=s},intersection:function(){if(e.saNodes&&e.saNodes.length)for(const n of e.saNodes)s.observe(n)},init:function(s){if(!e.saNodes||0===e.saNodes.length)throw new Error("No matching elements found");void 0!==s&&e.setThreshold(s),e.intersection()}},s=new IntersectionObserver((e=>{e.forEach((e=>{const n=e.target;if(!(n instanceof HTMLDivElement))return!1;"true"!==n.dataset.saOnce?e.isIntersecting?n.classList.add("saShow"):!e.isIntersecting&&n.classList.contains("saShow")&&n.classList.remove("saShow"):e.isIntersecting&&(n.classList.add("saShow"),s.unobserve(n))}))}),{threshold:e.threshold});export{e as ESSA};
//# sourceMappingURL=main.js.map
