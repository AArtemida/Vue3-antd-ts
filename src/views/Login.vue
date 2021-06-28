<template>
  <div>login</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { login } from '@/api/user'
export default defineComponent({
  mounted() {
    login().then((res: any) => {
      console.log(res)
    })
  },
})
</script>
