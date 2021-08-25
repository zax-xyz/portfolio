<template lang="pug">
  div
    h1 Projects

    .projects
      .cell.img
        img(
          src="/img/tracker.png"
          alt="Project Showcase"
        )
      .cell.description
        h2
          Link(href="https://tracker.zaxu.xyz") KH Rando Tracker
        p A web-based tracker using #[strong Vue.js] and #[strong TypeScript] for popular "randomiser" mods for the Kingdom Hearts series video games, #[strong used by thousands of people around the world].
        p Features a "Co-op" mode, synchronising clients using #[strong WebSockets] powered by a #[strong Python] server.
        p Integrates with the #[Link(href="https://obsproject.com/") Open Broadcaster Software (OBS)] to embed a transparent overlay, which can be remotely controlled from a client through WebSockets.
        //- p Helps people keep track of their progress with the items they've obtained and worlds they've visited/completed.
        p Abstracts away a large part of the #[Link(href="https://jsmartee.github.io/kh2fm-hints-demo/info.html#logic") logic] involved in hints for people to easily use them to their advantage, by making as many deducations from the current information as possible.
        //- p Only tracker for the randomiser that manages to convey as much information as it does in such a compact space while still being aesthetically pleasing.
        p Supports mobile, allowing Twitch streamers to use their phone to control the on-stream tracker without unfocusing the game on their desktop.
        
        a.github(href="https://github.com/zaxutic/kh-rando-tracker") Source Code
</template>

<script>
import Link from "./Link.vue";

export default {
  name: "Projects",
  components: {
    Link,
  },
};
</script>

<style lang="stylus" scoped>
.projects
  display grid
  grid-template-columns repeat(2, minmax(0, 1fr))

a
  text-decoration none

  &.github
    display flex
    justify-content center
    gap .5ch
    color white
    padding .5em .75em
    border-radius 2em
    background-color hsl(0, 0, 15%)
    box-shadow 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06)
    transition background-color .2s, color .2s, box-shadow .2s

    &:hover
      background-color hsl(0, 0, 20%)
      box-shadow 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05)

    &::before
      content ''
      display block
      width 1.5em
      height 1.5em
      background-image url('/img/github.svg')
      background-size cover
      filter invert(1)

h2
  margin 0
  font-size 1.5em
  font-weight 400
  color $link-color

.cell
  display flex
  flex-direction column
  justify-content center
  gap 10px
  margin 25px
  text-align center

  p
    margin 0

  &.img
    position relative
    border-radius 4px
    box-shadow 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04)
    overflow hidden

    &::after
      content 'Visit Website'
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      display flex
      align-items center
      justify-content center
      font-weight 600
      background rgba(0, 0, 0, .8)
      cursor pointer
      opacity 0
      transition opacity .35s

    &:hover
      img
        transform scale(1.1)

      &::after
        opacity 1

img
  width 100%
  transition transform .35s
</style>
