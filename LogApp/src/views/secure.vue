<template>
    <v-app>
        <v-card width="400" class="mx-auto mt-15">
            <v-card-title>
                <h1 @click="showConfetti" class="display-1">🎉 Logged!</h1>
            </v-card-title>
        </v-card>
    </v-app>
</template>

<script>
    import JSConfetti from 'js-confetti'

    const confetti = new JSConfetti()
    export default {
        name: 'Secure-view',
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