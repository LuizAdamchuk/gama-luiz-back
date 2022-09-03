import { Request, Response } from "express";
import { GetSession } from "./GetSession";

export class GetSessionController {
  constructor(private getSession: GetSession) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;
    try {
      const res = await this.getSession.execute(Number(id));
      return response.status(201).json(res);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
