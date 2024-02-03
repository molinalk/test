import { Router } from "express";
import { Routes } from "./v1/routes";

const appRouter = Router();

export class AppRouter {
    static get v1() {
        appRouter.use("/v1", Routes.routes)
        return appRouter;
    }
}