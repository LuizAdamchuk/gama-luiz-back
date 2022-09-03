import { ICreateProfessionalRequestDTO } from "../cases/professionals/Create/CreateProfessionalDTO";
import { IGetProfessionalResponseDTO } from "../cases/professionals/Get/GetProfessionalDTO";
import { IListAllProfessionalResponseDTO } from "../cases/professionals/ListAll/IListAllProfessionalDTO";
import {
  IUpdateProfessionalRequestDTO,
  IUpdateProfessionalResponseDTO,
} from "../cases/professionals/Update/UpdateProfessionalDTO";

export interface IProfessionalRepository {
  save(professional: ICreateProfessionalRequestDTO): Promise<void>;
  listAll(page: number): Promise<IListAllProfessionalResponseDTO[]>;
  get(id: number): Promise<IGetProfessionalResponseDTO>;
  delete(id: number): Promise<void>;
  update(
    id: number,
    professional: IUpdateProfessionalRequestDTO
  ): Promise<IUpdateProfessionalResponseDTO>;
}
