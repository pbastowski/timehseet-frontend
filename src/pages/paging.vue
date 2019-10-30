<template>
    <div>
        <nuxt-link to="?page=1">Page 1</nuxt-link>
        <nuxt-link to="?page=2">Page 2</nuxt-link>
        <hr />
        <pre>{{ $data }}</pre>
    </div>
</template>

<script>
export default {
    data: () => ({}),
    watchQuery: ['page'],

    asyncData: () => ({ abc: 123 }),

    fetch() {
        console.log('fetch')
    },
    created() {
        console.log('created', this.$route.query)
    },
    mounted() {
        console.log('mounted', this.$route.query)
    }

    // validate() {
    //     console.log('validate')
    // }
}
</script>
