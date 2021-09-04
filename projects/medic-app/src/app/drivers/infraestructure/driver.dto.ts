import { DriverModel } from '../domain/driver.model';
export const mappingDriver = (data: any | any[]): DriverModel | DriverModel[] => {
    const isArray = Array.isArray(data);
    if (isArray) {
        const drivers: DriverModel[] = [];
        for (const el of data) {
            drivers.push({ id: el.id, name: el.nombre });
        }
        return drivers;
    } else {
        return { id: data.id, name: data.nombre };
    }
};
