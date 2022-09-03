import { Request, Response } from "express";

export class WelcomeController {
  public async handle(request: Request, response: Response): Promise<Response> {
    return response.status(200).json({
      message: "Pagina para adicionar consulta",
    });
  }
}
