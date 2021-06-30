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
      v-mask="'####-####'"
      counter="256"
      label="Phone"
    >
      <v-icon v-if="this.error === false && is_Focused === false && this.input_value !== ''"
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
  name: 'test-additional-phone',
  data: () => ({
    rules: [
      (value) => {
        const pattern = /^\d\d\d\d-\d\d\d\d+$|^\s*$/;
        return pattern.test(value) || 'The pin format must be "####-####"';
      },
    ],
    input_value: '',
    error: null,
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
  fieldset {
    border: 1px solid #e4e4e4;
  }
}
.test-text-field-input ::v-deep v-input--is-focused {
  fieldset {
    border: 5px solid #e4e4e4;
  }
}
.test-text-field-input ::v-deep .v-text-field__details {
  padding: 0px 16px;
}
.test-text-field-input ::v-deep label {
  margin-top: -1px;
}
//.test-text-field-input ::v-deep fieldset {
//  border: 1px solid #e4e4e4;
//}
//.v-text-field--outlined.v-input--has-state fieldset,
// .v-text-field--outlined.v-input--is-focused fieldset
</style>
