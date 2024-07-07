<template>
  <!-- <div id="app"> -->
      <div>
    <Homeworkcon />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//defineComponent function in vue phuea kam nod conponent

import Homeworkcon from '../components/homeworkcon.vue';

export default defineComponent({
  // name: 'App',
  components: {
    Homeworkcon
  }
});
</script>
