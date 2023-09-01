import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.f4487b77.js";const l="/documentation-biome/workflowDispatch.png",o="/documentation-biome/runWorkflow1.png",p="/documentation-biome/runWorkflow.png",g=JSON.parse('{"title":"Github Action Workflow Triggers","description":"","frontmatter":{},"headers":[],"relativePath":"days/day9/workflow-triggers.md","filePath":"days/day9/workflow-triggers.md","lastUpdated":1677977278000}'),t={name:"days/day9/workflow-triggers.md"},r=e(`<h1 id="github-action-workflow-triggers" tabindex="-1">Github Action Workflow Triggers <a class="header-anchor" href="#github-action-workflow-triggers" aria-label="Permalink to &quot;Github Action Workflow Triggers&quot;">​</a></h1><p>Whenever we started with Playwright, they give us a nice starter workflow with the following triggers.</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [ </span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">master</span><span style="color:#E1E4E8;"> ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">pull_request</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [ </span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">master</span><span style="color:#E1E4E8;"> ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [ </span><span style="color:#032F62;">main</span><span style="color:#24292E;">, </span><span style="color:#032F62;">master</span><span style="color:#24292E;"> ]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">pull_request</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [ </span><span style="color:#032F62;">main</span><span style="color:#24292E;">, </span><span style="color:#032F62;">master</span><span style="color:#24292E;"> ]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>on</code> being the start of what triggers our workflow. <code>on</code> either a push or a pull_request to a <code>main</code> or <code>master</code> branch. There are of course other procedures we can use instead of on a push or pull request. In most cases, on a pull or push request may be enough, but its important to note a couple of others that have their own uses.</p><h2 id="running-on-a-schedule" tabindex="-1">Running on a schedule <a class="header-anchor" href="#running-on-a-schedule" aria-label="Permalink to &quot;Running on a schedule&quot;">​</a></h2><p>Github actions allows you to run your workflow on a schedule using CRON based syntax.</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">schedule</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># * is a special character in YAML so you have to quote this string</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">cron</span><span style="color:#E1E4E8;">:  </span><span style="color:#9ECBFF;">&#39;30 5,17 * * *&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">schedule</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># * is a special character in YAML so you have to quote this string</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">cron</span><span style="color:#24292E;">:  </span><span style="color:#032F62;">&#39;30 5,17 * * *&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>For the above example. the workflow would dispatch every day at 5:30am and 5:30pm UTC.</p><p>For me, every time I look at CRON jobs i instantly forget what I&#39;m looking at. To assist with this you can check out the below graph, and I also use this handy dandy website called <a href="https://crontab.guru/" target="_blank" rel="noreferrer">crontab</a>. Which can help you put together something that suites you and the team.</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">┌───────────── minute (0 - 59)</span></span>
<span class="line"><span style="color:#e1e4e8;">│ ┌───────────── hour (0 - 23)</span></span>
<span class="line"><span style="color:#e1e4e8;">│ │ ┌───────────── day of the month (1 - 31)</span></span>
<span class="line"><span style="color:#e1e4e8;">│ │ │ ┌───────────── month (1 - 12 or JAN-DEC)</span></span>
<span class="line"><span style="color:#e1e4e8;">│ │ │ │ ┌───────────── day of the week (0 - 6 or SUN-SAT)</span></span>
<span class="line"><span style="color:#e1e4e8;">│ │ │ │ │</span></span>
<span class="line"><span style="color:#e1e4e8;">│ │ │ │ │</span></span>
<span class="line"><span style="color:#e1e4e8;">│ │ │ │ │</span></span>
<span class="line"><span style="color:#e1e4e8;">* * * * *</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">┌───────────── minute (0 - 59)</span></span>
<span class="line"><span style="color:#24292e;">│ ┌───────────── hour (0 - 23)</span></span>
<span class="line"><span style="color:#24292e;">│ │ ┌───────────── day of the month (1 - 31)</span></span>
<span class="line"><span style="color:#24292e;">│ │ │ ┌───────────── month (1 - 12 or JAN-DEC)</span></span>
<span class="line"><span style="color:#24292e;">│ │ │ │ ┌───────────── day of the week (0 - 6 or SUN-SAT)</span></span>
<span class="line"><span style="color:#24292e;">│ │ │ │ │</span></span>
<span class="line"><span style="color:#24292e;">│ │ │ │ │</span></span>
<span class="line"><span style="color:#24292e;">│ │ │ │ │</span></span>
<span class="line"><span style="color:#24292e;">* * * * *</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="benefits-of-running-on-a-schedule" tabindex="-1">Benefits of running on a schedule <a class="header-anchor" href="#benefits-of-running-on-a-schedule" aria-label="Permalink to &quot;Benefits of running on a schedule&quot;">​</a></h3><ul><li><p>Consistency: Automated tests scheduled on a cron job will run at the specified intervals without fail, ensuring consistent and regular testing of the application.</p></li><li><p>Time-saving: By scheduling automated tests on a cron job, the testers do not have to manually trigger the tests, saving time and increasing productivity.</p></li><li><p>Improved reliability: By automating tests on a cron job, the testing process becomes more reliable, consistent, and predictable, reducing the risk of human error and improving the overall quality of the software.</p></li></ul><h2 id="manually-dispatching-a-workflow" tabindex="-1">Manually dispatching a workflow <a class="header-anchor" href="#manually-dispatching-a-workflow" aria-label="Permalink to &quot;Manually dispatching a workflow&quot;">​</a></h2><p>To be honest, I&#39;m not a massive fan of having to manually run a pipeline. I feel it defeats the purpose of automation. Personally, I want to build my tests and pipeline to run consistently and reliably. That way if there is an issue, I know its not because of my tests, but instead there is a possible issue with the state of the application itself. However, there are <em>some</em> potential benefits. I also prefer to use this to supplement other workflow running methods.</p><h3 id="adding-workflow-dispatch" tabindex="-1">Adding workflow dispatch. <a class="header-anchor" href="#adding-workflow-dispatch" aria-label="Permalink to &quot;Adding workflow dispatch.&quot;">​</a></h3><p>Adding the workflow dispatch is as simple as adding the <code>workflow_dispatch</code> trigger to the yaml file.</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">workflow_dispatch</span><span style="color:#E1E4E8;">: </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [ </span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">master</span><span style="color:#E1E4E8;"> ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">pull_request</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [ </span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">master</span><span style="color:#E1E4E8;"> ]</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line has-focus"><span style="color:#24292E;">  </span><span style="color:#22863A;">workflow_dispatch</span><span style="color:#24292E;">: </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [ </span><span style="color:#032F62;">main</span><span style="color:#24292E;">, </span><span style="color:#032F62;">master</span><span style="color:#24292E;"> ]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">pull_request</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [ </span><span style="color:#032F62;">main</span><span style="color:#24292E;">, </span><span style="color:#032F62;">master</span><span style="color:#24292E;"> ]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>From here once we push out our code, we are able to access an additional command. From the <code>actions</code> menu in the left pane, there is the workflow of <code>playwright tests</code>. Clicking that will reveal the workflow dispatch.</p><p><img src="`+l+'" alt=""></p><p>On the far right there is of course the big ol green button that allows you to use the workflow.</p><p><img src="'+o+'" alt=""></p><p>Which brings us to the first benefit. The ability to run this workflow on any branch that contains this workflow.</p><p><img src="'+p+'" alt=""></p><p>If the branch does not contain the the same workflow a error message will prevent you from running it.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Workflow does not exist or does not have a workflow_dispatch trigger in this branch.</p></div><h3 id="benefits-of-running-with-workflow-dispatch" tabindex="-1">Benefits of running with workflow dispatch <a class="header-anchor" href="#benefits-of-running-with-workflow-dispatch" aria-label="Permalink to &quot;Benefits of running with workflow dispatch&quot;">​</a></h3><ul><li>Flexibility</li><li>Debugging</li><li>Human judgment</li></ul><h3 id="disadvantages" tabindex="-1">Disadvantages <a class="header-anchor" href="#disadvantages" aria-label="Permalink to &quot;Disadvantages&quot;">​</a></h3><p>I just wanted to restate this. I don&#39;t like having to manually run pipelines. I feel you can achieve the same benefits by having a good branching strategy, and reliable, stable tests.</p>',29),i=[r];function c(h,d,u,y,E,b){return a(),n("div",null,i)}const f=s(t,[["render",c]]);export{g as __pageData,f as default};
