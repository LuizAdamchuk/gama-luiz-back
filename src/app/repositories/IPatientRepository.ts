import { ICreatePatientRequestDTO } from "../cases/patients/Create/CreatePatientDTO";
import { IGetPatientResponseDTO } from "../cases/patients/Get/GetPatientDTO";
import { IListAllPatientResponseDTO } from "../cases/patients/ListAll/IListAllPatientDTO";
import {
  IUpdatePatientRequestDTO,
  IUpdatePatientResponseDTO,
} from "../cases/patients/Update/UpdatePatientDTO";

export interface IPatientRepository {
  save(patient: ICreatePatientRequestDTO): Promise<void>;
  listAll(page: number): Promise<IListAllPatientResponseDTO[]>;
  get(id: number): Promise<IGetPatientResponseDTO>;
  delete(id: number): Promise<void>;
  update(
    id: number,
    patient: IUpdatePatientRequestDTO
  ): Promise<IUpdatePatientResponseDTO>;
}
