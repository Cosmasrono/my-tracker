(window.webpackJsonp=window.webpackJsonp||[]).push([[13,8],{302:function(e,t,n){"use strict";n.r(t);n(44),n(20),n(108);var o={name:"SendMail",data:function(){return{subject:"",phone:"",loading:!1,success:"",name:"",invite_link:"",email:"",message:"",isSuccess:!1}},methods:{onSubmit:function(){var e=this,data={name:this.name,email:this.email,message:this.message,phone:this.phone,invite_link:this.invite_link,subject:this.subject};this.loading=!0,fetch("https://getform.io/f/9fa193df-4784-45aa-8f8c-8e8f6a70d22f",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)}).then((function(e){return e.json()})).then((function(data){e.isSuccess=!0,e.loading=!1,e.success="Your message has been sent. Thank you!",e.name="",e.email="",e.message="",e.phone="",e.invite_link="",e.subject="",setTimeout((function(){e.success="",e.$router.push("/Main")}),5e3)})).catch((function(t){console.log(t),e.loading=!1}))}}},l=n(76),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"flex flex-col justify-center items-center"},[t("div",{staticClass:"w-full max-w-xs"},[t("form",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",attrs:{"accept-charset":"UTF-8",method:"POST"},on:{submit:function(t){return t.preventDefault(),e.onSubmit()}}},[e.success?t("div",{staticClass:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",attrs:{role:"alert"}},[t("strong",{staticClass:"font-bold"},[e._v("Success!")]),e._v(" "),t("span",{staticClass:"block sm:inline"},[e._v(e._s(e.success))])]):e._e(),e._v(" "),t("div",{staticClass:"mb-4"},[t("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"username"}},[e._v("\n            Name\n          ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"username",type:"text",placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"mb-4"},[t("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"username"}},[e._v("\n            Phone\n          ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"username",type:"text",placeholder:"Phone"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"mb-4"},[t("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"username"}},[e._v("\n            Email\n          ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"username",type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"mb-4"},[t("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"username"}},[e._v("\n            Subject\n          ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.subject,expression:"subject"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"username",type:"text",placeholder:"Subject"},domProps:{value:e.subject},on:{input:function(t){t.target.composing||(e.subject=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"mb-4"},[t("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"username"}},[e._v("\n            Invite Link\n          ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.invite_link,expression:"invite_link"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"username",type:"text",placeholder:"Invite Link"},domProps:{value:e.invite_link},on:{input:function(t){t.target.composing||(e.invite_link=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"mb-4"},[t("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"username"}},[e._v("\n            Message\n          ")]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"username",type:"text",placeholder:"Message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"flex items-center justify-between"},[t("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",class:{"opacity-50 cursor-not-allowed":e.loading},attrs:{disabled:e.loading,type:"submit"}},[e._v("\n            "+e._s(e.loading?"Sending...":"Send")+"\n          ")])])])])])])}),[],!1,null,null,null);t.default=component.exports},324:function(e,t,n){"use strict";n.r(t);var o={component:{SendMail:n(302).default}},l=n(76),component=Object(l.a)(o,(function(){var e=this._self._c;return e("div",[e("SendMail")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SendMail:n(302).default})}}]);