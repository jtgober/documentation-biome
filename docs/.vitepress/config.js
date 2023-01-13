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
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Scope", link: "/days/day2/scope" },
          { text: "Conditionals and Logic", link: "/days/day2/logic" },
          { text: "Arrays", link: "/days/day2/arrays" },
          { text: "Loops", link: "/days/day2/jsloops" },
          { text: "Fizzbuzz", link: "/days/day2/fizzbuzz" },
          { text: "Array Challenge", link: "/days/day2/arraychallenge" },
          { text: "Odd or Even", link: "/days/day2/odd-or-even" },
        ],
      },
      {
        text: "JavaScript Day 3",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Functions", link: "/days/day3/functions" },
          { text: "Classes", link: "/days/day3/jsclass" },
          { text: "Objects and *this*", link: "/days/day3/object-this" },
          {
            text: "Class and Objects Challenge",
            link: "/days/day3/class-objects-challenge",
          },
          { text: "Area Calc", link: "/days/day3/area-calc" },
        ],
      },
      {
        text: "Playwright Day 4",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Installing Playwright", link: "/days/day4/playwright-installation" },
          { text: "Playwright Tour", link: "/days/day4/playwright-tour" },
          { text: "First Automation", link: "/days/day4/first-automation" },
          { text: "Page Object Model", link: "/days/day4/page-object-model" },
          { text: "Text Input Challenge", link: "/days/day4/text-input-challenge" },
        ],
      },
      {
        text: "Playwright Day 5",
        collapsible: true,
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
        collapsible: true,
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
        collapsible: true,
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
    ],
  },

  markdown: {
    lineNumbers: true,
  },
};
