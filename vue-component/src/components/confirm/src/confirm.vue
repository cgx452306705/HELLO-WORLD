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
  components: {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
  }
}
</script>
