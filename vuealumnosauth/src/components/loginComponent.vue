<template>
    <div class="container">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
            <label class="form-control" for="username">Username:</label>
            <input class="form-control" type="text" id="username" v-model="username" required>

            <label class="form-control" for="password">Password:</label>
            <input class="form-control" type="password" id="password" v-model="password" required>

            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import Global from '@/Global';
    export default {
        name: "loginComponent", 
        data() {
            return {
                username: '',
                password: '',
            };
        },
        methods: {
            async handleLogin() {
                try {
                    var request = "api/auth/login";
                    var url = Global.apiUrls + request;
                    const response = await axios.post(url, {
                        username: this.username,
                        password: this.password,
                    });

                    console.log('Respuesta del servidor:', response);
                    if (response.data && response.data.response) {
                        const token = response.data.response;
                        console.log("Token:", token);

                        // Almacena el token en el localStorage
                        // y el nombre que le pones es el mismo en los dos componentes
                        localStorage.setItem("token", token);

                        // Redirige a la página que requiere el token
                        this.$router.push('/alumnos');
                    } else {
                        console.error('Error en el login: Respuesta incorrecta del servidor');
                    }
                } catch (error) {
                    console.error('Error en el login:', error);
                    // Puedes manejar el error aquí, por ejemplo,
                    // mostrar un mensaje de error al usuario.
                }
            },
        },
    };
</script>


