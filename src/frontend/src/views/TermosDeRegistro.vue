<template>
    <div class="registro-page">
        <div class="registro-content">
            <h1>TERMOS DE REGISTRO</h1>
            <h2>Leia atentamente!</h2>
            <p>O cadastramento de profissionais na plataforma DKS não representa proposta ou promessa de trabalho e nenhum tipo de vínculo empregatício junto à empresa, mas, tão somente, um processo de cadastramento de currículos/experiências que visa facilitar a captação de profissionais para Jobs eventuais de forma mais ágil e eficiente. A empresa se reserva nos direitos de utilização dos contatos cadastrados.</p>
            <div class="check-input">
            <label for="aceito">Estou de acordo com os termos de registro descritos acima.</label>
            <div class="check-wrapper">
                <input name="aceito" type="checkbox">
                <img src="../assets/check.svg" alt="check">
            </div>
        </div>
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
    .registro-page {
        min-height: 100vh;
        align-items: center;
        justify-content: center;
        display: flex;
        background-image: url('../assets/background.png');
    }

    .registro-page .registro-content {
        max-width: 998px;
        padding: 32px;
    }

    .registro-page .registro-content h1 {
        margin-bottom: 16px;
        color: #f16122;
        text-align: center;
    }

    .registro-page .registro-content h2 {
        margin-bottom: 16px;
        color: #bada55;
        text-align: center;
    }

    .registro-page .registro-content p {
        margin-bottom: 16px;
        color: white;
    }
</style>