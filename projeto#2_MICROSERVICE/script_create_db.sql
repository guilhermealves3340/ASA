CREATE TABLE tb_vendedores(
    id_vendedor INTEGER NOT NULL PRIMARY KEY,
    cpf VARCHAR NOT NULL,
    nome VARCHAR NOT NULL,
    carteiraTrabalho VARCHAR NOT NULL,
    telefone VARCHAR NOT NULL,
    dataAdmissao DATE NOT NULL,
    fg_ativo INTEGER NOT NULL
);

CREATE TABLE tb_categorias(
    id_categoria INTEGER NOT NULL PRIMARY KEY,
    tituloCategoria VARCHAR NOT NULL,
    descricaoCategoria VARCHAR NOT NULL,
    fg_ativo INTEGER NOT NULL
);

CREATE TABLE tb_fornecedores(
    id_fornecedor INTEGER NOT NULL PRIMARY KEY,
    cnpj VARCHAR NOT NULL,
    razaoSocialtelefone VARCHAR NOT NULL,
    endereco VARCHAR NOT NULL,
    contato VARCHAR NOT NULL,
    fg_ativo INTEGER NOT NULL
);

CREATE TABLE tb_produtos(
    id_produto INTEGER NOT NULL PRIMARY KEY,
    id_fornecedor INTEGER,
    FOREIGN KEY (id_fornecedor) REFERENCES tb_fornecedores(id_fornecedor),
    id_categoria INTEGER,
    FOREIGN KEY (id_categoria) REFERENCES tb_categorias(id_categoria),
    nomeProduto VARCHAR NOT NULL,
    descricaoProduto VARCHAR NOT NULL,
    valorUnitario NUMERIC NOT NULL,
    quantidade INTEGER NOT NULL,
    quantidadeMinima INTEGER NOT NULL,
    fg_ativo INTEGER NOT NULL
);

CREATE TABLE tb_compras(
    id_compra INTEGER NOT NULL PRIMARY KEY,
    id_fornecedor INTEGER,
    FOREIGN KEY (id_fornecedor) REFERENCES tb_fornecedores(id_fornecedor),
    id_produto INTEGER,
    FOREIGN KEY (id_produto) REFERENCES tb_produtos(id_produto),
    id_categoria INTEGER,
    FOREIGN KEY (id_categoria) REFERENCES tb_categorias(id_categoria),
    dataCompra DATE NOT NULL,
    valorTotal NUMERIC NOT NULL,
    quantidade INTEGER NOT NULL,
    fg_ativo INTEGER NOT NULL
);

CREATE TABLE tb_vendas(
    id_venda INTEGER NOT NULL PRIMARY KEY,
    id_vendedor INTEGER,
    id_categoria INTEGER,
    id_produto INTEGER,
    dataVenda DATE NOT NULL,
    valorTotal NUMERIC NOT NULL,
    quantidade INTEGER NOT NULL,
    fg_ativo INTEGER NOT NULL,

    FOREIGN KEY (id_venda) REFERENCES tb_vendas(id_venda),
    FOREIGN KEY (id_categoria) REFERENCES tb_categorias(id_categoria),
    FOREIGN KEY (id_produto) REFERENCES tb_produtos(id_produto)
);