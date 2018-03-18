<template>
<button type="button" :class="computedClass" @click="clickHandle">&times;</button>
</template>

<script>
export default {
  name: 'am-close',
  props: {
    customClass: {
      type: String
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedClass() {
      const classes = []

      classes.push('am-close')

      if (this.border) {
        classes.push('am-close-alt')
      }

      if (this.customClass !== undefined) {
        classes.push(this.customClass)
      }

      return classes.join(' ')
    }
  },
  methods: {
    clickHandle(e) {
      this.$emit('click', e)
    }
  }
}
</script>
