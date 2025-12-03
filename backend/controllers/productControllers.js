const productModels = require("../models/productModels");

// Crear Producto
const createProduct = async(req, res) => {
    try {
        const { url_image, name, price, description, sizes, category, stock } = req. body;

        if(!url_image || !name || !price || !description || !sizes || !category || !stock) {
            return res.status(400).json({ message: "Faltan datos obligatorios para crear un producto." });
        }
        const newProduct = await productModels.createProductModel(url_image, name, price, description, sizes, category, stock);
        res.status(201).json({ message: "Producto Creado!", product: newProduct });
    } catch(error) {
       res.status(500).json({ message: "Error en el servidor", error});
    }
}

// Eliminar Producto
const deleteProduct = async(req, res) => {
    try {
        const { product_id } = req.params;
        const oldProduct = await productModels.deleteProductModel(product_id);
        res.status(201).json({ message: "Producto Borrado!", product: oldProduct });
    } catch(error) {
       res.status(500).json({ message: "Error en el servidor", error});
    }
}

module.exports = {
    createProduct,
    deleteProduct
}