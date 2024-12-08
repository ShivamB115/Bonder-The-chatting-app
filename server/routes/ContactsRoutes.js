import { Router } from "express";
import { searchContacts } from "../controllers/ContactsController.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";

const constactRoutes = Router();

constactRoutes.post("/search", verifyToken, searchContacts);

export default constactRoutes;