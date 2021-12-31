<template lang="pug">
a(:href="href" :target="target")
  slot
  svg.link-underline
    line(x1="0" x2="100%")
</template>

<script>
export default {
  name: "Link",

  props: {
    href: {
      type: String,
      required: true,
    },
    target: {
      type: String,
    },
  },
};
</script>

<style lang="stylus" scoped>
a
  position relative
  padding-bottom 2px
  color inherit
  text-decoration none
  transition filter .5s

  .link-underline
    position absolute
    top 1.3em
    left 0
    width 100%
    height 2px

    line
      stroke lightgrey
      stroke-width 2
      stroke-dasharray 2, 4
      transition stroke .75s, stroke-dasharray .75s, stroke-dashoffset .75s

  &:hover
    filter drop-shadow(0 0 10px rgba(255, 255, 255, .35))

    line
      stroke white
      stroke-dasharray 1, 0
      stroke-dashoffset -50%
</style>
