<template>
    <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
            <div class="columns">
                <div class="column" v-for="(item, index) in items" :key="index">
                    <!-- <img class="image-gallery" :src="item.image"> -->
                    {{ item.image }}
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
        }
    }
</script>

<style lang="scss">
    .image-gallery{
        width: 100%;
    }
</style>