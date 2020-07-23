<template>
    <div>
        <carousel :perPage="1">
            <slide>
                <img class="image-slide" src="../assets/10.png">
                <div class="text-slide">ESTÁR CÓMODO,<br/> NUNCA FUE TAN FACIL</div>
                <div class="button-slide-contentainer">
                    <div class="button-slide">SHOP</div>
                </div>
            </slide>
            <slide>
                <img class="image-slide" src="../assets/10.png">
                <div class="text-slide">ESTÁR CÓMODO,<br/> NUNCA FUE TAN FACIL</div>
                <div class="button-slide-contentainer">
                    <div class="button-slide">SHOP</div>
                </div>
            </slide>
            <slide>
                <img class="image-slide" src="../assets/10.png">
                <div class="text-slide">ESTÁR CÓMODO,<br/> NUNCA FUE TAN FACIL</div>
                <div class="button-slide-contentainer">
                    <div class="button-slide">SHOP</div>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
    import {Carousel, Slide} from 'vue-carousel';

    export default {
        data() {
            return {};
        },
        components: {
            Carousel,
            Slide
        }
    }
</script>

<style lang="scss">
    .VueCarousel {
        z-index: 10;
        .image-slide {
            width: 100% !important;
            position: relative;
        }

        .text-slide {
            font-size: 3.7rem;
            color: white;
            position: absolute;
            width: 100%;
            top: 200px;
            text-align: center;
            text-shadow: 1px 1px 8px rgba(50, 50, 50, 0.9);
        }

        .button-slide-contentainer {
            position: absolute;
            width: 100%;
            bottom: 100px;

            .button-slide {
                width: 160px;
                letter-spacing: 0.45rem;
                font-size: 1rem;
                color: white;
                border: 2.5px solid white;
                padding: 20px 0px;
                margin: 0px auto;
                text-align: center;
            }
        }

        .VueCarousel-pagination {
            position: absolute;
            bottom: 50px;
        }
    }
</style>