<template lang="pug">
  .about
    h1 Hi there!

    p I'm Michael, a second year student at the University of Sydney, studying a Bachelor of Computing, and majoring in Computer Science. Despite being a university student, I'm a largely self-taught developer, programming throughout high school and continuing to work on my own projects.
    p I've gone through a few different areas but my current focus is frontend web development, and creating beautiful and usable interfaces. I wish to bring as much value to others as possible, empowering people and making the world a better place where I can, while trying to improve myself at the same time and learn as much as I can.
    p I want to improve myself not just as a developer but as a person and grow emotionally and mentally.
    p I'm a supporter of Free &amp; Open Source Software (FOSS), Linux, and minimalism where appropriate — both in technology and in life in general.
    p I'm going to be joining #[Link(href="https://www.canva.com/") Canva] this 2021–2022 summer as a Frontend Software Engineer Intern! :)
</template>

<script>
import Link from "./Link.vue";

export default {
  name: "About",
  components: {
    Link,
  },
};
</script>
