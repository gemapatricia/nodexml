var express = require("express");
var router = express.Router();
const { XMLParser, XMLBuilder, XMLValidator } = require("fast-xml-parser");
const options = { ignoreAttributes: true };
const parser = new XMLParser(options);

router.get("/", function (req, res, next) {
  let jsonObj = "";
  if (req.data) {
    jsonObj = parser.parse(req.data);
    debugger;
    console.log(jsonObj);
  }
  res.render("xml", { title: "XML Reader", data: jsonObj });
});
module.exports = router;
