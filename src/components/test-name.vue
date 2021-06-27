<template>
  <div>
    <v-text-field
      outlined
      v-model="input_value"
      @focus="is_Focused = true"
      @blur="is_Focused = false"
      v-on:update:error="error = $event"
      :rules="rules"
      counter="60"
      label="Name*"
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
  name: 'test-name',
  data: () => ({
    rules: [
      (value) => !!value || 'Required.',
      (value) => (value && value.length >= 3) || 'Min 2 characters',
    ],
    input_value: '',
    error: '',
    is_Focused: false,
  }),
};
</script>

<style scoped lang="scss" >
div {
  width: 300px;
}
</style>
