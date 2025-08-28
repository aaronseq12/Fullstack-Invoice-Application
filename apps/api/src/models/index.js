import { DataTypes, Model } from 'sequelize';

class Term extends Model { }
class PricelistItem extends Model { }

export function initModels(sequelize) {
    Term.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        language: {
            type: DataTypes.STRING(2), // 'en' or 'sv'
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Term',
        tableName: 'terms',
    });

    PricelistItem.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        productService: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        inPrice: {
            type: DataTypes.DECIMAL(10, 2),
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
        },
        // Add other fields as needed based on desktop/tablet views
        articleNo: {
            type: DataTypes.STRING,
        },
        inStock: {
            type: DataTypes.INTEGER,
        },
        unit: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        }
    }, {
        sequelize,
        modelName: 'PricelistItem',
        tableName: 'pricelist_items',
    });

    return { Term, PricelistItem };
}
