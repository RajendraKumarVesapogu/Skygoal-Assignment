const express = require("express");
const userRouter = require("./auth-route");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("HATEOAS will be implemented soon");
});
router.use("/user", userRouter);


module.exports = router;