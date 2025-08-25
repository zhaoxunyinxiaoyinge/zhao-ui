import{_ as a,c as o,o as e,a2 as s}from"./chunks/framework.Dlli-quO.js";const m=JSON.parse('{"title":"安装指南","description":"","frontmatter":{},"headers":[],"relativePath":"guide/installtion.md","filePath":"guide/installtion.md","lastUpdated":1756133861000}'),l={name:"guide/installtion.md"};function i(n,t,c,r,p,u){return e(),o("div",null,t[0]||(t[0]=[s(`<h1 id="安装指南" tabindex="-1">安装指南 <a class="header-anchor" href="#安装指南" aria-label="Permalink to &quot;安装指南&quot;">​</a></h1><h2 id="安装包管理器" tabindex="-1">安装包管理器 <a class="header-anchor" href="#安装包管理器" aria-label="Permalink to &quot;安装包管理器&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">1. npm install zhao-ui --save</p></div><div class="tip custom-block"><p class="custom-block-title">2. pnpm install zhao-ui --save</p></div><h3 id="使用步骤" tabindex="-1">使用步骤 <a class="header-anchor" href="#使用步骤" aria-label="Permalink to &quot;使用步骤&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><pre><code>1. 使用方法:
    import {createApp} from &quot;vue&quot;;
    import App from &quot;./App.vue&quot;
    import ZhaoUI from &quot;zha-ui&quot;;
    import &quot;./../dist/them-chalk/css/index.css&quot;
    let app=createApp(
        App
    )
    app.use(ZhaoUI);
    app.mount(&quot;#app&quot;)
</code></pre></div><h3 id="浏览器直接引入" tabindex="-1">浏览器直接引入 <a class="header-anchor" href="#浏览器直接引入" aria-label="Permalink to &quot;浏览器直接引入&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">1.</p><pre><code>\`\`\`vue
  &lt;head&gt;
      &lt;!-- Import style --&gt;
      &lt;link rel=&quot;stylesheet&quot; href=&quot;//unpkg.com/zhao-ui/dist/them-chalk/css/index.css&quot; /&gt;
      &lt;!-- Import Vue 3 --&gt;
      &lt;script src=&quot;//unpkg.com/vue@3&quot;&gt;&lt;/script&gt;
      &lt;!-- Import component library --&gt;
      &lt;script src=&quot;//unpkg.com/zhao-ui&quot;&gt;&lt;/script&gt; 
    &lt;/head&gt;
\`\`\`
</code></pre></div>`,8)]))}const h=a(l,[["render",i]]);export{m as __pageData,h as default};
