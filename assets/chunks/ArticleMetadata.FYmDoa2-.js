import{_ as ut,u as ct,a4 as ft,a5 as dt,l as ht,Y as lt,o as X,c as x,m as I,p as q,t as mt,e as _t,q as vt,s as pt}from"./framework._ypQjzQO.js";var et=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rt(b){return b&&b.__esModule&&Object.prototype.hasOwnProperty.call(b,"default")?b.default:b}var st={exports:{}};(function(b){(function(U){function w(e,a){var r=(e&65535)+(a&65535),m=(e>>16)+(a>>16)+(r>>16);return m<<16|r&65535}function O(e,a){return e<<a|e>>>32-a}function T(e,a,r,m,g,v){return w(O(w(w(a,e),w(m,v)),g),r)}function $(e,a,r,m,g,v,f){return T(a&r|~a&m,e,a,g,v,f)}function l(e,a,r,m,g,v,f){return T(a&m|r&~m,e,a,g,v,f)}function p(e,a,r,m,g,v,f){return T(a^r^m,e,a,g,v,f)}function _(e,a,r,m,g,v,f){return T(r^(a|~m),e,a,g,v,f)}function M(e,a){e[a>>5]|=128<<a%32,e[(a+64>>>9<<4)+14]=a;var r,m,g,v,f,s=1732584193,i=-271733879,n=-1732584194,t=271733878;for(r=0;r<e.length;r+=16)m=s,g=i,v=n,f=t,s=$(s,i,n,t,e[r],7,-680876936),t=$(t,s,i,n,e[r+1],12,-389564586),n=$(n,t,s,i,e[r+2],17,606105819),i=$(i,n,t,s,e[r+3],22,-1044525330),s=$(s,i,n,t,e[r+4],7,-176418897),t=$(t,s,i,n,e[r+5],12,1200080426),n=$(n,t,s,i,e[r+6],17,-1473231341),i=$(i,n,t,s,e[r+7],22,-45705983),s=$(s,i,n,t,e[r+8],7,1770035416),t=$(t,s,i,n,e[r+9],12,-1958414417),n=$(n,t,s,i,e[r+10],17,-42063),i=$(i,n,t,s,e[r+11],22,-1990404162),s=$(s,i,n,t,e[r+12],7,1804603682),t=$(t,s,i,n,e[r+13],12,-40341101),n=$(n,t,s,i,e[r+14],17,-1502002290),i=$(i,n,t,s,e[r+15],22,1236535329),s=l(s,i,n,t,e[r+1],5,-165796510),t=l(t,s,i,n,e[r+6],9,-1069501632),n=l(n,t,s,i,e[r+11],14,643717713),i=l(i,n,t,s,e[r],20,-373897302),s=l(s,i,n,t,e[r+5],5,-701558691),t=l(t,s,i,n,e[r+10],9,38016083),n=l(n,t,s,i,e[r+15],14,-660478335),i=l(i,n,t,s,e[r+4],20,-405537848),s=l(s,i,n,t,e[r+9],5,568446438),t=l(t,s,i,n,e[r+14],9,-1019803690),n=l(n,t,s,i,e[r+3],14,-187363961),i=l(i,n,t,s,e[r+8],20,1163531501),s=l(s,i,n,t,e[r+13],5,-1444681467),t=l(t,s,i,n,e[r+2],9,-51403784),n=l(n,t,s,i,e[r+7],14,1735328473),i=l(i,n,t,s,e[r+12],20,-1926607734),s=p(s,i,n,t,e[r+5],4,-378558),t=p(t,s,i,n,e[r+8],11,-2022574463),n=p(n,t,s,i,e[r+11],16,1839030562),i=p(i,n,t,s,e[r+14],23,-35309556),s=p(s,i,n,t,e[r+1],4,-1530992060),t=p(t,s,i,n,e[r+4],11,1272893353),n=p(n,t,s,i,e[r+7],16,-155497632),i=p(i,n,t,s,e[r+10],23,-1094730640),s=p(s,i,n,t,e[r+13],4,681279174),t=p(t,s,i,n,e[r],11,-358537222),n=p(n,t,s,i,e[r+3],16,-722521979),i=p(i,n,t,s,e[r+6],23,76029189),s=p(s,i,n,t,e[r+9],4,-640364487),t=p(t,s,i,n,e[r+12],11,-421815835),n=p(n,t,s,i,e[r+15],16,530742520),i=p(i,n,t,s,e[r+2],23,-995338651),s=_(s,i,n,t,e[r],6,-198630844),t=_(t,s,i,n,e[r+7],10,1126891415),n=_(n,t,s,i,e[r+14],15,-1416354905),i=_(i,n,t,s,e[r+5],21,-57434055),s=_(s,i,n,t,e[r+12],6,1700485571),t=_(t,s,i,n,e[r+3],10,-1894986606),n=_(n,t,s,i,e[r+10],15,-1051523),i=_(i,n,t,s,e[r+1],21,-2054922799),s=_(s,i,n,t,e[r+8],6,1873313359),t=_(t,s,i,n,e[r+15],10,-30611744),n=_(n,t,s,i,e[r+6],15,-1560198380),i=_(i,n,t,s,e[r+13],21,1309151649),s=_(s,i,n,t,e[r+4],6,-145523070),t=_(t,s,i,n,e[r+11],10,-1120210379),n=_(n,t,s,i,e[r+2],15,718787259),i=_(i,n,t,s,e[r+9],21,-343485551),s=w(s,m),i=w(i,g),n=w(n,v),t=w(t,f);return[s,i,n,t]}function S(e){var a,r="",m=e.length*32;for(a=0;a<m;a+=8)r+=String.fromCharCode(e[a>>5]>>>a%32&255);return r}function D(e){var a,r=[];for(r[(e.length>>2)-1]=void 0,a=0;a<r.length;a+=1)r[a]=0;var m=e.length*8;for(a=0;a<m;a+=8)r[a>>5]|=(e.charCodeAt(a/8)&255)<<a%32;return r}function W(e){return S(M(D(e),e.length*8))}function H(e,a){var r,m=D(e),g=[],v=[],f;for(g[15]=v[15]=void 0,m.length>16&&(m=M(m,e.length*8)),r=0;r<16;r+=1)g[r]=m[r]^909522486,v[r]=m[r]^1549556828;return f=M(g.concat(D(a)),512+a.length*8),S(M(v.concat(f),640))}function A(e){var a="0123456789abcdef",r="",m,g;for(g=0;g<e.length;g+=1)m=e.charCodeAt(g),r+=a.charAt(m>>>4&15)+a.charAt(m&15);return r}function j(e){return unescape(encodeURIComponent(e))}function N(e){return W(j(e))}function F(e){return A(N(e))}function B(e,a){return H(j(e),j(a))}function J(e,a){return A(B(e,a))}function V(e,a,r){return a?r?B(a,e):J(a,e):r?N(e):F(e)}b.exports?b.exports=V:U.md5=V})(et)})(st);var jt=st.exports,it={exports:{}};(function(b,U){(function(w,O){b.exports=O()})(et,function(){var w=1e3,O=6e4,T=36e5,$="millisecond",l="second",p="minute",_="hour",M="day",S="week",D="month",W="quarter",H="year",A="date",j="Invalid Date",N=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,F=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,B={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(n){var t=["th","st","nd","rd"],o=n%100;return"["+n+(t[(o-20)%10]||t[o]||t[0])+"]"}},J=function(n,t,o){var c=String(n);return!c||c.length>=t?n:""+Array(t+1-c.length).join(o)+n},V={s:J,z:function(n){var t=-n.utcOffset(),o=Math.abs(t),c=Math.floor(o/60),u=o%60;return(t<=0?"+":"-")+J(c,2,"0")+":"+J(u,2,"0")},m:function n(t,o){if(t.date()<o.date())return-n(o,t);var c=12*(o.year()-t.year())+(o.month()-t.month()),u=t.clone().add(c,D),d=o-u<0,h=t.clone().add(c+(d?-1:1),D);return+(-(c+(o-u)/(d?u-h:h-u))||0)},a:function(n){return n<0?Math.ceil(n)||0:Math.floor(n)},p:function(n){return{M:D,y:H,w:S,d:M,D:A,h:_,m:p,s:l,ms:$,Q:W}[n]||String(n||"").toLowerCase().replace(/s$/,"")},u:function(n){return n===void 0}},e="en",a={};a[e]=B;var r="$isDayjsObject",m=function(n){return n instanceof s||!(!n||!n[r])},g=function n(t,o,c){var u;if(!t)return e;if(typeof t=="string"){var d=t.toLowerCase();a[d]&&(u=d),o&&(a[d]=o,u=d);var h=t.split("-");if(!u&&h.length>1)return n(h[0])}else{var y=t.name;a[y]=t,u=y}return!c&&u&&(e=u),u||!c&&e},v=function(n,t){if(m(n))return n.clone();var o=typeof t=="object"?t:{};return o.date=n,o.args=arguments,new s(o)},f=V;f.l=g,f.i=m,f.w=function(n,t){return v(n,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var s=function(){function n(o){this.$L=g(o.locale,null,!0),this.parse(o),this.$x=this.$x||o.x||{},this[r]=!0}var t=n.prototype;return t.parse=function(o){this.$d=function(c){var u=c.date,d=c.utc;if(u===null)return new Date(NaN);if(f.u(u))return new Date;if(u instanceof Date)return new Date(u);if(typeof u=="string"&&!/Z$/i.test(u)){var h=u.match(N);if(h){var y=h[2]-1||0,Y=(h[7]||"0").substring(0,3);return d?new Date(Date.UTC(h[1],y,h[3]||1,h[4]||0,h[5]||0,h[6]||0,Y)):new Date(h[1],y,h[3]||1,h[4]||0,h[5]||0,h[6]||0,Y)}}return new Date(u)}(o),this.init()},t.init=function(){var o=this.$d;this.$y=o.getFullYear(),this.$M=o.getMonth(),this.$D=o.getDate(),this.$W=o.getDay(),this.$H=o.getHours(),this.$m=o.getMinutes(),this.$s=o.getSeconds(),this.$ms=o.getMilliseconds()},t.$utils=function(){return f},t.isValid=function(){return this.$d.toString()!==j},t.isSame=function(o,c){var u=v(o);return this.startOf(c)<=u&&u<=this.endOf(c)},t.isAfter=function(o,c){return v(o)<this.startOf(c)},t.isBefore=function(o,c){return this.endOf(c)<v(o)},t.$g=function(o,c,u){return f.u(o)?this[c]:this.set(u,o)},t.unix=function(){return Math.floor(this.valueOf()/1e3)},t.valueOf=function(){return this.$d.getTime()},t.startOf=function(o,c){var u=this,d=!!f.u(c)||c,h=f.p(o),y=function(R,k){var E=f.w(u.$u?Date.UTC(u.$y,k,R):new Date(u.$y,k,R),u);return d?E:E.endOf(M)},Y=function(R,k){return f.w(u.toDate()[R].apply(u.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(k)),u)},C=this.$W,L=this.$M,z=this.$D,Z="set"+(this.$u?"UTC":"");switch(h){case H:return d?y(1,0):y(31,11);case D:return d?y(1,L):y(0,L+1);case S:var P=this.$locale().weekStart||0,G=(C<P?C+7:C)-P;return y(d?z-G:z+(6-G),L);case M:case A:return Y(Z+"Hours",0);case _:return Y(Z+"Minutes",1);case p:return Y(Z+"Seconds",2);case l:return Y(Z+"Milliseconds",3);default:return this.clone()}},t.endOf=function(o){return this.startOf(o,!1)},t.$set=function(o,c){var u,d=f.p(o),h="set"+(this.$u?"UTC":""),y=(u={},u[M]=h+"Date",u[A]=h+"Date",u[D]=h+"Month",u[H]=h+"FullYear",u[_]=h+"Hours",u[p]=h+"Minutes",u[l]=h+"Seconds",u[$]=h+"Milliseconds",u)[d],Y=d===M?this.$D+(c-this.$W):c;if(d===D||d===H){var C=this.clone().set(A,1);C.$d[y](Y),C.init(),this.$d=C.set(A,Math.min(this.$D,C.daysInMonth())).$d}else y&&this.$d[y](Y);return this.init(),this},t.set=function(o,c){return this.clone().$set(o,c)},t.get=function(o){return this[f.p(o)]()},t.add=function(o,c){var u,d=this;o=Number(o);var h=f.p(c),y=function(L){var z=v(d);return f.w(z.date(z.date()+Math.round(L*o)),d)};if(h===D)return this.set(D,this.$M+o);if(h===H)return this.set(H,this.$y+o);if(h===M)return y(1);if(h===S)return y(7);var Y=(u={},u[p]=O,u[_]=T,u[l]=w,u)[h]||1,C=this.$d.getTime()+o*Y;return f.w(C,this)},t.subtract=function(o,c){return this.add(-1*o,c)},t.format=function(o){var c=this,u=this.$locale();if(!this.isValid())return u.invalidDate||j;var d=o||"YYYY-MM-DDTHH:mm:ssZ",h=f.z(this),y=this.$H,Y=this.$m,C=this.$M,L=u.weekdays,z=u.months,Z=u.meridiem,P=function(k,E,Q,K){return k&&(k[E]||k(c,d))||Q[E].slice(0,K)},G=function(k){return f.s(y%12||12,k,"0")},R=Z||function(k,E,Q){var K=k<12?"AM":"PM";return Q?K.toLowerCase():K};return d.replace(F,function(k,E){return E||function(Q){switch(Q){case"YY":return String(c.$y).slice(-2);case"YYYY":return f.s(c.$y,4,"0");case"M":return C+1;case"MM":return f.s(C+1,2,"0");case"MMM":return P(u.monthsShort,C,z,3);case"MMMM":return P(z,C);case"D":return c.$D;case"DD":return f.s(c.$D,2,"0");case"d":return String(c.$W);case"dd":return P(u.weekdaysMin,c.$W,L,2);case"ddd":return P(u.weekdaysShort,c.$W,L,3);case"dddd":return L[c.$W];case"H":return String(y);case"HH":return f.s(y,2,"0");case"h":return G(1);case"hh":return G(2);case"a":return R(y,Y,!0);case"A":return R(y,Y,!1);case"m":return String(Y);case"mm":return f.s(Y,2,"0");case"s":return String(c.$s);case"ss":return f.s(c.$s,2,"0");case"SSS":return f.s(c.$ms,3,"0");case"Z":return h}return null}(k)||h.replace(":","")})},t.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},t.diff=function(o,c,u){var d,h=this,y=f.p(c),Y=v(o),C=(Y.utcOffset()-this.utcOffset())*O,L=this-Y,z=function(){return f.m(h,Y)};switch(y){case H:d=z()/12;break;case D:d=z();break;case W:d=z()/3;break;case S:d=(L-C)/6048e5;break;case M:d=(L-C)/864e5;break;case _:d=L/T;break;case p:d=L/O;break;case l:d=L/w;break;default:d=L}return u?d:f.a(d)},t.daysInMonth=function(){return this.endOf(D).$D},t.$locale=function(){return a[this.$L]},t.locale=function(o,c){if(!o)return this.$L;var u=this.clone(),d=g(o,c,!0);return d&&(u.$L=d),u},t.clone=function(){return f.w(this.$d,this)},t.toDate=function(){return new Date(this.valueOf())},t.toJSON=function(){return this.isValid()?this.toISOString():null},t.toISOString=function(){return this.$d.toISOString()},t.toString=function(){return this.$d.toUTCString()},n}(),i=s.prototype;return v.prototype=i,[["$ms",$],["$s",l],["$m",p],["$H",_],["$W",M],["$M",D],["$y",H],["$D",A]].forEach(function(n){i[n[1]]=function(t){return this.$g(t,n[0],n[1])}}),v.extend=function(n,t){return n.$i||(n(t,s,v),n.$i=!0),v},v.locale=g,v.isDayjs=m,v.unix=function(n){return v(1e3*n)},v.en=a[e],v.Ls=a,v.p={},v})})(it);var at=it.exports;const tt=rt(at);var $t={exports:{}};(function(b,U){(function(w,O){b.exports=O(at)})(et,function(w){function O(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var T=O(w),$={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(l,p){return p==="W"?l+"周":l+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(l,p){var _=100*l+p;return _<600?"凌晨":_<900?"早上":_<1100?"上午":_<1300?"中午":_<1800?"下午":"晚上"}};return T.default.locale($,null,!0),$})})($t);var ot={exports:{}};(function(b,U){(function(w,O){b.exports=O()})(et,function(){return function(w,O,T){w=w||{};var $=O.prototype,l={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function p(M,S,D,W){return $.fromToBase(M,S,D,W)}T.en.relativeTime=l,$.fromToBase=function(M,S,D,W,H){for(var A,j,N,F=D.$locale().relativeTime||l,B=w.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],J=B.length,V=0;V<J;V+=1){var e=B[V];e.d&&(A=W?T(M).diff(D,e.d,!0):D.diff(M,e.d,!0));var a=(w.rounding||Math.round)(Math.abs(A));if(N=A>0,a<=e.r||!e.r){a<=1&&V>0&&(e=B[V-1]);var r=F[e.l];H&&(a=H(""+a)),j=typeof r=="string"?r.replace("%d",a):r(a,S,e.l,N);break}}if(S)return j;var m=N?F.future:F.past;return typeof m=="function"?m(j):m.replace("%s",j)},$.to=function(M,S){return p(M,S,this,!0)},$.from=function(M,S){return p(M,S,this)};var _=function(M){return M.$u?T.utc():T()};$.toNow=function(M){return this.to(_(this),M)},$.fromNow=function(M){return this.from(_(this),M)}}})})(ot);var Mt=ot.exports;const gt=rt(Mt),nt=b=>(vt("data-v-9c26f119"),b=b(),pt(),b),yt={class:"meta-wrapper"},wt={class:"meta-item"},Dt={class:"meta-icon date"},St={role:"img",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Yt={key:0},bt=nt(()=>I("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"},null,-1)),Ct=nt(()=>I("path",{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"},null,-1)),Ot=["datetime","title"],Lt={key:0,class:"meta-item"},Tt=nt(()=>I("span",{class:"meta-icon pv"},[I("svg",{role:"img",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[I("title",null,"阅读数"),I("path",{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3-7.7 16.2-7.7 35.2 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766z"}),I("path",{d:"M508 336c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176z m0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"})])],-1)),kt=nt(()=>I("span",{id:"busuanzi_value_page_pv"},null,-1)),Ht=[Tt,kt],At={__name:"ArticleMetadata",props:{article:Object},setup(b){var _,M;tt.extend(gt),tt.locale("zh-cn");const U=b;ct();const w=ft({author:((_=U.article)==null?void 0:_.author)??"花拾夕",authorLink:"/about/me",showViewCount:!0,viewCount:0,date:new Date(((M=U.article)==null?void 0:M.date)??"2024/01/01 01:01")}),{author:O,authorLink:T,showViewCount:$,viewCount:l,date:p}=dt(w);return w.showViewCount&&ht(()=>{lt(()=>import("./index.YGvBWgYz.js").then(S=>S.i),__vite__mapDeps([])).then(S=>{S.fetch()})}),(S,D)=>(X(),x("div",yt,[I("div",wt,[I("span",Dt,[(X(),x("svg",St,[(X(),x("title",Yt,"发布时间")),bt,Ct]))]),I("time",{class:"meta-content",datetime:q(p).toISOString(),title:q(tt)().to(q(tt)(q(p)))},mt(q(p).toLocaleString("zh",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})),9,Ot)]),q($)?(X(),x("div",Lt,Ht)):_t("",!0)]))}},It=ut(At,[["__scopeId","data-v-9c26f119"]]);export{It as _,rt as g};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}