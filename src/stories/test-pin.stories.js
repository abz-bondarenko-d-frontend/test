import Vue from 'vue';
import vuetify from '../plugins/vuetify';
import TestPin from '../components/test-pin.vue';

export default {
  component: TestPin,
  title: 'Test pin',
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TestPin },
  template: '<test-pin v-bind="$props" v-on="$props"></test-pin>',
});

export const Default = Template.bind({});
Default.args = {
  error: undefined,
  value: '',
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  value: '1',
};

export const Success = Template.bind({});
Success.args = {
  error: false,
  value: '11111111',
};
