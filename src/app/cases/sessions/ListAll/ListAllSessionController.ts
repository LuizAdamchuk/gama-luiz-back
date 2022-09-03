import { Request, Response } from "express";
import { ListAllSession } from "./ListAllSession";

export class ListAllSessionController {
  constructor(private listAllSession: ListAllSession) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { page } = request.params;
      let res = await this.listAllSession.execute(Number(page));
      if (res.length == 0) {
        throw new Error("No data for this pagination");
      }
      return response.status(201).json(res);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
