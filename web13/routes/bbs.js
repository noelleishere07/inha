var express = require("express");
var router = express.Router();

/* 게시판 */
router.get("/", function (req, res, next) {
  res.render("index", { title: "게시판", pageName: "bbs/list.ejs" });
});

// 루트일 때 index로 렌더링
// 확장자 : .ejs (서버에서 보낸 변수 출력 가능)

/* 글쓰기 */
router.get("/insert", function (req, res, next) {
  res.render("index", { title: "글쓰기", pageName: "bbs/insert.ejs" });
});

/* 게시글 정보 */
router.get("/:id", function (req, res, next) {
  const id = req.params.id;
  console.log("id......................", id);
  res.render("index", { title: "게시글 정보", pageName: "bbs/read.ejs", id });
});

/* 게시글 수정 */
router.get("/update/:id", function (req, res, next) {
  const id = req.params.id;
  console.log("id......................", id);
  res.render("index", { title: "게시글 수정", pageName: "bbs/update.ejs", id });
});

module.exports = router;
