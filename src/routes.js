const router = require("express").Router();
const path = require("path");

router.get("/*", (request, response) => {
    response.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

module.exports = router;