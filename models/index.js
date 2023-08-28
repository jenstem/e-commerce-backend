// Models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products + Category foreign key
Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

// Categories + Products foreign key
Category.hasMany(Product, {
    foreignKey: 'category_id'
});

// Products + Tags foreign key
Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id',
    onDelete: 'CASCADE',
});

// Tags + Products foreign key
Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
