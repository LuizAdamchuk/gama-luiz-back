import { Request, Response } from "express";
import { CreateProfessional } from "./CreateProfessional";

export class CreateProfessionalController {
  constructor(private createProfessional: CreateProfessional) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      name,
      email,
      password,
      crp,
      phoneNumber,
      created_at,
      updated_at,
    } = request.body;

    try {
      await this.createProfessional.execute({
        id,
        name,
        email,
        password,
        crp,
        phoneNumber,
        created_at,
        updated_at,
      });
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
