var comandas = JSON.parse(localStorage.getItem("comandas")) || [
  { nome: "Comanda Vazia", preco: 0 },
];

var elLista = document.getElementById("lista");
var elProduto = document.getElementById("produto");
var elBotao1 = document.getElementById("botao1");
var elPrice = document.getElementById("preco");

elBotao1.onclick = function () {
  var nome = elProduto.value;
  var preco = elPrice.value;

  comandas.push({ nome: nome });
  comandas.push({ preco: preco });
  elProduto.value = "";
  elPrice.value = "";
  salvarComanda();
  listarComanda();
};

function salvarComanda() {
  localStorage.setItem("comandas", JSON.stringify(comandas));
}

function listarComanda() {
  elLista.innerHTML = "";
  for (const comanda of comandas) {
    var elPedido = document.createElement("dt");
    var elListaPreco = document.createElement("dd");
    var elNome = document.createTextNode(comanda.nome);
    var elPreco = document.createTextNode(comanda.preco);

    var elExcluir = document.createElement("a");
    elExcluir.setAttribute("href", "#");
    elExcluir.onclick = function () {
      comandas = comandas.filter(function (item) {
        return item.nome !== comanda.nome;
      });
      comandas = comandas.filter(function (item) {
        return item.preco !== comanda.preco;
      });
      salvarComanda();
      listarComanda();
    };

    var elExcluirTexto = document.createTextNode("Excluir");

    elExcluir.appendChild(elExcluirTexto);
    elLista.appendChild(elPedido);
    elListaPreco.appendChild(elPreco);
    elPedido.appendChild(elNome);
    elPedido.appendChild(elExcluir);
  }
}
listarComanda();

function init() {
  document.getElementsByTagName("body")[0].style.display = "flex";
}

function printBill() {
  window.print();
}
