<template>
<modal :isShow.sync="syncIsShow">
  <modal-header></modal-header>
  <modal-body></modal-body>
  <modal-footer></modal-footer>
</modal>
</template>


<script>
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../../modal'

export default {
  data() {
    return {
      syncIsShow: this.isShow
    }
  },
  props: {
    customClass: {
      type: String,
      default: 'am-modal-confirm'
    },
    title: {
      type: String
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    confirmBtnText: {
      type: String,
      default: '确定'
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    isShow: {
      type: Boolean,
      default: false
    },
    closeViaDimmer: {
      type: Boolean,
      default: true
    },
    transition: {
      type: String,
      default: 'scale-up'
    }
  },
  components: {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
  }
}
</script>
