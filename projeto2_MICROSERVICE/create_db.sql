CREATE TABLE tb_produtos(
    id_produto INTEGER,
    id_fornecedor INTEGER,
    id_categoria INTEGER,
    nomeProduto VARCHAR,
    descricaoProduto VARCHAR,
    valorUnitario NUMERIC,
    quantidade INTEGER,
    quantidadeMinima INTEGER,
    fg_ativo INTEGER
);

CREATE TABLE tb_categorias(
    id_categoria INTEGER,
    tituloCategoria VARCHAR,
    descricaoCategoria VARCHAR,
    fg_ativo INTEGER
);

CREATE TABLE tb_vendas(
    id_venda INTEGER,
    id_vendedor INTEGER,
    id_categoria INTEGER,
    id_produto INTEGER,
    dataVenda DATE,
    valorTotal NUMERIC,
    quantidade INTEGER,
    fg_ativo INTEGER
);