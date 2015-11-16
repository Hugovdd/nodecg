(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var __cov_SDoJHVuzFG1rd5Lwnwi96g = (Function('return this'))();
if (!__cov_SDoJHVuzFG1rd5Lwnwi96g.__coverage__) { __cov_SDoJHVuzFG1rd5Lwnwi96g.__coverage__ = {}; }
__cov_SDoJHVuzFG1rd5Lwnwi96g = __cov_SDoJHVuzFG1rd5Lwnwi96g.__coverage__;
if (!(__cov_SDoJHVuzFG1rd5Lwnwi96g['/Users/matt/Dev/nodecg/lib/api.js'])) {
   __cov_SDoJHVuzFG1rd5Lwnwi96g['/Users/matt/Dev/nodecg/lib/api.js'] = {"path":"/Users/matt/Dev/nodecg/lib/api.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":1,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0,"96":0,"97":0,"98":0,"99":0,"100":0,"101":0,"102":0,"103":0,"104":0,"105":0,"106":0,"107":0,"108":0,"109":0,"110":0,"111":0,"112":0,"113":0,"114":0,"115":0,"116":0,"117":0,"118":0,"119":0,"120":0,"121":0,"122":0,"123":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0],"23":[0,0],"24":[0,0],"25":[0,0],"26":[0,0],"27":[0,0],"28":[0,0],"29":[0,0],"30":[0,0],"31":[0,0],"32":[0,0],"33":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0},"fnMap":{"1":{"name":"NodeCG","line":16,"loc":{"start":{"line":16,"column":0},"end":{"line":16,"column":32}}},"2":{"name":"(anonymous_2)","line":35,"loc":{"start":{"line":35,"column":54},"end":{"line":35,"column":65}}},"3":{"name":"(anonymous_3)","line":43,"loc":{"start":{"line":43,"column":28},"end":{"line":43,"column":45}}},"4":{"name":"onMessage","line":55,"loc":{"start":{"line":55,"column":29},"end":{"line":55,"column":54}}},"5":{"name":"(anonymous_5)","line":59,"loc":{"start":{"line":59,"column":42},"end":{"line":59,"column":60}}},"6":{"name":"(anonymous_6)","line":67,"loc":{"start":{"line":67,"column":27},"end":{"line":67,"column":41}}},"7":{"name":"onConnection","line":78,"loc":{"start":{"line":78,"column":28},"end":{"line":78,"column":58}}},"8":{"name":"(anonymous_8)","line":80,"loc":{"start":{"line":80,"column":32},"end":{"line":80,"column":49}}},"9":{"name":"onMessage","line":90,"loc":{"start":{"line":90,"column":33},"end":{"line":90,"column":62}}},"10":{"name":"(anonymous_10)","line":94,"loc":{"start":{"line":94,"column":46},"end":{"line":94,"column":64}}},"11":{"name":"(anonymous_11)","line":114,"loc":{"start":{"line":114,"column":31},"end":{"line":114,"column":70}}},"12":{"name":"(anonymous_12)","line":129,"loc":{"start":{"line":129,"column":29},"end":{"line":129,"column":80}}},"13":{"name":"(anonymous_13)","line":150,"loc":{"start":{"line":150,"column":39},"end":{"line":150,"column":90}}},"14":{"name":"(anonymous_14)","line":163,"loc":{"start":{"line":163,"column":29},"end":{"line":163,"column":73}}},"15":{"name":"(anonymous_15)","line":193,"loc":{"start":{"line":193,"column":29},"end":{"line":193,"column":48}}},"16":{"name":"(anonymous_16)","line":203,"loc":{"start":{"line":203,"column":19},"end":{"line":203,"column":48}}},"17":{"name":"(anonymous_17)","line":207,"loc":{"start":{"line":207,"column":29},"end":{"line":207,"column":58}}},"18":{"name":"(anonymous_18)","line":221,"loc":{"start":{"line":221,"column":23},"end":{"line":221,"column":50}}},"19":{"name":"(anonymous_19)","line":238,"loc":{"start":{"line":238,"column":33},"end":{"line":238,"column":60}}},"20":{"name":"(anonymous_20)","line":257,"loc":{"start":{"line":257,"column":41},"end":{"line":257,"column":69}}},"21":{"name":"(anonymous_21)","line":275,"loc":{"start":{"line":275,"column":33},"end":{"line":275,"column":56}}},"22":{"name":"(anonymous_22)","line":287,"loc":{"start":{"line":287,"column":41},"end":{"line":287,"column":64}}},"23":{"name":"(anonymous_23)","line":323,"loc":{"start":{"line":323,"column":13},"end":{"line":323,"column":24}}}},"statementMap":{"1":{"start":{"line":4,"column":0},"end":{"line":4,"column":47}},"2":{"start":{"line":5,"column":0},"end":{"line":5,"column":12}},"3":{"start":{"line":6,"column":0},"end":{"line":6,"column":33}},"4":{"start":{"line":7,"column":0},"end":{"line":7,"column":30}},"5":{"start":{"line":8,"column":0},"end":{"line":8,"column":41}},"6":{"start":{"line":16,"column":0},"end":{"line":105,"column":1}},"7":{"start":{"line":17,"column":4},"end":{"line":17,"column":20}},"8":{"start":{"line":20,"column":4},"end":{"line":20,"column":34}},"9":{"start":{"line":21,"column":4},"end":{"line":21,"column":38}},"10":{"start":{"line":24,"column":4},"end":{"line":24,"column":56}},"11":{"start":{"line":26,"column":4},"end":{"line":26,"column":31}},"12":{"start":{"line":28,"column":4},"end":{"line":102,"column":5}},"13":{"start":{"line":30,"column":8},"end":{"line":32,"column":9}},"14":{"start":{"line":31,"column":12},"end":{"line":31,"column":95}},"15":{"start":{"line":35,"column":8},"end":{"line":37,"column":18}},"16":{"start":{"line":36,"column":12},"end":{"line":36,"column":72}},"17":{"start":{"line":36,"column":39},"end":{"line":36,"column":72}},"18":{"start":{"line":40,"column":8},"end":{"line":40,"column":29}},"19":{"start":{"line":41,"column":8},"end":{"line":41,"column":50}},"20":{"start":{"line":43,"column":8},"end":{"line":52,"column":11}},"21":{"start":{"line":45,"column":12},"end":{"line":49,"column":15}},"22":{"start":{"line":51,"column":12},"end":{"line":51,"column":40}},"23":{"start":{"line":55,"column":8},"end":{"line":65,"column":11}},"24":{"start":{"line":56,"column":12},"end":{"line":57,"column":82}},"25":{"start":{"line":59,"column":12},"end":{"line":64,"column":15}},"26":{"start":{"line":60,"column":16},"end":{"line":63,"column":17}},"27":{"start":{"line":62,"column":20},"end":{"line":62,"column":47}},"28":{"start":{"line":67,"column":8},"end":{"line":74,"column":11}},"29":{"start":{"line":68,"column":12},"end":{"line":73,"column":13}},"30":{"start":{"line":69,"column":16},"end":{"line":69,"column":95}},"31":{"start":{"line":70,"column":16},"end":{"line":70,"column":107}},"32":{"start":{"line":72,"column":16},"end":{"line":72,"column":63}},"33":{"start":{"line":76,"column":8},"end":{"line":76,"column":28}},"34":{"start":{"line":78,"column":8},"end":{"line":101,"column":11}},"35":{"start":{"line":79,"column":12},"end":{"line":79,"column":39}},"36":{"start":{"line":80,"column":12},"end":{"line":89,"column":15}},"37":{"start":{"line":82,"column":16},"end":{"line":86,"column":19}},"38":{"start":{"line":88,"column":16},"end":{"line":88,"column":44}},"39":{"start":{"line":90,"column":12},"end":{"line":100,"column":15}},"40":{"start":{"line":91,"column":16},"end":{"line":92,"column":86}},"41":{"start":{"line":94,"column":16},"end":{"line":99,"column":19}},"42":{"start":{"line":95,"column":20},"end":{"line":98,"column":21}},"43":{"start":{"line":97,"column":24},"end":{"line":97,"column":55}},"44":{"start":{"line":104,"column":4},"end":{"line":104,"column":24}},"45":{"start":{"line":114,"column":0},"end":{"line":121,"column":2}},"46":{"start":{"line":115,"column":4},"end":{"line":118,"column":5}},"47":{"start":{"line":116,"column":8},"end":{"line":116,"column":24}},"48":{"start":{"line":117,"column":8},"end":{"line":117,"column":20}},"49":{"start":{"line":120,"column":4},"end":{"line":120,"column":75}},"50":{"start":{"line":129,"column":0},"end":{"line":148,"column":2}},"51":{"start":{"line":130,"column":4},"end":{"line":147,"column":5}},"52":{"start":{"line":131,"column":8},"end":{"line":134,"column":9}},"53":{"start":{"line":132,"column":12},"end":{"line":132,"column":28}},"54":{"start":{"line":133,"column":12},"end":{"line":133,"column":24}},"55":{"start":{"line":136,"column":8},"end":{"line":140,"column":21}},"56":{"start":{"line":142,"column":8},"end":{"line":146,"column":11}},"57":{"start":{"line":150,"column":0},"end":{"line":155,"column":2}},"58":{"start":{"line":151,"column":4},"end":{"line":152,"column":56}},"59":{"start":{"line":154,"column":4},"end":{"line":154,"column":56}},"60":{"start":{"line":163,"column":0},"end":{"line":187,"column":2}},"61":{"start":{"line":164,"column":4},"end":{"line":167,"column":5}},"62":{"start":{"line":165,"column":8},"end":{"line":165,"column":29}},"63":{"start":{"line":166,"column":8},"end":{"line":166,"column":37}},"64":{"start":{"line":169,"column":4},"end":{"line":169,"column":101}},"65":{"start":{"line":172,"column":4},"end":{"line":172,"column":43}},"66":{"start":{"line":173,"column":4},"end":{"line":180,"column":5}},"67":{"start":{"line":174,"column":8},"end":{"line":174,"column":55}},"68":{"start":{"line":175,"column":8},"end":{"line":179,"column":9}},"69":{"start":{"line":176,"column":12},"end":{"line":177,"column":58}},"70":{"start":{"line":178,"column":12},"end":{"line":178,"column":19}},"71":{"start":{"line":182,"column":4},"end":{"line":186,"column":7}},"72":{"start":{"line":193,"column":0},"end":{"line":199,"column":2}},"73":{"start":{"line":194,"column":4},"end":{"line":198,"column":5}},"74":{"start":{"line":195,"column":8},"end":{"line":195,"column":61}},"75":{"start":{"line":197,"column":8},"end":{"line":197,"column":31}},"76":{"start":{"line":201,"column":0},"end":{"line":201,"column":57}},"77":{"start":{"line":203,"column":0},"end":{"line":205,"column":2}},"78":{"start":{"line":204,"column":4},"end":{"line":204,"column":74}},"79":{"start":{"line":207,"column":0},"end":{"line":214,"column":2}},"80":{"start":{"line":208,"column":4},"end":{"line":211,"column":5}},"81":{"start":{"line":209,"column":8},"end":{"line":209,"column":22}},"82":{"start":{"line":210,"column":8},"end":{"line":210,"column":33}},"83":{"start":{"line":213,"column":4},"end":{"line":213,"column":48}},"84":{"start":{"line":221,"column":0},"end":{"line":236,"column":2}},"85":{"start":{"line":222,"column":4},"end":{"line":224,"column":5}},"86":{"start":{"line":223,"column":8},"end":{"line":223,"column":71}},"87":{"start":{"line":226,"column":4},"end":{"line":228,"column":5}},"88":{"start":{"line":227,"column":8},"end":{"line":227,"column":78}},"89":{"start":{"line":230,"column":4},"end":{"line":235,"column":5}},"90":{"start":{"line":231,"column":8},"end":{"line":231,"column":78}},"91":{"start":{"line":233,"column":8},"end":{"line":233,"column":54}},"92":{"start":{"line":234,"column":8},"end":{"line":234,"column":46}},"93":{"start":{"line":234,"column":23},"end":{"line":234,"column":46}},"94":{"start":{"line":238,"column":0},"end":{"line":245,"column":2}},"95":{"start":{"line":239,"column":4},"end":{"line":242,"column":5}},"96":{"start":{"line":240,"column":8},"end":{"line":240,"column":20}},"97":{"start":{"line":241,"column":8},"end":{"line":241,"column":33}},"98":{"start":{"line":244,"column":4},"end":{"line":244,"column":50}},"99":{"start":{"line":247,"column":0},"end":{"line":328,"column":1}},"100":{"start":{"line":248,"column":4},"end":{"line":248,"column":27}},"101":{"start":{"line":257,"column":4},"end":{"line":267,"column":6}},"102":{"start":{"line":258,"column":8},"end":{"line":258,"column":29}},"103":{"start":{"line":259,"column":8},"end":{"line":266,"column":9}},"104":{"start":{"line":260,"column":12},"end":{"line":264,"column":13}},"105":{"start":{"line":261,"column":16},"end":{"line":263,"column":17}},"106":{"start":{"line":262,"column":20},"end":{"line":262,"column":34}},"107":{"start":{"line":265,"column":12},"end":{"line":265,"column":39}},"108":{"start":{"line":275,"column":4},"end":{"line":279,"column":6}},"109":{"start":{"line":276,"column":8},"end":{"line":276,"column":43}},"110":{"start":{"line":277,"column":8},"end":{"line":277,"column":41}},"111":{"start":{"line":278,"column":8},"end":{"line":278,"column":58}},"112":{"start":{"line":287,"column":4},"end":{"line":291,"column":6}},"113":{"start":{"line":288,"column":8},"end":{"line":288,"column":43}},"114":{"start":{"line":289,"column":8},"end":{"line":289,"column":50}},"115":{"start":{"line":290,"column":8},"end":{"line":290,"column":69}},"116":{"start":{"line":296,"column":4},"end":{"line":296,"column":54}},"117":{"start":{"line":302,"column":4},"end":{"line":302,"column":42}},"118":{"start":{"line":304,"column":4},"end":{"line":304,"column":31}},"119":{"start":{"line":312,"column":4},"end":{"line":312,"column":54}},"120":{"start":{"line":319,"column":4},"end":{"line":319,"column":58}},"121":{"start":{"line":322,"column":4},"end":{"line":327,"column":7}},"122":{"start":{"line":324,"column":12},"end":{"line":324,"column":42}},"123":{"start":{"line":330,"column":0},"end":{"line":330,"column":24}}},"branchMap":{"1":{"line":28,"type":"if","locations":[{"start":{"line":28,"column":4},"end":{"line":28,"column":4}},{"start":{"line":28,"column":4},"end":{"line":28,"column":4}}]},"2":{"line":30,"type":"if","locations":[{"start":{"line":30,"column":8},"end":{"line":30,"column":8}},{"start":{"line":30,"column":8},"end":{"line":30,"column":8}}]},"3":{"line":36,"type":"if","locations":[{"start":{"line":36,"column":12},"end":{"line":36,"column":12}},{"start":{"line":36,"column":12},"end":{"line":36,"column":12}}]},"4":{"line":60,"type":"if","locations":[{"start":{"line":60,"column":16},"end":{"line":60,"column":16}},{"start":{"line":60,"column":16},"end":{"line":60,"column":16}}]},"5":{"line":60,"type":"binary-expr","locations":[{"start":{"line":60,"column":20},"end":{"line":60,"column":60}},{"start":{"line":61,"column":20},"end":{"line":61,"column":58}}]},"6":{"line":68,"type":"if","locations":[{"start":{"line":68,"column":12},"end":{"line":68,"column":12}},{"start":{"line":68,"column":12},"end":{"line":68,"column":12}}]},"7":{"line":95,"type":"if","locations":[{"start":{"line":95,"column":20},"end":{"line":95,"column":20}},{"start":{"line":95,"column":20},"end":{"line":95,"column":20}}]},"8":{"line":95,"type":"binary-expr","locations":[{"start":{"line":95,"column":24},"end":{"line":95,"column":64}},{"start":{"line":96,"column":24},"end":{"line":96,"column":62}}]},"9":{"line":115,"type":"if","locations":[{"start":{"line":115,"column":4},"end":{"line":115,"column":4}},{"start":{"line":115,"column":4},"end":{"line":115,"column":4}}]},"10":{"line":115,"type":"binary-expr","locations":[{"start":{"line":115,"column":8},"end":{"line":115,"column":39}},{"start":{"line":115,"column":43},"end":{"line":115,"column":69}}]},"11":{"line":130,"type":"if","locations":[{"start":{"line":130,"column":4},"end":{"line":130,"column":4}},{"start":{"line":130,"column":4},"end":{"line":130,"column":4}}]},"12":{"line":131,"type":"if","locations":[{"start":{"line":131,"column":8},"end":{"line":131,"column":8}},{"start":{"line":131,"column":8},"end":{"line":131,"column":8}}]},"13":{"line":131,"type":"binary-expr","locations":[{"start":{"line":131,"column":12},"end":{"line":131,"column":43}},{"start":{"line":131,"column":47},"end":{"line":131,"column":73}}]},"14":{"line":164,"type":"if","locations":[{"start":{"line":164,"column":4},"end":{"line":164,"column":4}},{"start":{"line":164,"column":4},"end":{"line":164,"column":4}}]},"15":{"line":175,"type":"if","locations":[{"start":{"line":175,"column":8},"end":{"line":175,"column":8}},{"start":{"line":175,"column":8},"end":{"line":175,"column":8}}]},"16":{"line":175,"type":"binary-expr","locations":[{"start":{"line":175,"column":12},"end":{"line":175,"column":55}},{"start":{"line":175,"column":59},"end":{"line":175,"column":100}}]},"17":{"line":194,"type":"if","locations":[{"start":{"line":194,"column":4},"end":{"line":194,"column":4}},{"start":{"line":194,"column":4},"end":{"line":194,"column":4}}]},"18":{"line":204,"type":"cond-expr","locations":[{"start":{"line":204,"column":52},"end":{"line":204,"column":65}},{"start":{"line":204,"column":68},"end":{"line":204,"column":72}}]},"19":{"line":208,"type":"if","locations":[{"start":{"line":208,"column":4},"end":{"line":208,"column":4}},{"start":{"line":208,"column":4},"end":{"line":208,"column":4}}]},"20":{"line":208,"type":"binary-expr","locations":[{"start":{"line":208,"column":8},"end":{"line":208,"column":15}},{"start":{"line":208,"column":19},"end":{"line":208,"column":45}}]},"21":{"line":222,"type":"if","locations":[{"start":{"line":222,"column":4},"end":{"line":222,"column":4}},{"start":{"line":222,"column":4},"end":{"line":222,"column":4}}]},"22":{"line":222,"type":"binary-expr","locations":[{"start":{"line":222,"column":8},"end":{"line":222,"column":13}},{"start":{"line":222,"column":17},"end":{"line":222,"column":41}}]},"23":{"line":226,"type":"if","locations":[{"start":{"line":226,"column":4},"end":{"line":226,"column":4}},{"start":{"line":226,"column":4},"end":{"line":226,"column":4}}]},"24":{"line":226,"type":"binary-expr","locations":[{"start":{"line":226,"column":8},"end":{"line":226,"column":15}},{"start":{"line":226,"column":19},"end":{"line":226,"column":45}}]},"25":{"line":230,"type":"if","locations":[{"start":{"line":230,"column":4},"end":{"line":230,"column":4}},{"start":{"line":230,"column":4},"end":{"line":230,"column":4}}]},"26":{"line":234,"type":"if","locations":[{"start":{"line":234,"column":8},"end":{"line":234,"column":8}},{"start":{"line":234,"column":8},"end":{"line":234,"column":8}}]},"27":{"line":239,"type":"if","locations":[{"start":{"line":239,"column":4},"end":{"line":239,"column":4}},{"start":{"line":239,"column":4},"end":{"line":239,"column":4}}]},"28":{"line":239,"type":"binary-expr","locations":[{"start":{"line":239,"column":8},"end":{"line":239,"column":15}},{"start":{"line":239,"column":19},"end":{"line":239,"column":45}}]},"29":{"line":247,"type":"if","locations":[{"start":{"line":247,"column":0},"end":{"line":247,"column":0}},{"start":{"line":247,"column":0},"end":{"line":247,"column":0}}]},"30":{"line":260,"type":"if","locations":[{"start":{"line":260,"column":12},"end":{"line":260,"column":12}},{"start":{"line":260,"column":12},"end":{"line":260,"column":12}}]},"31":{"line":261,"type":"if","locations":[{"start":{"line":261,"column":16},"end":{"line":261,"column":16}},{"start":{"line":261,"column":16},"end":{"line":261,"column":16}}]},"32":{"line":276,"type":"binary-expr","locations":[{"start":{"line":276,"column":17},"end":{"line":276,"column":23}},{"start":{"line":276,"column":27},"end":{"line":276,"column":42}}]},"33":{"line":288,"type":"binary-expr","locations":[{"start":{"line":288,"column":17},"end":{"line":288,"column":23}},{"start":{"line":288,"column":27},"end":{"line":288,"column":42}}]}}};
}
__cov_SDoJHVuzFG1rd5Lwnwi96g = __cov_SDoJHVuzFG1rd5Lwnwi96g['/Users/matt/Dev/nodecg/lib/api.js'];
__cov_SDoJHVuzFG1rd5Lwnwi96g.s['1']++;var Replicant=require('./browser/replicant');__cov_SDoJHVuzFG1rd5Lwnwi96g.s['2']++;var io={};__cov_SDoJHVuzFG1rd5Lwnwi96g.s['3']++;var server=require('./server');__cov_SDoJHVuzFG1rd5Lwnwi96g.s['4']++;var utils=require('./util');__cov_SDoJHVuzFG1rd5Lwnwi96g.s['5']++;var replicator=require('./replicator');function NodeCG(bundle,socket){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['1']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['7']++;var self=this;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['8']++;this.bundleName=bundle.name;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['9']++;this.bundleConfig=bundle.config;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['10']++;this.log=require('./browser/logger')(bundle.name);__cov_SDoJHVuzFG1rd5Lwnwi96g.s['11']++;this._messageHandlers=[];__cov_SDoJHVuzFG1rd5Lwnwi96g.s['12']++;if(true){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['1'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['13']++;if(typeof io==='undefined'){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['2'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['14']++;throw new Error('[nodeceg] Socket.IO must be loaded before instantiating the API');}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['2'][1]++;}__cov_SDoJHVuzFG1rd5Lwnwi96g.s['15']++;document.addEventListener('DOMContentLoaded',function(){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['2']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['16']++;if(document.title===''){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['3'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['17']++;document.title=self.bundleName;}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['3'][1]++;}},false);__cov_SDoJHVuzFG1rd5Lwnwi96g.s['18']++;this.socket=socket;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['19']++;this.socket.emit('joinRoom',bundle.name);__cov_SDoJHVuzFG1rd5Lwnwi96g.s['20']++;socket.on('config',function(config){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['3']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['21']++;Object.defineProperty(self,'_config',{value:config,writable:false,enumerable:true});__cov_SDoJHVuzFG1rd5Lwnwi96g.s['22']++;Object.freeze(self._config);});__cov_SDoJHVuzFG1rd5Lwnwi96g.s['23']++;socket.on('message',function onMessage(data){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['4']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['24']++;self.log.trace('Received message %s (sent to bundle %s) with data:',self.bundleName,data.messageName,data.bundleName,data.content);__cov_SDoJHVuzFG1rd5Lwnwi96g.s['25']++;self._messageHandlers.forEach(function(handler){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['5']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['26']++;if((__cov_SDoJHVuzFG1rd5Lwnwi96g.b['5'][0]++,data.messageName===handler.messageName)&&(__cov_SDoJHVuzFG1rd5Lwnwi96g.b['5'][1]++,data.bundleName===handler.bundleName)){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['4'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['27']++;handler.func(data.content);}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['4'][1]++;}});});__cov_SDoJHVuzFG1rd5Lwnwi96g.s['28']++;socket.on('error',function(err){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['6']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['29']++;if(err.type==='UnauthorizedError'){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['6'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['30']++;var url=[location.protocol,'//',location.host,location.pathname].join('');__cov_SDoJHVuzFG1rd5Lwnwi96g.s['31']++;window.location.href='/authError?code='+err.code+'&message='+err.message+'&viewUrl='+url;}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['6'][1]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['32']++;self.log.error('Unhandled socket error:',err);}});}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['1'][1]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['33']++;io=server.getIO();__cov_SDoJHVuzFG1rd5Lwnwi96g.s['34']++;io.on('connection',function onConnection(socket){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['7']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['35']++;socket.setMaxListeners(64);__cov_SDoJHVuzFG1rd5Lwnwi96g.s['36']++;socket.on('config',function(config){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['8']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['37']++;Object.defineProperty(self,'_config',{value:config,writable:false,enumerable:true});__cov_SDoJHVuzFG1rd5Lwnwi96g.s['38']++;Object.freeze(self._config);});__cov_SDoJHVuzFG1rd5Lwnwi96g.s['39']++;socket.on('message',function onMessage(data,cb){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['9']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['40']++;self.log.trace('[%s] Received message %s (sent to bundle %s) with data:',self.bundleName,data.messageName,data.bundleName,data.content);__cov_SDoJHVuzFG1rd5Lwnwi96g.s['41']++;self._messageHandlers.forEach(function(handler){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['10']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['42']++;if((__cov_SDoJHVuzFG1rd5Lwnwi96g.b['8'][0]++,data.messageName===handler.messageName)&&(__cov_SDoJHVuzFG1rd5Lwnwi96g.b['8'][1]++,data.bundleName===handler.bundleName)){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['7'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['43']++;handler.func(data.content,cb);}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['7'][1]++;}});});});}__cov_SDoJHVuzFG1rd5Lwnwi96g.s['44']++;this._config=null;}__cov_SDoJHVuzFG1rd5Lwnwi96g.s['45']++;NodeCG.prototype.sendMessage=function(messageName,data,callback){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['11']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['46']++;if((__cov_SDoJHVuzFG1rd5Lwnwi96g.b['10'][0]++,typeof callback==='undefined')&&(__cov_SDoJHVuzFG1rd5Lwnwi96g.b['10'][1]++,typeof data==='function')){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['9'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['47']++;callback=data;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['48']++;data=null;}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['9'][1]++;}__cov_SDoJHVuzFG1rd5Lwnwi96g.s['49']++;this.sendMessageToBundle(messageName,this.bundleName,data,callback);};__cov_SDoJHVuzFG1rd5Lwnwi96g.s['50']++;NodeCG.sendMessageToBundle=function(messageName,bundleName,data,callback){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['12']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['51']++;if(true){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['11'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['52']++;if((__cov_SDoJHVuzFG1rd5Lwnwi96g.b['13'][0]++,typeof callback==='undefined')&&(__cov_SDoJHVuzFG1rd5Lwnwi96g.b['13'][1]++,typeof data==='function')){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['12'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['53']++;callback=data;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['54']++;data=null;}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['12'][1]++;}__cov_SDoJHVuzFG1rd5Lwnwi96g.s['55']++;window.socket.emit('message',{bundleName:bundleName,messageName:messageName,content:data},callback);}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['11'][1]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['56']++;io.emit('message',{bundleName:bundleName,messageName:messageName,content:data});}};__cov_SDoJHVuzFG1rd5Lwnwi96g.s['57']++;NodeCG.prototype.sendMessageToBundle=function(messageName,bundleName,data,callback){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['13']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['58']++;this.log.trace('[%s] Sending message %s to bundle %s with data:',this.bundleName,messageName,bundleName,data);__cov_SDoJHVuzFG1rd5Lwnwi96g.s['59']++;NodeCG.sendMessageToBundle.apply(NodeCG,arguments);};__cov_SDoJHVuzFG1rd5Lwnwi96g.s['60']++;NodeCG.prototype.listenFor=function(messageName,bundleName,handler){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['14']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['61']++;if(typeof handler==='undefined'){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['14'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['62']++;handler=bundleName;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['63']++;bundleName=this.bundleName;}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['14'][1]++;}__cov_SDoJHVuzFG1rd5Lwnwi96g.s['64']++;this.log.trace('[%s] Listening for %s from bundle %s',this.bundleName,messageName,bundleName);__cov_SDoJHVuzFG1rd5Lwnwi96g.s['65']++;var len=this._messageHandlers.length;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['66']++;for(var i=0;i<len;i++){__cov_SDoJHVuzFG1rd5Lwnwi96g.s['67']++;var existingHandler=this._messageHandlers[i];__cov_SDoJHVuzFG1rd5Lwnwi96g.s['68']++;if((__cov_SDoJHVuzFG1rd5Lwnwi96g.b['16'][0]++,messageName===existingHandler.messageName)&&(__cov_SDoJHVuzFG1rd5Lwnwi96g.b['16'][1]++,bundleName===existingHandler.bundleName)){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['15'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['69']++;this.log.error('%s attempted to declare a duplicate "listenFor" handler:',this.bundleName,bundleName,messageName);__cov_SDoJHVuzFG1rd5Lwnwi96g.s['70']++;return;}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['15'][1]++;}}__cov_SDoJHVuzFG1rd5Lwnwi96g.s['71']++;this._messageHandlers.push({messageName:messageName,bundleName:bundleName,func:handler});};__cov_SDoJHVuzFG1rd5Lwnwi96g.s['72']++;NodeCG.prototype.getConfig=function(callback){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['15']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['73']++;if(this._config===null){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['17'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['74']++;setTimeout(this.getConfig.bind(this,callback),100);}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['17'][1]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['75']++;callback(this._config);}};__cov_SDoJHVuzFG1rd5Lwnwi96g.s['76']++;NodeCG.declaredReplicants=Replicant.declaredReplicants;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['77']++;NodeCG.Replicant=function(name,bundle,opts){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['16']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['78']++;return new Replicant(name,bundle,opts,true?(__cov_SDoJHVuzFG1rd5Lwnwi96g.b['18'][0]++,window.socket):(__cov_SDoJHVuzFG1rd5Lwnwi96g.b['18'][1]++,null));};__cov_SDoJHVuzFG1rd5Lwnwi96g.s['79']++;NodeCG.prototype.Replicant=function(name,bundle,opts){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['17']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['80']++;if((__cov_SDoJHVuzFG1rd5Lwnwi96g.b['20'][0]++,!bundle)||(__cov_SDoJHVuzFG1rd5Lwnwi96g.b['20'][1]++,typeof bundle!=='string')){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['19'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['81']++;opts=bundle;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['82']++;bundle=this.bundleName;}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['19'][1]++;}__cov_SDoJHVuzFG1rd5Lwnwi96g.s['83']++;return NodeCG.Replicant(name,bundle,opts);};__cov_SDoJHVuzFG1rd5Lwnwi96g.s['84']++;NodeCG.readReplicant=function(name,bundle,cb){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['18']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['85']++;if((__cov_SDoJHVuzFG1rd5Lwnwi96g.b['22'][0]++,!name)||(__cov_SDoJHVuzFG1rd5Lwnwi96g.b['22'][1]++,typeof name!=='string')){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['21'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['86']++;throw new Error('Must supply a name when reading a Replicant');}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['21'][1]++;}__cov_SDoJHVuzFG1rd5Lwnwi96g.s['87']++;if((__cov_SDoJHVuzFG1rd5Lwnwi96g.b['24'][0]++,!bundle)||(__cov_SDoJHVuzFG1rd5Lwnwi96g.b['24'][1]++,typeof bundle!=='string')){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['23'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['88']++;throw new Error('Must supply a bundle name when reading a Replicant');}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['23'][1]++;}__cov_SDoJHVuzFG1rd5Lwnwi96g.s['89']++;if(true){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['25'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['90']++;window.socket.emit('readReplicant',{name:name,bundle:bundle},cb);}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['25'][1]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['91']++;var replicant=replicator.find(name,bundle);__cov_SDoJHVuzFG1rd5Lwnwi96g.s['92']++;if(replicant){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['26'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['93']++;return replicant.value;}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['26'][1]++;}}};__cov_SDoJHVuzFG1rd5Lwnwi96g.s['94']++;NodeCG.prototype.readReplicant=function(name,bundle,cb){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['19']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['95']++;if((__cov_SDoJHVuzFG1rd5Lwnwi96g.b['28'][0]++,!bundle)||(__cov_SDoJHVuzFG1rd5Lwnwi96g.b['28'][1]++,typeof bundle!=='string')){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['27'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['96']++;cb=bundle;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['97']++;bundle=this.bundleName;}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['27'][1]++;}__cov_SDoJHVuzFG1rd5Lwnwi96g.s['98']++;return NodeCG.readReplicant(name,bundle,cb);};__cov_SDoJHVuzFG1rd5Lwnwi96g.s['99']++;if(true){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['29'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['100']++;window.NodeCG=NodeCG;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['101']++;NodeCG.nearestElementWithAttribute=function(startEl,attrName){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['20']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['102']++;var target=startEl;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['103']++;while(target){__cov_SDoJHVuzFG1rd5Lwnwi96g.s['104']++;if(target.hasAttribute){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['30'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['105']++;if(target.hasAttribute(attrName)){__cov_SDoJHVuzFG1rd5Lwnwi96g.b['31'][0]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['106']++;return target;}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['31'][1]++;}}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['30'][1]++;}__cov_SDoJHVuzFG1rd5Lwnwi96g.s['107']++;target=target.parentNode;}};__cov_SDoJHVuzFG1rd5Lwnwi96g.s['108']++;NodeCG.prototype.getDialog=function(name,bundle){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['21']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['109']++;bundle=(__cov_SDoJHVuzFG1rd5Lwnwi96g.b['32'][0]++,bundle)||(__cov_SDoJHVuzFG1rd5Lwnwi96g.b['32'][1]++,this.bundleName);__cov_SDoJHVuzFG1rd5Lwnwi96g.s['110']++;var topDoc=window.top.document;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['111']++;return topDoc.getElementById(bundle+'_'+name);};__cov_SDoJHVuzFG1rd5Lwnwi96g.s['112']++;NodeCG.prototype.getDialogDocument=function(name,bundle){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['22']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['113']++;bundle=(__cov_SDoJHVuzFG1rd5Lwnwi96g.b['33'][0]++,bundle)||(__cov_SDoJHVuzFG1rd5Lwnwi96g.b['33'][1]++,this.bundleName);__cov_SDoJHVuzFG1rd5Lwnwi96g.s['114']++;var dialog=this.getDialog(name,bundle);__cov_SDoJHVuzFG1rd5Lwnwi96g.s['115']++;return dialog.querySelector('iframe').contentWindow.document;};}else{__cov_SDoJHVuzFG1rd5Lwnwi96g.b['29'][1]++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['116']++;NodeCG.prototype.getSocketIOServer=server.getIO;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['117']++;NodeCG.prototype.mount=server.mount;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['118']++;NodeCG.prototype.util={};__cov_SDoJHVuzFG1rd5Lwnwi96g.s['119']++;NodeCG.prototype.util.authCheck=utils.authCheck;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['120']++;NodeCG.prototype.util.findSession=utils.findSession;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['121']++;Object.defineProperty(NodeCG.prototype,'extensions',{get:function(){__cov_SDoJHVuzFG1rd5Lwnwi96g.f['23']++;__cov_SDoJHVuzFG1rd5Lwnwi96g.s['122']++;return server.getExtensions();},enumerable:true});}__cov_SDoJHVuzFG1rd5Lwnwi96g.s['123']++;module.exports=NodeCG;

},{"./browser/logger":2,"./browser/replicant":3,"./replicator":11,"./server":11,"./util":11}],2:[function(require,module,exports){
"use strict";
var __cov_iBP1kQ8z999UngcSgLYqig = (Function('return this'))();
if (!__cov_iBP1kQ8z999UngcSgLYqig.__coverage__) { __cov_iBP1kQ8z999UngcSgLYqig.__coverage__ = {}; }
__cov_iBP1kQ8z999UngcSgLYqig = __cov_iBP1kQ8z999UngcSgLYqig.__coverage__;
if (!(__cov_iBP1kQ8z999UngcSgLYqig['/Users/matt/Dev/nodecg/lib/browser/logger.js'])) {
   __cov_iBP1kQ8z999UngcSgLYqig['/Users/matt/Dev/nodecg/lib/browser/logger.js'] = {"path":"/Users/matt/Dev/nodecg/lib/browser/logger.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"fnMap":{"1":{"name":"(anonymous_1)","line":15,"loc":{"start":{"line":15,"column":17},"end":{"line":15,"column":36}}},"2":{"name":"(anonymous_2)","line":18,"loc":{"start":{"line":18,"column":27},"end":{"line":18,"column":38}}},"3":{"name":"(anonymous_3)","line":24,"loc":{"start":{"line":24,"column":27},"end":{"line":24,"column":38}}},"4":{"name":"(anonymous_4)","line":30,"loc":{"start":{"line":30,"column":26},"end":{"line":30,"column":37}}},"5":{"name":"(anonymous_5)","line":36,"loc":{"start":{"line":36,"column":26},"end":{"line":36,"column":37}}},"6":{"name":"(anonymous_6)","line":42,"loc":{"start":{"line":42,"column":27},"end":{"line":42,"column":38}}},"7":{"name":"(anonymous_7)","line":48,"loc":{"start":{"line":48,"column":32},"end":{"line":48,"column":43}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":30}},"2":{"start":{"line":4,"column":0},"end":{"line":4,"column":44}},"3":{"start":{"line":5,"column":0},"end":{"line":5,"column":46}},"4":{"start":{"line":7,"column":0},"end":{"line":13,"column":2}},"5":{"start":{"line":15,"column":0},"end":{"line":55,"column":2}},"6":{"start":{"line":16,"column":4},"end":{"line":16,"column":28}},"7":{"start":{"line":18,"column":4},"end":{"line":22,"column":6}},"8":{"start":{"line":19,"column":8},"end":{"line":19,"column":60}},"9":{"start":{"line":19,"column":53},"end":{"line":19,"column":60}},"10":{"start":{"line":20,"column":8},"end":{"line":20,"column":56}},"11":{"start":{"line":21,"column":8},"end":{"line":21,"column":47}},"12":{"start":{"line":24,"column":4},"end":{"line":28,"column":6}},"13":{"start":{"line":25,"column":8},"end":{"line":25,"column":60}},"14":{"start":{"line":25,"column":53},"end":{"line":25,"column":60}},"15":{"start":{"line":26,"column":8},"end":{"line":26,"column":56}},"16":{"start":{"line":27,"column":8},"end":{"line":27,"column":47}},"17":{"start":{"line":30,"column":4},"end":{"line":34,"column":6}},"18":{"start":{"line":31,"column":8},"end":{"line":31,"column":59}},"19":{"start":{"line":31,"column":52},"end":{"line":31,"column":59}},"20":{"start":{"line":32,"column":8},"end":{"line":32,"column":56}},"21":{"start":{"line":33,"column":8},"end":{"line":33,"column":47}},"22":{"start":{"line":36,"column":4},"end":{"line":40,"column":6}},"23":{"start":{"line":37,"column":8},"end":{"line":37,"column":59}},"24":{"start":{"line":37,"column":52},"end":{"line":37,"column":59}},"25":{"start":{"line":38,"column":8},"end":{"line":38,"column":56}},"26":{"start":{"line":39,"column":8},"end":{"line":39,"column":46}},"27":{"start":{"line":42,"column":4},"end":{"line":46,"column":6}},"28":{"start":{"line":43,"column":8},"end":{"line":43,"column":60}},"29":{"start":{"line":43,"column":53},"end":{"line":43,"column":60}},"30":{"start":{"line":44,"column":8},"end":{"line":44,"column":56}},"31":{"start":{"line":45,"column":8},"end":{"line":45,"column":48}},"32":{"start":{"line":48,"column":4},"end":{"line":52,"column":6}},"33":{"start":{"line":49,"column":8},"end":{"line":49,"column":35}},"34":{"start":{"line":49,"column":28},"end":{"line":49,"column":35}},"35":{"start":{"line":50,"column":8},"end":{"line":50,"column":56}},"36":{"start":{"line":51,"column":8},"end":{"line":51,"column":47}},"37":{"start":{"line":54,"column":4},"end":{"line":54,"column":26}}},"branchMap":{"1":{"line":19,"type":"if","locations":[{"start":{"line":19,"column":8},"end":{"line":19,"column":8}},{"start":{"line":19,"column":8},"end":{"line":19,"column":8}}]},"2":{"line":25,"type":"if","locations":[{"start":{"line":25,"column":8},"end":{"line":25,"column":8}},{"start":{"line":25,"column":8},"end":{"line":25,"column":8}}]},"3":{"line":31,"type":"if","locations":[{"start":{"line":31,"column":8},"end":{"line":31,"column":8}},{"start":{"line":31,"column":8},"end":{"line":31,"column":8}}]},"4":{"line":37,"type":"if","locations":[{"start":{"line":37,"column":8},"end":{"line":37,"column":8}},{"start":{"line":37,"column":8},"end":{"line":37,"column":8}}]},"5":{"line":43,"type":"if","locations":[{"start":{"line":43,"column":8},"end":{"line":43,"column":8}},{"start":{"line":43,"column":8},"end":{"line":43,"column":8}}]},"6":{"line":49,"type":"if","locations":[{"start":{"line":49,"column":8},"end":{"line":49,"column":8}},{"start":{"line":49,"column":8},"end":{"line":49,"column":8}}]}}};
}
__cov_iBP1kQ8z999UngcSgLYqig = __cov_iBP1kQ8z999UngcSgLYqig['/Users/matt/Dev/nodecg/lib/browser/logger.js'];
__cov_iBP1kQ8z999UngcSgLYqig.s['1']++;var config=window.ncgConfig;__cov_iBP1kQ8z999UngcSgLYqig.s['2']++;var logLevel=config.logging.console.level;__cov_iBP1kQ8z999UngcSgLYqig.s['3']++;var logReplicants=config.logging.replicants;__cov_iBP1kQ8z999UngcSgLYqig.s['4']++;var LOG_LEVELS={trace:0,debug:1,info:2,warn:3,error:4};__cov_iBP1kQ8z999UngcSgLYqig.s['5']++;module.exports=function(filename){__cov_iBP1kQ8z999UngcSgLYqig.f['1']++;__cov_iBP1kQ8z999UngcSgLYqig.s['6']++;var loggerInstance={};__cov_iBP1kQ8z999UngcSgLYqig.s['7']++;loggerInstance.trace=function(){__cov_iBP1kQ8z999UngcSgLYqig.f['2']++;__cov_iBP1kQ8z999UngcSgLYqig.s['8']++;if(LOG_LEVELS[logLevel]>LOG_LEVELS.trace){__cov_iBP1kQ8z999UngcSgLYqig.b['1'][0]++;__cov_iBP1kQ8z999UngcSgLYqig.s['9']++;return;}else{__cov_iBP1kQ8z999UngcSgLYqig.b['1'][1]++;}__cov_iBP1kQ8z999UngcSgLYqig.s['10']++;arguments[0]='['+filename+'] '+arguments[0];__cov_iBP1kQ8z999UngcSgLYqig.s['11']++;console.info.apply(console,arguments);};__cov_iBP1kQ8z999UngcSgLYqig.s['12']++;loggerInstance.debug=function(){__cov_iBP1kQ8z999UngcSgLYqig.f['3']++;__cov_iBP1kQ8z999UngcSgLYqig.s['13']++;if(LOG_LEVELS[logLevel]>LOG_LEVELS.debug){__cov_iBP1kQ8z999UngcSgLYqig.b['2'][0]++;__cov_iBP1kQ8z999UngcSgLYqig.s['14']++;return;}else{__cov_iBP1kQ8z999UngcSgLYqig.b['2'][1]++;}__cov_iBP1kQ8z999UngcSgLYqig.s['15']++;arguments[0]='['+filename+'] '+arguments[0];__cov_iBP1kQ8z999UngcSgLYqig.s['16']++;console.info.apply(console,arguments);};__cov_iBP1kQ8z999UngcSgLYqig.s['17']++;loggerInstance.info=function(){__cov_iBP1kQ8z999UngcSgLYqig.f['4']++;__cov_iBP1kQ8z999UngcSgLYqig.s['18']++;if(LOG_LEVELS[logLevel]>LOG_LEVELS.info){__cov_iBP1kQ8z999UngcSgLYqig.b['3'][0]++;__cov_iBP1kQ8z999UngcSgLYqig.s['19']++;return;}else{__cov_iBP1kQ8z999UngcSgLYqig.b['3'][1]++;}__cov_iBP1kQ8z999UngcSgLYqig.s['20']++;arguments[0]='['+filename+'] '+arguments[0];__cov_iBP1kQ8z999UngcSgLYqig.s['21']++;console.info.apply(console,arguments);};__cov_iBP1kQ8z999UngcSgLYqig.s['22']++;loggerInstance.warn=function(){__cov_iBP1kQ8z999UngcSgLYqig.f['5']++;__cov_iBP1kQ8z999UngcSgLYqig.s['23']++;if(LOG_LEVELS[logLevel]>LOG_LEVELS.warn){__cov_iBP1kQ8z999UngcSgLYqig.b['4'][0]++;__cov_iBP1kQ8z999UngcSgLYqig.s['24']++;return;}else{__cov_iBP1kQ8z999UngcSgLYqig.b['4'][1]++;}__cov_iBP1kQ8z999UngcSgLYqig.s['25']++;arguments[0]='['+filename+'] '+arguments[0];__cov_iBP1kQ8z999UngcSgLYqig.s['26']++;console.log.apply(console,arguments);};__cov_iBP1kQ8z999UngcSgLYqig.s['27']++;loggerInstance.error=function(){__cov_iBP1kQ8z999UngcSgLYqig.f['6']++;__cov_iBP1kQ8z999UngcSgLYqig.s['28']++;if(LOG_LEVELS[logLevel]>LOG_LEVELS.error){__cov_iBP1kQ8z999UngcSgLYqig.b['5'][0]++;__cov_iBP1kQ8z999UngcSgLYqig.s['29']++;return;}else{__cov_iBP1kQ8z999UngcSgLYqig.b['5'][1]++;}__cov_iBP1kQ8z999UngcSgLYqig.s['30']++;arguments[0]='['+filename+'] '+arguments[0];__cov_iBP1kQ8z999UngcSgLYqig.s['31']++;console.error.apply(console,arguments);};__cov_iBP1kQ8z999UngcSgLYqig.s['32']++;loggerInstance.replicants=function(){__cov_iBP1kQ8z999UngcSgLYqig.f['7']++;__cov_iBP1kQ8z999UngcSgLYqig.s['33']++;if(!logReplicants){__cov_iBP1kQ8z999UngcSgLYqig.b['6'][0]++;__cov_iBP1kQ8z999UngcSgLYqig.s['34']++;return;}else{__cov_iBP1kQ8z999UngcSgLYqig.b['6'][1]++;}__cov_iBP1kQ8z999UngcSgLYqig.s['35']++;arguments[0]='['+filename+'] '+arguments[0];__cov_iBP1kQ8z999UngcSgLYqig.s['36']++;console.info.apply(console,arguments);};__cov_iBP1kQ8z999UngcSgLYqig.s['37']++;return loggerInstance;};

},{}],3:[function(require,module,exports){
"use strict";
var __cov_WBTmtg_VFkWw8RfrqBJaHA = (Function('return this'))();
if (!__cov_WBTmtg_VFkWw8RfrqBJaHA.__coverage__) { __cov_WBTmtg_VFkWw8RfrqBJaHA.__coverage__ = {}; }
__cov_WBTmtg_VFkWw8RfrqBJaHA = __cov_WBTmtg_VFkWw8RfrqBJaHA.__coverage__;
if (!(__cov_WBTmtg_VFkWw8RfrqBJaHA['/Users/matt/Dev/nodecg/lib/browser/replicant.js'])) {
   __cov_WBTmtg_VFkWw8RfrqBJaHA['/Users/matt/Dev/nodecg/lib/browser/replicant.js'] = {"path":"/Users/matt/Dev/nodecg/lib/browser/replicant.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":1,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":1,"40":0,"41":1,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":1,"55":0,"56":1,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":1,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":1,"86":0,"87":0,"88":1,"89":0,"90":0,"91":0,"92":1,"93":0,"94":0,"95":0,"96":0,"97":0,"98":0,"99":0,"100":0,"101":0,"102":0,"103":0,"104":0,"105":0,"106":0,"107":0,"108":0,"109":0,"110":0,"111":0,"112":0,"113":1,"114":0,"115":0,"116":0,"117":0,"118":0,"119":0,"120":0,"121":0,"122":0,"123":0,"124":0,"125":0,"126":0,"127":0,"128":0,"129":0,"130":0,"131":0,"132":0,"133":0,"134":0,"135":0,"136":0,"137":0,"138":0,"139":0,"140":0,"141":0,"142":0,"143":0,"144":0,"145":0,"146":0,"147":0,"148":0,"149":0,"150":0,"151":0,"152":0,"153":0,"154":0,"155":0,"156":0,"157":0,"158":0,"159":0,"160":0,"161":0,"162":0,"163":0,"164":0,"165":0,"166":0,"167":0,"168":0,"169":0,"170":0,"171":0,"172":0,"173":0,"174":0,"175":1,"176":0,"177":0,"178":0,"179":0,"180":0,"181":0,"182":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0],"23":[0,0],"24":[0,0,0,0,0],"25":[0,0],"26":[0,0],"27":[0,0],"28":[0,0],"29":[0,0],"30":[0,0],"31":[0,0],"32":[0,0],"33":[0,0],"34":[0,0,0,0,0],"35":[0,0],"36":[0,0],"37":[0,0,0,0],"38":[0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0},"fnMap":{"1":{"name":"Replicant","line":17,"loc":{"start":{"line":17,"column":0},"end":{"line":17,"column":47}}},"2":{"name":"(anonymous_2)","line":57,"loc":{"start":{"line":57,"column":27},"end":{"line":57,"column":53}}},"3":{"name":"addToQueue","line":68,"loc":{"start":{"line":68,"column":4},"end":{"line":68,"column":34}}},"4":{"name":"processQueue","line":72,"loc":{"start":{"line":72,"column":4},"end":{"line":72,"column":28}}},"5":{"name":"(anonymous_5)","line":73,"loc":{"start":{"line":73,"column":22},"end":{"line":73,"column":37}}},"6":{"name":"(anonymous_6)","line":79,"loc":{"start":{"line":79,"column":13},"end":{"line":79,"column":24}}},"7":{"name":"(anonymous_7)","line":82,"loc":{"start":{"line":82,"column":13},"end":{"line":82,"column":32}}},"8":{"name":"doBrowserSetter","line":100,"loc":{"start":{"line":100,"column":4},"end":{"line":100,"column":39}}},"9":{"name":"doBrowserDeclare","line":109,"loc":{"start":{"line":109,"column":4},"end":{"line":109,"column":44}}},"10":{"name":"(anonymous_10)","line":113,"loc":{"start":{"line":113,"column":40},"end":{"line":113,"column":51}}},"11":{"name":"(anonymous_11)","line":119,"loc":{"start":{"line":119,"column":15},"end":{"line":119,"column":30}}},"12":{"name":"assignValue","line":144,"loc":{"start":{"line":144,"column":4},"end":{"line":144,"column":45}}},"13":{"name":"observeValue","line":155,"loc":{"start":{"line":155,"column":4},"end":{"line":155,"column":28}}},"14":{"name":"dispatchChanges","line":161,"loc":{"start":{"line":161,"column":4},"end":{"line":161,"column":38}}},"15":{"name":"(anonymous_15)","line":168,"loc":{"start":{"line":168,"column":11},"end":{"line":168,"column":37}}},"16":{"name":"onValueChange","line":176,"loc":{"start":{"line":176,"column":4},"end":{"line":176,"column":39}}},"17":{"name":"(anonymous_17)","line":178,"loc":{"start":{"line":178,"column":27},"end":{"line":178,"column":44}}},"18":{"name":"(anonymous_18)","line":179,"loc":{"start":{"line":179,"column":60},"end":{"line":179,"column":75}}},"19":{"name":"unobserveValue","line":238,"loc":{"start":{"line":238,"column":4},"end":{"line":238,"column":30}}},"20":{"name":"(anonymous_20)","line":245,"loc":{"start":{"line":245,"column":36},"end":{"line":245,"column":52}}},"21":{"name":"(anonymous_21)","line":258,"loc":{"start":{"line":258,"column":34},"end":{"line":258,"column":50}}},"22":{"name":"(anonymous_22)","line":272,"loc":{"start":{"line":272,"column":30},"end":{"line":272,"column":47}}},"23":{"name":"(anonymous_23)","line":299,"loc":{"start":{"line":299,"column":33},"end":{"line":299,"column":50}}},"24":{"name":"(anonymous_24)","line":326,"loc":{"start":{"line":326,"column":33},"end":{"line":326,"column":50}}},"25":{"name":"fullUpdate","line":340,"loc":{"start":{"line":340,"column":4},"end":{"line":340,"column":26}}},"26":{"name":"(anonymous_26)","line":341,"loc":{"start":{"line":341,"column":50},"end":{"line":341,"column":65}}},"27":{"name":"(anonymous_27)","line":348,"loc":{"start":{"line":348,"column":28},"end":{"line":348,"column":39}}},"28":{"name":"(anonymous_28)","line":351,"loc":{"start":{"line":351,"column":27},"end":{"line":351,"column":38}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":35}},"2":{"start":{"line":4,"column":0},"end":{"line":4,"column":50}},"3":{"start":{"line":5,"column":0},"end":{"line":5,"column":39}},"4":{"start":{"line":6,"column":0},"end":{"line":6,"column":40}},"5":{"start":{"line":7,"column":0},"end":{"line":7,"column":34}},"6":{"start":{"line":8,"column":0},"end":{"line":8,"column":29}},"7":{"start":{"line":9,"column":0},"end":{"line":9,"column":27}},"8":{"start":{"line":10,"column":0},"end":{"line":10,"column":28}},"9":{"start":{"line":13,"column":0},"end":{"line":13,"column":34}},"10":{"start":{"line":14,"column":0},"end":{"line":14,"column":27}},"11":{"start":{"line":15,"column":0},"end":{"line":15,"column":50}},"12":{"start":{"line":17,"column":0},"end":{"line":354,"column":1}},"13":{"start":{"line":18,"column":4},"end":{"line":20,"column":5}},"14":{"start":{"line":19,"column":8},"end":{"line":19,"column":77}},"15":{"start":{"line":22,"column":4},"end":{"line":24,"column":5}},"16":{"start":{"line":23,"column":8},"end":{"line":23,"column":84}},"17":{"start":{"line":27,"column":4},"end":{"line":27,"column":70}},"18":{"start":{"line":30,"column":4},"end":{"line":39,"column":5}},"19":{"start":{"line":31,"column":8},"end":{"line":35,"column":9}},"20":{"start":{"line":32,"column":12},"end":{"line":32,"column":52}},"21":{"start":{"line":34,"column":12},"end":{"line":34,"column":52}},"22":{"start":{"line":37,"column":8},"end":{"line":37,"column":40}},"23":{"start":{"line":38,"column":8},"end":{"line":38,"column":48}},"24":{"start":{"line":41,"column":4},"end":{"line":41,"column":20}},"25":{"start":{"line":42,"column":4},"end":{"line":42,"column":14}},"26":{"start":{"line":43,"column":4},"end":{"line":43,"column":22}},"27":{"start":{"line":44,"column":4},"end":{"line":44,"column":21}},"28":{"start":{"line":45,"column":4},"end":{"line":45,"column":25}},"29":{"start":{"line":46,"column":4},"end":{"line":46,"column":21}},"30":{"start":{"line":47,"column":4},"end":{"line":47,"column":22}},"31":{"start":{"line":48,"column":4},"end":{"line":48,"column":31}},"32":{"start":{"line":49,"column":4},"end":{"line":49,"column":24}},"33":{"start":{"line":50,"column":4},"end":{"line":50,"column":71}},"34":{"start":{"line":50,"column":48},"end":{"line":50,"column":71}},"35":{"start":{"line":57,"column":4},"end":{"line":61,"column":7}},"36":{"start":{"line":58,"column":8},"end":{"line":60,"column":9}},"37":{"start":{"line":59,"column":12},"end":{"line":59,"column":39}},"38":{"start":{"line":66,"column":4},"end":{"line":66,"column":19}},"39":{"start":{"line":68,"column":4},"end":{"line":70,"column":5}},"40":{"start":{"line":69,"column":8},"end":{"line":69,"column":41}},"41":{"start":{"line":72,"column":4},"end":{"line":76,"column":5}},"42":{"start":{"line":73,"column":8},"end":{"line":75,"column":11}},"43":{"start":{"line":74,"column":12},"end":{"line":74,"column":43}},"44":{"start":{"line":78,"column":4},"end":{"line":98,"column":7}},"45":{"start":{"line":80,"column":12},"end":{"line":80,"column":25}},"46":{"start":{"line":83,"column":12},"end":{"line":86,"column":13}},"47":{"start":{"line":84,"column":16},"end":{"line":84,"column":75}},"48":{"start":{"line":85,"column":16},"end":{"line":85,"column":29}},"49":{"start":{"line":88,"column":12},"end":{"line":88,"column":60}},"50":{"start":{"line":90,"column":12},"end":{"line":93,"column":13}},"51":{"start":{"line":91,"column":16},"end":{"line":91,"column":56}},"52":{"start":{"line":92,"column":16},"end":{"line":92,"column":23}},"53":{"start":{"line":95,"column":12},"end":{"line":95,"column":38}},"54":{"start":{"line":100,"column":4},"end":{"line":107,"column":5}},"55":{"start":{"line":101,"column":8},"end":{"line":106,"column":11}},"56":{"start":{"line":109,"column":4},"end":{"line":138,"column":5}},"57":{"start":{"line":110,"column":8},"end":{"line":110,"column":78}},"58":{"start":{"line":110,"column":71},"end":{"line":110,"column":78}},"59":{"start":{"line":112,"column":8},"end":{"line":112,"column":34}},"60":{"start":{"line":113,"column":8},"end":{"line":137,"column":11}},"61":{"start":{"line":114,"column":12},"end":{"line":136,"column":15}},"62":{"start":{"line":120,"column":16},"end":{"line":120,"column":113}},"63":{"start":{"line":121,"column":16},"end":{"line":121,"column":52}},"64":{"start":{"line":122,"column":16},"end":{"line":128,"column":17}},"65":{"start":{"line":123,"column":20},"end":{"line":123,"column":37}},"66":{"start":{"line":124,"column":20},"end":{"line":124,"column":41}},"67":{"start":{"line":125,"column":20},"end":{"line":125,"column":35}},"68":{"start":{"line":126,"column":20},"end":{"line":126,"column":59}},"69":{"start":{"line":127,"column":20},"end":{"line":127,"column":51}},"70":{"start":{"line":129,"column":16},"end":{"line":129,"column":41}},"71":{"start":{"line":130,"column":16},"end":{"line":130,"column":44}},"72":{"start":{"line":131,"column":16},"end":{"line":135,"column":17}},"73":{"start":{"line":132,"column":20},"end":{"line":132,"column":35}},"74":{"start":{"line":133,"column":23},"end":{"line":135,"column":17}},"75":{"start":{"line":134,"column":20},"end":{"line":134,"column":63}},"76":{"start":{"line":140,"column":4},"end":{"line":140,"column":40}},"77":{"start":{"line":144,"column":4},"end":{"line":153,"column":5}},"78":{"start":{"line":145,"column":8},"end":{"line":145,"column":25}},"79":{"start":{"line":146,"column":8},"end":{"line":146,"column":36}},"80":{"start":{"line":147,"column":8},"end":{"line":147,"column":25}},"81":{"start":{"line":148,"column":8},"end":{"line":148,"column":23}},"82":{"start":{"line":149,"column":8},"end":{"line":151,"column":9}},"83":{"start":{"line":150,"column":12},"end":{"line":150,"column":37}},"84":{"start":{"line":152,"column":8},"end":{"line":152,"column":45}},"85":{"start":{"line":155,"column":4},"end":{"line":159,"column":5}},"86":{"start":{"line":156,"column":8},"end":{"line":158,"column":9}},"87":{"start":{"line":157,"column":12},"end":{"line":157,"column":49}},"88":{"start":{"line":161,"column":4},"end":{"line":174,"column":5}},"89":{"start":{"line":162,"column":8},"end":{"line":173,"column":11}},"90":{"start":{"line":170,"column":12},"end":{"line":171,"column":41}},"91":{"start":{"line":172,"column":12},"end":{"line":172,"column":41}},"92":{"start":{"line":176,"column":4},"end":{"line":236,"column":5}},"93":{"start":{"line":177,"column":8},"end":{"line":177,"column":34}},"94":{"start":{"line":178,"column":8},"end":{"line":229,"column":11}},"95":{"start":{"line":179,"column":12},"end":{"line":182,"column":15}},"96":{"start":{"line":181,"column":16},"end":{"line":181,"column":48}},"97":{"start":{"line":186,"column":12},"end":{"line":186,"column":63}},"98":{"start":{"line":186,"column":53},"end":{"line":186,"column":63}},"99":{"start":{"line":188,"column":12},"end":{"line":188,"column":59}},"100":{"start":{"line":189,"column":12},"end":{"line":228,"column":13}},"101":{"start":{"line":191,"column":20},"end":{"line":195,"column":23}},"102":{"start":{"line":196,"column":20},"end":{"line":196,"column":26}},"103":{"start":{"line":198,"column":20},"end":{"line":203,"column":23}},"104":{"start":{"line":204,"column":20},"end":{"line":204,"column":26}},"105":{"start":{"line":206,"column":20},"end":{"line":214,"column":23}},"106":{"start":{"line":215,"column":20},"end":{"line":215,"column":26}},"107":{"start":{"line":217,"column":20},"end":{"line":221,"column":23}},"108":{"start":{"line":222,"column":20},"end":{"line":222,"column":26}},"109":{"start":{"line":224,"column":20},"end":{"line":227,"column":23}},"110":{"start":{"line":231,"column":8},"end":{"line":235,"column":9}},"111":{"start":{"line":232,"column":12},"end":{"line":232,"column":46}},"112":{"start":{"line":234,"column":12},"end":{"line":234,"column":60}},"113":{"start":{"line":238,"column":4},"end":{"line":242,"column":5}},"114":{"start":{"line":239,"column":8},"end":{"line":241,"column":9}},"115":{"start":{"line":240,"column":12},"end":{"line":240,"column":51}},"116":{"start":{"line":245,"column":4},"end":{"line":254,"column":7}},"117":{"start":{"line":246,"column":8},"end":{"line":246,"column":65}},"118":{"start":{"line":246,"column":58},"end":{"line":246,"column":65}},"119":{"start":{"line":247,"column":8},"end":{"line":247,"column":50}},"120":{"start":{"line":249,"column":8},"end":{"line":251,"column":9}},"121":{"start":{"line":250,"column":12},"end":{"line":250,"column":50}},"122":{"start":{"line":253,"column":8},"end":{"line":253,"column":50}},"123":{"start":{"line":258,"column":4},"end":{"line":338,"column":7}},"124":{"start":{"line":259,"column":8},"end":{"line":265,"column":9}},"125":{"start":{"line":259,"column":58},"end":{"line":259,"column":65}},"126":{"start":{"line":260,"column":13},"end":{"line":265,"column":9}},"127":{"start":{"line":261,"column":12},"end":{"line":262,"column":60}},"128":{"start":{"line":263,"column":12},"end":{"line":263,"column":25}},"129":{"start":{"line":264,"column":12},"end":{"line":264,"column":19}},"130":{"start":{"line":267,"column":8},"end":{"line":267,"column":49}},"131":{"start":{"line":269,"column":8},"end":{"line":269,"column":36}},"132":{"start":{"line":270,"column":8},"end":{"line":270,"column":48}},"133":{"start":{"line":271,"column":8},"end":{"line":271,"column":32}},"134":{"start":{"line":272,"column":8},"end":{"line":295,"column":11}},"135":{"start":{"line":273,"column":12},"end":{"line":294,"column":13}},"136":{"start":{"line":275,"column":20},"end":{"line":275,"column":58}},"137":{"start":{"line":276,"column":20},"end":{"line":276,"column":26}},"138":{"start":{"line":278,"column":20},"end":{"line":278,"column":75}},"139":{"start":{"line":279,"column":20},"end":{"line":279,"column":26}},"140":{"start":{"line":281,"column":20},"end":{"line":281,"column":68}},"141":{"start":{"line":282,"column":20},"end":{"line":282,"column":39}},"142":{"start":{"line":282,"column":30},"end":{"line":282,"column":39}},"143":{"start":{"line":283,"column":20},"end":{"line":283,"column":53}},"144":{"start":{"line":284,"column":20},"end":{"line":284,"column":52}},"145":{"start":{"line":285,"column":20},"end":{"line":285,"column":47}},"146":{"start":{"line":286,"column":20},"end":{"line":286,"column":60}},"147":{"start":{"line":287,"column":20},"end":{"line":287,"column":63}},"148":{"start":{"line":288,"column":20},"end":{"line":288,"column":26}},"149":{"start":{"line":290,"column":20},"end":{"line":290,"column":75}},"150":{"start":{"line":291,"column":20},"end":{"line":291,"column":26}},"151":{"start":{"line":293,"column":20},"end":{"line":293,"column":75}},"152":{"start":{"line":297,"column":8},"end":{"line":333,"column":9}},"153":{"start":{"line":298,"column":12},"end":{"line":298,"column":29}},"154":{"start":{"line":299,"column":12},"end":{"line":321,"column":15}},"155":{"start":{"line":300,"column":16},"end":{"line":320,"column":17}},"156":{"start":{"line":303,"column":24},"end":{"line":303,"column":76}},"157":{"start":{"line":304,"column":24},"end":{"line":304,"column":30}},"158":{"start":{"line":306,"column":24},"end":{"line":306,"column":69}},"159":{"start":{"line":307,"column":24},"end":{"line":307,"column":55}},"160":{"start":{"line":308,"column":24},"end":{"line":308,"column":58}},"161":{"start":{"line":309,"column":24},"end":{"line":309,"column":51}},"162":{"start":{"line":310,"column":24},"end":{"line":310,"column":64}},"163":{"start":{"line":311,"column":24},"end":{"line":311,"column":64}},"164":{"start":{"line":315,"column":24},"end":{"line":315,"column":44}},"165":{"start":{"line":316,"column":24},"end":{"line":316,"column":30}},"166":{"start":{"line":318,"column":24},"end":{"line":318,"column":59}},"167":{"start":{"line":319,"column":24},"end":{"line":319,"column":30}},"168":{"start":{"line":322,"column":12},"end":{"line":322,"column":27}},"169":{"start":{"line":326,"column":12},"end":{"line":332,"column":15}},"170":{"start":{"line":327,"column":16},"end":{"line":331,"column":17}},"171":{"start":{"line":329,"column":24},"end":{"line":329,"column":75}},"172":{"start":{"line":330,"column":24},"end":{"line":330,"column":30}},"173":{"start":{"line":336,"column":8},"end":{"line":336,"column":38}},"174":{"start":{"line":337,"column":8},"end":{"line":337,"column":59}},"175":{"start":{"line":340,"column":4},"end":{"line":345,"column":5}},"176":{"start":{"line":341,"column":8},"end":{"line":344,"column":11}},"177":{"start":{"line":342,"column":12},"end":{"line":342,"column":42}},"178":{"start":{"line":343,"column":12},"end":{"line":343,"column":51}},"179":{"start":{"line":348,"column":4},"end":{"line":350,"column":7}},"180":{"start":{"line":349,"column":8},"end":{"line":349,"column":35}},"181":{"start":{"line":351,"column":4},"end":{"line":353,"column":7}},"182":{"start":{"line":352,"column":8},"end":{"line":352,"column":32}}},"branchMap":{"1":{"line":18,"type":"if","locations":[{"start":{"line":18,"column":4},"end":{"line":18,"column":4}},{"start":{"line":18,"column":4},"end":{"line":18,"column":4}}]},"2":{"line":18,"type":"binary-expr","locations":[{"start":{"line":18,"column":8},"end":{"line":18,"column":13}},{"start":{"line":18,"column":17},"end":{"line":18,"column":41}}]},"3":{"line":22,"type":"if","locations":[{"start":{"line":22,"column":4},"end":{"line":22,"column":4}},{"start":{"line":22,"column":4},"end":{"line":22,"column":4}}]},"4":{"line":22,"type":"binary-expr","locations":[{"start":{"line":22,"column":8},"end":{"line":22,"column":15}},{"start":{"line":22,"column":19},"end":{"line":22,"column":45}}]},"5":{"line":30,"type":"if","locations":[{"start":{"line":30,"column":4},"end":{"line":30,"column":4}},{"start":{"line":30,"column":4},"end":{"line":30,"column":4}}]},"6":{"line":31,"type":"if","locations":[{"start":{"line":31,"column":8},"end":{"line":31,"column":8}},{"start":{"line":31,"column":8},"end":{"line":31,"column":8}}]},"7":{"line":43,"type":"binary-expr","locations":[{"start":{"line":43,"column":11},"end":{"line":43,"column":15}},{"start":{"line":43,"column":19},"end":{"line":43,"column":21}}]},"8":{"line":50,"type":"if","locations":[{"start":{"line":50,"column":4},"end":{"line":50,"column":4}},{"start":{"line":50,"column":4},"end":{"line":50,"column":4}}]},"9":{"line":58,"type":"if","locations":[{"start":{"line":58,"column":8},"end":{"line":58,"column":8}},{"start":{"line":58,"column":8},"end":{"line":58,"column":8}}]},"10":{"line":58,"type":"binary-expr","locations":[{"start":{"line":58,"column":12},"end":{"line":58,"column":30}},{"start":{"line":58,"column":34},"end":{"line":58,"column":60}}]},"11":{"line":83,"type":"if","locations":[{"start":{"line":83,"column":12},"end":{"line":83,"column":12}},{"start":{"line":83,"column":12},"end":{"line":83,"column":12}}]},"12":{"line":90,"type":"if","locations":[{"start":{"line":90,"column":12},"end":{"line":90,"column":12}},{"start":{"line":90,"column":12},"end":{"line":90,"column":12}}]},"13":{"line":110,"type":"if","locations":[{"start":{"line":110,"column":8},"end":{"line":110,"column":8}},{"start":{"line":110,"column":8},"end":{"line":110,"column":8}}]},"14":{"line":110,"type":"binary-expr","locations":[{"start":{"line":110,"column":12},"end":{"line":110,"column":38}},{"start":{"line":110,"column":42},"end":{"line":110,"column":69}}]},"15":{"line":122,"type":"if","locations":[{"start":{"line":122,"column":16},"end":{"line":122,"column":16}},{"start":{"line":122,"column":16},"end":{"line":122,"column":16}}]},"16":{"line":122,"type":"binary-expr","locations":[{"start":{"line":122,"column":20},"end":{"line":122,"column":51}},{"start":{"line":122,"column":55},"end":{"line":122,"column":80}}]},"17":{"line":131,"type":"if","locations":[{"start":{"line":131,"column":16},"end":{"line":131,"column":16}},{"start":{"line":131,"column":16},"end":{"line":131,"column":16}}]},"18":{"line":133,"type":"if","locations":[{"start":{"line":133,"column":23},"end":{"line":133,"column":23}},{"start":{"line":133,"column":23},"end":{"line":133,"column":23}}]},"19":{"line":149,"type":"if","locations":[{"start":{"line":149,"column":8},"end":{"line":149,"column":8}},{"start":{"line":149,"column":8},"end":{"line":149,"column":8}}]},"20":{"line":156,"type":"if","locations":[{"start":{"line":156,"column":8},"end":{"line":156,"column":8}},{"start":{"line":156,"column":8},"end":{"line":156,"column":8}}]},"21":{"line":156,"type":"binary-expr","locations":[{"start":{"line":156,"column":12},"end":{"line":156,"column":37}},{"start":{"line":156,"column":41},"end":{"line":156,"column":55}}]},"22":{"line":186,"type":"if","locations":[{"start":{"line":186,"column":12},"end":{"line":186,"column":12}},{"start":{"line":186,"column":12},"end":{"line":186,"column":12}}]},"23":{"line":186,"type":"binary-expr","locations":[{"start":{"line":186,"column":16},"end":{"line":186,"column":33}},{"start":{"line":186,"column":37},"end":{"line":186,"column":51}}]},"24":{"line":189,"type":"switch","locations":[{"start":{"line":190,"column":16},"end":{"line":196,"column":26}},{"start":{"line":197,"column":16},"end":{"line":204,"column":26}},{"start":{"line":205,"column":16},"end":{"line":215,"column":26}},{"start":{"line":216,"column":16},"end":{"line":222,"column":26}},{"start":{"line":223,"column":16},"end":{"line":227,"column":23}}]},"25":{"line":231,"type":"if","locations":[{"start":{"line":231,"column":8},"end":{"line":231,"column":8}},{"start":{"line":231,"column":8},"end":{"line":231,"column":8}}]},"26":{"line":239,"type":"if","locations":[{"start":{"line":239,"column":8},"end":{"line":239,"column":8}},{"start":{"line":239,"column":8},"end":{"line":239,"column":8}}]},"27":{"line":239,"type":"binary-expr","locations":[{"start":{"line":239,"column":12},"end":{"line":239,"column":37}},{"start":{"line":239,"column":41},"end":{"line":239,"column":55}}]},"28":{"line":246,"type":"if","locations":[{"start":{"line":246,"column":8},"end":{"line":246,"column":8}},{"start":{"line":246,"column":8},"end":{"line":246,"column":8}}]},"29":{"line":246,"type":"binary-expr","locations":[{"start":{"line":246,"column":12},"end":{"line":246,"column":30}},{"start":{"line":246,"column":34},"end":{"line":246,"column":56}}]},"30":{"line":249,"type":"if","locations":[{"start":{"line":249,"column":8},"end":{"line":249,"column":8}},{"start":{"line":249,"column":8},"end":{"line":249,"column":8}}]},"31":{"line":259,"type":"if","locations":[{"start":{"line":259,"column":8},"end":{"line":259,"column":8}},{"start":{"line":259,"column":8},"end":{"line":259,"column":8}}]},"32":{"line":259,"type":"binary-expr","locations":[{"start":{"line":259,"column":12},"end":{"line":259,"column":30}},{"start":{"line":259,"column":34},"end":{"line":259,"column":56}}]},"33":{"line":260,"type":"if","locations":[{"start":{"line":260,"column":13},"end":{"line":260,"column":13}},{"start":{"line":260,"column":13},"end":{"line":260,"column":13}}]},"34":{"line":273,"type":"switch","locations":[{"start":{"line":274,"column":16},"end":{"line":276,"column":26}},{"start":{"line":277,"column":16},"end":{"line":279,"column":26}},{"start":{"line":280,"column":16},"end":{"line":288,"column":26}},{"start":{"line":289,"column":16},"end":{"line":291,"column":26}},{"start":{"line":292,"column":16},"end":{"line":293,"column":75}}]},"35":{"line":282,"type":"if","locations":[{"start":{"line":282,"column":20},"end":{"line":282,"column":20}},{"start":{"line":282,"column":20},"end":{"line":282,"column":20}}]},"36":{"line":297,"type":"if","locations":[{"start":{"line":297,"column":8},"end":{"line":297,"column":8}},{"start":{"line":297,"column":8},"end":{"line":297,"column":8}}]},"37":{"line":300,"type":"switch","locations":[{"start":{"line":301,"column":20},"end":{"line":301,"column":31}},{"start":{"line":302,"column":20},"end":{"line":304,"column":30}},{"start":{"line":305,"column":20},"end":{"line":316,"column":30}},{"start":{"line":317,"column":20},"end":{"line":319,"column":30}}]},"38":{"line":327,"type":"switch","locations":[{"start":{"line":328,"column":20},"end":{"line":330,"column":30}}]}}};
}
__cov_WBTmtg_VFkWw8RfrqBJaHA = __cov_WBTmtg_VFkWw8RfrqBJaHA['/Users/matt/Dev/nodecg/lib/browser/replicant.js'];
__cov_WBTmtg_VFkWw8RfrqBJaHA.s['1']++;var inherits=require('inherits');__cov_WBTmtg_VFkWw8RfrqBJaHA.s['2']++;var EventEmitter=require('events').EventEmitter;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['3']++;var Nested=require('nested-observe');__cov_WBTmtg_VFkWw8RfrqBJaHA.s['4']++;var objectPath=require('object-path');__cov_WBTmtg_VFkWw8RfrqBJaHA.s['5']++;var equal=require('deep-equal');__cov_WBTmtg_VFkWw8RfrqBJaHA.s['6']++;var clone=require('clone');__cov_WBTmtg_VFkWw8RfrqBJaHA.s['7']++;var uuid=require('uuid');__cov_WBTmtg_VFkWw8RfrqBJaHA.s['8']++;var declaredReplicants={};__cov_WBTmtg_VFkWw8RfrqBJaHA.s['9']++;inherits(Replicant,EventEmitter);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['10']++;module.exports=Replicant;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['11']++;Replicant.declaredReplicants=declaredReplicants;function Replicant(name,bundle,opts,socket){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['1']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['13']++;if((__cov_WBTmtg_VFkWw8RfrqBJaHA.b['2'][0]++,!name)||(__cov_WBTmtg_VFkWw8RfrqBJaHA.b['2'][1]++,typeof name!=='string')){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['1'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['14']++;throw new Error('Must supply a name when instantiating a Replicant');}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['1'][1]++;}__cov_WBTmtg_VFkWw8RfrqBJaHA.s['15']++;if((__cov_WBTmtg_VFkWw8RfrqBJaHA.b['4'][0]++,!bundle)||(__cov_WBTmtg_VFkWw8RfrqBJaHA.b['4'][1]++,typeof bundle!=='string')){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['3'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['16']++;throw new Error('Must supply a bundle name when instantiating a Replicant');}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['3'][1]++;}__cov_WBTmtg_VFkWw8RfrqBJaHA.s['17']++;var log=require('./logger')('Replicant/'+bundle+'.'+name);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['18']++;if(declaredReplicants.hasOwnProperty(bundle)){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['5'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['19']++;if(declaredReplicants[bundle].hasOwnProperty(name)){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['6'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['20']++;return declaredReplicants[bundle][name];}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['6'][1]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['21']++;declaredReplicants[bundle][name]=this;}}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['5'][1]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['22']++;declaredReplicants[bundle]={};__cov_WBTmtg_VFkWw8RfrqBJaHA.s['23']++;declaredReplicants[bundle][name]=this;}__cov_WBTmtg_VFkWw8RfrqBJaHA.s['24']++;var self=this;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['25']++;var value;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['26']++;opts=(__cov_WBTmtg_VFkWw8RfrqBJaHA.b['7'][0]++,opts)||(__cov_WBTmtg_VFkWw8RfrqBJaHA.b['7'][1]++,{});__cov_WBTmtg_VFkWw8RfrqBJaHA.s['27']++;this.name=name;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['28']++;this.bundle=bundle;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['29']++;this.opts=opts;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['30']++;this.revision=0;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['31']++;this.status='undeclared';__cov_WBTmtg_VFkWw8RfrqBJaHA.s['32']++;this.id=uuid.v4();__cov_WBTmtg_VFkWw8RfrqBJaHA.s['33']++;if(typeof opts.persistent==='undefined'){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['8'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['34']++;opts.persistent=true;}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['8'][1]++;}__cov_WBTmtg_VFkWw8RfrqBJaHA.s['35']++;this.on('newListener',function(event,listener){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['2']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['36']++;if((__cov_WBTmtg_VFkWw8RfrqBJaHA.b['10'][0]++,event==='change')&&(__cov_WBTmtg_VFkWw8RfrqBJaHA.b['10'][1]++,self.status==='declared')){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['9'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['37']++;listener(undefined,value);}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['9'][1]++;}});__cov_WBTmtg_VFkWw8RfrqBJaHA.s['38']++;var queue=[];function addToQueue(fn,args){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['3']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['40']++;queue.push({fn:fn,args:args});}function processQueue(){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['4']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['42']++;queue.forEach(function(item){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['5']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['43']++;item.fn.apply(this,item.args);});}__cov_WBTmtg_VFkWw8RfrqBJaHA.s['44']++;Object.defineProperty(this,'value',{get:function(){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['6']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['45']++;return value;},set:function(newValue){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['7']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['46']++;if(newValue===value){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['11'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['47']++;log.replicants('value unchanged, no action will be taken');__cov_WBTmtg_VFkWw8RfrqBJaHA.s['48']++;return value;}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['11'][1]++;}__cov_WBTmtg_VFkWw8RfrqBJaHA.s['49']++;log.replicants('running setter with',newValue);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['50']++;if(self.status!=='declared'){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['12'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['51']++;addToQueue(doBrowserSetter,[newValue]);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['52']++;return;}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['12'][1]++;}__cov_WBTmtg_VFkWw8RfrqBJaHA.s['53']++;doBrowserSetter(newValue);},enumerable:true});function doBrowserSetter(newValue){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['8']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['55']++;socket.emit('assignReplicant',{name:name,bundle:bundle,value:newValue,originatorId:self.id});}function doBrowserDeclare(defaultValue){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['9']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['57']++;if((__cov_WBTmtg_VFkWw8RfrqBJaHA.b['14'][0]++,self.status==='declared')||(__cov_WBTmtg_VFkWw8RfrqBJaHA.b['14'][1]++,self.status==='declaring')){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['13'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['58']++;return;}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['13'][1]++;}__cov_WBTmtg_VFkWw8RfrqBJaHA.s['59']++;self.status='declaring';__cov_WBTmtg_VFkWw8RfrqBJaHA.s['60']++;socket.emit('joinRoom',bundle,function(){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['10']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['61']++;socket.emit('declareReplicant',{name:name,bundle:bundle,defaultValue:defaultValue,persistent:opts.persistent},function(data){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['11']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['62']++;log.replicants('declareReplicant callback (value: %s, revision: %s)',data.value,data.revision);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['63']++;var didMismatchReassignment=false;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['64']++;if((__cov_WBTmtg_VFkWw8RfrqBJaHA.b['16'][0]++,self.revision!==data.revision)||(__cov_WBTmtg_VFkWw8RfrqBJaHA.b['16'][1]++,!equal(value,data.value))){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['15'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['65']++;unobserveValue();__cov_WBTmtg_VFkWw8RfrqBJaHA.s['66']++;value=defaultValue;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['67']++;observeValue();__cov_WBTmtg_VFkWw8RfrqBJaHA.s['68']++;assignValue(data.value,data.revision);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['69']++;didMismatchReassignment=true;}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['15'][1]++;}__cov_WBTmtg_VFkWw8RfrqBJaHA.s['70']++;self.status='declared';__cov_WBTmtg_VFkWw8RfrqBJaHA.s['71']++;self.emit('declared',data);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['72']++;if(queue.length>0){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['17'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['73']++;processQueue();}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['17'][1]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['74']++;if(!didMismatchReassignment){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['18'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['75']++;self.emit('change',undefined,data.value);}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['18'][1]++;}}});});}__cov_WBTmtg_VFkWw8RfrqBJaHA.s['76']++;doBrowserDeclare(opts.defaultValue);function assignValue(newValue,revision){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['12']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['78']++;unobserveValue();__cov_WBTmtg_VFkWw8RfrqBJaHA.s['79']++;var oldValue=clone(value);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['80']++;value=newValue;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['81']++;observeValue();__cov_WBTmtg_VFkWw8RfrqBJaHA.s['82']++;if(typeof revision!=='undefined'){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['19'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['83']++;self.revision=revision;}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['19'][1]++;}__cov_WBTmtg_VFkWw8RfrqBJaHA.s['84']++;self.emit('change',oldValue,value);}function observeValue(){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['13']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['86']++;if((__cov_WBTmtg_VFkWw8RfrqBJaHA.b['21'][0]++,typeof value==='object')&&(__cov_WBTmtg_VFkWw8RfrqBJaHA.b['21'][1]++,value!==null)){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['20'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['87']++;Nested.observe(value,onValueChange);}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['20'][1]++;}}function dispatchChanges(changes){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['14']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['89']++;socket.emit('changeReplicant',{name:name,bundle:bundle,changes:changes,revision:self.revision,originatorId:self.id},function(value,revision){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['15']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['90']++;log.replicants('Not at head revision (ours %s, theirs %s). Change aborted & head revision applied.',self.revision,revision);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['91']++;assignValue(value,revision);});}function onValueChange(rawChanges){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['16']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['93']++;var formattedChanges=[];__cov_WBTmtg_VFkWw8RfrqBJaHA.s['94']++;rawChanges.forEach(function(change){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['17']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['95']++;var path=change.path.substr(1).split('/').map(function(part){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['18']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['96']++;return part.replace(/\~1/g,'/');});__cov_WBTmtg_VFkWw8RfrqBJaHA.s['97']++;if((__cov_WBTmtg_VFkWw8RfrqBJaHA.b['23'][0]++,path.length===1)&&(__cov_WBTmtg_VFkWw8RfrqBJaHA.b['23'][1]++,path[0]==='')){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['22'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['98']++;path=[];}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['22'][1]++;}__cov_WBTmtg_VFkWw8RfrqBJaHA.s['99']++;var newVal=objectPath.get(change.root,path);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['100']++;switch(change.type){case'add':__cov_WBTmtg_VFkWw8RfrqBJaHA.b['24'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['101']++;formattedChanges.push({type:'add',path:path,newValue:newVal});__cov_WBTmtg_VFkWw8RfrqBJaHA.s['102']++;break;case'update':__cov_WBTmtg_VFkWw8RfrqBJaHA.b['24'][1]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['103']++;formattedChanges.push({type:'update',path:path,oldValue:change.oldValue,newValue:newVal});__cov_WBTmtg_VFkWw8RfrqBJaHA.s['104']++;break;case'splice':__cov_WBTmtg_VFkWw8RfrqBJaHA.b['24'][2]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['105']++;formattedChanges.push({type:'splice',path:path,index:change.index,removed:change.removed,removedCount:change.removed.length,added:change.object.slice(change.index,change.index+change.addedCount),addedCount:change.addedCount});__cov_WBTmtg_VFkWw8RfrqBJaHA.s['106']++;break;case'delete':__cov_WBTmtg_VFkWw8RfrqBJaHA.b['24'][3]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['107']++;formattedChanges.push({type:'delete',path:path,oldValue:change.oldValue});__cov_WBTmtg_VFkWw8RfrqBJaHA.s['108']++;break;default:__cov_WBTmtg_VFkWw8RfrqBJaHA.b['24'][4]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['109']++;formattedChanges.push({type:'other',path:path});}});__cov_WBTmtg_VFkWw8RfrqBJaHA.s['110']++;if(self.status==='declared'){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['25'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['111']++;dispatchChanges(formattedChanges);}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['25'][1]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['112']++;addToQueue(dispatchChanges,[formattedChanges]);}}function unobserveValue(){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['19']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['114']++;if((__cov_WBTmtg_VFkWw8RfrqBJaHA.b['27'][0]++,typeof value==='object')&&(__cov_WBTmtg_VFkWw8RfrqBJaHA.b['27'][1]++,value!==null)){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['26'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['115']++;Nested.unobserve(value,onValueChange);}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['26'][1]++;}}__cov_WBTmtg_VFkWw8RfrqBJaHA.s['116']++;socket.on('replicantAssigned',function(data){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['20']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['117']++;if((__cov_WBTmtg_VFkWw8RfrqBJaHA.b['29'][0]++,data.name!==name)||(__cov_WBTmtg_VFkWw8RfrqBJaHA.b['29'][1]++,data.bundle!==bundle)){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['28'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['118']++;return;}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['28'][1]++;}__cov_WBTmtg_VFkWw8RfrqBJaHA.s['119']++;log.replicants('replicantAssigned',data);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['120']++;if(data.originatorId===self.id){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['30'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['121']++;self.emit('assignmentAccepted',data);}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['30'][1]++;}__cov_WBTmtg_VFkWw8RfrqBJaHA.s['122']++;assignValue(data.newValue,data.revision);});__cov_WBTmtg_VFkWw8RfrqBJaHA.s['123']++;socket.on('replicantChanged',function(data){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['21']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['124']++;if((__cov_WBTmtg_VFkWw8RfrqBJaHA.b['32'][0]++,data.name!==name)||(__cov_WBTmtg_VFkWw8RfrqBJaHA.b['32'][1]++,data.bundle!==bundle)){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['31'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['125']++;return;}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['31'][1]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['126']++;if(data.revision!==self.revision+1){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['33'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['127']++;log.replicants('[%s] Replicant "%s" not at head revision (ours %s, theirs %s), fetching latest...',bundle,name,self.revision,data.revision);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['128']++;fullUpdate();__cov_WBTmtg_VFkWw8RfrqBJaHA.s['129']++;return;}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['33'][1]++;}}__cov_WBTmtg_VFkWw8RfrqBJaHA.s['130']++;log.replicants('replicantChanged',data);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['131']++;var oldValue=clone(value);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['132']++;var replayChanges=clone(data.changes);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['133']++;replayChanges.reverse();__cov_WBTmtg_VFkWw8RfrqBJaHA.s['134']++;replayChanges.forEach(function(change){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['22']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['135']++;switch(change.type){case'add':__cov_WBTmtg_VFkWw8RfrqBJaHA.b['34'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['136']++;objectPath.del(oldValue,change.path);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['137']++;break;case'update':__cov_WBTmtg_VFkWw8RfrqBJaHA.b['34'][1]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['138']++;objectPath.set(oldValue,change.path,change.oldValue);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['139']++;break;case'splice':__cov_WBTmtg_VFkWw8RfrqBJaHA.b['34'][2]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['140']++;var arr=objectPath.get(oldValue,change.path);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['141']++;if(!arr){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['35'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['142']++;arr=[];}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['35'][1]++;}__cov_WBTmtg_VFkWw8RfrqBJaHA.s['143']++;var args=clone(change.removed);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['144']++;args.unshift(change.addedCount);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['145']++;args.unshift(change.index);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['146']++;Array.prototype.splice.apply(arr,args);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['147']++;objectPath.set(oldValue,change.path,arr);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['148']++;break;case'delete':__cov_WBTmtg_VFkWw8RfrqBJaHA.b['34'][3]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['149']++;objectPath.set(oldValue,change.path,change.oldValue);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['150']++;break;default:__cov_WBTmtg_VFkWw8RfrqBJaHA.b['34'][4]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['151']++;objectPath.set(oldValue,change.path,change.oldValue);}});__cov_WBTmtg_VFkWw8RfrqBJaHA.s['152']++;if(data.originatorId!==self.id){__cov_WBTmtg_VFkWw8RfrqBJaHA.b['36'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['153']++;unobserveValue();__cov_WBTmtg_VFkWw8RfrqBJaHA.s['154']++;data.changes.forEach(function(change){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['23']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['155']++;switch(change.type){case'add':__cov_WBTmtg_VFkWw8RfrqBJaHA.b['37'][0]++;case'update':__cov_WBTmtg_VFkWw8RfrqBJaHA.b['37'][1]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['156']++;objectPath.set(value,change.path,change.newValue);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['157']++;break;case'splice':__cov_WBTmtg_VFkWw8RfrqBJaHA.b['37'][2]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['158']++;var arr=objectPath.get(value,change.path);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['159']++;var args=clone(change.added);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['160']++;args.unshift(change.removedCount);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['161']++;args.unshift(change.index);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['162']++;Array.prototype.splice.apply(arr,args);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['163']++;objectPath.set(value,change.path,arr);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['164']++;change.object=arr;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['165']++;break;case'delete':__cov_WBTmtg_VFkWw8RfrqBJaHA.b['37'][3]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['166']++;objectPath.del(value,change.path);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['167']++;break;}});__cov_WBTmtg_VFkWw8RfrqBJaHA.s['168']++;observeValue();}else{__cov_WBTmtg_VFkWw8RfrqBJaHA.b['36'][1]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['169']++;data.changes.forEach(function(change){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['24']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['170']++;switch(change.type){case'splice':__cov_WBTmtg_VFkWw8RfrqBJaHA.b['38'][0]++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['171']++;change.object=objectPath.get(value,change.path);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['172']++;break;}});}__cov_WBTmtg_VFkWw8RfrqBJaHA.s['173']++;self.revision=data.revision;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['174']++;self.emit('change',oldValue,value,data.changes);});function fullUpdate(){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['25']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['176']++;window.NodeCG.readReplicant(name,bundle,function(data){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['26']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['177']++;self.emit('fullUpdate',data);__cov_WBTmtg_VFkWw8RfrqBJaHA.s['178']++;assignValue(data.value,data.revision);});}__cov_WBTmtg_VFkWw8RfrqBJaHA.s['179']++;socket.on('disconnect',function(){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['27']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['180']++;self.status='undeclared';});__cov_WBTmtg_VFkWw8RfrqBJaHA.s['181']++;socket.on('reconnect',function(){__cov_WBTmtg_VFkWw8RfrqBJaHA.f['28']++;__cov_WBTmtg_VFkWw8RfrqBJaHA.s['182']++;doBrowserDeclare(value);});}

},{"./logger":2,"clone":6,"deep-equal":7,"events":10,"inherits":13,"nested-observe":15,"object-path":18,"uuid":20}],4:[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],5:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('is-array')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var rootParent = {}

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
 *     on objects.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

function typedArraySupport () {
  function Bar () {}
  try {
    var arr = new Uint8Array(1)
    arr.foo = function () { return 42 }
    arr.constructor = Bar
    return arr.foo() === 42 && // typed array instances can be augmented
        arr.constructor === Bar && // constructor can be set
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (arg) {
  if (!(this instanceof Buffer)) {
    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
    if (arguments.length > 1) return new Buffer(arg, arguments[1])
    return new Buffer(arg)
  }

  this.length = 0
  this.parent = undefined

  // Common case.
  if (typeof arg === 'number') {
    return fromNumber(this, arg)
  }

  // Slightly less common case.
  if (typeof arg === 'string') {
    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
  }

  // Unusual.
  return fromObject(this, arg)
}

function fromNumber (that, length) {
  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < length; i++) {
      that[i] = 0
    }
  }
  return that
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

  // Assumption: byteLength() return value is always < kMaxLength.
  var length = byteLength(string, encoding) | 0
  that = allocate(that, length)

  that.write(string, encoding)
  return that
}

function fromObject (that, object) {
  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

  if (isArray(object)) return fromArray(that, object)

  if (object == null) {
    throw new TypeError('must start with number, buffer, array or string')
  }

  if (typeof ArrayBuffer !== 'undefined') {
    if (object.buffer instanceof ArrayBuffer) {
      return fromTypedArray(that, object)
    }
    if (object instanceof ArrayBuffer) {
      return fromArrayBuffer(that, object)
    }
  }

  if (object.length) return fromArrayLike(that, object)

  return fromJsonObject(that, object)
}

function fromBuffer (that, buffer) {
  var length = checked(buffer.length) | 0
  that = allocate(that, length)
  buffer.copy(that, 0, 0, length)
  return that
}

function fromArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Duplicate of fromArray() to keep fromArray() monomorphic.
function fromTypedArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  // Truncating the elements is probably not what people expect from typed
  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
  // of the old Buffer constructor.
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    array.byteLength
    that = Buffer._augment(new Uint8Array(array))
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromTypedArray(that, new Uint8Array(array))
  }
  return that
}

function fromArrayLike (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
// Returns a zero-length buffer for inputs that don't conform to the spec.
function fromJsonObject (that, object) {
  var array
  var length = 0

  if (object.type === 'Buffer' && isArray(object.data)) {
    array = object.data
    length = checked(array.length) | 0
  }
  that = allocate(that, length)

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
}

function allocate (that, length) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = Buffer._augment(new Uint8Array(length))
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that.length = length
    that._isBuffer = true
  }

  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
  if (fromPool) that.parent = rootParent

  return that
}

function checked (length) {
  // Note: cannot use `length < kMaxLength` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (subject, encoding) {
  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

  var buf = new Buffer(subject, encoding)
  delete buf.parent
  return buf
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  var i = 0
  var len = Math.min(x, y)
  while (i < len) {
    if (a[i] !== b[i]) break

    ++i
  }

  if (i !== len) {
    x = a[i]
    y = b[i]
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

  if (list.length === 0) {
    return new Buffer(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; i++) {
      length += list[i].length
    }
  }

  var buf = new Buffer(length)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

function byteLength (string, encoding) {
  if (typeof string !== 'string') string = '' + string

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'binary':
      // Deprecated
      case 'raw':
      case 'raws':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

// pre-set for values that may exist in the future
Buffer.prototype.length = undefined
Buffer.prototype.parent = undefined

function slowToString (encoding, start, end) {
  var loweredCase = false

  start = start | 0
  end = end === undefined || end === Infinity ? this.length : end | 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return 0
  return Buffer.compare(this, b)
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
  byteOffset >>= 0

  if (this.length === 0) return -1
  if (byteOffset >= this.length) return -1

  // Negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

  if (typeof val === 'string') {
    if (val.length === 0) return -1 // special case: looking for empty string always fails
    return String.prototype.indexOf.call(this, val, byteOffset)
  }
  if (Buffer.isBuffer(val)) {
    return arrayIndexOf(this, val, byteOffset)
  }
  if (typeof val === 'number') {
    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
    }
    return arrayIndexOf(this, [ val ], byteOffset)
  }

  function arrayIndexOf (arr, val, byteOffset) {
    var foundIndex = -1
    for (var i = 0; byteOffset + i < arr.length; i++) {
      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
      } else {
        foundIndex = -1
      }
    }
    return -1
  }

  throw new TypeError('val must be string, number or Buffer')
}

// `get` is deprecated
Buffer.prototype.get = function get (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` is deprecated
Buffer.prototype.set = function set (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) throw new Error('Invalid hex string')
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    var swap = encoding
    encoding = offset
    offset = length | 0
    length = swap
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'binary':
        return binaryWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function binarySlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
  }

  if (newBuf.length) newBuf.parent = this.parent || this

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
  if (offset < 0) throw new RangeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; i--) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; i++) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), targetStart)
  }

  return len
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function fill (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new RangeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function _augment (arr) {
  arr.constructor = Buffer
  arr._isBuffer = true

  // save reference to original Uint8Array set method before overwriting
  arr._set = arr.set

  // deprecated
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.indexOf = BP.indexOf
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUIntLE = BP.readUIntLE
  arr.readUIntBE = BP.readUIntBE
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readIntLE = BP.readIntLE
  arr.readIntBE = BP.readIntBE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUIntLE = BP.writeUIntLE
  arr.writeUIntBE = BP.writeUIntBE
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeIntLE = BP.writeIntLE
  arr.writeIntBE = BP.writeIntBE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; i++) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"base64-js":4,"ieee754":12,"is-array":14}],6:[function(require,module,exports){
(function (Buffer){
var clone = (function() {
'use strict';

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
*/
function clone(parent, circular, depth, prototype) {
  var filter;
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    filter = circular.filter;
    circular = circular.circular
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth == 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      child = new Buffer(parent.length);
      parent.copy(child);
      return child;
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
};
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
};
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
};
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
};
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
};
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}

}).call(this,require("buffer").Buffer)

},{"buffer":5}],7:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":8,"./lib/keys.js":9}],8:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],9:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],10:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],11:[function(require,module,exports){

},{}],12:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],13:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],14:[function(require,module,exports){

/**
 * isArray
 */

var isArray = Array.isArray;

/**
 * toString
 */

var str = Object.prototype.toString;

/**
 * Whether or not the given `val`
 * is an array.
 *
 * example:
 *
 *        isArray([]);
 *        // > true
 *        isArray(arguments);
 *        // > false
 *        isArray('');
 *        // > false
 *
 * @param {mixed} val
 * @return {bool}
 */

module.exports = isArray || function (val) {
  return !! val && '[object Array]' == str.call(val);
};

},{}],15:[function(require,module,exports){
module.exports = require('./lib')['default']
},{"./lib":16}],16:[function(require,module,exports){
"use strict";
var utils$$ = require("./utils");

// whether to log exceptions thrown during change record delivery
var debug = false;

// This weak map is used for `.deliverChangeRecords(callback)` calls, where the
// provided callback has to mapped to its corresponding delegate.
// <callback, delegate>
var delegates = new WeakMap;

// When using `.observe(obj, callback)`, instead of forwarding the provided
// `callback` to `Object.observe(obj, callback)` directly, a delegate for the
// `callback` is created. This delegate transforms changes before forwarding
// them to the actual `callback`.
var Delegate = function(callback) {
  this.callback  = callback
  this.observers = new utils$$.WeakMVMap

  var self = this
  this.handleChangeRecords = function(records) {
    try {
      var changes = records.map(self.transform, self)
      changes = Array.prototype.concat.apply([], changes) // flatten
      self.callback(changes)
    } catch (err) {
      if (debug) console.error(err.stack)
    }
  }
}

// This method transforms the received change record with using the
// corresponding observer for the object that got changed.
Delegate.prototype.transform = function(record) {
  if (!this.observers.has(record.object)) {
    return []
  }

  var observers = this.observers.get(record.object)
  observers = observers.filter(function(value, index, self) {
    return self.indexOf(value) === index
  })
  return observers.map(function(observer) {
    return observer.transform(record)
  })
}

// Each callback/object pair gets its own observer, which is used to track
// positions of nested objects and transforms change records accordingly.
var Observer = function(root, delegate, accept) {
  this.root     = root
  this.delegate = delegate
  this.callback = delegate.handleChangeRecords
  this.accept   = accept
  this.parents  = new utils$$.ParentsMapping
}

// Recursively observe an object and its nested objects.
Observer.prototype.observe = function(obj, parent, key, visited) {
  if (!obj || typeof obj !== 'object') {
    return
  }

  if (!visited) {
    visited = new WeakMap
  }

  if (visited.has(obj)) {
    return
  }

  visited.set(obj, true)

  // if the object is already observed, i.e., already somewhere else in the
  // nested structure -> do not observe it again
  if (!this.delegate.observers.has(obj, this)) {
    if (Array.isArray(obj) && !this.accept) {
      Object.observe(obj, this.callback, ['add', 'update', 'delete', 'splice'])
    } else {
      Object.observe(obj, this.callback, this.accept)
    }
  }

  // track parent and belonging
  this.parents.add(obj, parent, key)
  this.delegate.observers.add(obj, this)

  // traverse the properties to find nested objects and observe them, too
  var isArray = Array.isArray(obj)
  for (var prop in obj) {
    if (typeof obj[prop] === 'object') {
      this.observe(obj[prop], obj, isArray ? Array : prop, visited)
    }
  }

  if (typeof obj.entries === 'function') {
    var entries = obj.entries()
    if (typeof entries.next === 'function') {
      // for (var pair of entries)
      var pair
      while ((pair = entries.next()).done === false) {
        if (typeof pair.value[1] === 'object') {
          this.observe(pair.value[1], obj, pair.value[0], visited)
        }
      }
    }
  }
}

// Recursively unobserve an object and its nested objects.
Observer.prototype.unobserve = function(obj, parent, key) {
  if (obj === undefined) obj = this.root
  else if (!obj) return

  if (!this.delegate.observers.has(obj, this)) {
    return
  }

  // clean up
  this.parents.remove(obj, parent, key)
  this.delegate.observers.remove(obj, this)

  if (!this.delegate.observers.has(obj)) {
    Object.unobserve(obj, this.callback)
  }

  // traverse the properties to find nested objects and unobserve them, too
  var isArray = Array.isArray(obj)
  for (var prop in obj) {
    if (typeof obj[prop] === 'object') {
      this.unobserve(obj[prop], obj, isArray ? Array : prop)
    }
  }
}

// Transform a change record, ie., add the following properties:
// - **root** - the root of the nested structure
// - **path** - a [JSON Pointer](http://tools.ietf.org/html/rfc6901)
//              (absolute from the root) to the changed property
Observer.prototype.transform = function(change) {
  var self = this

  var record = {
    root: this.root,
    get path() {
      var path = self.parents.path(change.object)
      if (change.name) path.push(change.name)
      return '/' + path.map(function(k) {
        return k.toString().replace(/~/g, '~0').replace(/\//g, '~1')
      }).join('/')
    }
  }

  // the original change record ist not extensible -> copy
  for (var prop in change) {
    record[prop] = change[prop]
  }

  // unobserve deleted/replaced objects
  var deleted = change.oldValue && [change.oldValue] || change.removed || []
  deleted.forEach(function(oldValue, i) {
    if (oldValue === null || typeof oldValue !== 'object') {
      return
    }

    this.unobserve(oldValue, change.object, change.name || change.index + i)
  }, this)

  // observe added/updated objects
  function handleChange(value, parent, key) {
    if (typeof value === 'object') {
      var desc = key !== Array && Object.getOwnPropertyDescriptor(parent, key)
      if (!desc || desc.enumerable === true) {
        self.observe(value, parent, key)
      } else {
        self.unobserve(value, parent, key)
      }
    }
  }

  if (change.name) {
    if (change.name in change.object) {
      handleChange(change.object[change.name], change.object, change.name)
    } else if (typeof change.object.get === 'function') {
      handleChange(change.object.get(change.name), change.object, change.name)
    }
  } else if (change.type === 'splice' && change.addedCount) {
    var added = change.object.slice(change.index, change.index + change.addedCount)
    added.forEach(function(value) {
      handleChange(value, change.object, Array)
    })
  }

  Object.preventExtensions(record)

  return record
}

exports["default"] = {
  // Corresponds to `Object.observe()` but for nested objects.
  observe: function observe(obj, callback, accept) {
    var delegate

    if (!delegates.has(callback)) {
      delegate = new Delegate(callback)
      delegates.set(callback, delegate)
    } else {
      delegate = delegates.get(callback)
    }

    var observers = delegate.observers
    if (observers.has(obj)) {
      return
    }

    var observer = new Observer(obj, delegate, accept)
    observer.observe(obj)
  },

  // Corresponds to `Object.unobserve()` but for nested objects.
  unobserve: function unobserve(obj, callback) {
    if (!delegates.has(callback)) return
    var delegate = delegates.get(callback)

    if (!delegate.observers.has(obj)) {
      return
    }

    var observers = delegate.observers.get(obj)
    observers.forEach(function(observer) {
      observer.unobserve()
    })
  },

  // Corresponds to `Object.deliverChangeRecords()` but for nested objects.
  deliverChangeRecords: function deliverChangeRecords(callback) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function, given: ' + callback)
    }

    if (!delegates.has(callback)) return

    var delegate = delegates.get(callback)
    Object.deliverChangeRecords(delegate.handleChangeRecords)
  },

  get debug() {
    return debug
  },

  set debug(val) {
    debug = val
  }
};
},{"./utils":17}],17:[function(require,module,exports){
"use strict";
var WeakMVMap = function() {
  this.map = new WeakMap
}

WeakMVMap.prototype.get = function(key) {
  return this.map.get(key)
}

WeakMVMap.prototype.has = function(key, value) {
  if (!this.map.has(key)) return false
  var values = this.map.get(key)
  if (value === undefined && values.length) {
    return true
  }
  return values.indexOf(value) > -1
}

WeakMVMap.prototype.add = function(key, value) {
  if (!this.map.has(key)) {
    this.map.set(key, [])
  }

  var values = this.map.get(key)
  values.push(value)
}

WeakMVMap.prototype.remove = function(key, value) {
  var values = this.map.get(key)

  var index = values.indexOf(value)
  values.splice(index, 1)

  // if the set is empty, remove it from the WeakMap
  if (!values.length) this.map.delete(key)
}

var ParentsMapping = function() {
  this.mapping = new WeakMap
}

ParentsMapping.prototype.add = function(obj, parent, key) {
  if (!parent || key === undefined) return

  if (!this.mapping.has(obj)) {
    this.mapping.set(obj, [])
  }

  var parents = this.mapping.get(obj)
  parents.push({ obj: parent, key: key })
}

ParentsMapping.prototype.remove = function(obj, parent, key) {
  if (!parent || !key === undefined) return

  var parents = this.mapping.get(obj)

  for (var i = 0, len = parents.length; i < len; ++i) {
    if (parents[i].obj === parent && parents[i].key === key) {
      parents.splice(i, 1)
      break
    }
  }

  if (!parents.length) this.mapping.delete(obj)
}

ParentsMapping.prototype.path = function(obj) {
  var path = []
  while (this.mapping.has(obj)) {
    var parent = this.mapping.get(obj)[0]
    var key = parent.key === Array ? parent.obj.indexOf(obj) : parent.key
    path.unshift(key)
    obj = parent.obj
  }
  return path
}
exports.WeakMVMap = WeakMVMap, exports.ParentsMapping = ParentsMapping;
},{}],18:[function(require,module,exports){
(function (root, factory){
  'use strict';

  /*istanbul ignore next:cant test*/
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else {
    // Browser globals
    root.objectPath = factory();
  }
})(this, function(){
  'use strict';

  var
    toStr = Object.prototype.toString,
    _hasOwnProperty = Object.prototype.hasOwnProperty;

  function isEmpty(value){
    if (!value) {
      return true;
    }
    if (isArray(value) && value.length === 0) {
        return true;
    } else if (!isString(value)) {
        for (var i in value) {
            if (_hasOwnProperty.call(value, i)) {
                return false;
            }
        }
        return true;
    }
    return false;
  }

  function toString(type){
    return toStr.call(type);
  }

  function isNumber(value){
    return typeof value === 'number' || toString(value) === "[object Number]";
  }

  function isString(obj){
    return typeof obj === 'string' || toString(obj) === "[object String]";
  }

  function isObject(obj){
    return typeof obj === 'object' && toString(obj) === "[object Object]";
  }

  function isArray(obj){
    return typeof obj === 'object' && typeof obj.length === 'number' && toString(obj) === '[object Array]';
  }

  function isBoolean(obj){
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
  }

  function getKey(key){
    var intKey = parseInt(key);
    if (intKey.toString() === key) {
      return intKey;
    }
    return key;
  }

  function set(obj, path, value, doNotReplace){
    if (isNumber(path)) {
      path = [path];
    }
    if (isEmpty(path)) {
      return obj;
    }
    if (isString(path)) {
      return set(obj, path.split('.').map(getKey), value, doNotReplace);
    }
    var currentPath = path[0];

    if (path.length === 1) {
      var oldVal = obj[currentPath];
      if (oldVal === void 0 || !doNotReplace) {
        obj[currentPath] = value;
      }
      return oldVal;
    }

    if (obj[currentPath] === void 0) {
      //check if we assume an array
      if(isNumber(path[1])) {
        obj[currentPath] = [];
      } else {
        obj[currentPath] = {};
      }
    }

    return set(obj[currentPath], path.slice(1), value, doNotReplace);
  }

  function del(obj, path) {
    if (isNumber(path)) {
      path = [path];
    }

    if (isEmpty(obj)) {
      return void 0;
    }

    if (isEmpty(path)) {
      return obj;
    }
    if(isString(path)) {
      return del(obj, path.split('.'));
    }

    var currentPath = getKey(path[0]);
    var oldVal = obj[currentPath];

    if(path.length === 1) {
      if (oldVal !== void 0) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1);
        } else {
          delete obj[currentPath];
        }
      }
    } else {
      if (obj[currentPath] !== void 0) {
        return del(obj[currentPath], path.slice(1));
      }
    }

    return obj;
  }

  var objectPath = function(obj) {
    return Object.keys(objectPath).reduce(function(proxy, prop) {
      if (typeof objectPath[prop] === 'function') {
        proxy[prop] = objectPath[prop].bind(objectPath, obj);
      }

      return proxy;
    }, {});
  };

  objectPath.has = function (obj, path) {
    if (isEmpty(obj)) {
      return false;
    }

    if (isNumber(path)) {
      path = [path];
    } else if (isString(path)) {
      path = path.split('.');
    }

    if (isEmpty(path) || path.length === 0) {
      return false;
    }

    for (var i = 0; i < path.length; i++) {
      var j = path[i];
      if ((isObject(obj) || isArray(obj)) && _hasOwnProperty.call(obj, j)) {
        obj = obj[j];
      } else {
        return false;
      }
    }

    return true;
  };

  objectPath.ensureExists = function (obj, path, value){
    return set(obj, path, value, true);
  };

  objectPath.set = function (obj, path, value, doNotReplace){
    return set(obj, path, value, doNotReplace);
  };

  objectPath.insert = function (obj, path, value, at){
    var arr = objectPath.get(obj, path);
    at = ~~at;
    if (!isArray(arr)) {
      arr = [];
      objectPath.set(obj, path, arr);
    }
    arr.splice(at, 0, value);
  };

  objectPath.empty = function(obj, path) {
    if (isEmpty(path)) {
      return obj;
    }
    if (isEmpty(obj)) {
      return void 0;
    }

    var value, i;
    if (!(value = objectPath.get(obj, path))) {
      return obj;
    }

    if (isString(value)) {
      return objectPath.set(obj, path, '');
    } else if (isBoolean(value)) {
      return objectPath.set(obj, path, false);
    } else if (isNumber(value)) {
      return objectPath.set(obj, path, 0);
    } else if (isArray(value)) {
      value.length = 0;
    } else if (isObject(value)) {
      for (i in value) {
        if (_hasOwnProperty.call(value, i)) {
          delete value[i];
        }
      }
    } else {
      return objectPath.set(obj, path, null);
    }
  };

  objectPath.push = function (obj, path /*, values */){
    var arr = objectPath.get(obj, path);
    if (!isArray(arr)) {
      arr = [];
      objectPath.set(obj, path, arr);
    }

    arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
  };

  objectPath.coalesce = function (obj, paths, defaultValue) {
    var value;

    for (var i = 0, len = paths.length; i < len; i++) {
      if ((value = objectPath.get(obj, paths[i])) !== void 0) {
        return value;
      }
    }

    return defaultValue;
  };

  objectPath.get = function (obj, path, defaultValue){
    if (isNumber(path)) {
      path = [path];
    }
    if (isEmpty(path)) {
      return obj;
    }
    if (isEmpty(obj)) {
      return defaultValue;
    }
    if (isString(path)) {
      return objectPath.get(obj, path.split('.'), defaultValue);
    }

    var currentPath = getKey(path[0]);

    if (path.length === 1) {
      if (obj[currentPath] === void 0) {
        return defaultValue;
      }
      return obj[currentPath];
    }

    return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
  };

  objectPath.del = function(obj, path) {
    return del(obj, path);
  };

  return objectPath;
});

},{}],19:[function(require,module,exports){
(function (global){

var rng;

if (global.crypto && crypto.getRandomValues) {
  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
  // Moderately fast, high quality
  var _rnds8 = new Uint8Array(16);
  rng = function whatwgRNG() {
    crypto.getRandomValues(_rnds8);
    return _rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var  _rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return _rnds;
  };
}

module.exports = rng;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],20:[function(require,module,exports){
//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php

// Unique ID creation requires a high quality random # generator.  We feature
// detect to determine the best RNG source, normalizing to a function that
// returns 128-bits of randomness, since that's what's usually required
var _rng = require('./rng');

// Maps for number <-> hex string conversion
var _byteToHex = [];
var _hexToByte = {};
for (var i = 0; i < 256; i++) {
  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
  _hexToByte[_byteToHex[i]] = i;
}

// **`parse()` - Parse a UUID into it's component bytes**
function parse(s, buf, offset) {
  var i = (buf && offset) || 0, ii = 0;

  buf = buf || [];
  s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
    if (ii < 16) { // Don't overflow!
      buf[i + ii++] = _hexToByte[oct];
    }
  });

  // Zero out remaining bytes if string was short
  while (ii < 16) {
    buf[i + ii++] = 0;
  }

  return buf;
}

// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
function unparse(buf, offset) {
  var i = offset || 0, bth = _byteToHex;
  return  bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = _rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; n++) {
    b[i + n] = node[n];
  }

  return buf ? buf : unparse(b);
}

// **`v4()` - Generate random UUID**

// See https://github.com/broofa/node-uuid for API details
function v4(options, buf, offset) {
  // Deprecated - 'format' argument, as supported in v1.2
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || _rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ii++) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || unparse(rnds);
}

// Export public API
var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
uuid.parse = parse;
uuid.unparse = unparse;

module.exports = uuid;

},{"./rng":19}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvYXBpLmpzIiwibGliL2Jyb3dzZXIvbG9nZ2VyLmpzIiwibGliL2Jyb3dzZXIvcmVwbGljYW50LmpzIiwibm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWIvYjY0LmpzIiwibm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jbG9uZS9jbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy9kZWVwLWVxdWFsL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2RlZXAtZXF1YWwvbGliL2lzX2FyZ3VtZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9kZWVwLWVxdWFsL2xpYi9rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJub2RlX21vZHVsZXMvZ3J1bnQtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9pcy1hcnJheS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9uZXN0ZWQtb2JzZXJ2ZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9uZXN0ZWQtb2JzZXJ2ZS9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbmVzdGVkLW9ic2VydmUvbGliL3V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL29iamVjdC1wYXRoL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvcm5nLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC91dWlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDNUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN4Z0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdTQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3RSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcgPSAoRnVuY3Rpb24oJ3JldHVybiB0aGlzJykpKCk7XG5pZiAoIV9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuX19jb3ZlcmFnZV9fKSB7IF9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuX19jb3ZlcmFnZV9fID0ge307IH1cbl9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcgPSBfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLl9fY292ZXJhZ2VfXztcbmlmICghKF9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmdbJy9Vc2Vycy9tYXR0L0Rldi9ub2RlY2cvbGliL2FwaS5qcyddKSkge1xuICAgX19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Z1snL1VzZXJzL21hdHQvRGV2L25vZGVjZy9saWIvYXBpLmpzJ10gPSB7XCJwYXRoXCI6XCIvVXNlcnMvbWF0dC9EZXYvbm9kZWNnL2xpYi9hcGkuanNcIixcInNcIjp7XCIxXCI6MCxcIjJcIjowLFwiM1wiOjAsXCI0XCI6MCxcIjVcIjowLFwiNlwiOjEsXCI3XCI6MCxcIjhcIjowLFwiOVwiOjAsXCIxMFwiOjAsXCIxMVwiOjAsXCIxMlwiOjAsXCIxM1wiOjAsXCIxNFwiOjAsXCIxNVwiOjAsXCIxNlwiOjAsXCIxN1wiOjAsXCIxOFwiOjAsXCIxOVwiOjAsXCIyMFwiOjAsXCIyMVwiOjAsXCIyMlwiOjAsXCIyM1wiOjAsXCIyNFwiOjAsXCIyNVwiOjAsXCIyNlwiOjAsXCIyN1wiOjAsXCIyOFwiOjAsXCIyOVwiOjAsXCIzMFwiOjAsXCIzMVwiOjAsXCIzMlwiOjAsXCIzM1wiOjAsXCIzNFwiOjAsXCIzNVwiOjAsXCIzNlwiOjAsXCIzN1wiOjAsXCIzOFwiOjAsXCIzOVwiOjAsXCI0MFwiOjAsXCI0MVwiOjAsXCI0MlwiOjAsXCI0M1wiOjAsXCI0NFwiOjAsXCI0NVwiOjAsXCI0NlwiOjAsXCI0N1wiOjAsXCI0OFwiOjAsXCI0OVwiOjAsXCI1MFwiOjAsXCI1MVwiOjAsXCI1MlwiOjAsXCI1M1wiOjAsXCI1NFwiOjAsXCI1NVwiOjAsXCI1NlwiOjAsXCI1N1wiOjAsXCI1OFwiOjAsXCI1OVwiOjAsXCI2MFwiOjAsXCI2MVwiOjAsXCI2MlwiOjAsXCI2M1wiOjAsXCI2NFwiOjAsXCI2NVwiOjAsXCI2NlwiOjAsXCI2N1wiOjAsXCI2OFwiOjAsXCI2OVwiOjAsXCI3MFwiOjAsXCI3MVwiOjAsXCI3MlwiOjAsXCI3M1wiOjAsXCI3NFwiOjAsXCI3NVwiOjAsXCI3NlwiOjAsXCI3N1wiOjAsXCI3OFwiOjAsXCI3OVwiOjAsXCI4MFwiOjAsXCI4MVwiOjAsXCI4MlwiOjAsXCI4M1wiOjAsXCI4NFwiOjAsXCI4NVwiOjAsXCI4NlwiOjAsXCI4N1wiOjAsXCI4OFwiOjAsXCI4OVwiOjAsXCI5MFwiOjAsXCI5MVwiOjAsXCI5MlwiOjAsXCI5M1wiOjAsXCI5NFwiOjAsXCI5NVwiOjAsXCI5NlwiOjAsXCI5N1wiOjAsXCI5OFwiOjAsXCI5OVwiOjAsXCIxMDBcIjowLFwiMTAxXCI6MCxcIjEwMlwiOjAsXCIxMDNcIjowLFwiMTA0XCI6MCxcIjEwNVwiOjAsXCIxMDZcIjowLFwiMTA3XCI6MCxcIjEwOFwiOjAsXCIxMDlcIjowLFwiMTEwXCI6MCxcIjExMVwiOjAsXCIxMTJcIjowLFwiMTEzXCI6MCxcIjExNFwiOjAsXCIxMTVcIjowLFwiMTE2XCI6MCxcIjExN1wiOjAsXCIxMThcIjowLFwiMTE5XCI6MCxcIjEyMFwiOjAsXCIxMjFcIjowLFwiMTIyXCI6MCxcIjEyM1wiOjB9LFwiYlwiOntcIjFcIjpbMCwwXSxcIjJcIjpbMCwwXSxcIjNcIjpbMCwwXSxcIjRcIjpbMCwwXSxcIjVcIjpbMCwwXSxcIjZcIjpbMCwwXSxcIjdcIjpbMCwwXSxcIjhcIjpbMCwwXSxcIjlcIjpbMCwwXSxcIjEwXCI6WzAsMF0sXCIxMVwiOlswLDBdLFwiMTJcIjpbMCwwXSxcIjEzXCI6WzAsMF0sXCIxNFwiOlswLDBdLFwiMTVcIjpbMCwwXSxcIjE2XCI6WzAsMF0sXCIxN1wiOlswLDBdLFwiMThcIjpbMCwwXSxcIjE5XCI6WzAsMF0sXCIyMFwiOlswLDBdLFwiMjFcIjpbMCwwXSxcIjIyXCI6WzAsMF0sXCIyM1wiOlswLDBdLFwiMjRcIjpbMCwwXSxcIjI1XCI6WzAsMF0sXCIyNlwiOlswLDBdLFwiMjdcIjpbMCwwXSxcIjI4XCI6WzAsMF0sXCIyOVwiOlswLDBdLFwiMzBcIjpbMCwwXSxcIjMxXCI6WzAsMF0sXCIzMlwiOlswLDBdLFwiMzNcIjpbMCwwXX0sXCJmXCI6e1wiMVwiOjAsXCIyXCI6MCxcIjNcIjowLFwiNFwiOjAsXCI1XCI6MCxcIjZcIjowLFwiN1wiOjAsXCI4XCI6MCxcIjlcIjowLFwiMTBcIjowLFwiMTFcIjowLFwiMTJcIjowLFwiMTNcIjowLFwiMTRcIjowLFwiMTVcIjowLFwiMTZcIjowLFwiMTdcIjowLFwiMThcIjowLFwiMTlcIjowLFwiMjBcIjowLFwiMjFcIjowLFwiMjJcIjowLFwiMjNcIjowfSxcImZuTWFwXCI6e1wiMVwiOntcIm5hbWVcIjpcIk5vZGVDR1wiLFwibGluZVwiOjE2LFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTYsXCJjb2x1bW5cIjowfSxcImVuZFwiOntcImxpbmVcIjoxNixcImNvbHVtblwiOjMyfX19LFwiMlwiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfMilcIixcImxpbmVcIjozNSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjM1LFwiY29sdW1uXCI6NTR9LFwiZW5kXCI6e1wibGluZVwiOjM1LFwiY29sdW1uXCI6NjV9fX0sXCIzXCI6e1wibmFtZVwiOlwiKGFub255bW91c18zKVwiLFwibGluZVwiOjQzLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NDMsXCJjb2x1bW5cIjoyOH0sXCJlbmRcIjp7XCJsaW5lXCI6NDMsXCJjb2x1bW5cIjo0NX19fSxcIjRcIjp7XCJuYW1lXCI6XCJvbk1lc3NhZ2VcIixcImxpbmVcIjo1NSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjU1LFwiY29sdW1uXCI6Mjl9LFwiZW5kXCI6e1wibGluZVwiOjU1LFwiY29sdW1uXCI6NTR9fX0sXCI1XCI6e1wibmFtZVwiOlwiKGFub255bW91c181KVwiLFwibGluZVwiOjU5LFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NTksXCJjb2x1bW5cIjo0Mn0sXCJlbmRcIjp7XCJsaW5lXCI6NTksXCJjb2x1bW5cIjo2MH19fSxcIjZcIjp7XCJuYW1lXCI6XCIoYW5vbnltb3VzXzYpXCIsXCJsaW5lXCI6NjcsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo2NyxcImNvbHVtblwiOjI3fSxcImVuZFwiOntcImxpbmVcIjo2NyxcImNvbHVtblwiOjQxfX19LFwiN1wiOntcIm5hbWVcIjpcIm9uQ29ubmVjdGlvblwiLFwibGluZVwiOjc4LFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NzgsXCJjb2x1bW5cIjoyOH0sXCJlbmRcIjp7XCJsaW5lXCI6NzgsXCJjb2x1bW5cIjo1OH19fSxcIjhcIjp7XCJuYW1lXCI6XCIoYW5vbnltb3VzXzgpXCIsXCJsaW5lXCI6ODAsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo4MCxcImNvbHVtblwiOjMyfSxcImVuZFwiOntcImxpbmVcIjo4MCxcImNvbHVtblwiOjQ5fX19LFwiOVwiOntcIm5hbWVcIjpcIm9uTWVzc2FnZVwiLFwibGluZVwiOjkwLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6OTAsXCJjb2x1bW5cIjozM30sXCJlbmRcIjp7XCJsaW5lXCI6OTAsXCJjb2x1bW5cIjo2Mn19fSxcIjEwXCI6e1wibmFtZVwiOlwiKGFub255bW91c18xMClcIixcImxpbmVcIjo5NCxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjk0LFwiY29sdW1uXCI6NDZ9LFwiZW5kXCI6e1wibGluZVwiOjk0LFwiY29sdW1uXCI6NjR9fX0sXCIxMVwiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfMTEpXCIsXCJsaW5lXCI6MTE0LFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTE0LFwiY29sdW1uXCI6MzF9LFwiZW5kXCI6e1wibGluZVwiOjExNCxcImNvbHVtblwiOjcwfX19LFwiMTJcIjp7XCJuYW1lXCI6XCIoYW5vbnltb3VzXzEyKVwiLFwibGluZVwiOjEyOSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEyOSxcImNvbHVtblwiOjI5fSxcImVuZFwiOntcImxpbmVcIjoxMjksXCJjb2x1bW5cIjo4MH19fSxcIjEzXCI6e1wibmFtZVwiOlwiKGFub255bW91c18xMylcIixcImxpbmVcIjoxNTAsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNTAsXCJjb2x1bW5cIjozOX0sXCJlbmRcIjp7XCJsaW5lXCI6MTUwLFwiY29sdW1uXCI6OTB9fX0sXCIxNFwiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfMTQpXCIsXCJsaW5lXCI6MTYzLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTYzLFwiY29sdW1uXCI6Mjl9LFwiZW5kXCI6e1wibGluZVwiOjE2MyxcImNvbHVtblwiOjczfX19LFwiMTVcIjp7XCJuYW1lXCI6XCIoYW5vbnltb3VzXzE1KVwiLFwibGluZVwiOjE5MyxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjE5MyxcImNvbHVtblwiOjI5fSxcImVuZFwiOntcImxpbmVcIjoxOTMsXCJjb2x1bW5cIjo0OH19fSxcIjE2XCI6e1wibmFtZVwiOlwiKGFub255bW91c18xNilcIixcImxpbmVcIjoyMDMsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyMDMsXCJjb2x1bW5cIjoxOX0sXCJlbmRcIjp7XCJsaW5lXCI6MjAzLFwiY29sdW1uXCI6NDh9fX0sXCIxN1wiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfMTcpXCIsXCJsaW5lXCI6MjA3LFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjA3LFwiY29sdW1uXCI6Mjl9LFwiZW5kXCI6e1wibGluZVwiOjIwNyxcImNvbHVtblwiOjU4fX19LFwiMThcIjp7XCJuYW1lXCI6XCIoYW5vbnltb3VzXzE4KVwiLFwibGluZVwiOjIyMSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIyMSxcImNvbHVtblwiOjIzfSxcImVuZFwiOntcImxpbmVcIjoyMjEsXCJjb2x1bW5cIjo1MH19fSxcIjE5XCI6e1wibmFtZVwiOlwiKGFub255bW91c18xOSlcIixcImxpbmVcIjoyMzgsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyMzgsXCJjb2x1bW5cIjozM30sXCJlbmRcIjp7XCJsaW5lXCI6MjM4LFwiY29sdW1uXCI6NjB9fX0sXCIyMFwiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfMjApXCIsXCJsaW5lXCI6MjU3LFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjU3LFwiY29sdW1uXCI6NDF9LFwiZW5kXCI6e1wibGluZVwiOjI1NyxcImNvbHVtblwiOjY5fX19LFwiMjFcIjp7XCJuYW1lXCI6XCIoYW5vbnltb3VzXzIxKVwiLFwibGluZVwiOjI3NSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjI3NSxcImNvbHVtblwiOjMzfSxcImVuZFwiOntcImxpbmVcIjoyNzUsXCJjb2x1bW5cIjo1Nn19fSxcIjIyXCI6e1wibmFtZVwiOlwiKGFub255bW91c18yMilcIixcImxpbmVcIjoyODcsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyODcsXCJjb2x1bW5cIjo0MX0sXCJlbmRcIjp7XCJsaW5lXCI6Mjg3LFwiY29sdW1uXCI6NjR9fX0sXCIyM1wiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfMjMpXCIsXCJsaW5lXCI6MzIzLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzIzLFwiY29sdW1uXCI6MTN9LFwiZW5kXCI6e1wibGluZVwiOjMyMyxcImNvbHVtblwiOjI0fX19fSxcInN0YXRlbWVudE1hcFwiOntcIjFcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0LFwiY29sdW1uXCI6MH0sXCJlbmRcIjp7XCJsaW5lXCI6NCxcImNvbHVtblwiOjQ3fX0sXCIyXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NSxcImNvbHVtblwiOjB9LFwiZW5kXCI6e1wibGluZVwiOjUsXCJjb2x1bW5cIjoxMn19LFwiM1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjYsXCJjb2x1bW5cIjowfSxcImVuZFwiOntcImxpbmVcIjo2LFwiY29sdW1uXCI6MzN9fSxcIjRcIjp7XCJzdGFydFwiOntcImxpbmVcIjo3LFwiY29sdW1uXCI6MH0sXCJlbmRcIjp7XCJsaW5lXCI6NyxcImNvbHVtblwiOjMwfX0sXCI1XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6OCxcImNvbHVtblwiOjB9LFwiZW5kXCI6e1wibGluZVwiOjgsXCJjb2x1bW5cIjo0MX19LFwiNlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjE2LFwiY29sdW1uXCI6MH0sXCJlbmRcIjp7XCJsaW5lXCI6MTA1LFwiY29sdW1uXCI6MX19LFwiN1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjE3LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MTcsXCJjb2x1bW5cIjoyMH19LFwiOFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjIwLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MjAsXCJjb2x1bW5cIjozNH19LFwiOVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjIxLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MjEsXCJjb2x1bW5cIjozOH19LFwiMTBcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyNCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjI0LFwiY29sdW1uXCI6NTZ9fSxcIjExXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjYsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoyNixcImNvbHVtblwiOjMxfX0sXCIxMlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjI4LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MTAyLFwiY29sdW1uXCI6NX19LFwiMTNcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMCxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjMyLFwiY29sdW1uXCI6OX19LFwiMTRcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMSxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjozMSxcImNvbHVtblwiOjk1fX0sXCIxNVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjM1LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MzcsXCJjb2x1bW5cIjoxOH19LFwiMTZcIjp7XCJzdGFydFwiOntcImxpbmVcIjozNixcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjozNixcImNvbHVtblwiOjcyfX0sXCIxN1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjM2LFwiY29sdW1uXCI6Mzl9LFwiZW5kXCI6e1wibGluZVwiOjM2LFwiY29sdW1uXCI6NzJ9fSxcIjE4XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NDAsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjo0MCxcImNvbHVtblwiOjI5fX0sXCIxOVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjQxLFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6NDEsXCJjb2x1bW5cIjo1MH19LFwiMjBcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0MyxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjUyLFwiY29sdW1uXCI6MTF9fSxcIjIxXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NDUsXCJjb2x1bW5cIjoxMn0sXCJlbmRcIjp7XCJsaW5lXCI6NDksXCJjb2x1bW5cIjoxNX19LFwiMjJcIjp7XCJzdGFydFwiOntcImxpbmVcIjo1MSxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjo1MSxcImNvbHVtblwiOjQwfX0sXCIyM1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjU1LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6NjUsXCJjb2x1bW5cIjoxMX19LFwiMjRcIjp7XCJzdGFydFwiOntcImxpbmVcIjo1NixcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjo1NyxcImNvbHVtblwiOjgyfX0sXCIyNVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjU5LFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjY0LFwiY29sdW1uXCI6MTV9fSxcIjI2XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NjAsXCJjb2x1bW5cIjoxNn0sXCJlbmRcIjp7XCJsaW5lXCI6NjMsXCJjb2x1bW5cIjoxN319LFwiMjdcIjp7XCJzdGFydFwiOntcImxpbmVcIjo2MixcImNvbHVtblwiOjIwfSxcImVuZFwiOntcImxpbmVcIjo2MixcImNvbHVtblwiOjQ3fX0sXCIyOFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjY3LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6NzQsXCJjb2x1bW5cIjoxMX19LFwiMjlcIjp7XCJzdGFydFwiOntcImxpbmVcIjo2OCxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjo3MyxcImNvbHVtblwiOjEzfX0sXCIzMFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjY5LFwiY29sdW1uXCI6MTZ9LFwiZW5kXCI6e1wibGluZVwiOjY5LFwiY29sdW1uXCI6OTV9fSxcIjMxXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NzAsXCJjb2x1bW5cIjoxNn0sXCJlbmRcIjp7XCJsaW5lXCI6NzAsXCJjb2x1bW5cIjoxMDd9fSxcIjMyXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NzIsXCJjb2x1bW5cIjoxNn0sXCJlbmRcIjp7XCJsaW5lXCI6NzIsXCJjb2x1bW5cIjo2M319LFwiMzNcIjp7XCJzdGFydFwiOntcImxpbmVcIjo3NixcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjc2LFwiY29sdW1uXCI6Mjh9fSxcIjM0XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NzgsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoxMDEsXCJjb2x1bW5cIjoxMX19LFwiMzVcIjp7XCJzdGFydFwiOntcImxpbmVcIjo3OSxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjo3OSxcImNvbHVtblwiOjM5fX0sXCIzNlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjgwLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjg5LFwiY29sdW1uXCI6MTV9fSxcIjM3XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6ODIsXCJjb2x1bW5cIjoxNn0sXCJlbmRcIjp7XCJsaW5lXCI6ODYsXCJjb2x1bW5cIjoxOX19LFwiMzhcIjp7XCJzdGFydFwiOntcImxpbmVcIjo4OCxcImNvbHVtblwiOjE2fSxcImVuZFwiOntcImxpbmVcIjo4OCxcImNvbHVtblwiOjQ0fX0sXCIzOVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjkwLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjEwMCxcImNvbHVtblwiOjE1fX0sXCI0MFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjkxLFwiY29sdW1uXCI6MTZ9LFwiZW5kXCI6e1wibGluZVwiOjkyLFwiY29sdW1uXCI6ODZ9fSxcIjQxXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6OTQsXCJjb2x1bW5cIjoxNn0sXCJlbmRcIjp7XCJsaW5lXCI6OTksXCJjb2x1bW5cIjoxOX19LFwiNDJcIjp7XCJzdGFydFwiOntcImxpbmVcIjo5NSxcImNvbHVtblwiOjIwfSxcImVuZFwiOntcImxpbmVcIjo5OCxcImNvbHVtblwiOjIxfX0sXCI0M1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjk3LFwiY29sdW1uXCI6MjR9LFwiZW5kXCI6e1wibGluZVwiOjk3LFwiY29sdW1uXCI6NTV9fSxcIjQ0XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTA0LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MTA0LFwiY29sdW1uXCI6MjR9fSxcIjQ1XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTE0LFwiY29sdW1uXCI6MH0sXCJlbmRcIjp7XCJsaW5lXCI6MTIxLFwiY29sdW1uXCI6Mn19LFwiNDZcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxMTUsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoxMTgsXCJjb2x1bW5cIjo1fX0sXCI0N1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjExNixcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjExNixcImNvbHVtblwiOjI0fX0sXCI0OFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjExNyxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjExNyxcImNvbHVtblwiOjIwfX0sXCI0OVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjEyMCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjEyMCxcImNvbHVtblwiOjc1fX0sXCI1MFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjEyOSxcImNvbHVtblwiOjB9LFwiZW5kXCI6e1wibGluZVwiOjE0OCxcImNvbHVtblwiOjJ9fSxcIjUxXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTMwLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MTQ3LFwiY29sdW1uXCI6NX19LFwiNTJcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxMzEsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoxMzQsXCJjb2x1bW5cIjo5fX0sXCI1M1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEzMixcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjoxMzIsXCJjb2x1bW5cIjoyOH19LFwiNTRcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxMzMsXCJjb2x1bW5cIjoxMn0sXCJlbmRcIjp7XCJsaW5lXCI6MTMzLFwiY29sdW1uXCI6MjR9fSxcIjU1XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTM2LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MTQwLFwiY29sdW1uXCI6MjF9fSxcIjU2XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTQyLFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MTQ2LFwiY29sdW1uXCI6MTF9fSxcIjU3XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTUwLFwiY29sdW1uXCI6MH0sXCJlbmRcIjp7XCJsaW5lXCI6MTU1LFwiY29sdW1uXCI6Mn19LFwiNThcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNTEsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoxNTIsXCJjb2x1bW5cIjo1Nn19LFwiNTlcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNTQsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoxNTQsXCJjb2x1bW5cIjo1Nn19LFwiNjBcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNjMsXCJjb2x1bW5cIjowfSxcImVuZFwiOntcImxpbmVcIjoxODcsXCJjb2x1bW5cIjoyfX0sXCI2MVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjE2NCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjE2NyxcImNvbHVtblwiOjV9fSxcIjYyXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTY1LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MTY1LFwiY29sdW1uXCI6Mjl9fSxcIjYzXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTY2LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MTY2LFwiY29sdW1uXCI6Mzd9fSxcIjY0XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTY5LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MTY5LFwiY29sdW1uXCI6MTAxfX0sXCI2NVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjE3MixcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjE3MixcImNvbHVtblwiOjQzfX0sXCI2NlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjE3MyxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjE4MCxcImNvbHVtblwiOjV9fSxcIjY3XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTc0LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MTc0LFwiY29sdW1uXCI6NTV9fSxcIjY4XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTc1LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MTc5LFwiY29sdW1uXCI6OX19LFwiNjlcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNzYsXCJjb2x1bW5cIjoxMn0sXCJlbmRcIjp7XCJsaW5lXCI6MTc3LFwiY29sdW1uXCI6NTh9fSxcIjcwXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTc4LFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjE3OCxcImNvbHVtblwiOjE5fX0sXCI3MVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjE4MixcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjE4NixcImNvbHVtblwiOjd9fSxcIjcyXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTkzLFwiY29sdW1uXCI6MH0sXCJlbmRcIjp7XCJsaW5lXCI6MTk5LFwiY29sdW1uXCI6Mn19LFwiNzNcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxOTQsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoxOTgsXCJjb2x1bW5cIjo1fX0sXCI3NFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjE5NSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjE5NSxcImNvbHVtblwiOjYxfX0sXCI3NVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjE5NyxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjE5NyxcImNvbHVtblwiOjMxfX0sXCI3NlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjIwMSxcImNvbHVtblwiOjB9LFwiZW5kXCI6e1wibGluZVwiOjIwMSxcImNvbHVtblwiOjU3fX0sXCI3N1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIwMyxcImNvbHVtblwiOjB9LFwiZW5kXCI6e1wibGluZVwiOjIwNSxcImNvbHVtblwiOjJ9fSxcIjc4XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjA0LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MjA0LFwiY29sdW1uXCI6NzR9fSxcIjc5XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjA3LFwiY29sdW1uXCI6MH0sXCJlbmRcIjp7XCJsaW5lXCI6MjE0LFwiY29sdW1uXCI6Mn19LFwiODBcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyMDgsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoyMTEsXCJjb2x1bW5cIjo1fX0sXCI4MVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjIwOSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjIwOSxcImNvbHVtblwiOjIyfX0sXCI4MlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjIxMCxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjIxMCxcImNvbHVtblwiOjMzfX0sXCI4M1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIxMyxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjIxMyxcImNvbHVtblwiOjQ4fX0sXCI4NFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjIyMSxcImNvbHVtblwiOjB9LFwiZW5kXCI6e1wibGluZVwiOjIzNixcImNvbHVtblwiOjJ9fSxcIjg1XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjIyLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MjI0LFwiY29sdW1uXCI6NX19LFwiODZcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyMjMsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoyMjMsXCJjb2x1bW5cIjo3MX19LFwiODdcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyMjYsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoyMjgsXCJjb2x1bW5cIjo1fX0sXCI4OFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjIyNyxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjIyNyxcImNvbHVtblwiOjc4fX0sXCI4OVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjIzMCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjIzNSxcImNvbHVtblwiOjV9fSxcIjkwXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjMxLFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MjMxLFwiY29sdW1uXCI6Nzh9fSxcIjkxXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjMzLFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MjMzLFwiY29sdW1uXCI6NTR9fSxcIjkyXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjM0LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MjM0LFwiY29sdW1uXCI6NDZ9fSxcIjkzXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjM0LFwiY29sdW1uXCI6MjN9LFwiZW5kXCI6e1wibGluZVwiOjIzNCxcImNvbHVtblwiOjQ2fX0sXCI5NFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjIzOCxcImNvbHVtblwiOjB9LFwiZW5kXCI6e1wibGluZVwiOjI0NSxcImNvbHVtblwiOjJ9fSxcIjk1XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjM5LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MjQyLFwiY29sdW1uXCI6NX19LFwiOTZcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyNDAsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoyNDAsXCJjb2x1bW5cIjoyMH19LFwiOTdcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyNDEsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoyNDEsXCJjb2x1bW5cIjozM319LFwiOThcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyNDQsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoyNDQsXCJjb2x1bW5cIjo1MH19LFwiOTlcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyNDcsXCJjb2x1bW5cIjowfSxcImVuZFwiOntcImxpbmVcIjozMjgsXCJjb2x1bW5cIjoxfX0sXCIxMDBcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyNDgsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoyNDgsXCJjb2x1bW5cIjoyN319LFwiMTAxXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjU3LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MjY3LFwiY29sdW1uXCI6Nn19LFwiMTAyXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjU4LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MjU4LFwiY29sdW1uXCI6Mjl9fSxcIjEwM1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjI1OSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjI2NixcImNvbHVtblwiOjl9fSxcIjEwNFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjI2MCxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjoyNjQsXCJjb2x1bW5cIjoxM319LFwiMTA1XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjYxLFwiY29sdW1uXCI6MTZ9LFwiZW5kXCI6e1wibGluZVwiOjI2MyxcImNvbHVtblwiOjE3fX0sXCIxMDZcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyNjIsXCJjb2x1bW5cIjoyMH0sXCJlbmRcIjp7XCJsaW5lXCI6MjYyLFwiY29sdW1uXCI6MzR9fSxcIjEwN1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjI2NSxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjoyNjUsXCJjb2x1bW5cIjozOX19LFwiMTA4XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6Mjc1LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6Mjc5LFwiY29sdW1uXCI6Nn19LFwiMTA5XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6Mjc2LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6Mjc2LFwiY29sdW1uXCI6NDN9fSxcIjExMFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjI3NyxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjI3NyxcImNvbHVtblwiOjQxfX0sXCIxMTFcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyNzgsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoyNzgsXCJjb2x1bW5cIjo1OH19LFwiMTEyXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6Mjg3LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MjkxLFwiY29sdW1uXCI6Nn19LFwiMTEzXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6Mjg4LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6Mjg4LFwiY29sdW1uXCI6NDN9fSxcIjExNFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjI4OSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjI4OSxcImNvbHVtblwiOjUwfX0sXCIxMTVcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyOTAsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoyOTAsXCJjb2x1bW5cIjo2OX19LFwiMTE2XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6Mjk2LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6Mjk2LFwiY29sdW1uXCI6NTR9fSxcIjExN1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMwMixcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjMwMixcImNvbHVtblwiOjQyfX0sXCIxMThcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMDQsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjozMDQsXCJjb2x1bW5cIjozMX19LFwiMTE5XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzEyLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MzEyLFwiY29sdW1uXCI6NTR9fSxcIjEyMFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjMxOSxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjMxOSxcImNvbHVtblwiOjU4fX0sXCIxMjFcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMjIsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjozMjcsXCJjb2x1bW5cIjo3fX0sXCIxMjJcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMjQsXCJjb2x1bW5cIjoxMn0sXCJlbmRcIjp7XCJsaW5lXCI6MzI0LFwiY29sdW1uXCI6NDJ9fSxcIjEyM1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMzMCxcImNvbHVtblwiOjB9LFwiZW5kXCI6e1wibGluZVwiOjMzMCxcImNvbHVtblwiOjI0fX19LFwiYnJhbmNoTWFwXCI6e1wiMVwiOntcImxpbmVcIjoyOCxcInR5cGVcIjpcImlmXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6MjgsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoyOCxcImNvbHVtblwiOjR9fSx7XCJzdGFydFwiOntcImxpbmVcIjoyOCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjI4LFwiY29sdW1uXCI6NH19XX0sXCIyXCI6e1wibGluZVwiOjMwLFwidHlwZVwiOlwiaWZcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjozMCxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjMwLFwiY29sdW1uXCI6OH19LHtcInN0YXJ0XCI6e1wibGluZVwiOjMwLFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MzAsXCJjb2x1bW5cIjo4fX1dfSxcIjNcIjp7XCJsaW5lXCI6MzYsXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjM2LFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjM2LFwiY29sdW1uXCI6MTJ9fSx7XCJzdGFydFwiOntcImxpbmVcIjozNixcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjozNixcImNvbHVtblwiOjEyfX1dfSxcIjRcIjp7XCJsaW5lXCI6NjAsXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjYwLFwiY29sdW1uXCI6MTZ9LFwiZW5kXCI6e1wibGluZVwiOjYwLFwiY29sdW1uXCI6MTZ9fSx7XCJzdGFydFwiOntcImxpbmVcIjo2MCxcImNvbHVtblwiOjE2fSxcImVuZFwiOntcImxpbmVcIjo2MCxcImNvbHVtblwiOjE2fX1dfSxcIjVcIjp7XCJsaW5lXCI6NjAsXCJ0eXBlXCI6XCJiaW5hcnktZXhwclwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjYwLFwiY29sdW1uXCI6MjB9LFwiZW5kXCI6e1wibGluZVwiOjYwLFwiY29sdW1uXCI6NjB9fSx7XCJzdGFydFwiOntcImxpbmVcIjo2MSxcImNvbHVtblwiOjIwfSxcImVuZFwiOntcImxpbmVcIjo2MSxcImNvbHVtblwiOjU4fX1dfSxcIjZcIjp7XCJsaW5lXCI6NjgsXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjY4LFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjY4LFwiY29sdW1uXCI6MTJ9fSx7XCJzdGFydFwiOntcImxpbmVcIjo2OCxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjo2OCxcImNvbHVtblwiOjEyfX1dfSxcIjdcIjp7XCJsaW5lXCI6OTUsXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjk1LFwiY29sdW1uXCI6MjB9LFwiZW5kXCI6e1wibGluZVwiOjk1LFwiY29sdW1uXCI6MjB9fSx7XCJzdGFydFwiOntcImxpbmVcIjo5NSxcImNvbHVtblwiOjIwfSxcImVuZFwiOntcImxpbmVcIjo5NSxcImNvbHVtblwiOjIwfX1dfSxcIjhcIjp7XCJsaW5lXCI6OTUsXCJ0eXBlXCI6XCJiaW5hcnktZXhwclwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjk1LFwiY29sdW1uXCI6MjR9LFwiZW5kXCI6e1wibGluZVwiOjk1LFwiY29sdW1uXCI6NjR9fSx7XCJzdGFydFwiOntcImxpbmVcIjo5NixcImNvbHVtblwiOjI0fSxcImVuZFwiOntcImxpbmVcIjo5NixcImNvbHVtblwiOjYyfX1dfSxcIjlcIjp7XCJsaW5lXCI6MTE1LFwidHlwZVwiOlwiaWZcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjoxMTUsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoxMTUsXCJjb2x1bW5cIjo0fX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MTE1LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MTE1LFwiY29sdW1uXCI6NH19XX0sXCIxMFwiOntcImxpbmVcIjoxMTUsXCJ0eXBlXCI6XCJiaW5hcnktZXhwclwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjExNSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjExNSxcImNvbHVtblwiOjM5fX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MTE1LFwiY29sdW1uXCI6NDN9LFwiZW5kXCI6e1wibGluZVwiOjExNSxcImNvbHVtblwiOjY5fX1dfSxcIjExXCI6e1wibGluZVwiOjEzMCxcInR5cGVcIjpcImlmXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6MTMwLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MTMwLFwiY29sdW1uXCI6NH19LHtcInN0YXJ0XCI6e1wibGluZVwiOjEzMCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjEzMCxcImNvbHVtblwiOjR9fV19LFwiMTJcIjp7XCJsaW5lXCI6MTMxLFwidHlwZVwiOlwiaWZcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjoxMzEsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoxMzEsXCJjb2x1bW5cIjo4fX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MTMxLFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MTMxLFwiY29sdW1uXCI6OH19XX0sXCIxM1wiOntcImxpbmVcIjoxMzEsXCJ0eXBlXCI6XCJiaW5hcnktZXhwclwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjEzMSxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjoxMzEsXCJjb2x1bW5cIjo0M319LHtcInN0YXJ0XCI6e1wibGluZVwiOjEzMSxcImNvbHVtblwiOjQ3fSxcImVuZFwiOntcImxpbmVcIjoxMzEsXCJjb2x1bW5cIjo3M319XX0sXCIxNFwiOntcImxpbmVcIjoxNjQsXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjE2NCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjE2NCxcImNvbHVtblwiOjR9fSx7XCJzdGFydFwiOntcImxpbmVcIjoxNjQsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoxNjQsXCJjb2x1bW5cIjo0fX1dfSxcIjE1XCI6e1wibGluZVwiOjE3NSxcInR5cGVcIjpcImlmXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6MTc1LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MTc1LFwiY29sdW1uXCI6OH19LHtcInN0YXJ0XCI6e1wibGluZVwiOjE3NSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjE3NSxcImNvbHVtblwiOjh9fV19LFwiMTZcIjp7XCJsaW5lXCI6MTc1LFwidHlwZVwiOlwiYmluYXJ5LWV4cHJcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjoxNzUsXCJjb2x1bW5cIjoxMn0sXCJlbmRcIjp7XCJsaW5lXCI6MTc1LFwiY29sdW1uXCI6NTV9fSx7XCJzdGFydFwiOntcImxpbmVcIjoxNzUsXCJjb2x1bW5cIjo1OX0sXCJlbmRcIjp7XCJsaW5lXCI6MTc1LFwiY29sdW1uXCI6MTAwfX1dfSxcIjE3XCI6e1wibGluZVwiOjE5NCxcInR5cGVcIjpcImlmXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6MTk0LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MTk0LFwiY29sdW1uXCI6NH19LHtcInN0YXJ0XCI6e1wibGluZVwiOjE5NCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjE5NCxcImNvbHVtblwiOjR9fV19LFwiMThcIjp7XCJsaW5lXCI6MjA0LFwidHlwZVwiOlwiY29uZC1leHByXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6MjA0LFwiY29sdW1uXCI6NTJ9LFwiZW5kXCI6e1wibGluZVwiOjIwNCxcImNvbHVtblwiOjY1fX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MjA0LFwiY29sdW1uXCI6Njh9LFwiZW5kXCI6e1wibGluZVwiOjIwNCxcImNvbHVtblwiOjcyfX1dfSxcIjE5XCI6e1wibGluZVwiOjIwOCxcInR5cGVcIjpcImlmXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6MjA4LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MjA4LFwiY29sdW1uXCI6NH19LHtcInN0YXJ0XCI6e1wibGluZVwiOjIwOCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjIwOCxcImNvbHVtblwiOjR9fV19LFwiMjBcIjp7XCJsaW5lXCI6MjA4LFwidHlwZVwiOlwiYmluYXJ5LWV4cHJcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjoyMDgsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoyMDgsXCJjb2x1bW5cIjoxNX19LHtcInN0YXJ0XCI6e1wibGluZVwiOjIwOCxcImNvbHVtblwiOjE5fSxcImVuZFwiOntcImxpbmVcIjoyMDgsXCJjb2x1bW5cIjo0NX19XX0sXCIyMVwiOntcImxpbmVcIjoyMjIsXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjIyMixcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjIyMixcImNvbHVtblwiOjR9fSx7XCJzdGFydFwiOntcImxpbmVcIjoyMjIsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoyMjIsXCJjb2x1bW5cIjo0fX1dfSxcIjIyXCI6e1wibGluZVwiOjIyMixcInR5cGVcIjpcImJpbmFyeS1leHByXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6MjIyLFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MjIyLFwiY29sdW1uXCI6MTN9fSx7XCJzdGFydFwiOntcImxpbmVcIjoyMjIsXCJjb2x1bW5cIjoxN30sXCJlbmRcIjp7XCJsaW5lXCI6MjIyLFwiY29sdW1uXCI6NDF9fV19LFwiMjNcIjp7XCJsaW5lXCI6MjI2LFwidHlwZVwiOlwiaWZcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjoyMjYsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoyMjYsXCJjb2x1bW5cIjo0fX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MjI2LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MjI2LFwiY29sdW1uXCI6NH19XX0sXCIyNFwiOntcImxpbmVcIjoyMjYsXCJ0eXBlXCI6XCJiaW5hcnktZXhwclwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjIyNixcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjIyNixcImNvbHVtblwiOjE1fX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MjI2LFwiY29sdW1uXCI6MTl9LFwiZW5kXCI6e1wibGluZVwiOjIyNixcImNvbHVtblwiOjQ1fX1dfSxcIjI1XCI6e1wibGluZVwiOjIzMCxcInR5cGVcIjpcImlmXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6MjMwLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MjMwLFwiY29sdW1uXCI6NH19LHtcInN0YXJ0XCI6e1wibGluZVwiOjIzMCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjIzMCxcImNvbHVtblwiOjR9fV19LFwiMjZcIjp7XCJsaW5lXCI6MjM0LFwidHlwZVwiOlwiaWZcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjoyMzQsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoyMzQsXCJjb2x1bW5cIjo4fX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MjM0LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MjM0LFwiY29sdW1uXCI6OH19XX0sXCIyN1wiOntcImxpbmVcIjoyMzksXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjIzOSxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjIzOSxcImNvbHVtblwiOjR9fSx7XCJzdGFydFwiOntcImxpbmVcIjoyMzksXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoyMzksXCJjb2x1bW5cIjo0fX1dfSxcIjI4XCI6e1wibGluZVwiOjIzOSxcInR5cGVcIjpcImJpbmFyeS1leHByXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6MjM5LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MjM5LFwiY29sdW1uXCI6MTV9fSx7XCJzdGFydFwiOntcImxpbmVcIjoyMzksXCJjb2x1bW5cIjoxOX0sXCJlbmRcIjp7XCJsaW5lXCI6MjM5LFwiY29sdW1uXCI6NDV9fV19LFwiMjlcIjp7XCJsaW5lXCI6MjQ3LFwidHlwZVwiOlwiaWZcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjoyNDcsXCJjb2x1bW5cIjowfSxcImVuZFwiOntcImxpbmVcIjoyNDcsXCJjb2x1bW5cIjowfX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MjQ3LFwiY29sdW1uXCI6MH0sXCJlbmRcIjp7XCJsaW5lXCI6MjQ3LFwiY29sdW1uXCI6MH19XX0sXCIzMFwiOntcImxpbmVcIjoyNjAsXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjI2MCxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjoyNjAsXCJjb2x1bW5cIjoxMn19LHtcInN0YXJ0XCI6e1wibGluZVwiOjI2MCxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjoyNjAsXCJjb2x1bW5cIjoxMn19XX0sXCIzMVwiOntcImxpbmVcIjoyNjEsXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjI2MSxcImNvbHVtblwiOjE2fSxcImVuZFwiOntcImxpbmVcIjoyNjEsXCJjb2x1bW5cIjoxNn19LHtcInN0YXJ0XCI6e1wibGluZVwiOjI2MSxcImNvbHVtblwiOjE2fSxcImVuZFwiOntcImxpbmVcIjoyNjEsXCJjb2x1bW5cIjoxNn19XX0sXCIzMlwiOntcImxpbmVcIjoyNzYsXCJ0eXBlXCI6XCJiaW5hcnktZXhwclwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjI3NixcImNvbHVtblwiOjE3fSxcImVuZFwiOntcImxpbmVcIjoyNzYsXCJjb2x1bW5cIjoyM319LHtcInN0YXJ0XCI6e1wibGluZVwiOjI3NixcImNvbHVtblwiOjI3fSxcImVuZFwiOntcImxpbmVcIjoyNzYsXCJjb2x1bW5cIjo0Mn19XX0sXCIzM1wiOntcImxpbmVcIjoyODgsXCJ0eXBlXCI6XCJiaW5hcnktZXhwclwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjI4OCxcImNvbHVtblwiOjE3fSxcImVuZFwiOntcImxpbmVcIjoyODgsXCJjb2x1bW5cIjoyM319LHtcInN0YXJ0XCI6e1wibGluZVwiOjI4OCxcImNvbHVtblwiOjI3fSxcImVuZFwiOntcImxpbmVcIjoyODgsXCJjb2x1bW5cIjo0Mn19XX19fTtcbn1cbl9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcgPSBfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnWycvVXNlcnMvbWF0dC9EZXYvbm9kZWNnL2xpYi9hcGkuanMnXTtcbl9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snMSddKys7dmFyIFJlcGxpY2FudD1yZXF1aXJlKCcuL2Jyb3dzZXIvcmVwbGljYW50Jyk7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWycyJ10rKzt2YXIgaW89e307X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyczJ10rKzt2YXIgc2VydmVyPXJlcXVpcmUoJy4vc2VydmVyJyk7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc0J10rKzt2YXIgdXRpbHM9cmVxdWlyZSgnLi91dGlsJyk7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc1J10rKzt2YXIgcmVwbGljYXRvcj1yZXF1aXJlKCcuL3JlcGxpY2F0b3InKTtmdW5jdGlvbiBOb2RlQ0coYnVuZGxlLHNvY2tldCl7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5mWycxJ10rKztfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzcnXSsrO3ZhciBzZWxmPXRoaXM7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc4J10rKzt0aGlzLmJ1bmRsZU5hbWU9YnVuZGxlLm5hbWU7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc5J10rKzt0aGlzLmJ1bmRsZUNvbmZpZz1idW5kbGUuY29uZmlnO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snMTAnXSsrO3RoaXMubG9nPXJlcXVpcmUoJy4vYnJvd3Nlci9sb2dnZXInKShidW5kbGUubmFtZSk7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWycxMSddKys7dGhpcy5fbWVzc2FnZUhhbmRsZXJzPVtdO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snMTInXSsrO2lmKHRydWUpe19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnMSddWzBdKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWycxMyddKys7aWYodHlwZW9mIGlvPT09J3VuZGVmaW5lZCcpe19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnMiddWzBdKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWycxNCddKys7dGhyb3cgbmV3IEVycm9yKCdbbm9kZWNlZ10gU29ja2V0LklPIG11c3QgYmUgbG9hZGVkIGJlZm9yZSBpbnN0YW50aWF0aW5nIHRoZSBBUEknKTt9ZWxzZXtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLmJbJzInXVsxXSsrO31fX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzE1J10rKztkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJyxmdW5jdGlvbigpe19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuZlsnMiddKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWycxNiddKys7aWYoZG9jdW1lbnQudGl0bGU9PT0nJyl7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWyczJ11bMF0rKztfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzE3J10rKztkb2N1bWVudC50aXRsZT1zZWxmLmJ1bmRsZU5hbWU7fWVsc2V7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWyczJ11bMV0rKzt9fSxmYWxzZSk7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWycxOCddKys7dGhpcy5zb2NrZXQ9c29ja2V0O19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snMTknXSsrO3RoaXMuc29ja2V0LmVtaXQoJ2pvaW5Sb29tJyxidW5kbGUubmFtZSk7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWycyMCddKys7c29ja2V0Lm9uKCdjb25maWcnLGZ1bmN0aW9uKGNvbmZpZyl7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5mWyczJ10rKztfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzIxJ10rKztPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwnX2NvbmZpZycse3ZhbHVlOmNvbmZpZyx3cml0YWJsZTpmYWxzZSxlbnVtZXJhYmxlOnRydWV9KTtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzIyJ10rKztPYmplY3QuZnJlZXplKHNlbGYuX2NvbmZpZyk7fSk7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWycyMyddKys7c29ja2V0Lm9uKCdtZXNzYWdlJyxmdW5jdGlvbiBvbk1lc3NhZ2UoZGF0YSl7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5mWyc0J10rKztfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzI0J10rKztzZWxmLmxvZy50cmFjZSgnUmVjZWl2ZWQgbWVzc2FnZSAlcyAoc2VudCB0byBidW5kbGUgJXMpIHdpdGggZGF0YTonLHNlbGYuYnVuZGxlTmFtZSxkYXRhLm1lc3NhZ2VOYW1lLGRhdGEuYnVuZGxlTmFtZSxkYXRhLmNvbnRlbnQpO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snMjUnXSsrO3NlbGYuX21lc3NhZ2VIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpe19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuZlsnNSddKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWycyNiddKys7aWYoKF9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnNSddWzBdKyssZGF0YS5tZXNzYWdlTmFtZT09PWhhbmRsZXIubWVzc2FnZU5hbWUpJiYoX19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWyc1J11bMV0rKyxkYXRhLmJ1bmRsZU5hbWU9PT1oYW5kbGVyLmJ1bmRsZU5hbWUpKXtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLmJbJzQnXVswXSsrO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snMjcnXSsrO2hhbmRsZXIuZnVuYyhkYXRhLmNvbnRlbnQpO31lbHNle19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnNCddWzFdKys7fX0pO30pO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snMjgnXSsrO3NvY2tldC5vbignZXJyb3InLGZ1bmN0aW9uKGVycil7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5mWyc2J10rKztfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzI5J10rKztpZihlcnIudHlwZT09PSdVbmF1dGhvcml6ZWRFcnJvcicpe19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnNiddWzBdKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyczMCddKys7dmFyIHVybD1bbG9jYXRpb24ucHJvdG9jb2wsJy8vJyxsb2NhdGlvbi5ob3N0LGxvY2F0aW9uLnBhdGhuYW1lXS5qb2luKCcnKTtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzMxJ10rKzt3aW5kb3cubG9jYXRpb24uaHJlZj0nL2F1dGhFcnJvcj9jb2RlPScrZXJyLmNvZGUrJyZtZXNzYWdlPScrZXJyLm1lc3NhZ2UrJyZ2aWV3VXJsPScrdXJsO31lbHNle19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnNiddWzFdKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyczMiddKys7c2VsZi5sb2cuZXJyb3IoJ1VuaGFuZGxlZCBzb2NrZXQgZXJyb3I6JyxlcnIpO319KTt9ZWxzZXtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLmJbJzEnXVsxXSsrO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snMzMnXSsrO2lvPXNlcnZlci5nZXRJTygpO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snMzQnXSsrO2lvLm9uKCdjb25uZWN0aW9uJyxmdW5jdGlvbiBvbkNvbm5lY3Rpb24oc29ja2V0KXtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLmZbJzcnXSsrO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snMzUnXSsrO3NvY2tldC5zZXRNYXhMaXN0ZW5lcnMoNjQpO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snMzYnXSsrO3NvY2tldC5vbignY29uZmlnJyxmdW5jdGlvbihjb25maWcpe19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuZlsnOCddKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyczNyddKys7T2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYsJ19jb25maWcnLHt2YWx1ZTpjb25maWcsd3JpdGFibGU6ZmFsc2UsZW51bWVyYWJsZTp0cnVlfSk7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyczOCddKys7T2JqZWN0LmZyZWV6ZShzZWxmLl9jb25maWcpO30pO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snMzknXSsrO3NvY2tldC5vbignbWVzc2FnZScsZnVuY3Rpb24gb25NZXNzYWdlKGRhdGEsY2Ipe19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuZlsnOSddKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc0MCddKys7c2VsZi5sb2cudHJhY2UoJ1slc10gUmVjZWl2ZWQgbWVzc2FnZSAlcyAoc2VudCB0byBidW5kbGUgJXMpIHdpdGggZGF0YTonLHNlbGYuYnVuZGxlTmFtZSxkYXRhLm1lc3NhZ2VOYW1lLGRhdGEuYnVuZGxlTmFtZSxkYXRhLmNvbnRlbnQpO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snNDEnXSsrO3NlbGYuX21lc3NhZ2VIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpe19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuZlsnMTAnXSsrO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snNDInXSsrO2lmKChfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLmJbJzgnXVswXSsrLGRhdGEubWVzc2FnZU5hbWU9PT1oYW5kbGVyLm1lc3NhZ2VOYW1lKSYmKF9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnOCddWzFdKyssZGF0YS5idW5kbGVOYW1lPT09aGFuZGxlci5idW5kbGVOYW1lKSl7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWyc3J11bMF0rKztfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzQzJ10rKztoYW5kbGVyLmZ1bmMoZGF0YS5jb250ZW50LGNiKTt9ZWxzZXtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLmJbJzcnXVsxXSsrO319KTt9KTt9KTt9X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc0NCddKys7dGhpcy5fY29uZmlnPW51bGw7fV9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snNDUnXSsrO05vZGVDRy5wcm90b3R5cGUuc2VuZE1lc3NhZ2U9ZnVuY3Rpb24obWVzc2FnZU5hbWUsZGF0YSxjYWxsYmFjayl7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5mWycxMSddKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc0NiddKys7aWYoKF9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnMTAnXVswXSsrLHR5cGVvZiBjYWxsYmFjaz09PSd1bmRlZmluZWQnKSYmKF9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnMTAnXVsxXSsrLHR5cGVvZiBkYXRhPT09J2Z1bmN0aW9uJykpe19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnOSddWzBdKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc0NyddKys7Y2FsbGJhY2s9ZGF0YTtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzQ4J10rKztkYXRhPW51bGw7fWVsc2V7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWyc5J11bMV0rKzt9X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc0OSddKys7dGhpcy5zZW5kTWVzc2FnZVRvQnVuZGxlKG1lc3NhZ2VOYW1lLHRoaXMuYnVuZGxlTmFtZSxkYXRhLGNhbGxiYWNrKTt9O19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snNTAnXSsrO05vZGVDRy5zZW5kTWVzc2FnZVRvQnVuZGxlPWZ1bmN0aW9uKG1lc3NhZ2VOYW1lLGJ1bmRsZU5hbWUsZGF0YSxjYWxsYmFjayl7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5mWycxMiddKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc1MSddKys7aWYodHJ1ZSl7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWycxMSddWzBdKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc1MiddKys7aWYoKF9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnMTMnXVswXSsrLHR5cGVvZiBjYWxsYmFjaz09PSd1bmRlZmluZWQnKSYmKF9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnMTMnXVsxXSsrLHR5cGVvZiBkYXRhPT09J2Z1bmN0aW9uJykpe19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnMTInXVswXSsrO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snNTMnXSsrO2NhbGxiYWNrPWRhdGE7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc1NCddKys7ZGF0YT1udWxsO31lbHNle19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnMTInXVsxXSsrO31fX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzU1J10rKzt3aW5kb3cuc29ja2V0LmVtaXQoJ21lc3NhZ2UnLHtidW5kbGVOYW1lOmJ1bmRsZU5hbWUsbWVzc2FnZU5hbWU6bWVzc2FnZU5hbWUsY29udGVudDpkYXRhfSxjYWxsYmFjayk7fWVsc2V7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWycxMSddWzFdKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc1NiddKys7aW8uZW1pdCgnbWVzc2FnZScse2J1bmRsZU5hbWU6YnVuZGxlTmFtZSxtZXNzYWdlTmFtZTptZXNzYWdlTmFtZSxjb250ZW50OmRhdGF9KTt9fTtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzU3J10rKztOb2RlQ0cucHJvdG90eXBlLnNlbmRNZXNzYWdlVG9CdW5kbGU9ZnVuY3Rpb24obWVzc2FnZU5hbWUsYnVuZGxlTmFtZSxkYXRhLGNhbGxiYWNrKXtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLmZbJzEzJ10rKztfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzU4J10rKzt0aGlzLmxvZy50cmFjZSgnWyVzXSBTZW5kaW5nIG1lc3NhZ2UgJXMgdG8gYnVuZGxlICVzIHdpdGggZGF0YTonLHRoaXMuYnVuZGxlTmFtZSxtZXNzYWdlTmFtZSxidW5kbGVOYW1lLGRhdGEpO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snNTknXSsrO05vZGVDRy5zZW5kTWVzc2FnZVRvQnVuZGxlLmFwcGx5KE5vZGVDRyxhcmd1bWVudHMpO307X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc2MCddKys7Tm9kZUNHLnByb3RvdHlwZS5saXN0ZW5Gb3I9ZnVuY3Rpb24obWVzc2FnZU5hbWUsYnVuZGxlTmFtZSxoYW5kbGVyKXtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLmZbJzE0J10rKztfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzYxJ10rKztpZih0eXBlb2YgaGFuZGxlcj09PSd1bmRlZmluZWQnKXtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLmJbJzE0J11bMF0rKztfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzYyJ10rKztoYW5kbGVyPWJ1bmRsZU5hbWU7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc2MyddKys7YnVuZGxlTmFtZT10aGlzLmJ1bmRsZU5hbWU7fWVsc2V7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWycxNCddWzFdKys7fV9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snNjQnXSsrO3RoaXMubG9nLnRyYWNlKCdbJXNdIExpc3RlbmluZyBmb3IgJXMgZnJvbSBidW5kbGUgJXMnLHRoaXMuYnVuZGxlTmFtZSxtZXNzYWdlTmFtZSxidW5kbGVOYW1lKTtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzY1J10rKzt2YXIgbGVuPXRoaXMuX21lc3NhZ2VIYW5kbGVycy5sZW5ndGg7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc2NiddKys7Zm9yKHZhciBpPTA7aTxsZW47aSsrKXtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzY3J10rKzt2YXIgZXhpc3RpbmdIYW5kbGVyPXRoaXMuX21lc3NhZ2VIYW5kbGVyc1tpXTtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzY4J10rKztpZigoX19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWycxNiddWzBdKyssbWVzc2FnZU5hbWU9PT1leGlzdGluZ0hhbmRsZXIubWVzc2FnZU5hbWUpJiYoX19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWycxNiddWzFdKyssYnVuZGxlTmFtZT09PWV4aXN0aW5nSGFuZGxlci5idW5kbGVOYW1lKSl7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWycxNSddWzBdKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc2OSddKys7dGhpcy5sb2cuZXJyb3IoJyVzIGF0dGVtcHRlZCB0byBkZWNsYXJlIGEgZHVwbGljYXRlIFwibGlzdGVuRm9yXCIgaGFuZGxlcjonLHRoaXMuYnVuZGxlTmFtZSxidW5kbGVOYW1lLG1lc3NhZ2VOYW1lKTtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzcwJ10rKztyZXR1cm47fWVsc2V7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWycxNSddWzFdKys7fX1fX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzcxJ10rKzt0aGlzLl9tZXNzYWdlSGFuZGxlcnMucHVzaCh7bWVzc2FnZU5hbWU6bWVzc2FnZU5hbWUsYnVuZGxlTmFtZTpidW5kbGVOYW1lLGZ1bmM6aGFuZGxlcn0pO307X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc3MiddKys7Tm9kZUNHLnByb3RvdHlwZS5nZXRDb25maWc9ZnVuY3Rpb24oY2FsbGJhY2spe19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuZlsnMTUnXSsrO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snNzMnXSsrO2lmKHRoaXMuX2NvbmZpZz09PW51bGwpe19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnMTcnXVswXSsrO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snNzQnXSsrO3NldFRpbWVvdXQodGhpcy5nZXRDb25maWcuYmluZCh0aGlzLGNhbGxiYWNrKSwxMDApO31lbHNle19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnMTcnXVsxXSsrO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snNzUnXSsrO2NhbGxiYWNrKHRoaXMuX2NvbmZpZyk7fX07X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc3NiddKys7Tm9kZUNHLmRlY2xhcmVkUmVwbGljYW50cz1SZXBsaWNhbnQuZGVjbGFyZWRSZXBsaWNhbnRzO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snNzcnXSsrO05vZGVDRy5SZXBsaWNhbnQ9ZnVuY3Rpb24obmFtZSxidW5kbGUsb3B0cyl7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5mWycxNiddKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc3OCddKys7cmV0dXJuIG5ldyBSZXBsaWNhbnQobmFtZSxidW5kbGUsb3B0cyx0cnVlPyhfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLmJbJzE4J11bMF0rKyx3aW5kb3cuc29ja2V0KTooX19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWycxOCddWzFdKyssbnVsbCkpO307X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc3OSddKys7Tm9kZUNHLnByb3RvdHlwZS5SZXBsaWNhbnQ9ZnVuY3Rpb24obmFtZSxidW5kbGUsb3B0cyl7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5mWycxNyddKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc4MCddKys7aWYoKF9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnMjAnXVswXSsrLCFidW5kbGUpfHwoX19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWycyMCddWzFdKyssdHlwZW9mIGJ1bmRsZSE9PSdzdHJpbmcnKSl7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWycxOSddWzBdKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc4MSddKys7b3B0cz1idW5kbGU7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc4MiddKys7YnVuZGxlPXRoaXMuYnVuZGxlTmFtZTt9ZWxzZXtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLmJbJzE5J11bMV0rKzt9X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc4MyddKys7cmV0dXJuIE5vZGVDRy5SZXBsaWNhbnQobmFtZSxidW5kbGUsb3B0cyk7fTtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzg0J10rKztOb2RlQ0cucmVhZFJlcGxpY2FudD1mdW5jdGlvbihuYW1lLGJ1bmRsZSxjYil7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5mWycxOCddKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc4NSddKys7aWYoKF9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnMjInXVswXSsrLCFuYW1lKXx8KF9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnMjInXVsxXSsrLHR5cGVvZiBuYW1lIT09J3N0cmluZycpKXtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLmJbJzIxJ11bMF0rKztfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzg2J10rKzt0aHJvdyBuZXcgRXJyb3IoJ011c3Qgc3VwcGx5IGEgbmFtZSB3aGVuIHJlYWRpbmcgYSBSZXBsaWNhbnQnKTt9ZWxzZXtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLmJbJzIxJ11bMV0rKzt9X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc4NyddKys7aWYoKF9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnMjQnXVswXSsrLCFidW5kbGUpfHwoX19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWycyNCddWzFdKyssdHlwZW9mIGJ1bmRsZSE9PSdzdHJpbmcnKSl7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWycyMyddWzBdKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc4OCddKys7dGhyb3cgbmV3IEVycm9yKCdNdXN0IHN1cHBseSBhIGJ1bmRsZSBuYW1lIHdoZW4gcmVhZGluZyBhIFJlcGxpY2FudCcpO31lbHNle19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnMjMnXVsxXSsrO31fX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzg5J10rKztpZih0cnVlKXtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLmJbJzI1J11bMF0rKztfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzkwJ10rKzt3aW5kb3cuc29ja2V0LmVtaXQoJ3JlYWRSZXBsaWNhbnQnLHtuYW1lOm5hbWUsYnVuZGxlOmJ1bmRsZX0sY2IpO31lbHNle19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnMjUnXVsxXSsrO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snOTEnXSsrO3ZhciByZXBsaWNhbnQ9cmVwbGljYXRvci5maW5kKG5hbWUsYnVuZGxlKTtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzkyJ10rKztpZihyZXBsaWNhbnQpe19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnMjYnXVswXSsrO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snOTMnXSsrO3JldHVybiByZXBsaWNhbnQudmFsdWU7fWVsc2V7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWycyNiddWzFdKys7fX19O19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snOTQnXSsrO05vZGVDRy5wcm90b3R5cGUucmVhZFJlcGxpY2FudD1mdW5jdGlvbihuYW1lLGJ1bmRsZSxjYil7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5mWycxOSddKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc5NSddKys7aWYoKF9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnMjgnXVswXSsrLCFidW5kbGUpfHwoX19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWycyOCddWzFdKyssdHlwZW9mIGJ1bmRsZSE9PSdzdHJpbmcnKSl7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWycyNyddWzBdKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWyc5NiddKys7Y2I9YnVuZGxlO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snOTcnXSsrO2J1bmRsZT10aGlzLmJ1bmRsZU5hbWU7fWVsc2V7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWycyNyddWzFdKys7fV9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snOTgnXSsrO3JldHVybiBOb2RlQ0cucmVhZFJlcGxpY2FudChuYW1lLGJ1bmRsZSxjYik7fTtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzk5J10rKztpZih0cnVlKXtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLmJbJzI5J11bMF0rKztfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzEwMCddKys7d2luZG93Lk5vZGVDRz1Ob2RlQ0c7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWycxMDEnXSsrO05vZGVDRy5uZWFyZXN0RWxlbWVudFdpdGhBdHRyaWJ1dGU9ZnVuY3Rpb24oc3RhcnRFbCxhdHRyTmFtZSl7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5mWycyMCddKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWycxMDInXSsrO3ZhciB0YXJnZXQ9c3RhcnRFbDtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzEwMyddKys7d2hpbGUodGFyZ2V0KXtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzEwNCddKys7aWYodGFyZ2V0Lmhhc0F0dHJpYnV0ZSl7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWyczMCddWzBdKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWycxMDUnXSsrO2lmKHRhcmdldC5oYXNBdHRyaWJ1dGUoYXR0ck5hbWUpKXtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLmJbJzMxJ11bMF0rKztfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzEwNiddKys7cmV0dXJuIHRhcmdldDt9ZWxzZXtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLmJbJzMxJ11bMV0rKzt9fWVsc2V7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWyczMCddWzFdKys7fV9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snMTA3J10rKzt0YXJnZXQ9dGFyZ2V0LnBhcmVudE5vZGU7fX07X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWycxMDgnXSsrO05vZGVDRy5wcm90b3R5cGUuZ2V0RGlhbG9nPWZ1bmN0aW9uKG5hbWUsYnVuZGxlKXtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLmZbJzIxJ10rKztfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzEwOSddKys7YnVuZGxlPShfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLmJbJzMyJ11bMF0rKyxidW5kbGUpfHwoX19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWyczMiddWzFdKyssdGhpcy5idW5kbGVOYW1lKTtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzExMCddKys7dmFyIHRvcERvYz13aW5kb3cudG9wLmRvY3VtZW50O19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snMTExJ10rKztyZXR1cm4gdG9wRG9jLmdldEVsZW1lbnRCeUlkKGJ1bmRsZSsnXycrbmFtZSk7fTtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzExMiddKys7Tm9kZUNHLnByb3RvdHlwZS5nZXREaWFsb2dEb2N1bWVudD1mdW5jdGlvbihuYW1lLGJ1bmRsZSl7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5mWycyMiddKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWycxMTMnXSsrO2J1bmRsZT0oX19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5iWyczMyddWzBdKyssYnVuZGxlKXx8KF9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5NmcuYlsnMzMnXVsxXSsrLHRoaXMuYnVuZGxlTmFtZSk7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWycxMTQnXSsrO3ZhciBkaWFsb2c9dGhpcy5nZXREaWFsb2cobmFtZSxidW5kbGUpO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snMTE1J10rKztyZXR1cm4gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7fTt9ZWxzZXtfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLmJbJzI5J11bMV0rKztfX2Nvdl9TRG9KSFZ1ekZHMXJkNUx3bndpOTZnLnNbJzExNiddKys7Tm9kZUNHLnByb3RvdHlwZS5nZXRTb2NrZXRJT1NlcnZlcj1zZXJ2ZXIuZ2V0SU87X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWycxMTcnXSsrO05vZGVDRy5wcm90b3R5cGUubW91bnQ9c2VydmVyLm1vdW50O19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snMTE4J10rKztOb2RlQ0cucHJvdG90eXBlLnV0aWw9e307X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWycxMTknXSsrO05vZGVDRy5wcm90b3R5cGUudXRpbC5hdXRoQ2hlY2s9dXRpbHMuYXV0aENoZWNrO19fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snMTIwJ10rKztOb2RlQ0cucHJvdG90eXBlLnV0aWwuZmluZFNlc3Npb249dXRpbHMuZmluZFNlc3Npb247X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWycxMjEnXSsrO09iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlQ0cucHJvdG90eXBlLCdleHRlbnNpb25zJyx7Z2V0OmZ1bmN0aW9uKCl7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5mWycyMyddKys7X19jb3ZfU0RvSkhWdXpGRzFyZDVMd253aTk2Zy5zWycxMjInXSsrO3JldHVybiBzZXJ2ZXIuZ2V0RXh0ZW5zaW9ucygpO30sZW51bWVyYWJsZTp0cnVlfSk7fV9fY292X1NEb0pIVnV6RkcxcmQ1THdud2k5Nmcuc1snMTIzJ10rKzttb2R1bGUuZXhwb3J0cz1Ob2RlQ0c7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnID0gKEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKSgpO1xuaWYgKCFfX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnLl9fY292ZXJhZ2VfXykgeyBfX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnLl9fY292ZXJhZ2VfXyA9IHt9OyB9XG5fX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnID0gX19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5fX2NvdmVyYWdlX187XG5pZiAoIShfX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnWycvVXNlcnMvbWF0dC9EZXYvbm9kZWNnL2xpYi9icm93c2VyL2xvZ2dlci5qcyddKSkge1xuICAgX19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZ1snL1VzZXJzL21hdHQvRGV2L25vZGVjZy9saWIvYnJvd3Nlci9sb2dnZXIuanMnXSA9IHtcInBhdGhcIjpcIi9Vc2Vycy9tYXR0L0Rldi9ub2RlY2cvbGliL2Jyb3dzZXIvbG9nZ2VyLmpzXCIsXCJzXCI6e1wiMVwiOjAsXCIyXCI6MCxcIjNcIjowLFwiNFwiOjAsXCI1XCI6MCxcIjZcIjowLFwiN1wiOjAsXCI4XCI6MCxcIjlcIjowLFwiMTBcIjowLFwiMTFcIjowLFwiMTJcIjowLFwiMTNcIjowLFwiMTRcIjowLFwiMTVcIjowLFwiMTZcIjowLFwiMTdcIjowLFwiMThcIjowLFwiMTlcIjowLFwiMjBcIjowLFwiMjFcIjowLFwiMjJcIjowLFwiMjNcIjowLFwiMjRcIjowLFwiMjVcIjowLFwiMjZcIjowLFwiMjdcIjowLFwiMjhcIjowLFwiMjlcIjowLFwiMzBcIjowLFwiMzFcIjowLFwiMzJcIjowLFwiMzNcIjowLFwiMzRcIjowLFwiMzVcIjowLFwiMzZcIjowLFwiMzdcIjowfSxcImJcIjp7XCIxXCI6WzAsMF0sXCIyXCI6WzAsMF0sXCIzXCI6WzAsMF0sXCI0XCI6WzAsMF0sXCI1XCI6WzAsMF0sXCI2XCI6WzAsMF19LFwiZlwiOntcIjFcIjowLFwiMlwiOjAsXCIzXCI6MCxcIjRcIjowLFwiNVwiOjAsXCI2XCI6MCxcIjdcIjowfSxcImZuTWFwXCI6e1wiMVwiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfMSlcIixcImxpbmVcIjoxNSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjE1LFwiY29sdW1uXCI6MTd9LFwiZW5kXCI6e1wibGluZVwiOjE1LFwiY29sdW1uXCI6MzZ9fX0sXCIyXCI6e1wibmFtZVwiOlwiKGFub255bW91c18yKVwiLFwibGluZVwiOjE4LFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTgsXCJjb2x1bW5cIjoyN30sXCJlbmRcIjp7XCJsaW5lXCI6MTgsXCJjb2x1bW5cIjozOH19fSxcIjNcIjp7XCJuYW1lXCI6XCIoYW5vbnltb3VzXzMpXCIsXCJsaW5lXCI6MjQsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyNCxcImNvbHVtblwiOjI3fSxcImVuZFwiOntcImxpbmVcIjoyNCxcImNvbHVtblwiOjM4fX19LFwiNFwiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfNClcIixcImxpbmVcIjozMCxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMwLFwiY29sdW1uXCI6MjZ9LFwiZW5kXCI6e1wibGluZVwiOjMwLFwiY29sdW1uXCI6Mzd9fX0sXCI1XCI6e1wibmFtZVwiOlwiKGFub255bW91c181KVwiLFwibGluZVwiOjM2LFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzYsXCJjb2x1bW5cIjoyNn0sXCJlbmRcIjp7XCJsaW5lXCI6MzYsXCJjb2x1bW5cIjozN319fSxcIjZcIjp7XCJuYW1lXCI6XCIoYW5vbnltb3VzXzYpXCIsXCJsaW5lXCI6NDIsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0MixcImNvbHVtblwiOjI3fSxcImVuZFwiOntcImxpbmVcIjo0MixcImNvbHVtblwiOjM4fX19LFwiN1wiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfNylcIixcImxpbmVcIjo0OCxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjQ4LFwiY29sdW1uXCI6MzJ9LFwiZW5kXCI6e1wibGluZVwiOjQ4LFwiY29sdW1uXCI6NDN9fX19LFwic3RhdGVtZW50TWFwXCI6e1wiMVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjowfSxcImVuZFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6MzB9fSxcIjJcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0LFwiY29sdW1uXCI6MH0sXCJlbmRcIjp7XCJsaW5lXCI6NCxcImNvbHVtblwiOjQ0fX0sXCIzXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NSxcImNvbHVtblwiOjB9LFwiZW5kXCI6e1wibGluZVwiOjUsXCJjb2x1bW5cIjo0Nn19LFwiNFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjcsXCJjb2x1bW5cIjowfSxcImVuZFwiOntcImxpbmVcIjoxMyxcImNvbHVtblwiOjJ9fSxcIjVcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNSxcImNvbHVtblwiOjB9LFwiZW5kXCI6e1wibGluZVwiOjU1LFwiY29sdW1uXCI6Mn19LFwiNlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjE2LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MTYsXCJjb2x1bW5cIjoyOH19LFwiN1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjE4LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MjIsXCJjb2x1bW5cIjo2fX0sXCI4XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTksXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoxOSxcImNvbHVtblwiOjYwfX0sXCI5XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTksXCJjb2x1bW5cIjo1M30sXCJlbmRcIjp7XCJsaW5lXCI6MTksXCJjb2x1bW5cIjo2MH19LFwiMTBcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyMCxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjIwLFwiY29sdW1uXCI6NTZ9fSxcIjExXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjEsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoyMSxcImNvbHVtblwiOjQ3fX0sXCIxMlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjI0LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MjgsXCJjb2x1bW5cIjo2fX0sXCIxM1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjI1LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MjUsXCJjb2x1bW5cIjo2MH19LFwiMTRcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyNSxcImNvbHVtblwiOjUzfSxcImVuZFwiOntcImxpbmVcIjoyNSxcImNvbHVtblwiOjYwfX0sXCIxNVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjI2LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MjYsXCJjb2x1bW5cIjo1Nn19LFwiMTZcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyNyxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjI3LFwiY29sdW1uXCI6NDd9fSxcIjE3XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzAsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjozNCxcImNvbHVtblwiOjZ9fSxcIjE4XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzEsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjozMSxcImNvbHVtblwiOjU5fX0sXCIxOVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjMxLFwiY29sdW1uXCI6NTJ9LFwiZW5kXCI6e1wibGluZVwiOjMxLFwiY29sdW1uXCI6NTl9fSxcIjIwXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzIsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjozMixcImNvbHVtblwiOjU2fX0sXCIyMVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjMzLFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MzMsXCJjb2x1bW5cIjo0N319LFwiMjJcIjp7XCJzdGFydFwiOntcImxpbmVcIjozNixcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjQwLFwiY29sdW1uXCI6Nn19LFwiMjNcIjp7XCJzdGFydFwiOntcImxpbmVcIjozNyxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjM3LFwiY29sdW1uXCI6NTl9fSxcIjI0XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzcsXCJjb2x1bW5cIjo1Mn0sXCJlbmRcIjp7XCJsaW5lXCI6MzcsXCJjb2x1bW5cIjo1OX19LFwiMjVcIjp7XCJzdGFydFwiOntcImxpbmVcIjozOCxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjM4LFwiY29sdW1uXCI6NTZ9fSxcIjI2XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzksXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjozOSxcImNvbHVtblwiOjQ2fX0sXCIyN1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjQyLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6NDYsXCJjb2x1bW5cIjo2fX0sXCIyOFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjQzLFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6NDMsXCJjb2x1bW5cIjo2MH19LFwiMjlcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0MyxcImNvbHVtblwiOjUzfSxcImVuZFwiOntcImxpbmVcIjo0MyxcImNvbHVtblwiOjYwfX0sXCIzMFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjQ0LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6NDQsXCJjb2x1bW5cIjo1Nn19LFwiMzFcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0NSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjQ1LFwiY29sdW1uXCI6NDh9fSxcIjMyXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NDgsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjo1MixcImNvbHVtblwiOjZ9fSxcIjMzXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NDksXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjo0OSxcImNvbHVtblwiOjM1fX0sXCIzNFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjQ5LFwiY29sdW1uXCI6Mjh9LFwiZW5kXCI6e1wibGluZVwiOjQ5LFwiY29sdW1uXCI6MzV9fSxcIjM1XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NTAsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjo1MCxcImNvbHVtblwiOjU2fX0sXCIzNlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjUxLFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6NTEsXCJjb2x1bW5cIjo0N319LFwiMzdcIjp7XCJzdGFydFwiOntcImxpbmVcIjo1NCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjU0LFwiY29sdW1uXCI6MjZ9fX0sXCJicmFuY2hNYXBcIjp7XCIxXCI6e1wibGluZVwiOjE5LFwidHlwZVwiOlwiaWZcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjoxOSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjE5LFwiY29sdW1uXCI6OH19LHtcInN0YXJ0XCI6e1wibGluZVwiOjE5LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MTksXCJjb2x1bW5cIjo4fX1dfSxcIjJcIjp7XCJsaW5lXCI6MjUsXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjI1LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MjUsXCJjb2x1bW5cIjo4fX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MjUsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoyNSxcImNvbHVtblwiOjh9fV19LFwiM1wiOntcImxpbmVcIjozMSxcInR5cGVcIjpcImlmXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6MzEsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjozMSxcImNvbHVtblwiOjh9fSx7XCJzdGFydFwiOntcImxpbmVcIjozMSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjMxLFwiY29sdW1uXCI6OH19XX0sXCI0XCI6e1wibGluZVwiOjM3LFwidHlwZVwiOlwiaWZcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjozNyxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjM3LFwiY29sdW1uXCI6OH19LHtcInN0YXJ0XCI6e1wibGluZVwiOjM3LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MzcsXCJjb2x1bW5cIjo4fX1dfSxcIjVcIjp7XCJsaW5lXCI6NDMsXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjQzLFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6NDMsXCJjb2x1bW5cIjo4fX0se1wic3RhcnRcIjp7XCJsaW5lXCI6NDMsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjo0MyxcImNvbHVtblwiOjh9fV19LFwiNlwiOntcImxpbmVcIjo0OSxcInR5cGVcIjpcImlmXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6NDksXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjo0OSxcImNvbHVtblwiOjh9fSx7XCJzdGFydFwiOntcImxpbmVcIjo0OSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjQ5LFwiY29sdW1uXCI6OH19XX19fTtcbn1cbl9fY292X2lCUDFrUTh6OTk5VW5nY1NnTFlxaWcgPSBfX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnWycvVXNlcnMvbWF0dC9EZXYvbm9kZWNnL2xpYi9icm93c2VyL2xvZ2dlci5qcyddO1xuX19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5zWycxJ10rKzt2YXIgY29uZmlnPXdpbmRvdy5uY2dDb25maWc7X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5zWycyJ10rKzt2YXIgbG9nTGV2ZWw9Y29uZmlnLmxvZ2dpbmcuY29uc29sZS5sZXZlbDtfX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnLnNbJzMnXSsrO3ZhciBsb2dSZXBsaWNhbnRzPWNvbmZpZy5sb2dnaW5nLnJlcGxpY2FudHM7X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5zWyc0J10rKzt2YXIgTE9HX0xFVkVMUz17dHJhY2U6MCxkZWJ1ZzoxLGluZm86Mix3YXJuOjMsZXJyb3I6NH07X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5zWyc1J10rKzttb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihmaWxlbmFtZSl7X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5mWycxJ10rKztfX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnLnNbJzYnXSsrO3ZhciBsb2dnZXJJbnN0YW5jZT17fTtfX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnLnNbJzcnXSsrO2xvZ2dlckluc3RhbmNlLnRyYWNlPWZ1bmN0aW9uKCl7X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5mWycyJ10rKztfX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnLnNbJzgnXSsrO2lmKExPR19MRVZFTFNbbG9nTGV2ZWxdPkxPR19MRVZFTFMudHJhY2Upe19fY292X2lCUDFrUTh6OTk5VW5nY1NnTFlxaWcuYlsnMSddWzBdKys7X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5zWyc5J10rKztyZXR1cm47fWVsc2V7X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5iWycxJ11bMV0rKzt9X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5zWycxMCddKys7YXJndW1lbnRzWzBdPSdbJytmaWxlbmFtZSsnXSAnK2FyZ3VtZW50c1swXTtfX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnLnNbJzExJ10rKztjb25zb2xlLmluZm8uYXBwbHkoY29uc29sZSxhcmd1bWVudHMpO307X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5zWycxMiddKys7bG9nZ2VySW5zdGFuY2UuZGVidWc9ZnVuY3Rpb24oKXtfX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnLmZbJzMnXSsrO19fY292X2lCUDFrUTh6OTk5VW5nY1NnTFlxaWcuc1snMTMnXSsrO2lmKExPR19MRVZFTFNbbG9nTGV2ZWxdPkxPR19MRVZFTFMuZGVidWcpe19fY292X2lCUDFrUTh6OTk5VW5nY1NnTFlxaWcuYlsnMiddWzBdKys7X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5zWycxNCddKys7cmV0dXJuO31lbHNle19fY292X2lCUDFrUTh6OTk5VW5nY1NnTFlxaWcuYlsnMiddWzFdKys7fV9fY292X2lCUDFrUTh6OTk5VW5nY1NnTFlxaWcuc1snMTUnXSsrO2FyZ3VtZW50c1swXT0nWycrZmlsZW5hbWUrJ10gJythcmd1bWVudHNbMF07X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5zWycxNiddKys7Y29uc29sZS5pbmZvLmFwcGx5KGNvbnNvbGUsYXJndW1lbnRzKTt9O19fY292X2lCUDFrUTh6OTk5VW5nY1NnTFlxaWcuc1snMTcnXSsrO2xvZ2dlckluc3RhbmNlLmluZm89ZnVuY3Rpb24oKXtfX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnLmZbJzQnXSsrO19fY292X2lCUDFrUTh6OTk5VW5nY1NnTFlxaWcuc1snMTgnXSsrO2lmKExPR19MRVZFTFNbbG9nTGV2ZWxdPkxPR19MRVZFTFMuaW5mbyl7X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5iWyczJ11bMF0rKztfX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnLnNbJzE5J10rKztyZXR1cm47fWVsc2V7X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5iWyczJ11bMV0rKzt9X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5zWycyMCddKys7YXJndW1lbnRzWzBdPSdbJytmaWxlbmFtZSsnXSAnK2FyZ3VtZW50c1swXTtfX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnLnNbJzIxJ10rKztjb25zb2xlLmluZm8uYXBwbHkoY29uc29sZSxhcmd1bWVudHMpO307X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5zWycyMiddKys7bG9nZ2VySW5zdGFuY2Uud2Fybj1mdW5jdGlvbigpe19fY292X2lCUDFrUTh6OTk5VW5nY1NnTFlxaWcuZlsnNSddKys7X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5zWycyMyddKys7aWYoTE9HX0xFVkVMU1tsb2dMZXZlbF0+TE9HX0xFVkVMUy53YXJuKXtfX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnLmJbJzQnXVswXSsrO19fY292X2lCUDFrUTh6OTk5VW5nY1NnTFlxaWcuc1snMjQnXSsrO3JldHVybjt9ZWxzZXtfX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnLmJbJzQnXVsxXSsrO31fX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnLnNbJzI1J10rKzthcmd1bWVudHNbMF09J1snK2ZpbGVuYW1lKyddICcrYXJndW1lbnRzWzBdO19fY292X2lCUDFrUTh6OTk5VW5nY1NnTFlxaWcuc1snMjYnXSsrO2NvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsYXJndW1lbnRzKTt9O19fY292X2lCUDFrUTh6OTk5VW5nY1NnTFlxaWcuc1snMjcnXSsrO2xvZ2dlckluc3RhbmNlLmVycm9yPWZ1bmN0aW9uKCl7X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5mWyc2J10rKztfX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnLnNbJzI4J10rKztpZihMT0dfTEVWRUxTW2xvZ0xldmVsXT5MT0dfTEVWRUxTLmVycm9yKXtfX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnLmJbJzUnXVswXSsrO19fY292X2lCUDFrUTh6OTk5VW5nY1NnTFlxaWcuc1snMjknXSsrO3JldHVybjt9ZWxzZXtfX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnLmJbJzUnXVsxXSsrO31fX2Nvdl9pQlAxa1E4ejk5OVVuZ2NTZ0xZcWlnLnNbJzMwJ10rKzthcmd1bWVudHNbMF09J1snK2ZpbGVuYW1lKyddICcrYXJndW1lbnRzWzBdO19fY292X2lCUDFrUTh6OTk5VW5nY1NnTFlxaWcuc1snMzEnXSsrO2NvbnNvbGUuZXJyb3IuYXBwbHkoY29uc29sZSxhcmd1bWVudHMpO307X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5zWyczMiddKys7bG9nZ2VySW5zdGFuY2UucmVwbGljYW50cz1mdW5jdGlvbigpe19fY292X2lCUDFrUTh6OTk5VW5nY1NnTFlxaWcuZlsnNyddKys7X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5zWyczMyddKys7aWYoIWxvZ1JlcGxpY2FudHMpe19fY292X2lCUDFrUTh6OTk5VW5nY1NnTFlxaWcuYlsnNiddWzBdKys7X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5zWyczNCddKys7cmV0dXJuO31lbHNle19fY292X2lCUDFrUTh6OTk5VW5nY1NnTFlxaWcuYlsnNiddWzFdKys7fV9fY292X2lCUDFrUTh6OTk5VW5nY1NnTFlxaWcuc1snMzUnXSsrO2FyZ3VtZW50c1swXT0nWycrZmlsZW5hbWUrJ10gJythcmd1bWVudHNbMF07X19jb3ZfaUJQMWtROHo5OTlVbmdjU2dMWXFpZy5zWyczNiddKys7Y29uc29sZS5pbmZvLmFwcGx5KGNvbnNvbGUsYXJndW1lbnRzKTt9O19fY292X2lCUDFrUTh6OTk5VW5nY1NnTFlxaWcuc1snMzcnXSsrO3JldHVybiBsb2dnZXJJbnN0YW5jZTt9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQSA9IChGdW5jdGlvbigncmV0dXJuIHRoaXMnKSkoKTtcbmlmICghX19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5fX2NvdmVyYWdlX18pIHsgX19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5fX2NvdmVyYWdlX18gPSB7fTsgfVxuX19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQSA9IF9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuX19jb3ZlcmFnZV9fO1xuaWYgKCEoX19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQVsnL1VzZXJzL21hdHQvRGV2L25vZGVjZy9saWIvYnJvd3Nlci9yZXBsaWNhbnQuanMnXSkpIHtcbiAgIF9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEFbJy9Vc2Vycy9tYXR0L0Rldi9ub2RlY2cvbGliL2Jyb3dzZXIvcmVwbGljYW50LmpzJ10gPSB7XCJwYXRoXCI6XCIvVXNlcnMvbWF0dC9EZXYvbm9kZWNnL2xpYi9icm93c2VyL3JlcGxpY2FudC5qc1wiLFwic1wiOntcIjFcIjowLFwiMlwiOjAsXCIzXCI6MCxcIjRcIjowLFwiNVwiOjAsXCI2XCI6MCxcIjdcIjowLFwiOFwiOjAsXCI5XCI6MCxcIjEwXCI6MCxcIjExXCI6MCxcIjEyXCI6MSxcIjEzXCI6MCxcIjE0XCI6MCxcIjE1XCI6MCxcIjE2XCI6MCxcIjE3XCI6MCxcIjE4XCI6MCxcIjE5XCI6MCxcIjIwXCI6MCxcIjIxXCI6MCxcIjIyXCI6MCxcIjIzXCI6MCxcIjI0XCI6MCxcIjI1XCI6MCxcIjI2XCI6MCxcIjI3XCI6MCxcIjI4XCI6MCxcIjI5XCI6MCxcIjMwXCI6MCxcIjMxXCI6MCxcIjMyXCI6MCxcIjMzXCI6MCxcIjM0XCI6MCxcIjM1XCI6MCxcIjM2XCI6MCxcIjM3XCI6MCxcIjM4XCI6MCxcIjM5XCI6MSxcIjQwXCI6MCxcIjQxXCI6MSxcIjQyXCI6MCxcIjQzXCI6MCxcIjQ0XCI6MCxcIjQ1XCI6MCxcIjQ2XCI6MCxcIjQ3XCI6MCxcIjQ4XCI6MCxcIjQ5XCI6MCxcIjUwXCI6MCxcIjUxXCI6MCxcIjUyXCI6MCxcIjUzXCI6MCxcIjU0XCI6MSxcIjU1XCI6MCxcIjU2XCI6MSxcIjU3XCI6MCxcIjU4XCI6MCxcIjU5XCI6MCxcIjYwXCI6MCxcIjYxXCI6MCxcIjYyXCI6MCxcIjYzXCI6MCxcIjY0XCI6MCxcIjY1XCI6MCxcIjY2XCI6MCxcIjY3XCI6MCxcIjY4XCI6MCxcIjY5XCI6MCxcIjcwXCI6MCxcIjcxXCI6MCxcIjcyXCI6MCxcIjczXCI6MCxcIjc0XCI6MCxcIjc1XCI6MCxcIjc2XCI6MCxcIjc3XCI6MSxcIjc4XCI6MCxcIjc5XCI6MCxcIjgwXCI6MCxcIjgxXCI6MCxcIjgyXCI6MCxcIjgzXCI6MCxcIjg0XCI6MCxcIjg1XCI6MSxcIjg2XCI6MCxcIjg3XCI6MCxcIjg4XCI6MSxcIjg5XCI6MCxcIjkwXCI6MCxcIjkxXCI6MCxcIjkyXCI6MSxcIjkzXCI6MCxcIjk0XCI6MCxcIjk1XCI6MCxcIjk2XCI6MCxcIjk3XCI6MCxcIjk4XCI6MCxcIjk5XCI6MCxcIjEwMFwiOjAsXCIxMDFcIjowLFwiMTAyXCI6MCxcIjEwM1wiOjAsXCIxMDRcIjowLFwiMTA1XCI6MCxcIjEwNlwiOjAsXCIxMDdcIjowLFwiMTA4XCI6MCxcIjEwOVwiOjAsXCIxMTBcIjowLFwiMTExXCI6MCxcIjExMlwiOjAsXCIxMTNcIjoxLFwiMTE0XCI6MCxcIjExNVwiOjAsXCIxMTZcIjowLFwiMTE3XCI6MCxcIjExOFwiOjAsXCIxMTlcIjowLFwiMTIwXCI6MCxcIjEyMVwiOjAsXCIxMjJcIjowLFwiMTIzXCI6MCxcIjEyNFwiOjAsXCIxMjVcIjowLFwiMTI2XCI6MCxcIjEyN1wiOjAsXCIxMjhcIjowLFwiMTI5XCI6MCxcIjEzMFwiOjAsXCIxMzFcIjowLFwiMTMyXCI6MCxcIjEzM1wiOjAsXCIxMzRcIjowLFwiMTM1XCI6MCxcIjEzNlwiOjAsXCIxMzdcIjowLFwiMTM4XCI6MCxcIjEzOVwiOjAsXCIxNDBcIjowLFwiMTQxXCI6MCxcIjE0MlwiOjAsXCIxNDNcIjowLFwiMTQ0XCI6MCxcIjE0NVwiOjAsXCIxNDZcIjowLFwiMTQ3XCI6MCxcIjE0OFwiOjAsXCIxNDlcIjowLFwiMTUwXCI6MCxcIjE1MVwiOjAsXCIxNTJcIjowLFwiMTUzXCI6MCxcIjE1NFwiOjAsXCIxNTVcIjowLFwiMTU2XCI6MCxcIjE1N1wiOjAsXCIxNThcIjowLFwiMTU5XCI6MCxcIjE2MFwiOjAsXCIxNjFcIjowLFwiMTYyXCI6MCxcIjE2M1wiOjAsXCIxNjRcIjowLFwiMTY1XCI6MCxcIjE2NlwiOjAsXCIxNjdcIjowLFwiMTY4XCI6MCxcIjE2OVwiOjAsXCIxNzBcIjowLFwiMTcxXCI6MCxcIjE3MlwiOjAsXCIxNzNcIjowLFwiMTc0XCI6MCxcIjE3NVwiOjEsXCIxNzZcIjowLFwiMTc3XCI6MCxcIjE3OFwiOjAsXCIxNzlcIjowLFwiMTgwXCI6MCxcIjE4MVwiOjAsXCIxODJcIjowfSxcImJcIjp7XCIxXCI6WzAsMF0sXCIyXCI6WzAsMF0sXCIzXCI6WzAsMF0sXCI0XCI6WzAsMF0sXCI1XCI6WzAsMF0sXCI2XCI6WzAsMF0sXCI3XCI6WzAsMF0sXCI4XCI6WzAsMF0sXCI5XCI6WzAsMF0sXCIxMFwiOlswLDBdLFwiMTFcIjpbMCwwXSxcIjEyXCI6WzAsMF0sXCIxM1wiOlswLDBdLFwiMTRcIjpbMCwwXSxcIjE1XCI6WzAsMF0sXCIxNlwiOlswLDBdLFwiMTdcIjpbMCwwXSxcIjE4XCI6WzAsMF0sXCIxOVwiOlswLDBdLFwiMjBcIjpbMCwwXSxcIjIxXCI6WzAsMF0sXCIyMlwiOlswLDBdLFwiMjNcIjpbMCwwXSxcIjI0XCI6WzAsMCwwLDAsMF0sXCIyNVwiOlswLDBdLFwiMjZcIjpbMCwwXSxcIjI3XCI6WzAsMF0sXCIyOFwiOlswLDBdLFwiMjlcIjpbMCwwXSxcIjMwXCI6WzAsMF0sXCIzMVwiOlswLDBdLFwiMzJcIjpbMCwwXSxcIjMzXCI6WzAsMF0sXCIzNFwiOlswLDAsMCwwLDBdLFwiMzVcIjpbMCwwXSxcIjM2XCI6WzAsMF0sXCIzN1wiOlswLDAsMCwwXSxcIjM4XCI6WzBdfSxcImZcIjp7XCIxXCI6MCxcIjJcIjowLFwiM1wiOjAsXCI0XCI6MCxcIjVcIjowLFwiNlwiOjAsXCI3XCI6MCxcIjhcIjowLFwiOVwiOjAsXCIxMFwiOjAsXCIxMVwiOjAsXCIxMlwiOjAsXCIxM1wiOjAsXCIxNFwiOjAsXCIxNVwiOjAsXCIxNlwiOjAsXCIxN1wiOjAsXCIxOFwiOjAsXCIxOVwiOjAsXCIyMFwiOjAsXCIyMVwiOjAsXCIyMlwiOjAsXCIyM1wiOjAsXCIyNFwiOjAsXCIyNVwiOjAsXCIyNlwiOjAsXCIyN1wiOjAsXCIyOFwiOjB9LFwiZm5NYXBcIjp7XCIxXCI6e1wibmFtZVwiOlwiUmVwbGljYW50XCIsXCJsaW5lXCI6MTcsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNyxcImNvbHVtblwiOjB9LFwiZW5kXCI6e1wibGluZVwiOjE3LFwiY29sdW1uXCI6NDd9fX0sXCIyXCI6e1wibmFtZVwiOlwiKGFub255bW91c18yKVwiLFwibGluZVwiOjU3LFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NTcsXCJjb2x1bW5cIjoyN30sXCJlbmRcIjp7XCJsaW5lXCI6NTcsXCJjb2x1bW5cIjo1M319fSxcIjNcIjp7XCJuYW1lXCI6XCJhZGRUb1F1ZXVlXCIsXCJsaW5lXCI6NjgsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo2OCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjY4LFwiY29sdW1uXCI6MzR9fX0sXCI0XCI6e1wibmFtZVwiOlwicHJvY2Vzc1F1ZXVlXCIsXCJsaW5lXCI6NzIsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo3MixcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjcyLFwiY29sdW1uXCI6Mjh9fX0sXCI1XCI6e1wibmFtZVwiOlwiKGFub255bW91c181KVwiLFwibGluZVwiOjczLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NzMsXCJjb2x1bW5cIjoyMn0sXCJlbmRcIjp7XCJsaW5lXCI6NzMsXCJjb2x1bW5cIjozN319fSxcIjZcIjp7XCJuYW1lXCI6XCIoYW5vbnltb3VzXzYpXCIsXCJsaW5lXCI6NzksXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo3OSxcImNvbHVtblwiOjEzfSxcImVuZFwiOntcImxpbmVcIjo3OSxcImNvbHVtblwiOjI0fX19LFwiN1wiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfNylcIixcImxpbmVcIjo4MixcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjgyLFwiY29sdW1uXCI6MTN9LFwiZW5kXCI6e1wibGluZVwiOjgyLFwiY29sdW1uXCI6MzJ9fX0sXCI4XCI6e1wibmFtZVwiOlwiZG9Ccm93c2VyU2V0dGVyXCIsXCJsaW5lXCI6MTAwLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTAwLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MTAwLFwiY29sdW1uXCI6Mzl9fX0sXCI5XCI6e1wibmFtZVwiOlwiZG9Ccm93c2VyRGVjbGFyZVwiLFwibGluZVwiOjEwOSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEwOSxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjEwOSxcImNvbHVtblwiOjQ0fX19LFwiMTBcIjp7XCJuYW1lXCI6XCIoYW5vbnltb3VzXzEwKVwiLFwibGluZVwiOjExMyxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjExMyxcImNvbHVtblwiOjQwfSxcImVuZFwiOntcImxpbmVcIjoxMTMsXCJjb2x1bW5cIjo1MX19fSxcIjExXCI6e1wibmFtZVwiOlwiKGFub255bW91c18xMSlcIixcImxpbmVcIjoxMTksXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxMTksXCJjb2x1bW5cIjoxNX0sXCJlbmRcIjp7XCJsaW5lXCI6MTE5LFwiY29sdW1uXCI6MzB9fX0sXCIxMlwiOntcIm5hbWVcIjpcImFzc2lnblZhbHVlXCIsXCJsaW5lXCI6MTQ0LFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTQ0LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MTQ0LFwiY29sdW1uXCI6NDV9fX0sXCIxM1wiOntcIm5hbWVcIjpcIm9ic2VydmVWYWx1ZVwiLFwibGluZVwiOjE1NSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjE1NSxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjE1NSxcImNvbHVtblwiOjI4fX19LFwiMTRcIjp7XCJuYW1lXCI6XCJkaXNwYXRjaENoYW5nZXNcIixcImxpbmVcIjoxNjEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNjEsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoxNjEsXCJjb2x1bW5cIjozOH19fSxcIjE1XCI6e1wibmFtZVwiOlwiKGFub255bW91c18xNSlcIixcImxpbmVcIjoxNjgsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNjgsXCJjb2x1bW5cIjoxMX0sXCJlbmRcIjp7XCJsaW5lXCI6MTY4LFwiY29sdW1uXCI6Mzd9fX0sXCIxNlwiOntcIm5hbWVcIjpcIm9uVmFsdWVDaGFuZ2VcIixcImxpbmVcIjoxNzYsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNzYsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoxNzYsXCJjb2x1bW5cIjozOX19fSxcIjE3XCI6e1wibmFtZVwiOlwiKGFub255bW91c18xNylcIixcImxpbmVcIjoxNzgsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNzgsXCJjb2x1bW5cIjoyN30sXCJlbmRcIjp7XCJsaW5lXCI6MTc4LFwiY29sdW1uXCI6NDR9fX0sXCIxOFwiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfMTgpXCIsXCJsaW5lXCI6MTc5LFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTc5LFwiY29sdW1uXCI6NjB9LFwiZW5kXCI6e1wibGluZVwiOjE3OSxcImNvbHVtblwiOjc1fX19LFwiMTlcIjp7XCJuYW1lXCI6XCJ1bm9ic2VydmVWYWx1ZVwiLFwibGluZVwiOjIzOCxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIzOCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjIzOCxcImNvbHVtblwiOjMwfX19LFwiMjBcIjp7XCJuYW1lXCI6XCIoYW5vbnltb3VzXzIwKVwiLFwibGluZVwiOjI0NSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjI0NSxcImNvbHVtblwiOjM2fSxcImVuZFwiOntcImxpbmVcIjoyNDUsXCJjb2x1bW5cIjo1Mn19fSxcIjIxXCI6e1wibmFtZVwiOlwiKGFub255bW91c18yMSlcIixcImxpbmVcIjoyNTgsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyNTgsXCJjb2x1bW5cIjozNH0sXCJlbmRcIjp7XCJsaW5lXCI6MjU4LFwiY29sdW1uXCI6NTB9fX0sXCIyMlwiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfMjIpXCIsXCJsaW5lXCI6MjcyLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjcyLFwiY29sdW1uXCI6MzB9LFwiZW5kXCI6e1wibGluZVwiOjI3MixcImNvbHVtblwiOjQ3fX19LFwiMjNcIjp7XCJuYW1lXCI6XCIoYW5vbnltb3VzXzIzKVwiLFwibGluZVwiOjI5OSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjI5OSxcImNvbHVtblwiOjMzfSxcImVuZFwiOntcImxpbmVcIjoyOTksXCJjb2x1bW5cIjo1MH19fSxcIjI0XCI6e1wibmFtZVwiOlwiKGFub255bW91c18yNClcIixcImxpbmVcIjozMjYsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMjYsXCJjb2x1bW5cIjozM30sXCJlbmRcIjp7XCJsaW5lXCI6MzI2LFwiY29sdW1uXCI6NTB9fX0sXCIyNVwiOntcIm5hbWVcIjpcImZ1bGxVcGRhdGVcIixcImxpbmVcIjozNDAsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozNDAsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjozNDAsXCJjb2x1bW5cIjoyNn19fSxcIjI2XCI6e1wibmFtZVwiOlwiKGFub255bW91c18yNilcIixcImxpbmVcIjozNDEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozNDEsXCJjb2x1bW5cIjo1MH0sXCJlbmRcIjp7XCJsaW5lXCI6MzQxLFwiY29sdW1uXCI6NjV9fX0sXCIyN1wiOntcIm5hbWVcIjpcIihhbm9ueW1vdXNfMjcpXCIsXCJsaW5lXCI6MzQ4LFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzQ4LFwiY29sdW1uXCI6Mjh9LFwiZW5kXCI6e1wibGluZVwiOjM0OCxcImNvbHVtblwiOjM5fX19LFwiMjhcIjp7XCJuYW1lXCI6XCIoYW5vbnltb3VzXzI4KVwiLFwibGluZVwiOjM1MSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjM1MSxcImNvbHVtblwiOjI3fSxcImVuZFwiOntcImxpbmVcIjozNTEsXCJjb2x1bW5cIjozOH19fX0sXCJzdGF0ZW1lbnRNYXBcIjp7XCIxXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MyxcImNvbHVtblwiOjB9LFwiZW5kXCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjozNX19LFwiMlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjQsXCJjb2x1bW5cIjowfSxcImVuZFwiOntcImxpbmVcIjo0LFwiY29sdW1uXCI6NTB9fSxcIjNcIjp7XCJzdGFydFwiOntcImxpbmVcIjo1LFwiY29sdW1uXCI6MH0sXCJlbmRcIjp7XCJsaW5lXCI6NSxcImNvbHVtblwiOjM5fX0sXCI0XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NixcImNvbHVtblwiOjB9LFwiZW5kXCI6e1wibGluZVwiOjYsXCJjb2x1bW5cIjo0MH19LFwiNVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjcsXCJjb2x1bW5cIjowfSxcImVuZFwiOntcImxpbmVcIjo3LFwiY29sdW1uXCI6MzR9fSxcIjZcIjp7XCJzdGFydFwiOntcImxpbmVcIjo4LFwiY29sdW1uXCI6MH0sXCJlbmRcIjp7XCJsaW5lXCI6OCxcImNvbHVtblwiOjI5fX0sXCI3XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6OSxcImNvbHVtblwiOjB9LFwiZW5kXCI6e1wibGluZVwiOjksXCJjb2x1bW5cIjoyN319LFwiOFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjEwLFwiY29sdW1uXCI6MH0sXCJlbmRcIjp7XCJsaW5lXCI6MTAsXCJjb2x1bW5cIjoyOH19LFwiOVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjEzLFwiY29sdW1uXCI6MH0sXCJlbmRcIjp7XCJsaW5lXCI6MTMsXCJjb2x1bW5cIjozNH19LFwiMTBcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNCxcImNvbHVtblwiOjB9LFwiZW5kXCI6e1wibGluZVwiOjE0LFwiY29sdW1uXCI6Mjd9fSxcIjExXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTUsXCJjb2x1bW5cIjowfSxcImVuZFwiOntcImxpbmVcIjoxNSxcImNvbHVtblwiOjUwfX0sXCIxMlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjE3LFwiY29sdW1uXCI6MH0sXCJlbmRcIjp7XCJsaW5lXCI6MzU0LFwiY29sdW1uXCI6MX19LFwiMTNcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxOCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjIwLFwiY29sdW1uXCI6NX19LFwiMTRcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxOSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjE5LFwiY29sdW1uXCI6Nzd9fSxcIjE1XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjIsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoyNCxcImNvbHVtblwiOjV9fSxcIjE2XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjMsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoyMyxcImNvbHVtblwiOjg0fX0sXCIxN1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjI3LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MjcsXCJjb2x1bW5cIjo3MH19LFwiMThcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjM5LFwiY29sdW1uXCI6NX19LFwiMTlcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjM1LFwiY29sdW1uXCI6OX19LFwiMjBcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMixcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjozMixcImNvbHVtblwiOjUyfX0sXCIyMVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjM0LFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjM0LFwiY29sdW1uXCI6NTJ9fSxcIjIyXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzcsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjozNyxcImNvbHVtblwiOjQwfX0sXCIyM1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjM4LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MzgsXCJjb2x1bW5cIjo0OH19LFwiMjRcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0MSxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjQxLFwiY29sdW1uXCI6MjB9fSxcIjI1XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NDIsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjo0MixcImNvbHVtblwiOjE0fX0sXCIyNlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjQzLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6NDMsXCJjb2x1bW5cIjoyMn19LFwiMjdcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0NCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjQ0LFwiY29sdW1uXCI6MjF9fSxcIjI4XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NDUsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjo0NSxcImNvbHVtblwiOjI1fX0sXCIyOVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjQ2LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6NDYsXCJjb2x1bW5cIjoyMX19LFwiMzBcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0NyxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjQ3LFwiY29sdW1uXCI6MjJ9fSxcIjMxXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NDgsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjo0OCxcImNvbHVtblwiOjMxfX0sXCIzMlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjQ5LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6NDksXCJjb2x1bW5cIjoyNH19LFwiMzNcIjp7XCJzdGFydFwiOntcImxpbmVcIjo1MCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjUwLFwiY29sdW1uXCI6NzF9fSxcIjM0XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NTAsXCJjb2x1bW5cIjo0OH0sXCJlbmRcIjp7XCJsaW5lXCI6NTAsXCJjb2x1bW5cIjo3MX19LFwiMzVcIjp7XCJzdGFydFwiOntcImxpbmVcIjo1NyxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjYxLFwiY29sdW1uXCI6N319LFwiMzZcIjp7XCJzdGFydFwiOntcImxpbmVcIjo1OCxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjYwLFwiY29sdW1uXCI6OX19LFwiMzdcIjp7XCJzdGFydFwiOntcImxpbmVcIjo1OSxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjo1OSxcImNvbHVtblwiOjM5fX0sXCIzOFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjY2LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6NjYsXCJjb2x1bW5cIjoxOX19LFwiMzlcIjp7XCJzdGFydFwiOntcImxpbmVcIjo2OCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjcwLFwiY29sdW1uXCI6NX19LFwiNDBcIjp7XCJzdGFydFwiOntcImxpbmVcIjo2OSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjY5LFwiY29sdW1uXCI6NDF9fSxcIjQxXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NzIsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjo3NixcImNvbHVtblwiOjV9fSxcIjQyXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NzMsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjo3NSxcImNvbHVtblwiOjExfX0sXCI0M1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjc0LFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjc0LFwiY29sdW1uXCI6NDN9fSxcIjQ0XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NzgsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjo5OCxcImNvbHVtblwiOjd9fSxcIjQ1XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6ODAsXCJjb2x1bW5cIjoxMn0sXCJlbmRcIjp7XCJsaW5lXCI6ODAsXCJjb2x1bW5cIjoyNX19LFwiNDZcIjp7XCJzdGFydFwiOntcImxpbmVcIjo4MyxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjo4NixcImNvbHVtblwiOjEzfX0sXCI0N1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjg0LFwiY29sdW1uXCI6MTZ9LFwiZW5kXCI6e1wibGluZVwiOjg0LFwiY29sdW1uXCI6NzV9fSxcIjQ4XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6ODUsXCJjb2x1bW5cIjoxNn0sXCJlbmRcIjp7XCJsaW5lXCI6ODUsXCJjb2x1bW5cIjoyOX19LFwiNDlcIjp7XCJzdGFydFwiOntcImxpbmVcIjo4OCxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjo4OCxcImNvbHVtblwiOjYwfX0sXCI1MFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjkwLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjkzLFwiY29sdW1uXCI6MTN9fSxcIjUxXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6OTEsXCJjb2x1bW5cIjoxNn0sXCJlbmRcIjp7XCJsaW5lXCI6OTEsXCJjb2x1bW5cIjo1Nn19LFwiNTJcIjp7XCJzdGFydFwiOntcImxpbmVcIjo5MixcImNvbHVtblwiOjE2fSxcImVuZFwiOntcImxpbmVcIjo5MixcImNvbHVtblwiOjIzfX0sXCI1M1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjk1LFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjk1LFwiY29sdW1uXCI6Mzh9fSxcIjU0XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTAwLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MTA3LFwiY29sdW1uXCI6NX19LFwiNTVcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxMDEsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoxMDYsXCJjb2x1bW5cIjoxMX19LFwiNTZcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxMDksXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoxMzgsXCJjb2x1bW5cIjo1fX0sXCI1N1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjExMCxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjExMCxcImNvbHVtblwiOjc4fX0sXCI1OFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjExMCxcImNvbHVtblwiOjcxfSxcImVuZFwiOntcImxpbmVcIjoxMTAsXCJjb2x1bW5cIjo3OH19LFwiNTlcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxMTIsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoxMTIsXCJjb2x1bW5cIjozNH19LFwiNjBcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxMTMsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoxMzcsXCJjb2x1bW5cIjoxMX19LFwiNjFcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxMTQsXCJjb2x1bW5cIjoxMn0sXCJlbmRcIjp7XCJsaW5lXCI6MTM2LFwiY29sdW1uXCI6MTV9fSxcIjYyXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTIwLFwiY29sdW1uXCI6MTZ9LFwiZW5kXCI6e1wibGluZVwiOjEyMCxcImNvbHVtblwiOjExM319LFwiNjNcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxMjEsXCJjb2x1bW5cIjoxNn0sXCJlbmRcIjp7XCJsaW5lXCI6MTIxLFwiY29sdW1uXCI6NTJ9fSxcIjY0XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTIyLFwiY29sdW1uXCI6MTZ9LFwiZW5kXCI6e1wibGluZVwiOjEyOCxcImNvbHVtblwiOjE3fX0sXCI2NVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjEyMyxcImNvbHVtblwiOjIwfSxcImVuZFwiOntcImxpbmVcIjoxMjMsXCJjb2x1bW5cIjozN319LFwiNjZcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxMjQsXCJjb2x1bW5cIjoyMH0sXCJlbmRcIjp7XCJsaW5lXCI6MTI0LFwiY29sdW1uXCI6NDF9fSxcIjY3XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTI1LFwiY29sdW1uXCI6MjB9LFwiZW5kXCI6e1wibGluZVwiOjEyNSxcImNvbHVtblwiOjM1fX0sXCI2OFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjEyNixcImNvbHVtblwiOjIwfSxcImVuZFwiOntcImxpbmVcIjoxMjYsXCJjb2x1bW5cIjo1OX19LFwiNjlcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxMjcsXCJjb2x1bW5cIjoyMH0sXCJlbmRcIjp7XCJsaW5lXCI6MTI3LFwiY29sdW1uXCI6NTF9fSxcIjcwXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTI5LFwiY29sdW1uXCI6MTZ9LFwiZW5kXCI6e1wibGluZVwiOjEyOSxcImNvbHVtblwiOjQxfX0sXCI3MVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjEzMCxcImNvbHVtblwiOjE2fSxcImVuZFwiOntcImxpbmVcIjoxMzAsXCJjb2x1bW5cIjo0NH19LFwiNzJcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxMzEsXCJjb2x1bW5cIjoxNn0sXCJlbmRcIjp7XCJsaW5lXCI6MTM1LFwiY29sdW1uXCI6MTd9fSxcIjczXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTMyLFwiY29sdW1uXCI6MjB9LFwiZW5kXCI6e1wibGluZVwiOjEzMixcImNvbHVtblwiOjM1fX0sXCI3NFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjEzMyxcImNvbHVtblwiOjIzfSxcImVuZFwiOntcImxpbmVcIjoxMzUsXCJjb2x1bW5cIjoxN319LFwiNzVcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxMzQsXCJjb2x1bW5cIjoyMH0sXCJlbmRcIjp7XCJsaW5lXCI6MTM0LFwiY29sdW1uXCI6NjN9fSxcIjc2XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTQwLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MTQwLFwiY29sdW1uXCI6NDB9fSxcIjc3XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTQ0LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MTUzLFwiY29sdW1uXCI6NX19LFwiNzhcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNDUsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoxNDUsXCJjb2x1bW5cIjoyNX19LFwiNzlcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNDYsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoxNDYsXCJjb2x1bW5cIjozNn19LFwiODBcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNDcsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoxNDcsXCJjb2x1bW5cIjoyNX19LFwiODFcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNDgsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoxNDgsXCJjb2x1bW5cIjoyM319LFwiODJcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNDksXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoxNTEsXCJjb2x1bW5cIjo5fX0sXCI4M1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjE1MCxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjoxNTAsXCJjb2x1bW5cIjozN319LFwiODRcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNTIsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoxNTIsXCJjb2x1bW5cIjo0NX19LFwiODVcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNTUsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoxNTksXCJjb2x1bW5cIjo1fX0sXCI4NlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjE1NixcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjE1OCxcImNvbHVtblwiOjl9fSxcIjg3XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTU3LFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjE1NyxcImNvbHVtblwiOjQ5fX0sXCI4OFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjE2MSxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjE3NCxcImNvbHVtblwiOjV9fSxcIjg5XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTYyLFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MTczLFwiY29sdW1uXCI6MTF9fSxcIjkwXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTcwLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjE3MSxcImNvbHVtblwiOjQxfX0sXCI5MVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjE3MixcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjoxNzIsXCJjb2x1bW5cIjo0MX19LFwiOTJcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNzYsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoyMzYsXCJjb2x1bW5cIjo1fX0sXCI5M1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjE3NyxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjE3NyxcImNvbHVtblwiOjM0fX0sXCI5NFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjE3OCxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjIyOSxcImNvbHVtblwiOjExfX0sXCI5NVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjE3OSxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjoxODIsXCJjb2x1bW5cIjoxNX19LFwiOTZcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxODEsXCJjb2x1bW5cIjoxNn0sXCJlbmRcIjp7XCJsaW5lXCI6MTgxLFwiY29sdW1uXCI6NDh9fSxcIjk3XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTg2LFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjE4NixcImNvbHVtblwiOjYzfX0sXCI5OFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjE4NixcImNvbHVtblwiOjUzfSxcImVuZFwiOntcImxpbmVcIjoxODYsXCJjb2x1bW5cIjo2M319LFwiOTlcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxODgsXCJjb2x1bW5cIjoxMn0sXCJlbmRcIjp7XCJsaW5lXCI6MTg4LFwiY29sdW1uXCI6NTl9fSxcIjEwMFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjE4OSxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjoyMjgsXCJjb2x1bW5cIjoxM319LFwiMTAxXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTkxLFwiY29sdW1uXCI6MjB9LFwiZW5kXCI6e1wibGluZVwiOjE5NSxcImNvbHVtblwiOjIzfX0sXCIxMDJcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxOTYsXCJjb2x1bW5cIjoyMH0sXCJlbmRcIjp7XCJsaW5lXCI6MTk2LFwiY29sdW1uXCI6MjZ9fSxcIjEwM1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjE5OCxcImNvbHVtblwiOjIwfSxcImVuZFwiOntcImxpbmVcIjoyMDMsXCJjb2x1bW5cIjoyM319LFwiMTA0XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjA0LFwiY29sdW1uXCI6MjB9LFwiZW5kXCI6e1wibGluZVwiOjIwNCxcImNvbHVtblwiOjI2fX0sXCIxMDVcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyMDYsXCJjb2x1bW5cIjoyMH0sXCJlbmRcIjp7XCJsaW5lXCI6MjE0LFwiY29sdW1uXCI6MjN9fSxcIjEwNlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjIxNSxcImNvbHVtblwiOjIwfSxcImVuZFwiOntcImxpbmVcIjoyMTUsXCJjb2x1bW5cIjoyNn19LFwiMTA3XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjE3LFwiY29sdW1uXCI6MjB9LFwiZW5kXCI6e1wibGluZVwiOjIyMSxcImNvbHVtblwiOjIzfX0sXCIxMDhcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyMjIsXCJjb2x1bW5cIjoyMH0sXCJlbmRcIjp7XCJsaW5lXCI6MjIyLFwiY29sdW1uXCI6MjZ9fSxcIjEwOVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjIyNCxcImNvbHVtblwiOjIwfSxcImVuZFwiOntcImxpbmVcIjoyMjcsXCJjb2x1bW5cIjoyM319LFwiMTEwXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjMxLFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MjM1LFwiY29sdW1uXCI6OX19LFwiMTExXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjMyLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjIzMixcImNvbHVtblwiOjQ2fX0sXCIxMTJcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyMzQsXCJjb2x1bW5cIjoxMn0sXCJlbmRcIjp7XCJsaW5lXCI6MjM0LFwiY29sdW1uXCI6NjB9fSxcIjExM1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIzOCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjI0MixcImNvbHVtblwiOjV9fSxcIjExNFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjIzOSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjI0MSxcImNvbHVtblwiOjl9fSxcIjExNVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjI0MCxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjoyNDAsXCJjb2x1bW5cIjo1MX19LFwiMTE2XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjQ1LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MjU0LFwiY29sdW1uXCI6N319LFwiMTE3XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjQ2LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MjQ2LFwiY29sdW1uXCI6NjV9fSxcIjExOFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjI0NixcImNvbHVtblwiOjU4fSxcImVuZFwiOntcImxpbmVcIjoyNDYsXCJjb2x1bW5cIjo2NX19LFwiMTE5XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjQ3LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MjQ3LFwiY29sdW1uXCI6NTB9fSxcIjEyMFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjI0OSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjI1MSxcImNvbHVtblwiOjl9fSxcIjEyMVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjI1MCxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjoyNTAsXCJjb2x1bW5cIjo1MH19LFwiMTIyXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjUzLFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MjUzLFwiY29sdW1uXCI6NTB9fSxcIjEyM1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjI1OCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjMzOCxcImNvbHVtblwiOjd9fSxcIjEyNFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjI1OSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjI2NSxcImNvbHVtblwiOjl9fSxcIjEyNVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjI1OSxcImNvbHVtblwiOjU4fSxcImVuZFwiOntcImxpbmVcIjoyNTksXCJjb2x1bW5cIjo2NX19LFwiMTI2XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjYwLFwiY29sdW1uXCI6MTN9LFwiZW5kXCI6e1wibGluZVwiOjI2NSxcImNvbHVtblwiOjl9fSxcIjEyN1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjI2MSxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjoyNjIsXCJjb2x1bW5cIjo2MH19LFwiMTI4XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjYzLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjI2MyxcImNvbHVtblwiOjI1fX0sXCIxMjlcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyNjQsXCJjb2x1bW5cIjoxMn0sXCJlbmRcIjp7XCJsaW5lXCI6MjY0LFwiY29sdW1uXCI6MTl9fSxcIjEzMFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjI2NyxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjI2NyxcImNvbHVtblwiOjQ5fX0sXCIxMzFcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyNjksXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoyNjksXCJjb2x1bW5cIjozNn19LFwiMTMyXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjcwLFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MjcwLFwiY29sdW1uXCI6NDh9fSxcIjEzM1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjI3MSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjI3MSxcImNvbHVtblwiOjMyfX0sXCIxMzRcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyNzIsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoyOTUsXCJjb2x1bW5cIjoxMX19LFwiMTM1XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjczLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjI5NCxcImNvbHVtblwiOjEzfX0sXCIxMzZcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyNzUsXCJjb2x1bW5cIjoyMH0sXCJlbmRcIjp7XCJsaW5lXCI6Mjc1LFwiY29sdW1uXCI6NTh9fSxcIjEzN1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjI3NixcImNvbHVtblwiOjIwfSxcImVuZFwiOntcImxpbmVcIjoyNzYsXCJjb2x1bW5cIjoyNn19LFwiMTM4XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6Mjc4LFwiY29sdW1uXCI6MjB9LFwiZW5kXCI6e1wibGluZVwiOjI3OCxcImNvbHVtblwiOjc1fX0sXCIxMzlcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyNzksXCJjb2x1bW5cIjoyMH0sXCJlbmRcIjp7XCJsaW5lXCI6Mjc5LFwiY29sdW1uXCI6MjZ9fSxcIjE0MFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjI4MSxcImNvbHVtblwiOjIwfSxcImVuZFwiOntcImxpbmVcIjoyODEsXCJjb2x1bW5cIjo2OH19LFwiMTQxXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjgyLFwiY29sdW1uXCI6MjB9LFwiZW5kXCI6e1wibGluZVwiOjI4MixcImNvbHVtblwiOjM5fX0sXCIxNDJcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyODIsXCJjb2x1bW5cIjozMH0sXCJlbmRcIjp7XCJsaW5lXCI6MjgyLFwiY29sdW1uXCI6Mzl9fSxcIjE0M1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjI4MyxcImNvbHVtblwiOjIwfSxcImVuZFwiOntcImxpbmVcIjoyODMsXCJjb2x1bW5cIjo1M319LFwiMTQ0XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6Mjg0LFwiY29sdW1uXCI6MjB9LFwiZW5kXCI6e1wibGluZVwiOjI4NCxcImNvbHVtblwiOjUyfX0sXCIxNDVcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyODUsXCJjb2x1bW5cIjoyMH0sXCJlbmRcIjp7XCJsaW5lXCI6Mjg1LFwiY29sdW1uXCI6NDd9fSxcIjE0NlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjI4NixcImNvbHVtblwiOjIwfSxcImVuZFwiOntcImxpbmVcIjoyODYsXCJjb2x1bW5cIjo2MH19LFwiMTQ3XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6Mjg3LFwiY29sdW1uXCI6MjB9LFwiZW5kXCI6e1wibGluZVwiOjI4NyxcImNvbHVtblwiOjYzfX0sXCIxNDhcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyODgsXCJjb2x1bW5cIjoyMH0sXCJlbmRcIjp7XCJsaW5lXCI6Mjg4LFwiY29sdW1uXCI6MjZ9fSxcIjE0OVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjI5MCxcImNvbHVtblwiOjIwfSxcImVuZFwiOntcImxpbmVcIjoyOTAsXCJjb2x1bW5cIjo3NX19LFwiMTUwXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjkxLFwiY29sdW1uXCI6MjB9LFwiZW5kXCI6e1wibGluZVwiOjI5MSxcImNvbHVtblwiOjI2fX0sXCIxNTFcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyOTMsXCJjb2x1bW5cIjoyMH0sXCJlbmRcIjp7XCJsaW5lXCI6MjkzLFwiY29sdW1uXCI6NzV9fSxcIjE1MlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjI5NyxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjMzMyxcImNvbHVtblwiOjl9fSxcIjE1M1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjI5OCxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjoyOTgsXCJjb2x1bW5cIjoyOX19LFwiMTU0XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6Mjk5LFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjMyMSxcImNvbHVtblwiOjE1fX0sXCIxNTVcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMDAsXCJjb2x1bW5cIjoxNn0sXCJlbmRcIjp7XCJsaW5lXCI6MzIwLFwiY29sdW1uXCI6MTd9fSxcIjE1NlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjMwMyxcImNvbHVtblwiOjI0fSxcImVuZFwiOntcImxpbmVcIjozMDMsXCJjb2x1bW5cIjo3Nn19LFwiMTU3XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzA0LFwiY29sdW1uXCI6MjR9LFwiZW5kXCI6e1wibGluZVwiOjMwNCxcImNvbHVtblwiOjMwfX0sXCIxNThcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMDYsXCJjb2x1bW5cIjoyNH0sXCJlbmRcIjp7XCJsaW5lXCI6MzA2LFwiY29sdW1uXCI6Njl9fSxcIjE1OVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjMwNyxcImNvbHVtblwiOjI0fSxcImVuZFwiOntcImxpbmVcIjozMDcsXCJjb2x1bW5cIjo1NX19LFwiMTYwXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzA4LFwiY29sdW1uXCI6MjR9LFwiZW5kXCI6e1wibGluZVwiOjMwOCxcImNvbHVtblwiOjU4fX0sXCIxNjFcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMDksXCJjb2x1bW5cIjoyNH0sXCJlbmRcIjp7XCJsaW5lXCI6MzA5LFwiY29sdW1uXCI6NTF9fSxcIjE2MlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjMxMCxcImNvbHVtblwiOjI0fSxcImVuZFwiOntcImxpbmVcIjozMTAsXCJjb2x1bW5cIjo2NH19LFwiMTYzXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzExLFwiY29sdW1uXCI6MjR9LFwiZW5kXCI6e1wibGluZVwiOjMxMSxcImNvbHVtblwiOjY0fX0sXCIxNjRcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMTUsXCJjb2x1bW5cIjoyNH0sXCJlbmRcIjp7XCJsaW5lXCI6MzE1LFwiY29sdW1uXCI6NDR9fSxcIjE2NVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjMxNixcImNvbHVtblwiOjI0fSxcImVuZFwiOntcImxpbmVcIjozMTYsXCJjb2x1bW5cIjozMH19LFwiMTY2XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzE4LFwiY29sdW1uXCI6MjR9LFwiZW5kXCI6e1wibGluZVwiOjMxOCxcImNvbHVtblwiOjU5fX0sXCIxNjdcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMTksXCJjb2x1bW5cIjoyNH0sXCJlbmRcIjp7XCJsaW5lXCI6MzE5LFwiY29sdW1uXCI6MzB9fSxcIjE2OFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjMyMixcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjozMjIsXCJjb2x1bW5cIjoyN319LFwiMTY5XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzI2LFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjMzMixcImNvbHVtblwiOjE1fX0sXCIxNzBcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMjcsXCJjb2x1bW5cIjoxNn0sXCJlbmRcIjp7XCJsaW5lXCI6MzMxLFwiY29sdW1uXCI6MTd9fSxcIjE3MVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjMyOSxcImNvbHVtblwiOjI0fSxcImVuZFwiOntcImxpbmVcIjozMjksXCJjb2x1bW5cIjo3NX19LFwiMTcyXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzMwLFwiY29sdW1uXCI6MjR9LFwiZW5kXCI6e1wibGluZVwiOjMzMCxcImNvbHVtblwiOjMwfX0sXCIxNzNcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMzYsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjozMzYsXCJjb2x1bW5cIjozOH19LFwiMTc0XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzM3LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MzM3LFwiY29sdW1uXCI6NTl9fSxcIjE3NVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjM0MCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjM0NSxcImNvbHVtblwiOjV9fSxcIjE3NlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjM0MSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjM0NCxcImNvbHVtblwiOjExfX0sXCIxNzdcIjp7XCJzdGFydFwiOntcImxpbmVcIjozNDIsXCJjb2x1bW5cIjoxMn0sXCJlbmRcIjp7XCJsaW5lXCI6MzQyLFwiY29sdW1uXCI6NDJ9fSxcIjE3OFwiOntcInN0YXJ0XCI6e1wibGluZVwiOjM0MyxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjozNDMsXCJjb2x1bW5cIjo1MX19LFwiMTc5XCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzQ4LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MzUwLFwiY29sdW1uXCI6N319LFwiMTgwXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzQ5LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MzQ5LFwiY29sdW1uXCI6MzV9fSxcIjE4MVwiOntcInN0YXJ0XCI6e1wibGluZVwiOjM1MSxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjM1MyxcImNvbHVtblwiOjd9fSxcIjE4MlwiOntcInN0YXJ0XCI6e1wibGluZVwiOjM1MixcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjM1MixcImNvbHVtblwiOjMyfX19LFwiYnJhbmNoTWFwXCI6e1wiMVwiOntcImxpbmVcIjoxOCxcInR5cGVcIjpcImlmXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6MTgsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoxOCxcImNvbHVtblwiOjR9fSx7XCJzdGFydFwiOntcImxpbmVcIjoxOCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjE4LFwiY29sdW1uXCI6NH19XX0sXCIyXCI6e1wibGluZVwiOjE4LFwidHlwZVwiOlwiYmluYXJ5LWV4cHJcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjoxOCxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjE4LFwiY29sdW1uXCI6MTN9fSx7XCJzdGFydFwiOntcImxpbmVcIjoxOCxcImNvbHVtblwiOjE3fSxcImVuZFwiOntcImxpbmVcIjoxOCxcImNvbHVtblwiOjQxfX1dfSxcIjNcIjp7XCJsaW5lXCI6MjIsXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjIyLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MjIsXCJjb2x1bW5cIjo0fX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MjIsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoyMixcImNvbHVtblwiOjR9fV19LFwiNFwiOntcImxpbmVcIjoyMixcInR5cGVcIjpcImJpbmFyeS1leHByXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6MjIsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoyMixcImNvbHVtblwiOjE1fX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MjIsXCJjb2x1bW5cIjoxOX0sXCJlbmRcIjp7XCJsaW5lXCI6MjIsXCJjb2x1bW5cIjo0NX19XX0sXCI1XCI6e1wibGluZVwiOjMwLFwidHlwZVwiOlwiaWZcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjozMCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjMwLFwiY29sdW1uXCI6NH19LHtcInN0YXJ0XCI6e1wibGluZVwiOjMwLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MzAsXCJjb2x1bW5cIjo0fX1dfSxcIjZcIjp7XCJsaW5lXCI6MzEsXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjMxLFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MzEsXCJjb2x1bW5cIjo4fX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MzEsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjozMSxcImNvbHVtblwiOjh9fV19LFwiN1wiOntcImxpbmVcIjo0MyxcInR5cGVcIjpcImJpbmFyeS1leHByXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6NDMsXCJjb2x1bW5cIjoxMX0sXCJlbmRcIjp7XCJsaW5lXCI6NDMsXCJjb2x1bW5cIjoxNX19LHtcInN0YXJ0XCI6e1wibGluZVwiOjQzLFwiY29sdW1uXCI6MTl9LFwiZW5kXCI6e1wibGluZVwiOjQzLFwiY29sdW1uXCI6MjF9fV19LFwiOFwiOntcImxpbmVcIjo1MCxcInR5cGVcIjpcImlmXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6NTAsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjo1MCxcImNvbHVtblwiOjR9fSx7XCJzdGFydFwiOntcImxpbmVcIjo1MCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjUwLFwiY29sdW1uXCI6NH19XX0sXCI5XCI6e1wibGluZVwiOjU4LFwidHlwZVwiOlwiaWZcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjo1OCxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjU4LFwiY29sdW1uXCI6OH19LHtcInN0YXJ0XCI6e1wibGluZVwiOjU4LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6NTgsXCJjb2x1bW5cIjo4fX1dfSxcIjEwXCI6e1wibGluZVwiOjU4LFwidHlwZVwiOlwiYmluYXJ5LWV4cHJcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjo1OCxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjo1OCxcImNvbHVtblwiOjMwfX0se1wic3RhcnRcIjp7XCJsaW5lXCI6NTgsXCJjb2x1bW5cIjozNH0sXCJlbmRcIjp7XCJsaW5lXCI6NTgsXCJjb2x1bW5cIjo2MH19XX0sXCIxMVwiOntcImxpbmVcIjo4MyxcInR5cGVcIjpcImlmXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6ODMsXCJjb2x1bW5cIjoxMn0sXCJlbmRcIjp7XCJsaW5lXCI6ODMsXCJjb2x1bW5cIjoxMn19LHtcInN0YXJ0XCI6e1wibGluZVwiOjgzLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjgzLFwiY29sdW1uXCI6MTJ9fV19LFwiMTJcIjp7XCJsaW5lXCI6OTAsXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjkwLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjkwLFwiY29sdW1uXCI6MTJ9fSx7XCJzdGFydFwiOntcImxpbmVcIjo5MCxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjo5MCxcImNvbHVtblwiOjEyfX1dfSxcIjEzXCI6e1wibGluZVwiOjExMCxcInR5cGVcIjpcImlmXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6MTEwLFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MTEwLFwiY29sdW1uXCI6OH19LHtcInN0YXJ0XCI6e1wibGluZVwiOjExMCxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjExMCxcImNvbHVtblwiOjh9fV19LFwiMTRcIjp7XCJsaW5lXCI6MTEwLFwidHlwZVwiOlwiYmluYXJ5LWV4cHJcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjoxMTAsXCJjb2x1bW5cIjoxMn0sXCJlbmRcIjp7XCJsaW5lXCI6MTEwLFwiY29sdW1uXCI6Mzh9fSx7XCJzdGFydFwiOntcImxpbmVcIjoxMTAsXCJjb2x1bW5cIjo0Mn0sXCJlbmRcIjp7XCJsaW5lXCI6MTEwLFwiY29sdW1uXCI6Njl9fV19LFwiMTVcIjp7XCJsaW5lXCI6MTIyLFwidHlwZVwiOlwiaWZcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjoxMjIsXCJjb2x1bW5cIjoxNn0sXCJlbmRcIjp7XCJsaW5lXCI6MTIyLFwiY29sdW1uXCI6MTZ9fSx7XCJzdGFydFwiOntcImxpbmVcIjoxMjIsXCJjb2x1bW5cIjoxNn0sXCJlbmRcIjp7XCJsaW5lXCI6MTIyLFwiY29sdW1uXCI6MTZ9fV19LFwiMTZcIjp7XCJsaW5lXCI6MTIyLFwidHlwZVwiOlwiYmluYXJ5LWV4cHJcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjoxMjIsXCJjb2x1bW5cIjoyMH0sXCJlbmRcIjp7XCJsaW5lXCI6MTIyLFwiY29sdW1uXCI6NTF9fSx7XCJzdGFydFwiOntcImxpbmVcIjoxMjIsXCJjb2x1bW5cIjo1NX0sXCJlbmRcIjp7XCJsaW5lXCI6MTIyLFwiY29sdW1uXCI6ODB9fV19LFwiMTdcIjp7XCJsaW5lXCI6MTMxLFwidHlwZVwiOlwiaWZcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjoxMzEsXCJjb2x1bW5cIjoxNn0sXCJlbmRcIjp7XCJsaW5lXCI6MTMxLFwiY29sdW1uXCI6MTZ9fSx7XCJzdGFydFwiOntcImxpbmVcIjoxMzEsXCJjb2x1bW5cIjoxNn0sXCJlbmRcIjp7XCJsaW5lXCI6MTMxLFwiY29sdW1uXCI6MTZ9fV19LFwiMThcIjp7XCJsaW5lXCI6MTMzLFwidHlwZVwiOlwiaWZcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjoxMzMsXCJjb2x1bW5cIjoyM30sXCJlbmRcIjp7XCJsaW5lXCI6MTMzLFwiY29sdW1uXCI6MjN9fSx7XCJzdGFydFwiOntcImxpbmVcIjoxMzMsXCJjb2x1bW5cIjoyM30sXCJlbmRcIjp7XCJsaW5lXCI6MTMzLFwiY29sdW1uXCI6MjN9fV19LFwiMTlcIjp7XCJsaW5lXCI6MTQ5LFwidHlwZVwiOlwiaWZcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjoxNDksXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoxNDksXCJjb2x1bW5cIjo4fX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MTQ5LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MTQ5LFwiY29sdW1uXCI6OH19XX0sXCIyMFwiOntcImxpbmVcIjoxNTYsXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjE1NixcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjE1NixcImNvbHVtblwiOjh9fSx7XCJzdGFydFwiOntcImxpbmVcIjoxNTYsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoxNTYsXCJjb2x1bW5cIjo4fX1dfSxcIjIxXCI6e1wibGluZVwiOjE1NixcInR5cGVcIjpcImJpbmFyeS1leHByXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6MTU2LFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjE1NixcImNvbHVtblwiOjM3fX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MTU2LFwiY29sdW1uXCI6NDF9LFwiZW5kXCI6e1wibGluZVwiOjE1NixcImNvbHVtblwiOjU1fX1dfSxcIjIyXCI6e1wibGluZVwiOjE4NixcInR5cGVcIjpcImlmXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6MTg2LFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjE4NixcImNvbHVtblwiOjEyfX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MTg2LFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjE4NixcImNvbHVtblwiOjEyfX1dfSxcIjIzXCI6e1wibGluZVwiOjE4NixcInR5cGVcIjpcImJpbmFyeS1leHByXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6MTg2LFwiY29sdW1uXCI6MTZ9LFwiZW5kXCI6e1wibGluZVwiOjE4NixcImNvbHVtblwiOjMzfX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MTg2LFwiY29sdW1uXCI6Mzd9LFwiZW5kXCI6e1wibGluZVwiOjE4NixcImNvbHVtblwiOjUxfX1dfSxcIjI0XCI6e1wibGluZVwiOjE4OSxcInR5cGVcIjpcInN3aXRjaFwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjE5MCxcImNvbHVtblwiOjE2fSxcImVuZFwiOntcImxpbmVcIjoxOTYsXCJjb2x1bW5cIjoyNn19LHtcInN0YXJ0XCI6e1wibGluZVwiOjE5NyxcImNvbHVtblwiOjE2fSxcImVuZFwiOntcImxpbmVcIjoyMDQsXCJjb2x1bW5cIjoyNn19LHtcInN0YXJ0XCI6e1wibGluZVwiOjIwNSxcImNvbHVtblwiOjE2fSxcImVuZFwiOntcImxpbmVcIjoyMTUsXCJjb2x1bW5cIjoyNn19LHtcInN0YXJ0XCI6e1wibGluZVwiOjIxNixcImNvbHVtblwiOjE2fSxcImVuZFwiOntcImxpbmVcIjoyMjIsXCJjb2x1bW5cIjoyNn19LHtcInN0YXJ0XCI6e1wibGluZVwiOjIyMyxcImNvbHVtblwiOjE2fSxcImVuZFwiOntcImxpbmVcIjoyMjcsXCJjb2x1bW5cIjoyM319XX0sXCIyNVwiOntcImxpbmVcIjoyMzEsXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjIzMSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjIzMSxcImNvbHVtblwiOjh9fSx7XCJzdGFydFwiOntcImxpbmVcIjoyMzEsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoyMzEsXCJjb2x1bW5cIjo4fX1dfSxcIjI2XCI6e1wibGluZVwiOjIzOSxcInR5cGVcIjpcImlmXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6MjM5LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MjM5LFwiY29sdW1uXCI6OH19LHtcInN0YXJ0XCI6e1wibGluZVwiOjIzOSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjIzOSxcImNvbHVtblwiOjh9fV19LFwiMjdcIjp7XCJsaW5lXCI6MjM5LFwidHlwZVwiOlwiYmluYXJ5LWV4cHJcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjoyMzksXCJjb2x1bW5cIjoxMn0sXCJlbmRcIjp7XCJsaW5lXCI6MjM5LFwiY29sdW1uXCI6Mzd9fSx7XCJzdGFydFwiOntcImxpbmVcIjoyMzksXCJjb2x1bW5cIjo0MX0sXCJlbmRcIjp7XCJsaW5lXCI6MjM5LFwiY29sdW1uXCI6NTV9fV19LFwiMjhcIjp7XCJsaW5lXCI6MjQ2LFwidHlwZVwiOlwiaWZcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjoyNDYsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoyNDYsXCJjb2x1bW5cIjo4fX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MjQ2LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MjQ2LFwiY29sdW1uXCI6OH19XX0sXCIyOVwiOntcImxpbmVcIjoyNDYsXCJ0eXBlXCI6XCJiaW5hcnktZXhwclwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjI0NixcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjoyNDYsXCJjb2x1bW5cIjozMH19LHtcInN0YXJ0XCI6e1wibGluZVwiOjI0NixcImNvbHVtblwiOjM0fSxcImVuZFwiOntcImxpbmVcIjoyNDYsXCJjb2x1bW5cIjo1Nn19XX0sXCIzMFwiOntcImxpbmVcIjoyNDksXCJ0eXBlXCI6XCJpZlwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjI0OSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjI0OSxcImNvbHVtblwiOjh9fSx7XCJzdGFydFwiOntcImxpbmVcIjoyNDksXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjoyNDksXCJjb2x1bW5cIjo4fX1dfSxcIjMxXCI6e1wibGluZVwiOjI1OSxcInR5cGVcIjpcImlmXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6MjU5LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MjU5LFwiY29sdW1uXCI6OH19LHtcInN0YXJ0XCI6e1wibGluZVwiOjI1OSxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjI1OSxcImNvbHVtblwiOjh9fV19LFwiMzJcIjp7XCJsaW5lXCI6MjU5LFwidHlwZVwiOlwiYmluYXJ5LWV4cHJcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjoyNTksXCJjb2x1bW5cIjoxMn0sXCJlbmRcIjp7XCJsaW5lXCI6MjU5LFwiY29sdW1uXCI6MzB9fSx7XCJzdGFydFwiOntcImxpbmVcIjoyNTksXCJjb2x1bW5cIjozNH0sXCJlbmRcIjp7XCJsaW5lXCI6MjU5LFwiY29sdW1uXCI6NTZ9fV19LFwiMzNcIjp7XCJsaW5lXCI6MjYwLFwidHlwZVwiOlwiaWZcIixcImxvY2F0aW9uc1wiOlt7XCJzdGFydFwiOntcImxpbmVcIjoyNjAsXCJjb2x1bW5cIjoxM30sXCJlbmRcIjp7XCJsaW5lXCI6MjYwLFwiY29sdW1uXCI6MTN9fSx7XCJzdGFydFwiOntcImxpbmVcIjoyNjAsXCJjb2x1bW5cIjoxM30sXCJlbmRcIjp7XCJsaW5lXCI6MjYwLFwiY29sdW1uXCI6MTN9fV19LFwiMzRcIjp7XCJsaW5lXCI6MjczLFwidHlwZVwiOlwic3dpdGNoXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6Mjc0LFwiY29sdW1uXCI6MTZ9LFwiZW5kXCI6e1wibGluZVwiOjI3NixcImNvbHVtblwiOjI2fX0se1wic3RhcnRcIjp7XCJsaW5lXCI6Mjc3LFwiY29sdW1uXCI6MTZ9LFwiZW5kXCI6e1wibGluZVwiOjI3OSxcImNvbHVtblwiOjI2fX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MjgwLFwiY29sdW1uXCI6MTZ9LFwiZW5kXCI6e1wibGluZVwiOjI4OCxcImNvbHVtblwiOjI2fX0se1wic3RhcnRcIjp7XCJsaW5lXCI6Mjg5LFwiY29sdW1uXCI6MTZ9LFwiZW5kXCI6e1wibGluZVwiOjI5MSxcImNvbHVtblwiOjI2fX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MjkyLFwiY29sdW1uXCI6MTZ9LFwiZW5kXCI6e1wibGluZVwiOjI5MyxcImNvbHVtblwiOjc1fX1dfSxcIjM1XCI6e1wibGluZVwiOjI4MixcInR5cGVcIjpcImlmXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6MjgyLFwiY29sdW1uXCI6MjB9LFwiZW5kXCI6e1wibGluZVwiOjI4MixcImNvbHVtblwiOjIwfX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MjgyLFwiY29sdW1uXCI6MjB9LFwiZW5kXCI6e1wibGluZVwiOjI4MixcImNvbHVtblwiOjIwfX1dfSxcIjM2XCI6e1wibGluZVwiOjI5NyxcInR5cGVcIjpcImlmXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6Mjk3LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6Mjk3LFwiY29sdW1uXCI6OH19LHtcInN0YXJ0XCI6e1wibGluZVwiOjI5NyxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjI5NyxcImNvbHVtblwiOjh9fV19LFwiMzdcIjp7XCJsaW5lXCI6MzAwLFwidHlwZVwiOlwic3dpdGNoXCIsXCJsb2NhdGlvbnNcIjpbe1wic3RhcnRcIjp7XCJsaW5lXCI6MzAxLFwiY29sdW1uXCI6MjB9LFwiZW5kXCI6e1wibGluZVwiOjMwMSxcImNvbHVtblwiOjMxfX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MzAyLFwiY29sdW1uXCI6MjB9LFwiZW5kXCI6e1wibGluZVwiOjMwNCxcImNvbHVtblwiOjMwfX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MzA1LFwiY29sdW1uXCI6MjB9LFwiZW5kXCI6e1wibGluZVwiOjMxNixcImNvbHVtblwiOjMwfX0se1wic3RhcnRcIjp7XCJsaW5lXCI6MzE3LFwiY29sdW1uXCI6MjB9LFwiZW5kXCI6e1wibGluZVwiOjMxOSxcImNvbHVtblwiOjMwfX1dfSxcIjM4XCI6e1wibGluZVwiOjMyNyxcInR5cGVcIjpcInN3aXRjaFwiLFwibG9jYXRpb25zXCI6W3tcInN0YXJ0XCI6e1wibGluZVwiOjMyOCxcImNvbHVtblwiOjIwfSxcImVuZFwiOntcImxpbmVcIjozMzAsXCJjb2x1bW5cIjozMH19XX19fTtcbn1cbl9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEgPSBfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBWycvVXNlcnMvbWF0dC9EZXYvbm9kZWNnL2xpYi9icm93c2VyL3JlcGxpY2FudC5qcyddO1xuX19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxJ10rKzt2YXIgaW5oZXJpdHM9cmVxdWlyZSgnaW5oZXJpdHMnKTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzInXSsrO3ZhciBFdmVudEVtaXR0ZXI9cmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMyddKys7dmFyIE5lc3RlZD1yZXF1aXJlKCduZXN0ZWQtb2JzZXJ2ZScpO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snNCddKys7dmFyIG9iamVjdFBhdGg9cmVxdWlyZSgnb2JqZWN0LXBhdGgnKTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzUnXSsrO3ZhciBlcXVhbD1yZXF1aXJlKCdkZWVwLWVxdWFsJyk7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyc2J10rKzt2YXIgY2xvbmU9cmVxdWlyZSgnY2xvbmUnKTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzcnXSsrO3ZhciB1dWlkPXJlcXVpcmUoJ3V1aWQnKTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzgnXSsrO3ZhciBkZWNsYXJlZFJlcGxpY2FudHM9e307X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyc5J10rKztpbmhlcml0cyhSZXBsaWNhbnQsRXZlbnRFbWl0dGVyKTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzEwJ10rKzttb2R1bGUuZXhwb3J0cz1SZXBsaWNhbnQ7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxMSddKys7UmVwbGljYW50LmRlY2xhcmVkUmVwbGljYW50cz1kZWNsYXJlZFJlcGxpY2FudHM7ZnVuY3Rpb24gUmVwbGljYW50KG5hbWUsYnVuZGxlLG9wdHMsc29ja2V0KXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmZbJzEnXSsrO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTMnXSsrO2lmKChfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzInXVswXSsrLCFuYW1lKXx8KF9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMiddWzFdKyssdHlwZW9mIG5hbWUhPT0nc3RyaW5nJykpe19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMSddWzBdKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxNCddKys7dGhyb3cgbmV3IEVycm9yKCdNdXN0IHN1cHBseSBhIG5hbWUgd2hlbiBpbnN0YW50aWF0aW5nIGEgUmVwbGljYW50Jyk7fWVsc2V7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWycxJ11bMV0rKzt9X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxNSddKys7aWYoKF9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnNCddWzBdKyssIWJ1bmRsZSl8fChfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzQnXVsxXSsrLHR5cGVvZiBidW5kbGUhPT0nc3RyaW5nJykpe19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMyddWzBdKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxNiddKys7dGhyb3cgbmV3IEVycm9yKCdNdXN0IHN1cHBseSBhIGJ1bmRsZSBuYW1lIHdoZW4gaW5zdGFudGlhdGluZyBhIFJlcGxpY2FudCcpO31lbHNle19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMyddWzFdKys7fV9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTcnXSsrO3ZhciBsb2c9cmVxdWlyZSgnLi9sb2dnZXInKSgnUmVwbGljYW50LycrYnVuZGxlKycuJytuYW1lKTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzE4J10rKztpZihkZWNsYXJlZFJlcGxpY2FudHMuaGFzT3duUHJvcGVydHkoYnVuZGxlKSl7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWyc1J11bMF0rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzE5J10rKztpZihkZWNsYXJlZFJlcGxpY2FudHNbYnVuZGxlXS5oYXNPd25Qcm9wZXJ0eShuYW1lKSl7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWyc2J11bMF0rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzIwJ10rKztyZXR1cm4gZGVjbGFyZWRSZXBsaWNhbnRzW2J1bmRsZV1bbmFtZV07fWVsc2V7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWyc2J11bMV0rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzIxJ10rKztkZWNsYXJlZFJlcGxpY2FudHNbYnVuZGxlXVtuYW1lXT10aGlzO319ZWxzZXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzUnXVsxXSsrO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMjInXSsrO2RlY2xhcmVkUmVwbGljYW50c1tidW5kbGVdPXt9O19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMjMnXSsrO2RlY2xhcmVkUmVwbGljYW50c1tidW5kbGVdW25hbWVdPXRoaXM7fV9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMjQnXSsrO3ZhciBzZWxmPXRoaXM7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycyNSddKys7dmFyIHZhbHVlO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMjYnXSsrO29wdHM9KF9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnNyddWzBdKyssb3B0cyl8fChfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzcnXVsxXSsrLHt9KTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzI3J10rKzt0aGlzLm5hbWU9bmFtZTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzI4J10rKzt0aGlzLmJ1bmRsZT1idW5kbGU7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycyOSddKys7dGhpcy5vcHRzPW9wdHM7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyczMCddKys7dGhpcy5yZXZpc2lvbj0wO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMzEnXSsrO3RoaXMuc3RhdHVzPSd1bmRlY2xhcmVkJztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzMyJ10rKzt0aGlzLmlkPXV1aWQudjQoKTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzMzJ10rKztpZih0eXBlb2Ygb3B0cy5wZXJzaXN0ZW50PT09J3VuZGVmaW5lZCcpe19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnOCddWzBdKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyczNCddKys7b3B0cy5wZXJzaXN0ZW50PXRydWU7fWVsc2V7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWyc4J11bMV0rKzt9X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyczNSddKys7dGhpcy5vbignbmV3TGlzdGVuZXInLGZ1bmN0aW9uKGV2ZW50LGxpc3RlbmVyKXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmZbJzInXSsrO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMzYnXSsrO2lmKChfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzEwJ11bMF0rKyxldmVudD09PSdjaGFuZ2UnKSYmKF9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMTAnXVsxXSsrLHNlbGYuc3RhdHVzPT09J2RlY2xhcmVkJykpe19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnOSddWzBdKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyczNyddKys7bGlzdGVuZXIodW5kZWZpbmVkLHZhbHVlKTt9ZWxzZXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzknXVsxXSsrO319KTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzM4J10rKzt2YXIgcXVldWU9W107ZnVuY3Rpb24gYWRkVG9RdWV1ZShmbixhcmdzKXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmZbJzMnXSsrO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snNDAnXSsrO3F1ZXVlLnB1c2goe2ZuOmZuLGFyZ3M6YXJnc30pO31mdW5jdGlvbiBwcm9jZXNzUXVldWUoKXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmZbJzQnXSsrO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snNDInXSsrO3F1ZXVlLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5mWyc1J10rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzQzJ10rKztpdGVtLmZuLmFwcGx5KHRoaXMsaXRlbS5hcmdzKTt9KTt9X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyc0NCddKys7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsJ3ZhbHVlJyx7Z2V0OmZ1bmN0aW9uKCl7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5mWyc2J10rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzQ1J10rKztyZXR1cm4gdmFsdWU7fSxzZXQ6ZnVuY3Rpb24obmV3VmFsdWUpe19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuZlsnNyddKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyc0NiddKys7aWYobmV3VmFsdWU9PT12YWx1ZSl7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWycxMSddWzBdKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyc0NyddKys7bG9nLnJlcGxpY2FudHMoJ3ZhbHVlIHVuY2hhbmdlZCwgbm8gYWN0aW9uIHdpbGwgYmUgdGFrZW4nKTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzQ4J10rKztyZXR1cm4gdmFsdWU7fWVsc2V7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWycxMSddWzFdKys7fV9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snNDknXSsrO2xvZy5yZXBsaWNhbnRzKCdydW5uaW5nIHNldHRlciB3aXRoJyxuZXdWYWx1ZSk7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyc1MCddKys7aWYoc2VsZi5zdGF0dXMhPT0nZGVjbGFyZWQnKXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzEyJ11bMF0rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzUxJ10rKzthZGRUb1F1ZXVlKGRvQnJvd3NlclNldHRlcixbbmV3VmFsdWVdKTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzUyJ10rKztyZXR1cm47fWVsc2V7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWycxMiddWzFdKys7fV9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snNTMnXSsrO2RvQnJvd3NlclNldHRlcihuZXdWYWx1ZSk7fSxlbnVtZXJhYmxlOnRydWV9KTtmdW5jdGlvbiBkb0Jyb3dzZXJTZXR0ZXIobmV3VmFsdWUpe19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuZlsnOCddKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyc1NSddKys7c29ja2V0LmVtaXQoJ2Fzc2lnblJlcGxpY2FudCcse25hbWU6bmFtZSxidW5kbGU6YnVuZGxlLHZhbHVlOm5ld1ZhbHVlLG9yaWdpbmF0b3JJZDpzZWxmLmlkfSk7fWZ1bmN0aW9uIGRvQnJvd3NlckRlY2xhcmUoZGVmYXVsdFZhbHVlKXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmZbJzknXSsrO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snNTcnXSsrO2lmKChfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzE0J11bMF0rKyxzZWxmLnN0YXR1cz09PSdkZWNsYXJlZCcpfHwoX19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWycxNCddWzFdKyssc2VsZi5zdGF0dXM9PT0nZGVjbGFyaW5nJykpe19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMTMnXVswXSsrO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snNTgnXSsrO3JldHVybjt9ZWxzZXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzEzJ11bMV0rKzt9X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyc1OSddKys7c2VsZi5zdGF0dXM9J2RlY2xhcmluZyc7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyc2MCddKys7c29ja2V0LmVtaXQoJ2pvaW5Sb29tJyxidW5kbGUsZnVuY3Rpb24oKXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmZbJzEwJ10rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzYxJ10rKztzb2NrZXQuZW1pdCgnZGVjbGFyZVJlcGxpY2FudCcse25hbWU6bmFtZSxidW5kbGU6YnVuZGxlLGRlZmF1bHRWYWx1ZTpkZWZhdWx0VmFsdWUscGVyc2lzdGVudDpvcHRzLnBlcnNpc3RlbnR9LGZ1bmN0aW9uKGRhdGEpe19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuZlsnMTEnXSsrO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snNjInXSsrO2xvZy5yZXBsaWNhbnRzKCdkZWNsYXJlUmVwbGljYW50IGNhbGxiYWNrICh2YWx1ZTogJXMsIHJldmlzaW9uOiAlcyknLGRhdGEudmFsdWUsZGF0YS5yZXZpc2lvbik7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyc2MyddKys7dmFyIGRpZE1pc21hdGNoUmVhc3NpZ25tZW50PWZhbHNlO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snNjQnXSsrO2lmKChfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzE2J11bMF0rKyxzZWxmLnJldmlzaW9uIT09ZGF0YS5yZXZpc2lvbil8fChfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzE2J11bMV0rKywhZXF1YWwodmFsdWUsZGF0YS52YWx1ZSkpKXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzE1J11bMF0rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzY1J10rKzt1bm9ic2VydmVWYWx1ZSgpO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snNjYnXSsrO3ZhbHVlPWRlZmF1bHRWYWx1ZTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzY3J10rKztvYnNlcnZlVmFsdWUoKTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzY4J10rKzthc3NpZ25WYWx1ZShkYXRhLnZhbHVlLGRhdGEucmV2aXNpb24pO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snNjknXSsrO2RpZE1pc21hdGNoUmVhc3NpZ25tZW50PXRydWU7fWVsc2V7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWycxNSddWzFdKys7fV9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snNzAnXSsrO3NlbGYuc3RhdHVzPSdkZWNsYXJlZCc7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyc3MSddKys7c2VsZi5lbWl0KCdkZWNsYXJlZCcsZGF0YSk7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyc3MiddKys7aWYocXVldWUubGVuZ3RoPjApe19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMTcnXVswXSsrO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snNzMnXSsrO3Byb2Nlc3NRdWV1ZSgpO31lbHNle19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMTcnXVsxXSsrO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snNzQnXSsrO2lmKCFkaWRNaXNtYXRjaFJlYXNzaWdubWVudCl7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWycxOCddWzBdKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyc3NSddKys7c2VsZi5lbWl0KCdjaGFuZ2UnLHVuZGVmaW5lZCxkYXRhLnZhbHVlKTt9ZWxzZXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzE4J11bMV0rKzt9fX0pO30pO31fX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzc2J10rKztkb0Jyb3dzZXJEZWNsYXJlKG9wdHMuZGVmYXVsdFZhbHVlKTtmdW5jdGlvbiBhc3NpZ25WYWx1ZShuZXdWYWx1ZSxyZXZpc2lvbil7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5mWycxMiddKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyc3OCddKys7dW5vYnNlcnZlVmFsdWUoKTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzc5J10rKzt2YXIgb2xkVmFsdWU9Y2xvbmUodmFsdWUpO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snODAnXSsrO3ZhbHVlPW5ld1ZhbHVlO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snODEnXSsrO29ic2VydmVWYWx1ZSgpO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snODInXSsrO2lmKHR5cGVvZiByZXZpc2lvbiE9PSd1bmRlZmluZWQnKXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzE5J11bMF0rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzgzJ10rKztzZWxmLnJldmlzaW9uPXJldmlzaW9uO31lbHNle19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMTknXVsxXSsrO31fX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzg0J10rKztzZWxmLmVtaXQoJ2NoYW5nZScsb2xkVmFsdWUsdmFsdWUpO31mdW5jdGlvbiBvYnNlcnZlVmFsdWUoKXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmZbJzEzJ10rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzg2J10rKztpZigoX19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWycyMSddWzBdKyssdHlwZW9mIHZhbHVlPT09J29iamVjdCcpJiYoX19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWycyMSddWzFdKyssdmFsdWUhPT1udWxsKSl7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWycyMCddWzBdKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyc4NyddKys7TmVzdGVkLm9ic2VydmUodmFsdWUsb25WYWx1ZUNoYW5nZSk7fWVsc2V7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWycyMCddWzFdKys7fX1mdW5jdGlvbiBkaXNwYXRjaENoYW5nZXMoY2hhbmdlcyl7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5mWycxNCddKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyc4OSddKys7c29ja2V0LmVtaXQoJ2NoYW5nZVJlcGxpY2FudCcse25hbWU6bmFtZSxidW5kbGU6YnVuZGxlLGNoYW5nZXM6Y2hhbmdlcyxyZXZpc2lvbjpzZWxmLnJldmlzaW9uLG9yaWdpbmF0b3JJZDpzZWxmLmlkfSxmdW5jdGlvbih2YWx1ZSxyZXZpc2lvbil7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5mWycxNSddKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyc5MCddKys7bG9nLnJlcGxpY2FudHMoJ05vdCBhdCBoZWFkIHJldmlzaW9uIChvdXJzICVzLCB0aGVpcnMgJXMpLiBDaGFuZ2UgYWJvcnRlZCAmIGhlYWQgcmV2aXNpb24gYXBwbGllZC4nLHNlbGYucmV2aXNpb24scmV2aXNpb24pO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snOTEnXSsrO2Fzc2lnblZhbHVlKHZhbHVlLHJldmlzaW9uKTt9KTt9ZnVuY3Rpb24gb25WYWx1ZUNoYW5nZShyYXdDaGFuZ2VzKXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmZbJzE2J10rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzkzJ10rKzt2YXIgZm9ybWF0dGVkQ2hhbmdlcz1bXTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzk0J10rKztyYXdDaGFuZ2VzLmZvckVhY2goZnVuY3Rpb24oY2hhbmdlKXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmZbJzE3J10rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzk1J10rKzt2YXIgcGF0aD1jaGFuZ2UucGF0aC5zdWJzdHIoMSkuc3BsaXQoJy8nKS5tYXAoZnVuY3Rpb24ocGFydCl7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5mWycxOCddKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyc5NiddKys7cmV0dXJuIHBhcnQucmVwbGFjZSgvXFx+MS9nLCcvJyk7fSk7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWyc5NyddKys7aWYoKF9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMjMnXVswXSsrLHBhdGgubGVuZ3RoPT09MSkmJihfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzIzJ11bMV0rKyxwYXRoWzBdPT09JycpKXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzIyJ11bMF0rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzk4J10rKztwYXRoPVtdO31lbHNle19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMjInXVsxXSsrO31fX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzk5J10rKzt2YXIgbmV3VmFsPW9iamVjdFBhdGguZ2V0KGNoYW5nZS5yb290LHBhdGgpO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTAwJ10rKztzd2l0Y2goY2hhbmdlLnR5cGUpe2Nhc2UnYWRkJzpfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzI0J11bMF0rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzEwMSddKys7Zm9ybWF0dGVkQ2hhbmdlcy5wdXNoKHt0eXBlOidhZGQnLHBhdGg6cGF0aCxuZXdWYWx1ZTpuZXdWYWx9KTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzEwMiddKys7YnJlYWs7Y2FzZSd1cGRhdGUnOl9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMjQnXVsxXSsrO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTAzJ10rKztmb3JtYXR0ZWRDaGFuZ2VzLnB1c2goe3R5cGU6J3VwZGF0ZScscGF0aDpwYXRoLG9sZFZhbHVlOmNoYW5nZS5vbGRWYWx1ZSxuZXdWYWx1ZTpuZXdWYWx9KTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzEwNCddKys7YnJlYWs7Y2FzZSdzcGxpY2UnOl9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMjQnXVsyXSsrO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTA1J10rKztmb3JtYXR0ZWRDaGFuZ2VzLnB1c2goe3R5cGU6J3NwbGljZScscGF0aDpwYXRoLGluZGV4OmNoYW5nZS5pbmRleCxyZW1vdmVkOmNoYW5nZS5yZW1vdmVkLHJlbW92ZWRDb3VudDpjaGFuZ2UucmVtb3ZlZC5sZW5ndGgsYWRkZWQ6Y2hhbmdlLm9iamVjdC5zbGljZShjaGFuZ2UuaW5kZXgsY2hhbmdlLmluZGV4K2NoYW5nZS5hZGRlZENvdW50KSxhZGRlZENvdW50OmNoYW5nZS5hZGRlZENvdW50fSk7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxMDYnXSsrO2JyZWFrO2Nhc2UnZGVsZXRlJzpfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzI0J11bM10rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzEwNyddKys7Zm9ybWF0dGVkQ2hhbmdlcy5wdXNoKHt0eXBlOidkZWxldGUnLHBhdGg6cGF0aCxvbGRWYWx1ZTpjaGFuZ2Uub2xkVmFsdWV9KTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzEwOCddKys7YnJlYWs7ZGVmYXVsdDpfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzI0J11bNF0rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzEwOSddKys7Zm9ybWF0dGVkQ2hhbmdlcy5wdXNoKHt0eXBlOidvdGhlcicscGF0aDpwYXRofSk7fX0pO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTEwJ10rKztpZihzZWxmLnN0YXR1cz09PSdkZWNsYXJlZCcpe19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMjUnXVswXSsrO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTExJ10rKztkaXNwYXRjaENoYW5nZXMoZm9ybWF0dGVkQ2hhbmdlcyk7fWVsc2V7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWycyNSddWzFdKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxMTInXSsrO2FkZFRvUXVldWUoZGlzcGF0Y2hDaGFuZ2VzLFtmb3JtYXR0ZWRDaGFuZ2VzXSk7fX1mdW5jdGlvbiB1bm9ic2VydmVWYWx1ZSgpe19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuZlsnMTknXSsrO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTE0J10rKztpZigoX19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWycyNyddWzBdKyssdHlwZW9mIHZhbHVlPT09J29iamVjdCcpJiYoX19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWycyNyddWzFdKyssdmFsdWUhPT1udWxsKSl7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWycyNiddWzBdKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxMTUnXSsrO05lc3RlZC51bm9ic2VydmUodmFsdWUsb25WYWx1ZUNoYW5nZSk7fWVsc2V7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWycyNiddWzFdKys7fX1fX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzExNiddKys7c29ja2V0Lm9uKCdyZXBsaWNhbnRBc3NpZ25lZCcsZnVuY3Rpb24oZGF0YSl7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5mWycyMCddKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxMTcnXSsrO2lmKChfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzI5J11bMF0rKyxkYXRhLm5hbWUhPT1uYW1lKXx8KF9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMjknXVsxXSsrLGRhdGEuYnVuZGxlIT09YnVuZGxlKSl7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWycyOCddWzBdKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxMTgnXSsrO3JldHVybjt9ZWxzZXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzI4J11bMV0rKzt9X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxMTknXSsrO2xvZy5yZXBsaWNhbnRzKCdyZXBsaWNhbnRBc3NpZ25lZCcsZGF0YSk7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxMjAnXSsrO2lmKGRhdGEub3JpZ2luYXRvcklkPT09c2VsZi5pZCl7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWyczMCddWzBdKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxMjEnXSsrO3NlbGYuZW1pdCgnYXNzaWdubWVudEFjY2VwdGVkJyxkYXRhKTt9ZWxzZXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzMwJ11bMV0rKzt9X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxMjInXSsrO2Fzc2lnblZhbHVlKGRhdGEubmV3VmFsdWUsZGF0YS5yZXZpc2lvbik7fSk7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxMjMnXSsrO3NvY2tldC5vbigncmVwbGljYW50Q2hhbmdlZCcsZnVuY3Rpb24oZGF0YSl7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5mWycyMSddKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxMjQnXSsrO2lmKChfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzMyJ11bMF0rKyxkYXRhLm5hbWUhPT1uYW1lKXx8KF9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMzInXVsxXSsrLGRhdGEuYnVuZGxlIT09YnVuZGxlKSl7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWyczMSddWzBdKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxMjUnXSsrO3JldHVybjt9ZWxzZXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzMxJ11bMV0rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzEyNiddKys7aWYoZGF0YS5yZXZpc2lvbiE9PXNlbGYucmV2aXNpb24rMSl7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWyczMyddWzBdKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxMjcnXSsrO2xvZy5yZXBsaWNhbnRzKCdbJXNdIFJlcGxpY2FudCBcIiVzXCIgbm90IGF0IGhlYWQgcmV2aXNpb24gKG91cnMgJXMsIHRoZWlycyAlcyksIGZldGNoaW5nIGxhdGVzdC4uLicsYnVuZGxlLG5hbWUsc2VsZi5yZXZpc2lvbixkYXRhLnJldmlzaW9uKTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzEyOCddKys7ZnVsbFVwZGF0ZSgpO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTI5J10rKztyZXR1cm47fWVsc2V7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWyczMyddWzFdKys7fX1fX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzEzMCddKys7bG9nLnJlcGxpY2FudHMoJ3JlcGxpY2FudENoYW5nZWQnLGRhdGEpO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTMxJ10rKzt2YXIgb2xkVmFsdWU9Y2xvbmUodmFsdWUpO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTMyJ10rKzt2YXIgcmVwbGF5Q2hhbmdlcz1jbG9uZShkYXRhLmNoYW5nZXMpO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTMzJ10rKztyZXBsYXlDaGFuZ2VzLnJldmVyc2UoKTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzEzNCddKys7cmVwbGF5Q2hhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uKGNoYW5nZSl7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5mWycyMiddKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxMzUnXSsrO3N3aXRjaChjaGFuZ2UudHlwZSl7Y2FzZSdhZGQnOl9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMzQnXVswXSsrO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTM2J10rKztvYmplY3RQYXRoLmRlbChvbGRWYWx1ZSxjaGFuZ2UucGF0aCk7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxMzcnXSsrO2JyZWFrO2Nhc2UndXBkYXRlJzpfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzM0J11bMV0rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzEzOCddKys7b2JqZWN0UGF0aC5zZXQob2xkVmFsdWUsY2hhbmdlLnBhdGgsY2hhbmdlLm9sZFZhbHVlKTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzEzOSddKys7YnJlYWs7Y2FzZSdzcGxpY2UnOl9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMzQnXVsyXSsrO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTQwJ10rKzt2YXIgYXJyPW9iamVjdFBhdGguZ2V0KG9sZFZhbHVlLGNoYW5nZS5wYXRoKTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzE0MSddKys7aWYoIWFycil7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWyczNSddWzBdKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxNDInXSsrO2Fycj1bXTt9ZWxzZXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzM1J11bMV0rKzt9X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxNDMnXSsrO3ZhciBhcmdzPWNsb25lKGNoYW5nZS5yZW1vdmVkKTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzE0NCddKys7YXJncy51bnNoaWZ0KGNoYW5nZS5hZGRlZENvdW50KTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzE0NSddKys7YXJncy51bnNoaWZ0KGNoYW5nZS5pbmRleCk7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxNDYnXSsrO0FycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyLGFyZ3MpO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTQ3J10rKztvYmplY3RQYXRoLnNldChvbGRWYWx1ZSxjaGFuZ2UucGF0aCxhcnIpO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTQ4J10rKzticmVhaztjYXNlJ2RlbGV0ZSc6X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWyczNCddWzNdKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxNDknXSsrO29iamVjdFBhdGguc2V0KG9sZFZhbHVlLGNoYW5nZS5wYXRoLGNoYW5nZS5vbGRWYWx1ZSk7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxNTAnXSsrO2JyZWFrO2RlZmF1bHQ6X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWyczNCddWzRdKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxNTEnXSsrO29iamVjdFBhdGguc2V0KG9sZFZhbHVlLGNoYW5nZS5wYXRoLGNoYW5nZS5vbGRWYWx1ZSk7fX0pO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTUyJ10rKztpZihkYXRhLm9yaWdpbmF0b3JJZCE9PXNlbGYuaWQpe19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMzYnXVswXSsrO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTUzJ10rKzt1bm9ic2VydmVWYWx1ZSgpO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTU0J10rKztkYXRhLmNoYW5nZXMuZm9yRWFjaChmdW5jdGlvbihjaGFuZ2Upe19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuZlsnMjMnXSsrO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTU1J10rKztzd2l0Y2goY2hhbmdlLnR5cGUpe2Nhc2UnYWRkJzpfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzM3J11bMF0rKztjYXNlJ3VwZGF0ZSc6X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWyczNyddWzFdKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxNTYnXSsrO29iamVjdFBhdGguc2V0KHZhbHVlLGNoYW5nZS5wYXRoLGNoYW5nZS5uZXdWYWx1ZSk7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxNTcnXSsrO2JyZWFrO2Nhc2Unc3BsaWNlJzpfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmJbJzM3J11bMl0rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzE1OCddKys7dmFyIGFycj1vYmplY3RQYXRoLmdldCh2YWx1ZSxjaGFuZ2UucGF0aCk7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxNTknXSsrO3ZhciBhcmdzPWNsb25lKGNoYW5nZS5hZGRlZCk7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxNjAnXSsrO2FyZ3MudW5zaGlmdChjaGFuZ2UucmVtb3ZlZENvdW50KTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzE2MSddKys7YXJncy51bnNoaWZ0KGNoYW5nZS5pbmRleCk7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxNjInXSsrO0FycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyLGFyZ3MpO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTYzJ10rKztvYmplY3RQYXRoLnNldCh2YWx1ZSxjaGFuZ2UucGF0aCxhcnIpO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTY0J10rKztjaGFuZ2Uub2JqZWN0PWFycjtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzE2NSddKys7YnJlYWs7Y2FzZSdkZWxldGUnOl9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMzcnXVszXSsrO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTY2J10rKztvYmplY3RQYXRoLmRlbCh2YWx1ZSxjaGFuZ2UucGF0aCk7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxNjcnXSsrO2JyZWFrO319KTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzE2OCddKys7b2JzZXJ2ZVZhbHVlKCk7fWVsc2V7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5iWyczNiddWzFdKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxNjknXSsrO2RhdGEuY2hhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uKGNoYW5nZSl7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5mWycyNCddKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxNzAnXSsrO3N3aXRjaChjaGFuZ2UudHlwZSl7Y2FzZSdzcGxpY2UnOl9fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuYlsnMzgnXVswXSsrO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTcxJ10rKztjaGFuZ2Uub2JqZWN0PW9iamVjdFBhdGguZ2V0KHZhbHVlLGNoYW5nZS5wYXRoKTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzE3MiddKys7YnJlYWs7fX0pO31fX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzE3MyddKys7c2VsZi5yZXZpc2lvbj1kYXRhLnJldmlzaW9uO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTc0J10rKztzZWxmLmVtaXQoJ2NoYW5nZScsb2xkVmFsdWUsdmFsdWUsZGF0YS5jaGFuZ2VzKTt9KTtmdW5jdGlvbiBmdWxsVXBkYXRlKCl7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5mWycyNSddKys7X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxNzYnXSsrO3dpbmRvdy5Ob2RlQ0cucmVhZFJlcGxpY2FudChuYW1lLGJ1bmRsZSxmdW5jdGlvbihkYXRhKXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmZbJzI2J10rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzE3NyddKys7c2VsZi5lbWl0KCdmdWxsVXBkYXRlJyxkYXRhKTtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzE3OCddKys7YXNzaWduVmFsdWUoZGF0YS52YWx1ZSxkYXRhLnJldmlzaW9uKTt9KTt9X19jb3ZfV0JUbXRnX1ZGa1d3OFJmcnFCSmFIQS5zWycxNzknXSsrO3NvY2tldC5vbignZGlzY29ubmVjdCcsZnVuY3Rpb24oKXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmZbJzI3J10rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzE4MCddKys7c2VsZi5zdGF0dXM9J3VuZGVjbGFyZWQnO30pO19fY292X1dCVG10Z19WRmtXdzhSZnJxQkphSEEuc1snMTgxJ10rKztzb2NrZXQub24oJ3JlY29ubmVjdCcsZnVuY3Rpb24oKXtfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLmZbJzI4J10rKztfX2Nvdl9XQlRtdGdfVkZrV3c4UmZycUJKYUhBLnNbJzE4MiddKys7ZG9Ccm93c2VyRGVjbGFyZSh2YWx1ZSk7fSk7fVxuIiwidmFyIGxvb2t1cCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxuOyhmdW5jdGlvbiAoZXhwb3J0cykge1xuXHQndXNlIHN0cmljdCc7XG5cbiAgdmFyIEFyciA9ICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgPyBVaW50OEFycmF5XG4gICAgOiBBcnJheVxuXG5cdHZhciBQTFVTICAgPSAnKycuY2hhckNvZGVBdCgwKVxuXHR2YXIgU0xBU0ggID0gJy8nLmNoYXJDb2RlQXQoMClcblx0dmFyIE5VTUJFUiA9ICcwJy5jaGFyQ29kZUF0KDApXG5cdHZhciBMT1dFUiAgPSAnYScuY2hhckNvZGVBdCgwKVxuXHR2YXIgVVBQRVIgID0gJ0EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFBMVVNfVVJMX1NBRkUgPSAnLScuY2hhckNvZGVBdCgwKVxuXHR2YXIgU0xBU0hfVVJMX1NBRkUgPSAnXycuY2hhckNvZGVBdCgwKVxuXG5cdGZ1bmN0aW9uIGRlY29kZSAoZWx0KSB7XG5cdFx0dmFyIGNvZGUgPSBlbHQuY2hhckNvZGVBdCgwKVxuXHRcdGlmIChjb2RlID09PSBQTFVTIHx8XG5cdFx0ICAgIGNvZGUgPT09IFBMVVNfVVJMX1NBRkUpXG5cdFx0XHRyZXR1cm4gNjIgLy8gJysnXG5cdFx0aWYgKGNvZGUgPT09IFNMQVNIIHx8XG5cdFx0ICAgIGNvZGUgPT09IFNMQVNIX1VSTF9TQUZFKVxuXHRcdFx0cmV0dXJuIDYzIC8vICcvJ1xuXHRcdGlmIChjb2RlIDwgTlVNQkVSKVxuXHRcdFx0cmV0dXJuIC0xIC8vbm8gbWF0Y2hcblx0XHRpZiAoY29kZSA8IE5VTUJFUiArIDEwKVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBOVU1CRVIgKyAyNiArIDI2XG5cdFx0aWYgKGNvZGUgPCBVUFBFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBVUFBFUlxuXHRcdGlmIChjb2RlIDwgTE9XRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gTE9XRVIgKyAyNlxuXHR9XG5cblx0ZnVuY3Rpb24gYjY0VG9CeXRlQXJyYXkgKGI2NCkge1xuXHRcdHZhciBpLCBqLCBsLCB0bXAsIHBsYWNlSG9sZGVycywgYXJyXG5cblx0XHRpZiAoYjY0Lmxlbmd0aCAlIDQgPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuXHRcdH1cblxuXHRcdC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHR3byBwbGFjZWhvbGRlcnMsIHRoYW4gdGhlIHR3byBjaGFyYWN0ZXJzIGJlZm9yZSBpdFxuXHRcdC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuXHRcdC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuXHRcdC8vIHRoaXMgaXMganVzdCBhIGNoZWFwIGhhY2sgdG8gbm90IGRvIGluZGV4T2YgdHdpY2Vcblx0XHR2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXHRcdHBsYWNlSG9sZGVycyA9ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAyKSA/IDIgOiAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMSkgPyAxIDogMFxuXG5cdFx0Ly8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5cdFx0YXJyID0gbmV3IEFycihiNjQubGVuZ3RoICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpXG5cblx0XHQvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG5cdFx0bCA9IHBsYWNlSG9sZGVycyA+IDAgPyBiNjQubGVuZ3RoIC0gNCA6IGI2NC5sZW5ndGhcblxuXHRcdHZhciBMID0gMFxuXG5cdFx0ZnVuY3Rpb24gcHVzaCAodikge1xuXHRcdFx0YXJyW0wrK10gPSB2XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgaiA9IDA7IGkgPCBsOyBpICs9IDQsIGogKz0gMykge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxOCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCAxMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA8PCA2KSB8IGRlY29kZShiNjQuY2hhckF0KGkgKyAzKSlcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMDAwKSA+PiAxNilcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMCkgPj4gOClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPj4gNClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxMCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCA0KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpID4+IDIpXG5cdFx0XHRwdXNoKCh0bXAgPj4gOCkgJiAweEZGKVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdHJldHVybiBhcnJcblx0fVxuXG5cdGZ1bmN0aW9uIHVpbnQ4VG9CYXNlNjQgKHVpbnQ4KSB7XG5cdFx0dmFyIGksXG5cdFx0XHRleHRyYUJ5dGVzID0gdWludDgubGVuZ3RoICUgMywgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcblx0XHRcdG91dHB1dCA9IFwiXCIsXG5cdFx0XHR0ZW1wLCBsZW5ndGhcblxuXHRcdGZ1bmN0aW9uIGVuY29kZSAobnVtKSB7XG5cdFx0XHRyZXR1cm4gbG9va3VwLmNoYXJBdChudW0pXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcblx0XHRcdHJldHVybiBlbmNvZGUobnVtID4+IDE4ICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDEyICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDYgJiAweDNGKSArIGVuY29kZShudW0gJiAweDNGKVxuXHRcdH1cblxuXHRcdC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcblx0XHRmb3IgKGkgPSAwLCBsZW5ndGggPSB1aW50OC5sZW5ndGggLSBleHRyYUJ5dGVzOyBpIDwgbGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdHRlbXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pXG5cdFx0XHRvdXRwdXQgKz0gdHJpcGxldFRvQmFzZTY0KHRlbXApXG5cdFx0fVxuXG5cdFx0Ly8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuXHRcdHN3aXRjaCAoZXh0cmFCeXRlcykge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0ZW1wID0gdWludDhbdWludDgubGVuZ3RoIC0gMV1cblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDIpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz09J1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0ZW1wID0gKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDJdIDw8IDgpICsgKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMTApXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPj4gNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDIpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9J1xuXHRcdFx0XHRicmVha1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXRcblx0fVxuXG5cdGV4cG9ydHMudG9CeXRlQXJyYXkgPSBiNjRUb0J5dGVBcnJheVxuXHRleHBvcnRzLmZyb21CeXRlQXJyYXkgPSB1aW50OFRvQmFzZTY0XG59KHR5cGVvZiBleHBvcnRzID09PSAndW5kZWZpbmVkJyA/ICh0aGlzLmJhc2U2NGpzID0ge30pIDogZXhwb3J0cykpXG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzLWFycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbnZhciByb290UGFyZW50ID0ge31cblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBTYWZhcmkgNS03IGxhY2tzIHN1cHBvcnQgZm9yIGNoYW5naW5nIHRoZSBgT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3RvcmAgcHJvcGVydHlcbiAqICAgICBvbiBvYmplY3RzLlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgZnVuY3Rpb24gQmFyICgpIHt9XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLmZvbyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH1cbiAgICBhcnIuY29uc3RydWN0b3IgPSBCYXJcbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MiAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICBhcnIuY29uc3RydWN0b3IgPT09IEJhciAmJiAvLyBjb25zdHJ1Y3RvciBjYW4gYmUgc2V0XG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIGFyci5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBrTWF4TGVuZ3RoICgpIHtcbiAgcmV0dXJuIEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gICAgPyAweDdmZmZmZmZmXG4gICAgOiAweDNmZmZmZmZmXG59XG5cbi8qKlxuICogQ2xhc3M6IEJ1ZmZlclxuICogPT09PT09PT09PT09PVxuICpcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgYXJlIGF1Z21lbnRlZFxuICogd2l0aCBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvciBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgQVBJIGZ1bmN0aW9ucy4gV2UgdXNlXG4gKiBgVWludDhBcnJheWAgc28gdGhhdCBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdCByZXR1cm5zXG4gKiBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBCeSBhdWdtZW50aW5nIHRoZSBpbnN0YW5jZXMsIHdlIGNhbiBhdm9pZCBtb2RpZnlpbmcgdGhlIGBVaW50OEFycmF5YFxuICogcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBCdWZmZXIgKGFyZykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIC8vIEF2b2lkIGdvaW5nIHRocm91Z2ggYW4gQXJndW1lbnRzQWRhcHRvclRyYW1wb2xpbmUgaW4gdGhlIGNvbW1vbiBjYXNlLlxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkgcmV0dXJuIG5ldyBCdWZmZXIoYXJnLCBhcmd1bWVudHNbMV0pXG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoYXJnKVxuICB9XG5cbiAgdGhpcy5sZW5ndGggPSAwXG4gIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkXG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmcm9tTnVtYmVyKHRoaXMsIGFyZylcbiAgfVxuXG4gIC8vIFNsaWdodGx5IGxlc3MgY29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHRoaXMsIGFyZywgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiAndXRmOCcpXG4gIH1cblxuICAvLyBVbnVzdWFsLlxuICByZXR1cm4gZnJvbU9iamVjdCh0aGlzLCBhcmcpXG59XG5cbmZ1bmN0aW9uIGZyb21OdW1iZXIgKHRoYXQsIGxlbmd0aCkge1xuICB0aGF0ID0gYWxsb2NhdGUodGhhdCwgbGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGxlbmd0aCkgfCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAodGhhdCwgc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgLy8gQXNzdW1wdGlvbjogYnl0ZUxlbmd0aCgpIHJldHVybiB2YWx1ZSBpcyBhbHdheXMgPCBrTWF4TGVuZ3RoLlxuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgdGhhdCA9IGFsbG9jYXRlKHRoYXQsIGxlbmd0aClcblxuICB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iamVjdCkge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iamVjdCkpIHJldHVybiBmcm9tQnVmZmVyKHRoYXQsIG9iamVjdClcblxuICBpZiAoaXNBcnJheShvYmplY3QpKSByZXR1cm4gZnJvbUFycmF5KHRoYXQsIG9iamVjdClcblxuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IHN0YXJ0IHdpdGggbnVtYmVyLCBidWZmZXIsIGFycmF5IG9yIHN0cmluZycpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChvYmplY3QuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgIHJldHVybiBmcm9tVHlwZWRBcnJheSh0aGF0LCBvYmplY3QpXG4gICAgfVxuICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCBvYmplY3QpXG4gICAgfVxuICB9XG5cbiAgaWYgKG9iamVjdC5sZW5ndGgpIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iamVjdClcblxuICByZXR1cm4gZnJvbUpzb25PYmplY3QodGhhdCwgb2JqZWN0KVxufVxuXG5mdW5jdGlvbiBmcm9tQnVmZmVyICh0aGF0LCBidWZmZXIpIHtcbiAgdmFyIGxlbmd0aCA9IGNoZWNrZWQoYnVmZmVyLmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBhbGxvY2F0ZSh0aGF0LCBsZW5ndGgpXG4gIGJ1ZmZlci5jb3B5KHRoYXQsIDAsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5ICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gYWxsb2NhdGUodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLy8gRHVwbGljYXRlIG9mIGZyb21BcnJheSgpIHRvIGtlZXAgZnJvbUFycmF5KCkgbW9ub21vcnBoaWMuXG5mdW5jdGlvbiBmcm9tVHlwZWRBcnJheSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGFsbG9jYXRlKHRoYXQsIGxlbmd0aClcbiAgLy8gVHJ1bmNhdGluZyB0aGUgZWxlbWVudHMgaXMgcHJvYmFibHkgbm90IHdoYXQgcGVvcGxlIGV4cGVjdCBmcm9tIHR5cGVkXG4gIC8vIGFycmF5cyB3aXRoIEJZVEVTX1BFUl9FTEVNRU5UID4gMSBidXQgaXQncyBjb21wYXRpYmxlIHdpdGggdGhlIGJlaGF2aW9yXG4gIC8vIG9mIHRoZSBvbGQgQnVmZmVyIGNvbnN0cnVjdG9yLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSkge1xuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICBhcnJheS5ieXRlTGVuZ3RoXG4gICAgdGhhdCA9IEJ1ZmZlci5fYXVnbWVudChuZXcgVWludDhBcnJheShhcnJheSkpXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tVHlwZWRBcnJheSh0aGF0LCBuZXcgVWludDhBcnJheShhcnJheSkpXG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGFsbG9jYXRlKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbi8vIERlc2VyaWFsaXplIHsgdHlwZTogJ0J1ZmZlcicsIGRhdGE6IFsxLDIsMywuLi5dIH0gaW50byBhIEJ1ZmZlciBvYmplY3QuXG4vLyBSZXR1cm5zIGEgemVyby1sZW5ndGggYnVmZmVyIGZvciBpbnB1dHMgdGhhdCBkb24ndCBjb25mb3JtIHRvIHRoZSBzcGVjLlxuZnVuY3Rpb24gZnJvbUpzb25PYmplY3QgKHRoYXQsIG9iamVjdCkge1xuICB2YXIgYXJyYXlcbiAgdmFyIGxlbmd0aCA9IDBcblxuICBpZiAob2JqZWN0LnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkob2JqZWN0LmRhdGEpKSB7XG4gICAgYXJyYXkgPSBvYmplY3QuZGF0YVxuICAgIGxlbmd0aCA9IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgfVxuICB0aGF0ID0gYWxsb2NhdGUodGhhdCwgbGVuZ3RoKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGF0W2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxufVxuXG5mdW5jdGlvbiBhbGxvY2F0ZSAodGhhdCwgbGVuZ3RoKSB7XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBCdWZmZXIuX2F1Z21lbnQobmV3IFVpbnQ4QXJyYXkobGVuZ3RoKSlcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgICB0aGF0Ll9pc0J1ZmZlciA9IHRydWVcbiAgfVxuXG4gIHZhciBmcm9tUG9vbCA9IGxlbmd0aCAhPT0gMCAmJiBsZW5ndGggPD0gQnVmZmVyLnBvb2xTaXplID4+PiAxXG4gIGlmIChmcm9tUG9vbCkgdGhhdC5wYXJlbnQgPSByb290UGFyZW50XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IGtNYXhMZW5ndGhgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgoKS50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChzdWJqZWN0LCBlbmNvZGluZykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU2xvd0J1ZmZlcikpIHJldHVybiBuZXcgU2xvd0J1ZmZlcihzdWJqZWN0LCBlbmNvZGluZylcblxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcihzdWJqZWN0LCBlbmNvZGluZylcbiAgZGVsZXRlIGJ1Zi5wYXJlbnRcbiAgcmV0dXJuIGJ1ZlxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG5cbiAgdmFyIGkgPSAwXG4gIHZhciBsZW4gPSBNYXRoLm1pbih4LCB5KVxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSBicmVha1xuXG4gICAgKytpXG4gIH1cblxuICBpZiAoaSAhPT0gbGVuKSB7XG4gICAgeCA9IGFbaV1cbiAgICB5ID0gYltpXVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICdyYXcnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdsaXN0IGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycy4nKVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKDApXG4gIH1cblxuICB2YXIgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWYgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICBpdGVtLmNvcHkoYnVmLCBwb3MpXG4gICAgcG9zICs9IGl0ZW0ubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykgc3RyaW5nID0gJycgKyBzdHJpbmdcblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIC8vIERlcHJlY2F0ZWRcbiAgICAgIGNhc2UgJ3Jhdyc6XG4gICAgICBjYXNlICdyYXdzJzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbi8vIHByZS1zZXQgZm9yIHZhbHVlcyB0aGF0IG1heSBleGlzdCBpbiB0aGUgZnV0dXJlXG5CdWZmZXIucHJvdG90eXBlLmxlbmd0aCA9IHVuZGVmaW5lZFxuQnVmZmVyLnByb3RvdHlwZS5wYXJlbnQgPSB1bmRlZmluZWRcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIHN0YXJ0ID0gc3RhcnQgfCAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA9PT0gSW5maW5pdHkgPyB0aGlzLmxlbmd0aCA6IGVuZCB8IDBcblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAoZW5kIDw9IHN0YXJ0KSByZXR1cm4gJydcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBiaW5hcnlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoIHwgMFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJ1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIDBcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCkge1xuICBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIGJ5dGVPZmZzZXQgPj49IDBcblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVybiAtMVxuICBpZiAoYnl0ZU9mZnNldCA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuIC0xXG5cbiAgLy8gTmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBNYXRoLm1heCh0aGlzLmxlbmd0aCArIGJ5dGVPZmZzZXQsIDApXG5cbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHJldHVybiAtMSAvLyBzcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZyBhbHdheXMgZmFpbHNcbiAgICByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5pbmRleE9mLmNhbGwodGhpcywgdmFsLCBieXRlT2Zmc2V0KVxuICB9XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIHJldHVybiBhcnJheUluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0KVxuICB9XG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMsIHZhbCwgYnl0ZU9mZnNldClcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZih0aGlzLCBbIHZhbCBdLCBieXRlT2Zmc2V0KVxuICB9XG5cbiAgZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCkge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKHZhciBpID0gMDsgYnl0ZU9mZnNldCArIGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJbYnl0ZU9mZnNldCArIGldID09PSB2YWxbZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXhdKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsLmxlbmd0aCkgcmV0dXJuIGJ5dGVPZmZzZXQgKyBmb3VuZEluZGV4XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG4vLyBgZ2V0YCBpcyBkZXByZWNhdGVkXG5CdWZmZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAob2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuZ2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy5yZWFkVUludDgob2Zmc2V0KVxufVxuXG4vLyBgc2V0YCBpcyBkZXByZWNhdGVkXG5CdWZmZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCAodiwgb2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuc2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy53cml0ZVVJbnQ4KHYsIG9mZnNldClcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAoc3RyTGVuICUgMiAhPT0gMCkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiaW5hcnlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICAvLyBsZWdhY3kgd3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpIC0gcmVtb3ZlIGluIHYwLjEzXG4gIH0gZWxzZSB7XG4gICAgdmFyIHN3YXAgPSBlbmNvZGluZ1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgb2Zmc2V0ID0gbGVuZ3RoIHwgMFxuICAgIGxlbmd0aCA9IHN3YXBcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gYmluYXJ5V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICB2YXIgcmVzID0gW11cblxuICB2YXIgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgdmFyIGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIHZhciBjb2RlUG9pbnQgPSBudWxsXG4gICAgdmFyIGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRikgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKSA/IDNcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpID8gMlxuICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICB2YXIgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG52YXIgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIHZhciBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIHZhciByZXMgPSAnJ1xuICB2YXIgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBiaW5hcnlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIHZhciBuZXdCdWZcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgbmV3QnVmID0gQnVmZmVyLl9hdWdtZW50KHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCkpXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgaSsrKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH1cblxuICBpZiAobmV3QnVmLmxlbmd0aCkgbmV3QnVmLnBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXNcblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuICB9XG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXVxuICB2YXIgbXVsID0gMVxuICB3aGlsZSAoYnl0ZUxlbmd0aCA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gcmVhZFVJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRSA9IGZ1bmN0aW9uIHJlYWRJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aFxuICB2YXIgbXVsID0gMVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2J1ZmZlciBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndmFsdWUgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignaW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCksIDApXG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCksIDApXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSB2YWx1ZSA8IDAgPyAxIDogMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IHZhbHVlIDwgMCA/IDEgOiAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3ZhbHVlIGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignaW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgdmFyIGlcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuX3NldCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksIHRhcmdldFN0YXJ0KVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBmaWxsKHZhbHVlLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbHVlLCBzdGFydCwgZW5kKSB7XG4gIGlmICghdmFsdWUpIHZhbHVlID0gMFxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQpIGVuZCA9IHRoaXMubGVuZ3RoXG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZW5kIDwgc3RhcnQnKVxuXG4gIC8vIEZpbGwgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3N0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2VuZCBvdXQgb2YgYm91bmRzJylcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIHRoaXNbaV0gPSB2YWx1ZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSB1dGY4VG9CeXRlcyh2YWx1ZS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzW2ldID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYEFycmF5QnVmZmVyYCB3aXRoIHRoZSAqY29waWVkKiBtZW1vcnkgb2YgdGhlIGJ1ZmZlciBpbnN0YW5jZS5cbiAqIEFkZGVkIGluIE5vZGUgMC4xMi4gT25seSBhdmFpbGFibGUgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IEFycmF5QnVmZmVyLlxuICovXG5CdWZmZXIucHJvdG90eXBlLnRvQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiB0b0FycmF5QnVmZmVyICgpIHtcbiAgaWYgKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgICAgcmV0dXJuIChuZXcgQnVmZmVyKHRoaXMpKS5idWZmZXJcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KHRoaXMubGVuZ3RoKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJ1Zi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBidWZbaV0gPSB0aGlzW2ldXG4gICAgICB9XG4gICAgICByZXR1cm4gYnVmLmJ1ZmZlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCdWZmZXIudG9BcnJheUJ1ZmZlciBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicpXG4gIH1cbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgQlAgPSBCdWZmZXIucHJvdG90eXBlXG5cbi8qKlxuICogQXVnbWVudCBhIFVpbnQ4QXJyYXkgKmluc3RhbmNlKiAobm90IHRoZSBVaW50OEFycmF5IGNsYXNzISkgd2l0aCBCdWZmZXIgbWV0aG9kc1xuICovXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiBfYXVnbWVudCAoYXJyKSB7XG4gIGFyci5jb25zdHJ1Y3RvciA9IEJ1ZmZlclxuICBhcnIuX2lzQnVmZmVyID0gdHJ1ZVxuXG4gIC8vIHNhdmUgcmVmZXJlbmNlIHRvIG9yaWdpbmFsIFVpbnQ4QXJyYXkgc2V0IG1ldGhvZCBiZWZvcmUgb3ZlcndyaXRpbmdcbiAgYXJyLl9zZXQgPSBhcnIuc2V0XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBhcnIuZ2V0ID0gQlAuZ2V0XG4gIGFyci5zZXQgPSBCUC5zZXRcblxuICBhcnIud3JpdGUgPSBCUC53cml0ZVxuICBhcnIudG9TdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9Mb2NhbGVTdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9KU09OID0gQlAudG9KU09OXG4gIGFyci5lcXVhbHMgPSBCUC5lcXVhbHNcbiAgYXJyLmNvbXBhcmUgPSBCUC5jb21wYXJlXG4gIGFyci5pbmRleE9mID0gQlAuaW5kZXhPZlxuICBhcnIuY29weSA9IEJQLmNvcHlcbiAgYXJyLnNsaWNlID0gQlAuc2xpY2VcbiAgYXJyLnJlYWRVSW50TEUgPSBCUC5yZWFkVUludExFXG4gIGFyci5yZWFkVUludEJFID0gQlAucmVhZFVJbnRCRVxuICBhcnIucmVhZFVJbnQ4ID0gQlAucmVhZFVJbnQ4XG4gIGFyci5yZWFkVUludDE2TEUgPSBCUC5yZWFkVUludDE2TEVcbiAgYXJyLnJlYWRVSW50MTZCRSA9IEJQLnJlYWRVSW50MTZCRVxuICBhcnIucmVhZFVJbnQzMkxFID0gQlAucmVhZFVJbnQzMkxFXG4gIGFyci5yZWFkVUludDMyQkUgPSBCUC5yZWFkVUludDMyQkVcbiAgYXJyLnJlYWRJbnRMRSA9IEJQLnJlYWRJbnRMRVxuICBhcnIucmVhZEludEJFID0gQlAucmVhZEludEJFXG4gIGFyci5yZWFkSW50OCA9IEJQLnJlYWRJbnQ4XG4gIGFyci5yZWFkSW50MTZMRSA9IEJQLnJlYWRJbnQxNkxFXG4gIGFyci5yZWFkSW50MTZCRSA9IEJQLnJlYWRJbnQxNkJFXG4gIGFyci5yZWFkSW50MzJMRSA9IEJQLnJlYWRJbnQzMkxFXG4gIGFyci5yZWFkSW50MzJCRSA9IEJQLnJlYWRJbnQzMkJFXG4gIGFyci5yZWFkRmxvYXRMRSA9IEJQLnJlYWRGbG9hdExFXG4gIGFyci5yZWFkRmxvYXRCRSA9IEJQLnJlYWRGbG9hdEJFXG4gIGFyci5yZWFkRG91YmxlTEUgPSBCUC5yZWFkRG91YmxlTEVcbiAgYXJyLnJlYWREb3VibGVCRSA9IEJQLnJlYWREb3VibGVCRVxuICBhcnIud3JpdGVVSW50OCA9IEJQLndyaXRlVUludDhcbiAgYXJyLndyaXRlVUludExFID0gQlAud3JpdGVVSW50TEVcbiAgYXJyLndyaXRlVUludEJFID0gQlAud3JpdGVVSW50QkVcbiAgYXJyLndyaXRlVUludDE2TEUgPSBCUC53cml0ZVVJbnQxNkxFXG4gIGFyci53cml0ZVVJbnQxNkJFID0gQlAud3JpdGVVSW50MTZCRVxuICBhcnIud3JpdGVVSW50MzJMRSA9IEJQLndyaXRlVUludDMyTEVcbiAgYXJyLndyaXRlVUludDMyQkUgPSBCUC53cml0ZVVJbnQzMkJFXG4gIGFyci53cml0ZUludExFID0gQlAud3JpdGVJbnRMRVxuICBhcnIud3JpdGVJbnRCRSA9IEJQLndyaXRlSW50QkVcbiAgYXJyLndyaXRlSW50OCA9IEJQLndyaXRlSW50OFxuICBhcnIud3JpdGVJbnQxNkxFID0gQlAud3JpdGVJbnQxNkxFXG4gIGFyci53cml0ZUludDE2QkUgPSBCUC53cml0ZUludDE2QkVcbiAgYXJyLndyaXRlSW50MzJMRSA9IEJQLndyaXRlSW50MzJMRVxuICBhcnIud3JpdGVJbnQzMkJFID0gQlAud3JpdGVJbnQzMkJFXG4gIGFyci53cml0ZUZsb2F0TEUgPSBCUC53cml0ZUZsb2F0TEVcbiAgYXJyLndyaXRlRmxvYXRCRSA9IEJQLndyaXRlRmxvYXRCRVxuICBhcnIud3JpdGVEb3VibGVMRSA9IEJQLndyaXRlRG91YmxlTEVcbiAgYXJyLndyaXRlRG91YmxlQkUgPSBCUC53cml0ZURvdWJsZUJFXG4gIGFyci5maWxsID0gQlAuZmlsbFxuICBhcnIuaW5zcGVjdCA9IEJQLmluc3BlY3RcbiAgYXJyLnRvQXJyYXlCdWZmZXIgPSBCUC50b0FycmF5QnVmZmVyXG5cbiAgcmV0dXJuIGFyclxufVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS1aYS16LV9dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICB2YXIgY29kZVBvaW50XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICB2YXIgYnl0ZXMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cbiIsInZhciBjbG9uZSA9IChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDbG9uZXMgKGNvcGllcykgYW4gT2JqZWN0IHVzaW5nIGRlZXAgY29weWluZy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHN1cHBvcnRzIGNpcmN1bGFyIHJlZmVyZW5jZXMgYnkgZGVmYXVsdCwgYnV0IGlmIHlvdSBhcmUgY2VydGFpblxuICogdGhlcmUgYXJlIG5vIGNpcmN1bGFyIHJlZmVyZW5jZXMgaW4geW91ciBvYmplY3QsIHlvdSBjYW4gc2F2ZSBzb21lIENQVSB0aW1lXG4gKiBieSBjYWxsaW5nIGNsb25lKG9iaiwgZmFsc2UpLlxuICpcbiAqIENhdXRpb246IGlmIGBjaXJjdWxhcmAgaXMgZmFsc2UgYW5kIGBwYXJlbnRgIGNvbnRhaW5zIGNpcmN1bGFyIHJlZmVyZW5jZXMsXG4gKiB5b3VyIHByb2dyYW0gbWF5IGVudGVyIGFuIGluZmluaXRlIGxvb3AgYW5kIGNyYXNoLlxuICpcbiAqIEBwYXJhbSBgcGFyZW50YCAtIHRoZSBvYmplY3QgdG8gYmUgY2xvbmVkXG4gKiBAcGFyYW0gYGNpcmN1bGFyYCAtIHNldCB0byB0cnVlIGlmIHRoZSBvYmplY3QgdG8gYmUgY2xvbmVkIG1heSBjb250YWluXG4gKiAgICBjaXJjdWxhciByZWZlcmVuY2VzLiAob3B0aW9uYWwgLSB0cnVlIGJ5IGRlZmF1bHQpXG4gKiBAcGFyYW0gYGRlcHRoYCAtIHNldCB0byBhIG51bWJlciBpZiB0aGUgb2JqZWN0IGlzIG9ubHkgdG8gYmUgY2xvbmVkIHRvXG4gKiAgICBhIHBhcnRpY3VsYXIgZGVwdGguIChvcHRpb25hbCAtIGRlZmF1bHRzIHRvIEluZmluaXR5KVxuICogQHBhcmFtIGBwcm90b3R5cGVgIC0gc2V0cyB0aGUgcHJvdG90eXBlIHRvIGJlIHVzZWQgd2hlbiBjbG9uaW5nIGFuIG9iamVjdC5cbiAqICAgIChvcHRpb25hbCAtIGRlZmF1bHRzIHRvIHBhcmVudCBwcm90b3R5cGUpLlxuKi9cbmZ1bmN0aW9uIGNsb25lKHBhcmVudCwgY2lyY3VsYXIsIGRlcHRoLCBwcm90b3R5cGUpIHtcbiAgdmFyIGZpbHRlcjtcbiAgaWYgKHR5cGVvZiBjaXJjdWxhciA9PT0gJ29iamVjdCcpIHtcbiAgICBkZXB0aCA9IGNpcmN1bGFyLmRlcHRoO1xuICAgIHByb3RvdHlwZSA9IGNpcmN1bGFyLnByb3RvdHlwZTtcbiAgICBmaWx0ZXIgPSBjaXJjdWxhci5maWx0ZXI7XG4gICAgY2lyY3VsYXIgPSBjaXJjdWxhci5jaXJjdWxhclxuICB9XG4gIC8vIG1haW50YWluIHR3byBhcnJheXMgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMsIHdoZXJlIGNvcnJlc3BvbmRpbmcgcGFyZW50c1xuICAvLyBhbmQgY2hpbGRyZW4gaGF2ZSB0aGUgc2FtZSBpbmRleFxuICB2YXIgYWxsUGFyZW50cyA9IFtdO1xuICB2YXIgYWxsQ2hpbGRyZW4gPSBbXTtcblxuICB2YXIgdXNlQnVmZmVyID0gdHlwZW9mIEJ1ZmZlciAhPSAndW5kZWZpbmVkJztcblxuICBpZiAodHlwZW9mIGNpcmN1bGFyID09ICd1bmRlZmluZWQnKVxuICAgIGNpcmN1bGFyID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGRlcHRoID09ICd1bmRlZmluZWQnKVxuICAgIGRlcHRoID0gSW5maW5pdHk7XG5cbiAgLy8gcmVjdXJzZSB0aGlzIGZ1bmN0aW9uIHNvIHdlIGRvbid0IHJlc2V0IGFsbFBhcmVudHMgYW5kIGFsbENoaWxkcmVuXG4gIGZ1bmN0aW9uIF9jbG9uZShwYXJlbnQsIGRlcHRoKSB7XG4gICAgLy8gY2xvbmluZyBudWxsIGFsd2F5cyByZXR1cm5zIG51bGxcbiAgICBpZiAocGFyZW50ID09PSBudWxsKVxuICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICBpZiAoZGVwdGggPT0gMClcbiAgICAgIHJldHVybiBwYXJlbnQ7XG5cbiAgICB2YXIgY2hpbGQ7XG4gICAgdmFyIHByb3RvO1xuICAgIGlmICh0eXBlb2YgcGFyZW50ICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIGlmIChjbG9uZS5fX2lzQXJyYXkocGFyZW50KSkge1xuICAgICAgY2hpbGQgPSBbXTtcbiAgICB9IGVsc2UgaWYgKGNsb25lLl9faXNSZWdFeHAocGFyZW50KSkge1xuICAgICAgY2hpbGQgPSBuZXcgUmVnRXhwKHBhcmVudC5zb3VyY2UsIF9fZ2V0UmVnRXhwRmxhZ3MocGFyZW50KSk7XG4gICAgICBpZiAocGFyZW50Lmxhc3RJbmRleCkgY2hpbGQubGFzdEluZGV4ID0gcGFyZW50Lmxhc3RJbmRleDtcbiAgICB9IGVsc2UgaWYgKGNsb25lLl9faXNEYXRlKHBhcmVudCkpIHtcbiAgICAgIGNoaWxkID0gbmV3IERhdGUocGFyZW50LmdldFRpbWUoKSk7XG4gICAgfSBlbHNlIGlmICh1c2VCdWZmZXIgJiYgQnVmZmVyLmlzQnVmZmVyKHBhcmVudCkpIHtcbiAgICAgIGNoaWxkID0gbmV3IEJ1ZmZlcihwYXJlbnQubGVuZ3RoKTtcbiAgICAgIHBhcmVudC5jb3B5KGNoaWxkKTtcbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBwcm90b3R5cGUgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocGFyZW50KTtcbiAgICAgICAgY2hpbGQgPSBPYmplY3QuY3JlYXRlKHByb3RvKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjaGlsZCA9IE9iamVjdC5jcmVhdGUocHJvdG90eXBlKTtcbiAgICAgICAgcHJvdG8gPSBwcm90b3R5cGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNpcmN1bGFyKSB7XG4gICAgICB2YXIgaW5kZXggPSBhbGxQYXJlbnRzLmluZGV4T2YocGFyZW50KTtcblxuICAgICAgaWYgKGluZGV4ICE9IC0xKSB7XG4gICAgICAgIHJldHVybiBhbGxDaGlsZHJlbltpbmRleF07XG4gICAgICB9XG4gICAgICBhbGxQYXJlbnRzLnB1c2gocGFyZW50KTtcbiAgICAgIGFsbENoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgaW4gcGFyZW50KSB7XG4gICAgICB2YXIgYXR0cnM7XG4gICAgICBpZiAocHJvdG8pIHtcbiAgICAgICAgYXR0cnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGF0dHJzICYmIGF0dHJzLnNldCA9PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY2hpbGRbaV0gPSBfY2xvbmUocGFyZW50W2ldLCBkZXB0aCAtIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfVxuXG4gIHJldHVybiBfY2xvbmUocGFyZW50LCBkZXB0aCk7XG59XG5cbi8qKlxuICogU2ltcGxlIGZsYXQgY2xvbmUgdXNpbmcgcHJvdG90eXBlLCBhY2NlcHRzIG9ubHkgb2JqZWN0cywgdXNlZnVsbCBmb3IgcHJvcGVydHlcbiAqIG92ZXJyaWRlIG9uIEZMQVQgY29uZmlndXJhdGlvbiBvYmplY3QgKG5vIG5lc3RlZCBwcm9wcykuXG4gKlxuICogVVNFIFdJVEggQ0FVVElPTiEgVGhpcyBtYXkgbm90IGJlaGF2ZSBhcyB5b3Ugd2lzaCBpZiB5b3UgZG8gbm90IGtub3cgaG93IHRoaXNcbiAqIHdvcmtzLlxuICovXG5jbG9uZS5jbG9uZVByb3RvdHlwZSA9IGZ1bmN0aW9uIGNsb25lUHJvdG90eXBlKHBhcmVudCkge1xuICBpZiAocGFyZW50ID09PSBudWxsKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHZhciBjID0gZnVuY3Rpb24gKCkge307XG4gIGMucHJvdG90eXBlID0gcGFyZW50O1xuICByZXR1cm4gbmV3IGMoKTtcbn07XG5cbi8vIHByaXZhdGUgdXRpbGl0eSBmdW5jdGlvbnNcblxuZnVuY3Rpb24gX19vYmpUb1N0cihvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59O1xuY2xvbmUuX19vYmpUb1N0ciA9IF9fb2JqVG9TdHI7XG5cbmZ1bmN0aW9uIF9faXNEYXRlKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBfX29ialRvU3RyKG8pID09PSAnW29iamVjdCBEYXRlXSc7XG59O1xuY2xvbmUuX19pc0RhdGUgPSBfX2lzRGF0ZTtcblxuZnVuY3Rpb24gX19pc0FycmF5KG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBfX29ialRvU3RyKG8pID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcbmNsb25lLl9faXNBcnJheSA9IF9faXNBcnJheTtcblxuZnVuY3Rpb24gX19pc1JlZ0V4cChvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgX19vYmpUb1N0cihvKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59O1xuY2xvbmUuX19pc1JlZ0V4cCA9IF9faXNSZWdFeHA7XG5cbmZ1bmN0aW9uIF9fZ2V0UmVnRXhwRmxhZ3MocmUpIHtcbiAgdmFyIGZsYWdzID0gJyc7XG4gIGlmIChyZS5nbG9iYWwpIGZsYWdzICs9ICdnJztcbiAgaWYgKHJlLmlnbm9yZUNhc2UpIGZsYWdzICs9ICdpJztcbiAgaWYgKHJlLm11bHRpbGluZSkgZmxhZ3MgKz0gJ20nO1xuICByZXR1cm4gZmxhZ3M7XG59O1xuY2xvbmUuX19nZXRSZWdFeHBGbGFncyA9IF9fZ2V0UmVnRXhwRmxhZ3M7XG5cbnJldHVybiBjbG9uZTtcbn0pKCk7XG5cbmlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNsb25lO1xufVxuIiwidmFyIHBTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi9saWIva2V5cy5qcycpO1xudmFyIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9saWIvaXNfYXJndW1lbnRzLmpzJyk7XG5cbnZhciBkZWVwRXF1YWwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhY3R1YWwsIGV4cGVjdGVkLCBvcHRzKSB7XG4gIGlmICghb3B0cykgb3B0cyA9IHt9O1xuICAvLyA3LjEuIEFsbCBpZGVudGljYWwgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBhcyBkZXRlcm1pbmVkIGJ5ID09PS5cbiAgaWYgKGFjdHVhbCA9PT0gZXhwZWN0ZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcblxuICB9IGVsc2UgaWYgKGFjdHVhbCBpbnN0YW5jZW9mIERhdGUgJiYgZXhwZWN0ZWQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIGFjdHVhbC5nZXRUaW1lKCkgPT09IGV4cGVjdGVkLmdldFRpbWUoKTtcblxuICAvLyA3LjMuIE90aGVyIHBhaXJzIHRoYXQgZG8gbm90IGJvdGggcGFzcyB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcsXG4gIC8vIGVxdWl2YWxlbmNlIGlzIGRldGVybWluZWQgYnkgPT0uXG4gIH0gZWxzZSBpZiAoIWFjdHVhbCB8fCAhZXhwZWN0ZWQgfHwgdHlwZW9mIGFjdHVhbCAhPSAnb2JqZWN0JyAmJiB0eXBlb2YgZXhwZWN0ZWQgIT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gb3B0cy5zdHJpY3QgPyBhY3R1YWwgPT09IGV4cGVjdGVkIDogYWN0dWFsID09IGV4cGVjdGVkO1xuXG4gIC8vIDcuNC4gRm9yIGFsbCBvdGhlciBPYmplY3QgcGFpcnMsIGluY2x1ZGluZyBBcnJheSBvYmplY3RzLCBlcXVpdmFsZW5jZSBpc1xuICAvLyBkZXRlcm1pbmVkIGJ5IGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoYXMgdmVyaWZpZWRcbiAgLy8gd2l0aCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwpLCB0aGUgc2FtZSBzZXQgb2Yga2V5c1xuICAvLyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSwgZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5XG4gIC8vIGNvcnJlc3BvbmRpbmcga2V5LCBhbmQgYW4gaWRlbnRpY2FsICdwcm90b3R5cGUnIHByb3BlcnR5LiBOb3RlOiB0aGlzXG4gIC8vIGFjY291bnRzIGZvciBib3RoIG5hbWVkIGFuZCBpbmRleGVkIHByb3BlcnRpZXMgb24gQXJyYXlzLlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmpFcXVpdihhY3R1YWwsIGV4cGVjdGVkLCBvcHRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKHgpIHtcbiAgaWYgKCF4IHx8IHR5cGVvZiB4ICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgeC5sZW5ndGggIT09ICdudW1iZXInKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgeC5jb3B5ICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB4LnNsaWNlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh4Lmxlbmd0aCA+IDAgJiYgdHlwZW9mIHhbMF0gIT09ICdudW1iZXInKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBvYmpFcXVpdihhLCBiLCBvcHRzKSB7XG4gIHZhciBpLCBrZXk7XG4gIGlmIChpc1VuZGVmaW5lZE9yTnVsbChhKSB8fCBpc1VuZGVmaW5lZE9yTnVsbChiKSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS5cbiAgaWYgKGEucHJvdG90eXBlICE9PSBiLnByb3RvdHlwZSkgcmV0dXJuIGZhbHNlO1xuICAvL35+fkkndmUgbWFuYWdlZCB0byBicmVhayBPYmplY3Qua2V5cyB0aHJvdWdoIHNjcmV3eSBhcmd1bWVudHMgcGFzc2luZy5cbiAgLy8gICBDb252ZXJ0aW5nIHRvIGFycmF5IHNvbHZlcyB0aGUgcHJvYmxlbS5cbiAgaWYgKGlzQXJndW1lbnRzKGEpKSB7XG4gICAgaWYgKCFpc0FyZ3VtZW50cyhiKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBhID0gcFNsaWNlLmNhbGwoYSk7XG4gICAgYiA9IHBTbGljZS5jYWxsKGIpO1xuICAgIHJldHVybiBkZWVwRXF1YWwoYSwgYiwgb3B0cyk7XG4gIH1cbiAgaWYgKGlzQnVmZmVyKGEpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihiKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHRyeSB7XG4gICAgdmFyIGthID0gb2JqZWN0S2V5cyhhKSxcbiAgICAgICAga2IgPSBvYmplY3RLZXlzKGIpO1xuICB9IGNhdGNoIChlKSB7Ly9oYXBwZW5zIHdoZW4gb25lIGlzIGEgc3RyaW5nIGxpdGVyYWwgYW5kIHRoZSBvdGhlciBpc24ndFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGtleXMgaW5jb3Jwb3JhdGVzXG4gIC8vIGhhc093blByb3BlcnR5KVxuICBpZiAoa2EubGVuZ3RoICE9IGtiLmxlbmd0aClcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vdGhlIHNhbWUgc2V0IG9mIGtleXMgKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksXG4gIGthLnNvcnQoKTtcbiAga2Iuc29ydCgpO1xuICAvL35+fmNoZWFwIGtleSB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGthW2ldICE9IGtiW2ldKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5IGNvcnJlc3BvbmRpbmcga2V5LCBhbmRcbiAgLy9+fn5wb3NzaWJseSBleHBlbnNpdmUgZGVlcCB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAga2V5ID0ga2FbaV07XG4gICAgaWYgKCFkZWVwRXF1YWwoYVtrZXldLCBiW2tleV0sIG9wdHMpKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBhID09PSB0eXBlb2YgYjtcbn1cbiIsInZhciBzdXBwb3J0c0FyZ3VtZW50c0NsYXNzID0gKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnRzKVxufSkoKSA9PSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gc3VwcG9ydHNBcmd1bWVudHNDbGFzcyA/IHN1cHBvcnRlZCA6IHVuc3VwcG9ydGVkO1xuXG5leHBvcnRzLnN1cHBvcnRlZCA9IHN1cHBvcnRlZDtcbmZ1bmN0aW9uIHN1cHBvcnRlZChvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpID09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xufTtcblxuZXhwb3J0cy51bnN1cHBvcnRlZCA9IHVuc3VwcG9ydGVkO1xuZnVuY3Rpb24gdW5zdXBwb3J0ZWQob2JqZWN0KXtcbiAgcmV0dXJuIG9iamVjdCAmJlxuICAgIHR5cGVvZiBvYmplY3QgPT0gJ29iamVjdCcgJiZcbiAgICB0eXBlb2Ygb2JqZWN0Lmxlbmd0aCA9PSAnbnVtYmVyJyAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdjYWxsZWUnKSAmJlxuICAgICFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCAnY2FsbGVlJykgfHxcbiAgICBmYWxzZTtcbn07XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgT2JqZWN0LmtleXMgPT09ICdmdW5jdGlvbidcbiAgPyBPYmplY3Qua2V5cyA6IHNoaW07XG5cbmV4cG9ydHMuc2hpbSA9IHNoaW07XG5mdW5jdGlvbiBzaGltIChvYmopIHtcbiAgdmFyIGtleXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikga2V5cy5wdXNoKGtleSk7XG4gIHJldHVybiBrZXlzO1xufVxuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH1cbiAgICAgIHRocm93IFR5cGVFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4nKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgYXJncyA9IG5ldyBBcnJheShsZW4gLSAxKTtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGxlbjsgaSsrKVxuICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdChoYW5kbGVyKSkge1xuICAgIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gLSAxKTtcbiAgICBmb3IgKGkgPSAxOyBpIDwgbGVuOyBpKyspXG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcbiAgICBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBtO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gIGlmICh0aGlzLl9ldmVudHMubmV3TGlzdGVuZXIpXG4gICAgdGhpcy5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgIGlzRnVuY3Rpb24obGlzdGVuZXIubGlzdGVuZXIpID9cbiAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gIGVsc2UgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZVxuICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcblxuICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSAmJiAhdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCkge1xuICAgIHZhciBtO1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5fbWF4TGlzdGVuZXJzKSkge1xuICAgICAgbSA9IHRoaXMuX21heExpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIGlmIChtICYmIG0gPiAwICYmIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGggPiBtKSB7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAnbGVhayBkZXRlY3RlZC4gJWQgbGlzdGVuZXJzIGFkZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnRyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTBcbiAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICB2YXIgZmlyZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBnKCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgZyk7XG5cbiAgICBpZiAoIWZpcmVkKSB7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGcubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgdGhpcy5vbih0eXBlLCBnKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZmYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGxpc3QsIHBvc2l0aW9uLCBsZW5ndGgsIGk7XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgbGlzdCA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHBvc2l0aW9uID0gLTE7XG5cbiAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8XG4gICAgICAoaXNGdW5jdGlvbihsaXN0Lmxpc3RlbmVyKSAmJiBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGlzdCkpIHtcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSA+IDA7KSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgICAobGlzdFtpXS5saXN0ZW5lciAmJiBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBrZXksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICByZXR1cm4gdGhpcztcblxuICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gIGlmICghdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICBlbHNlIGlmICh0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yIChrZXkgaW4gdGhpcy5fZXZlbnRzKSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGxpc3RlbmVycykpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTElGTyBvcmRlclxuICAgIHdoaWxlIChsaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbbGlzdGVuZXJzLmxlbmd0aCAtIDFdKTtcbiAgfVxuICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gW107XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgZWxzZVxuICAgIHJldCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5zbGljZSgpO1xuICByZXR1cm4gcmV0O1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghZW1pdHRlci5fZXZlbnRzIHx8ICFlbWl0dGVyLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gMDtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbihlbWl0dGVyLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IDE7XG4gIGVsc2VcbiAgICByZXQgPSBlbWl0dGVyLl9ldmVudHNbdHlwZV0ubGVuZ3RoO1xuICByZXR1cm4gcmV0O1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuIixudWxsLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwiXG4vKipcbiAqIGlzQXJyYXlcbiAqL1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogdG9TdHJpbmdcbiAqL1xuXG52YXIgc3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gYHZhbGBcbiAqIGlzIGFuIGFycmF5LlxuICpcbiAqIGV4YW1wbGU6XG4gKlxuICogICAgICAgIGlzQXJyYXkoW10pO1xuICogICAgICAgIC8vID4gdHJ1ZVxuICogICAgICAgIGlzQXJyYXkoYXJndW1lbnRzKTtcbiAqICAgICAgICAvLyA+IGZhbHNlXG4gKiAgICAgICAgaXNBcnJheSgnJyk7XG4gKiAgICAgICAgLy8gPiBmYWxzZVxuICpcbiAqIEBwYXJhbSB7bWl4ZWR9IHZhbFxuICogQHJldHVybiB7Ym9vbH1cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXkgfHwgZnVuY3Rpb24gKHZhbCkge1xuICByZXR1cm4gISEgdmFsICYmICdbb2JqZWN0IEFycmF5XScgPT0gc3RyLmNhbGwodmFsKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliJylbJ2RlZmF1bHQnXSIsIlwidXNlIHN0cmljdFwiO1xudmFyIHV0aWxzJCQgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxuLy8gd2hldGhlciB0byBsb2cgZXhjZXB0aW9ucyB0aHJvd24gZHVyaW5nIGNoYW5nZSByZWNvcmQgZGVsaXZlcnlcbnZhciBkZWJ1ZyA9IGZhbHNlO1xuXG4vLyBUaGlzIHdlYWsgbWFwIGlzIHVzZWQgZm9yIGAuZGVsaXZlckNoYW5nZVJlY29yZHMoY2FsbGJhY2spYCBjYWxscywgd2hlcmUgdGhlXG4vLyBwcm92aWRlZCBjYWxsYmFjayBoYXMgdG8gbWFwcGVkIHRvIGl0cyBjb3JyZXNwb25kaW5nIGRlbGVnYXRlLlxuLy8gPGNhbGxiYWNrLCBkZWxlZ2F0ZT5cbnZhciBkZWxlZ2F0ZXMgPSBuZXcgV2Vha01hcDtcblxuLy8gV2hlbiB1c2luZyBgLm9ic2VydmUob2JqLCBjYWxsYmFjaylgLCBpbnN0ZWFkIG9mIGZvcndhcmRpbmcgdGhlIHByb3ZpZGVkXG4vLyBgY2FsbGJhY2tgIHRvIGBPYmplY3Qub2JzZXJ2ZShvYmosIGNhbGxiYWNrKWAgZGlyZWN0bHksIGEgZGVsZWdhdGUgZm9yIHRoZVxuLy8gYGNhbGxiYWNrYCBpcyBjcmVhdGVkLiBUaGlzIGRlbGVnYXRlIHRyYW5zZm9ybXMgY2hhbmdlcyBiZWZvcmUgZm9yd2FyZGluZ1xuLy8gdGhlbSB0byB0aGUgYWN0dWFsIGBjYWxsYmFja2AuXG52YXIgRGVsZWdhdGUgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICB0aGlzLmNhbGxiYWNrICA9IGNhbGxiYWNrXG4gIHRoaXMub2JzZXJ2ZXJzID0gbmV3IHV0aWxzJCQuV2Vha01WTWFwXG5cbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHRoaXMuaGFuZGxlQ2hhbmdlUmVjb3JkcyA9IGZ1bmN0aW9uKHJlY29yZHMpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGNoYW5nZXMgPSByZWNvcmRzLm1hcChzZWxmLnRyYW5zZm9ybSwgc2VsZilcbiAgICAgIGNoYW5nZXMgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBjaGFuZ2VzKSAvLyBmbGF0dGVuXG4gICAgICBzZWxmLmNhbGxiYWNrKGNoYW5nZXMpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZGVidWcpIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGlzIG1ldGhvZCB0cmFuc2Zvcm1zIHRoZSByZWNlaXZlZCBjaGFuZ2UgcmVjb3JkIHdpdGggdXNpbmcgdGhlXG4vLyBjb3JyZXNwb25kaW5nIG9ic2VydmVyIGZvciB0aGUgb2JqZWN0IHRoYXQgZ290IGNoYW5nZWQuXG5EZWxlZ2F0ZS5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24ocmVjb3JkKSB7XG4gIGlmICghdGhpcy5vYnNlcnZlcnMuaGFzKHJlY29yZC5vYmplY3QpKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICB2YXIgb2JzZXJ2ZXJzID0gdGhpcy5vYnNlcnZlcnMuZ2V0KHJlY29yZC5vYmplY3QpXG4gIG9ic2VydmVycyA9IG9ic2VydmVycy5maWx0ZXIoZnVuY3Rpb24odmFsdWUsIGluZGV4LCBzZWxmKSB7XG4gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4XG4gIH0pXG4gIHJldHVybiBvYnNlcnZlcnMubWFwKGZ1bmN0aW9uKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyLnRyYW5zZm9ybShyZWNvcmQpXG4gIH0pXG59XG5cbi8vIEVhY2ggY2FsbGJhY2svb2JqZWN0IHBhaXIgZ2V0cyBpdHMgb3duIG9ic2VydmVyLCB3aGljaCBpcyB1c2VkIHRvIHRyYWNrXG4vLyBwb3NpdGlvbnMgb2YgbmVzdGVkIG9iamVjdHMgYW5kIHRyYW5zZm9ybXMgY2hhbmdlIHJlY29yZHMgYWNjb3JkaW5nbHkuXG52YXIgT2JzZXJ2ZXIgPSBmdW5jdGlvbihyb290LCBkZWxlZ2F0ZSwgYWNjZXB0KSB7XG4gIHRoaXMucm9vdCAgICAgPSByb290XG4gIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZVxuICB0aGlzLmNhbGxiYWNrID0gZGVsZWdhdGUuaGFuZGxlQ2hhbmdlUmVjb3Jkc1xuICB0aGlzLmFjY2VwdCAgID0gYWNjZXB0XG4gIHRoaXMucGFyZW50cyAgPSBuZXcgdXRpbHMkJC5QYXJlbnRzTWFwcGluZ1xufVxuXG4vLyBSZWN1cnNpdmVseSBvYnNlcnZlIGFuIG9iamVjdCBhbmQgaXRzIG5lc3RlZCBvYmplY3RzLlxuT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbihvYmosIHBhcmVudCwga2V5LCB2aXNpdGVkKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIXZpc2l0ZWQpIHtcbiAgICB2aXNpdGVkID0gbmV3IFdlYWtNYXBcbiAgfVxuXG4gIGlmICh2aXNpdGVkLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2aXNpdGVkLnNldChvYmosIHRydWUpXG5cbiAgLy8gaWYgdGhlIG9iamVjdCBpcyBhbHJlYWR5IG9ic2VydmVkLCBpLmUuLCBhbHJlYWR5IHNvbWV3aGVyZSBlbHNlIGluIHRoZVxuICAvLyBuZXN0ZWQgc3RydWN0dXJlIC0+IGRvIG5vdCBvYnNlcnZlIGl0IGFnYWluXG4gIGlmICghdGhpcy5kZWxlZ2F0ZS5vYnNlcnZlcnMuaGFzKG9iaiwgdGhpcykpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopICYmICF0aGlzLmFjY2VwdCkge1xuICAgICAgT2JqZWN0Lm9ic2VydmUob2JqLCB0aGlzLmNhbGxiYWNrLCBbJ2FkZCcsICd1cGRhdGUnLCAnZGVsZXRlJywgJ3NwbGljZSddKVxuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3Qub2JzZXJ2ZShvYmosIHRoaXMuY2FsbGJhY2ssIHRoaXMuYWNjZXB0KVxuICAgIH1cbiAgfVxuXG4gIC8vIHRyYWNrIHBhcmVudCBhbmQgYmVsb25naW5nXG4gIHRoaXMucGFyZW50cy5hZGQob2JqLCBwYXJlbnQsIGtleSlcbiAgdGhpcy5kZWxlZ2F0ZS5vYnNlcnZlcnMuYWRkKG9iaiwgdGhpcylcblxuICAvLyB0cmF2ZXJzZSB0aGUgcHJvcGVydGllcyB0byBmaW5kIG5lc3RlZCBvYmplY3RzIGFuZCBvYnNlcnZlIHRoZW0sIHRvb1xuICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkob2JqKVxuICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgIGlmICh0eXBlb2Ygb2JqW3Byb3BdID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5vYnNlcnZlKG9ialtwcm9wXSwgb2JqLCBpc0FycmF5ID8gQXJyYXkgOiBwcm9wLCB2aXNpdGVkKVxuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqLmVudHJpZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgZW50cmllcyA9IG9iai5lbnRyaWVzKClcbiAgICBpZiAodHlwZW9mIGVudHJpZXMubmV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gZm9yICh2YXIgcGFpciBvZiBlbnRyaWVzKVxuICAgICAgdmFyIHBhaXJcbiAgICAgIHdoaWxlICgocGFpciA9IGVudHJpZXMubmV4dCgpKS5kb25lID09PSBmYWxzZSkge1xuICAgICAgICBpZiAodHlwZW9mIHBhaXIudmFsdWVbMV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlKHBhaXIudmFsdWVbMV0sIG9iaiwgcGFpci52YWx1ZVswXSwgdmlzaXRlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBSZWN1cnNpdmVseSB1bm9ic2VydmUgYW4gb2JqZWN0IGFuZCBpdHMgbmVzdGVkIG9iamVjdHMuXG5PYnNlcnZlci5wcm90b3R5cGUudW5vYnNlcnZlID0gZnVuY3Rpb24ob2JqLCBwYXJlbnQsIGtleSkge1xuICBpZiAob2JqID09PSB1bmRlZmluZWQpIG9iaiA9IHRoaXMucm9vdFxuICBlbHNlIGlmICghb2JqKSByZXR1cm5cblxuICBpZiAoIXRoaXMuZGVsZWdhdGUub2JzZXJ2ZXJzLmhhcyhvYmosIHRoaXMpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBjbGVhbiB1cFxuICB0aGlzLnBhcmVudHMucmVtb3ZlKG9iaiwgcGFyZW50LCBrZXkpXG4gIHRoaXMuZGVsZWdhdGUub2JzZXJ2ZXJzLnJlbW92ZShvYmosIHRoaXMpXG5cbiAgaWYgKCF0aGlzLmRlbGVnYXRlLm9ic2VydmVycy5oYXMob2JqKSkge1xuICAgIE9iamVjdC51bm9ic2VydmUob2JqLCB0aGlzLmNhbGxiYWNrKVxuICB9XG5cbiAgLy8gdHJhdmVyc2UgdGhlIHByb3BlcnRpZXMgdG8gZmluZCBuZXN0ZWQgb2JqZWN0cyBhbmQgdW5vYnNlcnZlIHRoZW0sIHRvb1xuICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkob2JqKVxuICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgIGlmICh0eXBlb2Ygb2JqW3Byb3BdID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy51bm9ic2VydmUob2JqW3Byb3BdLCBvYmosIGlzQXJyYXkgPyBBcnJheSA6IHByb3ApXG4gICAgfVxuICB9XG59XG5cbi8vIFRyYW5zZm9ybSBhIGNoYW5nZSByZWNvcmQsIGllLiwgYWRkIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbi8vIC0gKipyb290KiogLSB0aGUgcm9vdCBvZiB0aGUgbmVzdGVkIHN0cnVjdHVyZVxuLy8gLSAqKnBhdGgqKiAtIGEgW0pTT04gUG9pbnRlcl0oaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjkwMSlcbi8vICAgICAgICAgICAgICAoYWJzb2x1dGUgZnJvbSB0aGUgcm9vdCkgdG8gdGhlIGNoYW5nZWQgcHJvcGVydHlcbk9ic2VydmVyLnByb3RvdHlwZS50cmFuc2Zvcm0gPSBmdW5jdGlvbihjaGFuZ2UpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgdmFyIHJlY29yZCA9IHtcbiAgICByb290OiB0aGlzLnJvb3QsXG4gICAgZ2V0IHBhdGgoKSB7XG4gICAgICB2YXIgcGF0aCA9IHNlbGYucGFyZW50cy5wYXRoKGNoYW5nZS5vYmplY3QpXG4gICAgICBpZiAoY2hhbmdlLm5hbWUpIHBhdGgucHVzaChjaGFuZ2UubmFtZSlcbiAgICAgIHJldHVybiAnLycgKyBwYXRoLm1hcChmdW5jdGlvbihrKSB7XG4gICAgICAgIHJldHVybiBrLnRvU3RyaW5nKCkucmVwbGFjZSgvfi9nLCAnfjAnKS5yZXBsYWNlKC9cXC8vZywgJ34xJylcbiAgICAgIH0pLmpvaW4oJy8nKVxuICAgIH1cbiAgfVxuXG4gIC8vIHRoZSBvcmlnaW5hbCBjaGFuZ2UgcmVjb3JkIGlzdCBub3QgZXh0ZW5zaWJsZSAtPiBjb3B5XG4gIGZvciAodmFyIHByb3AgaW4gY2hhbmdlKSB7XG4gICAgcmVjb3JkW3Byb3BdID0gY2hhbmdlW3Byb3BdXG4gIH1cblxuICAvLyB1bm9ic2VydmUgZGVsZXRlZC9yZXBsYWNlZCBvYmplY3RzXG4gIHZhciBkZWxldGVkID0gY2hhbmdlLm9sZFZhbHVlICYmIFtjaGFuZ2Uub2xkVmFsdWVdIHx8IGNoYW5nZS5yZW1vdmVkIHx8IFtdXG4gIGRlbGV0ZWQuZm9yRWFjaChmdW5jdGlvbihvbGRWYWx1ZSwgaSkge1xuICAgIGlmIChvbGRWYWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2xkVmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnVub2JzZXJ2ZShvbGRWYWx1ZSwgY2hhbmdlLm9iamVjdCwgY2hhbmdlLm5hbWUgfHwgY2hhbmdlLmluZGV4ICsgaSlcbiAgfSwgdGhpcylcblxuICAvLyBvYnNlcnZlIGFkZGVkL3VwZGF0ZWQgb2JqZWN0c1xuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UodmFsdWUsIHBhcmVudCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBkZXNjID0ga2V5ICE9PSBBcnJheSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHBhcmVudCwga2V5KVxuICAgICAgaWYgKCFkZXNjIHx8IGRlc2MuZW51bWVyYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICBzZWxmLm9ic2VydmUodmFsdWUsIHBhcmVudCwga2V5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi51bm9ic2VydmUodmFsdWUsIHBhcmVudCwga2V5KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChjaGFuZ2UubmFtZSkge1xuICAgIGlmIChjaGFuZ2UubmFtZSBpbiBjaGFuZ2Uub2JqZWN0KSB7XG4gICAgICBoYW5kbGVDaGFuZ2UoY2hhbmdlLm9iamVjdFtjaGFuZ2UubmFtZV0sIGNoYW5nZS5vYmplY3QsIGNoYW5nZS5uYW1lKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNoYW5nZS5vYmplY3QuZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBoYW5kbGVDaGFuZ2UoY2hhbmdlLm9iamVjdC5nZXQoY2hhbmdlLm5hbWUpLCBjaGFuZ2Uub2JqZWN0LCBjaGFuZ2UubmFtZSlcbiAgICB9XG4gIH0gZWxzZSBpZiAoY2hhbmdlLnR5cGUgPT09ICdzcGxpY2UnICYmIGNoYW5nZS5hZGRlZENvdW50KSB7XG4gICAgdmFyIGFkZGVkID0gY2hhbmdlLm9iamVjdC5zbGljZShjaGFuZ2UuaW5kZXgsIGNoYW5nZS5pbmRleCArIGNoYW5nZS5hZGRlZENvdW50KVxuICAgIGFkZGVkLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGhhbmRsZUNoYW5nZSh2YWx1ZSwgY2hhbmdlLm9iamVjdCwgQXJyYXkpXG4gICAgfSlcbiAgfVxuXG4gIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyhyZWNvcmQpXG5cbiAgcmV0dXJuIHJlY29yZFxufVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHtcbiAgLy8gQ29ycmVzcG9uZHMgdG8gYE9iamVjdC5vYnNlcnZlKClgIGJ1dCBmb3IgbmVzdGVkIG9iamVjdHMuXG4gIG9ic2VydmU6IGZ1bmN0aW9uIG9ic2VydmUob2JqLCBjYWxsYmFjaywgYWNjZXB0KSB7XG4gICAgdmFyIGRlbGVnYXRlXG5cbiAgICBpZiAoIWRlbGVnYXRlcy5oYXMoY2FsbGJhY2spKSB7XG4gICAgICBkZWxlZ2F0ZSA9IG5ldyBEZWxlZ2F0ZShjYWxsYmFjaylcbiAgICAgIGRlbGVnYXRlcy5zZXQoY2FsbGJhY2ssIGRlbGVnYXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWxlZ2F0ZSA9IGRlbGVnYXRlcy5nZXQoY2FsbGJhY2spXG4gICAgfVxuXG4gICAgdmFyIG9ic2VydmVycyA9IGRlbGVnYXRlLm9ic2VydmVyc1xuICAgIGlmIChvYnNlcnZlcnMuaGFzKG9iaikpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBvYnNlcnZlciA9IG5ldyBPYnNlcnZlcihvYmosIGRlbGVnYXRlLCBhY2NlcHQpXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShvYmopXG4gIH0sXG5cbiAgLy8gQ29ycmVzcG9uZHMgdG8gYE9iamVjdC51bm9ic2VydmUoKWAgYnV0IGZvciBuZXN0ZWQgb2JqZWN0cy5cbiAgdW5vYnNlcnZlOiBmdW5jdGlvbiB1bm9ic2VydmUob2JqLCBjYWxsYmFjaykge1xuICAgIGlmICghZGVsZWdhdGVzLmhhcyhjYWxsYmFjaykpIHJldHVyblxuICAgIHZhciBkZWxlZ2F0ZSA9IGRlbGVnYXRlcy5nZXQoY2FsbGJhY2spXG5cbiAgICBpZiAoIWRlbGVnYXRlLm9ic2VydmVycy5oYXMob2JqKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIG9ic2VydmVycyA9IGRlbGVnYXRlLm9ic2VydmVycy5nZXQob2JqKVxuICAgIG9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uKG9ic2VydmVyKSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoKVxuICAgIH0pXG4gIH0sXG5cbiAgLy8gQ29ycmVzcG9uZHMgdG8gYE9iamVjdC5kZWxpdmVyQ2hhbmdlUmVjb3JkcygpYCBidXQgZm9yIG5lc3RlZCBvYmplY3RzLlxuICBkZWxpdmVyQ2hhbmdlUmVjb3JkczogZnVuY3Rpb24gZGVsaXZlckNoYW5nZVJlY29yZHMoY2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24sIGdpdmVuOiAnICsgY2FsbGJhY2spXG4gICAgfVxuXG4gICAgaWYgKCFkZWxlZ2F0ZXMuaGFzKGNhbGxiYWNrKSkgcmV0dXJuXG5cbiAgICB2YXIgZGVsZWdhdGUgPSBkZWxlZ2F0ZXMuZ2V0KGNhbGxiYWNrKVxuICAgIE9iamVjdC5kZWxpdmVyQ2hhbmdlUmVjb3JkcyhkZWxlZ2F0ZS5oYW5kbGVDaGFuZ2VSZWNvcmRzKVxuICB9LFxuXG4gIGdldCBkZWJ1ZygpIHtcbiAgICByZXR1cm4gZGVidWdcbiAgfSxcblxuICBzZXQgZGVidWcodmFsKSB7XG4gICAgZGVidWcgPSB2YWxcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBXZWFrTVZNYXAgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5tYXAgPSBuZXcgV2Vha01hcFxufVxuXG5XZWFrTVZNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGtleSkge1xuICByZXR1cm4gdGhpcy5tYXAuZ2V0KGtleSlcbn1cblxuV2Vha01WTWFwLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gIGlmICghdGhpcy5tYXAuaGFzKGtleSkpIHJldHVybiBmYWxzZVxuICB2YXIgdmFsdWVzID0gdGhpcy5tYXAuZ2V0KGtleSlcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgdmFsdWVzLmxlbmd0aCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIHZhbHVlcy5pbmRleE9mKHZhbHVlKSA+IC0xXG59XG5cbldlYWtNVk1hcC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICBpZiAoIXRoaXMubWFwLmhhcyhrZXkpKSB7XG4gICAgdGhpcy5tYXAuc2V0KGtleSwgW10pXG4gIH1cblxuICB2YXIgdmFsdWVzID0gdGhpcy5tYXAuZ2V0KGtleSlcbiAgdmFsdWVzLnB1c2godmFsdWUpXG59XG5cbldlYWtNVk1hcC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICB2YXIgdmFsdWVzID0gdGhpcy5tYXAuZ2V0KGtleSlcblxuICB2YXIgaW5kZXggPSB2YWx1ZXMuaW5kZXhPZih2YWx1ZSlcbiAgdmFsdWVzLnNwbGljZShpbmRleCwgMSlcblxuICAvLyBpZiB0aGUgc2V0IGlzIGVtcHR5LCByZW1vdmUgaXQgZnJvbSB0aGUgV2Vha01hcFxuICBpZiAoIXZhbHVlcy5sZW5ndGgpIHRoaXMubWFwLmRlbGV0ZShrZXkpXG59XG5cbnZhciBQYXJlbnRzTWFwcGluZyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLm1hcHBpbmcgPSBuZXcgV2Vha01hcFxufVxuXG5QYXJlbnRzTWFwcGluZy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ob2JqLCBwYXJlbnQsIGtleSkge1xuICBpZiAoIXBhcmVudCB8fCBrZXkgPT09IHVuZGVmaW5lZCkgcmV0dXJuXG5cbiAgaWYgKCF0aGlzLm1hcHBpbmcuaGFzKG9iaikpIHtcbiAgICB0aGlzLm1hcHBpbmcuc2V0KG9iaiwgW10pXG4gIH1cblxuICB2YXIgcGFyZW50cyA9IHRoaXMubWFwcGluZy5nZXQob2JqKVxuICBwYXJlbnRzLnB1c2goeyBvYmo6IHBhcmVudCwga2V5OiBrZXkgfSlcbn1cblxuUGFyZW50c01hcHBpbmcucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKG9iaiwgcGFyZW50LCBrZXkpIHtcbiAgaWYgKCFwYXJlbnQgfHwgIWtleSA9PT0gdW5kZWZpbmVkKSByZXR1cm5cblxuICB2YXIgcGFyZW50cyA9IHRoaXMubWFwcGluZy5nZXQob2JqKVxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXJlbnRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHBhcmVudHNbaV0ub2JqID09PSBwYXJlbnQgJiYgcGFyZW50c1tpXS5rZXkgPT09IGtleSkge1xuICAgICAgcGFyZW50cy5zcGxpY2UoaSwgMSlcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKCFwYXJlbnRzLmxlbmd0aCkgdGhpcy5tYXBwaW5nLmRlbGV0ZShvYmopXG59XG5cblBhcmVudHNNYXBwaW5nLnByb3RvdHlwZS5wYXRoID0gZnVuY3Rpb24ob2JqKSB7XG4gIHZhciBwYXRoID0gW11cbiAgd2hpbGUgKHRoaXMubWFwcGluZy5oYXMob2JqKSkge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm1hcHBpbmcuZ2V0KG9iailbMF1cbiAgICB2YXIga2V5ID0gcGFyZW50LmtleSA9PT0gQXJyYXkgPyBwYXJlbnQub2JqLmluZGV4T2Yob2JqKSA6IHBhcmVudC5rZXlcbiAgICBwYXRoLnVuc2hpZnQoa2V5KVxuICAgIG9iaiA9IHBhcmVudC5vYmpcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuZXhwb3J0cy5XZWFrTVZNYXAgPSBXZWFrTVZNYXAsIGV4cG9ydHMuUGFyZW50c01hcHBpbmcgPSBQYXJlbnRzTWFwcGluZzsiLCIoZnVuY3Rpb24gKHJvb3QsIGZhY3Rvcnkpe1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyppc3RhbmJ1bCBpZ25vcmUgbmV4dDpjYW50IHRlc3QqL1xuICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIHJvb3Qub2JqZWN0UGF0aCA9IGZhY3RvcnkoKTtcbiAgfVxufSkodGhpcywgZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhclxuICAgIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBfaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gIGZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpe1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIWlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICBmb3IgKHZhciBpIGluIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoX2hhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB0b1N0cmluZyh0eXBlKXtcbiAgICByZXR1cm4gdG9TdHIuY2FsbCh0eXBlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKXtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB0b1N0cmluZyh2YWx1ZSkgPT09IFwiW29iamVjdCBOdW1iZXJdXCI7XG4gIH1cblxuICBmdW5jdGlvbiBpc1N0cmluZyhvYmope1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyB8fCB0b1N0cmluZyhvYmopID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNPYmplY3Qob2JqKXtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdG9TdHJpbmcob2JqKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQXJyYXkob2JqKXtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iai5sZW5ndGggPT09ICdudW1iZXInICYmIHRvU3RyaW5nKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Jvb2xlYW4ob2JqKXtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Jvb2xlYW4nIHx8IHRvU3RyaW5nKG9iaikgPT09ICdbb2JqZWN0IEJvb2xlYW5dJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEtleShrZXkpe1xuICAgIHZhciBpbnRLZXkgPSBwYXJzZUludChrZXkpO1xuICAgIGlmIChpbnRLZXkudG9TdHJpbmcoKSA9PT0ga2V5KSB7XG4gICAgICByZXR1cm4gaW50S2V5O1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0KG9iaiwgcGF0aCwgdmFsdWUsIGRvTm90UmVwbGFjZSl7XG4gICAgaWYgKGlzTnVtYmVyKHBhdGgpKSB7XG4gICAgICBwYXRoID0gW3BhdGhdO1xuICAgIH1cbiAgICBpZiAoaXNFbXB0eShwYXRoKSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYgKGlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICByZXR1cm4gc2V0KG9iaiwgcGF0aC5zcGxpdCgnLicpLm1hcChnZXRLZXkpLCB2YWx1ZSwgZG9Ob3RSZXBsYWNlKTtcbiAgICB9XG4gICAgdmFyIGN1cnJlbnRQYXRoID0gcGF0aFswXTtcblxuICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIG9sZFZhbCA9IG9ialtjdXJyZW50UGF0aF07XG4gICAgICBpZiAob2xkVmFsID09PSB2b2lkIDAgfHwgIWRvTm90UmVwbGFjZSkge1xuICAgICAgICBvYmpbY3VycmVudFBhdGhdID0gdmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2xkVmFsO1xuICAgIH1cblxuICAgIGlmIChvYmpbY3VycmVudFBhdGhdID09PSB2b2lkIDApIHtcbiAgICAgIC8vY2hlY2sgaWYgd2UgYXNzdW1lIGFuIGFycmF5XG4gICAgICBpZihpc051bWJlcihwYXRoWzFdKSkge1xuICAgICAgICBvYmpbY3VycmVudFBhdGhdID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmpbY3VycmVudFBhdGhdID0ge307XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNldChvYmpbY3VycmVudFBhdGhdLCBwYXRoLnNsaWNlKDEpLCB2YWx1ZSwgZG9Ob3RSZXBsYWNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbChvYmosIHBhdGgpIHtcbiAgICBpZiAoaXNOdW1iZXIocGF0aCkpIHtcbiAgICAgIHBhdGggPSBbcGF0aF07XG4gICAgfVxuXG4gICAgaWYgKGlzRW1wdHkob2JqKSkge1xuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG5cbiAgICBpZiAoaXNFbXB0eShwYXRoKSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYoaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgIHJldHVybiBkZWwob2JqLCBwYXRoLnNwbGl0KCcuJykpO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50UGF0aCA9IGdldEtleShwYXRoWzBdKTtcbiAgICB2YXIgb2xkVmFsID0gb2JqW2N1cnJlbnRQYXRoXTtcblxuICAgIGlmKHBhdGgubGVuZ3RoID09PSAxKSB7XG4gICAgICBpZiAob2xkVmFsICE9PSB2b2lkIDApIHtcbiAgICAgICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICAgIG9iai5zcGxpY2UoY3VycmVudFBhdGgsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBvYmpbY3VycmVudFBhdGhdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChvYmpbY3VycmVudFBhdGhdICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGRlbChvYmpbY3VycmVudFBhdGhdLCBwYXRoLnNsaWNlKDEpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIG9iamVjdFBhdGggPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0UGF0aCkucmVkdWNlKGZ1bmN0aW9uKHByb3h5LCBwcm9wKSB7XG4gICAgICBpZiAodHlwZW9mIG9iamVjdFBhdGhbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJveHlbcHJvcF0gPSBvYmplY3RQYXRoW3Byb3BdLmJpbmQob2JqZWN0UGF0aCwgb2JqKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3h5O1xuICAgIH0sIHt9KTtcbiAgfTtcblxuICBvYmplY3RQYXRoLmhhcyA9IGZ1bmN0aW9uIChvYmosIHBhdGgpIHtcbiAgICBpZiAoaXNFbXB0eShvYmopKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzTnVtYmVyKHBhdGgpKSB7XG4gICAgICBwYXRoID0gW3BhdGhdO1xuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgIHBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRW1wdHkocGF0aCkgfHwgcGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBqID0gcGF0aFtpXTtcbiAgICAgIGlmICgoaXNPYmplY3Qob2JqKSB8fCBpc0FycmF5KG9iaikpICYmIF9oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaikpIHtcbiAgICAgICAgb2JqID0gb2JqW2pdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIG9iamVjdFBhdGguZW5zdXJlRXhpc3RzID0gZnVuY3Rpb24gKG9iaiwgcGF0aCwgdmFsdWUpe1xuICAgIHJldHVybiBzZXQob2JqLCBwYXRoLCB2YWx1ZSwgdHJ1ZSk7XG4gIH07XG5cbiAgb2JqZWN0UGF0aC5zZXQgPSBmdW5jdGlvbiAob2JqLCBwYXRoLCB2YWx1ZSwgZG9Ob3RSZXBsYWNlKXtcbiAgICByZXR1cm4gc2V0KG9iaiwgcGF0aCwgdmFsdWUsIGRvTm90UmVwbGFjZSk7XG4gIH07XG5cbiAgb2JqZWN0UGF0aC5pbnNlcnQgPSBmdW5jdGlvbiAob2JqLCBwYXRoLCB2YWx1ZSwgYXQpe1xuICAgIHZhciBhcnIgPSBvYmplY3RQYXRoLmdldChvYmosIHBhdGgpO1xuICAgIGF0ID0gfn5hdDtcbiAgICBpZiAoIWlzQXJyYXkoYXJyKSkge1xuICAgICAgYXJyID0gW107XG4gICAgICBvYmplY3RQYXRoLnNldChvYmosIHBhdGgsIGFycik7XG4gICAgfVxuICAgIGFyci5zcGxpY2UoYXQsIDAsIHZhbHVlKTtcbiAgfTtcblxuICBvYmplY3RQYXRoLmVtcHR5ID0gZnVuY3Rpb24ob2JqLCBwYXRoKSB7XG4gICAgaWYgKGlzRW1wdHkocGF0aCkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmIChpc0VtcHR5KG9iaikpIHtcbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlLCBpO1xuICAgIGlmICghKHZhbHVlID0gb2JqZWN0UGF0aC5nZXQob2JqLCBwYXRoKSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG9iamVjdFBhdGguc2V0KG9iaiwgcGF0aCwgJycpO1xuICAgIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG9iamVjdFBhdGguc2V0KG9iaiwgcGF0aCwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gb2JqZWN0UGF0aC5zZXQob2JqLCBwYXRoLCAwKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5sZW5ndGggPSAwO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBmb3IgKGkgaW4gdmFsdWUpIHtcbiAgICAgICAgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBpKSkge1xuICAgICAgICAgIGRlbGV0ZSB2YWx1ZVtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2JqZWN0UGF0aC5zZXQob2JqLCBwYXRoLCBudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgb2JqZWN0UGF0aC5wdXNoID0gZnVuY3Rpb24gKG9iaiwgcGF0aCAvKiwgdmFsdWVzICovKXtcbiAgICB2YXIgYXJyID0gb2JqZWN0UGF0aC5nZXQob2JqLCBwYXRoKTtcbiAgICBpZiAoIWlzQXJyYXkoYXJyKSkge1xuICAgICAgYXJyID0gW107XG4gICAgICBvYmplY3RQYXRoLnNldChvYmosIHBhdGgsIGFycik7XG4gICAgfVxuXG4gICAgYXJyLnB1c2guYXBwbHkoYXJyLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpKTtcbiAgfTtcblxuICBvYmplY3RQYXRoLmNvYWxlc2NlID0gZnVuY3Rpb24gKG9iaiwgcGF0aHMsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHZhciB2YWx1ZTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXRocy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKCh2YWx1ZSA9IG9iamVjdFBhdGguZ2V0KG9iaiwgcGF0aHNbaV0pKSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICB9O1xuXG4gIG9iamVjdFBhdGguZ2V0ID0gZnVuY3Rpb24gKG9iaiwgcGF0aCwgZGVmYXVsdFZhbHVlKXtcbiAgICBpZiAoaXNOdW1iZXIocGF0aCkpIHtcbiAgICAgIHBhdGggPSBbcGF0aF07XG4gICAgfVxuICAgIGlmIChpc0VtcHR5KHBhdGgpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBpZiAoaXNFbXB0eShvYmopKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBpZiAoaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgIHJldHVybiBvYmplY3RQYXRoLmdldChvYmosIHBhdGguc3BsaXQoJy4nKSwgZGVmYXVsdFZhbHVlKTtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudFBhdGggPSBnZXRLZXkocGF0aFswXSk7XG5cbiAgICBpZiAocGF0aC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmIChvYmpbY3VycmVudFBhdGhdID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmpbY3VycmVudFBhdGhdO1xuICAgIH1cblxuICAgIHJldHVybiBvYmplY3RQYXRoLmdldChvYmpbY3VycmVudFBhdGhdLCBwYXRoLnNsaWNlKDEpLCBkZWZhdWx0VmFsdWUpO1xuICB9O1xuXG4gIG9iamVjdFBhdGguZGVsID0gZnVuY3Rpb24ob2JqLCBwYXRoKSB7XG4gICAgcmV0dXJuIGRlbChvYmosIHBhdGgpO1xuICB9O1xuXG4gIHJldHVybiBvYmplY3RQYXRoO1xufSk7XG4iLCJcbnZhciBybmc7XG5cbmlmIChnbG9iYWwuY3J5cHRvICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0by1iYXNlZCBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIC8vIE1vZGVyYXRlbHkgZmFzdCwgaGlnaCBxdWFsaXR5XG4gIHZhciBfcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG4gIHJuZyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKF9ybmRzOCk7XG4gICAgcmV0dXJuIF9ybmRzODtcbiAgfTtcbn1cblxuaWYgKCFybmcpIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgIF9ybmRzID0gbmV3IEFycmF5KDE2KTtcbiAgcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIF9ybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBfcm5kcztcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBybmc7XG5cbiIsIi8vICAgICB1dWlkLmpzXG4vL1xuLy8gICAgIENvcHlyaWdodCAoYykgMjAxMC0yMDEyIFJvYmVydCBLaWVmZmVyXG4vLyAgICAgTUlUIExpY2Vuc2UgLSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cbi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBXZSBmZWF0dXJlXG4vLyBkZXRlY3QgdG8gZGV0ZXJtaW5lIHRoZSBiZXN0IFJORyBzb3VyY2UsIG5vcm1hbGl6aW5nIHRvIGEgZnVuY3Rpb24gdGhhdFxuLy8gcmV0dXJucyAxMjgtYml0cyBvZiByYW5kb21uZXNzLCBzaW5jZSB0aGF0J3Mgd2hhdCdzIHVzdWFsbHkgcmVxdWlyZWRcbnZhciBfcm5nID0gcmVxdWlyZSgnLi9ybmcnKTtcblxuLy8gTWFwcyBmb3IgbnVtYmVyIDwtPiBoZXggc3RyaW5nIGNvbnZlcnNpb25cbnZhciBfYnl0ZVRvSGV4ID0gW107XG52YXIgX2hleFRvQnl0ZSA9IHt9O1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICBfYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbiAgX2hleFRvQnl0ZVtfYnl0ZVRvSGV4W2ldXSA9IGk7XG59XG5cbi8vICoqYHBhcnNlKClgIC0gUGFyc2UgYSBVVUlEIGludG8gaXQncyBjb21wb25lbnQgYnl0ZXMqKlxuZnVuY3Rpb24gcGFyc2UocywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSAoYnVmICYmIG9mZnNldCkgfHwgMCwgaWkgPSAwO1xuXG4gIGJ1ZiA9IGJ1ZiB8fCBbXTtcbiAgcy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1swLTlhLWZdezJ9L2csIGZ1bmN0aW9uKG9jdCkge1xuICAgIGlmIChpaSA8IDE2KSB7IC8vIERvbid0IG92ZXJmbG93IVxuICAgICAgYnVmW2kgKyBpaSsrXSA9IF9oZXhUb0J5dGVbb2N0XTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFplcm8gb3V0IHJlbWFpbmluZyBieXRlcyBpZiBzdHJpbmcgd2FzIHNob3J0XG4gIHdoaWxlIChpaSA8IDE2KSB7XG4gICAgYnVmW2kgKyBpaSsrXSA9IDA7XG4gIH1cblxuICByZXR1cm4gYnVmO1xufVxuXG4vLyAqKmB1bnBhcnNlKClgIC0gQ29udmVydCBVVUlEIGJ5dGUgYXJyYXkgKGFsYSBwYXJzZSgpKSBpbnRvIGEgc3RyaW5nKipcbmZ1bmN0aW9uIHVucGFyc2UoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMCwgYnRoID0gX2J5dGVUb0hleDtcbiAgcmV0dXJuICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV07XG59XG5cbi8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxuLy8gcmFuZG9tICMncyB3ZSBuZWVkIHRvIGluaXQgbm9kZSBhbmQgY2xvY2tzZXFcbnZhciBfc2VlZEJ5dGVzID0gX3JuZygpO1xuXG4vLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbnZhciBfbm9kZUlkID0gW1xuICBfc2VlZEJ5dGVzWzBdIHwgMHgwMSxcbiAgX3NlZWRCeXRlc1sxXSwgX3NlZWRCeXRlc1syXSwgX3NlZWRCeXRlc1szXSwgX3NlZWRCeXRlc1s0XSwgX3NlZWRCeXRlc1s1XVxuXTtcblxuLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbnZhciBfY2xvY2tzZXEgPSAoX3NlZWRCeXRlc1s2XSA8PCA4IHwgX3NlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwLCBfbGFzdE5TZWNzID0gMDtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IFtdO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyBuKyspIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogdW5wYXJzZShiKTtcbn1cblxuLy8gKipgdjQoKWAgLSBHZW5lcmF0ZSByYW5kb20gVVVJRCoqXG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIC8vIERlcHJlY2F0ZWQgLSAnZm9ybWF0JyBhcmd1bWVudCwgYXMgc3VwcG9ydGVkIGluIHYxLjJcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cbiAgaWYgKHR5cGVvZihvcHRpb25zKSA9PSAnc3RyaW5nJykge1xuICAgIGJ1ZiA9IG9wdGlvbnMgPT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nKSgpO1xuXG4gIC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcbiAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG5cbiAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gIGlmIChidWYpIHtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgMTY7IGlpKyspIHtcbiAgICAgIGJ1ZltpICsgaWldID0gcm5kc1tpaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCB1bnBhcnNlKHJuZHMpO1xufVxuXG4vLyBFeHBvcnQgcHVibGljIEFQSVxudmFyIHV1aWQgPSB2NDtcbnV1aWQudjEgPSB2MTtcbnV1aWQudjQgPSB2NDtcbnV1aWQucGFyc2UgPSBwYXJzZTtcbnV1aWQudW5wYXJzZSA9IHVucGFyc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gdXVpZDtcbiJdfQ==
