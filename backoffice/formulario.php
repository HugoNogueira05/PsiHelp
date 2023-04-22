<?php

session_start();
include_once("./core.inc");

include_once("./function.php");


$BD = new BancoDeDados($servername, $username, $password, $dbname);




if ($_REQUEST["gravar"] == "grava") {
    $dados['NOME'] = $_REQUEST['NOME'];
    $dados['EMAIL'] = $_REQUEST['EMAIL'];
    $dados['ESPECIALIDADE'] = $_REQUEST['ESPECIALIDADE'];
    $dados['LOCALIDADE'] = $_REQUEST['LOCALIDADE'];
    $msg = "";

    if ($BD->inserir("PROFISSIONAIS", $dados)) {
        $msg = "Registo inserido com sucesso.";
        $_REQUEST["gravar"] = "";
    } else {
        $msg = "Erro ao gravar registo.";
    }
    unset($_POST);
    unset($_REQUEST);
    // header('Location: formulario.php');
}

if (empty($msg)) {
    $msgDiv = "none";
} else {
    $msgDiv = "";
}


?>

<html>


<script>
    setTimeout(() => {
        const box = document.getElementById('box');
        box.style.display = 'none';
    }, 5000);
</script>
<link rel="stylesheet" href="./bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/index.css">
<link rel="stylesheet" href="/geral.css">

<style>
    body {
        background-image: url(/psihelp-bg.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top center;
        min-height: 100vh;
    }

    #footer_local {
        display: grid;
        grid-template: auto / 10vw auto auto auto;
        column-gap: 1vw;
        position: relative;
        top: 3vh;
        font-family: 'Rubik', sans-serif;
        color: #fff;
        cursor: default;
        font-size: 0.85vw;
    }

    @media screen and (max-device-width: 800px) {
        #footer_local {
            display: none;
        }
    }

    .label {
        background-color: gray;
        opacity: 0.8;
        width: 300px;
        font-size: 2vw;
        font-weight: bold;
        padding: 10px;
    }
</style>

<div class="navbarContainer">
    <a href="/index.html">
        <img src="/psihelp logo.png" class="logo">
    </a>
    <!-- <div class="navBar" id="navbar">
    <p class="testes" id="texto1" onclick="window.location.href='/index.html'">Home</p>
  </div> -->

</div>

<br><br>
<h1 style="color:white;">
    <center>Registar-se como profissional</center>
</h1>
<br>

<div class="d-flex justify-content-center">

    <form action="formulario.php" method="POST" class="form">
        <input type="hidden" name="GRAVAR" value="0">

        <div class="form-group" id="box" style="display: <?php echo $msgDiv; ?>">
            <div class="alert alert-success" role="alert">
                <?php echo $msg; ?>
            </div>
        </div>
        <div class="form-group">
            <label for="nome" class="label">Nome:</label>
            <input type="text" id="nome" name="NOME" placeholder="Insira seu nome completo" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="email" class="label">Email:</label>
            <input type="email" id="email" name="EMAIL" placeholder="Insira seu endereço de email" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="email" class="label">Localidade:</label>
            <select id="especialidade" name="LOCALIDADE" class="form-control" required>
                <option value="">Selecione uma opção</option>
                <option value="Porto">Porto</option>
                <option value="Maia">Maia</option>
                <option value="Matosinhos">Matosinhos</option>
            </select>
        </div>
        <div class="form-group">
            <label for="especialidade" class="label">Especialidade:</label>
            <select id="especialidade" name="ESPECIALIDADE" class="form-control" required>
                <option value="">Selecione uma opção</option>
                <option value="Psiquiatria">Psiquiatria</option>
                <option value="Psicologia clí­nico">Psicologia clí­nico</option>
                <option value="Psiquiatria infantil e do adolescente">Psiquiatria infantil e do adolescente</option>
            </select>
        </div>
        <button type="reset" class="btn btn-primary" value="limpar" name="limpa">Limpar</button>
        <button type="submit" class="btn btn-secondary" value="grava" name="gravar">Gravar</button>
    </form>
</div>


<div id="footer_local">
    <img src="/psihelp logo.png" class="logoFooter">
    <div id="colInforma">
        <span id="titulo" class="tituloFooter">Informa-te</span>
        <a href="/index.html" id="contacto">Home</a>
        <a href="/Doencas/doencas.html" id="contacto">Doenças</a>
        <a href="/comoajudar/comoajudar.html">Como ajudar ?</a>
    </div>
    <div id="colInforma">
        <span id="titulo" class="tituloFooter">Recursos</span>
        <a href="/Intersection_zung/intersection.html" id="contacto">Realiza um Teste</a>
        <a href="/backoffice/listagem.php" id="contacto">Encontrar um profissional</a>
        <a href="/backoffice/formulario.php" id="contacto">Registar-se como profissional</a>
    </div>
    <div id="colInforma">
        <span id="titulo" class="tituloFooter">Contactos</span>
        <a href="/Contacto/contacto.html">Formulário de Contacto</a>
        <a href="mailto:equipa@psihelp.pt?subject=[Info] - Contacto site PsiHelp.pt">Email: equipa@psihelp.pt</a>
        <a href="/testemunhos/testemunhos.html">Testemunhos</a>
    </div>
</div>

</html>