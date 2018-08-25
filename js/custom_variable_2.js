
function(){return function(t){function e(t,e){var n=!1;
if("onload"in new XMLHttpRequest)try{var o=new XMLHttpRequest;
o.open("POST",e,!0),o.setRequestHeader("Content-Type","text/plain"),
o.send(t),o.onreadystatechange=function(){
if(4==this.readyState)return 200!=this.status?n:void(n=!0)}}
catch(t){}else try{var r=new XDomainRequest;r.open("POST",e),
setTimeout(function(){r.send(t)},0),r.onerror=function(){return n},
r.onload=function(){n=!0}}catch(t){}return n}function n(t,e){
var n=!1;try{document.createElement("img").src=e+"?"+t,n=!0}
catch(t){}return n}function o(t,o){var r;
if(!(2036>=t.length&&n(t,o))){r=!1;try{navigator.sendBeacon&&
navigator.sendBeacon(o,t)}catch(t){}}return r||n(t,o)||e(t,o)}
var r=t.get("hitPayload")+"&cd1="+t.get("clientId");
o(r,"https://training-190916.appspot.com/collect"),
o(r,"https://www.google-analytics.com/collect")}}