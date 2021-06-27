<template>
  <div class="homeContainer">
    <test-name></test-name>
    <test-email></test-email>
  </div>
</template>

<script>
import TestEmail from './test-email.vue';
import TestName from './test-name.vue';

export default {
  name: 'Home',
  components: {
    TestEmail,
    TestName,
  },
};
</script>

<style scoped lang="scss">
  .homeContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 50px;
  }
</style>
