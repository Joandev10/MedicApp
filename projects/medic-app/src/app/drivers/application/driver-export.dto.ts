import { DriverModel } from '../domain/driver.model';
import { DtoExport } from '../../shared/interfaces/dto-export.interface';
export interface IDtoDriverExport {
    'Nombre del piloto': string;
}

export class DtoDriverExport implements DtoExport<DriverModel, IDtoDriverExport> {
    mapping(data: DriverModel[]): IDtoDriverExport[] {
        return data.map((el: DriverModel) => {
            return { 'Nombre del piloto': el.name };
        });
    }
}
