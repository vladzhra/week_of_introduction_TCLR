<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
        <p>{{ text }}</p>
        <!-- <label id="mytext">{{ text }}</label> -->
    </div>
    <div class="apire">Total vue packages: {{totalVuePackages}}</div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                totalVuePackages: null,
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        // created() {
        // },
        methods: {
            login() {
                if (this.input.username != "" && this.input.password != "") {
                    // isAuthenticated = false;
                    fetch("http://localhost:3002/login-api", [{username: this.input.username, password: this.input.password}])
                    .then(response => response.json())
                    .then(data => (this.totalVuePackages = data.isAuthenticated));
                    // this.totalVuePackages = isAuthenticated;
                    // if (isAuthenticated == true) {
                    //     this.$emit("authenticated", true);
                    //     this.$router.push({ path: "/secure" });
                    //     // this.$router.replace({ name: "secure" });
                    // } else {
                    //     this.text = "The username and / or password is incorrect"
                    //     this.input.username = "";
                    //     this.input.password = "";
                    // }
                } else {
                    this.text = "A username and password must be present";
                    this.input.username = "";
                    this.input.password = "";
                }
            }
        }
    }
</script>
<!-- this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password -->
<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>