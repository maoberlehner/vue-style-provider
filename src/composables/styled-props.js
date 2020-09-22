import {
  computed,
} from 'vue';

import {
  capitalizeFirstLetter,
} from '../utils/capitalize-first-letter';

const RESPONSIVE_SUFFIX_SEPARATOR = `@`;
const VARIABLE_BREAKPOINT_SEPARATOR = `-bp-`;

export function generateComponentProps({
  cssProperty,
  variants,
}) {
  let componentProps = {};

  // eslint-disable-next-line no-restricted-syntax
  for (let variant of [``, ...variants]) {
    componentProps[`${cssProperty}${capitalizeFirstLetter(variant)}`] = {
      default: null,
      type: Array,
    };
  }

  return componentProps;
}

export function useStyledProps({
  cssProperty,
  defaultOption,
  options,
  props,
  variants,
}) {
  let styles = computed(() => {
    let stylesObject = { [`--${cssProperty}`]: defaultOption };

    // eslint-disable-next-line no-restricted-syntax
    for (let variant of [``, ...variants]) {
      // eslint-disable-next-line no-restricted-syntax
      for (let propertyValue of props[`${cssProperty}${capitalizeFirstLetter(variant)}`] || []) {
        let [option, breakpoint] = propertyValue.split(RESPONSIVE_SUFFIX_SEPARATOR);
        let name = [`--${cssProperty}${variant && `-${variant}`}`, breakpoint]
          .filter(x => x)
          .join(VARIABLE_BREAKPOINT_SEPARATOR);

        stylesObject[name] = options[option];
      }
    }

    return stylesObject;
  });

  return {
    styles,
  };
}
