(window.webpackJsonp=window.webpackJsonp||[]).push([[3,6,7],{296:function(t,e,n){"use strict";n.r(e);var o={props:["load"]},l=n(76),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.load,expression:"!load"}],staticClass:"fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-900 opacity-75 flex flex-col items-center justify-center"},[e("svg",{staticStyle:{fill:"#26e07f"},attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"48",height:"48",viewBox:"0 0 172 172"}},[e("g",{staticStyle:{"mix-blend-mode":"normal"},attrs:{fill:"none","fill-rule":"nonzero",stroke:"none","stroke-width":"1","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","stroke-dasharray":"","stroke-dashoffset":"0","font-family":"none","font-weight":"none","font-size":"none","text-anchor":"none"}},[e("path",{attrs:{d:"M0,172v-172h172v172z",fill:"none"}}),e("g",{attrs:{fill:"#1fb141"}},[e("path",{attrs:{d:"M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"}})])])]),t._v(" "),e("p",{staticClass:"sm:w-1/3 w-2/3 text-center text-white text-2xl"},[t._v("\n            it's loading hold on.....\n          ")])])])])}),[],!1,null,null,null);e.default=component.exports},298:function(t,e,n){"use strict";n.r(e);var o=n(11),l=(n(108),n(43),n(296)),r=n(297),c={props:["latitude","longitude"],data:function(){return{load:!1,client:Object(r.a)("https://swocaqwllmwkocyhqnhm.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI")}},methods:{refresh:function(){window.location.reload()},logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.client.auth.signOut(),t.$router.push("/");case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;setTimeout((function(){t.load=!0}),4e3)},components:{Loader:l.default}},d=n(76),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("main",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.load,expression:"load"}],staticClass:"md:justify-end flex md:items-center justify-start items-start text-blue gap-5 px-6 md:px-32 py-3 md:py-5 bg-slate-50"},[e("nuxt-link",{staticClass:"flex items-center gap-2",attrs:{to:"/Category"}},[e("span",[t._v("Home")])]),t._v(" "),e("button",{staticClass:"flex items-center gap-2",on:{click:t.refresh}},[e("span",[t._v("Refresh map")])]),t._v(" "),e("button",{staticClass:"flex items-center gap-2",on:{click:t.logout}},[e("span",[t._v("Logout")])]),t._v(" "),e("button",{staticClass:"px-9 py-3 bg-red-600 rounded hidden"},[t._v("Login")])],1),t._v(" "),t.load?e("div",{staticStyle:{height:"100vh"},attrs:{id:"map-wrap"}},[e("client-only",[e("l-map",{attrs:{zoom:15,center:[t.latitude,t.longitude]}},[e("l-tile-layer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),t._v(" "),e("l-marker",{attrs:{"lat-lng":[t.latitude,t.longitude]}})],1)],1)],1):e("div",[e("Loader",{attrs:{load:t.load}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Loader:n(296).default})},304:function(t,e,n){"use strict";n.r(e);var o=n(298),l=n(297),r={components:{GeoMap:o.default},data:function(){return{client:Object(l.a)("https://swocaqwllmwkocyhqnhm.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI"),latitude:null,longitude:null}},mounted:function(){this.getLatestLocation()},created:function(){},methods:{getLatestLocation:function(){var t=this;this.client.from("locations").select("latitude, longitude").order("created_at",{ascending:!1}).limit(1).then((function(e){var n,o,data=e.data,l=null===(n=data[0])||void 0===n?void 0:n.latitude,r=null===(o=data[0])||void 0===o?void 0:o.longitude;t.latitude=l||-.1682460856470205,t.longitude=r||35.966044867768524,console.log(data),console.log("Latest location:",l,r)})).catch((function(t){console.error("Error getting latest location:",t)}))}}},c=n(76),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("GeoMap",{attrs:{latitude:t.latitude,longitude:t.longitude}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GeoMap:n(298).default})}}]);