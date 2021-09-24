const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// matches with "/api/books"
router.route("/").get(booksController.findAll).post(booksController.save);

// matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findOne)
  .delete(booksController.remove);

module.exports = router;
