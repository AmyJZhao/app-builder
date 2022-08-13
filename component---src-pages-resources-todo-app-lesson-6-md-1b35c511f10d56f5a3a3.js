"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[5758],{19138:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return s}});var n=a(87462),o=a(63366),i=(a(15007),a(64983)),d=a(91515),p=["components"],r={},l={_frontmatter:r},m=d.Z;function s(e){var t=e.components,a=(0,o.Z)(e,p);return(0,i.mdx)(m,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",null,"Lesson 5: Bringing the pieces together to build the App"),(0,i.mdx)("p",null,"In the previous lessons, we have setup:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"A Runtime action to perform CRUD operations for todo items."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"CreateTodoList")," React component to create a todo list. "),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Todo")," React component to display and update a todo item.      "),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"TodoList")," React component to display todo items.      ")),(0,i.mdx)("p",null,"In this lesson, we'll build the actual App to manage todo lists. We'll create the React component file under ",(0,i.mdx)("inlineCode",{parentName:"p"},"web-src/src/components/")," and simply name it ",(0,i.mdx)("inlineCode",{parentName:"p"},"App.js"),"."),(0,i.mdx)("p",null,"We'll start by importing our components: "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import { CreateTodoList } from './CreateTodoList';\nimport { TodoList } from './TodoList';\n")),(0,i.mdx)("h2",{id:"import-react-spectrum-components"},"Import React Spectrum components"),(0,i.mdx)("p",null,"This component will make use of several React Spectrum components:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://react-spectrum.adobe.com/react-spectrum/View.html"},"Provider")," the container of the React Spectrum application."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://react-spectrum.adobe.com/react-spectrum/theming.html"},"defaultTheme")," the default React Spectrum theme."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://react-spectrum.adobe.com/react-spectrum/ProgressCircle.html"},"ProgressCircle")," the loading indicator."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://react-spectrum.adobe.com/react-spectrum/View.html"},"View")," a generic container."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://react-spectrum.adobe.com/react-spectrum/Flex.html"},"Flex")," for the layout of the loading indicator."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://react-spectrum.adobe.com/react-spectrum/Grid.html"},"Grid")," for the layout of the todo lists."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://react-spectrum.adobe.com/react-spectrum/Grid.html#repeat"},"repeat")," a helper function for Grid.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import { Provider, defaultTheme, View, Flex, Grid, repeat, ProgressCircle } from '@adobe/react-spectrum';\n")),(0,i.mdx)("h2",{id:"component-property"},"Component property"),(0,i.mdx)("p",null,"The component will accept a single property, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ims")," information that we'll pass to the Runtime action for authentication. "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"function App({ ims }) {\n  // ...\n}\n")),(0,i.mdx)("h2",{id:"component-state-values"},"Component state values"),(0,i.mdx)("p",null,"On initialization, the App will display a loading indicator while fetching the todo lists.\nFor the loading indicator and the todo lists, we'll use the ",(0,i.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-state.html"},"State hook")," ",(0,i.mdx)("inlineCode",{parentName:"p"},"useState")," again.   "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const [isLoading, setIsLoading] = useState(true);\nconst [todoList, setTodoList] = useState([]);\n")),(0,i.mdx)("h2",{id:"action-function-callbacks"},"Action function callbacks"),(0,i.mdx)("p",null,"To communicate with the Runtime action, we'll create a simple utility function with 2 parameters:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The expected CRUD operation."),(0,i.mdx)("li",{parentName:"ul"},"The sent data e.g. todo list name or todo object. ")),(0,i.mdx)("p",null,"First make sure to import the ",(0,i.mdx)("inlineCode",{parentName:"p"},"config.json")," which contains the URL to your Runtime action."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import actions from '../config.json';\n")),(0,i.mdx)("p",null,"Then inside the ",(0,i.mdx)("inlineCode",{parentName:"p"},"App"),", we'll define the utility function with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ims")," information."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const action = async (operation, body = {}) => {\n  const res = await fetch(actions['todolist'], {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      'x-gw-ims-org-id': ims.org,\n      authorization: `Bearer ${ims.token}`\n    },\n    body: JSON.stringify({\n      operation,\n      ...body\n    })\n  });\n    \n  return await res.json();\n};\n")),(0,i.mdx)("p",null,"Finally, we'll use the utility function inside callback functions that we're going to pass as prop to the components we have built in the previous lessons."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const onCreateTodoList = async (name) => {\n  if (!todoList.find(({ name: todoListName }) => name === todoListName)) {\n    setTodoList([{ name, todos: [] }, ...todoList]);\n    \n    console.log(await action('create', { name }));\n  }\n};\n\nconst onDeleteTodoList = async (name) => {\n  setTodoList(todoList.filter(({ name: toDeleteName }) => name !== toDeleteName));\n    \n  console.log(await action('delete', { name }));\n};\n\nconst onUpdateTodoList = async (name, todo) => {\n  console.log(await action('update', { name, todo }));\n};\n")),(0,i.mdx)("h2",{id:"loading-indicator"},"Loading indicator"),(0,i.mdx)("p",null,"By default, we'll be showing a ",(0,i.mdx)("inlineCode",{parentName:"p"},"ProgressCircle")," to indicate that the App is loading.\nMeanwhile, the todo lists will be fetched using an ",(0,i.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-effect.html"},"Effect Hook")," which will run only once when the App is mounted.    "),(0,i.mdx)("p",null,"Once we've retrieved the todo lists, we're updating the todo list state and set the loading state to ",(0,i.mdx)("inlineCode",{parentName:"p"},"false"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"useEffect(() => {\n  (async () => {\n    const { todoList } = await action('read');\n    if (todoList) {\n      setTodoList(todoList);\n      setIsLoading(false);\n    }\n  })();\n}, []);\n")),(0,i.mdx)("p",null,"With React ",(0,i.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/conditional-rendering.html"},"Conditional Rendering"),", we can easily define what will be rendered based on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"isLoading")," state.\nOnce the state value is set to ",(0,i.mdx)("inlineCode",{parentName:"p"},"false"),", we'll display the ",(0,i.mdx)("inlineCode",{parentName:"p"},"CreateTodoList")," from ",(0,i.mdx)("a",{parentName:"p",href:"lesson3.md"},"lesson 3")," and pass the ",(0,i.mdx)("inlineCode",{parentName:"p"},"onCreateTodoList")," callback function as prop.   "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},'<View elementType="main" minHeight="100vh">\n  {isLoading ? (\n    <Flex alignItems="center" justifyContent="center" height="100vh">\n      <ProgressCircle size="L" aria-label="Loading…" isIndeterminate />\n    </Flex>\n  ) : (\n    <View height="size-800" marginY="size-400">\n      <CreateTodoList onCreate={onCreateTodoList} />\n      ...\n    </View>\n  )}\n</View>\n')),(0,i.mdx)("h2",{id:"rendering-todo-lists"},"Rendering todo lists"),(0,i.mdx)("p",null,"Next to ",(0,i.mdx)("inlineCode",{parentName:"p"},"CreateTodoList"),", we'll also render the todo lists. For that, we're going to use the React Spectrum ",(0,i.mdx)("inlineCode",{parentName:"p"},"Grid")," component.\nSimilarly to the previous lesson, we'll iterate over the ",(0,i.mdx)("inlineCode",{parentName:"p"},"todoList")," array using the ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"},"map()")," function to render each item as ",(0,i.mdx)("inlineCode",{parentName:"p"},"TodoList")," component."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},'<Grid\n  columns={repeat(\'auto-fit\', \'size-3400\')}\n  autoRows="size-6000"\n  justifyContent="center"\n  gap="size-200">\n  {todoList.map((list) => (\n    <TodoList key={list.name} todoList={list} onDelete={onDeleteTodoList} onUpdate={onUpdateTodoList} />\n  ))}\n</Grid>\n')),(0,i.mdx)("p",null,"Since todo list names are unique, we're using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"name")," as ",(0,i.mdx)("inlineCode",{parentName:"p"},"key")," prop.  We're also passing the ",(0,i.mdx)("inlineCode",{parentName:"p"},"todoList")," object and the ",(0,i.mdx)("inlineCode",{parentName:"p"},"onDelete"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"onUpdate")," function callbacks as props to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"TodoList")," component."),(0,i.mdx)("h2",{id:"full-component"},"Full component"),(0,i.mdx)("p",null,"Finally, we'll just wrap the whole App inside the React Spectrum Provider with the default theme set to ",(0,i.mdx)("inlineCode",{parentName:"p"},"light")," which corresponds to the ",(0,i.mdx)("a",{parentName:"p",href:"https://experience.adobe.com/"},"Experience Cloud Shell")," main content theme."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"<Provider theme={defaultTheme} colorScheme={`light`}>\n...\n</Provider>\n")),(0,i.mdx)("p",null,"See the full component code ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/adobeio-samples-todoapp/blob/master/web-src/src/components/App.js"},"here"),"."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1256px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.3125%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/daf7bd33ba416fe2dd0ad1d45f4b81f3/5530d/app.webp 320w","/adobe-developer-app-builder/static/daf7bd33ba416fe2dd0ad1d45f4b81f3/0c8fb/app.webp 640w","/adobe-developer-app-builder/static/daf7bd33ba416fe2dd0ad1d45f4b81f3/deed9/app.webp 1256w"],sizes:"(max-width: 1256px) 100vw, 1256px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/daf7bd33ba416fe2dd0ad1d45f4b81f3/dd4a7/app.png 320w","/adobe-developer-app-builder/static/daf7bd33ba416fe2dd0ad1d45f4b81f3/0f09e/app.png 640w","/adobe-developer-app-builder/static/daf7bd33ba416fe2dd0ad1d45f4b81f3/30373/app.png 1256w"],sizes:"(max-width: 1256px) 100vw, 1256px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-developer-app-builder/static/daf7bd33ba416fe2dd0ad1d45f4b81f3/30373/app.png",alt:"App",title:"App",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-todo-app-lesson-6-md-1b35c511f10d56f5a3a3.js.map