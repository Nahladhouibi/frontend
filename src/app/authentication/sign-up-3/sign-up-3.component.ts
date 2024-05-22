import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { AuthenticationService } from './../../shared/services/authentication.service';
import { AUTH_URL } from 'src/app/shared/config/url.config';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';


@Component({
    templateUrl: './sign-up-3.component.html'
})

export class SignUp3Component {

    signUpForm: FormGroup;

    submitForm(): void {
        for (const i in this.signUpForm.controls) {
            this.signUpForm.controls[ i ].markAsDirty();
            this.signUpForm.controls[ i ].updateValueAndValidity();
        }
        let url=`${AUTH_URL}/security/api/auth/patient/register`
        this.authService.register(url,this.signUpForm.value).subscribe(res=>{
            this.message.success("Created succeflly")
            this.router.navigate(['/authentication/login-doctor'])

        },(error=>{
            this.message.error(error.error)
        }))
    }

    updateConfirmValidator(): void {
        Promise.resolve().then(() => this.signUpForm.controls.checkPassword.updateValueAndValidity());
    }

    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return { required: true };
        } else if (control.value !== this.signUpForm.controls.password.value) {
            return { confirm: true, error: true };
        }

    }

    constructor(
        private router:Router,
        private fb: FormBuilder,private message:NzMessageService,private authService:AuthenticationService) {
    }

    ngOnInit(): void {
        this.signUpForm = this.fb.group({
            firstName         : [ null, [ Validators.required ] ],
            lastName         : [ null, [ Validators.required ] ],
            sexe         : [ null, [ Validators.required ] ],
            address         : [ null, [ Validators.required ] ],
            phone         : [ null, [ Validators.required ] ],
            email            : [ null, [ Validators.required ] ],
            password         : [ null, [ Validators.required ] ],
            checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
            dateOfBirth            : [  null, [ Validators.required ] ]
        });
    }
}    