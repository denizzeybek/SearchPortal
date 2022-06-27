<template>
  <div class="home">
    <search-container/>
  </div>
</template>

<script>
import SearchContainer from '@/containers/SearchContainer.vue'

export default {
  name: 'HomeView',
  components: {
    SearchContainer
  }
}
</script>
