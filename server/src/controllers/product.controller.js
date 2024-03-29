const Product = require("../models/product.model");
const cloudinary = require("cloudinary");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findOne({ id: productId });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addProduct = async (req, res) => {
  const { name, description, gender, category, price } = req.body;

  try {
    const myCloud = await cloudinary.uploader.upload(
      req.files.picture.tempFilePath,
      {
        folder: "pictures",
        width: 150,
        crop: "scale",
      }
    );
    const newProduct = new Product({
      name,
      picture: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
      description,
      gender,
      category,
      price,
    });
    console.log(newProduct);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Bad Request" });
  }
};

const renderProducts = async (req, res) => {
  try {
    const {
      gender,
      category,
      sort,
      order,
      search,
      page = 1,
      limit = 10,
    } = req.query;
    console.log(req.query)

    const filter = {};
    if (gender) filter.gender = gender;
    if (category) filter.category = category;
    const searchRegex = new RegExp(search, "i");
    if (search) filter.name = searchRegex;

    let sortOption = {};
    if (sort === "price") {
      sortOption.price = order === "desc" ? -1 : 1;
    }

    let products;
    if (sortOption) {
      products = await Product.find(filter)
        .sort(sortOption)
        .skip((page - 1) * limit)
        .limit(parseInt(limit));
    } else {
      products = await Product.find(filter)
        .skip((page - 1) * limit)
        .limit(parseInt(limit));
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const editProduct = async (req, res) => {
  const productId = req.params.id;
  const updatedProductData = req.body;
  const { name, description, gender, category, price } = updatedProductData;

  try {
    let pictureData = {};
    if (req.files && req.files.picture) {
      const myCloud = await cloudinary.uploader.upload(
        req.files.picture.tempFilePath,
        {
          folder: "pictures",
          width: 150,
          crop: "scale",
        }
      );
      pictureData = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    }

    const updatedProduct = await Product.findOneAndUpdate(
      { _id: productId },
      {
        name,
        description,
        gender,
        category,
        price,
        ...(Object.keys(pictureData).length && { picture: pictureData }),
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// Delete Product
const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  console.log(productId);
  try {
    const deletedProduct = await Product.findOneAndDelete({ _id: productId });
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  renderProducts,
  editProduct,
  deleteProduct,
};
