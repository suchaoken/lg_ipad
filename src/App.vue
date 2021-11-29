<template>
    <div>
        <router-view />
    </div>
</template>

<style lang="scss">
</style>
<script>
export default {
    mounted() {
        console.log(process.env.VUE_APP_BASE_URL);
    },
};
</script>