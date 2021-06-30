import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: '',
    email: '',
    emailRfc: '',
    id: '',
    idUnmasked: '',
    phone: '',
    additionalPhone: '',
    pin: '',
    pinUnamsked: '',
    description: '',
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_EMAIL: (state, email) => {
      state.email = email;
    },
    SET_EMAIL_RFC: (state, emailRfc) => {
      state.emailRfc = emailRfc;
    },
    SET_ID: (state, id) => {
      state.id = id;
    },
    SET_ID_UNMASKED: (state, idUnmasked) => {
      state.idUnmasked = idUnmasked;
    },
    SET_PHONE: (state, phone) => {
      state.phone = phone;
    },
    SET_ADDITIONAL_PHONE: (state, additionalPhone) => {
      state.additionalPhone = additionalPhone;
    },
    SET_PIN: (state, pin) => {
      state.pin = pin;
    },
    SET_PIN_UNMASKED: (state, pinUnamsked) => {
      state.pinUnamsked = pinUnamsked;
    },
    SET_DESCRIPTION: (state, description) => {
      state.description = description;
    },
  },
  actions: {
  },
  getters: {
    GET_FORM_DATA(state) {
      return state.formData;
    },
  },
});
