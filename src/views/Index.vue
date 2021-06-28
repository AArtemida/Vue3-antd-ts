<template>
  <div class="index">index</div>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
export default defineComponent({
  components: {
    HelloWorld
  }
})
</script>

<style lang="scss" scoped>
.index {
  color: $primary;
}
</style>