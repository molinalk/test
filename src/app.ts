import { Envs } from "./config/envs";
import { AppRouter } from "./presentation/api/router";
import { Server } from "./presentation/server";
import express from "express";
(() => {
    main();
})();

function main() {
    const server = new Server(
        Envs.PORT,
        express(),
        [AppRouter.v1]
    )
    server.start();
}
