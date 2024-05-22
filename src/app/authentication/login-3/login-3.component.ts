import { Component } from '@angular/core'
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AUTH_URL } from 'src/app/shared/config/url.config';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';


@Component({
    templateUrl: './login-3.component.html'
})

export class Login3Component {
    loginForm: FormGroup;

    submitForm(): void {
        for (const i in this.loginForm.controls) {
            this.loginForm.controls[ i ].markAsDirty();
            this.loginForm.controls[ i ].updateValueAndValidity();
        }
       
        let url=`${AUTH_URL}/security/api/auth/patient/login`
        this.authenticationService.login(url,this.loginForm.value.email,this.loginForm.value.password).subscribe(res=>{
            this.router.navigate(['/apps/my-profil'])
             
        },((error)=>{
            this.message.error(error.error)
       }))
   }
    constructor(private message: NzMessageService,private fb: FormBuilder,private router:Router,private authenticationService:AuthenticationService) {
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required ] ]
        });
    
        this.authenticationService.roleSubject.subscribe(res=>{
            if (res) {
                switch (res) {
                    case 'patient':
                        this.router.navigate(['/apps/my-profil'])
                        break;
                    case'healthcareProfessional':
                    this.router.navigate(['/apps/patients'])
                    default:
                        // Code to handle when res doesn't match any case
                        break;
                }
            }
    })
    }

}    