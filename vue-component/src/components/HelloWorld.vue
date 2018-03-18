<template>
<div>
  <animation type="scale-up" iterationCount="infinite" :duration="1">wocao</animation>

  <div>
    <div @click="lockerHandle">locker</div>
    <locker :isShow.sync="lockerVisible" placement="left">
      <p style="text-align:center;line-height:2">
        <strong style="margin-bottom: 10px;display:inline-block">让泪化作相思雨</strong>
        <br>这是一片很寂寞的天'
        <br>下着有些伤心的雨
        <br>这是一个很在乎的我
        <br>和一个无所谓的结局
        <br>曾经为了爱而努力'
        <br>曾经为了爱而逃避
        <br>逃避那熟悉的往事'
        <br>逃避那陌生的你
        <br>这是一片很寂寞的天'
        <br>下着有些伤心的雨
        <br>这是一个很在乎的我
        <br>和一个无所谓的结局
        <br>再也不知道你的消息'
        <br>再也不知道你的秘密
        <br>只有那熟悉的往事'
        <br>只有那陌生的你
        <br>在那些黑色和白色的梦里
        <br>不再有蓝色和紫色的记忆
        <br>在这个相聚又分手的年纪
        <br>总有些雨打风吹的痕迹
        <br>为了那苍白的爱情的继续
        <br>为了那得到又失去的美丽
        <br>就让这擦干又流出的泪水
        <br>化作漫天相思的雨
        <br>为了那苍白的爱情的继续
        <br>为了那得到又失去的美丽
        <br>就让这擦干又流出的泪水
        <br>化作漫天相思的雨
      </p>
    </locker>
  </div>

  <div style="margin-top:40px">
    <button @click="showModal">showModal</button>
    <modal :isShow.sync="modalVisible">
      <modal-header>标题</modal-header>
      <modal-body>
        <h1>Modal 内容</h1>
      </modal-body>
      <modal-footer>
        footer
      </modal-footer>
    </modal>
  </div>

  <div style="margin-top:40px">
    <button @click="showConfirm">showConfirm</button>
    <confirm :isShow.sync="confirmVisible">
      1
    </confirm>
  </div>

</div>
</template>

<script>
import {
  Animation
} from '@/components/animation'

import {
  Locker
} from '@/components/locker'

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '@/components/modal'

import {
  Confirm
} from '@/components/Confirm'


export default {
  data() {
    return {
      lockerVisible: false,
      modalVisible: false,
      confirmVisible: false
    }
  },
  methods: {
    lockerHandle() {
      this.lockerVisible = !this.lockerVisible
    },
    showModal() {
      this.modalVisible = true
    },
    showConfirm() {
      this.confirmVisible = true
    }
  },
  components: {
    Animation,
    Locker,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Confirm
  }
}
</script>
