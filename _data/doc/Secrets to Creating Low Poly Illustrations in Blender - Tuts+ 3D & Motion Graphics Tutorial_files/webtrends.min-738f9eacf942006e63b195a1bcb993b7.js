var n=void 0;!function(t,e,i,a){function r(t){return t&&(t.forEach||(t.forEach=function(t,e){for(var i=e||window,n=0,s=this.length;s>n;++n)t.call(i,this[n],n,this)}),t.filter||(t.filter=function(t,e){for(var i=e||window,n=[],s=0,a=this.length;a>s;++s)t.call(i,this[s],s,this)&&n.push(this[s]);return n}),t.indexOf||(t.indexOf=function(t){for(var e=0;e<this.length;++e)if(this[e]===t)return e;return-1})),t}if(!t.wb){var o={e:{},plugins:{},bb:0,f:{},addEventListener:t.addEventListener?function(t,e,i){t.addEventListener&&t.addEventListener(e,i,!1)}:function(t,e,i){t.attachEvent&&t.attachEvent("on"+e,i,!1)},h:{},version:"10.2.55",p:{},kb:!1,t:25,Z:function(){a.search&&(o.p=o.ma(a.search)),t.webtrendsAsyncInit&&!t.webtrendsAsyncInit.hasRun&&(t.webtrendsAsyncInit(),t.webtrendsAsyncInit.hasRun=!0),o.addEventListener(t,"load",function(){o.kb=!0})},g:function(t){return"[object Function]"===Object.prototype.toString.call(t)},mb:function(t){var e,i=[];for(e in t)t.hasOwnProperty(e)&&""!=t[e]&&t[e]!=n&&"function"!=typeof t[e]&&i.push({k:e,v:t[e]});return i},extend:function(t,e,i){for(var n in e)(i||"undefined"==typeof t[n])&&(t[n]=e[n]);return t},find:function(t){return o.ta||(o.ta=o.ib()),o.ta(t)},ib:function(){var n=/MSIE (\d+)/.exec(i.userAgent),n=n?n[1]:99;if(e.querySelectorAll&&e.body&&n>8){var s=e.body;return function(t){return s.querySelectorAll(t)}}return t.jQuery?t.jQuery.find:t.Sizzle?t.Sizzle:t.YAHOO&&YAHOO.wa&&YAHOO.wa.xa?YAHOO.wa.xa.Ib:"qwery"in t?qwery:(t.YUI&&YUI().Kb("node",function(t){return t.all}),e.querySelectorAll?(s=e.body)?function(t){return s.querySelectorAll(t)}:function(){return[]}:function(){return[]})},ma:function(t){var t=t.split(/[&?]/g),e={};try{for(var i=0,n=t.length;n>i;++i){var s=t[i].match(/^([^=]+)(?:=([\s\S]*))?/);if(s&&s[1]){var a="";try{a=decodeURIComponent(s[1])}catch(r){try{a=unescape(s[1])}catch(o){a=s[1]}}var h="";try{h=decodeURIComponent(s[2])}catch(f){try{h=unescape(s[2])}catch(c){h=s[2]}}e[a]?(e[a]=[e[a]],e[a].push(h)):e[a]=h}}}catch(l){}return e},$:function(t,i){arguments.length<2&&(i=!0),s=e.createElement("script"),s.type="text/javascript",s.async=i,s.src=t,s2=e.getElementsByTagName("script")[0],s2.parentNode.insertBefore(s,s2)},U:function(t,e){var i=t.target||t.srcElement;if("string"==typeof e){var n=e,e={};e[n.toUpperCase()]=1}for(;i&&i.tagName&&!e[i.tagName.toUpperCase()];)i=i.parentElement||i.parentNode;return i},ca:function(t){return"function"==typeof encodeURIComponent?encodeURIComponent(t):escape(t)},pa:function(t){for(var e in o.e)o.e[e].ea(t);return!1},P:function(t,e,i){return e||(e="collect"),i?o.D("transform."+e,t,i):o.D("transform."+e,t),this},D:function(t,n,s){function a(e,i){o.h[t][e.m]||(o.h[t][e.m]=r([])),o.h[t][e.m].push(i)}if(t&&n&&""!=t&&o.g(n)){if("wtmouseup"===t&&(t="wtmouse"),"wtmouse"===t&&!o.qa){var h=/MSIE (\d+)/.exec(i.userAgent);o.addEventListener(e,(h?h[1]:99)>=8?"mousedown":"mouseup",function(e){e||(e=window.event),o.Ka(t,{event:e})}),o.qa=!0}if(o.h[t]||(o.h[t]={}),s)a(s,n);else for(var f in o.e)a(o.e[f],n)}},Ka:function(t,e){for(var i in o.e)o.fireEvent(t,o.e[i],e)},ya:function(t,e,i,n){return"function"==typeof e?e.onetime?(i.push(e),!0):(e(t,n),!1):void 0},fireEvent:function(t,e,i){var n=r([]);if(o.h[t]&&o.h[t][e.m]){if(t=o.h[t][e.m],!t.length)return;for(var s=t.length-1;s>=0;s--)o.ya(e,t[s],n,i)&&t.pop()}n.forEach(function(t){t(e,i)})},aa:function(t,e){var i,n=!1;for(i in o.e){var s=o.e[i];t in s.plugins&&(n=!0,s.aa(t,e))}n||e({Hb:!0})}},h=o.fireEvent,f=o.D;o.b=function(){return this.ka=t.RegExp?/dcs(uri)|(ref)|(aut)|(met)|(sta)|(sip)|(pro)|(byt)|(dat)|(p3p)|(cfg)|(redirect)|(cip)/i:"",this.sa={},this.plugins=this.plugins={},this.d=this.WT={},this.i=this.DCS={},this.q=this.DCSext={},this.m=this.dcssID="dcsobj_"+o.bb++,this.images=this.images=[],this.ja=this.errors=[],this.a=this.FPCConfig={},this.c=this.TPCConfig={},this.images=[],this.w=[],this.yb=[],this.j=[],this.M=[],this.O="",this.o=0,this.W=this.la="",this.qa=!1,this},o.b.prototype={Z:function(e){function i(t,i){return e.hasOwnProperty(t)?e[t]:i}function s(t,e,i){return t?t.hasOwnProperty(e)?t[e]:i:i}return this.Ab=e,this.H=i("errorlogger",function(){}),this.ab=this.dcsid=e.dcsid,this.K=this.queue=i("queue",[]),this.domain=this.domain=i("domain","statse.webtrendslive.com"),this.ub=this.timezone=i("timezone",-8),this.enabled=this.enabled=i("enabled",!0),this.Y=this.i18n=i("i18n",!0),this.sa=t.RegExp?this.Y?{"%25":/\%/g,"%26":/\&/g,"%23":/\#/g}:{"%09":/\t/g,"%20":/ /g,"%23":/\#/g,"%26":/\&/g,"%2B":/\+/g,"%3F":/\?/g,"%5C":/\\/g,"%22":/\"/g,"%7F":/\x7F/g,"%A0":/\xA0/g}:"",e.metanames&&(this.oa=r(e.metanames.toLowerCase().split(","))),t.webtrendsAsyncLoad&&"function"==typeof t.webtrendsAsyncLoad&&!i("privateFlag",!1)&&o.D("onready",window.webtrendsAsyncLoad,this),this.L=this.vtid=i("vtid",n),this.ra=i("paidsearchparams","gclid"),this.sb=this.splitvalue=i("splitvalue",""),o.t=e.dcsdelay||o.t,this.cb=this.delayAll=i("delayAll",!1),this.J=this.preserve=i("preserve",!0),this.w=r(i("navigationtag","div,table").toLowerCase().split(",")),this.j=i("onsitedoms",""),o.g(this.j.test)||(this.j=r(this.j.toLowerCase().split(",")),this.j.forEach(function(t,e,i){i[e]=t.replace(/^\s*/,"").replace(/\s*$/,"")})),this.M=r(i("downloadtypes","xls,doc,pdf,txt,csv,zip,docx,xlsx,rar,gzip").toLowerCase().split(",")),this.M.forEach(function(t,e,i){i[e]=t.replace(/^\s*/,"").replace(/\s*$/,"")}),i("adimpressions",!1)&&(this.O=i("adsparam","WT.ac")),this.a.enabled=this.FPCConfig.enabled=s(e.FPCConfig,"enabled",!0),this.a.domain=this.FPCConfig.domain=s(e.FPCConfig,"domain",i("fpcdom","")),this.a.name=this.FPCConfig.name=s(e.FPCConfig,"name",i("fpc","WT_FPC")),this.a.u=this.FPCConfig.expiry=s(e.FPCConfig,"expires",i("cookieexpires",63113851500)),this.a.u=this.a.u<63113851500?this.a.u:63113851500,this.a.fb=new Date(this.getTime()+this.a.u),this.a.qb=0===this.a.u,this.c.enabled=this.TPCConfig.enabled=s(e.TPCConfig,"enabled",!i("disablecookie",!1)),this.c.Q=this.TPCConfig.cfgType=s(e.TPCConfig,"cfgType",this.c.enabled?"":"1"),e.cookieTypes&&("none"===e.cookieTypes.toLowerCase()?(this.a.enabled=!1,this.c.enabled=!1,this.c.Q="1"):"firstpartyonly"===e.cookieTypes.toLowerCase()?(this.a.enabled=!0,this.c.enabled=!1,this.c.Q="1"):"all"===e.cookieTypes.toLowerCase()&&(this.a.enabled=!0,this.c.enabled=!0,this.c.Q=s(e.TPCConfig,"cfgType",""))),this.Eb=this.fpc=this.a.name,this.Fb=this.fpcdom=this.a.domain,this.Cb=this.cookieExp=this.a.u,r(i("pageEvents",[])).forEach(function(t){this.xb=e[t.toLowerCase()]=!0}),i("offsite",!1)&&this.Ha(),i("download",!1)&&this.Fa(),i("anchor",!1)&&this.Ea(),i("javascript",!1)&&this.Ga(),i("rightclick",!1)&&this.Ia(),i("privateFlag",!1)||(o.e[this.m]=this),this.plugins=e.plugins||{},this.Aa(),o.f[this.domain]||(o.f[this.domain]=""),!i("privateFlag",!1)&&this.a.enabled&&this.Ta(this.m),this.R(),this},Aa:function(){for(var e in this.plugins){var i=this.plugins[e];if(!o.plugins[e]){o.plugins[e]=i;var n=i.src;o.g(n)?t.setTimeout(function(t){return function(){t()}}(n),1):o.$(n,!1)}if(!i.async){var s=this;i.loaded=!1,this.o++,i.timeout&&t.setTimeout(function(t){return function(){t.loaded||(t.tb=!0,s.o--,s.R())}}(i),i.timeout)}}},Ua:function(t){"undefined"!=typeof t&&(!o.f[this.domain]&&t.gTempWtId&&(o.f[this.domain]=t.gTempWtId),this.W=t.gTempWtId,!o.f[this.domain]&&t.gWtId&&(o.f[this.domain]=t.gWtId),this.la=t.gWtAccountRollup),this.o--,this.R()},Ta:function(t){return-1==e.cookie.indexOf(this.a.name+"=")&&-1==e.cookie.indexOf("WTLOPTOUT=")&&this.c.enabled?(this.enabled&&(o.$("//"+this.domain+"/"+this.ab+"/wtid.js?callback=Webtrends.dcss."+t+".dcsGetIdCallback",!0),this.o++),!1):!0},aa:function(t,e){var i=this.plugins[t];i&&(o.g(e)&&(this.lb()?e(this,i):f("onready",function(t,e,i){function n(){t(e,i)}return n.onetime=!0,n}(e,this,i),this)),i.loaded=!0,!i.async&&!i.tb&&this.o--),this.R()},lb:function(){return this.o<=0},R:function(){this.o<=0&&this.rb()},rb:function(){this.Ba||(h("onready",this),this.jb(),this.pb(),this.Ba=!0)},jb:function(){for(var t=0;t<this.K.length;t++)this.ha(this.K[t]);this.K=[]},pb:function(){var t=this;this.K.push=function(e){t.ha(e)}},P:function(t,e){o.P(t,e,this)},r:function(t,e){var i=this,s=o.extend({domEvent:"click",callback:n,argsa:[],args:{},delayTime:n,transform:n,filter:n,actionElems:{A:1,INPUT:1},finish:n},e,!0);return f("wtmouse",function(e,n){i.Ja(i,t,o.extend(n,s,!0))},i),this},ua:function(t,e,i,n){e.element=i,("form"===n||"input"===n||"button"===n)&&(e.domEvent="submit"),t.ba(e)},Ja:function(t,e,i){var n=o.find;if(n&&i.event&&i.actionElems){var s=o.U(i.event,i.actionElems),a=s.tagName?s.tagName.toLowerCase():"";if(e.toUpperCase()in i.actionElems&&e.toUpperCase()===a.toUpperCase())return this.ua(t,i,s,a);if((e=n(e))&&s&&e&&e.length)for(n=0;n<e.length;n++)if(e[n]===s){this.ua(t,i,s,a);break}}},V:function(t,i){var n=r(e.cookie.split("; ")).filter(function(e){return-1!=e.indexOf(t+"=")})[0];return!n||n.length<t.length+1?!1:(r(n.split(t+"=")[1].split(":")).forEach(function(t){t=t.split("="),i[t[0]]=t[1]}),!0)},Ra:function(t){for(var i=e.cookie.split("; "),n=[],s=0,a=0,r=t.length,o=i.length,a=0;o>a;a++){var h=i[a];h.substring(0,r+1)==t+"="&&(n[s++]=h)}if(i=n.length,i>0){if(s=0,i>1&&t==this.a.name)for(t=new Date(0),a=0;i>a;a++)o=parseInt(this.Db(n[a],"lv")),o=new Date(o),o>t&&(t.setTime(o.getTime()),s=a);return unescape(n[s].substring(r+1))}return null},Ya:function(t,i,n){var s=[],i=o.mb(i);r(i).forEach(function(t){s.push(t.k+"="+t.v)}),s=s.sort().join(":"),e.cookie=t+"="+s+n},Oa:function(t,e,i){t+="=",t+="; expires=expires=Thu, 01 Jan 1970 00:00:01 GMT",t+="; path="+e,t+=i?";domain="+i:"",document.cookie=t},Va:function(t,e,i,n){var s={};return this.V(t,s)?e==s.id&&i==s.lv&&n==s.ss?0:3:2},Sa:function(){var t={};return this.V(this.a.name,t),t},Qa:function(){if(-1==e.cookie.indexOf("WTLOPTOUT="))if(this.d.ce=this.a.enabled||this.c.enabled?this.a.enabled&&!this.c.enabled?"1":"2":"0",this.a.enabled){var t=this.d,i=this.a.name,n=new Date,s=6e4*n.getTimezoneOffset()+36e5*this.ub;n.setTime(n.getTime()+s);var a=new Date(n.getTime());t.co_f=t.vtid=t.vtvs=t.vt_f=t.vt_f_a=t.vt_f_s=t.vt_f_d=t.vt_f_tlh=t.vt_f_tlv="";var r={};if(this.V(i,r)){var h=r.id,f=parseInt(r.lv),c=parseInt(r.ss);if(null==h||"null"==h||isNaN(f)||isNaN(c))return;t.co_f=h,h=new Date(f),t.vt_f_tlh=Math.floor((h.getTime()-s)/1e3),a.setTime(c),(n.getTime()>h.getTime()+18e5||n.getTime()>a.getTime()+288e5)&&(t.vt_f_tlv=Math.floor((a.getTime()-s)/1e3),a.setTime(n.getTime()),t.vt_f_s="1"),(n.getDate()!=h.getDate()||n.getMonth()!=h.getMonth()||n.getFullYear()!=h.getFullYear())&&(t.vt_f_d="1")}else{if(this.W.length)t.co_f=o.f[this.domain].length?o.f[this.domain]:this.W,t.vt_f="1";else if(o.f[this.domain].length)t.co_f=o.f[this.domain];else{for(t.co_f="2",c=n.getTime().toString(),h=2;h<=32-c.length;h++)t.co_f+=Math.floor(16*Math.random()).toString(16);t.co_f+=c,t.vt_f="1"}0==this.la.length&&(t.vt_f_a="1"),t.vt_f_s=t.vt_f_d="1",t.vt_f_tlh=t.vt_f_tlv="0"}t.co_f=escape(t.co_f),t.vtid="undefined"==typeof this.L?t.co_f:this.L||"",t.vtvs=(a.getTime()-s).toString(),s=(this.a.qb?"":"; expires="+this.a.fb.toGMTString())+"; path=/"+(""!=this.a.domain?"; domain="+this.a.domain:""),n=n.getTime().toString(),a=a.getTime().toString(),r.id=t.co_f,r.lv=n,r.ss=a,this.Ya(i,r,s),i=this.Va(i,t.co_f,n,a),0!=i&&(t.co_f=t.vtvs=t.vt_f_s=t.vt_f_d=t.vt_f_tlh=t.vt_f_tlv="","undefined"==typeof this.L&&(t.vtid=""),t.vt_f=t.vt_f_a=i)}else this.d.vtid=this.L?this.L:"",this.Oa(this.a.name,"/",this.a.domain)},vb:function(){try{var t;return arguments&&arguments.length>1?t={argsa:Array.prototype.slice.call(arguments)}:1===arguments.length&&(t=arguments[0]),"undefined"==typeof t&&(t={element:n,event:n,zb:[]}),"undefined"==typeof t.argsa&&(t.argsa=[]),this.ia("collect",t),this}catch(e){this.ja.push(e),this.H(e)}},ea:function(t){t&&t.length>1&&(t={argsa:Array.prototype.slice.call(arguments)}),this.ba(t)},ba:function(t){try{if("undefined"==typeof t&&(t={}),this.ia("multitrack",t),t.delayTime){var e=Number(t.delayTime);this.va(isNaN(e)?o.t:e)}else this.cb&&this.va(o.t);return!1}catch(i){this.ja.push(i),this.H(i)}},Ma:function(){this.i={},this.d={},this.q={},arguments.length%2==0&&this.T(arguments)},T:function(t){if(t)for(var e=0,i=t.length;i>e;e+=2)0==t[e].indexOf("WT.")?this.d[t[e].substring(3)]=t[e+1]:0==t[e].indexOf("DCS.")?this.i[t[e].substring(4)]=t[e+1]:0==t[e].indexOf("DCSext.")&&(this.q[t[e].substring(7)]=t[e+1])},Za:function(t){var e,i;if(this.J){this.C=[];for(var n=0,s=t.length;s>n;n+=2)i=t[n],0==i.indexOf("WT.")?(e=i.substring(3),this.C.push(i,this.d[e]||"")):0==i.indexOf("DCS.")?(e=i.substring(4),this.C.push(i,this.i[e]||"")):0==i.indexOf("DCSext.")&&(e=i.substring(7),this.C.push(i,this.q[e]||""))}},Xa:function(){this.J&&(this.T(this.C),this.C=[])},$a:function(){var n=new Date,s=this,r=this.d,h=this.i;if(r.tz=parseInt(n.getTimezoneOffset()/60*-1)||"0",r.bh=n.getHours()||"0",r.ul="Netscape"==i.appName?i.language:i.Lb,"object"==typeof screen&&(r.cd="Netscape"==i.appName?screen.pixelDepth:screen.colorDepth,r.sr=screen.width+"x"+screen.height),"boolean"==typeof i.javaEnabled()&&(r.jo=i.javaEnabled()?"Yes":"No"),e.title&&(r.ti=t.RegExp?e.title.replace(RegExp("^"+a.protocol+"//"+a.hostname+"\\s-\\s"),""):e.title),r.js="Yes",r.jv=function(){var t=navigator.userAgent.toLowerCase(),e=parseInt(navigator.appVersion),i=-1!=t.indexOf("mac"),n=-1!=t.indexOf("firefox"),s=-1!=t.indexOf("firefox/0."),a=-1!=t.indexOf("firefox/1.0"),r=-1!=t.indexOf("firefox/1.5"),o=-1!=t.indexOf("firefox/2.0"),h=!n&&-1!=t.indexOf("mozilla")&&-1==t.indexOf("compatible"),f=-1!=t.indexOf("msie")&&-1==t.indexOf("opera"),c=f&&4==e&&-1!=t.indexOf("msie 4"),f=f&&!c,l=-1!=t.indexOf("opera 5")||-1!=t.indexOf("opera/5"),u=-1!=t.indexOf("opera 6")||-1!=t.indexOf("opera/6"),t=-1!=t.indexOf("opera")&&!l&&!u,d="1.1";return n&&!s&&!a&!r&!o?d="1.8":o?d="1.7":r?d="1.6":s||a||h&&e>=5||t?d="1.5":i&&f||u?d="1.4":f||h&&4==e||l?d="1.3":c&&(d="1.2"),d}(),r.ct="unknown",e.body&&e.body.addBehavior)try{e.body.addBehavior("#default#clientCaps"),r.ct=e.body.Bb||"unknown",e.body.addBehavior("#default#homePage"),r.hp=e.body.Gb(location.href)?"1":"0"}catch(f){s.H(f)}var c=0,l=0;if("number"==typeof t.innerWidth?(c=t.innerWidth,l=t.innerHeight):e.documentElement&&(e.documentElement.clientWidth||e.documentElement.clientHeight)?(c=e.documentElement.clientWidth,l=e.documentElement.clientHeight):e.body&&(e.body.clientWidth||e.body.clientHeight)&&(c=e.body.clientWidth,l=e.body.clientHeight),r.bs=c+"x"+l,r.fv=function(){var e;if(t.ActiveXObject)for(e=15;e>0;e--)try{return new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+e),e+".0"}catch(n){s.H(n)}else if(i.plugins&&i.plugins.length)for(e=0;e<i.plugins.length;e++)if(-1!=i.plugins[e].name.indexOf("Shockwave Flash"))return i.plugins[e].description.split(" ")[2];return"Not enabled"}(),r.slv=function(){var t="Not enabled";try{-1!=i.userAgent.indexOf("MSIE")?new ActiveXObject("AgControl.AgControl")&&(t="Unknown"):i.plugins["Silverlight Plug-In"]&&(t="Unknown")}catch(e){s.H(e)}if("Not enabled"!=t){var n,a,r;if("object"==typeof Silverlight&&"function"==typeof Silverlight.na){for(n=9;n>0&&(a=n,!Silverlight.na(a+".0"))&&t!=a;n--);for(n=9;n>=0;n--){if(r=a+"."+n,Silverlight.na(r)){t=r;break}if(t==r)break}}}return t}(),this.Y&&(r.le="string"==typeof e.defaultCharset?e.defaultCharset:"string"==typeof e.characterSet?e.characterSet:"unknown"),r.tv=o.version,r.sp=this.sb,r.dl="0",o.p&&o.p.gb&&(r.fb_ref=o.p.gb),o.p&&o.p.hb&&(r.fb_source=o.p.hb),r.ssl=0==a.protocol.indexOf("https:")?"1":"0",h.dcsdat=n.getTime(),h.dcssip=a.hostname,h.dcsuri=a.pathname,r.es=h.dcssip+h.dcsuri,a.search&&(h.dcsqry=a.search),h.dcsqry)for(n=h.dcsqry.toLowerCase(),c=this.ra.length?this.ra.toLowerCase().split(","):[],l=0;l<c.length;l++)if(-1!=n.indexOf(c[l]+"=")){r.srch="1";break}""==e.referrer||"-"==e.referrer||"Microsoft Internet Explorer"==i.appName&&parseInt(i.appVersion)<4||(h.dcsref=e.referrer),h.dcscfg=this.c.Q},Pa:function(t,e){if(""!=e){if(null===t||t===n)return"";var i,t=t.toString();for(i in e)e[i]instanceof RegExp&&(t=t.replace(e[i],i));return t}return escape(t)},S:function(t,e){if(this.Y&&""!=this.ka&&!this.ka.test(t))if("dcsqry"==t){for(var i="",n=e.substring(1).split("&"),s=0;s<n.length;s++){var a=n[s],r=a.indexOf("=");if(-1!=r){var h=a.substring(0,r),a=a.substring(r+1);0!=s&&(i+="&"),i+=h+"="+o.ca(a)}}e=e.substring(0,1)+i}else e=o.ca(e);return"&"+t+"="+this.Pa(e,this.sa)},Na:function(i,n){if(e.images){var s=new Image;if(this.images.push(s),2===arguments.length&&n&&o.g(n.callback)){var a=!1,r=n.callback,h=this;s.onload=function(){return a?void 0:(a=!0,r(h,n),!0)},t.setTimeout(function(){return a?void 0:(a=!0,r(h,n),!0)},o.t)}s.src=i}},Wa:function(){var t;if(e.documentElement?t=e.getElementsByTagName("meta"):e.all&&(t=e.all.Jb("meta")),"undefined"!=typeof t)for(var i=t.length,n=0;i>n;n++){var s=t.item(n).name,a=t.item(n).content;t.item(n),s.length>0&&(s=s.toLowerCase(),0==s.toUpperCase().indexOf("WT.")?this.d[s.substring(3)]=a:0==s.toUpperCase().indexOf("DCSEXT.")?this.q[s.substring(7)]=a:0==s.toUpperCase().indexOf("DCS.")?this.i[s.substring(4)]=a:this.oa&&-1!=this.oa.indexOf(s)&&(this.q["meta_"+s]=a))}},fa:function(t){if(-1==e.cookie.indexOf("WTLOPTOUT=")){var s=this.d,r=this.i,o=this.q,h=this.i18n,f="http"+(0==a.protocol.indexOf("https:")?"s":"")+"://"+this.domain+(""==this.dcsid?"":"/"+this.dcsid)+"/dcs.gif?";h&&(s.dep="");for(var c in r)""!=r[c]&&r[c]!=n&&"function"!=typeof r[c]&&(f+=this.S(c,r[c]));for(c in s)""!=s[c]&&s[c]!=n&&"function"!=typeof s[c]&&(f+=this.S("WT."+c,s[c]));for(c in o)""!=o[c]&&o[c]!=n&&"function"!=typeof o[c]&&(h&&(s.dep=0==s.dep.length?c:s.dep+";"+c),f+=this.S(c,o[c]));h&&s.dep.length>0&&(f+=this.S("WT.dep",s.dep)),f.length>2048&&i.userAgent.indexOf("MSIE")>=0&&(f=f.substring(0,2040)+"&WT.tu=1"),this.Na(f,t),this.d.ad=""}},nb:function(){this.$a(),this.Wa(),this.O&&this.O.length>0&&this.La(),this.ob=!0},getTime:function(){return(new Date).getTime()},eb:0,va:function(t){for(var e=this.getTime();this.getTime()-e<t;)this.eb++},ia:function(t,e){t||(t="collect"),this.K.push({action:t,message:e})},ha:function(t){if(this.enabled){var e="action_"+t.action,i=t.message;if(this.ob||this.nb(),i.event&&!i.element&&(i.element=o.U(i.event,{A:1})),!o.g(i.filter)||!i.filter(this,i)){if(i.args){i.argsa=i.argsa||[];for(var n in i.args)i.argsa.push(n,i.args[n])}i.element&&i.element.getAttribute&&i.element.getAttribute("data-wtmt")&&(i.argsa=i.argsa.concat(i.element.getAttribute("data-wtmt").split(","))),h("transform."+t.action,this,i),h("transform.all",this,i),i.transform&&o.g(i.transform)&&i.transform(this,i),this.Qa(),o.g(this[e])&&this[e](i),h("finish."+t.action,this,i),h("finish.all",this,i),i.finish&&o.g(i.finish)&&i.finish(this,i)}}},Da:function(t){var e=t&&t.argsa&&t.argsa.length%2==0;e&&(this.Za(t.argsa),this.T(t.argsa)),this.i.dcsdat=this.getTime(),this.fa(t),e&&this.Xa()},Ca:function(t){t&&t.argsa&&t.argsa.length%2==0&&this.T(t.argsa),this.fa(t)},I:function(e){var i=document.createElement("a");return i.href=e.href,e={},e.G=i.hostname?i.hostname.split(":")[0]:window.location.hostname,e.n=i.pathname?0!=i.pathname.indexOf("/")?"/"+i.pathname:i.pathname:"/",e.l=i.search?i.search.substring(i.search.indexOf("?")+1,i.search.length):"",e.F=t.location,e},da:function(t,e){if(t.length>0){if(t=t.toLowerCase(),t==window.location.hostname.toLowerCase())return!0;if(o.g(e.test))return e.test(t);if(e.length>0)for(var i=e.length,n=0;i>n;n++)if(t==e[n])return!0}return!1},ga:function(t,e){for(var i=t.toLowerCase().substring(t.lastIndexOf(".")+1,t.length),n=e.length,s=0;n>s;s++)if(i==e[s])return!0;return!1},s:function(t,e){var i,n,s="",a="",r=e.length;for(i=0;r>i&&(n=e[i],!(n.length&&(a=o.U(t,n),s=a.getAttribute&&a.getAttribute("id")?a.getAttribute("id"):"",a=a.className||"",s.length||a.length)));i++);return s.length?s:a},X:function(t,i,n){var s,a=e.all?i.innerText:i.text,t=o.U(t,{IMG:1});return t&&t.alt?s=t.alt:a?s=a:i.innerHTML&&(s=i.innerHTML),s?s:n},B:function(){this.J||(this.za=this.J=!0)},z:function(){this.za=this.J=!1},N:function(t){var e=!1;return t||(t=window.event),t.which?e=3==t.which:t.button&&(e=2==t.button),e},Ha:function(){this.r("a",{filter:function(t,e){var i=e.element||{},n=e.event||{};return!i.hostname||t.da(i.hostname,t.j)||t.N(n)?!0:!1},transform:function(t,e){var i=e.event||{},n=e.element||{};t.B(e),n=t.I(n),e.argsa.push("DCS.dcssip",n.G,"DCS.dcsuri",n.n,"DCS.dcsqry",n.l,"DCS.dcsref",n.F,"WT.ti","Offsite:"+n.G+n.n+(n.l.length?"?"+n.l:""),"WT.dl","24","WT.nv",t.s(i,t.w))},finish:function(t){t.z()}})},Ea:function(){this.r("a",{filter:function(t,e){var i=e.element||{},n=e.event||{};return t.da(i.hostname,t.j)&&i.hash&&""!=i.hash&&"#"!=i.hash&&!t.N(n)?!1:!0},transform:function(t,e){var i=e.event||{},n=e.element||{};t.B(e),n=t.I(n),e.argsa.push("DCS.dcssip",n.G,"DCS.dcsuri",escape(n.n+e.element.hash),"DCS.dcsqry",n.l,"DCS.dcsref",n.F,"WT.ti",escape("Anchor:"+e.element.hash),"WT.nv",t.s(i,t.w),"WT.dl","21")},finish:function(t){t.z()}})},Fa:function(){this.r("a",{filter:function(t,e){var i=e.event||{};return t.ga((e.element||{}).pathname,t.M)&&!t.N(i)?!1:!0},transform:function(t,e){var i=e.event||{},n=e.element||{};t.B(e);var s=t.I(n),n=t.X(i,n,s.n);e.argsa.push("DCS.dcssip",s.G,"DCS.dcsuri",s.n,"DCS.dcsqry",s.l,"DCS.dcsref",s.F,"WT.ti","Download:"+n,"WT.nv",t.s(i,t.w),"WT.dl","20")},finish:function(t){t.z()}})},Ia:function(){this.r("a",{filter:function(t,e){var i=e.event||{};return t.ga((e.element||{}).pathname,t.M)&&t.N(i)?!1:!0},transform:function(t,e){var i=e.event||{},n=e.element||{};t.B(e);var s=t.I(n),n=t.X(i,n,s.n);e.argsa.push("DCS.dcssip",s.G,"DCS.dcsuri",s.n,"DCS.dcsqry",s.l,"DCS.dcsref",s.F,"WT.ti","RightClick:"+n,"WT.nv",t.s(i,t.w),"WT.dl","25")},finish:function(t){t.z()}})},Ga:function(){this.r("a",{filter:function(t,e){var i=e.element||{};return i.href&&i.protocol&&"javascript:"===i.protocol.toLowerCase()?!1:!0},transform:function(e,i){var n=i.event||{},s=i.element||{};e.B(i);var a=e.I(s);i.argsa.push("DCS.dcssip",t.location.hostname,"DCS.dcsuri",s.href,"DCS.dcsqry",a.l,"DCS.dcsref",a.F,"WT.ti","JavaScript:"+(s.innerHTML?s.innerHTML:""),"WT.dl","22","WT.nv",e.s(n,e.w))},finish:function(t){t.z()}})},La:function(){if(e.links){var t,i=this.O+"=",n=i.length,i=RegExp(i,"i"),s=e.links.length,a=end=-1,r=urlp=value="",r=e.URL+"",a=r.search(i);-1!=a&&(end=r.indexOf("&",a),urlp=r.substring(a,-1!=end?end:r.length),t=RegExp(urlp+"(&|#)","i"));for(var o=0;s>o;o++)e.links[o].href&&(r=e.links[o].href+"",urlp.length>0&&(r=r.replace(t,"$1")),a=r.search(i),-1!=a)&&(a+=n,end=r.indexOf("&",a),value=r.substring(a,-1!=end?end:r.length),this.d.ad=this.d.ad?this.d.ad+";"+value:value)}}},o.b.prototype.action_multitrack=o.b.prototype.Da,o.b.prototype.action_collect=o.b.prototype.Ca,t.dcsMultiTrack=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];o.pa({argsa:t})},t.Webtrends=o,t.WebTrends=o,t.WT=t.Webtrends,o.multiTrack=o.pa,o.dcs=o.b,o.dcss=o.e,o.addTransform=o.P,o.bindEvent=o.D,o.getQryParams=o.ma,o.dcsdelay=o.t,o.find=o.find,o.loadJS=o.$,o.registerPlugin=o.aa,o.b.prototype.init=o.b.prototype.Z,o.b.prototype.dcsMultiTrack=o.b.prototype.ea,o.b.prototype.track=o.b.prototype.vb,o.b.prototype.addSelector=o.b.prototype.r,o.b.prototype.dcsGetIdCallback=o.b.prototype.Ua,o.b.prototype.dcsCleanUp=o.b.prototype.Ma,o.b.prototype.dcsGetFPC=o.b.prototype.Sa,o.b.prototype.addTransform=o.b.prototype.P,o.b.prototype.dcsGetCookie=o.b.prototype.Ra,o.b.prototype.dcsNavigation=o.b.prototype.s,o.b.prototype.getTTL=o.b.prototype.X,o.Z()}}(window,window.document,window.navigator,window.location);