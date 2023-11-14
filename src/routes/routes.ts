import Express from "express";
import Rolecontroller from "../controllers/Rolecontroller";

const router = Express.Router();
router.get("/role", Rolecontroller.GetRole)

export default router