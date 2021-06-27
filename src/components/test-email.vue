<template>
  <div>
    <v-text-field
      outlined
      v-model="input_value"
      @focus="is_Focused = true"
      @blur="is_Focused = false"
      v-on:update:error="error = $event"
      :rules="rules"
      counter="254"
      label="Email*"
    >
      <v-icon v-if="this.error === false && is_Focused === false"
              slot="append"
              color="green">
        mdi-check-circle-outline
      </v-icon>
      asdfasdf
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
  name: 'test-email',
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
    width: 300px;
  }
</style>
