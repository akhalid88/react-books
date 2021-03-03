(this.webpackJsonpbooks=this.webpackJsonpbooks||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(24),a=c.n(s),i=(c(31),c(25)),r=c(2),l=(c(32),c(33),c(0));var o=function(){return Object(l.jsx)("nav",{className:"navbar",role:"navigation","aria-label":"main navigation",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)("a",{className:"navbar-item",href:"/",children:"Books"}),Object(l.jsx)("a",{className:"navbar-item",href:"/search",children:"Search"}),Object(l.jsx)("a",{className:"navbar-item",href:"/saved",children:"Saved"})]})})};c(35);var j=function(){return Object(l.jsx)("section",{className:"hero is-medium is-link",children:Object(l.jsxs)("div",{className:"hero-body",children:[Object(l.jsx)("p",{className:"headerTitle",children:"React Google Books Search"}),Object(l.jsx)("p",{className:"headerSub",children:"Search for and save books of interest"})]})})},d=c(11);c(36),c(37);var u=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"card cardHold",children:Object(l.jsx)("div",{className:"card-content",children:Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)("article",{className:"media",children:[Object(l.jsx)("figure",{className:"media-left",children:Object(l.jsx)("p",{className:"image",children:Object(l.jsx)("img",{className:"cardImg",src:e.image,alt:e.name})})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"titleSaved",children:e.title}),Object(l.jsx)("p",{className:"authorSaved",children:e.authors}),Object(l.jsx)("p",{className:"subtitle desc",children:e.description})]}),Object(l.jsxs)("div",{className:"resultsBtns",children:[Object(l.jsx)("p",{className:"control",children:Object(l.jsx)("a",{href:e.link,children:Object(l.jsx)("button",{id:"viewBtn",className:"button is-dark",children:Object(l.jsx)("i",{className:"fas fa-external-link-alt"})})})}),Object(l.jsx)("p",{className:"control",children:Object(l.jsx)("button",{id:"viewBtn",className:"button is-link",onClick:function(){return e.handleSaveButton(e.id)},children:Object(l.jsx)("i",{className:"fas fa-save"})})})]})]})})})})})})};c(38);var h=function(e){return Object(l.jsx)("section",{children:Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("div",{className:"card-content searchTitle",children:["Book Search",Object(l.jsxs)("form",{className:"content",children:[Object(l.jsx)("label",{className:"label bookLabel",children:"Book:"}),Object(l.jsx)("input",{className:"input is-link",value:e.searchTerm,ref:e.inputRef,type:"text",placeholder:"Search a book"}),Object(l.jsx)("button",{className:"button is-link searchBtn",onClick:e.handleInputSearch,type:"click",children:"Search"})]})]})})})},b=c(9),m=c.n(b),O={getBooks:function(){return m.a.get("/api/books")},getBook:function(e){return m.a.get("/api/books/"+e)},deleteBook:function(e){return m.a.delete("/api/books/"+e)},saveBook:function(e){return m.a.post("/api/books",e)},searchBookName:function(e){return new Promise((function(t,c){m.a.get("https://www.googleapis.com/books/v1/volumes?q="+e).then((function(e){t(e.data.items.slice(0,3))})).catch((function(e){return c(e)}))}))}};var f=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),i=Object(d.a)(a,2),r=i[0],o=i[1],j=Object(n.useRef)(""),b=function(e){var t=r.filter((function(t){return t.id===e}));console.log(t),O.saveBook({title:t[0].volumeInfo.title,authors:t[0].volumeInfo.authors.toString(),description:t[0].volumeInfo.description,image:t[0].volumeInfo.imageLinks.thumbnail,link:t[0].volumeInfo.infoLink}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),o([])};return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"container is-widescreen",children:Object(l.jsxs)("div",{className:"notification",children:[Object(l.jsx)(h,{inputRef:j,value:c,handleInputSearch:function(e){e.preventDefault();var t=j.current.value.split(" ").join("+");s(t),j.current.value="",function(e){O.searchBookName(e).then((function(e){o(e)})).catch((function(e){return console.log(e)}))}(t)}}),Object(l.jsx)("h1",{className:"resultsSearch",children:"Results:"}),r.map((function(e){return Object(l.jsx)(u,{id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.searchInfo.textSnippet,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.infoLink,handleSaveButton:b},e.id)}))]})})})};var x=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(f,{})})};c(57);var v=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"card cardHold",children:Object(l.jsx)("div",{className:"card-content",children:Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)("article",{className:"media",children:[Object(l.jsx)("figure",{className:"media-left",children:Object(l.jsx)("p",{className:"image",children:Object(l.jsx)("img",{className:"cardImg",src:e.image,alt:e.name})})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"titleSaved",children:e.title}),Object(l.jsx)("p",{className:"authorSaved",children:e.authors}),Object(l.jsx)("p",{className:"subtitle desc",children:e.description})]}),Object(l.jsxs)("div",{className:"resultsBtns",children:[Object(l.jsx)("p",{className:"control",children:Object(l.jsx)("a",{href:e.link,children:Object(l.jsx)("button",{id:"viewBtn",className:"button is-dark",children:Object(l.jsx)("i",{className:"fas fa-external-link-alt"})})})}),Object(l.jsx)("p",{className:"control",children:Object(l.jsx)("button",{id:"viewBtn",className:"button is-link",onClick:function(){return e.handleDeleteButton(e.id)},children:Object(l.jsx)("i",{className:"fas fa-trash-alt"})})})]})]})})})})})})};c(58);var N=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){a()}),[]);var a=function(){O.getBooks().then((function(e){s(e.data)}))},i=function(e){O.deleteBook(e).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),a()};return Object(l.jsx)("div",{className:"container is-widescreen",children:Object(l.jsxs)("div",{className:"notification",children:[Object(l.jsx)("h1",{className:"resultsSearch",children:"Saved Books:"}),c.map((function(e){return Object(l.jsx)(v,{id:e._id,title:e.title,authors:e.authors,description:e.description,image:e.image,link:e.link,handleDeleteButton:i},e._id)}))]})})};var p=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(N,{})})};var k=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{}),Object(l.jsx)(j,{}),Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{exact:!0,path:"/",component:x}),Object(l.jsx)(r.a,{exact:!0,path:"/search",component:x}),Object(l.jsx)(r.a,{exact:!0,path:"/saved",component:p})]})]})})};a.a.render(Object(l.jsx)(k,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.ce28b85c.chunk.js.map