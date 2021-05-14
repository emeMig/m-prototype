<template>
  <component
    :is="tag"
    :class="[{ show: isOpen }, `drop${direction}`]"
    @click="toggleDropDown"
    v-click-outside="closeDropDown"
  >
    <slot name="title-container" :is-open="isOpen">
      <component
        :is="titleTag"
        class="btn-rotate"
        :class="[{'dropdown-toggle': hasToggle}, titleClasses]"
        :aria-expanded="isOpen"
        data-toggle="dropdown"
      >
        <slot name="title" :is-open="isOpen">
          <i :class="icon"></i> {{ title }}
        </slot>
      </component>
    </slot>
    <ul
      class="dropdown-menu"
      :class="[
        { show: isOpen },
        { 'dropdown-menu-right': menuOnRight },
        menuClasses
      ]"
    >
      <slot></slot>
    </ul>
  </component>
</template>
<script>
export default {
  name: 'base-dropdown',
  props: {
    tag: {
      type: String,
      default: 'div',

    },
    titleTag: {
      type: String,
      default: 'button',

    },
    title: {
      type: String,

    },
    direction: {
      type: String,
      default: 'down', // up | down

    },
    icon: {
      type: String,

    },
    titleClasses: {
      type: [String, Object, Array],

    },
    menuClasses: {
      type: [String, Object],

    },
    menuOnRight: {
      type: Boolean,

    },
    hasToggle: {
      type: Boolean,

      default: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
      this.$emit('change', this.isOpen);
    },
    closeDropDown() {
      this.isOpen = false;
      this.$emit('change', false);
    }
  }
};
</script>
<style lang="scss" scoped>
.dropdown {
  cursor: pointer;
  user-select: none;
}
</style>
