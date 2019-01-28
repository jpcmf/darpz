<template>
  <div class="main cart">
	  <div class="container">
	    <div class="row">
		    <div class="col-xs-12 col-lg-9">
		      <div class="row cart__header">
			      <div class="col-xs-12 col-sm-6">
			        <h1>Marmitas</h1>
			      </div>
			      <div class="col-xs-12 col-sm-6">
			        <select class="cart__select">
				        <option value="">Mais populares</option>
			        </select>
			      </div>
		      </div>
		      <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4" v-for="(item, index) in items" v-bind:key="index" v-on:mouseover="showByIndex = item" v-on:mouseout="showByIndex = null">
              <div class="cart__item">
                <div class="cart__image">
                  <img class="img-responsive" :src="item.image" alt="">
                </div>
                <div class="cart__description">
                  <h5>{{ item.name }}</h5>
                  <h6>R${{ item.price | formatCurrency }}</h6>
                </div>
                <!-- <transition name="fade"> -->
                  <!-- <div class="cart__buy" v-show="showByIndex === item"> -->
                  <div class="cart__buy">
                    <!-- <input v-model="item.qty" type="number" class="form-control" placeholder="Qty" min="1"> -->
                    <a href="" v-on:click.prevent="addToCart(item)" class="btn cart__btn-add">
                      <span>Comprar</span>
                    </a>
                  </div>
                <!-- </transition> -->
              </div>
            </div>
          </div>
		    </div>
		    <div class="col-xs-12 col-lg-3" style="position:sticky;top:0;">
			    <div class="row">
			      <div class="col">
				      <div class="item">
				        <div class="item__title">
					        Carrinho <span>({{cartItems.length }} {{cartItems.length ===  1 ? 'item' : 'itens'}})</span>
				        </div>
				        <shopping-cart :items="cartItems"></shopping-cart>
				      </div>
			      </div>
			    </div>
		    </div>
		  </div>
	  </div>
	</div>
</template>

<script>
import ShoppingCart from './ShoppingCart.vue'
export default {
  name: 'cart',
  components: {
	  ShoppingCart,
  },
  data () {
    return {
			authenticated: false,
      arrayHidden: ['item'],
      showByIndex: null,
      cartItems: [],
      items:
      [
        {
          id: 312,
          name: "Marmitex Simples do dia - Pequena",
          price: 11.50,
          qty: 1,
          score: 100,
          image: "./static/products/marmitex01.jpg"
        },
        {
          id: 201,
          name: "Marmitex Simples do dia - Média",
          price: 12.50,
          qty: 1,
          score: 80,
          image: "./static/products/marmitex01.jpg"
        },
        {
          id: 102,
          name: "Marmitex Simples do dia - Grande",
          price: 13.50,
          qty: 1,
          score: 250,
          image: "./static/products/marmitex01.jpg"
        },
        {
          id: 99,
          name: "Call Of Duty WWII",
          price: 249.99,
          qty: 1,
          score: 205,
          image: "./static/products/marmitex03.jpg"
        },
        {
          id: 12,
          name: "Mortal Kombat XL",
          price: 69.99,
          qty: 1,
          score: 150,
          image: "./static/products/marmitex03.jpg"
        },
        {
          id: 74,
          name: "Shards of Darkness",
          price: 71.94,
          qty: 1,
          score: 400,
          image: "./static/products/marmitex03.jpg"
        },
        {
          id: 31,
          name: "Terra Média: Sombras de Mordor",
          price: 79.99,
          qty: 1,
          score: 50,
          image: "./static/products/marmitex02.jpg"
        },
        {
          id: 420,
          name: "FIFA 18",
          price: 195.39,
          qty: 1,
          score: 325,
          image: "./static/products/marmitex02.jpg"
        },
        {
          id: 501,
          name: "Horizon Zero Dawn",
          price: 115.8,
          qty: 1,
          score: 290,
          image: "./static/products/marmitex02.jpg"
        }
      ],
    }
  },
  methods: {
    addToCart(itemToAdd) {
      var found = false;

      // Check if the item was already added to cart
        // If so them add it to the qty field
      this.cartItems.forEach(item => {
        if (item.id === itemToAdd.id) {
          found = true;
          item.qty += itemToAdd.qty;
        }
      });

      if (found === false) {
      this.cartItems.push(Object.assign({}, itemToAdd));
      // this.cartItems.push(Vue.util.extend({}, itemToAdd));
      }
      itemToAdd.qty = 1;
    }
  }
}
</script>

<style scoped>
  input[type=number] {
    border: solid 1px #3486E6;
    border-radius: 3px;
    color: #3486E6;
    display: block;
    height: auto;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0;
    margin: 0 auto;
    padding: 2px 5px;
    width: 40px;
  }

  .fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
	  opacity: 0;
  }
</style>

<style lang="scss" scoped>
  .cart {
    // background-color: #fff;
    // font-family: 'Open Sans', sans-serif;
    letter-spacing: 0;
    padding: 50px 0;

    .cart__header {
      display: flex;
      align-items: center;
      margin-bottom: 56px;
    }

    h1 {
      // color: #363636;
      // font-size: 48px;
      // font-weight: 600;
      margin: 0;
    }

    .cart__select {
      appearance: none;
      background-image: url(../../static/arrow-down-icon.svg);
      background-size: 8px;
      background-repeat: no-repeat;
      background-position: 95% center;
      border: solid 1px #E1E1E1;
      border-radius: 4px;
      color: #423B3B;
      float: right;
      font-size: 14px;
      font-weight: 400;
      padding: 0 18px 0;
      height: 40px;
      width: 262px;
    }

    .cart__item {
      cursor: pointer;
      position: relative;
      margin-bottom: 48px;
    }

    .cart__image {
      background-color: #EEEEEE;
      border-radius: 3px;
      margin: 0 auto;
      max-width: 262px;
      text-align: center;
      padding: 25px 0;

      img {
        max-width: 180px;
				width: 100%;
      }
    }

    .cart__description {
			margin-top: 10px;
			min-height: 60px;
      text-align: center;

      h5, h6 {
        font-size: 15.5px;
      }

      h5 {
        color: #746A6A;
        font-weight: 400;
        margin-bottom: 0;
      }

      h6 {
        color: #3486E6;
        margin: 0;
      }
    }

    .cart__buy {
			// bottom: 0;
      height: 52px;
      padding-top: 10px;
      // position: absolute;
      text-align: center;

      .cart__btn-add {
				background-color:#dd1813;
				border: 0;
				color:#fff;
				display: inline-block;
        // height: auto;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 16px;
        padding: 10px;
        vertical-align: middle;
        text-transform: lowercase;
      	width: 100%;

        span {
          display: inline-block;
          vertical-align: middle;
        }

        img {
          width: 30px;
          margin-right: 10px;
        }

        &:hover {
          border: 0;
          box-shadow: none;
          color:#fff !important;
        }
      }
    }
  }

  .item {
		background-color: #fff;
    border: solid 1px #E1E1E1;
    border-radius: 2px;
    color: #000;
    padding: 20px;
    margin-top: 20px;
    min-height: 353px;

    .item__title {
      color: #363636;
      font-size: 18px;
      font-weight: 700;

      span {
      color: #7F7575;
      font-size: 14px;
      font-weight: 400;
      }
    }
  }
</style>
