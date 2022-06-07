<template lang="pug">
Section(title="Experience")
  section
    h2
      span UNSW Computer Science and Engineering Society (CSESoc)
        span.title Projects Subcommittee Member
      aside
        span.location Sydney, AU
        span.period Feb 2022 - Present

    ul
      li Working in a team on the #[strong React] frontend for an in-house hiring management system that will streamline subcommittee recruitment
      li Developing an MVP for the initial release, and designing the UI/UX for the next version of the website's frontend based on user requirements


  section
    h2
      span Canva
        span.title Frontend Software Engineer Intern
      aside
        span.location Sydney, AU
        span.period Dec 2021 – Feb 2022

    ul
      li Developed an internal tool to facilitate the efficient evaluation of an algorithm and improve workflows, using #[strong React], #[strong TypeScript], and #[strong MobX]
      li Significantly improved testing processes with a new pipeline to improve developer productivity and reduce friction (83% reduction in steps)
      li Analysed data using #[strong SQL] and #[strong Python] to extract user insights in order to guide development decisions

  section
    h2
      span Enrich Education
        span.title Full Stack Developer
      aside
        span.location Sydney, AU
        span.period Dec 2019 – Feb 2020

    p I was the sole developer at this K-12 tutoring centre.

    ul
      li Created automated web tutoring report system using #[strong Vue.js], #[strong Django REST Framework], and #[strong SQLite]
      li Concisely visualised weekly student performance against the rest of their classes with interactive graphs using #[strong Chart.js]
      li Automatically emailed summarised reports created with #[strong Matplotlib] and at the end of each term to parents of each student using the #[strong Gmail API]
      li Significantly improved internal processes for efficiency, accuracy, and reliability, improving satisfaction of both staff and customers
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
    color: $primary;
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
