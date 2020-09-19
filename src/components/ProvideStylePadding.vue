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
    padding: {
      default: null,
      type: Array,
    },
    paddingTop: {
      default: null,
      type: Array,
    },
    paddingRight: {
      default: null,
      type: Array,
    },
    paddingBottom: {
      default: null,
      type: Array,
    },
    paddingLeft: {
      default: null,
      type: Array,
    },
  },
  setup(props) {
    let styles = { '--padding': SPACINGS.m };

    // eslint-disable-next-line no-restricted-syntax
    for (let padding of props.padding || []) {
      let [size, breakpoint] = padding.split(`@`);
      let name = [`--padding`, breakpoint].filter(x => x).join(`-bp-`);
      styles[name] = SPACINGS[size];
    }

    // eslint-disable-next-line no-restricted-syntax
    for (let paddingTop of props.paddingTop || []) {
      let [size, breakpoint] = paddingTop.split(`@`);
      let name = [`--padding-top`, breakpoint].filter(x => x).join(`-bp-`);
      styles[name] = SPACINGS[size];
    }

    // eslint-disable-next-line no-restricted-syntax
    for (let paddingRight of props.paddingRight || []) {
      let [size, breakpoint] = paddingRight.split(`@`);
      let name = [`--padding-right`, breakpoint].filter(x => x).join(`-bp-`);
      styles[name] = SPACINGS[size];
    }

    // eslint-disable-next-line no-restricted-syntax
    for (let paddingBottom of props.paddingBottom || []) {
      let [size, breakpoint] = paddingBottom.split(`@`);
      let name = [`--padding-bottom`, breakpoint].filter(x => x).join(`-bp-`);
      styles[name] = SPACINGS[size];
    }

    // eslint-disable-next-line no-restricted-syntax
    for (let paddingLeft of props.paddingLeft || []) {
      let [size, breakpoint] = paddingLeft.split(`@`);
      let name = [`--padding-left`, breakpoint].filter(x => x).join(`-bp-`);
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

  padding:
    var(--padding-top, var(--padding))
    var(--padding-right, var(--padding))
    var(--padding-bottom, var(--padding))
    var(--padding-left, var(--padding));

  --x-padding-bp-s:
    var(--padding-top-bp-s, var(--padding-top, var(--padding-bp-s)))
    var(--padding-right-bp-s, var(--padding-right, var(--padding-bp-s)))
    var(--padding-bottom-bp-s, var(--padding-bottom, var(--padding-bp-s)))
    var(--padding-left-bp-s, var(--padding-left, var(--padding-bp-s)));

  @media (min-width: 376px) {
    padding: var(--x-padding-bp-s);
  }

  --x-padding-bp-m:
    var(--padding-top-bp-m, var(--padding-top-bp-s, var(--padding-bp-m)))
    var(--padding-right-bp-m, var(--padding-right-bp-s, var(--padding-bp-m)))
    var(--padding-bottom-bp-m, var(--padding-bottom-bp-s, var(--padding-bp-m)))
    var(--padding-left-bp-m, var(--padding-left-bp-s, var(--padding-bp-m)));

  @media (min-width: 768px) {
    padding: var(--x-padding-bp-m);
  }

  --x-padding-bp-l:
    var(--padding-top-bp-l, var(--padding-top-bp-m, var(--padding-bp-l)))
    var(--padding-right-bp-l, var(--padding-right-bp-m, var(--padding-bp-l)))
    var(--padding-bottom-bp-l, var(--padding-bottom-bp-m, var(--padding-bp-l)))
    var(--padding-left-bp-l, var(--padding-left-bp-m, var(--padding-bp-l)));

  @media (min-width: 1024px) {
    padding: var(--x-padding-bp-l)
  }
}
</style>
