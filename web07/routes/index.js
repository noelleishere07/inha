var express = require("express");
var router = express.Router();

/* 홈페이지 */
router.get("/", function (req, res, next) {
  res.render("index", { title: "홈페이지", pageName: "home.ejs" });
});

// 루트일 때 index로 렌더링
// 확장자 : .ejs (서버에서 보낸 변수 출력 가능)

module.exports = router;
