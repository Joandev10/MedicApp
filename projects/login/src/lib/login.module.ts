import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [ReactiveFormsModule, FlexLayoutModule],
    exports: [LoginComponent]
})
export class LoginModule {}
