import * as dom from '../until/dom'

let zIndex = 999

export default {
  data() {
    return {
      visible: false,
      overlay: false,
      overlayClassName: 'am-dimmer'
    }
  },
  methods: {
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    },
    getZIndex() {
      zIndex++
      return zIndex
    },
    stopScroll(e) {
      if (e && e.preventDefault) {
        e.preventDefault()
        e.stopPropagation()
      } else {
        e.returnvalue = false
        return false
      }
    },
    resetPopupPosition() {
      if (this.visible && typeof this.popupPosition === 'function') {
        dom.css(this.$el, this.popupPosition())
      }
    }
  },
  watch: {
    visible(curVal, oldVal) {
      this.$nextTick(() => {
        this.resetPopupPosition()
      })
      if (this.overlay) {
        if (curVal) {
          this.$overlay = document.createElement('div')
          dom.addClass(this.$overlay, this.overlayClassName + ' am-active')
          dom.css(this.$overlay, {
            zIndex: this.getZIndex()
          })
          document.body.appendChild(this.$overlay)
          window.addEventListener('mousewheel', this.stopScroll)
        } else {
          setTimeout(() => {
            document.body.removeChild(this.$overlay)
            window.removeEventListener('mousewheel', this.stopScroll)
          }, 300)
        }
      }
    }
  },
  created() {
    window.addEventListener('resize', this.resetPopupPosition, false)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resetPopupPosition)
  }
}