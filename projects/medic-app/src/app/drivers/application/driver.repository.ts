import { Observable } from 'rxjs';
import { DriverModel } from '../domain/driver.model';
import { ResultPage } from './result-page.interface';

export abstract class DriverRepository {
    abstract getPage(page: number): Observable<ResultPage>;
    abstract getAll(): Observable<DriverModel[]>;
    abstract save(driver: Partial<DriverModel>): Observable<DriverModel>;
    abstract update(id: number, driver: Partial<DriverModel>): Observable<DriverModel>;
    abstract delete(id: number): Observable<DriverModel>;
}
