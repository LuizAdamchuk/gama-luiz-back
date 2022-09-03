import { ISessionRepository } from "../../../repositories/ISessionRepository";
import { IUpdateSessionRequestDTO } from "./UpdateSessionDTO";

export class UpdateSession {
  constructor(private sessionRepository: ISessionRepository) {}

  async execute(id: number, session: IUpdateSessionRequestDTO) {
    const result = await this.sessionRepository.update(id, session);
    return result;
  }
}
