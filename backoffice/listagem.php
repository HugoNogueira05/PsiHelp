<html>
<link rel="stylesheet" href="./bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">

<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<link rel="stylesheet" href="/index.css">
<link rel="stylesheet" href="/geral.css">
<!-- <script src="https://cdn.datatables.net/1.13.4/js/dataTables.bootstrap4.min.js"></script> -->

<style>
  table.dataTable thead .sorting:after,
  table.dataTable thead .sorting:before,
  table.dataTable thead .sorting_asc:after,
  table.dataTable thead .sorting_asc:before,
  table.dataTable thead .sorting_asc_disabled:after,
  table.dataTable thead .sorting_asc_disabled:before,
  table.dataTable thead .sorting_desc:after,
  table.dataTable thead .sorting_desc:before,
  table.dataTable thead .sorting_desc_disabled:after,
  table.dataTable thead .sorting_desc_disabled:before {
    bottom: .5em;
  }

  body {
    background-image: url(/psihelp-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    min-height: 100vh;

  }


  .tabela {
    align-items: center;
    margin: 25px;
    background-color: rgb(228, 228, 228);
  }

  .tabela_div {
    align-items: center;
    margin: 100px;
    background-color: rgb(228, 228, 228);
  }

  #footer_local {
    display: grid;
    grid-template: auto / 10vw auto auto auto;
    column-gap: 1vw;
    position: relative;
    top: 0vh;
    font-family: 'Rubik', sans-serif;
    color: #fff;
    cursor: default;
    font-size: 0.85vw;
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
  <center>Procura um profissional na tua Cidade</center>
</h1>
<div class="tabela_div">
  <div class="tabela">

    <?php

    session_start();
    include_once("./core.inc");

    include_once("./function.php");


    $BD = new BancoDeDados($servername, $username, $password, $dbname);


    $resultado = $BD->consultar("select * from PROFISSIONAIS");


    // Cria a tabela HTML usando a sintaxe do Bootstrap
    echo '<br><table id="dtBasicExample" class="table table-striped table-bordered table-sm">';
    echo '<thead>';
    echo '<tr>';
    echo '<th>NOME</th>';
    echo '<th>EMAIL</th>';
    echo '<th>LOCALIDADE</th>';
    echo '<th>ESPECIALIDADE</th>';
    echo '</tr>';
    echo '</thead>';
    echo '<tbody>';

    // Verifica se a consulta retornou algum resultado
    if (mysqli_num_rows($resultado) > 0) {
      // Percorre cada linha do resultado
      while ($row = mysqli_fetch_assoc($resultado)) {
        // Cria uma linha da tabela para cada linha do resultado
        echo '<tr>';
        echo '<td>' . $row['NOME'] . '</td>';
        echo '<td>' . $row['EMAIL'] . '</td>';
        echo '<td>' . $row['LOCALIDADE'] . '</td>';
        echo '<td>' . $row['ESPECIALIDADE'] . '</td>';
        echo '</tr>';
      }
    } else {
      // Caso não haja resultados
      echo '<tr><td colspan="3">Nenhum resultado encontrado.</td></tr>';
    }

    echo '</tbody>';
    echo '</table><br>';

    ?>
  </div>
</div>
<script>
  $(document).ready(function() {
    $('#dtBasicExample').DataTable({
      "language": {
        "lengthMenu": "Mostra _MENU_ por página",
        "zeroRecords": "Sem registos",
        "info": "Mostra página _PAGE_ de _PAGES_",
        "infoEmpty": "No records available",
        "infoFiltered": "(filtered from _MAX_ total records)",
        "search": "Procura",
        "paginate": {
          "previous": "Anterior",
          "next": "Próxima",
        }
      }
    });
    $('.dataTables_length').addClass('bs-select');
  });
</script>

<div class="psa">
    <h6>A equipa psihelp não se responsabiliza por possíveis serviços mal-prestados ou falsos apesar de nos esforçarmos para evitar essas situações</h6>
</div>
<style>
    .psa{
        text-align:center;
        color:white;
    }
</style>
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