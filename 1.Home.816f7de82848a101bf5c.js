webpackJsonp([1],{65:function(e,t,n){(function(t){(function(){var n,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},a=n()):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(t,n(55))},104:function(e,t){"use strict";function n(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=0);return t}t.__esModule=!0,t.default=n,e.exports=t.default},105:function(e,t){"use strict";function n(e,t,n){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(0!==n[r])return!1;var a="number"==typeof t[r]?t[r]:t[r].val;if(e[r]!==a)return!1}return!0}t.__esModule=!0,t.default=n,e.exports=t.default},106:function(e,t){"use strict";function n(e,t,n,a,i,o,l){var u=-i*(t-a),s=-o*n,c=u+s,f=n+c*e,d=t+f*e;return Math.abs(f)<l&&Math.abs(d-a)<l?(r[0]=a,r[1]=0,r):(r[0]=d,r[1]=f,r)}t.__esModule=!0,t.default=n;var r=[0,0];e.exports=t.default},107:function(e,t){"use strict";function n(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]="number"==typeof e[n]?e[n]:e[n].val);return t}t.__esModule=!0,t.default=n,e.exports=t.default},108:function(e,t,n){(function(t){for(var r=n(65),a="undefined"==typeof window?t:window,i=["moz","webkit"],o="AnimationFrame",l=a["request"+o],u=a["cancel"+o]||a["cancelRequest"+o],s=0;!l&&s<i.length;s++)l=a[i[s]+"Request"+o],u=a[i[s]+"Cancel"+o]||a[i[s]+"CancelRequest"+o];if(!l||!u){var c=0,f=0,d=[],p=1e3/60;l=function(e){if(0===d.length){var t=r(),n=Math.max(0,p-(t-c));c=n+t,setTimeout(function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return d.push({handle:++f,callback:e,cancelled:!1}),f},u=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return l.call(a,e)},e.exports.cancel=function(){u.apply(a,arguments)},e.exports.polyfill=function(){a.requestAnimationFrame=l,a.cancelAnimationFrame=u}}).call(t,function(){return this}())},135:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return{type:b,payload:e}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments[1],n=A[t.type];return n?n(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.actions=t.rewind=t.MOUNT_UI_STATE=t.RESET_ACTION_LOG=t.UPDATE_UI_STATE=void 0;var o,l=n(258),u=r(l),s=n(72),c=r(s),f=n(139),d=r(f),p=n(251),y=r(p),m=n(261),v=r(m);t.resetUiState=a,t.default=i;var h=n(312),g=r(h),T=n(136),S=t.UPDATE_UI_STATE="@@redux-ui/UPDATE_UI_STATE",b=t.RESET_ACTION_LOG="RESET_ACTION_LOG",P=t.MOUNT_UI_STATE="@@redux-ui/MOUNT_UI_STATE",I=function(e){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})},x=t.rewind=function(){return function(e,t){var n=t(),r=(0,T.getActions)(n).reverse(),a=[].concat((0,v.default)(n.home.initialHash.diffTimes)).reverse(),i=n.home.initialHash,o=0,l=function(t){var n=r[t];return i[n.payload.name].latest.id===n.id?"continue":(o+=a.pop(),void setTimeout(function(){e({type:n.type,payload:n.payload,ignore:!0})},o))};for(var u in r){l(u)}setTimeout(function(){e({type:b})},o)}},_=(t.actions={rewind:x},function(e){return(0,y.default)(e.defaults).map(function(t){return{type:S,payload:{key:["homies"],name:t,value:{x:e.defaults[t].x,y:e.defaults[t].y}},timestamp:Date.now()}})}),w=function(e){return d.default.apply(Object,(0,v.default)(e.map(function(e){var t;return t={},(0,u.default)(t,e.payload.name,{latest:null,initialAction:(0,c.default)({},e,{id:I()})}),(0,u.default)(t,"diffTimes",[]),t})))},O=function(e,t){var n=t.allIds.slice(-1)[0];return void 0!==n?e-t.byId[n].timestamp:0},A=(o={},(0,u.default)(o,S,function(e,t){var n;if(t.ignore===!0)return e;var r=t.payload.name,a=e.initialHash,i=e.actionLogEntity,o={},l=[],s=(0,c.default)({},t,{timestamp:Date.now(),id:I()}),f=O(s.timestamp,i),p=void 0===a[r].latest||null===a[r].latest;if(p){var y=(0,c.default)({},a[r].initialAction,{timestamp:s.timestamp});o[y.id]=y,l.push(y.id)}o[s.id]=s,l.push(s.id);var m=(0,g.default)(e,{actionLogEntity:{byId:{$merge:o},allIds:{$push:l}},initialHash:(n={},(0,u.default)(n,s.payload.name,{latest:{$set:s}}),(0,u.default)(n,"diffTimes",{$push:[f]}),n)});return(0,d.default)({},e,m)}),(0,u.default)(o,P,function(e,t){if(console.log(e),console.log(t),0===(0,y.default)(e.initialHash).length&&e.initialHash.constructor===Object){var n=_(t.payload),r=w(n);return(0,d.default)({},e,{initialHash:r})}return e}),(0,u.default)(o,b,function(e,t){var n=(0,c.default)({},e.initialHash);for(var r in(0,y.default)(n))n[r]&&(n[r].latest=null);return n.diffTimes=[],(0,d.default)({},e,{initialHash:n,actionLogEntity:{byId:{},allIds:[]}})}),o),k={initialHash:{},actionLogEntity:{byId:{},allIds:[]}}},136:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getActions=void 0;var a=n(72),i=r(a),o=n(506),l=function(e){return e.home.actionLogEntity.allIds.map(function(t){var n=(0,i.default)({},e.home.actionLogEntity.byId[t]);return n})};t.getActions=(0,o.createSelector)([l],function(e){return e})},180:function(e,t){"use strict";t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default},241:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Home=void 0;var a=n(141),i=r(a),o=(0,i.default)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n"],["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n"]),l=(0,i.default)(["\n  background: white;\n  display: block;\n  text-align: center;\n  padding: 20px;\n  width: 350px;\n"],["\n  background: white;\n  display: block;\n  text-align: center;\n  padding: 20px;\n  width: 350px;\n"]),u=(0,i.default)(["\n  color: black;\n"],["\n  color: black;\n"]),s=n(1),c=r(s),f=n(218),d=r(f),p=n(212),y=r(p),m=n(397),v=d.default.div(o),h=d.default.section(l),g=d.default.h1(u),T=function(e){var t=Math.ceil(-50),n=Math.floor(50),r=Math.floor(Math.random()*(n-t))+t;return r},S="Goose Bonestanley".split(""),b={};for(var P in S)b[P]={x:0,y:0};var I=t.Home=function(e){return console.log(e.state),c.default.createElement(v,null,c.default.createElement(h,{onClick:function(){return e.rewind()},onKeyPress:function(e){return console.log(e)}},c.default.createElement(g,null,S.map(function(t,n){return c.default.createElement(m.Motion,{key:n,style:{x:(0,m.spring)(e.ui[n].x),y:(0,m.spring)(e.ui[n].y)}},function(r){var a=r.x,i=r.y;return c.default.createElement("span",{key:n,style:{WebkitTransform:"translate3d("+a+"px, "+i+"px, 0)",transform:"translate3d("+a+"px, "+i+"px, 0)",display:"inline-block"},onMouseEnter:function(){return e.updateUI(""+n,{x:T(e.ui[n].x),y:T(e.ui[n].y)})}}," "===t?c.default.createElement("span",null," "):t)})}))))};I.propTypes={actions:c.default.PropTypes.array.isRequired,ui:c.default.PropTypes.object.isRequired,state:c.default.PropTypes.object},t.default=(0,y.default)({state:b,key:"homies",persist:!0})(I)},242:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(109),i=n(135),o=n(136),l=n(241),u=r(l),s={rewind:function(){return(0,i.rewind)()}},c=function(e){return{actions:(0,o.getActions)(e),state:e}};t.default=(0,a.connect)(c,s)(u.default)},246:function(e,t,n){e.exports={default:n(262),__esModule:!0}},251:function(e,t,n){e.exports={default:n(269),__esModule:!0}},258:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(140),i=r(a);t.default=function(e,t,n){return t in e?(0,i.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},261:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(246),i=r(a);t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,i.default)(e)}},262:function(e,t,n){n(155),n(295),e.exports=n(7).Array.from},269:function(e,t,n){n(303),e.exports=n(7).Object.keys},277:function(e,t,n){var r=n(56),a=n(13)("toStringTag"),i="Arguments"==r(function(){return arguments}()),o=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,l;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=o(t=Object(e),a))?n:i?r(t):"Object"==(l=r(t))&&"function"==typeof t.callee?"Arguments":l}},278:function(e,t,n){"use strict";var r=n(21),a=n(46);e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},281:function(e,t,n){var r=n(45),a=n(13)("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||i[a]===e)}},283:function(e,t,n){var r=n(29);e.exports=function(e,t,n,a){try{return a?t(r(n)[0],n[1]):t(n)}catch(t){var i=e.return;throw void 0!==i&&r(i.call(e)),t}}},285:function(e,t,n){var r=n(13)("iterator"),a=!1;try{var i=[7][r]();i.return=function(){a=!0},Array.from(i,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!a)return!1;var n=!1;try{var i=[7],o=i[r]();o.next=function(){return{done:n=!0}},i[r]=function(){return o},e(i)}catch(e){}return n}},294:function(e,t,n){var r=n(277),a=n(13)("iterator"),i=n(45);e.exports=n(7).getIteratorMethod=function(e){if(void 0!=e)return e[a]||e["@@iterator"]||i[r(e)]}},295:function(e,t,n){"use strict";var r=n(57),a=n(12),i=n(47),o=n(283),l=n(281),u=n(154),s=n(278),c=n(294);a(a.S+a.F*!n(285)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,f,d=i(e),p="function"==typeof this?this:Array,y=arguments.length,m=y>1?arguments[1]:void 0,v=void 0!==m,h=0,g=c(d);if(v&&(m=r(m,y>2?arguments[2]:void 0,2)),void 0==g||p==Array&&l(g))for(t=u(d.length),n=new p(t);t>h;h++)s(n,h,v?m(d[h],h):d[h]);else for(f=g.call(d),n=new p;!(a=f.next()).done;h++)s(n,h,v?o(f,m,[a.value,h],!0):a.value);return n.length=h,n}})},303:function(e,t,n){var r=n(47),a=n(33);n(79)("keys",function(){return function(e){return a(r(e))}})},312:function(e,t,n){function r(e){return e instanceof Array?e.slice():e&&"object"==typeof e?y(new e.constructor,e):e}function a(){function e(n,a){f(!Array.isArray(a),"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."),f("object"==typeof a&&null!==a,"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: %s.",Object.keys(t).join(", "));var i,o,l=n,u=m(a);for(i=0;i<u.length;i++){var o=u[i];if(d.call(t,o))l=t[o](a[o],l,a,n);else{var s=e(n[o],a[o]);s!==l[o]&&(l===n&&(l=r(n)),l[o]=s)}}return l}var t=y({},v);return e.extend=function(e,n){t[e]=n},e}function i(e,t,n){f(Array.isArray(e),"update(): expected target of %s to be an array; got %s.",n,e);var r=t[n];f(Array.isArray(r),"update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?",n,r)}function o(e,t){f(Array.isArray(e),"Expected $splice target to be an array; got %s",e),l(t.$splice)}function l(e){f(Array.isArray(e),"update(): expected spec of $splice to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",e)}function u(e){f("function"==typeof e,"update(): expected spec of $apply to be a function; got %s.",e)}function s(e){f(1===Object.keys(e).length,"Cannot have more than one key in an object with $set")}function c(e,t){f(t&&"object"==typeof t,"update(): $merge expects a spec of type 'object'; got %s",t),f(e&&"object"==typeof e,"update(): $merge expects a target of type 'object'; got %s",e)}var f=n(313),d=Object.prototype.hasOwnProperty,p=Array.prototype.splice,y=Object.assign||function(e,t){for(var n=m(t),r=0;r<n.length;r++){var a=n[r];d.call(t,a)&&(e[a]=t[a])}return e},m="function"==typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)},v={$push:function(e,t,n){return i(t,n,"$push"),t.concat(e)},$unshift:function(e,t,n){return i(t,n,"$unshift"),e.concat(t)},$splice:function(e,t,n,a){var i=t===a?r(a):t;return o(i,n),e.forEach(function(e){l(e),p.apply(i,e)}),i},$set:function(e,t,n){return s(n),e},$merge:function(e,t,n,a){var i=t===a?r(a):t;return c(i,e),m(e).forEach(function(t){i[t]=e[t]}),i},$apply:function(e,t){return u(e),e(t)}};e.exports=a(),e.exports.newContext=a},313:10,393:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(104),o=r(i),l=n(107),u=r(l),s=n(106),c=r(s),f=n(65),d=r(f),p=n(108),y=r(p),m=n(105),v=r(m),h=n(1),g=r(h),T=1e3/60,S=g.default.createClass({displayName:"Motion",propTypes:{defaultStyle:h.PropTypes.objectOf(h.PropTypes.number),style:h.PropTypes.objectOf(h.PropTypes.oneOfType([h.PropTypes.number,h.PropTypes.object])).isRequired,children:h.PropTypes.func.isRequired,onRest:h.PropTypes.func},getInitialState:function(){var e=this.props,t=e.defaultStyle,n=e.style,r=t||u.default(n),a=o.default(r);return{currentStyle:r,currentVelocity:a,lastIdealStyle:r,lastIdealVelocity:a}},wasAnimating:!1,animationID:null,prevTime:0,accumulatedTime:0,unreadPropStyle:null,clearUnreadPropStyle:function(e){var t=!1,n=this.state,r=n.currentStyle,i=n.currentVelocity,o=n.lastIdealStyle,l=n.lastIdealVelocity;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var s=e[u];"number"==typeof s&&(t||(t=!0,r=a({},r),i=a({},i),o=a({},o),l=a({},l)),r[u]=s,i[u]=0,o[u]=s,l[u]=0)}t&&this.setState({currentStyle:r,currentVelocity:i,lastIdealStyle:o,lastIdealVelocity:l})},startAnimationIfNecessary:function(){var e=this;this.animationID=y.default(function(t){var n=e.props.style;if(v.default(e.state.currentStyle,n,e.state.currentVelocity))return e.wasAnimating&&e.props.onRest&&e.props.onRest(),e.animationID=null,e.wasAnimating=!1,void(e.accumulatedTime=0);e.wasAnimating=!0;var r=t||d.default(),a=r-e.prevTime;if(e.prevTime=r,e.accumulatedTime=e.accumulatedTime+a,e.accumulatedTime>10*T&&(e.accumulatedTime=0),0===e.accumulatedTime)return e.animationID=null,void e.startAnimationIfNecessary();var i=(e.accumulatedTime-Math.floor(e.accumulatedTime/T)*T)/T,o=Math.floor(e.accumulatedTime/T),l={},u={},s={},f={};for(var p in n)if(Object.prototype.hasOwnProperty.call(n,p)){var y=n[p];if("number"==typeof y)s[p]=y,f[p]=0,l[p]=y,u[p]=0;else{for(var m=e.state.lastIdealStyle[p],h=e.state.lastIdealVelocity[p],g=0;g<o;g++){var S=c.default(T/1e3,m,h,y.val,y.stiffness,y.damping,y.precision);m=S[0],h=S[1]}var b=c.default(T/1e3,m,h,y.val,y.stiffness,y.damping,y.precision),P=b[0],I=b[1];s[p]=m+(P-m)*i,f[p]=h+(I-h)*i,l[p]=m,u[p]=h}}e.animationID=null,e.accumulatedTime-=o*T,e.setState({currentStyle:s,currentVelocity:f,lastIdealStyle:l,lastIdealVelocity:u}),e.unreadPropStyle=null,e.startAnimationIfNecessary()})},componentDidMount:function(){this.prevTime=d.default(),this.startAnimationIfNecessary()},componentWillReceiveProps:function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=d.default(),this.startAnimationIfNecessary())},componentWillUnmount:function(){null!=this.animationID&&(y.default.cancel(this.animationID),this.animationID=null)},render:function(){var e=this.props.children(this.state.currentStyle);return e&&g.default.Children.only(e)}});t.default=S,e.exports=t.default},394:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){for(var r=0;r<e.length;r++)if(!h.default(e[r],t[r],n[r]))return!1;return!0}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(104),l=r(o),u=n(107),s=r(u),c=n(106),f=r(c),d=n(65),p=r(d),y=n(108),m=r(y),v=n(105),h=r(v),g=n(1),T=r(g),S=1e3/60,b=T.default.createClass({displayName:"StaggeredMotion",propTypes:{defaultStyles:g.PropTypes.arrayOf(g.PropTypes.objectOf(g.PropTypes.number)),styles:g.PropTypes.func.isRequired,children:g.PropTypes.func.isRequired},getInitialState:function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=t||n().map(s.default),a=r.map(function(e){return l.default(e)});return{currentStyles:r,currentVelocities:a,lastIdealStyles:r,lastIdealVelocities:a}},animationID:null,prevTime:0,accumulatedTime:0,unreadPropStyles:null,clearUnreadPropStyle:function(e){for(var t=this.state,n=t.currentStyles,r=t.currentVelocities,a=t.lastIdealStyles,o=t.lastIdealVelocities,l=!1,u=0;u<e.length;u++){var s=e[u],c=!1;for(var f in s)if(Object.prototype.hasOwnProperty.call(s,f)){var d=s[f];"number"==typeof d&&(c||(c=!0,l=!0,n[u]=i({},n[u]),r[u]=i({},r[u]),a[u]=i({},a[u]),o[u]=i({},o[u])),n[u][f]=d,r[u][f]=0,a[u][f]=d,o[u][f]=0)}}l&&this.setState({currentStyles:n,currentVelocities:r,lastIdealStyles:a,lastIdealVelocities:o})},startAnimationIfNecessary:function(){var e=this;this.animationID=m.default(function(t){var n=e.props.styles(e.state.lastIdealStyles);if(a(e.state.currentStyles,n,e.state.currentVelocities))return e.animationID=null,void(e.accumulatedTime=0);var r=t||p.default(),i=r-e.prevTime;if(e.prevTime=r,e.accumulatedTime=e.accumulatedTime+i,e.accumulatedTime>10*S&&(e.accumulatedTime=0),0===e.accumulatedTime)return e.animationID=null,void e.startAnimationIfNecessary();for(var o=(e.accumulatedTime-Math.floor(e.accumulatedTime/S)*S)/S,l=Math.floor(e.accumulatedTime/S),u=[],s=[],c=[],d=[],y=0;y<n.length;y++){var m=n[y],v={},h={},g={},T={};for(var b in m)if(Object.prototype.hasOwnProperty.call(m,b)){var P=m[b];if("number"==typeof P)v[b]=P,h[b]=0,g[b]=P,T[b]=0;else{for(var I=e.state.lastIdealStyles[y][b],x=e.state.lastIdealVelocities[y][b],_=0;_<l;_++){var w=f.default(S/1e3,I,x,P.val,P.stiffness,P.damping,P.precision);I=w[0],x=w[1]}var O=f.default(S/1e3,I,x,P.val,P.stiffness,P.damping,P.precision),A=O[0],k=O[1];v[b]=I+(A-I)*o,h[b]=x+(k-x)*o,g[b]=I,T[b]=x}}c[y]=v,d[y]=h,u[y]=g,s[y]=T}e.animationID=null,e.accumulatedTime-=l*S,e.setState({currentStyles:c,currentVelocities:d,lastIdealStyles:u,lastIdealVelocities:s}),e.unreadPropStyles=null,e.startAnimationIfNecessary()})},componentDidMount:function(){this.prevTime=p.default(),this.startAnimationIfNecessary()},componentWillReceiveProps:function(e){null!=this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),null==this.animationID&&(this.prevTime=p.default(),this.startAnimationIfNecessary())},componentWillUnmount:function(){null!=this.animationID&&(m.default.cancel(this.animationID),this.animationID=null)},render:function(){var e=this.props.children(this.state.currentStyles);return e&&T.default.Children.only(e)}});t.default=b,e.exports=t.default},395:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){var r=t;return null==r?e.map(function(e,t){return{key:e.key,data:e.data,style:n[t]}}):e.map(function(e,t){for(var a=0;a<r.length;a++)if(r[a].key===e.key)return{key:r[a].key,data:r[a].data,style:n[t]};return{key:e.key,data:e.data,style:n[t]}})}function i(e,t,n,r){if(r.length!==t.length)return!1;for(var a=0;a<r.length;a++)if(r[a].key!==t[a].key)return!1;for(var a=0;a<r.length;a++)if(!b.default(e[a],t[a].style,n[a]))return!1;return!0}function o(e,t,n,r,a,i,o,l,u){for(var c=m.default(r,a,function(e,r){var a=t(r);return null==a?(n({key:r.key,data:r.data}),null):b.default(i[e],a,o[e])?(n({key:r.key,data:r.data}),null):{key:r.key,data:r.data,style:a}}),f=[],d=[],p=[],y=[],v=0;v<c.length;v++){for(var h=c[v],g=null,T=0;T<r.length;T++)if(r[T].key===h.key){g=T;break}if(null==g){var S=e(h);f[v]=S,p[v]=S;var P=s.default(h.style);d[v]=P,y[v]=P}else f[v]=i[g],p[v]=l[g],d[v]=o[g],y[v]=u[g]}return[c,f,d,p,y]}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(104),s=r(u),c=n(107),f=r(c),d=n(106),p=r(d),y=n(396),m=r(y),v=n(65),h=r(v),g=n(108),T=r(g),S=n(105),b=r(S),P=n(1),I=r(P),x=1e3/60,_=I.default.createClass({displayName:"TransitionMotion",propTypes:{defaultStyles:P.PropTypes.arrayOf(P.PropTypes.shape({key:P.PropTypes.string.isRequired,data:P.PropTypes.any,style:P.PropTypes.objectOf(P.PropTypes.number).isRequired})),styles:P.PropTypes.oneOfType([P.PropTypes.func,P.PropTypes.arrayOf(P.PropTypes.shape({key:P.PropTypes.string.isRequired,data:P.PropTypes.any,style:P.PropTypes.objectOf(P.PropTypes.oneOfType([P.PropTypes.number,P.PropTypes.object])).isRequired}))]).isRequired,children:P.PropTypes.func.isRequired,willEnter:P.PropTypes.func,willLeave:P.PropTypes.func,didLeave:P.PropTypes.func},getDefaultProps:function(){return{willEnter:function(e){return f.default(e.style)},willLeave:function(){return null},didLeave:function(){}}},getInitialState:function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=e.willEnter,a=e.willLeave,i=e.didLeave,l="function"==typeof n?n(t):n,u=void 0;u=null==t?l:t.map(function(e){for(var t=0;t<l.length;t++)if(l[t].key===e.key)return l[t];return e});var c=null==t?l.map(function(e){return f.default(e.style)}):t.map(function(e){return f.default(e.style)}),d=null==t?l.map(function(e){return s.default(e.style)}):t.map(function(e){return s.default(e.style)}),p=o(r,a,i,u,l,c,d,c,d),y=p[0],m=p[1],v=p[2],h=p[3],g=p[4];return{currentStyles:m,currentVelocities:v,lastIdealStyles:h,lastIdealVelocities:g,mergedPropsStyles:y}},unmounting:!1,animationID:null,prevTime:0,accumulatedTime:0,unreadPropStyles:null,clearUnreadPropStyle:function(e){for(var t=o(this.props.willEnter,this.props.willLeave,this.props.didLeave,this.state.mergedPropsStyles,e,this.state.currentStyles,this.state.currentVelocities,this.state.lastIdealStyles,this.state.lastIdealVelocities),n=t[0],r=t[1],a=t[2],i=t[3],u=t[4],s=0;s<e.length;s++){var c=e[s].style,f=!1;for(var d in c)if(Object.prototype.hasOwnProperty.call(c,d)){var p=c[d];"number"==typeof p&&(f||(f=!0,r[s]=l({},r[s]),a[s]=l({},a[s]),i[s]=l({},i[s]),u[s]=l({},u[s]),n[s]={key:n[s].key,data:n[s].data,style:l({},n[s].style)}),r[s][d]=p,a[s][d]=0,i[s][d]=p,u[s][d]=0,n[s].style[d]=p)}}this.setState({currentStyles:r,currentVelocities:a,mergedPropsStyles:n,lastIdealStyles:i,lastIdealVelocities:u})},startAnimationIfNecessary:function(){var e=this;this.unmounting||(this.animationID=T.default(function(t){var n=e.props.styles,r="function"==typeof n?n(a(e.state.mergedPropsStyles,e.unreadPropStyles,e.state.lastIdealStyles)):n;if(i(e.state.currentStyles,r,e.state.currentVelocities,e.state.mergedPropsStyles))return e.animationID=null,void(e.accumulatedTime=0);var l=t||h.default(),u=l-e.prevTime;if(e.prevTime=l,e.accumulatedTime=e.accumulatedTime+u,e.accumulatedTime>10*x&&(e.accumulatedTime=0),0===e.accumulatedTime)return e.animationID=null,void e.startAnimationIfNecessary();for(var s=(e.accumulatedTime-Math.floor(e.accumulatedTime/x)*x)/x,c=Math.floor(e.accumulatedTime/x),f=o(e.props.willEnter,e.props.willLeave,e.props.didLeave,e.state.mergedPropsStyles,r,e.state.currentStyles,e.state.currentVelocities,e.state.lastIdealStyles,e.state.lastIdealVelocities),d=f[0],y=f[1],m=f[2],v=f[3],g=f[4],T=0;T<d.length;T++){var S=d[T].style,b={},P={},I={},_={};for(var w in S)if(Object.prototype.hasOwnProperty.call(S,w)){var O=S[w];if("number"==typeof O)b[w]=O,P[w]=0,I[w]=O,_[w]=0;else{for(var A=v[T][w],k=g[T][w],M=0;M<c;M++){var j=p.default(x/1e3,A,k,O.val,O.stiffness,O.damping,O.precision);A=j[0],k=j[1]}var D=p.default(x/1e3,A,k,O.val,O.stiffness,O.damping,O.precision),E=D[0],V=D[1];b[w]=A+(E-A)*s,P[w]=k+(V-k)*s,I[w]=A,_[w]=k}}v[T]=I,g[T]=_,y[T]=b,m[T]=P}e.animationID=null,e.accumulatedTime-=c*x,e.setState({currentStyles:y,currentVelocities:m,lastIdealStyles:v,lastIdealVelocities:g,mergedPropsStyles:d}),e.unreadPropStyles=null,e.startAnimationIfNecessary()}))},componentDidMount:function(){this.prevTime=h.default(),this.startAnimationIfNecessary()},componentWillReceiveProps:function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles);var t=e.styles;"function"==typeof t?this.unreadPropStyles=t(a(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):this.unreadPropStyles=t,null==this.animationID&&(this.prevTime=h.default(),this.startAnimationIfNecessary())},componentWillUnmount:function(){this.unmounting=!0,null!=this.animationID&&(T.default.cancel(this.animationID),this.animationID=null)},render:function(){var e=a(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),t=this.props.children(e);return t&&I.default.Children.only(t)}});t.default=_,e.exports=t.default},396:function(e,t){"use strict";function n(e,t,n){for(var r={},a=0;a<e.length;a++)r[e[a].key]=a;for(var i={},a=0;a<t.length;a++)i[t[a].key]=a;for(var o=[],a=0;a<t.length;a++)o[a]=t[a];for(var a=0;a<e.length;a++)if(!Object.prototype.hasOwnProperty.call(i,e[a].key)){var l=n(a,e[a]);null!=l&&o.push(l)}return o.sort(function(e,n){var a=i[e.key],o=i[n.key],l=r[e.key],u=r[n.key];if(null!=a&&null!=o)return i[e.key]-i[n.key];if(null!=l&&null!=u)return r[e.key]-r[n.key];if(null!=a){for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(a<i[c]&&u>r[c])return-1;if(a>i[c]&&u<r[c])return 1}}return 1}for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(o<i[c]&&l>r[c])return 1;if(o>i[c]&&l<r[c])return-1}}return-1})}t.__esModule=!0,t.default=n,e.exports=t.default},397:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var a=n(393);t.Motion=r(a);var i=n(394);t.StaggeredMotion=r(i);var o=n(395);t.TransitionMotion=r(o);var l=n(399);t.spring=r(l);var u=n(180);t.presets=r(u);var s=n(398);t.reorderKeys=r(s)},398:function(e,t,n){"use strict";function r(){}t.__esModule=!0,t.default=r;e.exports=t.default},399:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return i({},u,t,{val:e})}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=a;var o=n(180),l=r(o),u=i({},l.default.noWobble,{precision:.01});e.exports=t.default},506:function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){return e===t}function a(e){var t=arguments.length<=1||void 0===arguments[1]?r:arguments[1],n=null,a=null;return function(){for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];return null!==n&&n.length===i.length&&i.every(function(e,r){return t(e,n[r])})||(a=e.apply(void 0,i)),n=i,a}}function i(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e})){var n=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, "+("instead received the following types: ["+n+"]"))}return t}function o(e){for(var t=arguments.length,r=Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];return function(){for(var t=arguments.length,a=Array(t),o=0;o<t;o++)a[o]=arguments[o];var l=0,u=a.pop(),s=i(a),c=e.apply(void 0,[function(){return l++,u.apply(void 0,arguments)}].concat(r)),f=function(e,t){for(var r=arguments.length,a=Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i];var o=s.map(function(n){return n.apply(void 0,[e,t].concat(a))});return c.apply(void 0,n(o))};return f.resultFunc=u,f.recomputations=function(){return l},f.resetRecomputations=function(){return l=0},f}}function l(e){var t=arguments.length<=1||void 0===arguments[1]?u:arguments[1];if("object"!=typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var n=Object.keys(e);return t(n.map(function(t){return e[t]}),function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(function(e,t,r){return e[n[r]]=t,e},{})})}t.__esModule=!0,t.defaultMemoize=a,t.createSelectorCreator=o,t.createStructuredSelector=l;var u=t.createSelector=o(a)}});