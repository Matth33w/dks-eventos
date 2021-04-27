<template>
  <div class="login-page">
    <div class="login-wrapper">
      <div class="image-wrapper">
        <img class="img-logo" src="../assets/pin.png" alt="Logo">
      </div>
      <div class="text-input">
        <label for="email">E-mail</label>
        <input name="email" type="email" placeholder="E-mail">
      </div>
      <div class="text-input">
        <label for="password">Senha</label>
        <input name="password" type="password" placeholder="Senha">
      </div>
      <div class="bottom-wrapper">
        <div class="check-input">
          <label for="logado">Manter logado?</label>
          <div class="check-wrapper">
            <input name="logado" type="checkbox">
            <img src="../assets/check.svg" alt="check">
          </div>
        </div>
        <div class="register-wrapper"><router-link to="/register">Registrar-se</router-link></div>
      </div>
      <div class="button-wrapper">
        <button class="button-1">
          ENTRAR
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-height: 400px;
    background-image: url('../assets/background.png');
  }

  .login-page .login-wrapper {
    max-width: 480px;
    width: 80%;
  }

  .login-page .image-wrapper {
    text-align: center;
  }

  .login-page .img-logo {
    width: 128px;
  }

  .login-page .bottom-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .login-page .button-wrapper {
    text-align: center;
  }

  .login-page .register-wrapper {
    text-align: right;
  }
</style>