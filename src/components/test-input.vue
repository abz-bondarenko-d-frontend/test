<template>
  <div class="abzInput"
       :class="{ error: helper_text != '',
                 disabled: is_enabled === false}" >
    <input type="text"
           :placeholder="placeholder"
           required
           v-model="input_value"
           :tabindex="currentTabindex"
           @input="setValue"
           :maxlength="max_length">
    <label>{{label}}</label>
    <div class="helperText_Container" v-if="helper_text != ''">
      <p class="helperText">{{helper_text}}</p>
      <p class="charsCounter">{{inputLength}}</p>
    </div>
  </div>
</template>

<style scoped lang=scss>

</style>

<script>
export default {
  components: {  },
  name: 'test-input',

  data() {
    return {
      input_value: ''
    }
  }
}
</script>