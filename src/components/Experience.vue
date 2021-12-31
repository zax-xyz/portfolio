<template lang="pug">
div
  h1 Experience

  section
    h2 Canva
      span.title Frontend Software Engineer Intern
      aside
        span.location Sydney, AU
        span.period Dec 2021 – Feb 2022

  section
    h2 Enrich Eduction
      span.title Full Stack Developer
      aside
        span.location Sydney, AU
        span.period Dec 2019 – Feb 2020

    p I was the sole developer at this K-12 tutoring centre.

    ul
      li Created automated web tutoring report system using #[strong Vue.js], #[strong Django REST Framework], and #[strong SQLite with user authentication]
      li Concisely visualised weekly student performance against the rest of their classes with interactive graphs using #[strong Chart.js]
      li Automatically emailed termly summarised reports created with #[strong Matplotlib] and #[strong custom HTML templates] using the #[strong Gmail API]
</template>

<script>
export default {
  name: "Experience",
};
</script>

<style lang="stylus" scoped>
p
  margin .5em 0

ul
  margin 0

h2
  display flex
  margin-bottom .25em
  font-size 1.2em
  font-weight 400
  color #bfdbfe

  .title
  aside
    font-weight 300

  .title::before
  .location::after
    content '|'
    margin 0 .5ch

  aside
    margin-left auto
</style>
