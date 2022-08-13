"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[7967],{42363:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return l}});var a=t(87462),r=t(63366),s=(t(15007),t(64983)),o=t(91515),i=["components"],m={},p={_frontmatter:m},u=o.Z;function l(e){var n=e.components,t=(0,r.Z)(e,i);return(0,s.mdx)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",null,"External module: user"),(0,s.mdx)("p",null,"API to request user-specific information such as IMS organization, IMS profile, access token,\ntenant, etc. It also  provides solutions with other capabilities such as notifying the shell that\nthe session has expired and configuring a logout URL to expire custom sessions."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},(0,s.mdx)("em",{parentName:"strong"},"Import:"))),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-typescript"},"import user from '@adobe/exc-app/user';\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},(0,s.mdx)("em",{parentName:"strong"},"Default export:"))),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"../interfaces/user.userapi.md#interface-userapi"},"UserApi")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},(0,s.mdx)("em",{parentName:"strong"},"Usage:"))),(0,s.mdx)("p",null,"Below is an example of how to get various attributes associated to the user:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-typescript"},"import user from '@adobe/exc-app/user';\n\nconst [org, name, orgs, token, profile, locale, subOrg, tenant, languages] = await Promise.all([\n  user.get('imsOrg'),\n  user.get('imsOrgName'),\n  user.get('imsOrgs'),\n  user.get('imsToken'),\n  user.get('imsProfile'),\n  user.get('locale'),\n  user.get('subOrg'),\n  user.get('tenant'),\n  user.get('preferredLanguages')\n]);\n")),(0,s.mdx)("h3",{id:"receiving-updates"},"Receiving updates"),(0,s.mdx)("p",null,"You can also listen for updates on the requested data by listening to specific change events."),(0,s.mdx)("p",null,"These change events are emitted from the api that the data is requested from. For example, if a\nuser calls ",(0,s.mdx)("inlineCode",{parentName:"p"},"await user.get('locale');")," they must listen for the change event on\n",(0,s.mdx)("inlineCode",{parentName:"p"},"user.on('change:locale')"),". If a user calls ",(0,s.mdx)("inlineCode",{parentName:"p"},"await user.get('imsOrg')")," they must listen for the\nchange event on ",(0,s.mdx)("inlineCode",{parentName:"p"},"user.on('change:imsOrg')"),". Here is a more detailed example of how the promise\napi and change events can be used to keep track of specific values from the config:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-typescript"},"import user from '@adobe/exc-app/user';\n\nconstructor() {\n  this.state = {org: null, shell: {}};\n\n  user.on('change:imsOrg', (org) => {\n    this.setState({org});\n  });\n}\n\nasync componentDidMount() {\n  const org = await user.get('imsOrg');\n  this.setState({org});\n}\n")),(0,s.mdx)("h2",{id:"index"},"Index"),(0,s.mdx)("h3",{id:"interfaces"},"Interfaces"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"../interfaces/user.userapi.md"},"UserApi")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"../interfaces/user.userinfo.md"},"UserInfo"))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-exc-app-modules-user-md-8365e088109875044e4e.js.map