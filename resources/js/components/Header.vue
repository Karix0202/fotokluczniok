<template>
  <header>
    <nav class="navbar nvbar-light custom-navbar">
      <b-container>
        <a href="/" class="navbar-brand">Fotokluczniok</a>

        <a href="#" class="burger">
          <span></span>
        </a>
      </b-container>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
.custom-navbar {
  padding-top: 50px;
  width: 100%;

  .navbar-brand {
    font-size: 1.7rem;
    color: #000;
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
