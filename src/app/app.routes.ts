import { Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/auth.guard';
import { HomeComponent } from './components/pages/home/home.component';
import { FleetComponent } from './components/pages/fleet/fleet.component';
import { VehiclesComponent } from './components/pages/vehicles/vehicles.component';
import { VehiclesNewComponent } from './components/pages/vehicles/vehicles-new/vehicles-new.component';
import { DriversComponent } from './components/pages/drivers/drivers.component';
import { DriversNewComponent } from './components/pages/drivers/drivers-new/drivers-new.component';
import { AssetsComponent } from './components/pages/assets/assets.component';
import { AssetsNewComponent } from './components/pages/assets/assets-new/assets-new.component';
import { ConformityOverviewComponent } from './components/pages/conformity/conformity-overview/conformity-overview.component';
import { MaintenanceComponent } from './components/pages/maintenance/maintenance.component';
import { AuthComponent } from './components/pages/auth/auth.component';

export const routes: Routes = [
  {
    path: 'auth',
    title: 'Авторизация',
    component: AuthComponent,
  },
  {
    path: 'home',
    title: 'Главная страница',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'fleet',
    title: 'Обзор',
    component: FleetComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'vehicles',
    title: 'Список транспорта',
    component: VehiclesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'new',
        title: 'Новый транспорт',
        component: VehiclesNewComponent,
      },
    ],
  },
  {
    path: 'drivers',
    title: 'Список водителей',
    component: DriversComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'new',
        title: 'Новый водитель',
        component: DriversNewComponent,
      },
    ],
  },
  {
    path: 'assets',
    title: 'Список грузов',
    component: AssetsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'new', title: 'Новый груз', component: AssetsNewComponent },
    ],
  },
  {
    path: 'conformity',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'overview',
        title: 'Сводка',
        component: ConformityOverviewComponent,
      },
      { path: 'logs', title: 'Журнал', component: ConformityOverviewComponent },
    ],
  },
  {
    path: 'maintenance',
    title: 'Обслуживание',
    component: MaintenanceComponent,
    canActivate: [AuthGuard],
  },

  // Редирект с невалидного URL на /home
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
