import { Session } from "../../../entities/Session";
import { ISessionRepository } from "../../../repositories/ISessionRepository";
import { ICreateSessionRequestDTO } from "./CreateSessionDTO";

export class CreateSession {
  constructor(private sessionRepository: ISessionRepository) {}

  async execute(data: ICreateSessionRequestDTO) {
    const session = new Session(data);
    await this.sessionRepository.save(session);
  }
}
