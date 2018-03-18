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
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    cancelBtnText: {
      type: String,
      default: "确定"
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
