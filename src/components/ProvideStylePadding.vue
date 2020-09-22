<template>
  <slot
    :$$padding="{
      class: $style.root,
      styles,
    }"
  />
</template>

<script>
import {
  sides,
  spacings,
} from '../style.config.json';
import {
  capitalizeFirstLetter,
} from '../utils/capitalize-first-letter';

const componentProps = {};

// eslint-disable-next-line no-restricted-syntax
for (let side of [``, ...sides]) {
  componentProps[`padding${capitalizeFirstLetter(side)}`] = {
    default: null,
    type: Array,
  };
}

export default {
  name: `ProvideStylePadding`,
  props: componentProps,
  setup(props) {
    let styles = { '--padding': spacings.m };

    // eslint-disable-next-line no-restricted-syntax
    for (let side of [``, ...sides]) {
      // eslint-disable-next-line no-restricted-syntax
      for (let padding of props[`padding${capitalizeFirstLetter(side)}`] || []) {
        let [size, breakpoint] = padding.split(`@`);
        let name = [`--padding${side && `-${side}`}`, breakpoint].filter(x => x).join(`-bp-`);
        styles[name] = spacings[size];
      }
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
