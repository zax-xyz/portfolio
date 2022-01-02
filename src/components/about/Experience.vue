<template lang="pug">
Section(title="Experience")
  section
    h2
      span Canva
        span.title Frontend Software Engineer Intern
      aside
        span.location Sydney, AU
        span.period Dec 2021 – Feb 2022

  section
    h2
      span Enrich Eduction
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
import Section from "@/components/about/Section.vue";

export default {
  name: "Experience",
  components: {
    Section,
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 0.5em 0;
}

ul {
  margin: 0;
}

h2 {
  display: flex;
  margin-bottom: 0.25em;
  font-size: 1.2em;
  font-weight: 400;
  color: $secondary;

  .title,
  aside {
    font-weight: 300;
  }

  .title::before,
  .location::after {
    content: "|";
    margin: 0 0.5ch;
  }

  aside {
    margin-left: auto;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    aside {
      font-size: 0.8em;
    }

    .title {
      font-size: 0.8em;
    }
  }
}
</style>
