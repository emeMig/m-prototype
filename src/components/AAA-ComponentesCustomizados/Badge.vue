<template>
  <b-badge
    :variant="type"
    :pill="rounded"
    :size="size"
    :class="{'badge-circle': circle }">
    <slot>
      <i v-if="icon" :class="icon"></i>
    </slot>
  </b-badge>
</template>
<script>
  export default {
    name: "badge",
    props: {
      tag: {
        type: String,
        default: "span",

      },
      rounded: {
        type: Boolean,
        default: false,

      },
      circle: {
        type: Boolean,
        default: false,

      },
      icon: {
        type: String,
        default: "",

      },
      type: {
        type: String,
        default: "default",

      },
      size: {
        type: String,
        description: 'Badge size (md, lg)',
        default: ''
      }
    }
  };
</script>
<style>
</style>
