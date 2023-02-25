<template lang="pug">
Section(title="Hi there!")
  p I'm Michael, a fourth year student at the University of Sydney, studying a Bachelor of Computing, and majoring in Computer Science. While I am a university student, I started out as a self-taught developer, programming throughout high school and continuing to work on my own projects.
  p I've gone through a few different areas but my current focus is frontend web development, and creating beautiful and usable interfaces. I wish to bring as much value to others as possible, empowering people and making the world a better place where I can, while trying to improve myself at the same time and learn as much as I can.
  p I want to improve myself not just as a developer but as a person and grow emotionally and mentally.
  p I'm a supporter of Free &amp; Open Source Software (FOSS), Linux, and minimalism where appropriate — both in technology and in life in general.
  p I worked at #[Link(href="https://akunacapital.com/") Akuna Capital] over the 2022-2023 summer as a Software Development Intern in the web team, and #[Link(href="https://www.canva.com/") Canva] over the 2021–2022 summer as a Frontend Software Engineer Intern. I'm also currently a project director in the #[Link(href="https://csesoc.unsw.edu.au/") Computer Science and Engineering Society (CSESoc)] at the University of New South Wales (UNSW), where I'm leading a team to build a web-based #[Link(href="https://github.com/csesoc/chaos") hiring management system] using React and Rust.
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
