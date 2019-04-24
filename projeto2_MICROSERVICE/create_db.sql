CREATE TABLE tb_produtos(
    id_produto INTEGER NOT NULL,
    PRIMARY KEY(id_produto),
    id_fornecedor INTEGER NOT NULL,
    id_categoria INTEGER NOT NULL,
    nomeProduto VARCHAR NOT NULL,
    descricaoProduto VARCHAR NOT NULL,
    valorUnitario NUMERIC NOT NULL,
    quantidade INTEGER NOT NULL,
    quantidadeMinima INTEGER NOT NULL,
    fg_ativo INTEGER NOT NULL
);

CREATE TABLE tb_categorias(
    id_categoria INTEGER NOT NULL,
    PRIMARY KEY(id_categoria),
    tituloCategoria VARCHAR NOT NULL,
    descricaoCategoria VARCHAR NOT NULL,
    fg_ativo INTEGER NOT NULL
);

CREATE TABLE tb_vendas(
    id_venda INTEGER NOT NULL,
    PRIMARY KEY(id_venda),
    id_vendedor INTEGER NOT NULL,
    id_categoria INTEGER NOT NULL,
    id_produto INTEGER NOT NULL,
    dataVenda DATE NOT NULL,
    valorTotal NUMERIC NOT NULL,
    quantidade INTEGER NOT NULL,
    fg_ativo INTEGER NOT NULL
);

CREATE TABLE tb_fornecedores(
    id_fornecedor INTEGER NOT NULL,
    PRIMARY KEY(id_fornecedor),
    cnpj VARCHAR NOT NULL,
    razaoSocialtelefone VARCHAR NOT NULL,
    endereco VARCHAR NOT NULL,
    contato VARCHAR NOT NULL,
    fg_ativo INTEGER NOT NULL
);

CREATE TABLE tb_compras(
    id_compra INTEGER NOT NULL,
    PRIMARY KEY(id_compra),
    id_fornecedor INTEGER NOT NULL,
    id_produto INTEGER NOT NULL,
    id_categoria INTEGER NOT NULL,
    dataCompra DATE NOT NULL,
    valorTotal NUMERIC NOT NULL,
    quantidade INTEGER NOT NULL,
    fg_ativo INTEGER NOT NULL
);

CREATE TABLE tb_vendedores(
    id_vendedor INTEGER NOT NULL,
    PRIMARY KEY(id_vendedor),
    cpf VARCHAR NOT NULL,
    nome VARCHAR NOT NULL,
    carteiraTrabalho VARCHAR NOT NULL,
    telefone VARCHAR NOT NULL,
    dataAdmissao DATE NOT NULL,
    fg_ativo INTEGER NOT NULL
);