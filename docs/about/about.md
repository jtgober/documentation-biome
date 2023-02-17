---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'
import DiscordWidget from '../components/discord-widget.vue'


const members = [
  {
    avatar: 'https://www.github.com/jtgober.png',
    name: 'Jonathan Gober',
    title: 'QP Consultant',
    links: [
      { icon: 'github', link: 'https://github.com/jtgober' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/jgober/' },
      { icon: "twitter", link: "https://twitter.com/Gojobers" },
            {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path d="M8.5 7A8.5 8.5 0 108.5 24 8.5 8.5 0 108.5 7zM22 8A4 7.5 0 1022 23 4 7.5 0 1022 8zM28.5 9A1.5 6.5 0 1028.5 22 1.5 6.5 0 1028.5 9z"/></svg>'
        },
        link: 'https://medium.com/@Gojos'
      }
    ]
  },

]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>A little about me</template>
    <template #lead>
  Father, Putt Putt Fan, Doughnut Expert, Time Magazine's Person of the year (2006), Twitter Bot, Blogger
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="members" />
</VPTeamPage>
<h1 style ="display: block; margin: 0 auto; font-size: xx-large; text-align: center; margin-bottom: 30px;">Come chat about stuff and things in my community discord!</h1>
    <DiscordWidget />
