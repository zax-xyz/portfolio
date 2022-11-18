<template lang="pug">
main
  .container
    About
    Experience
    Extracurricular
    Projects
    Contact
</template>

<script>
import About from "@/components/about/About.vue";
import Experience from "@/components/about/Experience.vue";
import Extracurricular from "@/components/about/Extracurricular.vue";
import Projects from "@/components/about/projects/Projects.vue";
import Contact from "@/components/about/Contact.vue";

export default {
  name: "Home",
  components: {
    About,
    Experience,
    Extracurricular,
    Projects,
    Contact,
  },
};
</script>

<style lang="scss" scoped>
main {
  position: relative;
  padding: 35px;
  color: white;
  line-height: 1.5;
  font-weight: 300;
  background: $main-bg;
  box-shadow: 0 0 10px $main-bg;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    padding: 25px;
  }
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

::v-deep h1 {
  color: $primary;
}

::v-deep a {
  color: $secondary;
  font-weight: 400;
  transition: color 0.2s, filter 0.5s;

  .link-underline line {
    stroke: $secondary;
  }

  &:hover {
    color: $secondary-alt;
    filter: none;
  }
}

::v-deep strong {
  font-weight: bolder;
}
</style>
