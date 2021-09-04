import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface Auth {
    correo: string;
    password: string;
}

@Component({
    selector: 'medl-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form!: FormGroup;
    @Output('onLogin') onLogin: EventEmitter<Auth> = new EventEmitter<Auth>();
    hide: boolean = true;
    emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    passwordPattern: string = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';

    get emailField(): FormControl {
        return this.form.get('correo') as FormControl;
    }
    get passwordField(): FormControl {
        return this.form.get('password') as FormControl;
    }

    constructor(private fb: FormBuilder) {
        this.buildForm();
    }

    ngOnInit(): void {}

    buildForm() {
        this.form = this.fb.group({
            correo: ['sergio@correo.com', [Validators.required, Validators.pattern(this.emailPattern)]],
            password: ['123', [Validators.required]],
            recaptchaReactive: [null, [Validators.required]]
        });
    }

    login() {
        if (this.form.invalid) {
            return;
        }
        console.log(this.form.value);
        this.onLogin.emit(this.form.value);
    }

    togglePassword() {
        this.hide = !this.hide;
    }
}
