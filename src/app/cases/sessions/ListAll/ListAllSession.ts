import { ISessionRepository } from "../../../repositories/ISessionRepository";

export class ListAllSession {
  constructor(private sessionRepository: ISessionRepository) {}

  async execute(page: number) {
    const result = await this.sessionRepository.listAll(page);
    return result;
  }
}
