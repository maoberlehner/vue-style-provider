<template>
  <div>
    <ProvideStylePadding
      v-slot="{ $$padding }"
      :config="[`m`, `l@s`, `xl@l`]"
    >
      <div
        :class="$$padding.class"
        :style="$$padding.styles"
      >
        Hello World
      </div>
    </ProvideStylePadding>
  </div>
</template>

<script>
import ProvideStylePadding from './components/ProvideStylePadding.vue';

export default {
  name: `App`,
  components: {
    ProvideStylePadding,
  },
};
</script>
