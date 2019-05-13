const Sequelize = require('sequelize');

const config = require('../db_config')

console.log(config)

const sequelize = new Sequelize('database', 'username', 'password', {
    host: '127.0.0.1',
    dialect: 'postgres'
})

const Categorias = sequelize.define('tb_categorias', {
    id_categoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    tituloCategoria: {
        type:Sequelize.STRING,
        allowNull: false,
        unique: 'compositeIndex'
    },
    descricaoCategoria: {
        type:Sequelize.STRING,
        allowNull: false,
        unique: 'compositeIndex'
    },
    fg_ativo: {
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

const Vendas = sequelize.define('tb_vendas', {
    id_venda: {
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    id_vendedor: {
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model: Vendedores,
            key: 'id_vendedor',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    id_categoria: {
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model: Categorias,
            key: 'id_categorias',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    id_produto: {
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model: Produtos,
            key: 'id_produto',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    dataVenda: {
        type:Sequelize.DATE,
        allowNull:false
    },
    valorTotal: {
        type:Sequelize.NUMBER,
        allowNull:false
    },
    quantidade:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    fg_ativo: {
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

const Vendedores = sequelize.define('tb_vendedores', {
    id_vendedor: {
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    cpf: {
        type:Sequelize.STRING,
        allowNull:false
    },
    nome: {
        type:Sequelize.STRING,
        allowNull:false
    },
    carteiraTrabalho: {
        type: Sequelize.STRING,
        allowNull:false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull:false
    },
    dataAdmissao: {
        type:Sequelize.DATE,
        allowNull:false
    },
    fg_ativo: {
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

const Fornecedores = sequelize.define('tb_fornecedores', {
    id_fornecedor: {
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    cnpj: {
        type:Sequelize.STRING,
        allowNull:false
    },
    razaoSocial: {
        type: Sequelize.STRING,
        allowNull:false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull:false
    },
    endereco: {
        type:Sequelize.STRING,
        allowNull:false
    },
    contato: {
        type:Sequelize.STRING,
        allowNull:false
    },
    fg_ativo: {
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

const Compras = sequelize.define('tb_compras' ,{
    id_compra: {
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    id_fornecedor: {
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model: Fornecedores,
            key: 'id_fornecedore',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    id_produto: {
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model: Produtos,
            key: 'id_produto',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }

    },
    id_categoria: {
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model: Categorias,
            key: 'id_categoria',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }

    },
    dataCompra: {
        type:Sequelize.DATE,
        allowNull:false
    },
    valorTotal: {
        type: Sequelize.NUMBER,
        allowNull:false
    },
    quantidade: {
        type:Sequelize.INTEGER,
        allowNull:false
    },
    fg_ativo: {
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

const Produtos = sequelize.define('tb_produtos', {
    id_fornecedor: {
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model: Fornecedores,
            key: 'id_fornecedor',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    id_produto: {
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
    },
    id_categoria: {
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model: Categorias,
            key: 'id_categoria',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    nomeProduto: {
        type:Sequelize.STRING,
        allowNull:false
    },
    descricaoProduto: {
        type:Sequelize.STRING,
        allowNull:false
    },
    valorUnitario: {
        type:Sequelize.NUMBER,
        allowNull:false
    },
    quantidade: {
        type:Sequelize.INTEGER,
        allowNull:false
    },
    quantidadeMinima: {
        type:Sequelize.INTEGER,
        allowNull:false
    },
    fg_ativo: {
        type:Sequelize.INTEGER,
        allowNull:false
    }
});


sequelize.sync({force:true})


module.exports = {
    Vendedores,
    Categorias,
    Fornecedores,
    Produtos,
    Compras,
    Vendas
}