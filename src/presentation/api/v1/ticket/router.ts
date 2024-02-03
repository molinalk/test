import { Router } from "express";
import { TicketController } from "./controller";

export class TicketRouter {
    static get routes() {
        const ticket = Router();
        const controller = new TicketController();

        ticket.post("/", controller.add);
        
        return ticket;
    }
}