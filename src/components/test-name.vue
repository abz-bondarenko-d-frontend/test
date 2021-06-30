<template>
  <div class="asd">
    <v-text-field
      class="test-text-field-input"
      outlined
      height="54"
      v-model="value"
      :error="error"
      @focus="is_Focused = true"
      @blur="is_Focused = false"
      v-on:update:error="error_event = $event"
      :rules="rules"
      counter="60"
      label="Name*"
    >
      <v-icon v-if="this.setError === false && value !== ''"
              slot="append"
              color="green">
        mdi-check-circle-outline
      </v-icon>
      <v-icon v-else-if="this.setError === true && value !== ''"
              slot="append"
              color="red">
        mdi-alert-circle-outline
      </v-icon>
    </v-text-field>
  </div>
</template>

<script>
export default {
  name: 'test-name',
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
      (v) => (!!v) || 'Required!',
      (v) => (v && v.length >= 2) || 'Your name needs to be between 2 and 128 characters',
      (v) => (v && v.length <= 60) || 'Your name needs to be between 2 and 128 characters',
      (v) => {
        const pattern = /^[A-Za-z- ]+$/;
        return pattern.test(v) || 'Use only latin letters, dashes and spaces';
      },
      (v) => {
        const pattern = /^[- ]+$/;
        return !pattern.test(v) ? true : 'Your name cannot include only dashes and spaces';
      },
    ],
    input_value: '',
    error_event: undefined,
    is_Focused: undefined,
  }),
};
</script>

<style scoped lang="scss">
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
//.test-text-field-input > error__text ::v-deep fieldset {
//  border-width: 1px;
//}
//.test-text-field-input ::v-deep fieldset {
//  border: 1px solid #e4e4e4;
//}
</style>
