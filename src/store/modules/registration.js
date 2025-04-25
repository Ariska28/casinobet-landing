import { registration } from "@/api/registration.js";

const state = () => ({
  form: {
    phone: '',
    password: '',
    agreement1: true,
    agreement2: true,
  },
  errors: {
    phone: false,
    password: false,
    agreement1: false,
    agreement2: false,
  },
  isSubmitting: false,
  submitError: null,
  isLoading: false,
});

const mutations = {
  UPDATE_FIELD(state, { field, value }) {
    state.form[field] = value;
  },
  SET_ERROR(state, { field, error }) {
    state.errors[field] = error;
  },
  START_SUBMIT(state) {
    state.isSubmitting = true;
    state.submitError = null;
  },
  SUBMIT_SUCCESS(state) {
    state.isSubmitting = false;
  },
  SUBMIT_FAILURE(state, error) {
    state.isSubmitting = false;
    state.submitError = error;
  },
  RESET_FORM(state) {
    state.form = {
      phone: '',
      password: '',
      agreement1: true,
      agreement2: true,
    };
  }
};

const actions = {
  async submitForm({ commit, state }) {
    commit('START_SUBMIT');
    
    try {
      state.isLoading = true;

      await registration(state.form);

      commit('SUBMIT_SUCCESS');
      commit('RESET_FORM');
    } catch (error) {
      commit('SUBMIT_FAILURE', error.message);
    } finally {
      state.isLoading = false;
    }
  }
};

const getters = {
  hasErrors: state => Object.values(state.errors).some(Boolean)
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};