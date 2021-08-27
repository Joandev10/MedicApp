import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface User {
    email: string;
    password: string;
}

@Component({
    selector: 'medl-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form!: FormGroup;
    @Output('onLogin') onLogin: EventEmitter<User> = new EventEmitter<User>();
    hide: boolean = true;
    emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    passwordPattern: string = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';

    get emailField(): FormControl {
        return this.form.get('email') as FormControl;
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
            email: ['jose.7z@hotmail.com', [Validators.required, Validators.pattern(this.emailPattern)]],
            password: ['AM9*XVUq', [Validators.required, Validators.pattern(this.passwordPattern)]]
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
