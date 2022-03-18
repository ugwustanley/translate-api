const express = require("express")

// const { getSlangs, getSlang, addSlang, addSlangs ,  deleteSlang } = require("../controllers/slangs.controller")

const {  addSlang , addSlangs , getSlang , getSlangs , deleteSlang } = require("../controllers/slangs.controller")

const route = express.Router()

route.get("/", (req, res) =>{   res.send("hello from home") })

route.get('/slang' , getSlang)

route.get('/slangs' ,  getSlangs)

route.post('/slang' , addSlang)

route.post("/slangs", addSlangs)

route.delete("/slang", deleteSlang)



module.exports = route;

