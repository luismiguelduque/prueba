<template>
  <div>
    <menu-content></menu-content>
    <carrousel-slide></carrousel-slide>
    <div>

    </div>
    <instagram></instagram>
    <suscribite></suscribite>
    <footer-content></footer-content>
  </div>
</template>

<script>
// @ is an alias to /src
//import Box from "../components/Box";
import CarrouselSlide from "../components/CarrouselSlide";
import Instagram from "../components/Instagram";
import Suscribite from "../components/Suscribite";
import FooterContent from "../components/FooterContent";
import MenuContent from "../components/MenuContent";

export default {
  name: 'Home',
  components: {
    //Box,
    FooterContent,
    CarrouselSlide,
    Instagram,
    Suscribite,
    MenuContent,
  }
}
</script>
