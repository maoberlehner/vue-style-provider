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
  generateComponentProps,
  useStyledProps,
} from '../composables/styled-props';

let cssProperty = `padding`;
let variants = sides;

export default {
  name: `ProvideStylePadding`,
  props: generateComponentProps({
    cssProperty,
    variants,
  }),
  setup(props) {
    let { styles } = useStyledProps({
      cssProperty,
      defaultOption: spacings.m,
      options: spacings,
      props,
      variants,
    });

    return {
      styles,
    };
  },
};
</script>

<style lang="scss" module>
@import '../composables/styled-props';

.root {
  @include use-styled-props('padding');
}
</style>
