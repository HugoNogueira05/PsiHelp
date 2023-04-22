<?php
if (isset($_POST['Email'])) {

  // EDIT THE 2 LINES BELOW AS REQUIRED
  $email_to = "psihelpp@psihelp.pt";
  $email_subject = "New form submissions";

  function problem($error)
  {
    echo "We are very sorry, but there were error(s) found with the form you submitted. ";
    echo "These errors appear below.<br><br>";
    echo $error . "<br><br>";
    echo "Please go back and fix these errors.<br><br>";
    die();
  }

  // validation expected data exists
  if (
    !isset($_POST['Name']) ||
    !isset($_POST['Email']) ||
    !isset($_POST['Message'])
  ) {
    problem('We are sorry, but there appears to be a problem with the form you submitted.');
  }

  $name = $_POST['Name']; // required
  $email = $_POST['Email']; // required
  $message = $_POST['Message']; // required

  $error_message = "";
  $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

  if (!preg_match($email_exp, $email)) {
    $error_message .= 'The Email address you entered does not appear to be valid.<br>';
  }

  $string_exp = "/^[A-Za-z .'-]+$/";

  if (!preg_match($string_exp, $name)) {
    $error_message .= 'The Name you entered does not appear to be valid.<br>';
  }

  if (strlen($message) < 2) {
    $error_message .= 'The Message you entered do not appear to be valid.<br>';
  }

  if (strlen($error_message) > 0) {
    problem($error_message);
  }

  $email_message = "Form details below.\n\n";

  function clean_string($string)
  {
    $bad = array("content-type", "bcc:", "to:", "cc:", "href");
    return str_replace($bad, "", $string);
  }

  $email_message .= "Name: " . clean_string($name) . "\n";
  $email_message .= "Email: " . clean_string($email) . "\n";
  $email_message .= "Message: " . clean_string($message) . "\n";

  // create email headers
  $headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
  @mail($email_to, $email_subject, $email_message, $headers);
?>

  <!DOCTYPE html>
  <html lang="pt">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>
  </head>

  <body>

    <link href="contacto.css" rel="stylesheet">
    <link rel="stylesheet" href="/geral.css">

    <a href="/index.html"><img class="logo" src="/psihelp logo.png"></a>


    <br><br>
    <h3 style="color:white;">
      <center>Email enviado com sucesso, será contactado brevemente.</center>
    </h3>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

    <div id="footer">
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
      </div>
    </div>
    <label for="burger" class="burger">
      <input id="burger" type="checkbox">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <div class="navMobile">
      <a href="/Intersection_zung/intersection.html" class="mobTestes">Testes</a>
      <a href="/Doencas/doencas.html" class="mobSaude">Doenças</a>
      <a href="#" class="mobSaude">Como ajudar ?</a>
    </div>

  </body>

  </html>

<?php
}
?>