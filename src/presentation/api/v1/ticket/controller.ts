import { Request, Response } from "express";

export class TicketController {
    constructor() { }

    add = (req: Request, res: Response) => {
        res.json({ body: req.body, message: "kevin" });
    }
}