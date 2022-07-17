<template>
  <v-app>
    <v-card width="400" class="mx-auto mt-15">
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-spacer></v-spacer>
      <v-card-text>
        <v-form>
          <v-text-field v-model="input.username" label="Username" prepend-icon="mdi-account-circle" />
          <v-text-field v-model="input.password" :type="showPassword ? 'text' : 'password'" label="Password"
            prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' :
            'mdi-eye-off'" @click:append="showPassword = !showPassword" />
            {{ text }}
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success" @click="register()">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info" elevation="8" @click="login()">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'Login-view',
  data() {
    return {
      text: "",
      isAuthenticated: false,
      showPassword: false,
      data: "",
      input: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      // async function getUserAsync(username, password)
      // {
      //   let response = await fetch("http://localhost:3000/login-api?username=" + username + "&password=" + password);
      //   let data = await response.json()
      //   // this.isAuthenticated = data.isAuthenticated;
      //   return data;
      // }
      if (this.input.username != "" && this.input.password != "") {
        // getUserAsync(this.input.username, this.input.password)
        fetch("http://localhost:3000/login-api?username=" + this.input.username + "&password=" + this.input.password)
          .then(response => response.json())
          .then(data => (this.isAuthenticated = data.isAuthenticated))
        alert(this.isAuthenticated);
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
    },
    register() {
      if (this.input.username != "" && this.input.password != "") {
        fetch("http://localhost:3000/register-api?username=" + this.input.username + "&password=" + this.input.password)
          .then(response => response.json())
        this.text = "You have successfully registered";
      }
    }
  }
}
</script>
