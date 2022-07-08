<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
        <p>{{ text }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                text: "",
                isAuthenticated: false,
                data: "",
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
                    async function getUserAsync()
                    {
                        let response = await fetch("http://localhost:3000/login-api?username=" + this.input.username + "&password=" + this.input.password);
                        if (!response.ok) {
                            const message = `An error has occured: ${res.status} - ${res.statusText}`;
                            throw new Error(message);
                        }
                        let data = await response.json()
                        return data;
                    }
                    data = getUserAsync()
                    .then(data => (this.isAuthenticated = data.isAuthenticated))
                    .then(data => console.log(data));

                    // const res = await fetch("http://localhost:3000/login-api?username=" + this.input.username + "&password=" + this.input.password)
                    // .then(response => response.json())
                    // .then(data => (this.isAuthenticated = data.isAuthenticated))
                    // alert(res.status);
                    // const response = await
                    // const json = await response.json();
                    // console.log(json);
                    // alert(json);
                    if (this.isAuthenticated == true) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        this.text = "The username and / or password is incorrect"
                        this.input.username = "";
                        this.input.password = "";
                    }
                } else {
                    this.text = "A username and password must be present";
                    this.input.username = "";
                    this.input.password = "";
                }
            }
        }
    }
</script>

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