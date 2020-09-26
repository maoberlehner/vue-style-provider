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
    <ProvideStyleMargin
      v-slot="{ $$margin }"
      :margin="[`m`, `l@s`, `xl@l`]"
      :margin-top="[`xl@m`]"
    >
      <div
        :class="$$margin.class"
        :style="$$margin.style"
      >
        Hello World
      </div>
    </ProvideStyleMargin>
  </div>
</template>

<script>
import ProvideStyleMargin from './components/ProvideStyleMargin.vue';
import ProvideStylePadding from './components/ProvideStylePadding.vue';

export default {
  name: `App`,
  components: {
    ProvideStyleMargin,
    ProvideStylePadding,
  },
};
</script>
