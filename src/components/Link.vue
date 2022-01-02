<template lang="pug">
a
  slot
  svg.link-underline
    line(x1="0" x2="100%")
</template>

<script>
export default {
  name: "Link",
};
</script>

<style lang="scss" scoped>
a {
  position: relative;
  padding-bottom: 2px;
  color: inherit;
  text-decoration: none;
  transition: filter 0.5s;

  &:hover {
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.35));

    line {
      stroke: white;
      stroke-dasharray: 1, 0;
      stroke-dashoffset: -50%;
    }
  }
}

.link-underline {
  position: absolute;
  top: 1.25em;
  left: 0;
  width: 100%;
  height: 2px;

  line {
    stroke: lightgrey;
    stroke-width: 2;
    stroke-dasharray: 2, 4;
    transition: stroke 0.75s, stroke-dasharray 0.75s, stroke-dashoffset 0.75s;
  }
}
</style>
