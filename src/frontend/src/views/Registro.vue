<template>
    <div class="page-registro">
        <div class="page-wrapper">
            <h1 class="page-title">Registro de colaborador</h1>
            <form action="">
                <div class="row">
                    <div class="text-input">
                        <label for="nome">Nome</label>
                        <input name="nome" type="text" placeholder="Nome">
                    </div>
                    <div class="text-input">
                        <label for="sobrenome">Sobrenome</label>
                        <input name="sobrenome" type="text" placeholder="Sobrenome">
                    </div>
                </div>
                <div class="row">
                    <div class="text-input">
                        <label for="cellphone">Celular (com DDD)</label>
                        <input name="cellphone" type="text" placeholder="Número com DDD">
                    </div>
                    <div class="text-input">
                        <label for="cpf">CPF</label>
                        <input name="cpf" type="text" placeholder="CPF">
                    </div>
                    <div class="text-input">
                        <label for="rg">RG</label>
                        <input name="rg" type="text" placeholder="RG">
                    </div>
                </div>
                <div class="row">
                    <div class="text-input">
                        <label for="phone">Telefone Fixo</label>
                        <input name="phone" type="text" placeholder="Telefone Fixo">
                    </div>
                    <div class="text-input">
                        <label for="cep">CEP</label>
                        <input name="cep" type="text" placeholder="CEP">
                    </div>
                </div>
                <div class="row">
                    <div class="text-input">
                        <label for="address">Endereço</label>
                        <input name="address" type="text" placeholder="Endereço">
                    </div>
                </div>
                <div class="row">
                    <div class="text-input">
                        <label for="address_number">Número</label>
                        <input name="address_number" type="text" placeholder="Número">
                    </div>
                    <div class="text-input">
                        <label for="complement">Complemento</label>
                        <input name="complement" type="text" placeholder="Complemento">
                    </div>
                </div>
                <div class="row">
                    <div class="text-input">
                        <label for="district">Bairro</label>
                        <input name="district" type="text" placeholder="Bairro">
                    </div>
                    <div class="text-input">
                        <label for="city">Cidade</label>
                        <input name="city" type="text" placeholder="Cidade">
                    </div>
                </div>
                <div class="row">
                    <div class="text-input">
                        <label for="state">Estado</label>
                        <input name="state" type="text" placeholder="Estado">
                    </div>
                    <div class="select-input">
                        <label for="zone">Zona</label>
                        <select name="zone">
                            <option value="Sul">Sul</option>
                            <option value="Leste">Leste</option>
                            <option value="Oeste">Oeste</option>
                            <option value="Norte">Norte</option>
                            <option value="Centro">Centro</option>
                            <option value="ABC">ABC</option>
                            <option value="Diadema">Diadema</option>
                            <option value="Fora de SP">Fora de SP</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="text-input">
                        <label for="email">E-mail</label>
                        <input name="email" type="email" placeholder="E-mail">
                    </div>
                    <div class="text-input">
                        <label for="repeat_email">Repetir e-mail</label>
                        <input name="repeat_email" type="email" placeholder="Repetir e-mail">
                    </div>
                </div>
                <div class="row">
                    <div class="text-input">
                        <label for="password">Senha</label>
                        <input name="password" type="password" placeholder="Senha">
                    </div>
                    <div class="text-input">
                        <label for="repeat_password">Repetir senha</label>
                        <input name="repeat_password" type="password" placeholder="Repetir senha">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
    .page-registro {
        padding: 24px;
        min-height: 100vh;
        background: url("../assets/background.png");
    }

    .page-registro .page-wrapper {
        max-width: 800px;
        margin: auto; 
    }

    .page-registro .page-title {
        color: white;
    }

    .page-registro .row {
        display: flex;
        flex-wrap: wrap;
        gap: 0 26px;
    }

    .page-registro .row .text-input {
        flex: 1;
        min-width: 200px;
    }

    .page-registro .select-input {
        flex: 1;
        min-width: 200px;
    }
</style>