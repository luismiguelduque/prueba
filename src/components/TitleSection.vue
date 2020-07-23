<template>
    <div class="Columns mt-6 mb-4">
        <div class="Column">
            <div class="Columns">
                <div class="Column has-text-centered">
                    <span class="subtitle">{{ subtitle }}</span>
                </div>
            </div>
            <div class="Columns">
                <div class="Column has-text-centered">
                    <span class="title">{{ title }}</span>
                </div>
            </div>
            <div class="Columns">
                <div class="Column has-text-centered">
                    <span>{{ bottom }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TitleSection",
        props: {
          title: String,
          subtitle: String,
          bottom: String,
        },
    }
</script>

<style scoped>

</style>