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

module.exports = router;
