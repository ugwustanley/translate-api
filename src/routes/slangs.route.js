const express = require("express")

const { getSlangs, getSlang, addSlang, deleteSlang } = require("../controllers/Slangs.controller")

const route = express.Router()

route.get("/", (req, res) =>{   res.send("hello from home") })

route.get('/slang' , getSlang)

route.get('/slangs' ,  getSlangs)

route.post('/add_slang' , addSlang)

route.post("/delete_slang", deleteSlang)



module.exports = route;

