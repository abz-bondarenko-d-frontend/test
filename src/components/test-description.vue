<template>
  <div>
    <v-text-field
      class="test-text-field-input"
      outlined
      height="108"
      v-model="input_value"
      @input="setValue"
      @focus="is_Focused = true"
      @blur="is_Focused = false"
      v-on:update:error="error = $event"
      :rules="rules"
      counter="500"
      label="Description"
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
  name: 'test-description',
  methods: {
    setValue() {
      this.$emit('setValue', this.input_value);
    },
  },
  data: () => ({
    rules: [
      (value) => !!value || 'Required.',
      (value) => (value && value.length >= 3) || 'Your name needs to be between 2 and 60 characters',
      (value) => (value && value.length <= 60) || 'Your name needs to be between 2 and 60 characters',
      (value) => {
        const pattern = /^[A-Za-z- ]+$/;
        return pattern.test(value) || 'Use only latin letters, dashes and spaces';
      },
      (value) => {
        const pattern = /^[- ]+$/;
        return !pattern.test(value) ? true : 'Your name cannot include only dashes and spaces';
      },
    ],
    error: '',
    is_Focused: false,
    input_value: '',
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
