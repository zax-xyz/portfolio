<template lang="pug">
div
  h1(ref="h1") {{ title }}
  .content(ref="content" :class="{ animate: animateContent }")
    slot
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    animateContent: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    scrollReveal(ref) {
      this.$scrollmagic.addScene(
        this.$scrollmagic
          .scene({
            triggerElement: ref,
            offset: -(window.innerHeight / 2),
          })
          .setClassToggle(ref, "visible"),
      );
    },
  },

  mounted() {
    this.scrollReveal(this.$refs.h1);

    if (this.$props.animateContent) {
      this.scrollReveal(this.$refs.content);
    }
  },
};
</script>

<style lang="stylus" scoped>
h1
.content.animate
  opacity 0
  transition opacity 1s, transform .75s

  &.visible
    opacity 1
    transform none

h1
  transform translateX(-150px)

.content.animate
  transform translateX(150px)
</style>
