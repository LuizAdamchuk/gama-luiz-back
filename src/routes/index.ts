import { Router } from "express";
import { WelcomeController } from "../app/cases/welcome/welcome";
import professionalsRouter from "./professionals.routes";
import patientsRouter from "./patients.route";
import sessionsRouter from "./sessions.route";

const router = Router();
router.get("/", new WelcomeController().handle);
router.use("/professionals", professionalsRouter);
router.use("/patients", patientsRouter);
router.use("/sessions", sessionsRouter);

export default router;
