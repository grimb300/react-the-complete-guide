(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{45:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},46:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},47:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},48:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},49:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},53:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(8),o=c(0),a=c(37),m=c(45),r=c.n(m),j=c(15),i=c(46),d=c.n(i),l=c(1),u=function(e){return Object(l.jsx)("li",{className:d.a.item,children:Object(l.jsx)("p",{children:e.text})})},b=c(47),x=c.n(b),O=function(e){return Object(l.jsx)("ul",{className:x.a.comments,children:e.comments.map((function(e){return Object(l.jsx)(u,{text:e.text},e.id)}))})},h=c(35),f=c(36),p=c(48),_=c.n(p),N=function(e){var t=Object(o.useRef)(),c=Object(h.a)(f.a),n=c.sendRequest,s=c.status,a=c.error,m=e.quoteId,r=e.onAddedComment;Object(o.useEffect)((function(){"completed"!==s||a||r()}),[s,a,r]);var i=function(e){e.preventDefault();var c=t.current.value;n({commentData:{text:c},quoteId:m})};return Object(l.jsxs)("form",{className:_.a.form,onSubmit:i,children:["pending"===s&&Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(j.a,{})}),Object(l.jsxs)("div",{className:_.a.control,onSubmit:i,children:[Object(l.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(l.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(l.jsx)("div",{className:_.a.actions,children:Object(l.jsx)("button",{className:"btn",children:"Add Comment"})})]})},v=function(){var e=Object(o.useState)(!1),t=Object(a.a)(e,2),c=t[0],s=t[1],m=Object(n.j)(),i=m.quoteId,d=Object(h.a)(f.c),u=d.sendRequest,b=d.status,x=d.data;Object(o.useEffect)((function(){u(i)}),[u,i]);var p,_=Object(o.useCallback)((function(){u(i)}),[u,i]);return"pending"===b&&(p=Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(j.a,{comments:x})})),"completed"===b&&x&&x.length>0&&(p=Object(l.jsx)(O,{comments:x})),"completed"!==b||x&&0!==x.length||(p=Object(l.jsx)("p",{className:"centered",children:"No comments, yet!"})),console.log({status:b,loadedComments:x}),Object(l.jsxs)("section",{className:r.a.comments,children:[Object(l.jsx)("h2",{children:"User Comments"}),!c&&Object(l.jsx)("button",{className:"btn",onClick:function(){s(!0)},children:"Add a Comment"}),c&&Object(l.jsx)(N,{quoteId:m.quoteId,onAddedComment:_}),p]})},C=c(49),g=c.n(C),q=function(e){return Object(l.jsxs)("figure",{className:g.a.quote,children:[Object(l.jsx)("p",{children:e.text}),Object(l.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(n.k)(),t=Object(n.j)().quoteId,c=Object(h.a)(f.e,!0),a=c.sendRequest,m=c.status,r=c.data,i=c.error;return Object(o.useEffect)((function(){a(t)}),[a,t]),"pending"===m?Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(j.a,{})}):i?Object(l.jsx)("p",{className:"centered focused",children:i}):r.text?Object(l.jsxs)(o.Fragment,{children:[Object(l.jsx)(q,{text:r.text,author:r.author}),Object(l.jsx)(n.c,{path:e.path,exact:!0,children:Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(s.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),Object(l.jsx)(n.c,{path:"".concat(e.path,"/comments"),children:Object(l.jsx)(v,{})})]}):Object(l.jsx)("p",{children:"Quote not found."})}}}]);
//# sourceMappingURL=4.bf95d9c1.chunk.js.map