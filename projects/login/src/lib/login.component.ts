import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface User {
    email: string;
    password: string;
}

@Component({
    selector: 'medl-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    form!: FormGroup;
    @Output('onLogin') onLogin: EventEmitter<User> = new EventEmitter<User>();

    constructor(private fb: FormBuilder) {
        this.buildForm();
    }

    ngOnInit(): void {}

    buildForm() {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
    }

    login() {
        if (this.form.invalid) {
            return;
        }
        console.log(this.form.value);
        this.onLogin.emit(this.form.value);
    }
}
