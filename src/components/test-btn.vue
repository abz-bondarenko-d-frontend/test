<template>
  <v-btn class="test-btn-input"
         color="#9e9e9e"
         height="42">
    SEND
  </v-btn>
</template>

<script>
export default {
  name: 'test-btn.vue',
};
</script>

<style scoped lang="scss">
.test-btn-input {
  color: rgba(255, 255, 255, 0.85);
  font-weight: 400;
  border-radius: 3px;
  padding: 0px 16px;
  height: 42px;
  letter-spacing: 0px;
}
//.test-btn-input ::v-deep .v-btn__content {
//  padding: 10px 26px;
//}
//.test-text-field-input ::v-deep fieldset {
//  border: 1px solid #e4e4e4;
//}
</style>
