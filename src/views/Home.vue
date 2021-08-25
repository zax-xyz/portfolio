<template lang="pug">
  .main
    .wrapper
      About
      Experience
      Projects
</template>

<script>
import About from "@/components/About.vue";
import Experience from "@/components/Experience.vue";
import Projects from "@/components/Projects.vue";

export default {
  name: "Home",
  components: {
    About,
    Experience,
    Projects,
  },
};
</script>

<style lang="stylus" scoped>
.main
  padding 35px
  color white
  line-height 1.5
  font-weight 300
  background hsl(210, 2%, 9%)

.wrapper
  max-width 1200px
  width 100%
  margin 0 auto

>>> h1
  // color hsl(210, 60%, 46%)
  color #60A5FA
  color #93C5FD
  color #FDBA74

$link-color = #93C5FD
$link-hover-color = #60A5FA

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
