"use strict";(self.webpackChunktask_7_store=self.webpackChunktask_7_store||[]).push([[459],{586:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var i=n(439),s=n(791),r=n(434),o={main:"ShopAll_main__Fcn-Z",product:"ShopAll_product__nd3lJ",wrapper:"ShopAll_wrapper__L92lc",product_pic:"ShopAll_product_pic__eBhKO",product_header:"ShopAll_product_header__OPfcR",product_stars:"ShopAll_product_stars__oxz3L",product_desc:"ShopAll_product_desc__oURGo",product_price:"ShopAll_product_price__hBZOh",product_btn:"ShopAll_product_btn__U0Rwh",productAdded:"ShopAll_productAdded__e5ieF",priceRange:"ShopAll_priceRange__7HAye",priceRange_div:"ShopAll_priceRange_div__eEcJn",priceRange_header:"ShopAll_priceRange_header__xZPAP",priceRange_value:"ShopAll_priceRange_value__5xWzW",priceRange_curValue:"ShopAll_priceRange_curValue__8ABRM",priceRange_btnDiv:"ShopAll_priceRange_btnDiv__xkHpO",priceRange_apply:"ShopAll_priceRange_apply__OzbT-"};function a(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p="Stars_starsImg__cE+yU",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF6SURBVHgBvVJNTsJAFH5vpjExNrFH6BHqCagbI7gQ9mLoCcATiCeQG1TAvSQGmrjRG8gN5AbWUOLG9vmmxFoodAwLv7ZJ53vffPPzPoD/QjQIWov+uKvTGToBILURRaiVlRXf/cDeM+BN/dNXcmR6Z9NtWlFmZAjqZCsKqJdpS42ExPPcoL2T0Xz46AKB/cuQNfcDd5seo8GkQ0SWlHhICVopiWgRkrNqpAowQ4IZ8ZcOBYVxTB+sDw3iSQLxmovZ1RM/6i2AjZm2Mx0hCMGDBG5SSu2KXW9hB/DOr8yLWi9rf+Q/OULGD7yI/RcDdcQklg3TO5kuT53DJ+eGJDzrzJQJxnC871VnGbcuivyxg4Z4LTPaFM5i+6VwQAcJBU3BiBNcAQ24VxWtEcNdmzbiOPRXKayXGqn7yUJIGKrWHjRPG2az1uKceYpbKslKtduMQKKbygBeRExHKh8/JfOyeqc4rk7z2o2IhpNedD/pgAbzYdBdDIJRnvsG7leO95D/gO4AAAAASUVORK5CYII=",c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEGSURBVHgBjVLdbcIwEP58pupr+xoVKVYXSDdgg6gTNEzQdoKWDdoN2gkYgYzAACCHwAC8IQSxuQAJGNmI7+n+vrvz5wMCmOgym5RlFsp3QgkpxdvR/PPlhS+otY5BHb13zPZRKbW8rCEfsYLsNbYBZb4a8k2TRF9tgaR0v8Hlqrqcj2CRsP2A27DkB+aEattnp8DtKJjz2Yoz1fMfIrxfY1hj/wWqj1osR9VrZGMweFbd78Z3xLGwOULTYItz3yGymmmIKGCTIJHRO1vtlz9x0BaSTN1GR5yuRRQwtq9UNz/EFwm3H/Ky8f2djKMomjkT+VqSw5TNS0OqodTTuI7VudV689rEdxFwXtPUpEoWAAAAAElFTkSuQmCC",l=n(184),h=["starsCount"],d=function(e){var t=e.starsCount;a(e,h);return(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{className:p,src:t>=1?u:c,alt:""}),(0,l.jsx)("img",{className:p,src:t>=2?u:c,alt:""}),(0,l.jsx)("img",{className:p,src:t>=3?u:c,alt:""}),(0,l.jsx)("img",{className:p,src:t>=4?u:c,alt:""}),(0,l.jsx)("img",{className:p,src:t>=5?u:c,alt:""})]})},f=n(611);function v(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function m(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function g(e){return null!==e&&1===e.length?e[0]:e.slice()}function A(e){Object.keys(e).forEach((function(t){"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function b(e,t){return y(function(e,t){var n=e;return n<=t.min&&(n=t.min),n>=t.max&&(n=t.max),n}(e,t),t)}function y(e,t){var n=(e-t.min)%t.step,i=e-n;return 2*Math.abs(n)>=t.step&&(i+=n>0?t.step:-t.step),parseFloat(i.toFixed(5))}var x=function(e){function t(t){var n;(n=e.call(this,t)||this).onKeyUp=function(){n.onEnd()},n.onMouseUp=function(){n.onEnd(n.getMouseEventMap())},n.onTouchEnd=function(e){e.preventDefault(),n.onEnd(n.getTouchEventMap())},n.onBlur=function(){n.setState({index:-1},n.onEnd(n.getKeyDownEventMap()))},n.onMouseMove=function(e){n.setState({pending:!0});var t=n.getMousePosition(e),i=n.getDiffPosition(t[0]),s=n.getValueFromPosition(i);n.move(s)},n.onTouchMove=function(e){if(!(e.touches.length>1)){n.setState({pending:!0});var t=n.getTouchPosition(e);if(void 0===n.isScrolling){var i=t[0]-n.startPosition[0],s=t[1]-n.startPosition[1];n.isScrolling=Math.abs(s)>Math.abs(i)}if(n.isScrolling)n.setState({index:-1});else{var r=n.getDiffPosition(t[0]),o=n.getValueFromPosition(r);n.move(o)}}},n.onKeyDown=function(e){if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(n.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),n.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),n.moveUpByStep();break;case"Home":e.preventDefault(),n.move(n.props.min);break;case"End":e.preventDefault(),n.move(n.props.max);break;case"PageDown":e.preventDefault(),n.moveDownByStep(n.props.pageFn(n.props.step));break;case"PageUp":e.preventDefault(),n.moveUpByStep(n.props.pageFn(n.props.step))}},n.onSliderMouseDown=function(e){if(!n.props.disabled&&2!==e.button){if(n.setState({pending:!0}),!n.props.snapDragDisabled){var t=n.getMousePosition(e);n.forceValueFromPosition(t[0],(function(e){n.start(e,t[0]),A(n.getMouseEventMap())}))}v(e)}},n.onSliderClick=function(e){if(!n.props.disabled&&n.props.onSliderClick&&!n.hasMoved){var t=n.getMousePosition(e),i=b(n.calcValue(n.calcOffsetFromPosition(t[0])),n.props);n.props.onSliderClick(i)}},n.createOnKeyDown=function(e){return function(t){n.props.disabled||(n.start(e),A(n.getKeyDownEventMap()),v(t))}},n.createOnMouseDown=function(e){return function(t){if(!n.props.disabled&&2!==t.button){n.setState({pending:!0});var i=n.getMousePosition(t);n.start(e,i[0]),A(n.getMouseEventMap()),v(t)}}},n.createOnTouchStart=function(e){return function(t){if(!(n.props.disabled||t.touches.length>1)){n.setState({pending:!0});var i=n.getTouchPosition(t);n.startPosition=i,n.isScrolling=void 0,n.start(e,i[0]),A(n.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)}}},n.handleResize=function(){var e=window.setTimeout((function(){n.pendingResizeTimeouts.shift(),n.resize()}),0);n.pendingResizeTimeouts.push(e)},n.renderThumb=function(e,t){var i=n.props.thumbClassName+" "+n.props.thumbClassName+"-"+t+" "+(n.state.index===t?n.props.thumbActiveClassName:""),s={ref:function(e){n["thumb"+t]=e},key:n.props.thumbClassName+"-"+t,className:i,style:e,onMouseDown:n.createOnMouseDown(t),onTouchStart:n.createOnTouchStart(t),onFocus:n.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":n.props.orientation,"aria-valuenow":n.state.value[t],"aria-valuemin":n.props.min,"aria-valuemax":n.props.max,"aria-label":Array.isArray(n.props.ariaLabel)?n.props.ariaLabel[t]:n.props.ariaLabel,"aria-labelledby":Array.isArray(n.props.ariaLabelledby)?n.props.ariaLabelledby[t]:n.props.ariaLabelledby,"aria-disabled":n.props.disabled},r={index:t,value:g(n.state.value),valueNow:n.state.value[t]};return n.props.ariaValuetext&&(s["aria-valuetext"]="string"==typeof n.props.ariaValuetext?n.props.ariaValuetext:n.props.ariaValuetext(r)),n.props.renderThumb(s,r)},n.renderTrack=function(e,t,i){var s={key:n.props.trackClassName+"-"+e,className:n.props.trackClassName+" "+n.props.trackClassName+"-"+e,style:n.buildTrackStyle(t,n.state.upperBound-i)},r={index:e,value:g(n.state.value)};return n.props.renderTrack(s,r)};var i=m(t.value);i.length||(i=m(t.defaultValue)),n.pendingResizeTimeouts=[];for(var r=[],o=0;o<i.length;o+=1)i[o]=b(i[o],t),r.push(o);return n.resizeObserver=null,n.resizeElementRef=s.createRef(),n.state={index:-1,upperBound:0,sliderLength:0,value:i,zIndices:r},n}var n,i;i=e,(n=t).prototype=Object.create(i.prototype),n.prototype.constructor=n,(0,f.Z)(n,i);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){var n=m(e.value);return n.length?t.pending?null:{value:n.map((function(t){return b(t,e)}))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((function(t){"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return g(this.state.value)},r.getClosestIndex=function(e){for(var t=Number.MAX_VALUE,n=-1,i=this.state.value,s=i.length,r=0;r<s;r+=1){var o=this.calcOffset(i[r]),a=Math.abs(e-o);a<t&&(t=a,n=r)}return n},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){var t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){var t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return b(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){var t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){var e=this.slider,t=this.thumb0;if(e&&t){var n=this.sizeKey(),i=e.getBoundingClientRect(),s=e[n],r=i[this.posMaxKey()],o=i[this.posMinKey()],a=t.getBoundingClientRect()[n.replace("client","").toLowerCase()],p=s-a,u=Math.abs(r-o);this.state.upperBound===p&&this.state.sliderLength===u&&this.state.thumbSize===a||this.setState({upperBound:p,sliderLength:u,thumbSize:a})}},r.calcOffset=function(e){var t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){var t=this.slider.getBoundingClientRect(),n=t[this.posMaxKey()],i=t[this.posMinKey()],s=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:i));return this.props.invert&&(s=this.state.sliderLength-s),s-=this.state.thumbSize/2},r.forceValueFromPosition=function(e,t){var n=this,i=this.calcOffsetFromPosition(e),s=this.getClosestIndex(i),r=b(this.calcValue(i),this.props),o=this.state.value.slice();o[s]=r;for(var a=0;a<o.length-1;a+=1)if(o[a+1]-o[a]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(function(){t(s),n.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{var e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){var n=this["thumb"+e];n&&n.focus();var i=this.state.zIndices;i.splice(i.indexOf(e),1),i.push(e),this.setState((function(n){return{startValue:n.value[e],startPosition:void 0!==t?t:n.startPosition,index:e,zIndices:i}}))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);var t=this.state.value[this.state.index],n=b(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(n,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);var t=this.state.value[this.state.index],n=b(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(n,this.props.min))},r.move=function(e){var t=this.state.value.slice(),n=this.state.index,i=t.length,s=t[n];if(e!==s){this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;var r=this.props,o=r.pearling,a=r.max,p=r.min,u=r.minDistance;if(!o){if(n>0){var c=t[n-1];e<c+u&&(e=c+u)}if(n<i-1){var l=t[n+1];e>l-u&&(e=l-u)}}t[n]=e,o&&i>1&&(e>s?(this.pushSucceeding(t,u,n),function(e,t,n,i){for(var s=0;s<e;s+=1){var r=i-s*n;t[e-1-s]>r&&(t[e-1-s]=r)}}(i,t,u,a)):e<s&&(this.pushPreceding(t,u,n),function(e,t,n,i){for(var s=0;s<e;s+=1){var r=i+s*n;t[s]<r&&(t[s]=r)}}(i,t,u,p))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))}},r.pushSucceeding=function(e,t,n){var i,s;for(s=e[i=n]+t;null!==e[i+1]&&s>e[i+1];s=e[i+=1]+t)e[i+1]=y(s,this.props)},r.pushPreceding=function(e,t,n){for(var i=n,s=e[i]-t;null!==e[i-1]&&s<e[i-1];s=e[i-=1]-t)e[i-1]=y(s,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](g(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){var n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return n[this.posMinKey()]=e+"px",n},r.buildTrackStyle=function(e,t){var n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=t,n},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){for(var t=e.length,n=[],i=0;i<t;i+=1)n[i]=this.buildThumbStyle(e[i],i);for(var s=[],r=0;r<t;r+=1)s[r]=this.renderThumb(n[r],r);return s},r.renderTracks=function(e){var t=[],n=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(var i=0;i<n;i+=1)t.push(this.renderTrack(i+1,e[i],e[i+1]));return t.push(this.renderTrack(n+1,e[n],this.state.upperBound)),t},r.renderMarks=function(){var e=this,t=this.props.marks,n=this.props.max-this.props.min+1;return"boolean"==typeof t?t=Array.from({length:n}).map((function(e,t){return t})):"number"==typeof t&&(t=Array.from({length:n}).map((function(e,t){return t})).filter((function(e){return e%t==0}))),t.map(parseFloat).sort((function(e,t){return e-t})).map((function(t){var n=e.calcOffset(t),i={key:t,className:e.props.markClassName,style:e.buildMarkStyle(n)};return e.props.renderMark(i)}))},r.render=function(){for(var e=this,t=[],n=this.state.value,i=n.length,r=0;r<i;r+=1)t[r]=this.calcOffset(n[r],r);var o=this.props.withTracks?this.renderTracks(t):null,a=this.renderThumbs(t),p=this.props.marks?this.renderMarks():null;return s.createElement("div",{ref:function(t){e.slider=t,e.resizeElementRef.current=t},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},o,a,p)},t}(s.Component);x.displayName="ReactSlider",x.defaultProps={min:0,max:100,step:1,pageFn:function(e){return 10*e},minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:function(e){return s.createElement("div",e)},renderTrack:function(e){return s.createElement("div",e)},renderMark:function(e){return s.createElement("span",e)}};var _=x,S=function(){var e=(0,r.I0)(),t=(0,r.v9)((function(e){return e.main.products})),n=(0,r.v9)((function(e){return e.main.clicked})),a=(0,s.useState)([100,5e3]),p=(0,i.Z)(a,2),u=p[0],c=p[1];return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:o.priceRange,children:[(0,l.jsxs)("div",{className:o.priceRange_div,children:[(0,l.jsx)("p",{className:o.priceRange_header,children:"Use slider to enter min and max price"}),(0,l.jsxs)("div",{className:o.priceRange_value,children:[u[0]," \u20bd - ",u[1]," \u20bd"]}),(0,l.jsx)(_,{className:o.slider,onChange:c,value:u,min:100,max:5e3})]}),(0,l.jsx)("div",{className:o.priceRange_btnDiv,children:(0,l.jsx)("button",{className:o.priceRange_apply,onClick:function(){e({type:"PRICE-FILTER",minVal:u[0],maxVal:u[1]})},children:"Apply"})})]}),(0,l.jsxs)("div",{className:o.main,children:[t.map((function(t,n){return(0,l.jsxs)("div",{"data-aos":"fade-up","data-aos-duration":"1000",className:o.product,children:[(0,l.jsx)("div",{className:o.wrapper,children:(0,l.jsx)("img",{className:o.product_pic,src:t.img,alt:""})}),(0,l.jsx)("p",{className:o.product_header,children:t.title}),(0,l.jsx)(d,{starsCount:t.stars}),(0,l.jsx)("p",{className:o.product_desc,children:"there should be a product description here"}),(0,l.jsxs)("p",{className:o.product_price,children:[t.price," \u20bd"]}),(0,l.jsx)("button",{id:t.id,className:o.product_btn,onClick:function(){!function(t){e({type:"ADD-TO-CART",payload:t}),e({type:"EMPTY-CART",payload:!1}),e({type:"TOTAL-SUM",payload:t.price})}(t),e({type:"CLIK-BUTTON"}),setTimeout((function(){return e({type:"CLIK-BUTTON"})}),1e3)},children:"Add to bag"})]},n)})),n&&(0,l.jsx)("div",{"data-aos":"fade-right","data-aos-duration":"500",className:o.productAdded,children:" \u2713 product added"})]})]})}}}]);
//# sourceMappingURL=459.1cbb5009.chunk.js.map