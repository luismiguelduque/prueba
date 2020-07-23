<template>
  <div>
    <menu-content></menu-content>
    <carrousel-slide></carrousel-slide>
    <box v-for="(product, index) in products"
         :key="index"
         :data="product"
         :index="index">
    </box>
    <title-section title="#ESPUFI" subtitle="INSTAGRAM"></title-section>
    <gallery></gallery>
    <title-section title="SUSCRIBITE" subtitle="NEWSLETTER" bottom="Y enterate de todas las novedades"></title-section>
    <suscribite></suscribite>
    <footer-content></footer-content>
  </div>
</template>

<script>
// @ is an alias to /src
import Box from "../components/Box";
import CarrouselSlide from "../components/CarrouselSlide";
import Gallery from "../components/Gallery";
import Suscribite from "../components/Suscribite";
import FooterContent from "../components/FooterContent";
import MenuContent from "../components/MenuContent";
import productItems from "../utils/productsItems";
import TitleSection from "../components/TitleSection";

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
    Gallery,
    Suscribite,
    MenuContent,
    TitleSection
  }
}
</script>
