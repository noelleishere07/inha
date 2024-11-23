var express = require("express");
var router = express.Router();

/* 도서 검색 */
router.get("/book", function (req, res, next) {
  res.render("index", { title: "도서 검색", pageName: "kakao/book.ejs" });
});

/* 도서 정보 */
router.get("/book/info", function (req, res, next) {
  const title = req.query.title;
  const thumbnail = req.query.thumbnail;
  const price = req.query.price;
  const authors = req.query.authors;
  const publisher = req.query.publisher;
  const isbn = req.query.isbn;
  const contents = req.query.contents;
  console.log("title", title);
  const info = { title, thumbnail, price, authors, publisher, isbn, contents };
  res.render("index", { title: "도서정보", pageName: "kakao/info.ejs", info });
});

/* 지역 검색 */
router.get("/local", function (req, res, next) {
  res.render("index", { title: "지역 검색", pageName: "kakao/local.ejs" });
});

/* 블로그 검색 */
router.get("/blog", function (req, res, next) {
  res.render("index", { title: "블로그 검색", pageName: "kakao/blog.ejs" });
});

module.exports = router;
