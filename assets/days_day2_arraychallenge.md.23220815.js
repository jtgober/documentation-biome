import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.f4487b77.js";const F=JSON.parse('{"title":"Array Challenge Answer","description":"","frontmatter":{},"headers":[],"relativePath":"days/day2/arraychallenge.md","filePath":"days/day2/arraychallenge.md","lastUpdated":1673638586000}'),o={name:"days/day2/arraychallenge.md"},p=l(`<h1 id="array-challenge-answer" tabindex="-1">Array Challenge Answer <a class="header-anchor" href="#array-challenge-answer" aria-label="Permalink to &quot;Array Challenge Answer&quot;">​</a></h1><div class="danger custom-block"><p class="custom-block-title">STOP</p><p>Danger zone, do not proceed unless you gave it your all!</p></div><details class="details custom-block"><summary>Click me to view the code</summary><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">* Follow the below comments</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> allKindsOfDonuts </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;Original&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Sugar&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Glazed&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Chocolate Iced&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Strawberry Iced&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Powdered&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Coffee Roll&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Boston Creme&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Chocolate Cruller&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Glazed Cruller&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Jelly Filled&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Sour Cream&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Glazed Blueberry&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Glazed Chocolate&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Apple Fritter&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Cookies and Creme&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;S&#39;mores&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(allKindsOfDonuts);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//list below the number of items in the array</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(allKindsOfDonuts.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//remove the last item of the array</span></span>
<span class="line"><span style="color:#E1E4E8;">allKindsOfDonuts.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//add &quot;Maple Bar&quot; at the beginning of the array</span></span>
<span class="line"><span style="color:#E1E4E8;">allKindsOfDonuts.</span><span style="color:#B392F0;">unshift</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Maple Bar&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//determine the index of &quot;Glazed Cruller&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(allKindsOfDonuts.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Glazed Cruller&quot;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Remove the &quot;Jelly Filled&quot; and the &quot;Sour Cream&quot; donut</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(allKindsOfDonuts.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Jelly Filled&quot;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(allKindsOfDonuts.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Sour Cream&quot;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(allKindsOfDonuts.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Print out the final array -</span></span>
<span class="line"><span style="color:#6A737D;">//Array should contain these items</span></span>
<span class="line"><span style="color:#6A737D;">//   &#39;Maple Bar&#39;,         &#39;Original&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &#39;Sugar&#39;,             &#39;Glazed&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &#39;Chocolate Iced&#39;,    &#39;Strawberry Iced&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &#39;Powdered&#39;,          &#39;Coffee Roll&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &#39;Boston Creme&#39;,      &#39;Chocolate Cruller&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &#39;Glazed Cruller&#39;,    &#39;Glazed Blueberry&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &#39;Glazed Chocolate&#39;,  &#39;Apple Fritter&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &#39;Cookies and Creme&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(allKindsOfDonuts);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">* Follow the below comments</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> allKindsOfDonuts </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;Original&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Sugar&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Glazed&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Chocolate Iced&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Strawberry Iced&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Powdered&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Coffee Roll&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Boston Creme&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Chocolate Cruller&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Glazed Cruller&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Jelly Filled&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Sour Cream&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Glazed Blueberry&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Glazed Chocolate&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Apple Fritter&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Cookies and Creme&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;S&#39;mores&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(allKindsOfDonuts);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//list below the number of items in the array</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(allKindsOfDonuts.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//remove the last item of the array</span></span>
<span class="line"><span style="color:#24292E;">allKindsOfDonuts.</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//add &quot;Maple Bar&quot; at the beginning of the array</span></span>
<span class="line"><span style="color:#24292E;">allKindsOfDonuts.</span><span style="color:#6F42C1;">unshift</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Maple Bar&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//determine the index of &quot;Glazed Cruller&quot;</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(allKindsOfDonuts.</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Glazed Cruller&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//Remove the &quot;Jelly Filled&quot; and the &quot;Sour Cream&quot; donut</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(allKindsOfDonuts.</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Jelly Filled&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(allKindsOfDonuts.</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Sour Cream&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(allKindsOfDonuts.</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">11</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Print out the final array -</span></span>
<span class="line"><span style="color:#6A737D;">//Array should contain these items</span></span>
<span class="line"><span style="color:#6A737D;">//   &#39;Maple Bar&#39;,         &#39;Original&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &#39;Sugar&#39;,             &#39;Glazed&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &#39;Chocolate Iced&#39;,    &#39;Strawberry Iced&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &#39;Powdered&#39;,          &#39;Coffee Roll&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &#39;Boston Creme&#39;,      &#39;Chocolate Cruller&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &#39;Glazed Cruller&#39;,    &#39;Glazed Blueberry&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &#39;Glazed Chocolate&#39;,  &#39;Apple Fritter&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &#39;Cookies and Creme&#39;</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(allKindsOfDonuts);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div></details>`,3),e=[p];function t(r,c,y,i,u,E){return n(),a("div",null,e)}const q=s(o,[["render",t]]);export{F as __pageData,q as default};
