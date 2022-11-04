"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[597],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),y=a,m=d["".concat(u,".").concat(y)]||d[y]||c[y]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={id:"index",title:"@redstonewizard08/youtube-player",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},l="YouTubePlayer",i={unversionedId:"api/index",id:"api/index",title:"@redstonewizard08/youtube-player",description:"A terrible clone of the YouTube video player.",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/YouTubePlayer/docs/api/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@redstonewizard08/youtube-player",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Creating players (without playlists)",permalink:"/YouTubePlayer/docs/usage/creating-players"},next:{title:"Exports",permalink:"/YouTubePlayer/docs/api/modules"}},u={},s=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"youtubeplayer"},"YouTubePlayer"),(0,a.kt)("p",null,"A terrible clone of the YouTube video player."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},".npmrc")," file in your project with this inside of it:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-npmrc"},"@redstonewizard08:registry=https://npm.pkg.github.com\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the package:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @redstonewizard08/youtube-player\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Import the library.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// Import the YouTubePlayer utility class.\nimport YouTubePlayer, { type VideoData } from "@redstonewizard08/youtube-player";\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create a player instance.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const videos: VideoData[] = [\n    {\n        album: "Stardew Valley - Roguelike Mod OST",\n        artist: "Therm",\n        title: "Hold Your Ground",\n\n        // Note: These work with Data URIs!\n        poster: "./assets/Hold Your Ground.png",\n        source: "./assets/Hold Your Ground.mp4",\n    },\n];\n\nYouTubePlayer.createPlaylistPlayer(videos);\n')))}c.isMDXComponent=!0}}]);