"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[3330],{3580:function(e,a,p){p.r(a),p.d(a,{_frontmatter:function(){return s},default:function(){return b}});var d=p(87462),t=p(63366),r=(p(15007),p(64983)),o=p(91515),i=["components"],s={},l={_frontmatter:s},n=o.Z;function b(e){var a=e.components,p=(0,t.Z)(e,i);return(0,r.mdx)(n,(0,d.Z)({},l,p,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",null,"Setup AEM to use the worker"),(0,r.mdx)("p",null,"Go to your ",(0,r.mdx)("strong",{parentName:"p"},"AEM Cloud")," instance and open ",(0,r.mdx)("strong",{parentName:"p"},"Tools -> Assets -> Processing Profiles")," and then create a new processing profile, e.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},"My Worker test profile"),".\nOn the ",(0,r.mdx)("strong",{parentName:"p"},"Custom")," tab, configure your renditions to use your worker, as shown below."),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"21.875%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/cf960edddb585dfec49b32bffcbbc274/5530d/processing-profile-1800.webp 320w","/adobe-developer-app-builder/static/cf960edddb585dfec49b32bffcbbc274/0c8fb/processing-profile-1800.webp 640w","/adobe-developer-app-builder/static/cf960edddb585dfec49b32bffcbbc274/94b1e/processing-profile-1800.webp 1280w","/adobe-developer-app-builder/static/cf960edddb585dfec49b32bffcbbc274/0f190/processing-profile-1800.webp 1800w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/cf960edddb585dfec49b32bffcbbc274/dd4a7/processing-profile-1800.png 320w","/adobe-developer-app-builder/static/cf960edddb585dfec49b32bffcbbc274/0f09e/processing-profile-1800.png 640w","/adobe-developer-app-builder/static/cf960edddb585dfec49b32bffcbbc274/bbbf7/processing-profile-1800.png 1280w","/adobe-developer-app-builder/static/cf960edddb585dfec49b32bffcbbc274/28bdc/processing-profile-1800.png 1800w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-developer-app-builder/static/cf960edddb585dfec49b32bffcbbc274/bbbf7/processing-profile-1800.png",alt:"Config of custom renditions",title:"Config of custom renditions",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",null,"I configured 3 renditions using following imgix configuration params (we don't need to escape JSON if it's used in AEM)"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Crop an image to 300x300 px around faces if detected, or around busy sections of the image (entropy)."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "fit": "crop",\n  "crop": "faces,entropy",\n  "w": 300,\n  "h": 300\n}\n'))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Same as the previous, but additionally apply an ellipse mask around the cropped area."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "fit": "crop",\n  "crop": "faces,entropy",\n  "w": 300,\n  "h": 300,\n  "fm": "png",\n  "mask": "ellipse"\n}\n'))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"The last one is similar to the first, but this time we add a text watermark to the image."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "h": 300,\n  "w": 300,\n  "fit": "crop",\n  "crop": "faces,entropy",\n  "mark": "https://assets.imgix.net/~text?w=200&txt-color=fff&txt=Hello+world&txt-size=16&txt-lead=0&txt-pad=15&bg=80002228&txt-font=Avenir-Heavy"\n}\n')))),(0,r.mdx)("p",null,"As the last step, you need to apply the profile to DAM folder."),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.1875%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/abd35ababaf38ada3b37739e2d6dbdf2/5530d/apply-profile-to-folder.webp 320w","/adobe-developer-app-builder/static/abd35ababaf38ada3b37739e2d6dbdf2/0c8fb/apply-profile-to-folder.webp 640w","/adobe-developer-app-builder/static/abd35ababaf38ada3b37739e2d6dbdf2/94b1e/apply-profile-to-folder.webp 1280w","/adobe-developer-app-builder/static/abd35ababaf38ada3b37739e2d6dbdf2/0b34d/apply-profile-to-folder.webp 1920w","/adobe-developer-app-builder/static/abd35ababaf38ada3b37739e2d6dbdf2/d5269/apply-profile-to-folder.webp 2560w","/adobe-developer-app-builder/static/abd35ababaf38ada3b37739e2d6dbdf2/19f78/apply-profile-to-folder.webp 2732w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/abd35ababaf38ada3b37739e2d6dbdf2/dd4a7/apply-profile-to-folder.png 320w","/adobe-developer-app-builder/static/abd35ababaf38ada3b37739e2d6dbdf2/0f09e/apply-profile-to-folder.png 640w","/adobe-developer-app-builder/static/abd35ababaf38ada3b37739e2d6dbdf2/bbbf7/apply-profile-to-folder.png 1280w","/adobe-developer-app-builder/static/abd35ababaf38ada3b37739e2d6dbdf2/ac7a9/apply-profile-to-folder.png 1920w","/adobe-developer-app-builder/static/abd35ababaf38ada3b37739e2d6dbdf2/c7a69/apply-profile-to-folder.png 2560w","/adobe-developer-app-builder/static/abd35ababaf38ada3b37739e2d6dbdf2/a6aea/apply-profile-to-folder.png 2732w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-developer-app-builder/static/abd35ababaf38ada3b37739e2d6dbdf2/bbbf7/apply-profile-to-folder.png",alt:"Apply Profile to Folder",title:"Apply Profile to Folder",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",null,"Now you can upload images to the folder and observe results on the asset details page."),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.99999999999999%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/1550412ef2fdd2fbdec2186409941067/5530d/worker-results.webp 320w","/adobe-developer-app-builder/static/1550412ef2fdd2fbdec2186409941067/0c8fb/worker-results.webp 640w","/adobe-developer-app-builder/static/1550412ef2fdd2fbdec2186409941067/94b1e/worker-results.webp 1280w","/adobe-developer-app-builder/static/1550412ef2fdd2fbdec2186409941067/0f190/worker-results.webp 1800w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/1550412ef2fdd2fbdec2186409941067/dd4a7/worker-results.png 320w","/adobe-developer-app-builder/static/1550412ef2fdd2fbdec2186409941067/0f09e/worker-results.png 640w","/adobe-developer-app-builder/static/1550412ef2fdd2fbdec2186409941067/bbbf7/worker-results.png 1280w","/adobe-developer-app-builder/static/1550412ef2fdd2fbdec2186409941067/28bdc/worker-results.png 1800w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-developer-app-builder/static/1550412ef2fdd2fbdec2186409941067/bbbf7/worker-results.png",alt:"Renditions list in Asset view",title:"Renditions list in Asset view",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")," "),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Photo by ",(0,r.mdx)("a",{parentName:"em",href:"https://unsplash.com/@linkedinsalesnavigator?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"LinkedIn Sales Navigator")," on ",(0,r.mdx)("a",{parentName:"em",href:"https://unsplash.com/s/photos/women-sitting?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Unsplash"))," "))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-custom-asset-compute-worker-lesson-5-md-7127b45eba33062d3e34.js.map