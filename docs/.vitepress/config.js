export default {
  title: "Documentation Biome",
  description: "Just playing around.",
  base: process.env.TACO ? "/documentation-biome/" : "/",
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],

  themeConfig: {
    logo: { src: 'logo.png', alt: 'doc-biome' },
    algolia: {
      appId: 'L48G8NU1LT',
      apiKey: 'c877333d76129e5064688a120390468a',
      indexName: 'wwwumentation-biome',
    },

    nav: [
      {
        text: "Home",
        items: [{ text: "Getting Started", link: "/guide/getting-started" }],
      },
      {
        text: "About",
        items: [{ text: "Me", link: "/about/gojo" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/jtgober/documentation-biome" },
      { icon: "discord", link: "https://discord.gg/pRNhz2qtQC" },

    ],
    sidebar: [
      {
        text: "JavaScript Day 1",
        collapsed: true,
        items: [
          { text: "Initial Setup", link: "/guide/getting-started" },
          { text: "Visual studio code walk through", link: "/days/day1/vscode" },
          { text: "Types and Comparisons", link: "/days/day1/types" },
          {
            text: "Variables and Template Literals",
            link: "/days/day1/vars-template-literals",
          },
        ],
      },
      {
        text: "JavaScript Day 2",
        collapsed: true,
        items: [

          { text: "Conditionals and Logic", link: "/days/day2/logic" },
          { text: "Odd or Even", link: "/days/day2/odd-or-even" },
          { text: "Scope", link: "/days/day2/scope" },
          { text: "Arrays", link: "/days/day2/arrays" },
          { text: "Array Challenge", link: "/days/day2/arraychallenge" },
          { text: "Loops", link: "/days/day2/jsloops" },
          { text: "Fizzbuzz", link: "/days/day2/fizzbuzz" },
        ],
      },
      {
        text: "JavaScript Day 3",
        collapsed: true,
        items: [
          { text: "Functions", link: "/days/day3/functions" },
          { text: "Area Calc", link: "/days/day3/area-calc" },
          { text: "Objects and *this*", link: "/days/day3/object-this" },
          { text: "Classes", link: "/days/day3/jsclass" },
          { text: "Class and Objects Challenge", link: "/days/day3/class-objects-challenge", },
        ],
      },
      {
        text: "Playwright Day 4",
        collapsed: true,
        items: [
          { text: "Installing Playwright", link: "/days/day4/playwright-installation" },
          { text: "Playwright Tour", link: "/days/day4/playwright-tour" },
          { text: "First Automation", link: "/days/day4/first-automation" },
          { text: "Code Generation Assertions", link: "/days/day4/codegen-update" },
          { text: "Locator Strategy", link: "/days/day4/selecting-locators" },
          { text: "Page Object Model", link: "/days/day4/page-object-model" },
          { text: "Text Input Challenge", link: "/days/day4/text-input-challenge" },
          { text: "Debugging UI Tests", link: "/days/day4/Debugging-and-running-tests" },

        ],
      },
      {
        text: "Playwright Day 5",
        collapsed: true,
        items: [
          { text: "Base Url", link: "/days/day5/home-page" },
          { text: "Grouping and Parallel Sample App", link: "/days/day5/sample-app-parallel" },
          { text: "Dialog Boxes, Scroll bars", link: "/days/day5/class-attribute-scrolls" },
          { text: "Progress Bar Challenge", link: "/days/day5/progress-bar-challenge" },
          { text: "Evaluating Elements", link: "/days/day5/playwright-mapping" },
          { text: "Dynamic Table Challenge", link: "/days/day5/dynamic-table-challenge" },
        ],
      },
      {
        text: "Git Day 6",
        collapsed: true,
        items: [
          { text: "Git Configuration, Add, Remove, Commit Best Practices", link: "/days/day6/git-configuration-and-more" },
          { text: "Git Cloning, Branches, Stashing, and Merging", link: "/days/day6/cloning-branching" },
          { text: "Merge Conflicts, Undoing Staged Changes, and Other Tips", link: "/days/day6/merge-conflicts" },
          { text: "Final Git Lecture on Diff, Diff-tools, Alias, and Forking", link: "/days/day6/final-git" },
        ],
      },
      {
        text: "Api Testing Day 7",
        collapsed: true,
        items: [
          { text: "What is an api and why should you test it", link: "/days/day7/api-start" },
          { text: "Checking out the poke-api", link: "/days/day7/pokeapi-start" },
          { text: "First JSON/API Challenge", link: "/days/day7/starter-pokemon" },
          { text: "Status Code Validations", link: "/days/day7/status-code-validations" },
          { text: "Snapshot Testing", link: "/days/day7/api-snapshots" },
          { text: "Schema Testing", link: "/days/day7/json-schema-validation" },

        ],
      },
      {
        text: "Api Testing Day 8",
        collapsed: true,
        items: [
          { text: "A Challenge!??!", link: "/days/day8/setup-challenge" },
          { text: "Checking out the pet store and query params", link: "/days/day8/petstore-query-params" },
          { text: "Post and Put", link: "/days/day8/post-and-put" },
          { text: "Add and Update Challenge", link: "/days/day8/post-put-challenge" },
          { text: "Delete", link: "/days/day8/delete" },
          { text: "Final Api Challenge", link: "/days/day8/api-final" },
        ],
      },
      {
        text: "Continuous Integration and Development Day 9",
        collapsed: true,
        items: [
          { text: "Learning CI/CD!", link: "/days/day9/starting-cicd" },
          { text: "Github Secrets and Environment vars", link: "/days/day9/secrets-and-env" },
          { text: "Process Env in Local", link: "/days/day9/local-env" },
          { text: "Workflow Triggers", link: "/days/day9/workflow-triggers" },
          { text: "Workflow Inputs", link: "/days/day9/workflow-inputs" },
          { text: "Reusable Flow", link: "/days/day9/reusable-flow" }
        ],
      },
      {
        text: "Playwright Additional Learning",
        collapsed: true,
        items: [
          { text: "Playwright Extension", link: "/additions/playwright-extension" },
          { text: "Playwright UI Mode", link: "/additions/ui-mode" },
          { text: "Playwright Mocking", link: "/additions/playwright-api-mocking" },
          { text: "Global Setup", link: "/additions/global-setup" },
          { text: "Visual Comparison Testing", link: "/additions/visual-comparison-testing" },
        ],
      },
    ],
  },

  markdown: {
    lineNumbers: true,
  },
};
