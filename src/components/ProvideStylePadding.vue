<template>
  <slot
    :$$padding="{
      class: $style.root,
      styles,
    }"
  />
</template>

<script>
const SPACINGS = {
  xs: `0.5rem`,
  s: `0.75rem`,
  m: `1rem`,
  l: `1.25rem`,
  xl: `1.5rem`,
};

export default {
  name: `ProvideStylePadding`,
  props: {
    config: {
      required: true,
      type: Array,
    },
  },
  setup(props) {
    let styles = { '--padding': SPACINGS.m };

    // eslint-disable-next-line no-restricted-syntax
    for (let padding of props.config) {
      let [size, breakpoint] = padding.split(`@`);
      let name = [`--padding`, breakpoint].filter(x => x).join(`-bp-`);
      styles[name] = SPACINGS[size];
    }

    return {
      styles,
    };
  },
};
</script>

<style lang="scss" module>
.root {
  --padding-bp-s: var(--padding);
  --padding-bp-m: var(--padding-bp-s);
  --padding-bp-l: var(--padding-bp-m);

  padding: var(--padding);

  @media (min-width: 376px) {
    padding: var(--padding-bp-s);
  }

  @media (min-width: 768px) {
    padding: var(--padding-bp-m);
  }

  @media (min-width: 1024px) {
    padding: var(--padding-bp-l);
  }
}
</style>
