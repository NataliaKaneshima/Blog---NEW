(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/uZM":function(e,t,n){e.exports={container:"layout-module--container--3BoYY",content:"layout-module--content--zUuRj"}},"4M6O":function(e,t,n){"use strict";n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b");var a=n("TqRt");t.__esModule=!0,t.insertScript=function(e,t,n){var a=window.document.createElement("script");return a.async=!0,a.src=e,a.id=t,n.appendChild(a),a},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var a;return function(){var o=this,i=arguments,r=function(){a=null,n||e.apply(o,i)},l=n&&!a;window.clearTimeout(a),a=setTimeout(r,t),l&&e.apply(o,i)}},t.isReactElement=i,t.shallowComparison=function(e,t){var n,a=new Set(Object.keys(e).concat(Object.keys(t)));return 0!==(n=[]).concat.apply(n,a).filter((function(n){return e[n]!==t[n]&&!i(e[n])})).length};var o=a(n("q1tI"));function i(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},A2Js:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"NEW"}}}}')},Bl7J:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),i=n("A2Js"),r=n("Wbzz"),l=n("aOmW"),s=n.n(l),u=function(){var e=i.data;return o.a.createElement("header",{className:s.a.header},o.a.createElement("h1",null,o.a.createElement(r.a,{className:s.a.title,to:"/"},e.site.siteMetadata.title)),o.a.createElement("nav",null,o.a.createElement("ul",{className:s.a.navList},o.a.createElement("li",null,o.a.createElement(r.a,{className:s.a.navItem,activeClassName:s.a.activeNavItem,to:"/"},"Teck Stack")),o.a.createElement("li",null,o.a.createElement(r.a,{className:s.a.navItem,activeClassName:s.a.activeNavItem,to:"/blog"},"Blog")),o.a.createElement("li",null,o.a.createElement(r.a,{className:s.a.navItem,activeClassName:s.a.activeNavItem,to:"/projetop"},"Projetos Pessoais")),o.a.createElement("li",null,o.a.createElement(r.a,{className:s.a.navItem,activeClassName:s.a.activeNavItem,to:"/about"},"Quem somos")),o.a.createElement("li",null,o.a.createElement(r.a,{className:s.a.navItem,activeClassName:s.a.activeNavItem,to:"/proble"},"Agradecimentos")))))},c=n("JFLM"),d=function(){var e=c.data;return o.a.createElement("footer",null,o.a.createElement("p",null,"Created by ",e.site.siteMetadata.author,", © 2020"))},m=(n("jh8G"),n("/uZM")),f=n.n(m);t.a=function(e){return o.a.createElement("div",{className:f.a.container},o.a.createElement("div",{className:f.a.content},o.a.createElement(u,null),e.children),o.a.createElement(d,null))}},JFLM:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":"Natalia Kaneshima, Rebeca Ito, Wellington Endo"}}}}')},ORnI:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var o=a(n("VUT9"));t.Disqus=o.default;var i=a(n("qASQ"));t.CommentCount=i.default;var r=o.default;t.default=r},VUT9:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var o=a(n("pVnL")),i=a(n("8OQS")),r=a(n("VbXa")),l=a(n("q1tI")),s=a(n("17x9")),u=n("4M6O"),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="newblog-online",t.config?n.config=t.config:n.config={identifier:t.identifier,url:t.url,title:t.title,language:t.language},n}(0,r.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&window.document&&this.shortname&&this.cleanInstance(),this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){if("undefined"!=typeof window&&window.document&&this.shortname){var e=this.config;window.disqus_config=function(){this.page.identifier=e.identifier,this.page.title=e.title,this.page.url=e.url,this.language=e.language},(0,u.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body)}},n.cleanInstance=function(){(0,u.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)},n.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return l.default.createElement("div",(0,o.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:75,columnNumber:7}}))},t}(l.default.Component);t.default=c,c.propTypes={config:s.default.shape({identifier:s.default.string,title:s.default.string,url:s.default.string,language:s.default.string}),identifier:s.default.string,title:s.default.string,url:s.default.string,language:s.default.string}},Wbzz:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),i=n("+ZDr"),r=n.n(i);n.d(t,"a",(function(){return r.a}));n("lw3w"),n("emEt").default.enqueue,o.a.createContext({})},aOmW:function(e,t,n){e.exports={header:"header-module--header--2NYIJ",navList:"header-module--nav-list--1ob9s",title:"header-module--title--2Ml1U",navItem:"header-module--nav-item---V6P3",activeNavItem:"header-module--active-nav-item--2MbjT"}},ec94:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"title":"Domínio","date":"2020-06-13"},"fields":{"slug":"dominio"}}},{"node":{"frontmatter":{"title":"Armazenando na nuvem","date":"2020-06-13"},"fields":{"slug":"Armazenamentonuvem"}}},{"node":{"frontmatter":{"title":"StacicGen","date":"2020-06-13"},"fields":{"slug":"gatsby"}}}]}}}')},jh8G:function(e,t,n){},lw3w:function(e,t,n){var a;e.exports=(a=n("rzlk"))&&a.default||a},qASQ:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var o=a(n("pVnL")),i=a(n("8OQS")),r=a(n("VbXa")),l=a(n("q1tI")),s=a(n("17x9")),u=n("4M6O"),c=(0,u.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="newblog-online",n}(0,r.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?c():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,a=(0,i.default)(e,["config","placeholder"]);return l.default.createElement("span",(0,o.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},a,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49,columnNumber:7}}),n)},t}(l.default.Component);t.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:s.default.shape({identifier:s.default.string,title:s.default.string,url:s.default.string}),placeholder:s.default.string}},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var a=n("q1tI"),o=n.n(a),i=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}},vx99:function(e,t,n){"use strict";n.r(t);var a=n("ec94"),o=n("q1tI"),i=n.n(o),r=n("Wbzz"),l=n("Bl7J"),s=(n("jh8G"),n("ORnI"));t.default=function(e){var t=a.data;console.log(e);return i.a.createElement(l.a,null,i.a.createElement("h2",null,"Informativo"),i.a.createElement("p",null,i.a.createElement("a",{href:"https://github.com/NataliaKaneshima/Blog---NEW",target:"_blank",rel:"noopener noreferrer"},"Repositório do GitHub")),i.a.createElement("ol",null,t.allMarkdownRemark.edges.map((function(e){return i.a.createElement("li",null,i.a.createElement(r.a,{to:"/blog/"+e.node.fields.slug},i.a.createElement("h3",null,e.node.frontmatter.title),i.a.createElement("p",null,e.node.frontmatter.data)))}))),i.a.createElement(s.Disqus,{config:{}}))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-c112abe9d43fbbf739e6.js.map