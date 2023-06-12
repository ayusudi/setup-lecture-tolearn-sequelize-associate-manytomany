const router = require("express").Router()
const LectureController = require("../controllers/LectureController")

router.get("/", LectureController.helloWorld)
router.get("/movies", LectureController.listMovie)
router.get("/actors", LectureController.listActor)
router.get("/likes", LectureController.listMyLikeMovie)
router.get("/characters", LectureController.listCast)
router.get("/*", (req, res) => res.status(404).json({message: "Routes not found"}))

module.exports = router