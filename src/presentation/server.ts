import express, { Express, Router } from "express";

export class Server {
    constructor(
        private readonly port: number,
        private readonly service: Express,
        private readonly router: Router | Router[]
    ) {
        this.config();
    }

    private config() {
        this.service.use(express.json());
        this.service.use(express.urlencoded({ extended: true }));
        this.service.use("/api",this.router);
    }

    start() {
        this.service.listen(this.port, () => {
            console.log(`server runnig on http://localhost:${this.port}`);
        })
    }
}