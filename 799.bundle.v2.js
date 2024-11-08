/*! For license information please see 799.bundle.v2.js.LICENSE.txt */
"use strict";(self.webpackChunkbundle_creator=self.webpackChunkbundle_creator||[]).push([[799],{6799:(t,e,n)=>{n.d(e,{secp256k1:()=>St});var r={};n.r(r),n.d(r,{aK:()=>$,e8:()=>w,DO:()=>h,dJ:()=>N,OG:()=>H,My:()=>p,Ph:()=>v,lX:()=>x,Id:()=>O,fg:()=>k,qj:()=>A,aT:()=>B,r4:()=>q,aY:()=>d,x:()=>_,lq:()=>S,z:()=>I,zW:()=>y,Q5:()=>Z});var o=n(7663),i=n(9190),s=n(2531);class f extends s.Vw{constructor(t,e){super(),this.finished=!1,this.destroyed=!1,(0,i.tW)(t);const n=(0,s.ZJ)(e);if(this.iHash=t.create(),"function"!=typeof this.iHash.update)throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const r=this.blockLen,o=new Uint8Array(r);o.set(n.length>r?t.create().update(n).digest():n);for(let t=0;t<o.length;t++)o[t]^=54;this.iHash.update(o),this.oHash=t.create();for(let t=0;t<o.length;t++)o[t]^=106;this.oHash.update(o),o.fill(0)}update(t){return(0,i.t2)(this),this.iHash.update(t),this}digestInto(t){(0,i.t2)(this),(0,i.ee)(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:e,iHash:n,finished:r,destroyed:o,blockLen:i,outputLen:s}=this;return t.finished=r,t.destroyed=o,t.blockLen=i,t.outputLen=s,t.oHash=e._cloneInto(t.oHash),t.iHash=n._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const a=(t,e,n)=>new f(t,e).update(n).digest();a.create=(t,e)=>new f(t,e);const c=BigInt(0),u=BigInt(1),l=BigInt(2);function d(t){return t instanceof Uint8Array||null!=t&&"object"==typeof t&&"Uint8Array"===t.constructor.name}function h(t){if(!d(t))throw new Error("Uint8Array expected")}function w(t,e){if("boolean"!=typeof e)throw new Error(`${t} must be valid boolean, got "${e}".`)}const g=Array.from({length:256},((t,e)=>e.toString(16).padStart(2,"0")));function p(t){h(t);let e="";for(let n=0;n<t.length;n++)e+=g[t[n]];return e}function y(t){const e=t.toString(16);return 1&e.length?`0${e}`:e}function m(t){if("string"!=typeof t)throw new Error("hex string expected, got "+typeof t);return BigInt(""===t?"0":`0x${t}`)}const E={_0:48,_9:57,_A:65,_F:70,_a:97,_f:102};function b(t){return t>=E._0&&t<=E._9?t-E._0:t>=E._A&&t<=E._F?t-(E._A-10):t>=E._a&&t<=E._f?t-(E._a-10):void 0}function B(t){if("string"!=typeof t)throw new Error("hex string expected, got "+typeof t);const e=t.length,n=e/2;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const r=new Uint8Array(n);for(let e=0,o=0;e<n;e++,o+=2){const n=b(t.charCodeAt(o)),i=b(t.charCodeAt(o+1));if(void 0===n||void 0===i){const e=t[o]+t[o+1];throw new Error('hex string expected, got non-hex character "'+e+'" at index '+o)}r[e]=16*n+i}return r}function v(t){return m(p(t))}function x(t){return h(t),m(p(Uint8Array.from(t).reverse()))}function S(t,e){return B(t.toString(16).padStart(2*e,"0"))}function I(t,e){return S(t,e).reverse()}function A(t,e,n){let r;if("string"==typeof e)try{r=B(e)}catch(n){throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${n}`)}else{if(!d(e))throw new Error(`${t} must be hex string or Uint8Array`);r=Uint8Array.from(e)}const o=r.length;if("number"==typeof n&&o!==n)throw new Error(`${t} expected ${n} bytes, got ${o}`);return r}function O(...t){let e=0;for(let n=0;n<t.length;n++){const r=t[n];h(r),e+=r.length}const n=new Uint8Array(e);for(let e=0,r=0;e<t.length;e++){const o=t[e];n.set(o,r),r+=o.length}return n}const R=t=>"bigint"==typeof t&&c<=t;function q(t,e,n){return R(t)&&R(e)&&R(n)&&e<=t&&t<n}function $(t,e,n,r){if(!q(e,n,r))throw new Error(`expected valid ${t}: ${n} <= n < ${r}, got ${typeof e} ${e}`)}function N(t){let e;for(e=0;t>c;t>>=u,e+=1);return e}const H=t=>(l<<BigInt(t-1))-u,z=t=>new Uint8Array(t),L=t=>Uint8Array.from(t);function k(t,e,n){if("number"!=typeof t||t<2)throw new Error("hashLen must be a number");if("number"!=typeof e||e<2)throw new Error("qByteLen must be a number");if("function"!=typeof n)throw new Error("hmacFn must be a function");let r=z(t),o=z(t),i=0;const s=()=>{r.fill(1),o.fill(0),i=0},f=(...t)=>n(o,r,...t),a=(t=z())=>{o=f(L([0]),t),r=f(),0!==t.length&&(o=f(L([1]),t),r=f())},c=()=>{if(i++>=1e3)throw new Error("drbg: tried 1000 values");let t=0;const n=[];for(;t<e;){r=f();const e=r.slice();n.push(e),t+=r.length}return O(...n)};return(t,e)=>{let n;for(s(),a(t);!(n=e(c()));)a();return s(),n}}const P={bigint:t=>"bigint"==typeof t,function:t=>"function"==typeof t,boolean:t=>"boolean"==typeof t,string:t=>"string"==typeof t,stringOrUint8Array:t=>"string"==typeof t||d(t),isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>"function"==typeof t&&Number.isSafeInteger(t.outputLen)};function Z(t,e,n={}){const r=(e,n,r)=>{const o=P[n];if("function"!=typeof o)throw new Error(`Invalid validator "${n}", expected function`);const i=t[e];if(!(r&&void 0===i||o(i,t)))throw new Error(`Invalid param ${String(e)}=${i} (${typeof i}), expected ${n}`)};for(const[t,n]of Object.entries(e))r(t,n,!1);for(const[t,e]of Object.entries(n))r(t,e,!0);return t}function _(t){const e=new WeakMap;return(n,...r)=>{const o=e.get(n);if(void 0!==o)return o;const i=t(n,...r);return e.set(n,i),i}}const F=BigInt(0),C=BigInt(1),T=BigInt(2),U=BigInt(3),j=BigInt(4),V=BigInt(5),K=BigInt(8);BigInt(9),BigInt(16);function W(t,e){const n=t%e;return n>=F?n:e+n}function Y(t,e,n){if(n<=F||e<F)throw new Error("Expected power/modulo > 0");if(n===C)return F;let r=C;for(;e>F;)e&C&&(r=r*t%n),t=t*t%n,e>>=C;return r}function D(t,e,n){let r=t;for(;e-- >F;)r*=r,r%=n;return r}function M(t,e){if(t===F||e<=F)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let n=W(t,e),r=e,o=F,i=C,s=C,f=F;for(;n!==F;){const t=r/n,e=r%n,a=o-s*t,c=i-f*t;r=n,n=e,o=s,i=f,s=a,f=c}if(r!==C)throw new Error("invert: does not exist");return W(o,e)}function G(t){if(t%j===U){const e=(t+C)/j;return function(t,n){const r=t.pow(n,e);if(!t.eql(t.sqr(r),n))throw new Error("Cannot find square root");return r}}if(t%K===V){const e=(t-V)/K;return function(t,n){const r=t.mul(n,T),o=t.pow(r,e),i=t.mul(n,o),s=t.mul(t.mul(i,T),o),f=t.mul(i,t.sub(s,t.ONE));if(!t.eql(t.sqr(f),n))throw new Error("Cannot find square root");return f}}return function(t){const e=(t-C)/T;let n,r,o;for(n=t-C,r=0;n%T===F;n/=T,r++);for(o=T;o<t&&Y(o,e,t)!==t-C;o++);if(1===r){const e=(t+C)/j;return function(t,n){const r=t.pow(n,e);if(!t.eql(t.sqr(r),n))throw new Error("Cannot find square root");return r}}const i=(n+C)/T;return function(t,s){if(t.pow(s,e)===t.neg(t.ONE))throw new Error("Cannot find square root");let f=r,a=t.pow(t.mul(t.ONE,o),n),c=t.pow(s,i),u=t.pow(s,n);for(;!t.eql(u,t.ONE);){if(t.eql(u,t.ZERO))return t.ZERO;let e=1;for(let n=t.sqr(u);e<f&&!t.eql(n,t.ONE);e++)n=t.sqr(n);const n=t.pow(a,C<<BigInt(f-e-1));a=t.sqr(n),c=t.mul(c,n),u=t.mul(u,a),f=e}return c}}(t)}const J=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Q(t,e){const n=void 0!==e?e:t.toString(2).length;return{nBitLength:n,nByteLength:Math.ceil(n/8)}}function X(t,e,n=!1,r={}){if(t<=F)throw new Error(`Expected Field ORDER > 0, got ${t}`);const{nBitLength:o,nByteLength:i}=Q(t,e);if(i>2048)throw new Error("Field lengths over 2048 bytes are not supported");const s=G(t),f=Object.freeze({ORDER:t,BITS:o,BYTES:i,MASK:H(o),ZERO:F,ONE:C,create:e=>W(e,t),isValid:e=>{if("bigint"!=typeof e)throw new Error("Invalid field element: expected bigint, got "+typeof e);return F<=e&&e<t},is0:t=>t===F,isOdd:t=>(t&C)===C,neg:e=>W(-e,t),eql:(t,e)=>t===e,sqr:e=>W(e*e,t),add:(e,n)=>W(e+n,t),sub:(e,n)=>W(e-n,t),mul:(e,n)=>W(e*n,t),pow:(t,e)=>function(t,e,n){if(n<F)throw new Error("Expected power > 0");if(n===F)return t.ONE;if(n===C)return e;let r=t.ONE,o=e;for(;n>F;)n&C&&(r=t.mul(r,o)),o=t.sqr(o),n>>=C;return r}(f,t,e),div:(e,n)=>W(e*M(n,t),t),sqrN:t=>t*t,addN:(t,e)=>t+e,subN:(t,e)=>t-e,mulN:(t,e)=>t*e,inv:e=>M(e,t),sqrt:r.sqrt||(t=>s(f,t)),invertBatch:t=>function(t,e){const n=new Array(e.length),r=e.reduce(((e,r,o)=>t.is0(r)?e:(n[o]=e,t.mul(e,r))),t.ONE),o=t.inv(r);return e.reduceRight(((e,r,o)=>t.is0(r)?e:(n[o]=t.mul(e,n[o]),t.mul(e,r))),o),n}(f,t),cmov:(t,e,n)=>n?e:t,toBytes:t=>n?I(t,i):S(t,i),fromBytes:t=>{if(t.length!==i)throw new Error(`Fp.fromBytes: expected ${i}, got ${t.length}`);return n?x(t):v(t)}});return Object.freeze(f)}function tt(t){if("bigint"!=typeof t)throw new Error("field order must be bigint");const e=t.toString(2).length;return Math.ceil(e/8)}function et(t){const e=tt(t);return e+Math.ceil(e/2)}const nt=BigInt(0),rt=BigInt(1),ot=new WeakMap,it=new WeakMap;function st(t){return Z(t.Fp,J.reduce(((t,e)=>(t[e]="function",t)),{ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"})),Z(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...Q(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}function ft(t){void 0!==t.lowS&&w("lowS",t.lowS),void 0!==t.prehash&&w("prehash",t.prehash)}const{Ph:at,aT:ct}=r,ut={Err:class extends Error{constructor(t=""){super(t)}},_tlv:{encode:(t,e)=>{const{Err:n}=ut;if(t<0||t>256)throw new n("tlv.encode: wrong tag");if(1&e.length)throw new n("tlv.encode: unpadded data");const r=e.length/2,o=y(r);if(o.length/2&128)throw new n("tlv.encode: long form length too big");const i=r>127?y(o.length/2|128):"";return`${y(t)}${i}${o}${e}`},decode(t,e){const{Err:n}=ut;let r=0;if(t<0||t>256)throw new n("tlv.encode: wrong tag");if(e.length<2||e[r++]!==t)throw new n("tlv.decode: wrong tlv");const o=e[r++];let i=0;if(!!(128&o)){const t=127&o;if(!t)throw new n("tlv.decode(long): indefinite length not supported");if(t>4)throw new n("tlv.decode(long): byte length is too big");const s=e.subarray(r,r+t);if(s.length!==t)throw new n("tlv.decode: length bytes not complete");if(0===s[0])throw new n("tlv.decode(long): zero leftmost byte");for(const t of s)i=i<<8|t;if(r+=t,i<128)throw new n("tlv.decode(long): not minimal encoding")}else i=o;const s=e.subarray(r,r+i);if(s.length!==i)throw new n("tlv.decode: wrong value length");return{v:s,l:e.subarray(r+i)}}},_int:{encode(t){const{Err:e}=ut;if(t<lt)throw new e("integer: negative integers are not allowed");let n=y(t);if(8&Number.parseInt(n[0],16)&&(n="00"+n),1&n.length)throw new e("unexpected assertion");return n},decode(t){const{Err:e}=ut;if(128&t[0])throw new e("Invalid signature integer: negative");if(0===t[0]&&!(128&t[1]))throw new e("Invalid signature integer: unnecessary leading zero");return at(t)}},toSig(t){const{Err:e,_int:n,_tlv:r}=ut,o="string"==typeof t?ct(t):t;h(o);const{v:i,l:s}=r.decode(48,o);if(s.length)throw new e("Invalid signature: left bytes after parsing");const{v:f,l:a}=r.decode(2,i),{v:c,l:u}=r.decode(2,a);if(u.length)throw new e("Invalid signature: left bytes after parsing");return{r:n.decode(f),s:n.decode(c)}},hexFromSig(t){const{_tlv:e,_int:n}=ut,r=`${e.encode(2,n.encode(t.r))}${e.encode(2,n.encode(t.s))}`;return e.encode(48,r)}},lt=BigInt(0),dt=BigInt(1),ht=(BigInt(2),BigInt(3));BigInt(4);function wt(t){const e=function(t){const e=st(t);Z(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:r,a:o}=e;if(n){if(!r.eql(o,r.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if("object"!=typeof n||"bigint"!=typeof n.beta||"function"!=typeof n.splitScalar)throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...e})}(t),{Fp:n}=e,r=X(e.n,e.nBitLength),o=e.toBytes||((t,e,r)=>{const o=e.toAffine();return O(Uint8Array.from([4]),n.toBytes(o.x),n.toBytes(o.y))}),i=e.fromBytes||(t=>{const e=t.subarray(1);return{x:n.fromBytes(e.subarray(0,n.BYTES)),y:n.fromBytes(e.subarray(n.BYTES,2*n.BYTES))}});function s(t){const{a:r,b:o}=e,i=n.sqr(t),s=n.mul(i,t);return n.add(n.add(s,n.mul(t,r)),o)}if(!n.eql(n.sqr(e.Gy),s(e.Gx)))throw new Error("bad generator point: equation left != right");function f(t){const{allowedPrivateKeyLengths:n,nByteLength:r,wrapPrivateKey:o,n:i}=e;if(n&&"bigint"!=typeof t){if(d(t)&&(t=p(t)),"string"!=typeof t||!n.includes(t.length))throw new Error("Invalid key");t=t.padStart(2*r,"0")}let s;try{s="bigint"==typeof t?t:v(A("private key",t,r))}catch(e){throw new Error(`private key must be ${r} bytes, hex or bigint, not ${typeof t}`)}return o&&(s=W(s,i)),$("private key",s,dt,i),s}function a(t){if(!(t instanceof l))throw new Error("ProjectivePoint expected")}const c=_(((t,e)=>{const{px:r,py:o,pz:i}=t;if(n.eql(i,n.ONE))return{x:r,y:o};const s=t.is0();null==e&&(e=s?n.ONE:n.inv(i));const f=n.mul(r,e),a=n.mul(o,e),c=n.mul(i,e);if(s)return{x:n.ZERO,y:n.ZERO};if(!n.eql(c,n.ONE))throw new Error("invZ was invalid");return{x:f,y:a}})),u=_((t=>{if(t.is0()){if(e.allowInfinityPoint&&!n.is0(t.py))return;throw new Error("bad point: ZERO")}const{x:r,y:o}=t.toAffine();if(!n.isValid(r)||!n.isValid(o))throw new Error("bad point: x or y not FE");const i=n.sqr(o),f=s(r);if(!n.eql(i,f))throw new Error("bad point: equation left != right");if(!t.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0}));class l{constructor(t,e,r){if(this.px=t,this.py=e,this.pz=r,null==t||!n.isValid(t))throw new Error("x required");if(null==e||!n.isValid(e))throw new Error("y required");if(null==r||!n.isValid(r))throw new Error("z required");Object.freeze(this)}static fromAffine(t){const{x:e,y:r}=t||{};if(!t||!n.isValid(e)||!n.isValid(r))throw new Error("invalid affine point");if(t instanceof l)throw new Error("projective point not allowed");const o=t=>n.eql(t,n.ZERO);return o(e)&&o(r)?l.ZERO:new l(e,r,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(t){const e=n.invertBatch(t.map((t=>t.pz)));return t.map(((t,n)=>t.toAffine(e[n]))).map(l.fromAffine)}static fromHex(t){const e=l.fromAffine(i(A("pointHex",t)));return e.assertValidity(),e}static fromPrivateKey(t){return l.BASE.multiply(f(t))}static msm(t,e){return function(t,e,n,r){if(!Array.isArray(n)||!Array.isArray(r)||r.length!==n.length)throw new Error("arrays of points and scalars must have equal length");r.forEach(((t,n)=>{if(!e.isValid(t))throw new Error(`wrong scalar at index ${n}`)})),n.forEach(((e,n)=>{if(!(e instanceof t))throw new Error(`wrong point at index ${n}`)}));const o=N(BigInt(n.length)),i=o>12?o-3:o>4?o-2:o?2:1,s=(1<<i)-1,f=new Array(s+1).fill(t.ZERO),a=Math.floor((e.BITS-1)/i)*i;let c=t.ZERO;for(let e=a;e>=0;e-=i){f.fill(t.ZERO);for(let t=0;t<r.length;t++){const o=r[t],i=Number(o>>BigInt(e)&BigInt(s));f[i]=f[i].add(n[t])}let o=t.ZERO;for(let e=f.length-1,n=t.ZERO;e>0;e--)n=n.add(f[e]),o=o.add(n);if(c=c.add(o),0!==e)for(let t=0;t<i;t++)c=c.double()}return c}(l,r,t,e)}_setWindowSize(t){g.setWindowSize(this,t)}assertValidity(){u(this)}hasEvenY(){const{y:t}=this.toAffine();if(n.isOdd)return!n.isOdd(t);throw new Error("Field doesn't support isOdd")}equals(t){a(t);const{px:e,py:r,pz:o}=this,{px:i,py:s,pz:f}=t,c=n.eql(n.mul(e,f),n.mul(i,o)),u=n.eql(n.mul(r,f),n.mul(s,o));return c&&u}negate(){return new l(this.px,n.neg(this.py),this.pz)}double(){const{a:t,b:r}=e,o=n.mul(r,ht),{px:i,py:s,pz:f}=this;let a=n.ZERO,c=n.ZERO,u=n.ZERO,d=n.mul(i,i),h=n.mul(s,s),w=n.mul(f,f),g=n.mul(i,s);return g=n.add(g,g),u=n.mul(i,f),u=n.add(u,u),a=n.mul(t,u),c=n.mul(o,w),c=n.add(a,c),a=n.sub(h,c),c=n.add(h,c),c=n.mul(a,c),a=n.mul(g,a),u=n.mul(o,u),w=n.mul(t,w),g=n.sub(d,w),g=n.mul(t,g),g=n.add(g,u),u=n.add(d,d),d=n.add(u,d),d=n.add(d,w),d=n.mul(d,g),c=n.add(c,d),w=n.mul(s,f),w=n.add(w,w),d=n.mul(w,g),a=n.sub(a,d),u=n.mul(w,h),u=n.add(u,u),u=n.add(u,u),new l(a,c,u)}add(t){a(t);const{px:r,py:o,pz:i}=this,{px:s,py:f,pz:c}=t;let u=n.ZERO,d=n.ZERO,h=n.ZERO;const w=e.a,g=n.mul(e.b,ht);let p=n.mul(r,s),y=n.mul(o,f),m=n.mul(i,c),E=n.add(r,o),b=n.add(s,f);E=n.mul(E,b),b=n.add(p,y),E=n.sub(E,b),b=n.add(r,i);let B=n.add(s,c);return b=n.mul(b,B),B=n.add(p,m),b=n.sub(b,B),B=n.add(o,i),u=n.add(f,c),B=n.mul(B,u),u=n.add(y,m),B=n.sub(B,u),h=n.mul(w,b),u=n.mul(g,m),h=n.add(u,h),u=n.sub(y,h),h=n.add(y,h),d=n.mul(u,h),y=n.add(p,p),y=n.add(y,p),m=n.mul(w,m),b=n.mul(g,b),y=n.add(y,m),m=n.sub(p,m),m=n.mul(w,m),b=n.add(b,m),p=n.mul(y,b),d=n.add(d,p),p=n.mul(B,b),u=n.mul(E,u),u=n.sub(u,p),p=n.mul(E,y),h=n.mul(B,h),h=n.add(h,p),new l(u,d,h)}subtract(t){return this.add(t.negate())}is0(){return this.equals(l.ZERO)}wNAF(t){return g.wNAFCached(this,t,l.normalizeZ)}multiplyUnsafe(t){$("scalar",t,lt,e.n);const r=l.ZERO;if(t===lt)return r;if(t===dt)return this;const{endo:o}=e;if(!o)return g.unsafeLadder(this,t);let{k1neg:i,k1:s,k2neg:f,k2:a}=o.splitScalar(t),c=r,u=r,d=this;for(;s>lt||a>lt;)s&dt&&(c=c.add(d)),a&dt&&(u=u.add(d)),d=d.double(),s>>=dt,a>>=dt;return i&&(c=c.negate()),f&&(u=u.negate()),u=new l(n.mul(u.px,o.beta),u.py,u.pz),c.add(u)}multiply(t){const{endo:r,n:o}=e;let i,s;if($("scalar",t,dt,o),r){const{k1neg:e,k1:o,k2neg:f,k2:a}=r.splitScalar(t);let{p:c,f:u}=this.wNAF(o),{p:d,f:h}=this.wNAF(a);c=g.constTimeNegate(e,c),d=g.constTimeNegate(f,d),d=new l(n.mul(d.px,r.beta),d.py,d.pz),i=c.add(d),s=u.add(h)}else{const{p:e,f:n}=this.wNAF(t);i=e,s=n}return l.normalizeZ([i,s])[0]}multiplyAndAddUnsafe(t,e,n){const r=l.BASE,o=(t,e)=>e!==lt&&e!==dt&&t.equals(r)?t.multiply(e):t.multiplyUnsafe(e),i=o(this,e).add(o(t,n));return i.is0()?void 0:i}toAffine(t){return c(this,t)}isTorsionFree(){const{h:t,isTorsionFree:n}=e;if(t===dt)return!0;if(n)return n(l,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:t,clearCofactor:n}=e;return t===dt?this:n?n(l,this):this.multiplyUnsafe(e.h)}toRawBytes(t=!0){return w("isCompressed",t),this.assertValidity(),o(l,this,t)}toHex(t=!0){return w("isCompressed",t),p(this.toRawBytes(t))}}l.BASE=new l(e.Gx,e.Gy,n.ONE),l.ZERO=new l(n.ZERO,n.ONE,n.ZERO);const h=e.nBitLength,g=function(t,e){const n=(t,e)=>{const n=e.negate();return t?n:e},r=t=>{if(!Number.isSafeInteger(t)||t<=0||t>e)throw new Error(`Wrong window size=${t}, should be [1..${e}]`)},o=t=>(r(t),{windows:Math.ceil(e/t)+1,windowSize:2**(t-1)});return{constTimeNegate:n,unsafeLadder(e,n){let r=t.ZERO,o=e;for(;n>nt;)n&rt&&(r=r.add(o)),o=o.double(),n>>=rt;return r},precomputeWindow(t,e){const{windows:n,windowSize:r}=o(e),i=[];let s=t,f=s;for(let t=0;t<n;t++){f=s,i.push(f);for(let t=1;t<r;t++)f=f.add(s),i.push(f);s=f.double()}return i},wNAF(e,r,i){const{windows:s,windowSize:f}=o(e);let a=t.ZERO,c=t.BASE;const u=BigInt(2**e-1),l=2**e,d=BigInt(e);for(let t=0;t<s;t++){const e=t*f;let o=Number(i&u);i>>=d,o>f&&(o-=l,i+=rt);const s=e,h=e+Math.abs(o)-1,w=t%2!=0,g=o<0;0===o?c=c.add(n(w,r[s])):a=a.add(n(g,r[h]))}return{p:a,f:c}},wNAFCached(t,e,n){const r=it.get(t)||1;let o=ot.get(t);return o||(o=this.precomputeWindow(t,r),1!==r&&ot.set(t,n(o))),this.wNAF(r,o,e)},setWindowSize(t,e){r(e),it.set(t,e),ot.delete(t)}}}(l,e.endo?Math.ceil(h/2):h);return{CURVE:e,ProjectivePoint:l,normPrivateKeyToScalar:f,weierstrassEquation:s,isWithinCurveOrder:function(t){return q(t,dt,e.n)}}}function gt(t){const e=function(t){const e=st(t);return Z(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}(t),{Fp:n,n:r}=e,o=n.BYTES+1,i=2*n.BYTES+1;function s(t){return W(t,r)}function f(t){return M(t,r)}const{ProjectivePoint:a,normPrivateKeyToScalar:c,weierstrassEquation:u,isWithinCurveOrder:l}=wt({...e,toBytes(t,e,r){const o=e.toAffine(),i=n.toBytes(o.x),s=O;return w("isCompressed",r),r?s(Uint8Array.from([e.hasEvenY()?2:3]),i):s(Uint8Array.from([4]),i,n.toBytes(o.y))},fromBytes(t){const e=t.length,r=t[0],s=t.subarray(1);if(e!==o||2!==r&&3!==r){if(e===i&&4===r){return{x:n.fromBytes(s.subarray(0,n.BYTES)),y:n.fromBytes(s.subarray(n.BYTES,2*n.BYTES))}}throw new Error(`Point of length ${e} was invalid. Expected ${o} compressed bytes or ${i} uncompressed bytes`)}{const t=v(s);if(!q(t,dt,n.ORDER))throw new Error("Point is not on curve");const e=u(t);let o;try{o=n.sqrt(e)}catch(t){const e=t instanceof Error?": "+t.message:"";throw new Error("Point is not on curve"+e)}return!(1&~r)!==((o&dt)===dt)&&(o=n.neg(o)),{x:t,y:o}}}}),h=t=>p(S(t,e.nByteLength));function g(t){return t>r>>dt}const y=(t,e,n)=>v(t.slice(e,n));class m{constructor(t,e,n){this.r=t,this.s=e,this.recovery=n,this.assertValidity()}static fromCompact(t){const n=e.nByteLength;return t=A("compactSignature",t,2*n),new m(y(t,0,n),y(t,n,2*n))}static fromDER(t){const{r:e,s:n}=ut.toSig(A("DER",t));return new m(e,n)}assertValidity(){$("r",this.r,dt,r),$("s",this.s,dt,r)}addRecoveryBit(t){return new m(this.r,this.s,t)}recoverPublicKey(t){const{r,s:o,recovery:i}=this,c=N(A("msgHash",t));if(null==i||![0,1,2,3].includes(i))throw new Error("recovery id invalid");const u=2===i||3===i?r+e.n:r;if(u>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const l=1&i?"03":"02",d=a.fromHex(l+h(u)),w=f(u),g=s(-c*w),p=s(o*w),y=a.BASE.multiplyAndAddUnsafe(d,g,p);if(!y)throw new Error("point at infinify");return y.assertValidity(),y}hasHighS(){return g(this.s)}normalizeS(){return this.hasHighS()?new m(this.r,s(-this.s),this.recovery):this}toDERRawBytes(){return B(this.toDERHex())}toDERHex(){return ut.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return B(this.toCompactHex())}toCompactHex(){return h(this.r)+h(this.s)}}const E={isValidPrivateKey(t){try{return c(t),!0}catch(t){return!1}},normPrivateKeyToScalar:c,randomPrivateKey:()=>{const t=et(e.n);return function(t,e,n=!1){const r=t.length,o=tt(e),i=et(e);if(r<16||r<i||r>1024)throw new Error(`expected ${i}-1024 bytes of input, got ${r}`);const s=W(n?v(t):x(t),e-C)+C;return n?I(s,o):S(s,o)}(e.randomBytes(t),e.n)},precompute:(t=8,e=a.BASE)=>(e._setWindowSize(t),e.multiply(BigInt(3)),e)};function b(t){const e=d(t),n="string"==typeof t,r=(e||n)&&t.length;return e?r===o||r===i:n?r===2*o||r===2*i:t instanceof a}const R=e.bits2int||function(t){const n=v(t),r=8*t.length-e.nBitLength;return r>0?n>>BigInt(r):n},N=e.bits2int_modN||function(t){return s(R(t))},z=H(e.nBitLength);function L(t){return $(`num < 2^${e.nBitLength}`,t,lt,z),S(t,e.nByteLength)}function P(t,r,o=_){if(["recovered","canonical"].some((t=>t in o)))throw new Error("sign() legacy options not supported");const{hash:i,randomBytes:u}=e;let{lowS:d,prehash:h,extraEntropy:w}=o;null==d&&(d=!0),t=A("msgHash",t),ft(o),h&&(t=A("prehashed msgHash",i(t)));const p=N(t),y=c(r),E=[L(y),L(p)];if(null!=w&&!1!==w){const t=!0===w?u(n.BYTES):w;E.push(A("extraEntropy",t))}const b=O(...E),B=p;return{seed:b,k2sig:function(t){const e=R(t);if(!l(e))return;const n=f(e),r=a.BASE.multiply(e).toAffine(),o=s(r.x);if(o===lt)return;const i=s(n*s(B+o*y));if(i===lt)return;let c=(r.x===o?0:2)|Number(r.y&dt),u=i;return d&&g(i)&&(u=function(t){return g(t)?s(-t):t}(i),c^=1),new m(o,u,c)}}}const _={lowS:e.lowS,prehash:!1},F={lowS:e.lowS,prehash:!1};return a.BASE._setWindowSize(8),{CURVE:e,getPublicKey:function(t,e=!0){return a.fromPrivateKey(t).toRawBytes(e)},getSharedSecret:function(t,e,n=!0){if(b(t))throw new Error("first arg must be private key");if(!b(e))throw new Error("second arg must be public key");return a.fromHex(e).multiply(c(t)).toRawBytes(n)},sign:function(t,n,r=_){const{seed:o,k2sig:i}=P(t,n,r),s=e;return k(s.hash.outputLen,s.nByteLength,s.hmac)(o,i)},verify:function(t,n,r,o=F){const i=t;if(n=A("msgHash",n),r=A("publicKey",r),"strict"in o)throw new Error("options.strict was renamed to lowS");ft(o);const{lowS:c,prehash:u}=o;let l,h;try{if("string"==typeof i||d(i))try{l=m.fromDER(i)}catch(t){if(!(t instanceof ut.Err))throw t;l=m.fromCompact(i)}else{if("object"!=typeof i||"bigint"!=typeof i.r||"bigint"!=typeof i.s)throw new Error("PARSE");{const{r:t,s:e}=i;l=new m(t,e)}}h=a.fromHex(r)}catch(t){if("PARSE"===t.message)throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(c&&l.hasHighS())return!1;u&&(n=e.hash(n));const{r:w,s:g}=l,p=N(n),y=f(g),E=s(p*y),b=s(w*y),B=a.BASE.multiplyAndAddUnsafe(h,E,b)?.toAffine();return!!B&&s(B.x)===w},ProjectivePoint:a,Signature:m,utils:E}}function pt(t){return{hash:t,hmac:(e,...n)=>a(t,e,(0,s.Id)(...n)),randomBytes:s.po}}const yt=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),mt=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Et=BigInt(1),bt=BigInt(2),Bt=(t,e)=>(t+e/bt)/e;function vt(t){const e=yt,n=BigInt(3),r=BigInt(6),o=BigInt(11),i=BigInt(22),s=BigInt(23),f=BigInt(44),a=BigInt(88),c=t*t*t%e,u=c*c*t%e,l=D(u,n,e)*u%e,d=D(l,n,e)*u%e,h=D(d,bt,e)*c%e,w=D(h,o,e)*h%e,g=D(w,i,e)*w%e,p=D(g,f,e)*g%e,y=D(p,a,e)*p%e,m=D(y,f,e)*g%e,E=D(m,n,e)*u%e,b=D(E,s,e)*w%e,B=D(b,r,e)*c%e,v=D(B,bt,e);if(!xt.eql(xt.sqr(v),t))throw new Error("Cannot find square root");return v}const xt=X(yt,void 0,void 0,{sqrt:vt}),St=function(t,e){const n=e=>gt({...t,...pt(e)});return Object.freeze({...n(e),create:n})}({a:BigInt(0),b:BigInt(7),Fp:xt,n:mt,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const e=mt,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-Et*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),i=n,s=BigInt("0x100000000000000000000000000000000"),f=Bt(i*t,e),a=Bt(-r*t,e);let c=W(t-f*n-a*o,e),u=W(-f*r-a*i,e);const l=c>s,d=u>s;if(l&&(c=e-c),d&&(u=e-u),c>s||u>s)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:l,k1:c,k2neg:d,k2:u}}}},o.sc);BigInt(0);St.ProjectivePoint}}]);