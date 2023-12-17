<template lang="pug">
Section(title="Contact")
  p You can email me at #[Link(href="mailto:michael@zaxu.xyz") michael@zaxu.xyz] for personal enquires or #[Link(href="mailto:zax@zaxu.xyz") zax@zaxu.xyz] for less personal enquires, or find me on GitHub #[Link(href="https://github.com/zax-xyz") here].
</template>

<script>
import Link from "@/components/Link.vue";
import Section from "@/components/about/Section.vue";

export default {
  name: "Contact",
  components: {
    Link,
    Section,
  },
};
</script>
