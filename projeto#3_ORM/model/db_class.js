const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: postgres
})


class Categorias extends Sequelize.Model {}
Categorias.init({
    id_categoria: Sequelize.INTEGER,
    tituloCategoria: Sequelize.STRING,
    descricaoCategoria: Sequelize.STRING,
    fg_ativo: Sequelize.INTEGER
}, {sequelize, modelName: 'tb_categorias'});

class Vendas extends Sequelize.Model {}
Vendas.init({
    id_venda: Sequelize.INTEGER,
    id_vendedor: Sequelize.INTEGER,
    id_categoria: Sequelize.INTERGER,
    id_produto: Sequelize.INTEGER,
    dataVenda: Sequelize.DATE,
    valorTotal: Sequelize.NUMBER,
    quantidade: Sequelize.INTERGER,
    fg_ativo: Sequelize.INTEGER
}, {sequelize, modelName: 'tb_vendas'});

class Vendedores extends Sequelize.Model {}
Vendedores.init({
    id_vendedor: Sequelize.
    cpf: Sequelize.STRING,
    nome: Sequelize.STRING,
    carteiraTrabalho: Sequelize.STRING,
    telefone: Sequelize.STRING,
    dataAdmissao: Sequelize.DATE,
    fg_ativo: Sequelize.INTEGER
}, {sequelize, modelName: 'tb_vendedores'});

class Fornecedores extends Sequelize.Model {}
Fornecedores.init({
    id_fornecedor: Sequelize.INTEGER,
    cnpj: Sequelize.STRING,
    razaoSocial: Sequelize.STRING,
    telefone: Sequelize.STRING,
    endereco: Sequelize.STRING,
    contato: Sequelize.STRING,
    fg_ativo: Sequelize.INTEGER
}, {sequelize, modelName: 'tb_fornecedores'});

class Compras extends Sequelize.Model {}
Compras.init({
    id_compra: Sequelize.INTEGER,
    id_fornecedor: Sequelize.INTEGER,
    id_produto: Sequelize.INTEGER,
    id_categoria: Sequelize.INTEGER,
    dataCompra: Sequelize.DATE,
    valorTotal: Sequelize.NUMBER,
    quantidade: Sequelize.INTEGER,
    fg_ativo: Sequelize.INTEGER
}, {sequelize, modelName: 'tb_compras'});

class Compras extends Sequelize.Model {}
Compras.init({
    id_fornecedor: Sequelize.INTEGER,
    id_produto: Sequelize.INTEGER,
    id_categoria: Sequelize.INTEGER,
    nomeProduto: Sequelize.STRING,
    descricaoProduto: Sequelize.STRING,
    valorUnitario: Sequelize.NUMBER,
    quantidade: Sequelize.INTEGER,
    quantidadeMinima: Sequelize.INTEGER,
    fg_ativo: Sequelize.INTEGER
}, {sequelize, modelName: 'tb_produtos'});


sequelize.sync()
  .then(() => User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });