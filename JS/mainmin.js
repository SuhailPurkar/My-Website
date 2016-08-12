function launchParticlesJS(t,e){function n(){pJS.fn.canvasInit(),pJS.fn.canvasSize(),pJS.fn.canvasPaint(),pJS.fn.particlesCreate(),pJS.fn.particlesDraw(),pJS.fn.densityAuto()}function i(){pJS.fn.particlesDraw(),pJS.fn.requestAnimFrame=requestAnimFrame(i)}var r=document.querySelector("#"+t+" > canvas");if(pJS={canvas:{el:r,w:r.offsetWidth,h:r.offsetHeight},particles:{color:"#fff",color_random:!1,shape:"circle",opacity:{opacity:1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:2.5,size_random:!0,nb:200,line_linked:{enable_auto:!0,distance:100,color:"#fff",opacity:1,width:1,condensed_mode:{enable:!1,rotateX:3e3,rotateY:3e3}},anim:{enable:!0,speed:2},array:[]},interactivity:{enable:!0,mouse:{distance:100},detect_on:"canvas",mode:"grab",line_linked:{opacity:1},events:{onclick:{enable:!0,mode:"push",nb:4},onresize:{enable:!0,mode:"out",density_auto:!0,density_area:800}}},retina_detect:!1,fn:{vendors:{interactivity:{}}}},e){if(e.particles){var a=e.particles;if(a.color&&(pJS.particles.color=a.color),a.color_random&&(pJS.particles.color_random=a.color_random),a.shape&&(pJS.particles.shape=a.shape),a.opacity){var o=a.opacity;if(pJS.particles.opacity.opacity="object"==typeof o?o.opacity:o,o.anim){var s=o.anim;(0==s.enable||s.enable)&&(pJS.particles.opacity.anim.enable=s.enable),s.speed&&(pJS.particles.opacity.anim.speed=s.speed),s.opacity_min&&(pJS.particles.opacity.anim.opacity_min=s.opacity_min),(0==s.sync||s.sync)&&(pJS.particles.opacity.anim.sync=s.sync)}}if(a.size&&(pJS.particles.size=a.size),0==a.size_random&&(pJS.particles.size_random=a.size_random),a.nb&&(pJS.particles.nb=a.nb),a.line_linked){var c=a.line_linked;if(0==c.enable_auto&&(pJS.particles.line_linked.enable_auto=c.enable_auto),c.distance&&(pJS.particles.line_linked.distance=c.distance),c.color&&(pJS.particles.line_linked.color=c.color),c.opacity&&(pJS.particles.line_linked.opacity=c.opacity),c.width&&(pJS.particles.line_linked.width=c.width),c.condensed_mode){var l=c.condensed_mode;0==l.enable&&(pJS.particles.line_linked.condensed_mode.enable=l.enable),l.rotateX&&(pJS.particles.line_linked.condensed_mode.rotateX=l.rotateX),l.rotateY&&(pJS.particles.line_linked.condensed_mode.rotateY=l.rotateY)}}if(a.anim){var u=a.anim;0==u.enable&&(pJS.particles.anim.enable=u.enable),u.speed&&(pJS.particles.anim.speed=u.speed)}}if(e.interactivity){var p=e.interactivity;if(0==p.enable&&(pJS.interactivity.enable=p.enable),p.mouse&&p.mouse.distance&&(pJS.interactivity.mouse.distance=p.mouse.distance),p.detect_on&&(pJS.interactivity.detect_on=p.detect_on),(0==p.mode||p.mode)&&(pJS.interactivity.mode=p.mode),p.line_linked&&p.line_linked.opacity&&(pJS.interactivity.line_linked.opacity=p.line_linked.opacity),p.events){var d=p.events;if(d.onclick){var f=d.onclick;0==f.enable&&(pJS.interactivity.events.onclick.enable=!1),"push"!=f.mode&&(pJS.interactivity.events.onclick.mode=f.mode),f.nb&&(pJS.interactivity.events.onclick.nb=f.nb)}if(d.onresize){var h=d.onresize;0==h.enable&&(pJS.interactivity.events.onresize.enable=!1),h.mode&&(pJS.interactivity.events.onresize.mode=h.mode),(0==h.density_auto||h.density_auto)&&(pJS.interactivity.events.onresize.density_auto=h.density_auto),h.density_area&&(pJS.interactivity.events.onresize.density_area=h.density_area)}}}pJS.retina_detect=e.retina_detect}pJS.particles.color_rgb=hexToRgb(pJS.particles.color),pJS.particles.line_linked.color_rgb_line=hexToRgb(pJS.particles.line_linked.color),pJS.retina_detect&&window.devicePixelRatio>1&&(pJS.retina=!0,pJS.canvas.pxratio=window.devicePixelRatio,pJS.canvas.w=pJS.canvas.el.offsetWidth*pJS.canvas.pxratio,pJS.canvas.h=pJS.canvas.el.offsetHeight*pJS.canvas.pxratio,pJS.particles.anim.speed=pJS.particles.anim.speed*pJS.canvas.pxratio,pJS.particles.line_linked.distance=pJS.particles.line_linked.distance*pJS.canvas.pxratio,pJS.particles.line_linked.width=pJS.particles.line_linked.width*pJS.canvas.pxratio,pJS.interactivity.mouse.distance=pJS.interactivity.mouse.distance*pJS.canvas.pxratio),pJS.fn.canvasInit=function(){pJS.canvas.ctx=pJS.canvas.el.getContext("2d")},pJS.fn.canvasSize=function(){pJS.canvas.el.width=pJS.canvas.w,pJS.canvas.el.height=pJS.canvas.h,window.addEventListener("resize",function(){pJS&&pJS.interactivity.events.onresize.enable&&(pJS.canvas.w=pJS.canvas.el.offsetWidth,pJS.canvas.h=pJS.canvas.el.offsetHeight,pJS.retina&&(pJS.canvas.w*=pJS.canvas.pxratio,pJS.canvas.h*=pJS.canvas.pxratio),pJS.canvas.el.width=pJS.canvas.w,pJS.canvas.el.height=pJS.canvas.h,pJS.fn.canvasPaint(),pJS.particles.anim.enable||(pJS.fn.particlesRemove(),pJS.fn.canvasRemove(),n()),pJS.fn.densityAuto())})},pJS.fn.densityAuto=function(){if(pJS.interactivity.events.onresize.density_auto){var t=pJS.canvas.el.width*pJS.canvas.el.height/1e3;pJS.retina&&(t/=2*pJS.canvas.pxratio);var e=t*pJS.particles.nb/pJS.interactivity.events.onresize.density_area,n=pJS.particles.array.length-e;0>n?pJS.fn.vendors.interactivity.pushParticles(Math.abs(n)):pJS.fn.vendors.interactivity.removeParticles(n)}},pJS.fn.canvasPaint=function(){pJS.canvas.ctx.fillRect(0,0,pJS.canvas.w,pJS.canvas.h)},pJS.fn.canvasRemove=function(){pJS.canvas.ctx.clearRect(0,0,pJS.canvas.w,pJS.canvas.h)},pJS.fn.particle=function(t,e,n){this.x=n?n.x:Math.random()*pJS.canvas.w,this.y=n?n.y:Math.random()*pJS.canvas.h,this.radius=(pJS.particles.size_random?Math.random():1)*pJS.particles.size,pJS.retina&&(this.radius*=pJS.canvas.pxratio),this.color=pJS.particles.color_random?{r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:t,this.opacity=e,pJS.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=pJS.particles.opacity.anim.speed/100,pJS.particles.opacity.anim.sync||(this.vo=this.vo*Math.random())),this.vx=-.5+Math.random(),this.vy=-.5+Math.random()},pJS.fn.particle.prototype.draw=function(){switch(pJS.canvas.ctx.fillStyle="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.opacity+")",pJS.canvas.ctx.beginPath(),pJS.particles.shape){case"circle":pJS.canvas.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,!1);break;case"edge":pJS.canvas.ctx.rect(this.x,this.y,2*this.radius,2*this.radius);break;case"triangle":pJS.canvas.ctx.moveTo(this.x,this.y-this.radius),pJS.canvas.ctx.lineTo(this.x+this.radius,this.y+this.radius),pJS.canvas.ctx.lineTo(this.x-this.radius,this.y+this.radius),pJS.canvas.ctx.closePath()}pJS.canvas.ctx.fill()},pJS.fn.particlesCreate=function(){for(var t=0;t<pJS.particles.nb;t++)pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color_rgb,pJS.particles.opacity.opacity))},pJS.fn.particlesAnimate=function(){for(var t=0;t<pJS.particles.array.length;t++){var e=pJS.particles.array[t];switch(e.x+=e.vx*(pJS.particles.anim.speed/2),e.y+=e.vy*(pJS.particles.anim.speed/2),pJS.particles.opacity.anim.enable&&(1==e.opacity_status?(e.opacity>=pJS.particles.opacity.opacity&&(e.opacity_status=!1),e.opacity+=e.vo):(e.opacity<=pJS.particles.opacity.anim.opacity_min&&(e.opacity_status=!0),e.opacity-=e.vo)),pJS.interactivity.events.onresize.mode){case"bounce":e.x-e.radius>pJS.canvas.w?e.vx=-e.vx:e.x+e.radius<0&&(e.vx=-e.vx),e.y-e.radius>pJS.canvas.h?e.vy=-e.vy:e.y+e.radius<0&&(e.vy=-e.vy);break;case"out":e.x-e.radius>pJS.canvas.w?e.x=e.radius:e.x+e.radius<0&&(e.x=pJS.canvas.w+e.radius),e.y-e.radius>pJS.canvas.h?e.y=e.radius:e.y+e.radius<0&&(e.y=pJS.canvas.h+e.radius)}for(var n=t+1;n<pJS.particles.array.length;n++){var i=pJS.particles.array[n];if(pJS.particles.line_linked.enable_auto&&pJS.fn.vendors.distanceParticles(e,i),pJS.interactivity.enable)switch(pJS.interactivity.mode){case"grab":pJS.fn.vendors.interactivity.grabParticles(e,i)}}}},pJS.fn.particlesDraw=function(){pJS.canvas.ctx.clearRect(0,0,pJS.canvas.w,pJS.canvas.h),pJS.fn.particlesAnimate();for(var t=0;t<pJS.particles.array.length;t++){var e=pJS.particles.array[t];e.draw("rgba("+e.color.r+","+e.color.g+","+e.color.b+","+e.opacity+")")}},pJS.fn.particlesRemove=function(){pJS.particles.array=[]},pJS.fn.vendors.distanceParticles=function(t,e){var n=t.x-e.x,i=t.y-e.y,r=Math.sqrt(n*n+i*i);if(r<=pJS.particles.line_linked.distance){var a=pJS.particles.line_linked.color_rgb_line;if(pJS.canvas.ctx.beginPath(),pJS.canvas.ctx.strokeStyle="rgba("+a.r+","+a.g+","+a.b+","+(pJS.particles.line_linked.opacity-r/pJS.particles.line_linked.distance)+")",pJS.canvas.ctx.moveTo(t.x,t.y),pJS.canvas.ctx.lineTo(e.x,e.y),pJS.canvas.ctx.lineWidth=pJS.particles.line_linked.width,pJS.canvas.ctx.stroke(),pJS.canvas.ctx.closePath(),pJS.particles.line_linked.condensed_mode.enable){var n=t.x-e.x,i=t.y-e.y,o=n/(1e3*pJS.particles.line_linked.condensed_mode.rotateX),s=i/(1e3*pJS.particles.line_linked.condensed_mode.rotateY);e.vx+=o,e.vy+=s}}},pJS.fn.vendors.interactivity.listeners=function(){if("window"==pJS.interactivity.detect_on)var t=window;else var t=pJS.canvas.el;if(t.onmousemove=function(e){if(t==window)var n=e.clientX,i=e.clientY;else var n=e.offsetX||e.clientX,i=e.offsetY||e.clientY;pJS&&(pJS.interactivity.mouse.pos_x=n,pJS.interactivity.mouse.pos_y=i,pJS.retina&&(pJS.interactivity.mouse.pos_x*=pJS.canvas.pxratio,pJS.interactivity.mouse.pos_y*=pJS.canvas.pxratio),pJS.interactivity.status="mousemove")},t.onmouseleave=function(){pJS&&(pJS.interactivity.mouse.pos_x=0,pJS.interactivity.mouse.pos_y=0,pJS.interactivity.status="mouseleave")},pJS.interactivity.events.onclick.enable)switch(pJS.interactivity.events.onclick.mode){case"push":t.onclick=function(){pJS.fn.vendors.interactivity.pushParticles(pJS.interactivity.events.onclick.nb,pJS.interactivity.mouse)};break;case"remove":t.onclick=function(){pJS.fn.vendors.interactivity.removeParticles(pJS.interactivity.events.onclick.nb)}}},pJS.fn.vendors.interactivity.pushParticles=function(t,e){if(pJS)for(var n=0;t>n;n++)pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color_rgb,pJS.particles.opacity.opacity,{x:e?e.pos_x:Math.random()*pJS.canvas.w,y:e?e.pos_y:Math.random()*pJS.canvas.h}))},pJS.fn.vendors.interactivity.removeParticles=function(t){pJS&&pJS.particles.array.splice(0,t)},pJS.fn.vendors.interactivity.grabParticles=function(t,e){var n=t.x-e.x,i=t.y-e.y,r=Math.sqrt(n*n+i*i),a=t.x-pJS.interactivity.mouse.pos_x,o=t.y-pJS.interactivity.mouse.pos_y,s=Math.sqrt(a*a+o*o);if(r<=pJS.particles.line_linked.distance&&s<=pJS.interactivity.mouse.distance&&"mousemove"==pJS.interactivity.status){var c=pJS.particles.line_linked.color_rgb_line;pJS.canvas.ctx.beginPath(),pJS.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+(pJS.interactivity.line_linked.opacity-s/pJS.interactivity.mouse.distance)+")",pJS.canvas.ctx.moveTo(t.x,t.y),pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x,pJS.interactivity.mouse.pos_y),pJS.canvas.ctx.lineWidth=pJS.particles.line_linked.width,pJS.canvas.ctx.stroke(),pJS.canvas.ctx.closePath()}},pJS.fn.vendors.destroy=function(){cancelAnimationFrame(pJS.fn.requestAnimFrame),r.remove(),pJS=null},n(),pJS.particles.anim.enable&&i(),pJS.interactivity.enable&&pJS.fn.vendors.interactivity.listeners()}function hexToRgb(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(t,e,n,i){return e+e+n+n+i+i});var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null}window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),window.particlesJS=function(t,e){"string"!=typeof t&&(e=t,t="particles-js"),t||(t="particles-js");var n=document.createElement("canvas");n.style.width="100%",n.style.height="100%";var i=document.getElementById(t).appendChild(n);null!=i&&launchParticlesJS(t,e)},function(){var t,e,n,i,r,a=function(t,e){return function(){return t.apply(e,arguments)}},o=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,r,a;for(a=this.keys,e=i=0,r=a.length;r>i;e=++i)if(n=a[e],n===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,r,a,o;for(o=this.keys,n=r=0,a=o.length;a>r;n=++r)if(i=o[n],i===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),i=this.getComputedStyle||function(t){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),r.test(e)&&e.replace(r,function(t,e){return e.toUpperCase()}),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},r=/(\-([a-z]){1})/g,this.WOW=function(){function r(t){null==t&&(t={}),this.scrollCallback=a(this.scrollCallback,this),this.scrollHandler=a(this.scrollHandler,this),this.start=a(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),this.animationNameCache=new n}return r.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},r.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},r.prototype.start=function(){var e,n,i,r;if(this.stopped=!1,this.boxes=function(){var t,n,i,r;for(i=this.element.querySelectorAll("."+this.config.boxClass),r=[],t=0,n=i.length;n>t;t++)e=i[t],r.push(e);return r}.call(this),this.all=function(){var t,n,i,r;for(i=this.boxes,r=[],t=0,n=i.length;n>t;t++)e=i[t],r.push(e);return r}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(r=this.boxes,n=0,i=r.length;i>n;n++)e=r[n],this.applyStyle(e,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new t(function(t){return function(e){var n,i,r,a,o;for(o=[],r=0,a=e.length;a>r;r++)i=e[r],o.push(function(){var t,e,r,a;for(r=i.addedNodes||[],a=[],t=0,e=r.length;e>t;t++)n=r[t],a.push(this.doSync(n));return a}.call(t));return o}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},r.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},r.prototype.sync=function(){return t.notSupported?this.doSync(this.element):void 0},r.prototype.doSync=function(t){var e,n,i,r,a;if(null==t&&(t=this.element),1===t.nodeType){for(t=t.parentNode||t,r=t.querySelectorAll("."+this.config.boxClass),a=[],n=0,i=r.length;i>n;n++)e=r[n],o.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),a.push(this.scrolled=!0)):a.push(void 0);return a}},r.prototype.show=function(t){return this.applyStyle(t),t.className=""+t.className+" "+this.config.animateClass,null!=this.config.callback?this.config.callback(t):void 0},r.prototype.applyStyle=function(t,e){var n,i,r;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),r=t.getAttribute("data-wow-iteration"),this.animate(function(a){return function(){return a.customStyle(t,e,i,n,r)}}(this))},r.prototype.animate=function(){return"requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()}}(),r.prototype.resetStyle=function(){var t,e,n,i,r;for(i=this.boxes,r=[],e=0,n=i.length;n>e;e++)t=i[e],r.push(t.style.visibility="visible");return r},r.prototype.customStyle=function(t,e,n,i,r){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),r&&this.vendorSet(t.style,{animationIterationCount:r}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},r.prototype.vendors=["moz","webkit"],r.prototype.vendorSet=function(t,e){var n,i,r,a;a=[];for(n in e)i=e[n],t[""+n]=i,a.push(function(){var e,a,o,s;for(o=this.vendors,s=[],e=0,a=o.length;a>e;e++)r=o[e],s.push(t[""+r+n.charAt(0).toUpperCase()+n.substr(1)]=i);return s}.call(this));return a},r.prototype.vendorCSS=function(t,e){var n,r,a,o,s,c;for(r=i(t),n=r.getPropertyCSSValue(e),c=this.vendors,o=0,s=c.length;s>o;o++)a=c[o],n=n||r.getPropertyCSSValue("-"+a+"-"+e);return n},r.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=i(t).getPropertyValue("animation-name")}return"none"===e?"":e},r.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},r.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},r.prototype.scrollHandler=function(){return this.scrolled=!0},r.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,n,i,r;for(i=this.boxes,r=[],e=0,n=i.length;n>e;e++)t=i[e],t&&(this.isVisible(t)?this.show(t):r.push(t));return r}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},r.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},r.prototype.isVisible=function(t){var e,n,i,r,a;return n=t.getAttribute("data-wow-offset")||this.config.offset,a=window.pageYOffset,r=a+Math.min(this.element.clientHeight,this.util().innerHeight())-n,i=this.offsetTop(t),e=i+t.clientHeight,r>=i&&e>=a},r.prototype.util=function(){return null!=this._util?this._util:this._util=new e},r.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},r}()}.call(this),window.Modernizr=function(t,e,n){function i(t){h.cssText=t}function r(t,e){return typeof t===e}var a,o,s,c="2.6.2",l={},u=!0,p=e.documentElement,d="modernizr",f=e.createElement(d),h=f.style,v=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),y={},m=[],S=m.slice,J=function(t,n,i,r){var a,o,s,c,l=e.createElement("div"),u=e.body,f=u||e.createElement("body");if(parseInt(i,10))for(;i--;)s=e.createElement("div"),s.id=r?r[i]:d+(i+1),l.appendChild(s);return a=["&#173;",'<style id="s',d,'">',t,"</style>"].join(""),l.id=d,(u?l:f).innerHTML+=a,f.appendChild(l),u||(f.style.background="",f.style.overflow="hidden",c=p.style.overflow,p.style.overflow="hidden",p.appendChild(f)),o=n(l,t),u?l.parentNode.removeChild(l):(f.parentNode.removeChild(f),p.style.overflow=c),!!o},b={}.hasOwnProperty;s=r(b,"undefined")||r(b.call,"undefined")?function(t,e){return e in t&&r(t.constructor.prototype[e],"undefined")}:function(t,e){return b.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=S.call(arguments,1),i=function(){if(this instanceof i){var r=function(){};r.prototype=e.prototype;var a=new r,o=e.apply(a,n.concat(S.call(arguments)));return Object(o)===o?o:a}return e.apply(t,n.concat(S.call(arguments)))};return i}),y.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:J(["@media (",v.join("touch-enabled),("),d,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n};for(var g in y)s(y,g)&&(o=g.toLowerCase(),l[o]=y[g](),m.push((l[o]?"":"no-")+o));return l.addTest=function(t,e){if("object"==typeof t)for(var i in t)s(t,i)&&l.addTest(i,t[i]);else{if(t=t.toLowerCase(),l[t]!==n)return l;e="function"==typeof e?e():e,"undefined"!=typeof u&&u&&(p.className+=" "+(e?"":"no-")+t),l[t]=e}return l},i(""),f=a=null,function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=m.elements;return"string"==typeof t?t.split(" "):t}function r(t){var e=y[t[h]];return e||(e={},v++,t[h]=v,y[v]=e),e}function a(t,n,i){if(n||(n=e),u)return n.createElement(t);i||(i=r(n));var a;return a=i.cache[t]?i.cache[t].cloneNode():f.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),a.canHaveChildren&&!d.test(t)?i.frag.appendChild(a):a}function o(t,n){if(t||(t=e),u)return t.createDocumentFragment();n=n||r(t);for(var a=n.frag.cloneNode(),o=0,s=i(),c=s.length;c>o;o++)a.createElement(s[o]);return a}function s(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return m.shivMethods?a(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(m,e.frag)}function c(t){t||(t=e);var i=r(t);return m.shivCSS&&!l&&!i.hasCSS&&(i.hasCSS=!!n(t,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),u||s(t,i),t}var l,u,p=t.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",v=0,y={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",l="hidden"in t,u=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){l=!0,u=!0}}();var m={elements:p.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:p.shivCSS!==!1,supportsUnknownElements:u,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:c,createElement:a,createDocumentFragment:o};t.html5=m,c(e)}(this,e),l._version=c,l._prefixes=v,l.testStyles=J,p.className=p.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(u?" js "+m.join(" "):""),l}(this,this.document),function(t,e,n){function i(t){return"[object Function]"==y.call(t)}function r(t){return"string"==typeof t}function a(){}function o(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function s(){var t=m.shift();S=1,t?t.t?h(function(){("c"==t.t?d.injectCss:d.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),s()):S=0}function c(t,n,i,r,a,c,l){function u(e){if(!f&&o(p.readyState)&&(J.r=f=1,!S&&s(),p.onload=p.onreadystatechange=null,e)){"img"!=t&&h(function(){g.removeChild(p)},50);for(var i in M[n])M[n].hasOwnProperty(i)&&M[n][i].onload()}}var l=l||d.errorTimeout,p=e.createElement(t),f=0,y=0,J={t:i,s:n,e:a,a:c,x:l};1===M[n]&&(y=1,M[n]=[]),"object"==t?p.data=n:(p.src=n,p.type=t),p.width=p.height="0",p.onerror=p.onload=p.onreadystatechange=function(){u.call(this,y)},m.splice(r,0,J),"img"!=t&&(y||2===M[n]?(g.insertBefore(p,b?null:v),h(u,l)):M[n].push(p))}function l(t,e,n,i,a){return S=0,e=e||"j",r(t)?c("c"==e?x:w,t,e,this.i++,n,i,a):(m.splice(this.i++,0,t),1==m.length&&s()),this}function u(){var t=d;return t.loader={load:l,i:0},t}var p,d,f=e.documentElement,h=t.setTimeout,v=e.getElementsByTagName("script")[0],y={}.toString,m=[],S=0,J="MozAppearance"in f.style,b=J&&!!e.createRange().compareNode,g=b?f:v.parentNode,f=t.opera&&"[object Opera]"==y.call(t.opera),f=!!e.attachEvent&&!f,w=J?"object":f?"script":"img",x=f?"script":w,_=Array.isArray||function(t){return"[object Array]"==y.call(t)},k=[],M={},E={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};d=function(t){function e(t){var e,n,i,t=t.split("!"),r=k.length,a=t.pop(),o=t.length,a={url:a,origUrl:a,prefixes:t};for(n=0;o>n;n++)i=t[n].split("="),(e=E[i.shift()])&&(a=e(a,i));for(n=0;r>n;n++)a=k[n](a);return a}function o(t,r,a,o,s){var c=e(t),l=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(r&&(r=i(r)?r:r[t]||r[o]||r[t.split("/").pop().split("?")[0]]),c.instead?c.instead(t,r,a,o,s):(M[c.url]?c.noexec=!0:M[c.url]=1,a.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(i(r)||i(l))&&a.load(function(){u(),r&&r(c.origUrl,s,o),l&&l(c.origUrl,s,o),M[c.url]=2})))}function s(t,e){function n(t,n){if(t){if(r(t))n||(p=function(){var t=[].slice.call(arguments);d.apply(this,t),f()}),o(t,p,e,0,l);else if(Object(t)===t)for(c in s=function(){var e,n=0;for(e in t)t.hasOwnProperty(e)&&n++;return n}(),t)t.hasOwnProperty(c)&&(!n&&!--s&&(i(p)?p=function(){var t=[].slice.call(arguments);d.apply(this,t),f()}:p[c]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),f()}}(d[c])),o(t[c],p,e,c,l))}else!n&&f()}var s,c,l=!!t.test,u=t.load||t.both,p=t.callback||a,d=p,f=t.complete||a;n(l?t.yep:t.nope,!!u),u&&n(u)}var c,l,p=this.yepnope.loader;if(r(t))o(t,0,p,0);else if(_(t))for(c=0;c<t.length;c++)l=t[c],r(l)?o(l,0,p,0):_(l)?d(l):Object(l)===l&&s(l,p);else Object(t)===t&&s(t,p)},d.addPrefix=function(t,e){E[t]=e},d.addFilter=function(t){k.push(t)},d.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",p=function(){e.removeEventListener("DOMContentLoaded",p,0),e.readyState="complete"},0)),t.yepnope=u(),t.yepnope.executeStack=s,t.yepnope.injectJs=function(t,n,i,r,c,l){var u,p,f=e.createElement("script"),r=r||d.errorTimeout;f.src=t;for(p in i)f.setAttribute(p,i[p]);n=l?s:n||a,f.onreadystatechange=f.onload=function(){!u&&o(f.readyState)&&(u=1,n(),f.onload=f.onreadystatechange=null)},h(function(){u||(u=1,n(1))},r),c?f.onload():v.parentNode.insertBefore(f,v)},t.yepnope.injectCss=function(t,n,i,r,o,c){var l,r=e.createElement("link"),n=c?s:n||a;r.href=t,r.rel="stylesheet",r.type="text/css";for(l in i)r.setAttribute(l,i[l]);o||(v.parentNode.insertBefore(r,v),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};var cbpFixedScrollLayout=function(){function t(){i.$navlinks.on("click",function(){return n(i.$sections.eq($(this).index()).offset().top),!1}),i.$sections.waypoint(function(t){"down"===t&&e($(this))},{offset:"30%"}).waypoint(function(t){"up"===t&&e($(this))},{offset:"-30%"}),$(window).on("debouncedresize",function(){n(i.$sections.eq(i.currentLink).offset().top)})}function e(t){i.$navlinks.eq(i.currentLink).removeClass("cbp-fbcurrent"),i.currentLink=t.index("section"),i.$navlinks.eq(i.currentLink).addClass("cbp-fbcurrent")}function n(t){i.$body.stop().animate({scrollTop:t},i.animspeed,i.animeasing)}var i={$sections:$("#cbp-fbscroller > section"),$navlinks:$("#cbp-fbscroller > nav:first > a"),currentLink:0,$body:$("html, body"),animspeed:650,animeasing:"easeInOutExpo"};return{init:t}}();!function(t){var e,n,i=t.event;e=i.special.debouncedresize={setup:function(){t(this).on("resize",e.handler)},teardown:function(){t(this).off("resize",e.handler)},handler:function(t,r){var a=this,o=arguments,s=function(){t.type="debouncedresize",i.dispatch.apply(a,o)};n&&clearTimeout(n),r?s():n=setTimeout(s,e.threshold)},threshold:150}}(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,n,i,r){return jQuery.easing[jQuery.easing.def](t,e,n,i,r)},easeInQuad:function(t,e,n,i,r){return i*(e/=r)*e+n},easeOutQuad:function(t,e,n,i,r){return-i*(e/=r)*(e-2)+n},easeInOutQuad:function(t,e,n,i,r){return(e/=r/2)<1?i/2*e*e+n:-i/2*(--e*(e-2)-1)+n},easeInCubic:function(t,e,n,i,r){return i*(e/=r)*e*e+n},easeOutCubic:function(t,e,n,i,r){return i*((e=e/r-1)*e*e+1)+n},easeInOutCubic:function(t,e,n,i,r){return(e/=r/2)<1?i/2*e*e*e+n:i/2*((e-=2)*e*e+2)+n},easeInQuart:function(t,e,n,i,r){return i*(e/=r)*e*e*e+n},easeOutQuart:function(t,e,n,i,r){return-i*((e=e/r-1)*e*e*e-1)+n},easeInOutQuart:function(t,e,n,i,r){return(e/=r/2)<1?i/2*e*e*e*e+n:-i/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(t,e,n,i,r){return i*(e/=r)*e*e*e*e+n},easeOutQuint:function(t,e,n,i,r){return i*((e=e/r-1)*e*e*e*e+1)+n},easeInOutQuint:function(t,e,n,i,r){return(e/=r/2)<1?i/2*e*e*e*e*e+n:i/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(t,e,n,i,r){return-i*Math.cos(e/r*(Math.PI/2))+i+n},easeOutSine:function(t,e,n,i,r){return i*Math.sin(e/r*(Math.PI/2))+n},easeInOutSine:function(t,e,n,i,r){return-i/2*(Math.cos(Math.PI*e/r)-1)+n},easeInExpo:function(t,e,n,i,r){return 0==e?n:i*Math.pow(2,10*(e/r-1))+n},easeOutExpo:function(t,e,n,i,r){return e==r?n+i:i*(-Math.pow(2,-10*e/r)+1)+n},easeInOutExpo:function(t,e,n,i,r){return 0==e?n:e==r?n+i:(e/=r/2)<1?i/2*Math.pow(2,10*(e-1))+n:i/2*(-Math.pow(2,-10*--e)+2)+n},easeInCirc:function(t,e,n,i,r){return-i*(Math.sqrt(1-(e/=r)*e)-1)+n},easeOutCirc:function(t,e,n,i,r){return i*Math.sqrt(1-(e=e/r-1)*e)+n},easeInOutCirc:function(t,e,n,i,r){return(e/=r/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+n:i/2*(Math.sqrt(1-(e-=2)*e)+1)+n},easeInElastic:function(t,e,n,i,r){var a=1.70158,o=0,s=i;if(0==e)return n;if(1==(e/=r))return n+i;if(o||(o=.3*r),s<Math.abs(i)){s=i;var a=o/4}else var a=o/(2*Math.PI)*Math.asin(i/s);return-(s*Math.pow(2,10*(e-=1))*Math.sin(2*(e*r-a)*Math.PI/o))+n},easeOutElastic:function(t,e,n,i,r){var a=1.70158,o=0,s=i;if(0==e)return n;if(1==(e/=r))return n+i;if(o||(o=.3*r),s<Math.abs(i)){s=i;var a=o/4}else var a=o/(2*Math.PI)*Math.asin(i/s);return s*Math.pow(2,-10*e)*Math.sin(2*(e*r-a)*Math.PI/o)+i+n},easeInOutElastic:function(t,e,n,i,r){var a=1.70158,o=0,s=i;if(0==e)return n;if(2==(e/=r/2))return n+i;if(o||(o=.3*r*1.5),s<Math.abs(i)){s=i;var a=o/4}else var a=o/(2*Math.PI)*Math.asin(i/s);return 1>e?-.5*s*Math.pow(2,10*(e-=1))*Math.sin(2*(e*r-a)*Math.PI/o)+n:s*Math.pow(2,-10*(e-=1))*Math.sin(2*(e*r-a)*Math.PI/o)*.5+i+n},easeInBack:function(t,e,n,i,r,a){return void 0==a&&(a=1.70158),i*(e/=r)*e*((a+1)*e-a)+n},easeOutBack:function(t,e,n,i,r,a){return void 0==a&&(a=1.70158),i*((e=e/r-1)*e*((a+1)*e+a)+1)+n},easeInOutBack:function(t,e,n,i,r,a){return void 0==a&&(a=1.70158),(e/=r/2)<1?i/2*e*e*(((a*=1.525)+1)*e-a)+n:i/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+n},easeInBounce:function(t,e,n,i,r){return i-jQuery.easing.easeOutBounce(t,r-e,0,i,r)+n},easeOutBounce:function(t,e,n,i,r){return(e/=r)<1/2.75?7.5625*i*e*e+n:2/2.75>e?i*(7.5625*(e-=1.5/2.75)*e+.75)+n:2.5/2.75>e?i*(7.5625*(e-=2.25/2.75)*e+.9375)+n:i*(7.5625*(e-=2.625/2.75)*e+.984375)+n},easeInOutBounce:function(t,e,n,i,r){return r/2>e?.5*jQuery.easing.easeInBounce(t,2*e,0,i,r)+n:.5*jQuery.easing.easeOutBounce(t,2*e-r,0,i,r)+.5*i+n}}),function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},e=[].slice;!function(t,e){return"function"==typeof define&&define.amd?define("waypoints",["jquery"],function(n){return e(n,t)}):e(t.jQuery,t)}(this,function(n,i){var r,a,o,s,c,l,u,p,d,f,h,v,y,m,S,J;return r=n(i),p=t.call(i,"ontouchstart")>=0,s={horizontal:{},vertical:{}},c=1,u={},l="waypoints-context-id",h="resize.waypoints",v="scroll.waypoints",y=1,m="waypoints-waypoint-ids",S="waypoint",J="waypoints",a=function(){function t(t){var e=this;
this.$element=t,this.element=t[0],this.didResize=!1,this.didScroll=!1,this.id="context"+c++,this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()},this.waypoints={horizontal:{},vertical:{}},t.data(l,this.id),u[this.id]=this,t.bind(v,function(){var t;return e.didScroll||p?void 0:(e.didScroll=!0,t=function(){return e.doScroll(),e.didScroll=!1},i.setTimeout(t,n[J].settings.scrollThrottle))}),t.bind(h,function(){var t;return e.didResize?void 0:(e.didResize=!0,t=function(){return n[J]("refresh"),e.didResize=!1},i.setTimeout(t,n[J].settings.resizeThrottle))})}return t.prototype.doScroll=function(){var t,e=this;return t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}},!p||t.vertical.oldScroll&&t.vertical.newScroll||n[J]("refresh"),n.each(t,function(t,i){var r,a,o;return o=[],a=i.newScroll>i.oldScroll,r=a?i.forward:i.backward,n.each(e.waypoints[t],function(t,e){var n,r;return i.oldScroll<(n=e.offset)&&n<=i.newScroll?o.push(e):i.newScroll<(r=e.offset)&&r<=i.oldScroll?o.push(e):void 0}),o.sort(function(t,e){return t.offset-e.offset}),a||o.reverse(),n.each(o,function(t,e){return e.options.continuous||t===o.length-1?e.trigger([r]):void 0})}),this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}},t.prototype.refresh=function(){var t,e,i,r=this;return i=n.isWindow(this.element),e=this.$element.offset(),this.doScroll(),t={horizontal:{contextOffset:i?0:e.left,contextScroll:i?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:i?0:e.top,contextScroll:i?0:this.oldScroll.y,contextDimension:i?n[J]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}},n.each(t,function(t,e){return n.each(r.waypoints[t],function(t,i){var r,a,o,s,c;return r=i.options.offset,o=i.offset,a=n.isWindow(i.element)?0:i.$element.offset()[e.offsetProp],n.isFunction(r)?r=r.apply(i.element):"string"==typeof r&&(r=parseFloat(r),i.options.offset.indexOf("%")>-1&&(r=Math.ceil(e.contextDimension*r/100))),i.offset=a-e.contextOffset+e.contextScroll-r,i.options.onlyOnScroll&&null!=o||!i.enabled?void 0:null!==o&&o<(s=e.oldScroll)&&s<=i.offset?i.trigger([e.backward]):null!==o&&o>(c=e.oldScroll)&&c>=i.offset?i.trigger([e.forward]):null===o&&e.oldScroll>=i.offset?i.trigger([e.forward]):void 0})})},t.prototype.checkEmpty=function(){return n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)?(this.$element.unbind([h,v].join(" ")),delete u[this.id]):void 0},t}(),o=function(){function t(t,e,i){var r,a;i=n.extend({},n.fn[S].defaults,i),"bottom-in-view"===i.offset&&(i.offset=function(){var t;return t=n[J]("viewportHeight"),n.isWindow(e.element)||(t=e.$element.height()),t-n(this).outerHeight()}),this.$element=t,this.element=t[0],this.axis=i.horizontal?"horizontal":"vertical",this.callback=i.handler,this.context=e,this.enabled=i.enabled,this.id="waypoints"+y++,this.offset=null,this.options=i,e.waypoints[this.axis][this.id]=this,s[this.axis][this.id]=this,r=null!=(a=t.data(m))?a:[],r.push(this.id),t.data(m,r)}return t.prototype.trigger=function(t){return this.enabled?(null!=this.callback&&this.callback.apply(this.element,t),this.options.triggerOnce?this.destroy():void 0):void 0},t.prototype.disable=function(){return this.enabled=!1},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0},t.prototype.destroy=function(){return delete s[this.axis][this.id],delete this.context.waypoints[this.axis][this.id],this.context.checkEmpty()},t.getWaypointsByElement=function(t){var e,i;return(i=n(t).data(m))?(e=n.extend({},s.horizontal,s.vertical),n.map(i,function(t){return e[t]})):[]},t}(),f={init:function(t,e){var i;return null==e&&(e={}),null==(i=e.handler)&&(e.handler=t),this.each(function(){var t,i,r,s;return t=n(this),r=null!=(s=e.context)?s:n.fn[S].defaults.context,n.isWindow(r)||(r=t.closest(r)),r=n(r),i=u[r.data(l)],i||(i=new a(r)),new o(t,i,e)}),n[J]("refresh"),this},disable:function(){return f._invoke(this,"disable")},enable:function(){return f._invoke(this,"enable")},destroy:function(){return f._invoke(this,"destroy")},prev:function(t,e){return f._traverse.call(this,t,e,function(t,e,n){return e>0?t.push(n[e-1]):void 0})},next:function(t,e){return f._traverse.call(this,t,e,function(t,e,n){return e<n.length-1?t.push(n[e+1]):void 0})},_traverse:function(t,e,r){var a,o;return null==t&&(t="vertical"),null==e&&(e=i),o=d.aggregate(e),a=[],this.each(function(){var e;return e=n.inArray(this,o[t]),r(a,e,o[t])}),this.pushStack(a)},_invoke:function(t,e){return t.each(function(){var t;return t=o.getWaypointsByElement(this),n.each(t,function(t,n){return n[e](),!0})}),this}},n.fn[S]=function(){var t,i;return i=arguments[0],t=2<=arguments.length?e.call(arguments,1):[],f[i]?f[i].apply(this,t):n.isFunction(i)?f.init.apply(this,arguments):n.isPlainObject(i)?f.init.apply(this,[null,i]):n.error(i?"The "+i+" method does not exist in jQuery Waypoints.":"jQuery Waypoints needs a callback function or handler option.")},n.fn[S].defaults={context:i,continuous:!0,enabled:!0,horizontal:!1,offset:0,triggerOnce:!1},d={refresh:function(){return n.each(u,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return null!=(t=i.innerHeight)?t:r.height()},aggregate:function(t){var e,i,r;return e=s,t&&(e=null!=(r=u[n(t).data(l)])?r.waypoints:void 0),e?(i={horizontal:[],vertical:[]},n.each(i,function(t,r){return n.each(e[t],function(t,e){return r.push(e)}),r.sort(function(t,e){return t.offset-e.offset}),i[t]=n.map(r,function(t){return t.element}),i[t]=n.unique(i[t])}),i):[]},above:function(t){return null==t&&(t=i),d._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){return null==t&&(t=i),d._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){return null==t&&(t=i),d._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){return null==t&&(t=i),d._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return d._invoke("enable")},disable:function(){return d._invoke("disable")},destroy:function(){return d._invoke("destroy")},extendFn:function(t,e){return f[t]=e},_invoke:function(t){var e;return e=n.extend({},s.vertical,s.horizontal),n.each(e,function(e,n){return n[t](),!0})},_filter:function(t,e,i){var r,a;return(r=u[n(t).data(l)])?(a=[],n.each(r.waypoints[e],function(t,e){return i(r,e)?a.push(e):void 0}),a.sort(function(t,e){return t.offset-e.offset}),n.map(a,function(t){return t.element})):[]}},n[J]=function(){var t,n;return n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[],d[n]?d[n].apply(null,t):d.aggregate.call(null,n)},n[J].settings={resizeThrottle:100,scrollThrottle:30},r.load(function(){return n[J]("refresh")})})}.call(this);