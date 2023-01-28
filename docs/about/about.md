<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/jtgober.png',
    name: 'Jonathan Gober',
    title: 'QP Consultant',
    links: [
      { icon: 'github', link: 'https://github.com/jtgober' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/jgober/' },
      { icon: "twitter", link: "https://twitter.com/Gojobers" },
    ]
  },

]
</script>

# About me

* Putt Putt :golf:
* Father :man: :girl:
* Doughnut Expert :doughnut:
* Time Magazine's Person of the year (2006) :sunglasses:

<VPTeamMembers size="small" :members="members" />
