import Vue from 'vue';
import vuetify from '../plugins/vuetify';
import TestEmail from '../components/test-email.vue';

export default {
  title: 'email',
  component: TestEmail,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TestEmail },
  template: '<test-email v-bind="$props" v-on="$props"></test-email>',
});

export const Default = Template.bind({});
Default.args = {
  error: undefined,
  value: '',
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  value: 'e',
};

export const Success = Template.bind({});
Success.args = {
  error: false,
  value: 'aaa@aaa.com',
};
