export default {
  title: "Documentation-Biome",
  description: "Just playing around.",
  base: process.env.TACO ? "/documentation-biome/" : "/",
  lastUpdated: true,
  themeConfig: {
    logo: "basil.png",
    nav: [
      {
        text: "About",
        items: [{ text: "Me", link: "/about/about" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/jtgober" }],
    sidebar: [
      {
        text: "JavaScript Day 1",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Initial Setup", link: "/guide/getting-started" },
          { text: "Visual studio code walk through", link: "/day1/vscode" },
          { text: "Types and Comparisons", link: "/day1/types" },
          {
            text: "Variables and Template Literals",
            link: "/day1/vars-template-literals",
          },
        ],
      },
      {
        text: "JavaScript Day 2",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Scope", link: "/day2/scope" },
          { text: "Conditionals and Logic", link: "/day2/logic" },
          { text: "Arrays", link: "/day2/arrays" },
          { text: "Loops", link: "/day2/jsloops" },
          { text: "Fizzbuzz", link: "/day2/fizzbuzz" },
          { text: "Array Challenge", link: "/day2/arraychallenge" },
          { text: "Odd or Even", link: "/day2/odd-or-even" },
        ],
      },
      {
        text: "JavaScript Day 3",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Functions", link: "/day3/functions" },
          { text: "Classes", link: "/day3/jsclass" },
          { text: "Objects and *this*", link: "/day3/object-this" },
          {
            text: "Class and Objects Challenge",
            link: "/day3/class-objects-challenge",
          },
          { text: "Area Calc", link: "/day3/area-calc" },
        ],
      },
      {
        text: "Playwright Day 4",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Installing Playwright", link: "/day4/playwright-installation" },
          { text: "Playwright Tour", link: "/day4/playwright-tour" },
          { text: "First Automation", link: "/day4/first-automation" },
          { text: "Page Object Model", link: "/day4/page-object-model" },
          { text: "Text Input Challenge", link: "/day4/text-input-challenge" },
        ],
      },
      {
        text: "Playwright Day 5",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Base Url", link: "/day5/home-page" },
          { text: "Grouping and Parallel Sample App", link: "/day5/sample-app-parallel" },
          { text: "Dialog Boxes, Scroll bars", link: "/day5/class-attribute-scrolls" },
          { text: "Progress Bar Challenge", link: "/day5/progress-bar-challenge" },
          { text: "Evaluating Elements", link: "/day5/playwright-mapping" },
          { text: "Dynamic Table Challenge", link: "/day5/dynamic-table-challenge" },
        ],
      },
      {
        text: "Git Day 6",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Git Configuration, Add, Remove, Commit Best Practices", link: "/day6/git-configuration-and-more" },
          { text: "Git Cloning, Branches, Stashing, and Merging", link: "/day6/cloning-branching" },
          { text: "Merge Conflicts, Undoing Staged Changes, and Other Tips", link: "/day6/merge-conflicts" },
          { text: "Final Git Lecture on Diff, Diff-tools, Alias, and Forking", link: "/day6/final-git" },
        ],
      },
      {
        text: "Api Testing Day 7",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "What is an api and why should you test it", link: "/day7/api-start" },
          { text: "Checking out the poke-api", link: "/day7/pokeapi-start" },
          { text: "First JSON/API Challenge", link: "/day7/starter-pokemon" },
          { text: "Status Code Validations", link: "/day7/status-code-validations" },
          { text: "Snapshot Testing", link: "/day7/api-snapshots" },
          { text: "Schema Testing", link: "/day7/json-schema-validation" },

        ],
      },
    ],
  },

  markdown: {
    lineNumbers: true,
  },
};
