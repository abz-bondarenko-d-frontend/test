<template>
  <v-form class="homeContainer">
    <test-name/>
    <test-email/>
    <test-email-rfc/>
    <test-id/>
    <test-id-without-mask/>
    <test-phone/>
    <test-additional-phone/>
    <test-pin/>
    <test-pin-without-mask/>
    <test-description/>
    <test-btn/>
  </v-form>
</template>

<script>
import TestName from './test-name.vue';
import TestEmail from './test-email.vue';
import TestEmailRfc from './test-email-rfc.vue';
import TestId from './test-id.vue';
import TestIdWithoutMask from './test-id-without-mask.vue';
import TestPhone from './test-phone.vue';
import TestAdditionalPhone from './test-additional-phone.vue';
import TestPin from './test-pin.vue';
import TestPinWithoutMask from './test-pin-without-mask.vue';
import TestDescription from './test-description.vue';
import TestBtn from './test-btn.vue';

export default {
  name: 'Home',
  components: {
    TestEmail,
    TestName,
    TestPin,
    TestPinWithoutMask,
    TestEmailRfc,
    TestId,
    TestIdWithoutMask,
    TestPhone,
    TestAdditionalPhone,
    TestDescription,
    TestBtn,
  },
  methods: {
    setName(event) {
      this.name = event.payload;
    },
  },
  data() {
    return {
      name: '',
      email: '',
      email_rfc: '',
      id: '',
      id_: '',
      phone: '',
      additional_phone: '',
      pin: '',
      pin_unmask: '',
      description: '',
    };
  },
};
</script>

<style scoped lang="scss">
  .homeContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 70px;
    & > * + * {
      margin-top: 25px;
    }
  }
</style>
