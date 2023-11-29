const blogModel = require("../../model/blog/blogModel")

const addMyBlogController = async (req, res) => {
  const newBlogData = new blogModel(req.body);
  try {
    await newBlogData.save();
    res.status(201).json({
      success: true,
      message: "Blog added successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding blog data inside database!",
    });
  }
};

module.exports = addMyBlogController;
