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
    let styles = {};

    // eslint-disable-next-line no-restricted-syntax
    for (let padding of props.config) {
      let [size, breakpoint] = padding.split(`@`);
      let name = [`--padding`, breakpoint].filter(x => x).join(`-`);
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
  --padding: 1rem;
  --x-padding-s: var(--padding-s, var(--padding));
  --x-padding-m: var(--padding-m, var(--x-padding-s));
  --x-padding-l: var(--padding-l, var(--x-padding-m));

  padding: var(--padding);

  @media (min-width: 376px) {
    padding: var(--x-padding-s);
  }

  @media (min-width: 768px) {
    padding: var(--x-padding-m);
  }

  @media (min-width: 1024px) {
    padding: var(--x-padding-l);
  }
}
</style>
