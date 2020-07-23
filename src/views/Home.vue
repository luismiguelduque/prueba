<template>
  <div>
    <menu-content></menu-content>
    <carrousel-slide></carrousel-slide>
    <box v-for="(product, index) in products"
         :key="index"
         :data="product"
         :index="index">
    </box>
    <instagram></instagram>
    <suscribite></suscribite>
    <footer-content></footer-content>
  </div>
</template>

<script>
// @ is an alias to /src
import Box from "../components/Box";
import CarrouselSlide from "../components/CarrouselSlide";
import Instagram from "../components/Instagram";
import Suscribite from "../components/Suscribite";
import FooterContent from "../components/FooterContent";
import MenuContent from "../components/MenuContent";
import productItems from "../utils/productsItems";

export default {
  name: 'Home',
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    this.products = productItems;
    console.log(this.products);
  },
  components: {
    Box,
    FooterContent,
    CarrouselSlide,
    Instagram,
    Suscribite,
    MenuContent,
  }
}
</script>
