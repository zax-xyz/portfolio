<template lang="pug">
Section(title="Extracurricular")
  section
    h2
      span UNSW CSESoc
        span.title Project Team Lead
      aside
        span.location Sydney, AU
        span.period Feb 2022 - Present

    ul
      li Leading a team to build a #[Link(href="https://chaos.csesoc.app") hiring management system] to streamline recruitment processes (applications, interviews, and results)
      li Developing an MVP using #[strong React], #[strong TypeScript], #[strong Tailwind CSS], #[strong Rust], and #[strong PostgreSQL], and designing the UI/UX for various projects
      li Created website for #[Link(href="https://cseso.cc/techspire") TechSpire], a tech conference that quickly sold out 120 tickets and attracted several sponsor companies, with #[strong Next.js]
      li Created content for and presented public workshop teaching JavaScript/React concepts: Promises/async, Fetch API, race conditions, etc
</template>

<script>
import Link from "@/components/Link.vue";
import Section from "@/components/about/Section.vue";

export default {
  name: "Extracurricular",
  components: {
    Link,
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
