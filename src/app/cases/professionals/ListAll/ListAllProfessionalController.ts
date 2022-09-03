import { Request, Response } from "express";
import { ListAllProfessional } from "./ListAllProfessional";

export class ListAllProfessionalController {
  constructor(private listAllProfessional: ListAllProfessional) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { page } = request.params;
      let res = await this.listAllProfessional.execute(Number(page));
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
