import Vue from 'vue';
import vuetify from '../plugins/vuetify';
import TestName from '../components/test-name.vue';

export default {
  component: TestName,
  title: 'Test name',
};

export const Default = () => ({
  components: { TestName },
  template: '<test-name></test-name>',
});
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
