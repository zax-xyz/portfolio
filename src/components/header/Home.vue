<template lang="pug">
header
  .bg-fallback
  #bgContainer
    .bg
  article#headerContent
    transition(name="fade-down" appear)
      h1 Michael
        |
        |
        span Vo
    .flex
      transition(name="zoom" appear)
        .major
          strong Software Engineer
          br
          strong Computer Science
          |
          | Major
      transition(name="slide-right" appear)
        aside.degree Bachelor of Advanced Computing
          .university University of Sydney
            |
            |
            span - Dean's List

    transition(name="fade-up" appear)
      div
        ul
          li(v-for="link in links")
            Link(:href="link.ref" target="_blank" rel="noopener") {{ link.name }}

        Arrow
</template>

<script>
import Arrow from "./Arrow.vue";
import Link from "@/components/Link.vue";

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
          ref: "https://github.com/zax-xyz",
        },
        {
          name: "Resume/CV",
          ref: require("./assets/resume.pdf"),
        },
        {
          name: "LinkedIn",
          ref: "https://www.linkedin.com/in/michael--vo/",
        },
      ],
    };
  },

  mounted() {
    const scene = this.$scrollmagic
      .scene({
        offset: 0,
        duration: window.innerHeight,
      })
      .setTween("#headerContent", {
        css: {
          scale: 0.75,
          opacity: 0,
        },
      });

    const scene2 = this.$scrollmagic
      .scene({
        offset: 0,
        duration: window.innerHeight,
      })
      .setTween("#bgContainer", {
        css: { scale: 2.5 },
      });

    this.$scrollmagic.addScene(scene);
    this.$scrollmagic.addScene(scene2);
  },
};
</script>

<style lang="scss" scoped>
$easing-curve: cubic-bezier(0.4, 0.06, 0.2, 0.9);

strong {
  font-weight: bolder;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: white;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  line-height: 1.35;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
}

.bg-fallback,
#bgContainer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}

.bg-fallback {
  background-color: #121212;
}

.bg {
  width: 100%;
  height: 100%;
  background-image: url("./assets/bg.jpeg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  filter: grayscale(0.25) brightness(0.5) hue-rotate(180deg);
  animation:
    fade-in 3s $easing-curve,
    hue-shift 10s 2s infinite,
    zoom 5s 3s infinite;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(1.75);
  }
}

@keyframes hue-shift {
  50% {
    filter: grayscale(0.5) brightness(0.5) hue-rotate(310deg);
  }
}

@keyframes zoom {
  50% {
    transform: scale(1.15);
  }
}

article {
  position: fixed;
  max-width: 1000px;
  width: 100%;
  padding: 0 25px;
  perspective: 1000px;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.35);
}

.fade-down-enter-active {
  transition:
    opacity 1s $easing-curve,
    transform 1s $easing-curve;
  transition-delay: 1.25s;
}

.fade-down-enter {
  opacity: 0;
  transform: translateY(-25px);
}

h1 {
  margin-top: 0;
  font-size: 3.5em;
  font-weight: 300;
  letter-spacing: 0.02em;

  span {
    font-weight: 100;
  }
}

.flex {
  display: flex;
  perspective: 1000px;

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .degree {
      border-left: 0;
      margin-top: 0.5em;
    }
  }
}

.major {
  align-self: center;
  justify-content: center;
  flex: 2;
  font-size: 1.35em;
  letter-spacing: 0.016em;
}

.degree {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  border-left: 1px solid;
  padding-left: 15px;
}

.university {
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: break-spaces;

  span {
    color: #bbb;
    font-size: 0.8em;
  }
}

.zoom-enter-active {
  transition:
    opacity 2s $easing-curve,
    transform 2s $easing-curve;
  transition-delay: 0.5s;
}

.zoom-enter {
  opacity: 0;
  transform: translateZ(325px);
}

.slide-right-enter-active {
  transition:
    opacity 2s $easing-curve,
    transform 2s $easing-curve;
  transition-delay: 0.8s;
}

.slide-right-enter {
  opacity: 0;
  transform: translateX(-200px);
}

.fade-up-enter-active {
  transition:
    opacity 1s $easing-curve,
    transform 1s $easing-curve;
  transition-delay: 1.75s;

  &::v-deep line {
    stroke-dasharray: 1, 0 !important;
    stroke-dashoffset: -50% !important;
  }
}

.fade-up-enter {
  opacity: 0;
  transform: translateY(20px);
}

ul {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  font-size: 1.2em;
}

li {
  display: inline;

  &:not(:last-child)::after {
    content: " | ";
  }
}
</style>
