<template lang="pug">
main
  .container
    About
    Experience
    Projects
    Contact
</template>

<script>
import About from "@/components/about/About.vue";
import Experience from "@/components/about/Experience.vue";
import Projects from "@/components/about/projects/Projects.vue";
import Contact from "@/components/about/Contact.vue";

export default {
  name: "Home",
  components: {
    About,
    Experience,
    Projects,
    Contact,
  },
};
</script>

<style lang="stylus" scoped>
main
  position relative
  padding 35px
  color white
  line-height 1.5
  font-weight 300
  background $main-bg
  box-shadow 0 0 10px $main-bg
  overflow-x hidden

  @media screen and (max-width 768px)
    padding 25px

.container
  max-width 1200px
  width 100%
  margin 0 auto

>>> h1
  color $primary

>>> a
  color $secondary
  font-weight 400
  transition color .2s, filter .5s

  .link-underline
    line
      stroke $secondary

  &:hover
    color $secondary-alt
    filter none

>>> strong
  font-weight bolder
</style>
