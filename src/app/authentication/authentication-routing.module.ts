import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { Login3Component } from './login-3/login-3.component';
 
import { SignUp3Component } from './sign-up-3/sign-up-3.component';
import { SignUp1Component } from './sign-up-1/sign-up-1.component';
import { Login1Component } from './login-1/login-1.component';
 
const routes: Routes = [
     
    {
        path: 'login-user',
        component: Login3Component,
        data: {
            title: 'Login 3'
        }
    },
   
    {
        path: 'register-user',
        component: SignUp3Component,
        data: {
            title: 'Sign Up 2'
        }
    },
    {
        path: 'login-doctor',
        component: Login1Component,
        data: {
            title: 'Login 3'
        }
    },
   
    {
        path: 'register-doctor',
        component: SignUp1Component,
        data: {
            title: 'Sign Up 2'
        }
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthenticationRoutingModule { }
