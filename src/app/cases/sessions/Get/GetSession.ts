import { ISessionRepository } from "../../../repositories/ISessionRepository";

export class GetSession {
  constructor(private sessionRepository: ISessionRepository) {}

  async execute(id: number) {
    const result = await this.sessionRepository.get(id);
    return result;
  }
}
