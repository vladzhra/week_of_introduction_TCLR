<template>
    <h1 @click="showConfetti">🎉 Congratulations!</h1>
</template>

<script>
    import JSConfetti from 'js-confetti'

    const confetti = new JSConfetti()
    export default {
        name: 'Secure',
        data() {
            return {};
        },
        mounted() {
            this.showConfetti()
        },
        methods: {
            showConfetti() {
                confetti.addConfetti()
            }
        }
    }
</script>

<style scoped>
    #secure {
        background-color: #b0f8ff;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
        margin: auto;
    }
</style>