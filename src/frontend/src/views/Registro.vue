<template>
    <div class="page-registro">
        <div class="page-wrapper">
            <div class="img-header-wrapper">
                <img class="img-header" src="../assets/logo.png">
            </div>
            <h1 class="page-title">Registro de colaborador</h1>
            <form action="">
                <div class="row">
                    <div class="text-input">
                        <label for="nome">Nome</label>
                        <input name="nome" type="text" placeholder="Nome" v-model="form.nome">
                    </div>
                    <div class="text-input">
                        <label for="sobrenome">Sobrenome</label>
                        <input name="sobrenome" type="text" placeholder="Sobrenome" v-model="form.sobrenome">
                    </div>
                </div>
                <div class="row">
                    <div class="text-input">
                        <label for="celular">Celular (com DDD)</label>
                        <input name="celular" type="text" placeholder="Número com DDD" v-model="form.celular">
                    </div>
                    <div class="text-input">
                        <label for="cpf">CPF</label>
                        <input name="cpf" type="text" placeholder="CPF" v-model="form.cpf">
                    </div>
                    <div class="text-input">
                        <label for="rg">RG</label>
                        <input name="rg" type="text" placeholder="RG" v-model="form.rg">
                    </div>
                </div>
                <div class="row">
                    <div class="text-input">
                        <label for="telefone">Telefone Fixo</label>
                        <input name="telefone" type="text" placeholder="Telefone Fixo" v-model="form.telefone">
                    </div>
                    <div class="text-input">
                        <label for="cep">CEP</label>
                        <input name="cep" type="text" placeholder="CEP" v-model="form.cep">
                    </div>
                </div>
                <div class="row">
                    <div class="text-input">
                        <label for="endereco">Endereço</label>
                        <input name="endereco" type="text" placeholder="Endereço" v-model="form.endereco">
                    </div>
                </div>
                <div class="row">
                    <div class="text-input">
                        <label for="numero_endereco">Número</label>
                        <input name="numero_endereco" type="text" placeholder="Número" v-model="form.numero_endereco">
                    </div>
                    <div class="text-input">
                        <label for="complemento">Complemento</label>
                        <input name="complemento" type="text" placeholder="Complemento" v-model="form.complemento">
                    </div>
                </div>
                <div class="row">
                    <div class="text-input">
                        <label for="bairro">Bairro</label>
                        <input name="bairro" type="text" placeholder="Bairro" v-model="form.bairro">
                    </div>
                    <div class="text-input">
                        <label for="cidade">Cidade</label>
                        <input name="cidade" type="text" placeholder="Cidade" v-model="form.cidade">
                    </div>
                </div>
                <div class="row">
                    <div class="text-input">
                        <label for="estado">Estado</label>
                        <input name="estado" type="text" placeholder="Estado" v-model="form.estado">
                    </div>
                    <div class="select-input">
                        <label for="zona">Zona</label>
                        <select name="zona" v-model="form.zona">
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
                        <input name="email" type="email" placeholder="E-mail" v-model="form.email">
                    </div>
                    <div class="text-input">
                        <label for="repetir_email">Repetir e-mail</label>
                        <input name="repetir_email" type="email" placeholder="Repetir e-mail" v-model="form.repetir_email">
                    </div>
                </div>
                <div class="row">
                    <div class="text-input">
                        <label for="senha">Senha</label>
                        <input name="senha" type="password" placeholder="Senha" v-model="form.senha">
                    </div>
                    <div class="text-input">
                        <label for="repetir_senha">Repetir senha</label>
                        <input name="repetir_senha" type="password" placeholder="Repetir senha" v-model="form.repetir_senha">
                    </div>
                </div>
                <div class="row">
                    <div class="text-input">
                        <label for="data_nascimento">Data de Nascimento</label>
                        <input name="data_nascimento" type="date" placeholder="Data de Nascimento" v-model="form.data_nascimento">
                    </div>
                    <div class="select-input">
                        <label for="genero">Sexo</label>
                        <select name="genero" v-model="form.genero">
                            <option value="">Escolha seu gênero</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="select-input">
                        <label for="metodo_conhecimento">Como conheceu a DKS?</label>
                        <select name="metodo_conhecimento" v-model="form.metodo_conhecimento">
                            <option value="">Método Indicado</option>
                            <option value="Cultura">Cultura</option>
                            <option value="Jornal">Jornal</option>
                            <option value="TV">TV</option>
                            <option value="Indicação Pessoal">Indicação Pessoal</option>
                            <option value="Internet">Internet</option>
                            <option value="Rede Sociais">Rede Sociais</option>
                            <option value="Outros">Outros</option>
                        </select>
                    </div>
                    <div class="text-input">
                        <label for="indicador">Indicador</label>
                        <input name="indicador" type="text" placeholder="Indicador" v-model="form.indicador">
                    </div>
                </div>
                <div class="row">
                    <div class="select-input">
                        <label for="tamanho_camiseta">Tamanho da Camiseta</label>
                        <select name="tamanho_camiseta" v-model="form.tamanho_camiseta">
                            <option value="">Tamanho</option>
                            <option value="PP">PP</option>
                            <option value="P">P</option>
                            <option value="M">M</option>
                            <option value="G">G</option>
                            <option value="GG">GG</option>
                            <option value="XG">XG</option>
                        </select>
                    </div>
                    <div class="select-input">
                        <label for="possui_cnpj">Possui CNPJ?</label>
                        <select name="possui_cnpj" v-on:change="cnpjReadOption" v-model="form.possui_cnpj">
                            <option value="">MEI, ME e outras</option>
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                        </select>
                    </div>
                </div>
                <div class="invisible" id="cnpjInput">
                    <div class="row">
                        <div class="text-input">
                            <label for="cnpj">CNPJ</label>
                            <input name="cnpj" type="text" placeholder="CNPJ" v-model="form.cnpj">
                        </div>
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
            form:{
                nome: '',
                sobrenome: '',
                celular: '',
                cpf: '',
                rg: '',
                telefone: '',
                cep: '',
                endereco: '',
                numero_endereco: '',
                complemento: '',
                bairro: '',
                cidade: '',
                estado: '',
                zona: '',
                email: '',
                repetir_email: '',
                senha: '',
                repetir_senha: '',
                data_nascimento: '',
                genero: '',
                metodo_conhecimento: '',
                indicador: '',
                tamanho_camiseta: '',
                possui_cnpj: '',
                cnpj: ''
            }
        }
    },

    methods: {
        cnpjReadOption(event) {
            const cnpjIn = document.querySelector("#cnpjInput");
            if(event.target.value == "Sim")
                cnpjIn.classList.remove("invisible");
            else
                cnpjIn.classList.add("invisible");
        },

        changeSelectValue(event) {
            this[event.target.name] = event.target.value;
        }
    }
}
</script>

<style scoped>
    .page-registro {
        padding: 24px 24px 128px 24px;
        min-height: 100vh;
        background: url("../assets/background.png");
        background-attachment: fixed;
    }

    .page-registro .page-wrapper {
        max-width: 800px;
        margin: auto; 
    }

    .page-registro .page-wrapper .img-header-wrapper {
        text-align: center;
    }

    .page-registro .page-wrapper .img-header {
        max-width: 240px;
        width: 80%;
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