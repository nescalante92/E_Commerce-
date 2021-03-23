// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToMany(Category, {
  through: {
    model: Tag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'product_categories'
});

// Categories have many Products
Category.belongsToMany(Product, {
  through: {
    model: Tag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'category_products'
})


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'product_tags'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'tag_products'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
