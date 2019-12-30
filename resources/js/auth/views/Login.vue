<template>
  <div>
    <AdminNav />
    <b-container>
      <b-row>
        <b-col md="12" lg="6" class="form-holder">
          <b-form @submit="submit" class="login-form">
            <b-form-group id="email-group" label="Email:" label-for="email">
              <b-form-input id="email" v-model="form.email" type="email" required placeholder="Email"></b-form-input>
            </b-form-group>

            <b-form-group id="password-group" label="Hasło:" label-for="password">
              <b-form-input id="password" v-model="form.password" type="password" required placeholder="Hasło"></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="outline-primary">Zalguj się</b-button>
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
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      console.log(this.form);
    },
  },
};
</script>

<style lang="scss">
.login-form {
  input {
    border: 1px solid #000000;
    color: #000000;
    border-radius: 0;
    outline: none;
  }

  .btn {
    border: 1px solid #000000;
    color: #000000;
    border-radius: 0;
    outline: none;

    &:hover {
      border: 1px solid #000000;
      background-color: #000000;
      color: #ffffff;
    }

    &:focus {
      outline: none !important;
      box-shadow: none;
    }
  }
}

.form-holder {
  margin: 0 auto;
  margin-top: 50px;
}
</style>
