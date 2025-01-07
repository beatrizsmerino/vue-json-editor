import{n as r,r as a}from"./index-PYb2ljIE.js";const i={};var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"welcome-item"},[t("span",{staticClass:"welcome-item__icon"},[e._t("icon")],2),t("div",{staticClass:"welcome-item__details"},[t("h3",{staticClass:"welcome-item__title"},[e._t("heading")],2),e._t("default")],2)])},c=[],u=r(i,l,c,!1,null,"ba2722d5");const _=u.exports,p={__name:"TheWelcome",setup(n){return{__sfc:!0,data:a([{title:"Documentation",icon:"documentation",text:`
				Vue’s
				<a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
				provides you with all information you need to get started.
			`},{title:"Tooling",icon:"tooling",text:`
				This project is served and bundled with
				<a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
				recommended IDE setup is
				<a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
				<a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
				you need to test your components and web pages, check out
				<a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
				<a href="https://on.cypress.io/component" target="_blank" rel="noopener"
				>Cypress Component Testing</a
				>.
				<br />
				More instructions are available in <code>README.md</code>.
			`},{title:"Ecosystem",icon:"ecosystem",text:`
				Get official tools and libraries for your project:
				<a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
				<a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
				<a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
				<a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
				you need more resources, we suggest paying
				<a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
				a visit.
			`},{title:"Community",icon:"community",text:`
				Got stuck? Ask your question on
				<a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
				Discord server, or
				<a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
				>StackOverflow</a
				>. You should also subscribe to
				<a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
				the official
				<a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
				twitter account for latest news in the Vue world.
			`},{title:"Support Vue",icon:"support",text:`
				As an independent project, Vue relies on community backing for its sustainability. You can help
				us by
				<a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
			`}]),WelcomeItem:_}}};var f=function(){var e=this,t=e._self._c,s=e._self._setupProxy;return t("div",{staticClass:"the-welcome"},e._l(s.data,function(o){return t(s.WelcomeItem,{key:o.icon,scopedSlots:e._u([{key:"icon",fn:function(){return[t("UIIcon",{attrs:{name:o.icon,"aria-label":o.title,title:o.title}})]},proxy:!0},{key:"heading",fn:function(){return[e._v(" "+e._s(o.title)+" ")]},proxy:!0}],null,!0)},[t("p",{domProps:{innerHTML:e._s(o.text)}})])}),1)},m=[],d=r(p,f,m,!1,null,"06d4ea34");const h=d.exports,v={name:"HomeView",components:{TheWelcome:h}};var g=function(){var e=this,t=e._self._c;return t("TheWelcome")},b=[],k=r(v,g,b,!1,null,"c8c3635f");const w=k.exports;export{w as default};
