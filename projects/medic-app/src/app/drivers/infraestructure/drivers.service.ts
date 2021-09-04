import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/medic-app/src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DriverRepository } from '../application/driver.repository';
import { mappingDriver } from './driver.dto';
import { ResultPage } from '../application/result-page.interface';
import { DriverModel } from '../domain/driver.model';
import { mappingDriverResponse } from './driver-response.dto';

@Injectable()
export class DriversService extends DriverRepository {
    constructor(private http: HttpClient) {
        super();
    }
    getPage(page: number): Observable<ResultPage> {
        return this.http.get<ResultPage>(`${environment.pathAPI}/drivers/page/${page}/${environment.pageSize}`).pipe(
            map((res: any) => {
                const { records, totalRecords } = res;
                return {
                    records: mappingDriver(records),
                    totalRecords
                };
            })
        );
    }
    getAll(): Observable<DriverModel[]> {
        return this.http.get<DriverModel[]>(`${environment.pathAPI}/drivers`).pipe(
            map((res: any) => {
                return mappingDriver(res) as DriverModel[];
            })
        );
    }

    save(driver: Partial<DriverModel>): Observable<DriverModel> {
        const driverResponse = mappingDriverResponse(driver);
        return this.http.post<DriverModel>(`${environment.pathAPI}/drivers`, driverResponse).pipe(
            map((res: any) => {
                return mappingDriver(res) as DriverModel;
            })
        );
    }
    update(id: number, driver: Partial<DriverModel>): Observable<DriverModel> {
        const driverResponse = mappingDriverResponse(driver);
        return this.http.put<DriverModel>(`${environment.pathAPI}/drivers/${id}`, driverResponse).pipe(
            map((res: any) => {
                return mappingDriver(res) as DriverModel;
            })
        );
    }
    delete(id: number): Observable<DriverModel> {
        return this.http.delete<DriverModel>(`${environment.pathAPI}/drivers/${id}`).pipe(
            map((res: any) => {
                return mappingDriver(res) as DriverModel;
            })
        );
    }
}
