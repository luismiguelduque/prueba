<template>
  <div>
    <menu-content></menu-content>
    <slider></slider>
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
import Slider from "../components/Slider";
import Instagram from "../components/Instagram";
import Suscribite from "../components/Suscribite";
import FooterContent from "../components/FooterContent";
import MenuContent from "../components/MenuContent";

export default {
  name: 'Home',
  components: {
    //Box,
    FooterContent,
    Slider,
    Instagram,
    Suscribite,
    MenuContent,
  }
}
</script>
