<template>
  <div class="home">
    <add-link-container/>
  </div>
</template>

<script>
import AddLinkContainer from '@/containers/AddLinkContainer.vue'

export default {
  name: 'HomeView',
  components: {
    AddLinkContainer
  }
}
</script>
