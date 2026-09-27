import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout';
import { DashboardComponent } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            // Define child routes here
            { path: 'dashboard', component: DashboardComponent },
            // {path: 'employees', component: EmployeesComponent},
        ]
    }
];
