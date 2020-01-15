x<template>
  <header>
    <Nav :galleries="galleries"/>
    <nav class="navbar nvbar-light custom-navbar">
      <b-container>
        <a href="/" class="navbar-brand">FOTOKLUCZNIOK</a>

        <a href="#" class="burger" data-toggle="collapse" data-target="#main-navbar" v-on:click="burgerMenu()">
          <span></span>
        </a>
      </b-container>
    </nav>
  </header>
</template>

<script>
import Nav from './Nav.vue';

export default {
  name: 'Header',
  components: {
    Nav,
  },
  props: {
    galleries: Array,
  },
  methods: {
    burgerMenu() {
      $(window).scrollTop(0);
      if (!$('.burger').hasClass('active')) {
        $('.burger').addClass('active');
      } else {
        $('.burger').removeClass('active');
      }
    },
  },
};
</script>

<style lang="scss">
.custom-navbar {
  padding-top: 25px;
  width: 100%;

  .navbar-brand {
    font-size: 1.7rem;
    color: #000;
  }

  @media (max-width: 780px) {
    .container {
      padding-right: 0;
      padding-left: 0;
    }
  }

  .burger {
    width: 28px;
    height: 32px;
    cursor: pointer;
    position: relative;

    &:before, span, &:after {
      width: 100%;
      height: 2px;
      display: block;
      background: #000;
      border-radius: 2px;
      position: absolute;
      opacity: 1;
    }

    &:before, &:after {
      transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
      transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1), transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1);
      transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1), transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
      -webkit-transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1);
      content: "";
    }

    &:before {
      top: 4px;
    }

    &:after {
      top: 26px;
    }

    span {
      top: 15px;
    }

    &:focus {
      outline: none;
    }

    &:hover:before {
      top: 7px;
    }

    &:hover:after {
      top: 23px;
    }

  }

  .burger.active {
    span {
      opacity: 0;
    }

    &:after, &:before {
      top: 40%;
    }

    &:before {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      transform: rotate(45deg);
      filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=5);
    }

    &:after {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      transform: rotate(-45deg);
      filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=-5);
    }
  }
}
</style>
