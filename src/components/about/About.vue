<template lang="pug">
Section(title="Hi there!")
  p I'm Michael, a software engineer at #[Link(href="https://snap.com") Snap], former freelance frontend developer, computer science student at the #[Link(href="https://www.sydney.edu.au/") University of Sydney (USYD)], and former tutor at the #[Link(href="https://www.unsw.edu.au/") University of New South Wales (UNSW)] and at USYD.
  p I've previously interned at #[Link(href="https://www.canva.com/") Canva] in the design automation team (frontend), and #[Link(href="https://akunacapital.com/") Akuna Capital] in the web team (full stack). I've also previously been a project director in the #[Link(href="https://csesoc.unsw.edu.au/") Computer Science and Engineering Society (CSESoc)] at UNSW, where I led a team to build a web-based #[Link(href="https://github.com/csesoc/chaos") hiring management system], among other things.
  p I'm a supporter of Free &amp; Open Source Software (FOSS), Linux, and minimalism where appropriate — both in technology and in life in general.
</template>

<script>
import Link from "@/components/Link.vue";
import Section from "@/components/about/Section.vue";

export default {
  name: "About",
  components: {
    Link,
    Section,
  },
};
</script>
