<template lang="pug">
Section(title="Projects" :animateContent="false" ref="sections")
  section
    a.img(href="https://tracker.zaxu.xyz" target="_blank" rel="noopener")
      img(src="./assets/tracker.webp" alt="Project Showcase")
    .description
      h2
        Link(href="https://tracker.zaxu.xyz") KH Rando Tracker
      p A web-based tracker using #[strong Vue.js] and #[strong TypeScript] for "randomiser" mods for the Kingdom Hearts series video games, #[strong used by thousands of people around the world].
      p Features a "Co-op" mode, synchronising clients using #[strong WebSockets] powered by a #[strong Python] server.
      p Integrates with the #[Link(href="https://obsproject.com/") Open Broadcaster Software (OBS)] to embed a transparent overlay, which can be remotely controlled from a client through WebSockets.
      p Abstracts away a large part of the #[Link(href="https://jsmartee.github.io/kh2fm-hints-demo/info.html#logic") logic] involved in hints for people to easily use them to their advantage, by making as many deducations from the current information as possible.
      p Supports mobile, allowing Twitch streamers to use their phone to control the on-stream tracker without unfocusing the game on their desktop.

      GithubButton(href="https://github.com/zax-xyz/kh-rando-tracker") Source Code

  section
    a.img(href="https://colours.zaxu.xyz" target="_blank" rel="noopener")
      img(src="./assets/colours.webp" alt="Project Showcase")
    .description
      h2
        Link(href="https://colours.zaxu.xyz") Twitch Colours
      p A full-stack web application using #[strong Vue.js], #[strong Django], and #[strong SQLite], integrating with the Twitch OAuth 2.0 flow for user authentiaction.
      p Uses #[strong Celery] and #[strong Redis] to asynchronously handle subroutines to connect to Twitch's IRC servers and run in the background to dynamically change the user's colour after every message.
      p Responsive design to handle both desktop and mobile experiences.

      GithubButton(href="https://github.com/zax-xyz/colours") Source Code

  section
    .img.nohover
      img(src="./assets/marks.webp" alt="Project Showcase")
    .description
      h2 Marks Tracker (WIP)
      p A web application intended for keeping track of university marks, built using #[strong React], #[strong TypeScript], #[strong MobX], and #[strong Tailwind CSS].
      p Generates and displays graphs of marks for each course using #[strong Chart.js].
      p Plans for a Node.js backend to store and sync data, with OAuth-based user authentication.
      p Responsive design for pleasant experiences on both desktop and mobile devices.
</template>

<script>
import GithubButton from "./GithubButton.vue";
import Link from "@/components/Link.vue";
import Section from "@/components/about/Section.vue";

export default {
  name: "Projects",
  components: {
    GithubButton,
    Link,
    Section,
  },
  mounted() {
    this.$refs.sections.$slots.default.forEach(section => {
      this.$refs.sections.scrollReveal(section.elm);
    });
  },
};
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  opacity: 0;
  transform: translateX(150px);
  transition: opacity 1s, transform 0.75s;

  .img {
    grid-column: 1;
    grid-row: 1;
  }

  .description {
    grid-column: 2;
  }

  &:nth-child(even) {
    transform: translateX(-150px);

    .img {
      grid-column: 2;
      grid-row: 1;
    }

    .description {
      grid-column: 1;
    }
  }

  &.visible {
    opacity: 1;
    transform: none;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;

    &:not(:first-child) {
      margin-top: 25px;
    }

    .img {
      grid-column: 1 !important;
      grid-row: 2 !important;
    }

    .description {
      grid-column: 1;
      margin: 0;
    }
  }
}

a {
  text-decoration: none;
}

h2 {
  margin: 0;
  font-size: 1.5em;
  font-weight: 400;
  color: $primary;

  a {
    color: inherit;

    &::v-deep .link-underline line {
      stroke: $primary;
    }

    &:hover {
      color: $primary-alt;
    }
  }
}

.img,
.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 25px;
}

.description {
  gap: 10px;
  text-align: center;

  p {
    margin: 0;
  }
}

.img {
  position: relative;
  border-radius: 4px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;

  &:not(.nohover)::after {
    content: "Visit Website";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    background: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.35s;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }

    &::after {
      opacity: 1;
    }
  }
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 0.35s;
}
</style>
