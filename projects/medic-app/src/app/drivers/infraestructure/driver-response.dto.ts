import { DriverModel } from '../domain/driver.model';

export interface DriverResponse {
    nombre: string;
}
export const mappingDriverResponse = (
    data: Partial<DriverModel> | Partial<DriverModel>[]
): DriverResponse | DriverResponse[] => {
    const isArray = Array.isArray(data);
    if (isArray) {
        const drivers: DriverResponse[] = [];
        for (const el of data as any[]) {
            drivers.push({ nombre: el.name });
        }
        return drivers;
    } else {
        return { nombre: (data as any).name };
    }
};
