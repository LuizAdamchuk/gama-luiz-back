import { ISessionRepository } from "../../../repositories/ISessionRepository";

export class DeleteSession {
  constructor(private sessionRepository: ISessionRepository) {}

  async execute(id: number) {
    const result = await this.sessionRepository.delete(id);
    return result;
  }
}
