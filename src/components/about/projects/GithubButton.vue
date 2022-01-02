<template lang="pug">
a.btn
  .glow
  .bg
  GithubIcon.github
  slot
</template>

<script>
import GithubIcon from "./assets/github.svg";

export default {
  name: "GithubButton",
  components: {
    GithubIcon,
  },
};
</script>

<style lang="stylus" scoped>
.btn
  position relative
  display flex
  align-items center
  justify-content center
  width 100%
  max-width 450px
  padding .5em .75em
  margin .5em auto 0
  gap .5ch
  color #111827
  transition color .2s
  z-index 0

  &:hover
    color black

    .glow
      filter blur(8px)

    .bg
      opacity .9

.glow
.bg
  position absolute
  top 0
  right 0
  bottom 0
  left 0
  background linear-gradient(135deg, $primary, $secondary)
  border-radius 2em
  z-index -1

.glow
  filter blur(4px)
  opacity .7
  transition filter .2s

.bg
  opacity .5
  transition opacity .2s

.github
  width 1.5em
  height 1.5em
</style>
