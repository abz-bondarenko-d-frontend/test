<template>
  <div>
    <v-text-field
      class="test-text-field-input"
      outlined
      v-model="value"
      :error="error"
      @focus="is_Focused = true"
      @blur="is_Focused = false"
      v-on:update:error="error_event = $event"
      :rules="rules"
      v-mask="'####-####'"
      counter="9"
      label="Pin code"
    >
      <v-icon v-if="this.setError === false && value !== ''"
              slot="append"
              color="green">
        mdi-check-circle-outline
      </v-icon>
      <v-icon v-else-if="this.setError === false && value !== ''"
              slot="append"
              color="red">
        mdi-alert-circle-outline
      </v-icon>
    </v-text-field>
  </div>
</template>

<script>
export default {
  name: 'test-pin',
  props: {
    value: {
      type: String,
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    setError() {
      let result;
      if (this.error_event === true) {
        result = true;
      } else if (this.error === true) {
        result = true;
      } else {
        result = false;
      }
      return result;
    },
  },
  data: () => ({
    rules: [
      (value) => (value && value.length < 9) || 'The pin format must be "####-####',
      (value) => {
        const pattern = /^\d\d\d\d-\d\d\d\d+$|^\s*$/;
        return pattern.test(value) || 'The pin format must be "####-####"';
      },
    ],
    input_value: '',
    error_event: undefined,
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
