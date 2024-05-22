import { Routes, RouterModule } from '@angular/router';

export const FullLayout_ROUTES: Routes = [
    {
        path: 'site',
        loadChildren: () => import('../../site/site.module').then(m => m.SiteModule)
    },
    {
        path: 'authentication',
        loadChildren: () => import('../../authentication/authentication.module').then(m => m.AuthenticationModule)
    }
];