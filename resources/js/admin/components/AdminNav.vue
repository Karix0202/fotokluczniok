<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="custom-nav">
      <router-link class="navbar-brand" :to="{ name: 'home' }">Admin Dashboard</router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <li class="nav-item">
            <router-link :to="{ name: 'login' }" target="_self" class="nav-link" v-if="!this.$store.getters.loggedIn">Zaloguj się</router-link>
          </li>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-if="this.$store.getters.loggedIn">
          <li class="nav-item">
            <router-link :to="{ name: 'logout' }" target="_self" class="nav-link">Wyloguj się</router-link>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'AdminNav',
};
</script>

<style lang="scss">
.custom-nav {
  background-color: #fff !important;

  .nav-link, .navbar-brand {
    color: #000 !important;
    margin-top: 12px;
    margin-bottom: 12px;
  }
}

.navbar-toggler {
  border: none;

  span {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E") !important;
  }
}
</style>
