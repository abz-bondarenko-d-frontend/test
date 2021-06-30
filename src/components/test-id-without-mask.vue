<template>
  <div>
    <v-text-field
      class="test-text-field-input"
      outlined
      v-model="input_value"
      @focus="is_Focused = true"
      @blur="is_Focused = false"
      v-on:update:error="error = $event"
      :rules="rules"
      counter="128"
      label="id_"
    >
      <v-icon v-if="this.error === false && is_Focused === false"
              slot="append"
              color="green">
        mdi-check-circle-outline
      </v-icon>
      <v-icon v-else-if="this.error === true && is_Focused === false"
              slot="append"
              color="red">
        mdi-alert-circle-outline
      </v-icon>
    </v-text-field>
  </div>
</template>

<script>
export default {
  name: 'test-id-without-mask',
  data: () => ({
    rules: [
      (value) => !!value || 'Required.',
      (value) => (value && value.length >= 3) || 'Min 3 characters',
      (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'Invalid e-mail.';
      },
    ],
    input_value: '',
    error: true,
    is_Focused: undefined,
  }),
};
</script>

<style scoped lang="scss" >
div {
  width: 380px;
  @media (max-width: 400px) {
    width: 288px;
  }
}
.test-text-field-input ::v-deep .v-input__slot {
  padding: 0 16px !important;
  margin-bottom: 7px;
  min-height: 54px;
}
.test-text-field-input ::v-deep .v-text-field__details {
  padding: 0px 16px;
}
//.test-btn-input ::v-deep .v-btn__content {
//  padding: 10px 26px;
//}
//.test-text-field-input ::v-deep fieldset {
//  border: 1px solid #e4e4e4;
//}
</style>
