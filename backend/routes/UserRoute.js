import express from "express";
import {show,create} from "../controller/UserController.js"

const route = express.Router()

route.get("/viewall",show)
route.post("/add",create)


export default route