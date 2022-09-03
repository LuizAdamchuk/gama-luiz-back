import { Request, Response } from "express";
import { DeleteSession } from "./DeleteSession";

export class DeleteSessionController {
  constructor(private deleteSession: DeleteSession) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.body;
      await this.deleteSession.execute(id);
      return response.status(200).json({ message: "Deleted" });
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
