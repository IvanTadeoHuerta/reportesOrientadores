<template>
    <div class="main">
        <div class="login-screen"></div>
        <div class="login-center">
            <div class="container min-height" style="margin-top: 20px;">
                <div class="row">
                    <div class="col-xs-4 col-md-offset-8">
                        <div class="login" id="card">
                            <div class="front signin_form">
                                <p>{{mensajeLogin}}</p>
                                <form class="login-form">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input type="email" class="form-control" placeholder="Ingresa tu usuario">
                                            <span class="input-group-addon">
                                                <i class="glyphicon glyphicon-user"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input type="password" class="form-control" placeholder="Ingresa tu contraseña">
                                            <span class="input-group-addon">
                                                <i class="glyphicon glyphicon-lock"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="checkbox">
                                        <label><input type="checkbox">{{recordar}}</label>
                                    </div>

                                    <div class="form-group sign-btn">
                                        <input type="submit" class="btn" :value="btnLogin">
                                        <p>
                                            <a href="#" class="forgot">{{ forgot }}</a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                            <div class="back signup_form" style="opacity: 0;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data(){
        return {
            mensajeLogin:'Bienvenido',
            recordar: 'Recordar',
            forgot: 'No puedes acceder a tu cuenta?',
            btnLogin: 'Ingresar'
        }
    },
    mounted: function() {

        $("#card").flip({
            trigger: 'manual'
        })

        $(".signup_link").click(function() {

            $(".signin_form").css('opacity', '0')
            $(".signup_form").css('opacity', '100')


            $("#card").flip(true)

            return false;
        })

        $("#unflip-btn").click(function() {

            $(".signin_form").css('opacity', '100')
            $(".signup_form").css('opacity', '0')

            $("#card").flip(false)

            return false;

        })
    }
}
</script>
<style lang="scss" >
@import url(https://fonts.googleapis.com/css?family=Roboto:400,900,700,500,300,100);
@import url(https://fonts.googleapis.com/css?family=Raleway:400,500);
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css);


/* ==========================================================================
   Author's custom styles
   ========================================================================== */

html, body {
   background-color: black
}

body {
    font-family: 'Raleway',sans-serif;
    position: relative;
}

.in-page {
    min-height: 520px;
}

.main {
    position: relative;
}

a {
    color: #1b5a7c;
}

a:hover, a:focus {
    color: #1b5a7c;
}

.btn-cyan {
    background-color: #1b5a7c;
    color: #fff;
}

.btn-cyan:hover {
    color: #fff;
    opacity: 0.9;
}

.form-control:focus {
    border-color: #1b5a7c;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(24, 204, 162, 0.6);
    outline: 0 none;
}

.min-height {
    min-height: 380px;
}

.login-screen {
    background-image: url('../assets/login.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}

.login-screen:before {
    content: "";
    background: rgba(0,0,0, 0.5);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.login-center {
    text-align: left;
}

.login {
    width: 320px;
    color: #fff;
}

.login .login-form {
    text-align: left;
}

.login label {
    color: #fff;
}

.login-form .input-group .form-control {
    background: none;
    height: 44px;
    color: #ddd;
}

.login-form .input-group .input-group-addon {
    background: none;
}

.login-form .input-group .input-group-addon .glyphicon {
    color: #1b5a7c;
}

.login-form .input-group .form-control::-moz-placeholder {
    color: #fff;
    opacity: 0.3;
}

.login .sign-btn input.btn {
    background: #1b5a7c;
    border-color: #1b5a7c;
    color: #fff;
    width: 180px;
}

.login .sign-btn a {
    text-decoration: none;
}

.login .checkbox {
    margin-top: 20px;
    margin-bottom: 20px;
}

.login .forgot {
    display: inline-block;
    margin: 20px 0;
}
</style>
