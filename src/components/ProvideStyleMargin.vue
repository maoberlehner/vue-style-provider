<template>
  <slot
    :$$margin="{
      class: $style.root,
      style,
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

let cssProperty = `margin`;
let variants = sides;

export default {
  name: `ProvideStyleMargin`,
  props: generateComponentProps({
    cssProperty,
    variants,
  }),
  setup(props) {
    let { style } = useStyledProps({
      cssProperty,
      defaultOption: spacings.m,
      options: spacings,
      props,
      variants,
    });

    return {
      style,
    };
  },
};
</script>

<style lang="scss" module>
@import '../composables/styled-props';

.root {
  @include use-styled-props('margin');
}
</style>
