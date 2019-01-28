<template>
  <div>
    <!-- <modal v-show="isModalVisible" v-on:close="closeModal"></modal> -->
  	<div class="item__enter d-flex f-align-center" v-for="(item, index) in items" v-bind:key="index" v-on:mouseover="showByIndex = item" v-on:mouseout="showByIndex = null">
    	<div class="item__image">
        <img class="img-responsive" v-bind:src="item.image" alt="">
      </div>
      <div>
      	<span class="item__name">{{item.name}}</span>
      	<span class="item__price">R$ {{item.price | formatCurrency}}</span>
        <!-- <input v-model="item.qty" class="form-control input-qty" type="number" min="1"> -->
      </div>
      <transition name="fade">
        <div class="item__remove" v-show="showByIndex === item">
          <a href="" v-on:click.prevent="removeItem(index)">x</a>
        </div>
      </transition>
    </div>
    <div class="item__empty" v-show="items.length === 0">
      <img src="static/cart-icon.svg" alt="cart icon">
      <p>Até o momento, o seu carrinho está vazio</p>
    </div>
    <div class="item__value" v-show="items.length > 0">
      <div class="item__sub d-flex f-justify-space">
        <span>subtotal</span>
        <span>R$ {{subTotal | formatCurrency}}</span>
      </div>
      <div class="item__frete d-flex f-justify-space" v-bind:class="subTotal > 250 ? 'item__frete--gratis' : ''">
        <span>frete</span>
        <span>R$ {{frete | formatCurrency}}</span>
      </div>
      <div class="item__total d-flex f-justify-space">
        <span>total</span>
        <span>R$ {{Total | formatCurrency}}</span>
      </div>
    </div>
    <a href="#" class="btn item__btn-checkout" v-show="items.length > 0" v-on:click.prevent="showModal">
      finalizar compra
    </a>
  </div>
</template>

<script>
// import Modal from '../shared/modal/Modal.vue'
export default {
  name: 'shopping-cart',
  props: ['items'],
  components: {
    // Modal,
  },
  data () {
    return {
      showByIndex: null,
      isModalVisible: false,
    }
  },
  computed: {
    subTotal() {
      var subtotal = 0;
      this.items.forEach(item => {
        subtotal += (item.price * item.qty);
      });
      return subtotal;
    },
    frete() {
      return this.subTotal > 250 ? 0 : this.items.length * 10
    },
    Total() {
      return this.subTotal + this.frete;
    }
  },
  methods: {
    removeItem(index) {
      this.items.splice(index, 1);
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  }
}
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .d-flex {
    display: flex;
  }

  .f-align-center {
    align-content: center
  }

  .f-justify-center {
    justify-content: center;
  }

  .f-justify-space {
    justify-content: space-between;
  }

  .item__enter {
    margin-top: 19px;
    position: relative;
  }

  .item__image {
    background-color: #EEEEEE;
    border-radius: 3px;
    height: 53px;
    margin-right: 10px;
    padding: 5px 10px;
    width: 60px;

    img {
      max-width: 41px;
    }
  }

  .item__name,
  .item__price {
    display: block;
    font-size: 14px;
  }

  .item__name {
    color: #7F7575;
    line-height: 17px;
    font-weight: 500;
  }

  .item__price {
    color: #423B3B;
    font-weight: 700;
  }

  .item__remove {
    position: absolute;
    right: 0;

    a {
      background-color: #54A3FF;
      border-radius: 50%;
      color: #fff;
      display: inline-block;
      font-size: 10px;
      font-weight: 600;
      height: 15px;
      line-height: 15px;
      margin-top: 22px;
      text-align: center;
      width: 15px;

      &:hover {
        color: #fff !important;
      }
    }
  }

  .item__empty {
    flex-direction: column;
    text-align: center;

    img {
      width: 89px;
      margin: 55px auto 0;
    }

    p {
      color: #746A6A;
      font-size: 14px;
      font-weight: 400;
      line-height: 19px;
      margin-top: 18px;
    }
  }

  .item__value {
    margin-bottom: 22px;
    margin-top: 24px;
  }

  .item__sub,
  .item__frete,
  .item__total {
    margin: 10px 0;

    span {
      color: #7F7575;
      font-size: 14px;
      font-weight: 600;

      + span {
        color: #423B3B;
        font-size: 16px;
        font-weight: 700;
      }
    }
  }

  .item__frete--gratis {
    span {
      color: #E1E1E1 !important;
      text-decoration: line-through;
    }
  }

  .item__total span + span {
    font-size: 20px;
  }

  .item__btn-checkout {
    background-color: #54A3FF;
    border: solid 1px transparent;
    border-radius: 3px;
    color: #fff;
    display: block;
    // height: 50px;
    font-size: 14px;
    padding: 12.5px 0;
    text-align: center;
    width: 100%;
    transition: ease-in-out all 300ms;

    &:hover {
      background-color: transparent;
      border: solid 1px #54A3FF;
      color: #54A3FF !important;
    }
  }
</style>

