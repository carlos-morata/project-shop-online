const pool = require("../config/db_sql");
const queries = require("../queries/productsQueries");

// Creación de Productos
const createProductModel = async (url_image, name, price, description, sizes, category, stock) => {
    try {
        if(!name || !price || !sizes || !category || !stock) {
            throw new Error('Nombre, precio, tallas, categoría y stock son obligatorios');
        }
        const resultCreateProduct = await pool.query(queries.insertProduct, [ url_image, name, price, description, sizes, category, stock ]);
        return resultCreateProduct
    } catch(error) {
        console.error('Error al Crear Producto: ', error.message);
        throw new Error('Error al Crear Producto');
    }
}

// Eliminación de Productos
const deleteProductModel = async (product_id) => {
        const resultDeleteProduct = await pool.query(queries.deleteProduct, [ product_id ]);
        return resultDeleteProduct
}

module.exports = {
    createProductModel,
    deleteProductModel
}