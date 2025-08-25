<script  lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
import {startProps} from "./types"

export default defineComponent({
  name: 'ElStart',
  emits: ['checked'],
  props: startProps,
  setup(props, { emit }) {
    const mytempscore = ref<number>(0)
    const myscore = ref<number>(0)

    const handleMouseEnter = (item: any) => {
      if (!props.disabled) {
        mytempscore.value = item
      }
      return null
    }

    const restoreScore = () => {
      if (!props.disabled) {
        mytempscore.value = myscore.value
      }
      return null
    }

    const handlechecked = (item: any) => {
      if (!props.disabled) {
        mytempscore.value = item
        myscore.value = item
        emit('checked', item)
      }

    }


    onMounted(() => {
      mytempscore.value = props.value
      myscore.value = props.value
    })
    return {
      mytempscore,
      myscore,

      handleMouseEnter,
      handlechecked,
      restoreScore,

      props
    }
  }
})

</script>

<template>
  <div style="display:flex;align-items: center;">
    <div v-for="item in maxValue" :key="item" class="iconfont  star-item star-placeholder"
      @mouseenter="handleMouseEnter(item)" @mouseleave="restoreScore" @mousedown="handlechecked(item)">
      <div class="iconfont  " :style="{ color: props.activeColor}" v-if="item > mytempscore">
          <z-icon icon="star"></z-icon>
      </div>
      <div class="iconfont icon-icon-test7" :style="{ color: props.activeColor }" v-else>
        <z-icon icon="star_filled"></z-icon>
      </div>
    </div>
    <span>
      {{ mytempscore }}
    </span>
  </div>
</template>

<style scoped>
.iconfont {
  font-size: 24px;
  cursor: pointer;
}

.star-item {
  margin: 0 3px
}
</style>