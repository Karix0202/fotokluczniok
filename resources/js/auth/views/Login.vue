<template>
  <div>
    <AdminNav />
    <b-container>
      <b-row>
        <b-col md="12" lg="4" class="form-holder">
          <b-form @submit="submit" class="custom-form">
            <b-form-group id="email-group" label="Email:" label-for="email">
              <b-form-input id="email" v-model="form.email" type="email" required placeholder="Email"></b-form-input>
            </b-form-group>

            <b-form-group id="password-group" label="Hasło:" label-for="password">
              <b-form-input id="password" v-model="form.password" type="password" required placeholder="Hasło"></b-form-input>
            </b-form-group>

            <b-alert variant="danger" v-if="errors._500.visible" show>{{ errors._500.content }}</b-alert>
            <b-alert variant="danger" v-if="errors._401.visible" show>{{ errors._401.content }}</b-alert>

            <b-button type="submit" variant="outline-primary" :disabled="isProcessing">Zaloguj się</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AdminNav from '../../admin/components/AdminNav.vue';

export default {
  name: 'Login',
  components: {
    AdminNav,
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      errors: {
        _500: {
          content: "Coś poszło nie tak! Spróbuj ponownie.",
          visible: false,
        },
        _401: {
          content: "Email lub hasło zostało źle wprowadzone",
          visible: false,
        },
      },
      isProcessing: false,
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.isProcessing = true;
      this.$store.dispatch('retrieveToken', {
        email: this.form.email,
        password: this.form.password
      })
      .then((resp) => {
        this.$router.push({ name: 'home' });
      })
      .catch((err) => {
        const code = err.response.status;
        this.isProcessing = false;
        if (code == 401) {
          this.errors._401.visible = true;
          this.errors._500.visible = false;
        } else {
          this.errors._500.visible = true;
          this.errors._401.visible = false;
        }
      });
    },
  },
};
</script>