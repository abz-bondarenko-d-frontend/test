import Vue from 'vue';
import vuetify from '../plugins/vuetify';
import TestName from '../components/test-name.vue';

export default {
  title: 'name',
  component: TestName,
  // argTypes: {
  //   // onKeyDown: {
  //   //   action: 'keydown',
  //   // },
  //   backgroundColor: { control: 'color' },
  //   size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  // },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TestName },
  template: '<test-name v-bind="$props" v-on="$props"></test-name>',
});

export const Default = Template.bind({});
Default.args = {
  error: undefined,
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  value: 'e',
};

export const Success = Template.bind({});
Success.args = {
  error: false,
  value: 'Success',
};
// export const Validated = Template.bind({});
// Validated.args = {
//   manual_validation: true,
// };

// export const OneLetter = Template.bind({});
// OneLetter.args = {
//   primary: true,
// };

// export default {
//   component: TestName,
//   title: 'Test name',
// };
//
// export const Default = () => ({
//   components: { TestName },
//   template: '<test-name></test-name>',
// });

// export const Basic = () => <test-name>text('Label', 'hello')</test-name>;

// import MyButton from './Button.vue';
//
// export default {
//   title: 'Example/Button',
//   component: MyButton,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//     size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
//   },
// };
//
// const Template = (args, { argTypes }) => ({
//   props: Object.keys(argTypes),
//   components: { MyButton },
//   template: '<my-button @onClick="onClick" v-bind="$props" />',
// });
//
// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
