"use strict";var u=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var i=u(function(x,a){
var e=require('@stdlib/ndarray-dtypes/dist'),n=require('@stdlib/blas-base-ndarray-gasum/dist'),o=require('@stdlib/blas-base-ndarray-dasum/dist'),c=require('@stdlib/blas-base-ndarray-sasum/dist'),v=require('@stdlib/blas-base-ndarray-dzasum/dist'),p=require('@stdlib/blas-base-ndarray-scasum/dist'),l=require('@stdlib/ndarray-base-unary-reduce-strided1d-dispatch-factory/dist'),m=e("numeric_and_generic"),_=e("real_floating_point_and_generic"),d={output:"real_floating_point_and_generic",casting:"none"},q={types:["float64","float32","complex128","complex64"],fcns:[o,c,v,p],default:n},f=l(q,[m],_,d);a.exports=f
});var g=i();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
