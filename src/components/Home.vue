<template lang="pug">
#home
  .bg-fallback
  .bg
  .container
    transition(name="fade-down" appear)
      h1 Michael
        |
        |
        span Vo
    .flex
      transition(name="zoom" appear)
        .major
          strong Frontend Software Engineer
          br
          strong Computer Science
          |
          | Major
      transition(name="slide-right" appear)
        .degree
          | Bachelor of Computing
          br
          .university
            | University of Sydney
            |
            span - Dean's List

    transition(name="fade-up" appear)
      div
        ul
          li(v-for="link in links")
            Link(:href="link.ref" target="_blank") {{ link.name }}

        Arrow
</template>

<script>
import Arrow from "./Arrow.vue";
import Link from "./Link.vue";

export default {
  name: "Home",

  components: {
    Arrow,
    Link,
  },

  data() {
    return {
      links: [
        {
          name: "GitHub",
          ref: "https://github.com/zaxutic",
        },
        {
          name: "Resume/CV",
          ref: "/resume.pdf",
        },
        {
          name: "LinkedIn",
          ref: "https://www.linkedin.com/in/michael-vo-1049841a3/",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
$easing-curve = cubic-bezier(.4, .06, .2, .9)

strong
  font-weight bolder

#home
  display flex
  align-items center
  justify-content center
  min-height 100vh
  color white
  font-size 18px
  font-weight 300
  text-align center
  line-height 1.35

.bg-fallback
.bg
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  z-index -1

.bg-fallback
  background-color #121212

.bg
  background-image url('../assets/bg.jpeg')
  background-position center
  background-size cover
  background-repeat no-repeat
  filter grayscale(.25) brightness(.75)
  animation fade-in 2s $easing-curve, hue-shift 10s 1s infinite, zoom 5s 2s infinite

@keyframes fade-in
  from
    opacity 0
    transform scale(1.75)

@keyframes hue-shift
  50%
    filter grayscale(.25) brightness(.5) hue-rotate(180deg)

@keyframes zoom
  50%
    transform scale(1.15)

.container
  max-width 1000px
  width 100%
  padding 0 25px
  perspective 1000px
  // filter drop-shadow(4px 4px 6px rgba(0, 0, 0, .35))
  text-shadow 4px 4px 8px rgba(0, 0, 0, .35)

// .fade-slide-down-enter-active
// transition opacity 1.5s, transform 1.5s

// .fade-slide-down-enter
// opacity 0
// // transform translateY(-20px)
.fade-down-enter-active
  transition opacity 1s $easing-curve, transform 1s $easing-curve
  transition-delay 1.25s

.fade-down-enter
  opacity 0
  transform translateY(-25px)

h1
  margin-top 0
  font-size 3.5em
  font-weight 300
  letter-spacing .02em

  span
    font-weight 100

.flex
  display flex
  perspective 1000px

.major
  align-self center
  justify-content center
  flex 2
  font-size 1.35em
  letter-spacing .016em

.degree
  flex 1
  border-left 1px solid
  padding-left 15px

.university
  display flex
  align-items center
  justify-content center
  white-space break-spaces

  span
    color #bbb
    font-size .8em

.zoom-enter-active
  transition opacity 2s $easing-curve, transform 2s $easing-curve
  transition-delay .5s

.zoom-enter
  opacity 0
  transform translateZ(325px)

.slide-right-enter-active
  transition opacity 2s $easing-curve, transform 2s $easing-curve
  transition-delay .8s

.slide-right-enter
  opacity 0
  transform translateX(-200px)

.fade-up-enter-active
  transition opacity 1s $easing-curve, transform 1s $easing-curve
  transition-delay 1.75s

  >>> line
    stroke-dasharray 1, 0 !important
    stroke-dashoffset -50% !important

.fade-up-enter
  opacity 0
  transform translateY(20px)

ul
  padding-left 0
  margin-bottom 0
  list-style none
  font-size 1.2em

li
  display inline

  &:not(:last-child)::after
    content ' | '
</style>
