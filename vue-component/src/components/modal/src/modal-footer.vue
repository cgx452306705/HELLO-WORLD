<template>
<div :class="computedClass">
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    customClass: {
      type: String
    }
  },
  computed: {
    computedClass() {
      const classes = []

      classes.push('am-modal-footer')

      if (this.customClass !== undefined) {
        classes.push(this.customClass)
      }

      return classes.join(' ')
    }
  }
}
</script>
