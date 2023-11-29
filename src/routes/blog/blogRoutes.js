const addMyBlogController = require("../../api/blog/addMyBlogController");
const deleteCurrentBlogController = require("../../api/blog/deleteCurrentBlogController");
const getBlogsData = require("../../api/blog/getBlogsData");
const getSingleBlogData = require("../../api/blog/getSingleBlogData");
const publicBlogsController = require("../../api/blog/publicBlogsController");
const updateMyBlogsStatus = require("../../api/blog/updateMyBlogsStatus");
const verifyAdmin = require("../../middleware/verifyAdmin");
const verifyToken = require("../../middleware/verifytoken");
const router = require("express").Router();

// save blog data
router.post("/add-my-blog",verifyToken, addMyBlogController);

// get blog data 
router.get("/get-blog-data",getBlogsData);
// get blogs for public
router.get("/get-blog-data-public",publicBlogsController);
// get single blog data
router.get("/get-blog-data-public/:id",getSingleBlogData)

// modified blog status
router.patch("/update-blog-status",verifyToken,verifyAdmin,updateMyBlogsStatus);

// delete current blog
router.delete("/delete-current-blog",verifyToken,verifyAdmin,deleteCurrentBlogController)

module.exports = router;