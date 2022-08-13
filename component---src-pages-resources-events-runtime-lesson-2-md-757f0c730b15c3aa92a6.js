"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[4702],{86288:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return o},default:function(){return s}});var i=t(87462),d=t(63366),n=(t(15007),t(64983)),r=t(91515),p=["components"],o={},c={_frontmatter:o},b=r.Z;function s(e){var a=e.components,t=(0,d.Z)(e,p);return(0,n.mdx)(b,(0,i.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("h1",null,"Lesson 2: Verify the result"),(0,n.mdx)("h2",{id:"deep-dive-in"},"Deep dive in"),(0,n.mdx)("p",null,"Now let's take a deeper look into these actions:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"bound_package")," : default param package created as binding of the shared package deployed in adobe namespace and having the validate action inside itself. Now, this bound_package will also have the validate_action residing in it due to binding."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"acp")," - package created which will keep the new sync_event_handler sequence"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"sync_Event_handler_7Z5KH5vv6X")," - the new event handler unique to this registration with webhook url"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"3rd_party_custom_events_3C9419175E9D393C0A495E39@AdobeOrg_2a0237a4-f0d3-45e9-8179-10ab21ef929c_eventrt_7Z5KH5vv6X")," - the user sequence created taking the validate action as first action and user runtime action as second action. Created with the same unique identifier suffixed at the end of its name to bind this user sequence with the event registration in 1:1 fashion.")),(0,n.mdx)("h2",{id:"tracing-actions-with-activation-ids"},"Tracing Actions with Activation Ids"),(0,n.mdx)("p",null,"Debug Tracing is a pretty important tool on Developer Console for users who want to be informed whether their runtime action invocation is successful or not or what it responds.\nAfter setting up a runtime action as webhook, upon its successful invocation, you can see custom response returned from your own runtime action in the Debug Tracing webhook response section as below.\n",(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.25%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/c06d1d5b1caceda8414b1ae60bfa15de/5530d/debug-tracing-1.webp 320w","/adobe-developer-app-builder/static/c06d1d5b1caceda8414b1ae60bfa15de/0c8fb/debug-tracing-1.webp 640w","/adobe-developer-app-builder/static/c06d1d5b1caceda8414b1ae60bfa15de/94b1e/debug-tracing-1.webp 1280w","/adobe-developer-app-builder/static/c06d1d5b1caceda8414b1ae60bfa15de/ff8b5/debug-tracing-1.webp 1494w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/c06d1d5b1caceda8414b1ae60bfa15de/dd4a7/debug-tracing-1.png 320w","/adobe-developer-app-builder/static/c06d1d5b1caceda8414b1ae60bfa15de/0f09e/debug-tracing-1.png 640w","/adobe-developer-app-builder/static/c06d1d5b1caceda8414b1ae60bfa15de/bbbf7/debug-tracing-1.png 1280w","/adobe-developer-app-builder/static/c06d1d5b1caceda8414b1ae60bfa15de/60b6f/debug-tracing-1.png 1494w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-developer-app-builder/static/c06d1d5b1caceda8414b1ae60bfa15de/bbbf7/debug-tracing-1.png",alt:"debug-1",title:"debug-1",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null," However, in case of any failed invocation to your webhook, you will get an error response body with an activation id for the same. This helps users to debug their actions as below"),(0,n.mdx)("p",null,"This activation id you can use in the aio cli to trace the actual error occurred in your invocation by doing aio rt activation logs <failed_activation_id>"),(0,n.mdx)("p",null,"You may now get activation ids for two types of failed activations -"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Signature Validator Action"),(0,n.mdx)("li",{parentName:"ul"},"Your Runtime Action"),(0,n.mdx)("li",{parentName:"ul"},"In case of failure in the signature verification step, this is how you will get the error response and the failed activation id for the same.")),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.375%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/3a23f969200cb4af9e2aadbc36a30017/5530d/debug-tracing-2.webp 320w","/adobe-developer-app-builder/static/3a23f969200cb4af9e2aadbc36a30017/0c8fb/debug-tracing-2.webp 640w","/adobe-developer-app-builder/static/3a23f969200cb4af9e2aadbc36a30017/94b1e/debug-tracing-2.webp 1280w","/adobe-developer-app-builder/static/3a23f969200cb4af9e2aadbc36a30017/13d4d/debug-tracing-2.webp 1462w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/3a23f969200cb4af9e2aadbc36a30017/dd4a7/debug-tracing-2.png 320w","/adobe-developer-app-builder/static/3a23f969200cb4af9e2aadbc36a30017/0f09e/debug-tracing-2.png 640w","/adobe-developer-app-builder/static/3a23f969200cb4af9e2aadbc36a30017/bbbf7/debug-tracing-2.png 1280w","/adobe-developer-app-builder/static/3a23f969200cb4af9e2aadbc36a30017/4ab23/debug-tracing-2.png 1462w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-developer-app-builder/static/3a23f969200cb4af9e2aadbc36a30017/bbbf7/debug-tracing-2.png",alt:"debug-2",title:"debug-2",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"For failed invocation to your runtime action, you will get an error response with the failed activation id for the same like below"),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.75%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/62ff8fc1395d8825c6ec14f900b10e86/5530d/debug-tracing-3.webp 320w","/adobe-developer-app-builder/static/62ff8fc1395d8825c6ec14f900b10e86/0c8fb/debug-tracing-3.webp 640w","/adobe-developer-app-builder/static/62ff8fc1395d8825c6ec14f900b10e86/94b1e/debug-tracing-3.webp 1280w","/adobe-developer-app-builder/static/62ff8fc1395d8825c6ec14f900b10e86/9039b/debug-tracing-3.webp 1448w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/62ff8fc1395d8825c6ec14f900b10e86/dd4a7/debug-tracing-3.png 320w","/adobe-developer-app-builder/static/62ff8fc1395d8825c6ec14f900b10e86/0f09e/debug-tracing-3.png 640w","/adobe-developer-app-builder/static/62ff8fc1395d8825c6ec14f900b10e86/bbbf7/debug-tracing-3.png 1280w","/adobe-developer-app-builder/static/62ff8fc1395d8825c6ec14f900b10e86/e7c3c/debug-tracing-3.png 1448w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-developer-app-builder/static/62ff8fc1395d8825c6ec14f900b10e86/bbbf7/debug-tracing-3.png",alt:"debug-3",title:"debug-3",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-events-runtime-lesson-2-md-757f0c730b15c3aa92a6.js.map