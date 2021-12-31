<template lang="pug">
div
  h1(ref="h1") {{ title }}
  .content(ref="content")
    slot
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },

  mounted() {
    [this.$refs.h1, this.$refs.content].forEach(ref => {
      this.$scrollmagic.addScene(
        this.$scrollmagic
          .scene({
            triggerElement: ref,
            offset: -(window.innerHeight / 2),
          })
          .setClassToggle(ref, "visible"),
      );
    });
  },
};
</script>

<style lang="stylus" scoped>
h1
.content
  opacity 0
  transition opacity .75s, transform .75s

  &.visible
    opacity 1
    transform none

h1
  transform translateX(50%)

.content
  transform translateX(-50%)
</style>
