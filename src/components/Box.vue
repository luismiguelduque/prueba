<template>
    <div class="columns boxes" :class="(index % 2) ? 'align-inverse':''">
        <div class="column image-box">
            <img :src="getImgUrl(data.image)" :alt="data.title">
        </div>
        <div class="column info-box">
            <img :src="getImgUrl(data.imageIcon)" :alt="data.title">
            <div class="title">
                {{data.title}}
            </div>
            <div class="description">
                {{data.description}}
            </div>
            <div class="buttons">
                <a class="button is-link" href="#">{{data.link}}</a>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            data: Object,
            index: Number,
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
    .align-inverse{
        flex-direction:row-reverse;
    }
</style>