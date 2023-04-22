<?php


class BancoDeDados
{

  private $host;
  private $usuario;
  private $senha;
  private $nomeBanco;
  private $conexao;

  public function __construct($host, $usuario, $senha, $nomeBanco)
  {
    $this->host = $host;
    $this->usuario = $usuario;
    $this->senha = $senha;
    $this->nomeBanco = $nomeBanco;
    $this->conectar();
  }

  private function conectar()
  {
    $this->conexao = new mysqli($this->host, $this->usuario, $this->senha, $this->nomeBanco);
    if ($this->conexao->connect_error) {
      die("Falha na conexão: " . $this->conexao->connect_error);
    }
  }

  public function consultar($query)
  {
    $resultado = $this->conexao->query($query);
    if (!$resultado) {
      die("Erro na consulta: " . $this->conexao->error);
    }
    return $resultado;
  }

  public function inserir($tabela, $dados)
  {
    $campos = array_keys($dados);
    $valores = array_values($dados);
    $query = "INSERT INTO $tabela (" . implode(',', $campos) . ") VALUES ('" . implode("','", $valores) . "')";
    if (!$this->conexao->query($query)) {
      die("Erro na inserção: " . $this->conexao->error);
    }
    return $this->conexao->insert_id;
  }

  public function fechar()
  {
    $this->conexao->close();
  }
}
