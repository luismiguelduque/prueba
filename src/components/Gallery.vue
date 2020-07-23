<template>
    <div class="columns mt-6">
        <div class="column is-half is-offset-one-quarter">
            <div class="columns is-gapless is-multiline">
                <div class="column is-4" v-for="(item, index) in items" :key="index">
                    <img class="image-gallery" :src="getImgUrl(item.image)">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import galleryItems from "../utils/galleryItems";
    export default {
        data(){
            return{
                items: [],
            }
        },
        mounted() {
            let number = Math.floor(Math.random() * 10);
            if(number == 0 || number == 1 || number == 2){
                this.items = galleryItems.sort()
            }else if(number == 3 || number == 4 || number == 5){
                this.items = galleryItems.reverse();
            }else{
                this.items = galleryItems;
            }
        },
        methods: {
            getImgUrl(image){
                var images = require.context('../assets/', false, /\.png$/);
                return images('./' + image + ".png");
            },
        },
    }
</script>

<style lang="scss">
    .image-gallery{
        width: 100%;
        height: 100%;
        border: 1px solid white;
    }
</style>