const form = document.querySelector('#infos-prod');
const tabela = document.querySelector('#tbody');
let idx = form.idx.value;
let usuarioId = Number(sessionStorage.getItem('logado'));

const session = localStorage.getItem("session");

function logadoOuNao() {
  if (session) {
    sessionStorage.setItem("log", session);
    usuarioId = Number(sessionStorage.getItem('log'));
    if (!usuarioId || isNaN(usuarioId)) {
      window.location.href = "index.html";
    }
  }
}

function atualizarLocalStorage(produtos) {
  localStorage.setItem("produtos", JSON.stringify(produtos));
}

function recuperarLocalStorage() {
  return JSON.parse(localStorage.getItem('produtos') || '[]');
}

function salvarProduto(e) {
  e.preventDefault();

  const nome = form.nome.value;
  const preco = Number(form.preco.value);
  const prime = form.prime.checked;

  if (idx === "novo") {
    const produtos = recuperarLocalStorage();
    let idp = 0;
    for (const pro of produtos) {
      if (pro.usuarioId === usuarioId) {
        idp = Number(pro.id);
      }
    }
    produtos.push({ id: idp + 1, nome, preco, prime, usuarioId });
    atualizarLocalStorage(produtos);
    preencherTabela();
    form.reset();
    console.log(idx, "teste");
  } else {
    let produto = {
      id: idx,
      nome,
      preco,
      prime,
      usuarioId
    };
    const produtos = recuperarLocalStorage();
    const indexProduto = produtos.findIndex((produto) => produto.id === idx);
    if (indexProduto >= 0) {
      atualizarProduto(idx, produto);
      preencherTabela();
      form.reset();
      idx = "novo";
      console.log('editar', idx);
    }
  }
}

function preencherTabela() {
  const produtos = recuperarLocalStorage();
  tabela.innerHTML = "";
  for (const produto of produtos) {
    if (produto.usuarioId === usuarioId) {
      tabela.innerHTML += `
        <tr>
          <th scope="row">${produto.id}</th>
          <td>${produto.nome}</td>
          <td>R$ ${produto.preco},00</td>
          <td>${produto.prime ? "Sim" : "Não"}</td>
          <td>
            <img type="button" width="40" src="../img/1214428.png" onclick="removerProduto(${produto.id})" />
            <img type="button" width="40" src="../img/84380.png" onclick="editarProduto(${produto.id})" />
          </td>
        </tr>`;
    }
  }
}

const removerProduto = (id)=> {
  const produtos = recuperarLocalStorage();
  const indexProduto = produtos.findIndex((produto) => produto.id === id);
  if (indexProduto < 0) return;
  produtos.splice(indexProduto, 1);
  atualizarLocalStorage(produtos);
  alert('PRODUTO REMOVIDO');
  preencherTabela();
};

const editarProduto = (id) => {
  const produtos = recuperarLocalStorage();
  const indexProduto = produtos.findIndex((produto) => produto.id === id);
  form.nome.value = produtos[indexProduto].nome;
  form.preco.value = produtos[indexProduto].preco;
  form.prime.checked = produtos[indexProduto].prime;
  idx = id;
};

const atualizarProduto = (id, produto) => {
  const produtos = recuperarLocalStorage();
  const indexProduto = produtos.findIndex((produto) => produto.id === id);
  produtos[indexProduto] = produto;
  atualizarLocalStorage(produtos);
};

// EVENTOS
form.addEventListener("submit", salvarProduto);
document.addEventListener('DOMContentLoaded', preencherTabela);

//funcao de sair
document.querySelector('#sair').addEventListener('click', function() {
  saindo();
});

function saindo() {
  sessionStorage.removeItem("logado");
  localStorage.removeItem("session");
  window.location.href = "signin.html";}
