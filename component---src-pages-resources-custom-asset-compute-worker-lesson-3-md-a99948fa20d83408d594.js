"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[5026],{46213:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return c}});var a=t(87462),o=t(63366),i=(t(15007),t(64983)),r=t(91515),s=["components"],l={},d={_frontmatter:l},m=r.Z;function c(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.mdx)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",null,"Implement the worker"),(0,i.mdx)("p",null,"Create a new application using AIO CLI"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"$> aio app init my-custom-worker\n")),(0,i.mdx)("p",null,"Application initialization will ask you a couple of questions:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"To select your Adobe Organization, followed by the console project selection (pick the one you created in previous steps) and finally choose a project workspace where you added all the required services."),(0,i.mdx)("li",{parentName:"ol"},"Then, to pick the components of the app. Select only ",(0,i.mdx)("strong",{parentName:"li"},"Actions: Deploy Runtime action"),"."),(0,i.mdx)("li",{parentName:"ol"},"On the type of action, choose only: ",(0,i.mdx)("strong",{parentName:"li"},"Adobe Asset Compute worker"),"."),(0,i.mdx)("li",{parentName:"ol"},"At last step, you need to provide the name of the worker and wait for the ",(0,i.mdx)("inlineCode",{parentName:"li"},"npm")," to finish installing all the dependencies.")),(0,i.mdx)("p",null,"Once it's done, edit ",(0,i.mdx)("inlineCode",{parentName:"p"},".env")," file and add the following lines. These are the environment variables the AIO CLI uses. In a\nproduction deployment, you can set them directly on your CI/CD pipelines as environment variables."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"## A path to the private.key you obtained from Adobe Console\nASSET_COMPUTE_PRIVATE_KEY_FILE_PATH=/path/to/the/private.key\n\n## Azure blob storage container you created to simulate AEM binaries cloud storage\nAZURE_STORAGE_ACCOUNT=your-storage-account\nAZURE_STORAGE_KEY=your-storage-key\nAZURE_STORAGE_CONTAINER_NAME=source\n\n# Azure blob storage container used by the imgIX as assets source\nIMGIX_STORAGE_ACCOUNT=your-storage-account\nIMGIX_STORAGE_KEY=your-storage-key\nIMGIX_STORAGE_CONTAINER_NAME=imgix\n\n# A security token you obtained when setting up imgIX source\nIMGIX_SECURE_TOKEN=imgx-token\n# A imgix domain you defined when setting up imgIX source\nIMGIX_DOMAIN=your-subdomain.imgix.net\n")),(0,i.mdx)("p",null,"Edit ",(0,i.mdx)("inlineCode",{parentName:"p"},"ext.config.yaml")," file inside the ",(0,i.mdx)("inlineCode",{parentName:"p"},"src/dx-asset-compute-worker-1/")," folder and add ",(0,i.mdx)("inlineCode",{parentName:"p"},"inputs")," object, as shown below. This file describes IO Runtime action to be deployed.\nAnd ",(0,i.mdx)("inlineCode",{parentName:"p"},"input")," param sets the default parameters with values referenced to our environment variables. Those params are\navailable in action JS as ",(0,i.mdx)("inlineCode",{parentName:"p"},"param")," object."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"operations:\n  workerProcess:\n    - type: action\n      impl: dx-asset-compute-worker-1/worker\nhooks:\n  post-app-run: adobe-asset-compute devtool\n  test: adobe-asset-compute test-worker\nactions: actions\nruntimeManifest:\n  packages:\n    dx-asset-compute-worker-1:\n      license: Apache-2.0\n      actions:\n        czeczek-worker:\n          function: actions/worker/index.js\n          web: 'yes'\n          runtime: 'nodejs:14'\n          limits:\n            concurrency: 10\n          inputs:\n              imgixStorageAccount: $IMGIX_STORAGE_ACCOUNT\n              imgixStorageKey: $IMGIX_STORAGE_KEY\n              imgixStorageContainerName: $IMGIX_STORAGE_CONTAINER_NAME\n              imgixSecureToken: $IMGIX_SECURE_TOKEN\n              imgixDomain: $IMGIX_DOMAIN\n          annotations:\n            require-adobe-auth: true\n            final: true\n")),(0,i.mdx)("p",null,"We also need to add two dependencies to our project. These are the libraries we will use to simplify access to the Azure\nblob storage and to generated signed URL for imgIX."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"$> npm install @adobe/aio-lib-files imgix-core-js\n")),(0,i.mdx)("p",null,"Finally, edit the worker source code (located under ",(0,i.mdx)("inlineCode",{parentName:"p"},"src/dx-asset-compute-worker-1/actions/<worker-name>/index.js"),") and replace it\nwith the following code."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"'use strict';\n\nconst { worker } = require('@adobe/asset-compute-sdk');\n//Convinient library provided by adobe that abstract away managing files on cloud storages\nconst filesLib = require('@adobe/aio-lib-files');\nconst { downloadFile } = require('@adobe/httptransfer');\nconst ImgixClient = require('imgix-core-js');\n\nexports.main = worker(async (source, rendition, params) => {\n  //Initialize blob storage client used by imgix\n  //We're reading the parameters we defined in manifest.yml\n  const targetStorage = await filesLib.init({\n    azure: {\n      storageAccount: params.imgixStorageAccount,\n      storageAccessKey: params.imgixStorageKey,\n      containerName: params.imgixStorageContainerName,\n    },\n  });\n  //Copy source asset from the AEM binaries storage to the Azure blob storage for imgIX\n  // localSrc:true means, the first parameters points to the file in the local file system (asset-compute-sdk abstracts the source blob storage so it's visible as local file)\n  // Second arguments defines the path on the target blob storage. We use the same path just to simplify things\n  await targetStorage.copy(source.path, source.path, { localSrc: true });\n\n  //Initialize imgix client responsible for generation of signed URLs\n  //to our assets accessed via imgIX subdomain\n  //We're getting the config params we defined in manifest.yml\n  const client = new ImgixClient({\n    domain: params.imgixDomain,\n    secureURLToken: params.imgixSecureToken,\n  });\n\n  //Generate signed URL with the params send by AEM and sign it.\n  //All the parameters send by AEM are available under rendition.instructions object\n  const url = client.buildURL(source.path, JSON.parse(rendition.instructions.imgix));\n\n  //Finally, download a rendition from a given url and store in AEM azure blob storage so it will be visible in AEM as a rendition\n  await downloadFile(url, rendition.path);\n});\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-custom-asset-compute-worker-lesson-3-md-a99948fa20d83408d594.js.map