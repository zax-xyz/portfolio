<template lang="pug">
.main
  .wrapper
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
.main
  position relative
  padding 35px
  color white
  line-height 1.5
  font-weight 300
  background hsl(210, 5%, 9%)
  background #18181b66
  background transparent
  overflow-x hidden

.wrapper
  max-width 1200px
  width 100%
  margin 0 auto

>>> h1
  // color hsl(210, 60%, 46%)
  color #60a5fa
  color #93c5fd
  color #fdba74
  color #fbcfe8

$link-color = #93c5fd
$link-hover-color = #bfdbfe

>>> a
  color $link-color
  font-weight 400
  transition color .2s, filter .5s

  .link-underline
    line
      stroke $link-color

  &:hover
    color $link-hover-color
    filter none
</style>
