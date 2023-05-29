/* eslint-disable @nx/enforce-module-boundaries */
import { FormSharedModule } from './../../projects/form/base-eform/src/app/app.module';
import { AdminSharedModule} from './../../projects/admin/base-desktop/src/app/app.module';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const appRoutes: Route[] = [
    {
        path: '',
        component: LandingComponent,
        children:[
            {
                path: 'admin',
                loadChildren: () => import('../../projects/admin/base-desktop/src/app/app.module').then(m => m.AdminSharedModule),
                pathMatch: 'full'
            },
            {
                path: 'form',
                loadChildren: () => import('../../projects/form/base-eform/src/app/app.module').then(m => m.FormSharedModule),
                pathMatch: 'full'
            },
        ]
      },
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        AdminSharedModule.forRoot(),
        FormSharedModule.forRoot()
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}
