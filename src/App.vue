<template>
  <div id="app" class="h-100">
    <header v-if="authenticated">
        <nav class="navbar">
          <div class="container">
          <div class="navbar-brand">
            <router-link to="/cart">
              <img src="./assets/logo-pradoms.png">
            </router-link>
          </div>
          <div class="navbar-end">
            <router-link to="/cart" class="navbar-item btn item__btn item__btn--green">Faça seu pedido</router-link>
            <router-link to="/secure" class="navbar-item btn item__btn item__btn--blue">Contatos</router-link>
            <router-link to="/add" class="navbar-item btn item__btn item__btn--blue">Adicionar contato</router-link>
            <router-link v-if="authenticated" to="/login" class="btn btn-secondary" v-on:click.native="logout()" replace>Sair</router-link>
          </div>
        </div>
        </nav>
    </header>
    <transition name="page">
      <router-view @authenticated="setAuthenticated" />
      <!-- <router-view/> -->
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        authenticated: false,
        mockAccount: {
          username: 'darpz',
          password: 'darpz'
        }
      }
    },
    mounted() {
      if (!this.authenticated) {
        this.$router.replace({name: 'login'})
      }
    },
    methods: {
      setAuthenticated(status) {
        this.authenticated = status;
      },
      logout() {
        this.authenticated = false;
      }
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/variables.scss';
  @import './node_modules/bootstrap/scss/bootstrap.scss';
  @import './assets/scss/form.scss';
  @import './assets/scss/main.scss';

  .page-enter,
  .page-leave-active {
    opacity: 0;
  }

  .page-enter-active,
  .page-leave-active {
    transition: opacity 300ms;
  }
</style>
