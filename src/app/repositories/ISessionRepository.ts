import { ICreateSessionRequestDTO } from "../cases/sessions/Create/CreateSessionDTO";
import { IGetSessionResponseDTO } from "../cases/sessions/Get/GetSessionDTO";
import { IListAllSessionResponseDTO } from "../cases/sessions/ListAll/IListAllSessionDTO";
import {
  IUpdateSessionRequestDTO,
  IUpdateSessionResponseDTO,
} from "../cases/sessions/Update/UpdateSessionDTO";

export interface ISessionRepository {
  save(session: ICreateSessionRequestDTO): Promise<void>;
  listAll(page: number): Promise<IListAllSessionResponseDTO[]>;
  get(id: number): Promise<IGetSessionResponseDTO>;
  delete(id: number): Promise<void>;
  update(
    id: number,
    session: IUpdateSessionRequestDTO
  ): Promise<IUpdateSessionResponseDTO>;
}
