import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriverModel } from '../../../domain/driver.model';

@Component({
    selector: 'med-form-driver',
    templateUrl: './form-driver.component.html',
    styleUrls: ['./form-driver.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class FormDriverComponent implements OnInit {
    title: string = '';
    formDriver!: FormGroup;
    constructor(
        private fb: FormBuilder,
        private readonly dialogRef: MatDialogRef<FormDriverComponent>,
        @Inject(MAT_DIALOG_DATA) private data?: DriverModel
    ) {
        this.title = data ? 'EDITAR PILOTO' : 'REGISTRAR PILOTO';
        this.buildForm();
    }

    ngOnInit(): void {}

    buildForm() {
        this.formDriver = this.fb.group({
            id: [this.data?.id],
            name: [this.data?.name, [Validators.required]]
        });
    }

    save() {
        if (this.formDriver.invalid) {
            return;
        }
        console.log(this.formDriver.value);
        const data = this.formDriver.value;
        this.dialogRef.close(data);
    }
}
