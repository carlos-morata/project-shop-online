const queries = {
    // Crear Producto
    insertProduct: 
        ` INSERT INTO products (url_image, name, price, description, sizes, category, stock)
            VALUES ($1, $2, $3, $4, $5, $6, $7);`,
            
    // Eliminar Producto 
    deleteProduct:
        ` DELETE FROM products
            WHERE product_id = $1;
        `
}

module.exports = queries;