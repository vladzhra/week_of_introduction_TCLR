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
      if (this.input.username != "" && this.input.password != "") {
        (async () => {
          const response = await fetch("http://localhost:3000/login-api?username=" + this.input.username + "&password=" + this.input.password);
          const data = await response.json()
          if (data.isAuthenticated == true) {
            this.$emit("authenticated", true);
            this.$router.replace({ name: "secure" });
          } else {
            this.text = "Invalid username or password";
            this.input.username = "";
            this.input.password = "";
          }
        })();
      } else {
        this.text = "Please enter username and password";
        this.input.username = "";
        this.input.password = "";
      }
    },
    register() {
      if (this.input.username != "" && this.input.password != "") {
        (async () => {
          const response = await fetch("http://localhost:3000/register-api?username=" + this.input.username + "&password=" + this.input.password)
          const data = await response.json()
          if (data.isAuthenticated == true) {
            this.text = "Registration Successful. Please Login";
          } else {
            this.text = "An Error Occurred. Please Try Again";
            this.input.username = "";
            this.input.password = "";
          }
        })();
      } else {
        this.text = "Please enter username and password";
        this.input.username = "";
        this.input.password = "";
      }
    }
  }
}
</script>
