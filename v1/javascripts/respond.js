!function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=42===g.offsetWidth,d.removeChild(f),{matches:c,media:a}}}(a.document)}(this);

!function(a){"use strict";function x(){t(!0)}var b={};a.respond=b,b.update=function(){};var c=[],d=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),e=function(a,b){var c=d();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))};if(b.ajax=e,b.queue=c,b.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},b.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!b.mediaQueriesSupported){var p,q,r,f=a.document,g=f.documentElement,h=[],i=[],j=[],k={},l=30,m=f.getElementsByTagName("head")[0]||g,n=f.getElementsByTagName("base")[0],o=m.getElementsByTagName("link"),s=function(){var a,b=f.createElement("div"),c=f.body,d=g.style.fontSize,e=c&&c.style.fontSize,h=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=h=f.createElement("body"),c.style.background="none"),g.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),h&&g.insertBefore(c,g.firstChild),a=b.offsetWidth,h?g.removeChild(c):c.removeChild(b),g.style.fontSize=d,e&&(c.style.fontSize=e),a=r=parseFloat(a)},t=function(b){var c="clientWidth",d=g[c],e="CSS1Compat"===f.compatMode&&d||f.body[c]||d,k={},n=o[o.length-1],u=(new Date).getTime();if(b&&p&&l>u-p)return a.clearTimeout(q),q=a.setTimeout(t,l),void 0;p=u;for(var v in h)if(h.hasOwnProperty(v)){var w=h[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?r||s():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?r||s():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(k[w.media]||(k[w.media]=[]),k[w.media].push(i[w.rules]))}for(var C in j)j.hasOwnProperty(C)&&j[C]&&j[C].parentNode===m&&m.removeChild(j[C]);j.length=0;for(var D in k)if(k.hasOwnProperty(D)){var E=f.createElement("style"),F=k[D].join("\n");E.type="text/css",E.media=D,m.insertBefore(E,n.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(f.createTextNode(F)),j.push(E)}},u=function(a,c,d){var e=a.replace(b.regex.comments,"").replace(b.regex.keyframes,"").match(b.regex.media),f=e&&e.length||0;c=c.substring(0,c.lastIndexOf("/"));var g=function(a){return a.replace(b.regex.urls,"$1"+c+"$2$3")},j=!f&&d;c.length&&(c+="/"),j&&(f=1);for(var k=0;f>k;k++){var l,m,n,o;j?(l=d,i.push(g(a))):(l=e[k].match(b.regex.findStyles)&&RegExp.$1,i.push(RegExp.$2&&g(RegExp.$2))),n=l.split(","),o=n.length;for(var p=0;o>p;p++)m=n[p],h.push({media:m.split("(")[0].match(b.regex.only)&&RegExp.$2||"all",rules:i.length-1,hasquery:m.indexOf("(")>-1,minw:m.match(b.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:m.match(b.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}t()},v=function(){if(c.length){var b=c.shift();e(b.href,function(c){u(c,b.href,b.media),k[b.href]=!0,a.setTimeout(function(){v()},0)})}},w=function(){for(var b=0;b<o.length;b++){var d=o[b],e=d.href,f=d.media,g=d.rel&&"stylesheet"===d.rel.toLowerCase();e&&g&&!k[e]&&(d.styleSheet&&d.styleSheet.rawCssText?(u(d.styleSheet.rawCssText,e,f),k[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!n||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),c.push({href:e,media:f})))}v()};w(),b.update=w,b.getEmValue=s,a.addEventListener?a.addEventListener("resize",x,!1):a.attachEvent&&a.attachEvent("onresize",x)}}(this);