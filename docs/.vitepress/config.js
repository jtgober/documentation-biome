export default {
  title: "Documentation-Biome",
  description: "Just playing around.",
  base: process.env.CI ? "/documentation-biome/" : "/",
  themeConfig: {
    nav: [
      {
        text: "Check this out",
        items: [{ text: "About me", link: "/about/about" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/jtgober" }],
    sidebar: [
      {
        text: "JavaScript Day 1",
        collapsible: true,
        collapsed: true,
        items: [
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
    ],
  },
  markdown: {
    lineNumbers: true,
  },
};
