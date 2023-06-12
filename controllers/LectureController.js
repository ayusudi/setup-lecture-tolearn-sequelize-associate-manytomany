const {Movie, User, Like, Actor, Cast} = require("../models")

class LectureController {
  static helloWorld(req, res){
    res.send("hello world")
  }
  static async listMovie(req, res) {
    try {
      let data = await Movie.findAll()
      res.status(200).json(data)
    } catch (error) {
      console.log(error);
      res.status(500).json({message: "Internal Server Error (ISE)"})
    }
  }
  static async listActor(req, res) {
    try {
      let data = await Actor.findAll()
      res.status(200).json(data)
    } catch (error) {
      console.log(error);
      res.status(500).json({message: "ISE"})
    }
  }
  static async listCast(req, res) {
    try {
      let data = await Cast.findAll()
      res.status(200).json(data)
    } catch (error) {
      console.log(error);
      res.status(500).json({message: "ISE"})
    }
  }
  static async listMyLikeMovie(req, res) {
    try {
      let data = await Like.findAll()
      res.status(200).json(data)
    } catch (error) {
      console.log(error);
      res.status(500).json({message: "ISE"})
    }
  }
  
}

module.exports = LectureController