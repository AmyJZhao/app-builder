"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[3399],{3249:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return p}});var i=a(87462),o=a(63366),n=(a(15007),a(64983)),s=a(91515),r=["components"],l={},d={_frontmatter:l},u=s.Z;function p(e){var t=e.components,a=(0,o.Z)(e,r);return(0,n.mdx)(u,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",null,"Dealing with Application State"),(0,n.mdx)("p",null,"Application state could be a pre-defined variable of your action that is accessible across all invocations, or dynamic values or files uploaded by the web users when the app is running. App Builder provides the appropriate tools to handle each of these requirements."),(0,n.mdx)("h2",{id:"default-parameters"},"Default parameters"),(0,n.mdx)("p",null,"Sometimes you want to bind the same parameter values for all invocations or you just set default values of your action. In either case, you have two different options: setting params at the action level, or at the package level (so all actions in that package can inherit them). These params are set in the ",(0,n.mdx)("inlineCode",{parentName:"p"},"manifest.yaml")," file, as the following example."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-yaml"},"hello-world:\n  function: actions/hello/index.js\n  runtime: 'nodejs:12'\n  inputs:\n    name: Joe\n")),(0,n.mdx)("p",null,"In many cases, these variables are different depending on the build environment of the app, such as different tenant names in dev, stage, prod, etc. To make it work seamlessly with Git commits, you could store the real value of the variables in the ",(0,n.mdx)("inlineCode",{parentName:"p"},".env")," file (which is not committed to Git), and reference them in the ",(0,n.mdx)("inlineCode",{parentName:"p"},"manifest.yaml")," file."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"# in .env\nNAME=Joe\n")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-yaml"},"# in manifest.yaml\nhello-world:\n  function: actions/hello/index.js\n  runtime: 'nodejs:12'\n  inputs:\n    name: $NAME\n")),(0,n.mdx)("h3",{id:"considerations-about-security"},"Considerations about security"),(0,n.mdx)("p",null,"For authentication with Adobe APIs, you should leverage ",(0,n.mdx)("a",{parentName:"p",href:"security/index.md"},"App Builder Security Guideline")," using our supported SDKs. "),(0,n.mdx)("p",null,"For other 3rd party systems and APIs when provisioning actions with the secrets/passwords is a must, you can then use the default params as demonstrated above. In order to support this use case, all default params are automatically encrypted. They are decrypted just before the action code is executed. Thus, the only time you have access to the decrypted value is while executing the action code."),(0,n.mdx)("h2",{id:"state-and-files-persistence-at-runtime"},"State and files persistence at runtime"),(0,n.mdx)("p",null,"As part of App Builder, you will have out-of-the-box access to file storage and to a key-value store. These are particularly useful when you want to persist data dynamically in the individual action invocations."),(0,n.mdx)("p",null,"To provide zero-config state and file caching for App Builder, we have created the ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-files"},"Adobe I/O Files library")," and ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-state"},"Adobe I/O State library"),". The Adobe I/O State library is an npm module that provides a JavaScript abstraction on top of distributed/cloud DBs with a simple key-value store state persistence API; whereas the Adobe I/O Files library provides a JavaScript abstraction on top of cloud blob storages with a simple file-system like persistence API."),(0,n.mdx)("p",null,"The state library is meant for storing and accessing small values, while the files library should be used for storing bigger amounts of data."),(0,n.mdx)("p",null,"To learn more or to try them out, please visit the following GitHub repositories:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-lib-files"},"Adobe I/O File Storage library")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-lib-state"},"Adobe I/O Key/Value Storage library"))),(0,n.mdx)("p",null,"After reviewing each of the libraries, you may have noticed that the sample code only requires your Runtime namespace credentials in order to start accessing the cloud services behind the scenes. This is handled through the ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-tvm"},"Adobe I/O Token Vending Machine")," (TVM). TVM is a set of Adobe I/O Runtime actions exposed as an API that allows developers to trade their credentials for temporary and restricted tokens to external cloud services. Users authenticate to the TVM with their Adobe I/O Runtime (OpenWhisk) credentials and are only authorized to access their own resources."),(0,n.mdx)("p",null,"You can also opt out of using Runtime (OpenWhisk) and leverage your own cloud services (for example, Azure). Please see the sample code in either of the library GitHub repositories for more information."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-application-state-md-c1e635df4a9a67f37e73.js.map