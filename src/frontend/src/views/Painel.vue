<template>
    <div class="painel-page">
        <section class="section-1">
            <div class="section-1-left">
                <img src="../assets/perfil_placeholder.png">
                <div class="section-1-left-info">
                    <h1>Bem-vindo, <b>Matheus</b>!</h1>
                    <h2>São Paulo - SP</h2>
                </div>
            </div>
            <img id="settings" src="../assets/settings.svg">
        </section>
        <section class="section-2">
            <h1>Meus Projetos</h1>
            <div class="project-item">
                <img src="../assets/image_placeholder.png">
                <div class="section-2-left">
                    <div>
                        <h1>Carnaval 2023</h1>
                        <h2>Produtor</h2>
                    </div>
                    <h4>Status: <b>Aguardando aprovação</b></h4>
                </div>
            </div>
        </section>
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
    .painel-page {
        min-height: 100vh;
        background-image: url('../assets/background.png');
    }

    .painel-page .section-1 {
        background-color: #f16122;
        display: flex;
        align-items: center;
        padding: 24px;
        position: relative;
    }

    .painel-page .section-1 .section-1-left img {
        border-radius: 50%;
        height: 126px;
    }

    .painel-page .section-1-left {
        display: flex;
    }

    .painel-page .section-1-left h1 {
        margin-left: 16px;
        margin-top: 32px;
        font-size: 28px;
        color: white;
    } 

    .painel-page .section-1-left h2 {
        margin-left: 16px;
        font-size: 18px;
        color: white;
        font-weight: 200;
    } 

    .painel-page .section-1 #settings {
        width: 36px;
        height: 36px;
        position: absolute;
        top: 24px;
        right: 24px;
        cursor: pointer;
        transition: 200ms;
    }

    .painel-page .section-1 #settings:hover {
        width: 52px;
        height: 52px;
    }

    .painel-page .section-2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        padding: 32px;
        max-width: 1068px;
        width: 80%;
    }

    .painel-page .section-2 h1 {
        font-size: 32px;
        color: white;
        width: 100%;
        margin: 16px;
    }

    .painel-page .section-2 .project-item {
        width: 100%;
        padding: 16px;
        display: flex;
        background-color: #f16122;
        border-radius: 16px;
        margin-bottom: 24px;
        cursor: pointer;
        transition: 200ms;
    }

    .painel-page .section-2 .project-item:hover {
        opacity: 0.6;
    }

    .painel-page .section-2 .project-item img {
        height: 118px;
        border-radius: 50%;
    }

    .painel-page .section-2 .project-item h1 {
        margin: 0;
        font-size: 28px;
    }

    .painel-page .section-2 .project-item h2 {
        margin-bottom: auto;
        color: white;
        font-size: 22px;
        font-weight: 300;
    }

    .painel-page .section-2 .project-item h4 {
        margin-top: auto;
        color: white;
        font-size: 18px;
        font-weight: 300;
    }

    .painel-page .section-2 .project-item h4 b {
        color: #bada55;
    }

    .painel-page .section-2 .section-2-left {
        margin-left: 16px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
</style>