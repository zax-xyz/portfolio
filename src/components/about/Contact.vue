<template lang="pug">
div
  h1 Contact

  section
    p You can email me at #[Link(href="mailto:michael@zaxu.xyz") michael@zaxu.xyz] for personal enquires or #[Link(href="mailto:zax@zaxu.xyz") zax@zaxu.xyz] for less personal enquires, or find me on GitHub #[Link(href="https://github.com/zaxutic") here].
</template>

<script>
import Link from "@/components/Link.vue";

export default {
  name: "Contact",
  components: {
    Link,
  },
};
</script>

<style lang="stylus" scoped></style>
