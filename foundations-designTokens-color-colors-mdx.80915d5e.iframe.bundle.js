"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[3385],{"./node_modules/@lokalise/styled/dist/hooks/useTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>s});const s=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").DP},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(1294).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.H)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,di:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.di,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.uY});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/foundations/designTokens/color/colors.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>colors});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),useTheme=__webpack_require__("./node_modules/@lokalise/styled/dist/hooks/useTheme.js"),Code=__webpack_require__("./src/components/Code/Code.tsx"),theme=__webpack_require__("./src/utils/theme/index.ts"),tokenValues=__webpack_require__("./src/foundations/designTokens/tokenValues.ts");const ColorTable=styled_components_browser_esm.Ay.table.withConfig({displayName:"storiesUtils__ColorTable",componentId:"sc-v7k2sb-0"})(["background:",";"],(0,theme.Uq)("color.background.surface.default")),ColorHeadCell=styled_components_browser_esm.Ay.th.withConfig({displayName:"storiesUtils__ColorHeadCell",componentId:"sc-v7k2sb-1"})(["color:",";text-align:left;font-family:var(--sb-theme-font-family-default);"],(0,theme.Uq)("color.text.default")),ColorBodyCell=styled_components_browser_esm.Ay.td.withConfig({displayName:"storiesUtils__ColorBodyCell",componentId:"sc-v7k2sb-2"})(["padding:10px 10px 10px 0;"]),ColorSample=styled_components_browser_esm.Ay.div.withConfig({displayName:"storiesUtils__ColorSample",componentId:"sc-v7k2sb-3"})(["width:300px;height:30px;border:1px solid ",";border-radius:4px;"],(0,theme.Uq)("color.background.surface.inverse")),Colors=()=>{const theme=(0,useTheme.D)(),colorOptions=(0,tokenValues.A)(theme.color);return(0,jsx_runtime.jsxs)(ColorTable,{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)(ColorHeadCell,{children:"Token"}),(0,jsx_runtime.jsx)(ColorHeadCell,{children:"Value"}),(0,jsx_runtime.jsx)(ColorHeadCell,{children:"Sample"})]})}),(0,jsx_runtime.jsx)("tbody",{children:colorOptions.map((({key,tokenValue})=>(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)(ColorBodyCell,{children:(0,jsx_runtime.jsxs)(Code.C,{children:["value('color.",key,"')"]})}),(0,jsx_runtime.jsx)(ColorBodyCell,{children:(0,jsx_runtime.jsx)(Code.C,{children:tokenValue})}),(0,jsx_runtime.jsx)(ColorBodyCell,{children:(0,jsx_runtime.jsx)(ColorSample,{style:{backgroundColor:tokenValue}})})]},key)))})]})};Colors.displayName="Colors";const colors=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Foundations/Design Tokens/Colors"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"colors",children:"Colors"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#color-options",children:"Color Options"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the Theme Switcher to view the ",(0,jsx_runtime.jsx)(_components.code,{children:"light"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"dark"})," color palettes."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { value } from '@lokalise/louis';\nimport { styled } from '@lokalise/styled';\n\nconst StyledParagraph = styled.p`\n\t${value('color.text.default')};\n`;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=5398%3A21832",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Source File | Colors"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"color-options",children:"Color Options"}),"\n",(0,jsx_runtime.jsx)(dist.di,{children:(0,jsx_runtime.jsx)(Colors,{})})]})}}},"./src/foundations/designTokens/tokenValues.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>getTokenEntries});const getTokenEntries=tokenObject=>{const tokenEntries=[],traverseTokens=(obj,parentKeys)=>{Object.entries(obj).forEach((([key,tokenValue])=>{if(null!==tokenValue&&"object"==typeof tokenValue)traverseTokens(tokenValue,[...parentKeys,key]);else{const tokenEntry={key:[...parentKeys,key].join("."),tokenValue};tokenEntries.push(tokenEntry)}}))};return traverseTokens(tokenObject,[]),tokenEntries}}}]);