<template>
  <div>
    <ProvideStylePadding
      v-slot="{ $$padding }"
      :padding="[`m`, `l@s`, `xl@l`]"
      :padding-top="[`xl@m`]"
    >
      <div
        :class="$$padding.class"
        :style="$$padding.style"
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
