import { AuthService } from './services';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainComponent, NotesComponent, AboutComponent, AuthComponent } from './containers';


// export const routes: ModuleWithProviders = RouterModule.forRoot([
//     {
//         path: '',
//         component: MainComponent,
//         canActivate: [AuthService],
//         children: [
//             { path: '', component: NotesComponent },
//             { path: 'about', component: AboutComponent }
//         ]
//     },
//     { path: 'auth', component: AuthComponent },
//     { path: '**', redirectTo: '' }
// ]);
export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthService],
        children: [
            { path: '', component: NotesComponent },
            { path: 'about', component: AboutComponent }
        ]
    },
    { path: 'auth', component: AuthComponent },
    { path: '**', redirectTo: '' }
];
