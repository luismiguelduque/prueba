<template>
    <div class="columns boxes is-gapless" :class="(index % 2) ? 'align-inverse':''">
        <div class="column image-box">
            <img :src="getImgUrl(data.image)" :alt="data.title">
        </div>
        <div class="column info-box">
            <img :src="getImgUrl(data.imageIcon)" :alt="data.title">
            <div class="title">
                {{data.title}}
            </div>
            <hr>
            <div class="description">
                {{data.description}}
            </div>
            <div class="buttons">
                <a class="button is-text" href="#">{{'> '+data.link}}</a>
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
    .boxes {
        position: relative;
        top: -10px;
        z-index: 0;
        margin-bottom: 0 !important;
        &.align-inverse{
            flex-direction:row-reverse;
        }
        .image-box {
            img {
                width: auto;
                height: 100%;
                background-color: rgba(248, 247, 216, 0.7);
            }
        }
        .info-box {
            margin: auto !important;
            text-align: center;
            hr {
                height: 2px;
                width: 50px;
                background-color: #4a4a4a;
                margin: 0 auto 25px;
            }
            .description {
                font-size: 0.8rem;
                max-width: 250px;
                margin: auto;
            }
            .buttons {
                justify-content: center;
                .button {
                    text-decoration: none;
                    font-size: 0.8rem;
                    margin-top: 30px;
                }
            }
        }
    }
</style>