import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.f4487b77.js";const m=JSON.parse('{"title":"Starter Pokemon Challenge","description":"","frontmatter":{},"headers":[],"relativePath":"days/day7/starter-pokemon.md","filePath":"days/day7/starter-pokemon.md","lastUpdated":1673638586000}'),l={name:"days/day7/starter-pokemon.md"},p=o(`<h1 id="starter-pokemon-challenge" tabindex="-1">Starter Pokemon Challenge <a class="header-anchor" href="#starter-pokemon-challenge" aria-label="Permalink to &quot;Starter Pokemon Challenge&quot;">​</a></h1><p>This is the start of the pokemon challenge. <a href="https://pokeapi.co/docs/v2#pokemon-species" target="_blank" rel="noreferrer">Documentation can be found here</a></p><h3 id="starter-code" tabindex="-1">Starter Code <a class="header-anchor" href="#starter-code" aria-label="Permalink to &quot;Starter Code&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">test</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@playwright/test&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// a list of starter pokemon that you receive at the beginning of the games.</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> starterPokemon </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">133</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">152</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">155</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">158</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">252</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">255</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">258</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">387</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">390</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">393</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">495</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">498</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">501</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">650</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">653</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">656</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">722</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">725</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">728</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">810</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">813</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">816</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#6A737D;">// grabs a random pokemon from the starter list</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> randomStarterPokemon </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> starterPokemon[Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> starterPokemon.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">)];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Whats Your Starter Pokemon?!?!?&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">request</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">// request to grab specific pokemon </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pokemon</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> request.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`pokemon-species/\${</span><span style="color:#E1E4E8;">randomStarterPokemon</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">//your code goes here</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`You received a \${</span><span style="color:#E1E4E8;">generation</span><span style="color:#9ECBFF;">} \${</span><span style="color:#E1E4E8;">pokeName</span><span style="color:#9ECBFF;">} from Gojo!\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">test</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@playwright/test&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// a list of starter pokemon that you receive at the beginning of the games.</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> starterPokemon </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">25</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">133</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">152</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">155</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">158</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">252</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">255</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">258</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">387</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">390</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">393</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">495</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">498</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">501</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">650</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">653</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">656</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">722</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">725</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">728</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">810</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">813</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">816</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#6A737D;">// grabs a random pokemon from the starter list</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> randomStarterPokemon </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> starterPokemon[Math.</span><span style="color:#6F42C1;">floor</span><span style="color:#24292E;">(Math.</span><span style="color:#6F42C1;">random</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> starterPokemon.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">)];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Whats Your Starter Pokemon?!?!?&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> ({ </span><span style="color:#E36209;">request</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">// request to grab specific pokemon </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pokemon</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> request.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`pokemon-species/\${</span><span style="color:#24292E;">randomStarterPokemon</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">//your code goes here</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`You received a \${</span><span style="color:#24292E;">generation</span><span style="color:#032F62;">} \${</span><span style="color:#24292E;">pokeName</span><span style="color:#032F62;">} from Gojo!\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">STOP</p><p>Danger zone, do not proceed unless you gave it your all!</p></div><details class="details custom-block"><summary>Click me to view the code</summary><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">test</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@playwright/test&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> starterPokemon </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">133</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">152</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">155</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">158</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">252</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">255</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">258</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">387</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">390</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">393</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">495</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">498</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">501</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">650</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">653</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">656</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">722</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">725</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">728</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">810</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">813</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">816</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> randomStarterPokemon </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> starterPokemon[Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> starterPokemon.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">)];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Whats Your Starter Pokemon?!?!?&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">request</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pokemon</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> request.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`pokemon-species/\${</span><span style="color:#E1E4E8;">randomStarterPokemon</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> myStarterPokemon </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> pokemon.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> pokeName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> myStarterPokemon.name</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> generation </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> myStarterPokemon.generation.name</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`You received a \${</span><span style="color:#E1E4E8;">generation</span><span style="color:#9ECBFF;">} \${</span><span style="color:#E1E4E8;">pokeName</span><span style="color:#9ECBFF;">} from Gojo!\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">test</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@playwright/test&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> starterPokemon </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">25</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">133</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">152</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">155</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">158</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">252</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">255</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">258</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">387</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">390</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">393</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">495</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">498</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">501</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">650</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">653</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">656</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">722</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">725</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">728</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">810</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">813</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">816</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> randomStarterPokemon </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> starterPokemon[Math.</span><span style="color:#6F42C1;">floor</span><span style="color:#24292E;">(Math.</span><span style="color:#6F42C1;">random</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> starterPokemon.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">)];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Whats Your Starter Pokemon?!?!?&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> ({ </span><span style="color:#E36209;">request</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pokemon</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> request.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`pokemon-species/\${</span><span style="color:#24292E;">randomStarterPokemon</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> myStarterPokemon </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> pokemon.</span><span style="color:#6F42C1;">json</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> pokeName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> myStarterPokemon.name</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> generation </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> myStarterPokemon.generation.name</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`You received a \${</span><span style="color:#24292E;">generation</span><span style="color:#032F62;">} \${</span><span style="color:#24292E;">pokeName</span><span style="color:#032F62;">} from Gojo!\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></details>`,6),e=[p];function t(r,c,y,E,F,i){return n(),a("div",null,e)}const d=s(l,[["render",t]]);export{m as __pageData,d as default};
