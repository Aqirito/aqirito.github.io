import{S as w,i as y,s as z,e as v,t as E,c as d,a as b,h as P,d as m,g as n,G as R,j,k as H,l as h,m as N,H as q}from"./chunks/vendor-2185c327.js";function C(r){let l,t=r[1].frame+"",a;return{c(){l=v("pre"),a=E(t)},l(f){l=d(f,"PRE",{});var s=b(l);a=P(s,t),s.forEach(m)},m(f,s){n(f,l,s),R(l,a)},p(f,s){s&2&&t!==(t=f[1].frame+"")&&j(a,t)},d(f){f&&m(l)}}}function G(r){let l,t=r[1].stack+"",a;return{c(){l=v("pre"),a=E(t)},l(f){l=d(f,"PRE",{});var s=b(l);a=P(s,t),s.forEach(m)},m(f,s){n(f,l,s),R(l,a)},p(f,s){s&2&&t!==(t=f[1].stack+"")&&j(a,t)},d(f){f&&m(l)}}}function A(r){let l,t,a,f,s=r[1].message+"",c,k,u,p,i=r[1].frame&&C(r),o=r[1].stack&&G(r);return{c(){l=v("h1"),t=E(r[0]),a=H(),f=v("pre"),c=E(s),k=H(),i&&i.c(),u=H(),o&&o.c(),p=h()},l(e){l=d(e,"H1",{});var _=b(l);t=P(_,r[0]),_.forEach(m),a=N(e),f=d(e,"PRE",{});var S=b(f);c=P(S,s),S.forEach(m),k=N(e),i&&i.l(e),u=N(e),o&&o.l(e),p=h()},m(e,_){n(e,l,_),R(l,t),n(e,a,_),n(e,f,_),R(f,c),n(e,k,_),i&&i.m(e,_),n(e,u,_),o&&o.m(e,_),n(e,p,_)},p(e,[_]){_&1&&j(t,e[0]),_&2&&s!==(s=e[1].message+"")&&j(c,s),e[1].frame?i?i.p(e,_):(i=C(e),i.c(),i.m(u.parentNode,u)):i&&(i.d(1),i=null),e[1].stack?o?o.p(e,_):(o=G(e),o.c(),o.m(p.parentNode,p)):o&&(o.d(1),o=null)},i:q,o:q,d(e){e&&m(l),e&&m(a),e&&m(f),e&&m(k),i&&i.d(e),e&&m(u),o&&o.d(e),e&&m(p)}}}function F({error:r,status:l}){return{props:{error:r,status:l}}}function B(r,l,t){let{status:a}=l,{error:f}=l;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,f=s.error)},[a,f]}class I extends w{constructor(l){super();y(this,l,B,A,z,{status:0,error:1})}}export{I as default,F as load};
