System.register(["jimu-core/emotion","jimu-core","jimu-core/react"],function(e,r){var t={},i={},a={};return{setters:[function(e){t.Fragment=e.Fragment,t.jsx=e.jsx,t.jsxs=e.jsxs},function(e){i.DataSourceManager=e.DataSourceManager,i.React=e.React,i.ReactRedux=e.ReactRedux,i.css=e.css},function(e){a.useId=e.useId}],execute:function(){e((()=>{var e={9244(e){"use strict";e.exports=i},7386(e){"use strict";e.exports=t},8972(e){"use strict";e.exports=a}},r={};function s(t){var i=r[t];if(void 0!==i)return i.exports;var a=r[t]={exports:{}};return e[t](a,a.exports,s),a.exports}s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var o={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(o),s.d(o,{__set_webpack_public_path__:()=>j,default:()=>g});var e=s(7386),r=s(9244);const t=e=>{const t="var(--sys-color-on-surface, var(--ref-palette-neutral-900, #1a202c))",i="var(--sys-color-outline, var(--ref-palette-neutral-600, #718096))",a="var(--sys-color-outline-variant, var(--ref-palette-neutral-300, #e2e8f0))";return r.css`
    /* Root element level - matches working widget pattern */
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    background-color: ${"var(--sys-color-surface-container-lowest, var(--ref-palette-neutral-50, #f7fafc))"};
  
    /* Dashboard inner container - adopts flex collapse rules */
    .wx-dashboard-container {
      flex: 1 1 0px;
      min-height: 0;
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      box-sizing: border-box;
    }

    /* Section Header */
    .wx-section-header {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      justify-content: space-between;
      padding-bottom: 8px;
      border-bottom: 1px solid ${a};
      flex-shrink: 0;
    }

    .wx-section-title {
      margin: 0;
      font-size: 1.125rem;
      font-weight: 700;
      color: ${t};
    }

    .wx-station-badge {
      font-size: 0.8125rem;
      font-weight: 500;
      color: ${i};
    }

    /* Grid layout */
    .wx-card-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 16px;
      align-items: stretch;
      width: 100%;
      box-sizing: border-box;
    }

    /* Standardized Card Box Structure */
    .wx-card {
      width: 100%;
      min-width: 0;
      background-color: ${"var(--sys-color-surface, var(--ref-palette-neutral-100, #ffffff))"};
      border: 1px solid ${a};
      border-radius: 10px;
      padding: 14px 18px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
    }

    /* Alert Variant Border Styles */
    .wx-card--alert-heat { border-left: 4px solid #dd6b20; }
    .wx-card--alert-cold { border-left: 4px solid #3182ce; }
    .wx-card--alert-danger { border-left: 4px solid #e53e3e; }

    /* Card Header Bar */
    .wx-card-header-bar {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      height: 20px;
      flex-shrink: 0;
      position: relative;
      overflow: visible;
    }

    .wx-card-header {
      margin: 0;
      padding: 0;
      color: ${t};
      position: relative;
      display: inline-block;
      font-size: 0.875rem;
      font-weight: 600;
      white-space: nowrap;
      overflow: visible;
      text-overflow: ellipsis;
    }

    /* Tooltips */
    .wx-card-header[data-tooltip] { cursor: help; }
    .wx-card-header[data-tooltip]:hover { text-decoration: underline dotted ${i}; }
    .wx-card-header[data-tooltip]:hover::after {
      content: attr(data-tooltip);
      position: absolute;
      top: 130%;
      left: 0;
      background-color: var(--ref-palette-neutral-900, #1a202c);
      color: #ffffff;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 0.725rem;
      font-weight: 400;
      line-height: 1.35;
      white-space: normal;
      width: 200px;
      z-index: 100;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      pointer-events: none;
    }

    /* Status Badges */
    .wx-badge {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      padding: 2px 6px;
      border-radius: 4px;
      line-height: 1;
      flex-shrink: 0;
    }

    .wx-badge--heat { background-color: #feebc8; color: #7b341e; }
    .wx-badge--cold { background-color: #ebf8ff; color: #2c5282; }
    .wx-badge--danger { background-color: #fed7d7; color: #9b2c2c; }
    .wx-badge--good { background-color: #c6f6d5; color: #22543d; }
    .wx-badge--moderate { background-color: #fefcbf; color: #c26b14; }
    .wx-badge--unhealthy { background-color: #feebc8; color: #cc0d0d; }

    /* Card Body & Graphic Framing */
    .wx-card-body {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      flex-grow: 1;
      min-width: 0;
    }

    .wx-graphic-frame {
      width: 52px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      overflow: visible;
    }

    .wx-card-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: 0;
      overflow: hidden;
    }

    /* Metric Typography */
    .wx-primary-val {
      font-size: 1.75rem;
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.02em;
      color: ${t};
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }

    .wx-secondary-val {
      font-size: 0.75rem;
      font-weight: 500;
      color: ${i};
      margin-top: 4px;
      line-height: 1.2;
      white-space: nowrap;
    }

    /* Responsive Grid Breakpoints */
    @media (max-width: 1100px) {
      .wx-card-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      }
    }

    @media (max-width: 600px) {
      .wx-card-grid {
        grid-template-columns: 1fr;
      }
    }
  `};var i=s(8972);const a=({speedKnots:r,directionDegrees:t,size:i=100,valid:a})=>{let s=5*Math.round((r||0)/5);const o=0===s,l=Math.floor(s/50);s%=50;const n=Math.floor(s/10);s%=10;const d=Math.floor(s/5),c=[];let x=-45;if(!o){for(let r=0;r<l;r++)c.push((0,e.jsx)("polygon",{points:`0,${x} 15,${x+-6} 0,${x+8}`,fill:"currentColor"},`pennant-${r}`)),x+=10;for(let r=0;r<n;r++)c.push((0,e.jsx)("line",{x1:"0",y1:x,x2:15,y2:x+-6,stroke:"currentColor",strokeWidth:"2.5"},`full-${r}`)),x+=6;for(let r=0;r<d;r++){const t=0===l&&0===n?x+6:x;c.push((0,e.jsx)("line",{x1:"0",y1:t,x2:7.5,y2:t+-3,stroke:"currentColor",strokeWidth:"2.5"},`half-${r}`))}}const h=!0===a?"#2e7d32":!1===a?"#d32f2f":"currentColor";return(0,e.jsxs)("svg",{width:i,height:i,viewBox:"-60 -60 120 120",className:"wind-barb-svg",style:{overflow:"visible",color:h},children:[(0,e.jsx)("circle",{cx:"0",cy:"0",r:"52",fill:"none",stroke:h,strokeWidth:"2.5",strokeDasharray:"2,4"}),(0,e.jsx)("g",{transform:`rotate(${t})`,children:o?(0,e.jsx)("circle",{cx:"0",cy:"0",r:"10",fill:"none",stroke:"currentColor",strokeWidth:"2.5"}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("line",{x1:"0",y1:"0",x2:"0",y2:"-50",stroke:"currentColor",strokeWidth:"2.5"}),c]})})]})},l=({speedMph:r,directionDegrees:t,valid:i})=>{const s="number"!=typeof r||isNaN(r)?0:r,o="number"!=typeof t||isNaN(t)?0:t,l=Math.round(.868976*s);return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"Wind speed and direction, shown as wind barb. Color of the barb is green when wind speed is within burning parameters.",children:"Wind"})}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsx)(a,{speedKnots:l,directionDegrees:o,valid:i,size:75})}),(0,e.jsxs)("div",{className:"wx-card-content",children:[(0,e.jsxs)("div",{className:"wx-primary-val",children:[(Math.round(10*s)/10).toFixed(1),(0,e.jsx)("span",{style:{fontSize:"1.25rem",fontWeight:600},children:" mph"})]}),(0,e.jsxs)("div",{className:"wx-secondary-val",children:[l," kts \u2022 ",Math.round(o),"\xb0"]})]})]})]})},n=({temperature:r,height:t=90,valid:i})=>{const a=60-Math.max(0,Math.min(100,r||0))/100*50,s=i?"#2e7d32":"#d32f2f";return(0,e.jsxs)("svg",{width:.4*t,height:t,viewBox:"0 0 40 100",className:"thermometer-svg",style:{overflow:"visible"},children:[(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:"temp-fill-clip",children:(0,e.jsx)("rect",{x:"0",y:a,width:"40",height:100-a})})}),(0,e.jsx)("path",{d:"M 15 10 A 5 5 0 0 1 25 10 L 25 62 A 12 12 0 1 1 15 62 Z",fill:"#ffffff",stroke:"#4a5568",strokeWidth:"2.5"}),(0,e.jsx)("line",{x1:"26",y1:"60",x2:"31",y2:"60",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"47.5",x2:"29",y2:"47.5",stroke:"#cbd5e0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"35",x2:"31",y2:"35",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"22.5",x2:"29",y2:"22.5",stroke:"#cbd5e0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"10",x2:"31",y2:"10",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("circle",{cx:"20",cy:"72",r:"8",fill:s}),(0,e.jsx)("g",{clipPath:"url(#temp-fill-clip)",children:(0,e.jsx)("rect",{x:"17.5",y:"8",width:"5",height:"64",fill:s})})]})},d=({temperature:r,valid:t})=>{const i="number"!=typeof r||isNaN(r)?"N/A":`${(Math.round(10*r)/10).toFixed(1)}\xb0F`;return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"Current air temperature measured at 10 feet. Fill color will be green when temperature is within burning parameters.",children:"Air Temperature"})}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsx)(n,{temperature:r,height:85,valid:t})}),(0,e.jsx)("div",{className:"wx-card-content",children:(0,e.jsx)("div",{className:"wx-primary-val",children:i})})]})]})},c=({rhPercent:r,height:t=90,valid:a})=>{const s=(0,i.useId)(),o=a?"#2e7d32":"#d32f2f",l=85-Math.max(0,Math.min(100,r||0))/100*75,n="M 20 10 C 20 10 35 45 35 60 A 15 15 0 0 1 5 60 C 5 45 20 10 20 10 Z";return(0,e.jsxs)("svg",{width:.6*t,height:t,viewBox:"0 0 40 100",className:"rh-droplet-svg",style:{overflow:"visible"},children:[(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:`rh-fill-clip-${s}`,children:(0,e.jsx)("rect",{x:"0",y:l,width:"40",height:100-l})})}),(0,e.jsx)("path",{d:n,fill:"#f0f4f8",stroke:"#4a5568",strokeWidth:"2.5"}),(0,e.jsx)("g",{clipPath:`url(#rh-fill-clip-${s})`,children:(0,e.jsx)("path",{d:n,fill:o})}),(0,e.jsx)("path",{d:"M 17 25 C 17 25 28 50 26 62",fill:"none",stroke:"#ffffff",strokeWidth:"2",strokeLinecap:"round",opacity:.6})]})},x=({rh:r,valid:t})=>{const i="number"!=typeof r||isNaN(r)?"N/A":`${(Math.round(10*r)/10).toFixed(1)}%`;return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"Current Relative Humidity. Fill color will be green when temperature is within burning parameters.",children:"Relative Humidity"})}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsx)(c,{rhPercent:r,height:85,valid:t})}),(0,e.jsx)("div",{className:"wx-card-content",children:(0,e.jsx)("div",{className:"wx-primary-val",children:i})})]})]})},h=({moisturePercent:r,height:t=90})=>{const a=(0,i.useId)(),s=`leaf-moisture-clip-${a}`,o=`leaf-shape-${a}`,l=85-Math.max(0,Math.min(100,r||0))/100*75;return(0,e.jsxs)("svg",{width:.7*t,height:t,viewBox:"0 0 50 100",className:"fuel-moisture-svg",style:{overflow:"visible"},children:[(0,e.jsxs)("defs",{children:[(0,e.jsx)("path",{id:o,d:"M 25 10 C 38 25 45 50 35 75 C 28 85 22 85 15 75 C 5 50 12 25 25 10 Z"}),(0,e.jsx)("clipPath",{id:s,children:(0,e.jsx)("rect",{x:"0",y:l,width:"50",height:100-l})})]}),(0,e.jsx)("use",{href:`#${o}`,fill:"#f4f0ea",stroke:"#4a5568",strokeWidth:"2.5",strokeLinejoin:"round"}),(0,e.jsx)("path",{d:"M 25 78 C 25 85 27 90 30 94",fill:"none",stroke:"#4a5568",strokeWidth:"2.5",strokeLinecap:"round"}),(0,e.jsx)("g",{clipPath:`url(#${s})`,children:(0,e.jsx)("use",{href:`#${o}`,fill:"#3182ce"})}),(0,e.jsx)("path",{d:"M 25 15 L 25 76",fill:"none",stroke:"#718096",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.6"}),(0,e.jsx)("path",{d:"M 25 32 Q 33 28 38 26 M 25 32 Q 17 28 12 26",fill:"none",stroke:"#718096",strokeWidth:"1",opacity:"0.5"}),(0,e.jsx)("path",{d:"M 25 48 Q 33 44 38 42 M 25 48 Q 17 44 12 42",fill:"none",stroke:"#718096",strokeWidth:"1",opacity:"0.5"}),(0,e.jsx)("path",{d:"M 25 64 Q 31 61 35 60 M 25 64 Q 19 61 15 60",fill:"none",stroke:"#718096",strokeWidth:"1",opacity:"0.5"})]})},u=({moisturePercent:r})=>{const t="number"!=typeof r||isNaN(r)?"N/A":`${(Math.round(10*r)/10).toFixed(1)}%`;return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"Fuel Moisture Percent. Leaf fills as moisture rises.",children:"Fuel Moisture"})}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsx)(h,{moisturePercent:r})}),(0,e.jsx)("div",{className:"wx-card-content",children:(0,e.jsxs)("div",{className:"wx-primary-val",children:[t,(0,e.jsx)("span",{style:{fontSize:"1.25rem",fontWeight:600}})]})})]})]})},f=({isiValue:r,size:t=90})=>{const i=Math.max(0,Math.min(50,r||0))/50*180-90;return(0,e.jsxs)("svg",{width:t,height:.65*t,viewBox:"-50 -50 100 60",className:"isi-gauge-svg",style:{overflow:"visible"},children:[(0,e.jsx)("path",{d:"M -40 0 A 40 40 0 0 1 40 0",fill:"none",stroke:"#e2e8f0",strokeWidth:"8",strokeLinecap:"round"}),(0,e.jsx)("path",{d:"M -40 0 A 40 40 0 0 1 40 0",fill:"none",stroke:"#cbd5e0",strokeWidth:"1.5"}),(0,e.jsxs)("g",{transform:`rotate(${i})`,children:[(0,e.jsx)("line",{x1:"0",y1:"0",x2:"0",y2:"-34",stroke:"#2d3748",strokeWidth:"3.5",strokeLinecap:"round"}),(0,e.jsx)("circle",{cx:"0",cy:"0",r:"5",fill:"#1a202c"})]}),(0,e.jsx)("text",{x:"-40",y:"16",fontSize:"8",fill:"#718096",textAnchor:"middle",fontWeight:"bold",children:"0"}),(0,e.jsx)("text",{x:"40",y:"16",fontSize:"8",fill:"#718096",textAnchor:"middle",fontWeight:"bold",children:"50+"})]})},p=({isi:r})=>(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"ISI.",children:"ISI"})}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsx)(f,{isiValue:r})}),(0,e.jsx)("div",{className:"wx-card-content",children:(0,e.jsxs)("div",{className:"wx-primary-val",children:[r,(0,e.jsx)("span",{style:{fontSize:"1.25rem",fontWeight:600}})]})})]})]});var m=function(e,r,t,i){return new(t||(t=Promise))(function(a,s){function o(e){try{n(i.next(e))}catch(e){s(e)}}function l(e){try{n(i.throw(e))}catch(e){s(e)}}function n(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t(function(e){e(r)})).then(o,l)}n((i=i.apply(e,r||[])).next())})};const{useState:v,useEffect:w}=r.React;const g=r.ReactRedux.connect(e=>{const r=e.widgetsState;let t="";return r&&Object.keys(r).forEach(r=>{const i=e.getIn(["widgetsState",r,"selectedStation"]);i&&(t=i)}),{selectedStation:t}})(function(i){var a,s;const{config:o,useDataSources:n,selectedStation:c,theme:h}=i,[f,g]=v(null),[j,b]=v(null),[y,k]=v(!1),[N,M]=v(null),S=null===(a=null==n?void 0:n[0])||void 0===a?void 0:a.dataSourceId,W=null===(s=null==n?void 0:n[1])||void 0===s?void 0:s.dataSourceId;return w(()=>{var e,t,i,a,s,l,d,x;if(!S||!c)return;let h=!0;const u=(null===(e=null==o?void 0:o.currentWx)||void 0===e?void 0:e.stationNameField)||"station_name",f=(null===(t=null==o?void 0:o.currentWx)||void 0===t?void 0:t.windSpeedField)||"ws_mph",p=(null===(i=null==o?void 0:o.currentWx)||void 0===i?void 0:i.windDirField)||"winddir",v=(null===(a=null==o?void 0:o.currentWx)||void 0===a?void 0:a.temperatureField)||"airt_f",w=(null===(s=null==o?void 0:o.currentWx)||void 0===s?void 0:s.rhField)||"rh",j=(null===(l=null==o?void 0:o.fireWx)||void 0===l?void 0:l.fuelMoistureField)||"fuelm",y=(null===(d=null==o?void 0:o.fireWx)||void 0===d?void 0:d.isiField)||"isi",N=(null===(x=null==o?void 0:o.fireWx)||void 0===x?void 0:x.timeField)||"time",$=e=>{if(e)return"function"==typeof e.asMutable?e.asMutable({deep:!0}):JSON.parse(JSON.stringify(e))},F=(e,t)=>m(this,void 0,void 0,function*(){if(!e)return null;const i=r.DataSourceManager.getInstance();let a=i.getDataSource(e);return!a&&t&&(a=yield i.createDataSourceByUseDataSource(t)),a}),C=(...e)=>m(this,[...e],void 0,function*(e=!1){var r,t,i,a,s,o;e||k(!0),M(null);try{const e=$(null==n?void 0:n[0]),l=$(null==n?void 0:n[1]),[d,x]=yield Promise.all([F(S,e),F(W,l)]);if(!h)return;const m={where:`${u} = '${c}'`,outFields:["*"],returnGeometry:!1,cacheBust:!0},k={where:"1=1",outFields:["*"],orderByFields:[`${N} DESC`],resultRecordCount:1,returnGeometry:!1,cacheBust:!0},M=[d?d.query(m):Promise.resolve(null),x?x.query(k):Promise.resolve(null)],[C,z]=yield Promise.all(M);if(!h)return;if((null==C?void 0:C.records)&&C.records.length>0){const e=C.records[0].getData();g({stationName:String(e[u]||c),windSpeed:Number(null!==(r=e[f])&&void 0!==r?r:0),windDirection:Number(null!==(t=e[p])&&void 0!==t?t:0),temperature:Number(null!==(i=e[v])&&void 0!==i?i:0),rh:Number(null!==(a=e[w])&&void 0!==a?a:0),rawAttributes:e})}else g(null);if((null==z?void 0:z.records)&&z.records.length>0){const e=z.records[0].getData();b({fuelMoisture:Number(null!==(s=e[j])&&void 0!==s?s:0),isi:Number(null!==(o=e[y])&&void 0!==o?o:0)})}else b(null)}catch(e){if(!h)return;console.error("[Wx Dashboard Query Error]",e),M((null==e?void 0:e.message)||"Failed to query weather layers")}finally{h&&k(!1)}});C(!1);const z=setInterval(()=>C(!0),6e4);return()=>{h=!1,clearInterval(z)}},[S,W,c,n,o]),(0,e.jsx)("div",{css:t(),className:"widget-wind-card wx-dashboard-container",children:c?(0,e.jsxs)("div",{style:{height:"100%",overflow:"auto"},children:[y&&(0,e.jsx)("p",{children:(0,e.jsx)("em",{children:"Loading telemetry data..."})}),N&&(0,e.jsxs)("p",{style:{color:"red"},children:[(0,e.jsx)("strong",{children:"Error:"})," ",N]}),f?(0,e.jsxs)("div",{className:"wx-card-grid",children:[(0,e.jsx)(l,{speedMph:f.windSpeed,directionDegrees:f.windDirection,valid:f.windSpeed>=4&&f.windSpeed<=20}),(0,e.jsx)(d,{temperature:f.temperature,valid:f.temperature>=40&&f.temperature<=85}),(0,e.jsx)(x,{rh:f.rh,valid:f.rh>=20&&f.rh<=75}),(0,e.jsx)(u,{moisturePercent:j.fuelMoisture}),(0,e.jsx)(p,{isi:j.isi})]}):!y&&(0,e.jsxs)("p",{children:["No weather data retrieved for ",c,"."]})]}):(0,e.jsxs)("div",{className:"wx-cards-placeholder",children:[(0,e.jsx)("h6",{children:"Weather Condition Dashboard"}),(0,e.jsx)("p",{className:"mb-0 text-muted",style:{fontSize:"12px"},children:"Waiting for station selection..."})]})})});function j(e){s.p=e}})(),o})())}}});