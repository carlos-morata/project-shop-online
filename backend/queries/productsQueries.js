const queries = {
    // Crear Producto
    insertProduct: 
        ` INSERT INTO products (url_image, name, price, description, sizes, category, stock, gender)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`,
            
    // Eliminar Producto 
    deleteProduct:
        ` DELETE FROM products
            WHERE product_id = $1;`,
            
    // Leer Productos
    getProductsByGender:
        ` SELECT * FROM products 
        WHERE LOWER(gender) = LOWER($1);`,
    
    // Leer Categoría por Género 
    getCategoriesByGender: 
        ` SELECT DISTINCT category FROM products
            WHERE gender = $1`,
    
    // Leer Productos Por Categoría y Género
    getProductsByGenderAndCategory: 
        ` SELECT * FROM products
            WHERE LOWER(gender) = LOWER($1) AND LOWER(category) = LOWER($2);`,
    
    // Leer un Producto por ID
    getProductsById:
        ` SELECT * FROM products
            WHERE gender = $1 AND category = $2 AND product_id = $3;` 
}

module.exports = queries;