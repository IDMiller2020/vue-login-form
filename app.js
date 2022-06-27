const app = Vue.createApp({})
app.component('login-form', {
  template: `
    <form v-on:submit.prevent="loginAction">
      <h1>{{ title }}</h1>
      <form-input
        v-for="input in inputs"
          v-bind:formInputLabel="input.inputLabel"
          v-bind:formInputType="input.inputType"
          v-model="input.inputValue"
      />
      <button>Log In</button>
    </form>
  `,
  components: ['form-input'],
  data() {
    return {
      title: 'Login Form',
      inputs: [
        {
          inputLabel: 'Email:',
          inputType: 'email',
          inputValue: 'abc@abc.com'
        },
        {
          inputLabel: 'Password:',
          inputType: 'password',
          inputValue: 'password'
        }
      ]
    }
  },
  methods: {
    loginAction() {
      console.log(`email: ${this.inputs[0].inputValue}`)
      console.log(`password: ${this.inputs[1].inputValue}`)
    }
  },
})
app.component('form-input', {
  template: `
    <label>
      {{ formInputLabel }}
      <input v-bind:type="formInputType" v-model="formInputValue" />
    </label>
  `,
  computed: {
    formInputValue: {
      get() {
        return this.modelValue
      },
      set(userInput) {
        this.$emit('update:modelValue', userInput)
      }
    }
  },
  props: ['formInputLabel', 'formInputType', 'modelValue']
})
app.mount('#app')