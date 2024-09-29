import { Router } from "express";
import imageRoutes from "./image.route";

const router = Router();


router.use("/image", imageRoutes);

export default router;
