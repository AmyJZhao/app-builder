"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[1997],{44302:function(e,a,p){p.r(a),p.d(a,{_frontmatter:function(){return n},default:function(){return c}});var d=p(87462),t=p(63366),i=(p(15007),p(64983)),o=p(91515),r=["components"],n={},s={_frontmatter:n},l=o.Z;function c(e){var a=e.components,p=(0,t.Z)(e,r);return(0,i.mdx)(l,(0,d.Z)({},s,p,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",null,"Lesson 4: Integrate and use the custom worker in AEMaaCS"),(0,i.mdx)("p",null,"When the custom workers are done, you could deploy it onto I/O Runtime serverless platform to make it ready for integration in AEMaaCS. Execute the command ",(0,i.mdx)("inlineCode",{parentName:"p"},"aio app deploy"),", which will output all the endpoints of your custom workers in this format ",(0,i.mdx)("inlineCode",{parentName:"p"},"https://1234-projectA-workspaceB.adobeioruntime.net/api/v1/web/dx-asset-compute-worker-1/worker-name"),"."),(0,i.mdx)("p",null,"Next, in AEMaaCS, go to ",(0,i.mdx)("inlineCode",{parentName:"p"},"Tools -> Assets -> Processing Profiles")," to create a new processing profile. Give it a name, then under the Custom tab, configure the processing service to map the custom worker endpoints to corresponding renditions."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"72.8125%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/c21521c25ace03d9c2cdbd8a95048a69/5530d/processing-profile.webp 320w","/adobe-developer-app-builder/static/c21521c25ace03d9c2cdbd8a95048a69/0c8fb/processing-profile.webp 640w","/adobe-developer-app-builder/static/c21521c25ace03d9c2cdbd8a95048a69/94b1e/processing-profile.webp 1280w","/adobe-developer-app-builder/static/c21521c25ace03d9c2cdbd8a95048a69/0b34d/processing-profile.webp 1920w","/adobe-developer-app-builder/static/c21521c25ace03d9c2cdbd8a95048a69/9cead/processing-profile.webp 2512w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/c21521c25ace03d9c2cdbd8a95048a69/dd4a7/processing-profile.png 320w","/adobe-developer-app-builder/static/c21521c25ace03d9c2cdbd8a95048a69/0f09e/processing-profile.png 640w","/adobe-developer-app-builder/static/c21521c25ace03d9c2cdbd8a95048a69/bbbf7/processing-profile.png 1280w","/adobe-developer-app-builder/static/c21521c25ace03d9c2cdbd8a95048a69/ac7a9/processing-profile.png 1920w","/adobe-developer-app-builder/static/c21521c25ace03d9c2cdbd8a95048a69/a12ae/processing-profile.png 2512w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-developer-app-builder/static/c21521c25ace03d9c2cdbd8a95048a69/bbbf7/processing-profile.png",alt:"Processing Profile",title:"Processing Profile",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("p",null,"After saving the new profile, you need to apply it to a DAM folder."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"24.6875%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/ba60d975010f9aef0aa98ad288fd4582/5530d/apply-folder.webp 320w","/adobe-developer-app-builder/static/ba60d975010f9aef0aa98ad288fd4582/0c8fb/apply-folder.webp 640w","/adobe-developer-app-builder/static/ba60d975010f9aef0aa98ad288fd4582/94b1e/apply-folder.webp 1280w","/adobe-developer-app-builder/static/ba60d975010f9aef0aa98ad288fd4582/0b34d/apply-folder.webp 1920w","/adobe-developer-app-builder/static/ba60d975010f9aef0aa98ad288fd4582/b6e12/apply-folder.webp 2326w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/ba60d975010f9aef0aa98ad288fd4582/dd4a7/apply-folder.png 320w","/adobe-developer-app-builder/static/ba60d975010f9aef0aa98ad288fd4582/0f09e/apply-folder.png 640w","/adobe-developer-app-builder/static/ba60d975010f9aef0aa98ad288fd4582/bbbf7/apply-folder.png 1280w","/adobe-developer-app-builder/static/ba60d975010f9aef0aa98ad288fd4582/ac7a9/apply-folder.png 1920w","/adobe-developer-app-builder/static/ba60d975010f9aef0aa98ad288fd4582/083c9/apply-folder.png 2326w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-developer-app-builder/static/ba60d975010f9aef0aa98ad288fd4582/bbbf7/apply-folder.png",alt:"Apply folder",title:"Apply folder",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("p",null,'Finally, you can test your custom workers by uploading any image to the applied folder. It would take a few seconds for the image processing, then you can see the new renditions including the "cutout" generated by the custom worker.'),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"30%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/286ed5ff7ea2a81896138595a1acba4b/5530d/renditions.webp 320w","/adobe-developer-app-builder/static/286ed5ff7ea2a81896138595a1acba4b/0c8fb/renditions.webp 640w","/adobe-developer-app-builder/static/286ed5ff7ea2a81896138595a1acba4b/94b1e/renditions.webp 1280w","/adobe-developer-app-builder/static/286ed5ff7ea2a81896138595a1acba4b/ccce4/renditions.webp 1795w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/286ed5ff7ea2a81896138595a1acba4b/dd4a7/renditions.png 320w","/adobe-developer-app-builder/static/286ed5ff7ea2a81896138595a1acba4b/0f09e/renditions.png 640w","/adobe-developer-app-builder/static/286ed5ff7ea2a81896138595a1acba4b/bbbf7/renditions.png 1280w","/adobe-developer-app-builder/static/286ed5ff7ea2a81896138595a1acba4b/fb395/renditions.png 1795w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-developer-app-builder/static/286ed5ff7ea2a81896138595a1acba4b/bbbf7/renditions.png",alt:"Renditions",title:"Renditions",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("p",null,"Photo courtesy of ",(0,i.mdx)("a",{parentName:"p",href:"https://stock.adobe.com/contributor/144023/gudellaphoto"},"gudellaphoto")," on ",(0,i.mdx)("a",{parentName:"p",href:"https://stock.adobe.com/images/vik-iceland-may-08-2015-toyota-rav4-four-wheel-drive-suv-being-used-on-iceland-s-unpaved-roads-and-terrain/283907742"},"Adobe Stock"),"."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-asset-compute-worker-ps-api-lesson-4-md-04518271d9beab44dd21.js.map