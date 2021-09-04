import { DriverRepository } from './driver.repository';
import { ResultPage } from './result-page.interface';
import { DriverModel } from '../domain/driver.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class DriverUseCase {
    constructor(private driverRepository: DriverRepository) {}
    getPage(page: number): Observable<ResultPage> {
        return this.driverRepository.getPage(page);
    }
    getAll(): Observable<DriverModel[]> {
        return this.driverRepository.getAll();
    }
    save(driver: Partial<DriverModel>): Observable<DriverModel> {
        return this.driverRepository.save(driver);
    }
    update(id: number, driver: Partial<DriverModel>): Observable<DriverModel> {
        return this.driverRepository.update(id, driver);
    }
    delete(id: number): Observable<DriverModel> {
        return this.driverRepository.delete(id);
    }
}
