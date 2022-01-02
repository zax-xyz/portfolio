<template lang="pug">
div(style="line-height: 0")
  .outer-container
    // prettier-ignore
    .capture-mouse(v-scroll-to=`{
      el: 'main',
      duration: 1500,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }`)
    .container
      .arrow
      .arrow.small
</template>

<script>
export default {
  name: "Arrow",
};
</script>

<style lang="scss" scoped>
.outer-container {
  position: relative;
  animation: bob 5s 1s infinite;
}

.container {
  display: inline-block;
  position: relative;
  margin-top: 25px;
  filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.35));
  transform: rotate(45deg);
  pointer-events: none;

  * {
    transition: filter 0.5s;
  }
}

.arrow {
  display: inline-block;
  position: relative;
  padding: 8px;
  border-style: solid;
  border-width: 0 1px 1px 0;

  &.small {
    position: absolute;
    top: 7px;
    left: 7px;
    padding: 6px;
    color: rgba(255, 255, 255, 0.65);
  }
}

@keyframes bob {
  50% {
    transform: translateY(7px);
  }
}

.capture-mouse {
  display: block;
  position: absolute;
  padding: 35px 250px;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 80%);
  cursor: pointer;

  &:hover + .container * {
    filter: drop-shadow(0 0 12px white);
  }
}
</style>
